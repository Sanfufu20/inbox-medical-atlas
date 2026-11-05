import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import matter from 'gray-matter';

const root = path.resolve(import.meta.dirname, '..');
const input = process.argv[2];
if (!input) throw new Error('Usage: npm run import -- /path/to/obsidian-vault');
const vault = path.resolve(input);
const assetPolicy=JSON.parse(await fs.readFile(path.join(root,'asset-policy.json'),'utf8'));
const seenImages=new Map();
const allowedDirectories = new Set(['Disease', 'Workup', 'Test', 'Drug', 'Intervention', 'MOC', 'Drafts']);
const allowedRoot = new Set(['CONTEXT.md', 'README 使用說明.md', 'OSCE 拆解法.md', '禁忌選項.md']);
const manifest = { snapshotDate: '2026-11-05', source: 'Obsidian Inbox 公開副本', notes: [], exclusions: ['隱藏設定與聊天紀錄', '原 Git 歷史', '歡迎範例、空檔與獨立題庫 HTML'], redactions: [], metadataFormatting: [] };
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
async function walk(dir) {
  const result = [];
  for (const item of await fs.readdir(dir, {withFileTypes:true})) {
    if (item.name.startsWith('.') || item.isSymbolicLink()) continue;
    const full = path.join(dir,item.name);
    if (item.isDirectory()) result.push(...await walk(full));
    else if (item.isFile()) result.push(full);
  }
  return result;
}
await fs.mkdir(path.join(root,'content'),{recursive:true});
await fs.mkdir(path.join(root,'templates'),{recursive:true});
await fs.mkdir(path.join(root,'assets/notes'),{recursive:true});
await fs.mkdir(path.join(root,'data'),{recursive:true});
for (const file of await walk(vault)) {
  const relative=path.relative(vault,file).split(path.sep).join('/');
  const top=relative.split('/')[0];
  if ((top==='assets'||allowedDirectories.has(top)) && /\.(png|jpe?g|svg)$/i.test(file)) {
    const destination=path.join(root,'assets/notes',path.basename(file));
    if(assetPolicy.excluded[path.basename(file)]){await fs.rm(destination,{force:true});continue;}
    const contentHash=hash(await fs.readFile(file));
    if(seenImages.has(path.basename(file))&&seenImages.get(path.basename(file))!==contentHash)throw new Error('Image basename collision: '+relative);
    seenImages.set(path.basename(file),contentHash);
    await fs.copyFile(file,destination);
    continue;
  }
  if (!file.endsWith('.md')) continue;
  if (!allowedDirectories.has(top) && !allowedRoot.has(relative) && top!=='_templates') continue;
  const original=await fs.readFile(file,'utf8');
  if (!original.trim()) {manifest.exclusions.push(relative+'（空檔）');continue;}
  let text=original.replace(/\[([^\]]+)\]\(file:\/\/\/[^)]+\)/g,(_,label)=>{
    manifest.redactions.push({file:relative,kind:'本機檔案 URI',replacement:label+'（本機參考資料）'});
    return label+'（本機參考資料）';
  });
  for(const [name,rule] of Object.entries(assetPolicy.excluded)){
    const safe=name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    text=text.replace(new RegExp('!\\[([^\\]]*)\\]\\([^)]*'+safe+'\\)','g'),(_,label)=>{
      manifest.redactions.push({file:relative,kind:'含識別標記的圖像',replacement:name+'：只保留原來源連結'});
      return `[${label}：原始來源](${rule.sourceUrl})（${rule.reason}）`;
    });
  }
  if (/(?:病歷號|MRN|patient\s*(?:id|name)|身分證|身份證|床號)\s*[:：]\s*\S+/i.test(text)) throw new Error('Review possible personal identifier before importing: '+relative);
  if (/(?:sk-[A-Za-z0-9_-]{20,}|gh[pousr]_[A-Za-z0-9]{25,}|-----BEGIN (?:RSA |EC )?PRIVATE KEY-----)/.test(text)) throw new Error('Secret detected in '+relative);
  if (/file:\/\/\/|\/Users\//.test(text)) throw new Error('Review unresolved local path in '+relative);
  try { matter(text); } catch (initialError) {
    const end=text.indexOf('\n---',4);
    if(!text.startsWith('---')||end<0)throw initialError;
    const front=text.slice(0,end).replace(/^(source|description):[ \t]+([^\n]+)$/gm,(line,key,value)=>{
      if(/^["'\[\{|>]/.test(value.trim()))return line;
      return key+': '+JSON.stringify(value);
    });
    const repaired=front+text.slice(end);
    matter(repaired);
    text=repaired;
    manifest.metadataFormatting.push({file:relative,change:'含冒號的來源欄位加上 YAML 引號；內容不變'});
  }
  const destination=top==='_templates' ? path.join(root,'templates',path.basename(file)) : path.join(root,'content',relative);
  await fs.mkdir(path.dirname(destination),{recursive:true});
  await fs.writeFile(destination,text);
  if (top!=='_templates') manifest.notes.push({path:relative,sourceSha256:hash(original),publicSha256:hash(text)});
}
manifest.notes.sort((a,b)=>a.path.localeCompare(b.path,'en'));
await fs.writeFile(path.join(root,'data/import-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(`Imported ${manifest.notes.length} notes. Original vault unchanged. Redactions: ${manifest.redactions.length}.`);
