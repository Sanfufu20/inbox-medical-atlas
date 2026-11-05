(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const storeKey='inbox-medical-atlas:reading-list:v1';
  let saved=new Set();
  try{const stored=JSON.parse(localStorage.getItem(storeKey)||'[]');if(Array.isArray(stored))saved=new Set(stored.filter(x=>typeof x==='string'));}catch{}
  const paintSaved=()=>{
    document.querySelectorAll('[data-save]').forEach(button=>{
      const active=saved.has(button.dataset.save);button.setAttribute('aria-pressed',String(active));
      const label=button.querySelector('span');if(label)label.textContent=active?'已加入閱讀清單':'加入閱讀清單';
    });
    document.querySelectorAll('.saved-count').forEach(el=>{el.textContent=saved.size?String(saved.size):'';});
  };
  let filterHome=()=>{};
  document.querySelectorAll('[data-save]').forEach(button=>button.addEventListener('click',()=>{
    const id=button.dataset.save;saved.has(id)?saved.delete(id):saved.add(id);
    try{localStorage.setItem(storeKey,JSON.stringify([...saved]));}catch{}
    paintSaved();filterHome();
  }));
  paintSaved();
  if(document.body.dataset.page==='home'){
    const params=new URLSearchParams(location.search);
    let angle=params.get('angle')||'all';
    let view=params.get('view')||'all';
    if(view==='moc')angle='MOC';
    const labels={all:'全部筆記',Workup:'主訴流程',Disease:'疾病',Test:'檢查',Drug:'藥物',Intervention:'處置',MOC:'主題索引',Guide:'使用導覽',Drafts:'草稿'};
    if(!(angle in labels))angle='all';
    const search=document.querySelector('#search'),topic=document.querySelector('#topic'),status=document.querySelector('#search-status');
    search.value=params.get('q')||'';topic.value=params.get('topic')||'all';if(!topic.value)topic.value='all';
    let data=null,limit=24;
    const cards=[...document.querySelectorAll('[data-note]')];
    const indexById=new Map();
    const norm=s=>String(s).normalize('NFKC').toLocaleLowerCase();
    filterHome=(updateUrl=false)=>{
      const q=norm(search.value.trim()),terms=q.split(/\s+/).filter(Boolean);
      const matches=[];
      cards.forEach(card=>{
        const n=indexById.get(card.dataset.note);
        let match=angle==='all'||card.dataset.kind===angle;
        if(view==='saved')match=match&&saved.has(card.dataset.note);
        if(topic.value!=='all')match=match&&Boolean(n?.topics.includes(topic.value));
        if(terms.length){const text=n?.searchText||norm(card.textContent);match=match&&terms.every(term=>text.includes(term));}
        card.hidden=true;
        if(match){const title=norm(n?.title||''),full=norm(n?.fullTitle||''),aliases=(n?.aliases||[]).map(norm);const score=!q?0:title===q?100:aliases.includes(q)?90:title.includes(q)?75:aliases.some(a=>a.includes(q))?65:full.includes(q)?60:1;matches.push({card,score});}
      });
      matches.sort((a,b)=>b.score-a.score);
      const grid=document.querySelector('#note-grid');
      matches.forEach(({card},i)=>{card.hidden=i>=limit;grid.append(card);});
      const visible=matches.length;
      const title=view==='saved'?'閱讀清單':labels[angle];
      document.querySelector('#view-title').textContent=title;
      document.querySelector('#view-caption').textContent=view==='saved'?'PICK UP WHERE YOU LEFT OFF':angle==='MOC'?'MAPS OF CONTENT':'THE NOTE COLLECTION';
      document.querySelector('#result-count').textContent=`${visible} 篇${visible>limit?` · 顯示 ${limit} 篇`:''}`;
      document.querySelector('#empty-state').hidden=visible!==0;
      const more=document.querySelector('#load-more');more.hidden=visible<=limit;more.textContent=`顯示更多筆記（還有 ${Math.max(0,visible-limit)} 篇）`;
      document.querySelectorAll('[data-angle]').forEach(button=>{const active=button.dataset.angle===angle;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
      if(updateUrl){const next=new URLSearchParams();if(angle!=='all')next.set('angle',angle);if(view==='saved')next.set('view','saved');if(search.value.trim())next.set('q',search.value.trim());if(topic.value!=='all')next.set('topic',topic.value);history.replaceState(null,'',location.pathname+(next.size?'?'+next.toString():''));}
    };
    document.querySelectorAll('[data-angle]').forEach(button=>button.addEventListener('click',()=>{angle=button.dataset.angle;view='all';limit=24;filterHome(true);}));
    document.querySelectorAll('[data-angle-link]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();angle=link.dataset.angleLink;view='all';limit=24;filterHome(true);document.querySelector('.catalog-shell').scrollIntoView({behavior:'instant',block:'start'});}));
    search.addEventListener('input',()=>{limit=24;filterHome(true);});
    topic.addEventListener('change',()=>{limit=24;filterHome(true);});
    document.querySelector('#load-more').addEventListener('click',()=>{limit+=24;filterHome();});
    document.querySelector('#clear-filters').addEventListener('click',()=>{angle='all';view='all';search.value='';topic.value='all';limit=24;filterHome(true);});
    document.addEventListener('keydown',event=>{if(event.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){event.preventDefault();search.focus();}if(event.key==='Escape'&&document.activeElement===search){search.value='';filterHome(true);search.blur();}});
    filterHome();
    fetch('data/search-index.json').then(response=>{if(!response.ok)throw new Error();return response.json();}).then(rows=>{
      data=rows;for(const n of rows){n.searchText=norm([n.title,n.fullTitle,...n.aliases,n.text].join(' '));indexById.set(n.id,n);}filterHome();
    }).catch(()=>{status.hidden=false;status.textContent='全文索引暫時無法載入；目前仍可搜尋畫面上的標題與摘要，或直接閱讀筆記。';});
  }
  if(document.body.dataset.page==='note'){
    const headings=[...document.querySelectorAll('.prose h2,.prose h3')];
    const toc=[...document.querySelectorAll('.reading-toc nav a')];
    if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){toc.forEach(a=>a.classList.toggle('active',decodeURIComponent(a.hash.slice(1))===entry.target.id));}}},{rootMargin:'-90px 0px -65% 0px'});headings.forEach(h=>observer.observe(h));}
    window.addEventListener('DOMContentLoaded',async()=>{
      const nodes=[...document.querySelectorAll('.mermaid')];
      if(!nodes.length||!window.mermaid)return;
      mermaid.initialize({startOnLoad:false,securityLevel:'strict',theme:'base',fontFamily:'PingFang TC, system-ui, sans-serif',themeVariables:{primaryColor:'#eeedf7',primaryTextColor:'#202538',primaryBorderColor:'#9a93bb',lineColor:'#757c90',secondaryColor:'#edf5f4',tertiaryColor:'#f7f1e8'},flowchart:{htmlLabels:true,useMaxWidth:true},suppressErrorRendering:true});
      for(const [i,node] of nodes.entries()){
        const original=node.textContent;
        try{const result=await mermaid.render('diagram-'+i,original);node.innerHTML=result.svg;node.classList.add('diagram-ready');node.dataset.rendered='true';result.bindFunctions?.(node);}catch(error){node.textContent=original;node.classList.add('diagram-fallback');node.dataset.rendered='false';const caption=node.parentElement.querySelector('figcaption');if(caption)caption.textContent='這張原筆記流程圖暫時無法繪製，以下保留原始內容。';}
      }
    });
  }
})();
