import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import footnote from 'markdown-it-footnote';
import texmath from 'markdown-it-texmath';
import katex from 'katex';
import sanitizeHtml from 'sanitize-html';

const root=path.resolve(import.meta.dirname,'..');
const config=JSON.parse(await fs.readFile(path.join(root,'site.config.json'),'utf8'));
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const normalize=s=>String(s).normalize('NFKC').trim().toLowerCase();
const slug=s=>String(s).normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,'-').replace(/^-|-$/g,'');
const date=s=>s instanceof Date?s.toISOString().slice(0,10):String(s??'').slice(0,10);
const arr=x=>x==null?[]:Array.isArray(x)?x.map(String):[String(x)];
const clean=s=>String(s).replace(/!\[\[[^\]]+\]\]/g,'').replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,(_,a,b)=>b||a).replace(/\[([^\]]+)\]\([^)]+\)/g,'$1').replace(/[`*_#>]/g,'').replace(/\[![^\]]+\]/g,'').replace(/\s+/g,' ').trim();
const topicLabels={Cardio:'心臟',Hema:'血液',GI:'腸胃肝膽',Endo:'內分泌',Nephro:'腎臟',Resp:'胸腔',Pediatrics:'兒科',Breast:'乳房',General:'一般內科',immune:'免疫',Surgery:'外科',CardiacSurgery:'心臟外科',BreastSurgery:'乳房外科',ThyroidSurgery:'甲狀腺外科',TransplantSurgery:'移植外科',Neurosurgery:'神經外科',Onco:'腫瘤'};
const kindLabels={...Object.fromEntries(config.angles.map(a=>[a.id,a.zh])),MOC:'主題索引',Guide:'使用導覽',Drafts:'草稿'};
async function walk(dir){const all=[];for(const e of await fs.readdir(dir,{withFileTypes:true})){if(e.name.startsWith('.'))continue;const p=path.join(dir,e.name);if(e.isDirectory())all.push(...await walk(p));else if(e.name.endsWith('.md'))all.push(p);}return all.sort();}
const notes=[];
for(const file of await walk(path.join(root,'content'))){
  const raw=await fs.readFile(file,'utf8');
  if(!raw.trim())continue;
  let parsed;try{parsed=matter(raw);}catch(error){throw new Error(`Invalid frontmatter: ${path.relative(root,file)}: ${error.message}`);}
  const relative=path.relative(path.join(root,'content'),file).split(path.sep).join('/');
  const stem=path.basename(file,'.md');
  let kind=relative.split('/')[0];
  if(!kindLabels[kind])kind='Guide';
  if(/Category$/.test(stem)||arr(parsed.data.tags).some(t=>/(^|\/)MOC($|\/)/i.test(t)))kind='MOC';
  const heading=parsed.content.match(/^# (.+)$/m)?.[1]||stem;
  const title=clean(heading).replace(/^[^\p{L}\p{N}]+/u,'').trim();
  const abstract=parsed.content.match(/^> \[!abstract\][^\n]*\n((?:>[^\n]*\n?)+)/m)?.[1];
  const excerpt=clean(abstract||parsed.content.replace(/^# .+$/m,'').split(/\n\s*\n/).find(p=>p.trim()&&!/^---|^```/.test(p.trim()))||'').slice(0,170);
  const topics=arr(parsed.data.services);
  if(relative.startsWith('Disease/')&&relative.split('/').length>2)topics.push(relative.split('/')[1]);
  const n={id:slug(relative.replace(/\.md$/,'')),path:relative,stem,title,kind,aliases:arr(parsed.data.aliases),tags:arr(parsed.data.tags),topics:[...new Set(topics)],status:kind==='Drafts'?'草稿':String(parsed.data.status||'未標示'),updated:date(parsed.data.updated||parsed.data.created),source:parsed.data.source?String(parsed.data.source):'',body:parsed.content,raw,excerpt,data:parsed.data,edges:new Set(),backlinks:[],headings:[]};
  if(notes.some(x=>x.id===n.id))n.id+='-'+crypto.createHash('sha1').update(relative).digest('hex').slice(0,6);
  notes.push(n);
}
const lookup=new Map();
for(const n of notes){for(const key of [n.stem,n.path,n.path.replace(/\.md$/,''),n.title,...n.aliases]){const norm=normalize(key);const existing=lookup.get(norm)||new Set();existing.add(n.id);lookup.set(norm,existing);}}
const byId=new Map(notes.map(n=>[n.id,n]));
function resolve(target,from){
  const without=String(target).replace(/\\\|/g,'|').replace(/\.md$/i,'').trim();
  if(!without)return from;
  const values=lookup.get(normalize(without));
  if(values?.size===1)return byId.get([...values][0]);
  return null;
}
const missing=new Map();
const imageErrors=[];
const mermaidBlocks=[];
const allImages=new Set(await fs.readdir(path.join(root,'assets/notes')));
const md=new MarkdownIt({html:true,linkify:true,breaks:false}).use(footnote).use(texmath,{engine:katex,delimiters:'dollars',katexOptions:{throwOnError:false}});
md.inline.ruler.before('link','wikilink',(state,silent)=>{
  const start=state.pos;
  const image=state.src.startsWith('![[',start);
  if(!image&&!state.src.startsWith('[[',start))return false;
  const offset=image?3:2;
  const end=state.src.indexOf(']]',start+offset);
  if(end<0)return false;
  const text=state.src.slice(start+offset,end).replace(/\\\|/g,'|');
  if(text.includes('\n'))return false;
  if(!silent){const token=state.push(image?'wiki_image':'wiki_link','',0);token.meta={text};}
  state.pos=end+2;return true;
});
md.renderer.rules.wiki_link=(tokens,i,options,env)=>{
  const [full,label]=tokens[i].meta.text.split('|');
  const [name,...fragments]=full.split('#');
  const display=label||name||fragments.join('#');
  const target=resolve(name,env.note);
  if(!target){if(name){const k=name.trim();if(!missing.has(k))missing.set(k,new Set());missing.get(k).add(env.note.id);}return `<span class="wiki-pending" title="這篇筆記尚未建立">${esc(display)}<span class="pending-mark" aria-label="待補">↗</span></span>`;}
  const fragment=fragments.length?'#'+encodeURIComponent(slug(fragments.join('#'))):'';
  if(target.id!==env.note.id)env.note.edges.add(target.id);
  return `<a class="wikilink" href="${encodeURIComponent(target.id)}.html${fragment}">${esc(display)}</a>`;
};
md.renderer.rules.wiki_image=(tokens,i,options,env)=>{
  const [src,width]=tokens[i].meta.text.split('|');
  const name=path.posix.basename(src.replace(/\\$/,''));
  if(!src.startsWith('assets/')||!allImages.has(name)){imageErrors.push({note:env.note.path,image:src});return `<span class="image-missing">原筆記圖示待補：${esc(name)}</span>`;}
  const size=/^\d+$/.test(width||'')?` width="${Math.min(Number(width),1100)}"`:'';
  return `<img class="note-image" src="../assets/notes/${encodeURIComponent(name)}" alt="${esc(name.replace(/\.[^.]+$/,'').replaceAll('-',' '))}" loading="lazy" decoding="async"${size}>`;
};
md.core.ruler.before('inline','callouts',state=>{
  const stack=[];
  state.tokens.forEach((t,i)=>{
    if(t.type==='blockquote_open'){
      stack.push(t);const first=state.tokens[i+2];
      if(first?.type==='inline'){
        const m=first.content.match(/^\[!([\w-]+)\][+-]?\s*([^\n]*)(?:\n|$)/);
        if(m){t.meta={callout:m[1],title:m[2]||m[1]};first.content=first.content.slice(m[0].length);if(!first.content){state.tokens[i+1].hidden=true;state.tokens[i+3].hidden=true;}}
      }
    }else if(t.type==='blockquote_close'){t.meta=stack.pop()?.meta;}
  });
});
md.renderer.rules.blockquote_open=(tokens,i)=>tokens[i].meta?.callout?`<aside class="callout callout-${esc(tokens[i].meta.callout)}"><div class="callout-title">${esc(tokens[i].meta.title)}</div>\n`:'<blockquote>\n';
md.renderer.rules.blockquote_close=(tokens,i)=>tokens[i].meta?.callout?'</aside>\n':'</blockquote>\n';
const defaultFence=md.renderer.rules.fence;
md.renderer.rules.fence=(tokens,i,options,env,self)=>{
  const token=tokens[i],type=token.info.trim();
  if(type==='mermaid'){const key=env.note.id+'-'+env.graphs++;mermaidBlocks.push({id:key,note:env.note.id,source:token.content});return `<figure class="diagram"><pre class="mermaid" data-graph-id="${key}">${esc(token.content)}</pre><figcaption>筆記中的流程與關係</figcaption></figure>`;}
  if(type==='query'){
    const q=token.content.trim();let results;
    if(q==='tag:#禁忌')results=notes.filter(n=>n.tags.some(t=>t.replace(/^#/,'')==='禁忌'));
    else if(q==='"絕對不可"')results=notes.filter(n=>n.id!==env.note.id&&n.body.includes('絕對不可'));
    if(results)return `<div class="query-results"><p class="muted">收錄 ${results.length} 篇相關筆記</p><ul>${results.map(n=>`<li><a href="${encodeURIComponent(n.id)}.html">${esc(n.stem)}</a></li>`).join('')}</ul></div>`;
  }
  return defaultFence(tokens,i,options,env,self);
};
const headingOpen=md.renderer.rules.heading_open||((tokens,i,options,env,self)=>self.renderToken(tokens,i,options));
md.renderer.rules.heading_open=(tokens,i,options,env,self)=>{
  const label=clean(tokens[i+1]?.content||'');let id=slug(label);const seen=env.headingCounts.get(id)||0;env.headingCounts.set(id,seen+1);if(seen)id+='-'+seen;
  tokens[i].attrSet('id',id);
  if(['h2','h3'].includes(tokens[i].tag))env.note.headings.push({level:Number(tokens[i].tag[1]),id,label});
  return headingOpen(tokens,i,options,env,self);
};
const linkOpen=md.renderer.rules.link_open||((tokens,i,options,env,self)=>self.renderToken(tokens,i,options));
md.renderer.rules.link_open=(tokens,i,options,env,self)=>{const href=tokens[i].attrGet('href')||'';if(/^https?:/.test(href)){tokens[i].attrSet('target','_blank');tokens[i].attrSet('rel','noopener noreferrer');}return linkOpen(tokens,i,options,env,self);};
const defaultImage=md.renderer.rules.image;
md.renderer.rules.image=(tokens,i,options,env,self)=>{
  const token=tokens[i],src=token.attrGet('src')||'';
  if(!/^https?:/.test(src)){
    const name=path.posix.basename(decodeURIComponent(src));
    if(allImages.has(name))token.attrSet('src','../assets/notes/'+encodeURIComponent(name));
    else imageErrors.push({note:env.note.path,image:src});
  }
  token.attrSet('class','note-image');token.attrSet('loading','lazy');token.attrSet('decoding','async');
  return defaultImage(tokens,i,options,env,self);
};
for(const n of notes){
  let body=n.body.replace(/^\s*# [^\n]+\n/,'');
  body=body.split('\n').map(line=>line.startsWith('|')?line.replace(/!?\[\[[^\]]+\]\]/g,m=>m.replace(/(?<!\\)\|/g,'\\|')):line).join('\n');
  const rendered=md.render(body,{note:n,graphs:0,headingCounts:new Map()});
  n.html=sanitizeHtml(rendered,{allowedTags:[...sanitizeHtml.defaults.allowedTags,'img','aside','figure','figcaption','span','div','details','summary','input','math','semantics','annotation','mrow','mi','mn','mo','msup','msub','mfrac','mtext','mstyle','mspace','mover','munder','msqrt','mtable','mtr','mtd','menclose','mpadded','mphantom','mroot','msubsup','munderover'],allowedAttributes:{'*':['class','id','title','aria-label','aria-hidden','style','data-graph-id'],a:['href','target','rel'],img:['src','alt','width','height','loading','decoding'],input:['type','checked','disabled'],math:['xmlns'],annotation:['encoding'],mspace:['width','height','depth'],mstyle:['mathsize','scriptlevel','displaystyle'],mo:['stretchy','fence','separator','lspace','rspace'],mpadded:['width','height','depth','lspace','voffset']},allowedSchemes:['http','https','mailto'],allowProtocolRelative:false});
  for(const value of Object.values(n.data))for(const match of JSON.stringify(value??'').matchAll(/\[\[([^\]#|]+)(?:[^\]]*)\]\]/g)){const target=resolve(match[1],n);if(target&&target.id!==n.id)n.edges.add(target.id);}
}
for(const n of notes)for(const id of n.edges)byId.get(id).backlinks.push(n.id);
const headingRepairs=[];
for(const n of notes)n.html=n.html.replace(/href="([^"#]+\.html)#([^"#]+)"/g,(full,url,fragment)=>{
  const target=byId.get(decodeURIComponent(url.replace(/\.html$/,'')));
  if(!target)return full;
  const wanted=decodeURIComponent(fragment);
  if(target.headings.some(h=>h.id===wanted))return full;
  const candidates=target.headings.filter(h=>h.id.startsWith(wanted+'-'));
  if(candidates.length===1){headingRepairs.push({note:n.path,target:target.path,from:wanted,to:candidates[0].id});return `href="${url}#${encodeURIComponent(candidates[0].id)}"`;}
  if(target.html.includes(`id="${wanted}"`))return full;
  headingRepairs.push({note:n.path,target:target.path,from:wanted,to:'頁首'});
  return `href="${url}"`;
});
const count=kind=>notes.filter(n=>n.kind===kind).length;
const iconBookmark='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4.5h12v16l-6-4-6 4z"/></svg>';
const iconSearch='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg>';
const mark='<span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>';
function head(title,prefix='',extra=''){return `<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${esc(config.description)}"><meta name="theme-color" content="#f5f6fa"><title>${esc(title)} · INBOX 醫學筆記</title><link rel="icon" href="${prefix}assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="${prefix}assets/site.css"><link rel="stylesheet" href="${prefix}assets/vendor/katex/katex.min.css"><script defer src="${prefix}assets/site.js"></script>${extra}</head>`;}
function header(prefix='',isHome=false){return `<a class="skip-link" href="#main">跳到主要內容</a><header class="site-header"><a class="brand" href="${prefix}index.html">${mark}<span>INBOX<small>醫學筆記</small></span></a><nav aria-label="主要導覽"><a href="${prefix}index.html" ${isHome?'class="current"':''}>筆記庫</a><a href="${prefix}index.html?view=moc">主題索引</a><a href="${prefix}index.html?view=saved">閱讀清單<span class="saved-count"></span></a></nav><a class="header-source" href="${config.repository}" target="_blank" rel="noopener">GitHub <span aria-hidden="true">↗</span></a></header>`;}
function footer(prefix=''){return `<footer class="site-footer"><div><strong>INBOX</strong><span>從問題出發，讓知識彼此連結。</span></div><p>個人醫學學習筆記。整理狀態沿用原筆記，本次網站轉換未重新完成醫學內容驗證；不作個別病人的診療依據。</p><div class="footer-links"><a href="${prefix}notes/${encodeURIComponent(notes.find(n=>n.stem==='README 使用說明')?.id||'')}.html">這份筆記庫怎麼用</a><a href="${config.repository}/blob/main/AGENTS.md" target="_blank" rel="noopener">專案規則 ↗</a><span>公開副本 · ${config.snapshotDate}</span></div></footer>`;}
function bookmark(n,full=false){return `<button class="bookmark js-only" data-save="${esc(n.id)}" aria-pressed="false" aria-label="收藏 ${esc(n.stem)}">${iconBookmark}${full?'<span>加入閱讀清單</span>':''}</button>`;}
function card(n){return `<article class="note-card" data-note="${esc(n.id)}" data-kind="${esc(n.kind)}" style="--angle-color:${config.angles.find(a=>a.id===n.kind)?.color||'#757c90'}"><div class="card-top"><span class="kind-label">${esc(kindLabels[n.kind])}</span>${bookmark(n)}</div><a class="card-link" href="notes/${encodeURIComponent(n.id)}.html"><h3>${esc(n.stem)}</h3><p class="card-title-translation">${esc(n.title!==n.stem?n.title.replace(n.stem,'').replace(/^[\s|｜·:：—–-]+/,''):'')}</p><p class="card-excerpt">${esc(n.excerpt)}</p></a><div class="card-bottom"><span>${esc(n.topics.slice(0,2).map(x=>topicLabels[x]||x).join(' · ')||kindLabels[n.kind])}</span><span>${n.edges.size} 個連結 <span aria-hidden="true">↗</span></span></div></article>`;}
const topicOptions=[...new Set(notes.flatMap(n=>n.topics))].sort((a,b)=>(topicLabels[a]||a).localeCompare(topicLabels[b]||b,'zh-Hant'));
await fs.mkdir(path.join(root,'notes'),{recursive:true});
await fs.mkdir(path.join(root,'data'),{recursive:true});
await fs.mkdir(path.join(root,'assets/vendor/katex'),{recursive:true});
await fs.copyFile(path.join(root,'node_modules/mermaid/dist/mermaid.min.js'),path.join(root,'assets/vendor/mermaid.min.js'));
await fs.copyFile(path.join(root,'node_modules/mermaid/LICENSE'),path.join(root,'assets/vendor/MERMAID-LICENSE'));
await fs.copyFile(path.join(root,'node_modules/katex/dist/katex.min.css'),path.join(root,'assets/vendor/katex/katex.min.css'));
await fs.cp(path.join(root,'node_modules/katex/dist/fonts'),path.join(root,'assets/vendor/katex/fonts'),{recursive:true});
await fs.copyFile(path.join(root,'node_modules/katex/LICENSE'),path.join(root,'assets/vendor/katex/LICENSE'));
await fs.writeFile(path.join(root,'assets/favicon.svg'),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#202538"/><path d="M12 12h7v24h-7zm9 0h7v24h-7zm9 0h7v24h-7z" fill="#b9b5e3"/><path d="M30 27h7v9h-7z" fill="#83b9b6"/></svg>`);
const home=`${head('筆記庫')}
<body class="home-page" data-page="home">${header('',true)}
<main id="main"><section class="home-intro"><div><p class="eyebrow">A PERSONAL KNOWLEDGE ATLAS</p><h1>把每一次學到的，<br>放回知識的脈絡。</h1><p class="intro-copy">從主訴出發，循著疾病、檢查、藥物與處置閱讀。<br class="desktop-only">一份持續累積的醫學筆記，保留知識之間的連結。</p></div><div class="index-spine" aria-label="筆記庫的五個角度">${config.angles.map(a=>`<a href="?angle=${a.id}" data-angle-link="${a.id}" style="--angle-color:${a.color}"><span>${a.en}</span><strong>${a.zh}</strong><small>${count(a.id)} 篇</small><b aria-hidden="true">↗</b></a>`).join('')}</div></section>
<section class="catalog-shell" aria-label="瀏覽筆記"><aside class="catalog-sidebar"><p class="sidebar-label">閱讀入口</p><button class="filter-button active" data-angle="all" aria-pressed="true">全部筆記 <span>${notes.length}</span></button>${config.angles.map(a=>`<button class="filter-button" data-angle="${a.id}" aria-pressed="false"><i style="background:${a.color}"></i>${a.zh}<span>${count(a.id)}</span></button>`).join('')}<div class="sidebar-divider"></div><button class="filter-button" data-angle="MOC" aria-pressed="false">主題索引 <span>${count('MOC')}</span></button><button class="filter-button" data-angle="Guide" aria-pressed="false">使用導覽 <span>${count('Guide')}</span></button><button class="filter-button" data-angle="Drafts" aria-pressed="false">草稿 <span>${count('Drafts')}</span></button><div class="sidebar-note"><span class="tiny-mark" aria-hidden="true">↗</span><p>已有的筆記可以點進去。<br>「待補」保留下一次學習的方向。</p><a href="notes/pending.html">查看待補連結 →</a></div></aside>
<div class="catalog-main"><div class="search-line"><label class="search-field">${iconSearch}<span class="sr-only">搜尋筆記</span><input id="search" type="search" placeholder="搜尋筆記、中英文名稱或關鍵字…" autocomplete="off" spellcheck="false"><kbd aria-hidden="true">/</kbd></label><label class="topic-field"><span class="sr-only">主題篩選</span><select id="topic"><option value="all">所有主題</option>${topicOptions.map(t=>`<option value="${esc(t)}">${esc(topicLabels[t]||t)}</option>`).join('')}</select></label></div><div class="catalog-heading"><div><p class="eyebrow" id="view-caption">THE NOTE COLLECTION</p><h2 id="view-title">全部筆記</h2></div><p id="result-count" aria-live="polite">${notes.length} 篇</p></div><p id="search-status" class="muted" role="status" hidden></p><div class="note-grid" id="note-grid">${[...notes].sort((a,b)=>a.stem.localeCompare(b.stem,'en')).map(card).join('')}</div><div id="empty-state" class="empty-state" hidden><span aria-hidden="true">∅</span><h3>沒有符合條件的筆記</h3><p>換個關鍵字、選擇所有主題，或先加入一篇閱讀清單。</p><button id="clear-filters" class="text-button">清除篩選</button></div><button id="load-more" class="load-more js-only" hidden>顯示更多筆記</button></div></section></main>${footer()}</body></html>`;
await fs.writeFile(path.join(root,'index.html'),home);
for(const n of notes){
  const neighbors=[...n.edges].map(x=>byId.get(x));
  const relations=neighbors.sort((a,b)=>a.stem.localeCompare(b.stem,'en'));
  const mermaid=n.body.includes('```mermaid')?'<script defer src="../assets/vendor/mermaid.min.js"></script>':'';
  const page=`${head(n.stem,'../',mermaid)}<body class="article-page" data-page="note" data-note-id="${esc(n.id)}">${header('../')}<main id="main" class="reading-shell"><aside class="reading-toc"><a class="back-link" href="../index.html?angle=${n.kind}">← ${esc(kindLabels[n.kind])}</a><p class="sidebar-label">本頁內容</p><nav aria-label="本頁目錄">${n.headings.map(h=>`<a class="toc-depth-${h.level}" href="#${encodeURIComponent(h.id)}">${esc(h.label)}</a>`).join('')}</nav></aside><div class="reading-main"><header class="article-header"><div class="article-meta"><span class="kind-pill kind-${n.kind}">${esc(kindLabels[n.kind])}</span><span>${esc(n.topics.map(t=>topicLabels[t]||t).join(' / '))}</span></div><h1>${esc(n.title)}</h1><div class="article-subline"><p>${n.updated?`筆記更新 ${esc(n.updated)}<span>·</span>`:''}整理狀態：${esc(n.status)}</p>${bookmark(n,true)}</div>${n.aliases.length?`<details class="alias-details"><summary>其他名稱 <span>${n.aliases.length}</span></summary><p>${n.aliases.map(esc).join(' · ')}</p></details>`:''}</header><article class="prose">${n.html}</article><section class="note-source"><p class="eyebrow">SOURCE & CONTEXT</p><h2>來源與原始筆記</h2><p>${esc(n.source||'原筆記未另列 source 欄位；內文如有來源，請依原文查閱。')}</p><a href="../content/${n.path.split('/').map(encodeURIComponent).join('/')}" download>下載這篇 Markdown ↗</a><span class="source-note">網站保留原筆記的內容與整理狀態。</span></section><section class="related-section"><div><p class="eyebrow">FOLLOW THE CONNECTIONS</p><h2>循著連結繼續讀</h2></div><div class="related-list">${relations.length?relations.map(r=>`<a href="${encodeURIComponent(r.id)}.html"><span>${esc(kindLabels[r.kind])}</span><strong>${esc(r.stem)}</strong><b aria-hidden="true">↗</b></a>`).join(''):'<p class="muted">目前尚未建立相關筆記連結。</p>'}</div></section><section class="backlinks-section"><h2>哪些筆記連到這裡 <span>${n.backlinks.length}</span></h2><div>${n.backlinks.map(id=>byId.get(id)).map(r=>`<a href="${encodeURIComponent(r.id)}.html">${esc(r.stem)} <span aria-hidden="true">↗</span></a>`).join('')||'<p class="muted">目前沒有其他筆記連到這篇。</p>'}</div></section></div></main>${footer('../')}<a class="back-top" href="#main" aria-label="回到頁首">↑</a></body></html>`;
  await fs.writeFile(path.join(root,'notes',n.id+'.html'),page);
}
const unresolved=[...missing].map(([target,from])=>({target,from:[...from]})).sort((a,b)=>b.from.length-a.from.length||a.target.localeCompare(b.target));
const pending=`${head('待補連結','../')}<body class="article-page" data-page="pending">${header('../')}<main id="main" class="simple-page"><a class="back-link" href="../index.html">← 回到筆記庫</a><p class="eyebrow">ROOM FOR THE NEXT NOTE</p><h1>下一次學習的方向。</h1><p class="intro-copy">這些名稱已出現在筆記中，但還沒有對應專篇。保留它們，讓知識庫的缺口可見；新筆記加入後，連結會在建置時自動接上。</p><div class="pending-list">${unresolved.map(item=>`<section><h2>${esc(item.target)} <span>${item.from.length} 篇提及</span></h2><div>${item.from.map(id=>byId.get(id)).map(n=>`<a href="${encodeURIComponent(n.id)}.html">${esc(n.stem)} ↗</a>`).join('')}</div></section>`).join('')}</div></main>${footer('../')}</body></html>`;
await fs.writeFile(path.join(root,'notes/pending.html'),pending);
const publicIndex=notes.map(n=>({id:n.id,title:n.stem,fullTitle:n.title,aliases:n.aliases,kind:n.kind,topics:n.topics,status:n.status,updated:n.updated,excerpt:n.excerpt,text:clean(n.body.replace(/```[\s\S]*?```/g,'')),url:'notes/'+encodeURIComponent(n.id)+'.html',links:[...n.edges],backlinks:n.backlinks}));
await fs.writeFile(path.join(root,'data/search-index.json'),JSON.stringify(publicIndex)+'\n');
await fs.writeFile(path.join(root,'data/unresolved-links.json'),JSON.stringify(unresolved,null,2)+'\n');
await fs.writeFile(path.join(root,'data/mermaid-diagrams.json'),JSON.stringify(mermaidBlocks)+'\n');
await fs.writeFile(path.join(root,'data/build-report.json'),JSON.stringify({snapshotDate:config.snapshotDate,noteCount:notes.length,kindCounts:Object.fromEntries(Object.keys(kindLabels).map(k=>[k,count(k)])),resolvedLinks:notes.reduce((sum,n)=>sum+n.edges.size,0),unresolvedTargets:unresolved.length,imageErrors,headingRepairs,mermaidDiagrams:mermaidBlocks.length},null,2)+'\n');
console.log(`Built index.html and ${notes.length} notes; ${mermaidBlocks.length} diagrams; ${unresolved.length} existing unwritten targets; ${imageErrors.length} missing images.`);
