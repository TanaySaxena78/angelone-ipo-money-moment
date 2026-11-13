/* Ask Angel bottom sheet */
function vAsk(){const on=S.mode==='on',keys=SUGG[S.mode][S.scen],db=on?QA:TODAY_QA;
 const asked=S.chat.map(c=>c.k),left=keys.filter(k=>!asked.includes(k)&&db[k]);
 const bub=S.chat.map(c=>{const q=db[c.k];const i=S.lang==='hi'?1:0;
  return `<div class="bb me">${q.q[i]}</div>`+(c.ans?`<div class="bb" ${q.bad?'style="border:1px solid rgba(255,77,134,.4)"':''}>${q.a[i]}${q.src?`<div class="src">${q.src[i]}</div>`:''}${q.remind?`<button class="sbtn" style="margin-top:9px" data-a="remind">${L('Remind me','याद दिलाएं')}</button>`:''}${q.ipo?`<button class="sbtn" style="margin-top:9px;background:#3A3F4C" data-a="off-end">View IPO listings</button>`:''}</div>`:`<div class="bb"><span class="dots"><span></span><span></span><span></span></span></div>`)}).join('');
 return `<div class="scrim" data-a="ask-x"></div><div class="sheet"><div class="grab"></div>
 <div class="sh"><div class="aic">${IC.spark}</div><div><div style="font-weight:600;font-size:14px">Ask Angel</div><div class="mt" style="font-size:11px">${on?L('AI · can make mistakes','AI · गलती कर सकता है'):'24x7 chat support'}</div></div><button class="bk" style="margin-left:auto" data-a="ask-x" aria-label="Close">✕</button></div>
 <div class="sb" id="cb">${on?`<span class="ctx">${L('About your Jio Platforms IPO','आपके Jio Platforms IPO के बारे में')}</span><div class="bb">${L('Hi! Pick a question about your IPO money.','नमस्ते! अपने IPO पैसे के बारे में कोई सवाल चुनें।')}</div>`:`<span class="ctx" style="background:var(--card);color:var(--mut)">Help Centre · Orders · KYC · Withdrawal · Pledge · IPO</span><div class="bb">Hi, how can I help you today?</div>`}
 ${bub}${left.length&&!S.typing?`<div class="sugg">${left.map(k=>`<button data-a="q" data-v="${k}">${db[k].q[S.lang==='hi'?1:0]}</button>`).join('')}</div>`:''}</div>
 <div class="ib"><div>${L('Type your question… (demo: pick a suggestion)','अपना सवाल लिखें… (डेमो: सुझाव चुनें)')}</div></div></div>`}
