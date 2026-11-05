import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve(import.meta.dirname,'..');
const index=JSON.parse(await fs.readFile(path.join(root,'data/search-index.json'),'utf8'));
const report=JSON.parse(await fs.readFile(path.join(root,'data/build-report.json'),'utf8'));
const home=await fs.readFile(path.join(root,'index.html'),'utf8');
const errors=[];
const fragments=[];
const cache=new Map();
const entity=s=>s.replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&#39;',"'");
assert.equal(index.length,report.noteCount,'index count must match build report');
assert(index.length>1,'knowledge site must contain more than a single source note');
assert.equal(new Set(index.map(n=>n.id)).size,index.length,'note identifiers must be unique');
assert.equal(report.imageErrors.length,0,'all embedded images must exist');
for(const n of index){
  assert(home.includes(`data-note="${n.id}"`),`homepage missing ${n.id}`);
  assert(n.text.trim().length>0,`empty note ${n.id}`);
  const html=await fs.readFile(path.join(root,'notes',n.id+'.html'),'utf8');
  cache.set('notes/'+n.id+'.html',html);
  assert(html.includes('class="prose"'),`missing article ${n.id}`);
  assert(!html.includes('class="image-missing"'),`missing image in ${n.id}`);
  for(const target of n.links){const dest=index.find(x=>x.id===target);assert(dest,`unknown edge ${target}`);assert(dest.backlinks.includes(n.id),`missing reciprocal backlink ${n.id} -> ${target}`);}
}
cache.set('index.html',home);
cache.set('notes/pending.html',await fs.readFile(path.join(root,'notes/pending.html'),'utf8'));
for(const [filename,html] of cache){
  if(/file:\/\/\/|\/Users\/[\w]|(?:sk-[A-Za-z0-9_-]{25,}|gh[pousr]_[A-Za-z0-9]{30,})/.test(html))errors.push(filename+': private path or credential');
  for(const m of html.matchAll(/(?:href|src)="([^"<>]+)"/g)){
    const href=entity(m[1]);
    if(/^(https?:|mailto:|data:)/i.test(href))continue;
    if(/^(?:javascript|file):/i.test(href)){errors.push(filename+': prohibited URI');continue;}
    const [before,fragment]=href.split('#');
    const relative=decodeURIComponent(before.split('?')[0]);
    const target=relative?path.posix.normalize(path.posix.join(path.posix.dirname(filename),relative)):filename;
    const absolute=path.resolve(root,target);
    if(!absolute.startsWith(root+path.sep)&&absolute!==root){errors.push(filename+': path leaves project');continue;}
    try{await fs.access(absolute);}catch{errors.push(filename+': missing '+target);continue;}
    if(fragment&&target.endsWith('.html')){
      let dest=cache.get(target);if(dest===undefined){dest=await fs.readFile(absolute,'utf8');cache.set(target,dest);}
      if(!dest.includes(`id="${decodeURIComponent(fragment)}"`))fragments.push({from:filename,to:target,fragment:decodeURIComponent(fragment)});
    }
  }
}
for(const required of ['AGENTS.md','site.config.json','package-lock.json','scripts/build.mjs','scripts/import-vault.mjs'])await fs.access(path.join(root,required));
const result={notes:index.length,pages:cache.size,internalFileErrors:errors,unresolvedHeadingFragments:fragments,reciprocalLinks:true,homepageIncludesEveryNote:true,missingImages:report.imageErrors.length};
await fs.writeFile(path.join(root,'data/validation.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
if(errors.length||fragments.length)process.exitCode=1;
