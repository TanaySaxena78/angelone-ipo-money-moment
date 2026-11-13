/* Demo state, navigation helpers, icons and shared phone UI pieces */
const S={scen:'na',mode:'on',lang:'en',stack:['lock'],choice:'etf',ddpi:false,otp:false,listOpen:false,plan:'all',keep:1000,pmode:'sip',sipAmt:500,sipDate:5,buyMode:'sip',ask:false,chat:[],typing:false,toast:null,done:null,log:[],refund:null,risky:false,tpin:false,sold:false};
function resetS(){Object.assign(S,{stack:['lock'],choice:'etf',ddpi:false,otp:false,listOpen:false,plan:'all',keep:1000,pmode:'sip',sipAmt:500,sipDate:5,buyMode:'sip',ask:false,chat:[],typing:false,toast:null,done:null,log:[],refund:null,risky:false,tpin:false,sold:false})}
const L=(en,hi)=>S.lang==='hi'?hi:en;
const fmt=n=>'₹'+Math.round(n).toLocaleString('en-IN');
const cur=()=>S.stack[S.stack.length-1];
function go(v){S.stack.push(v);render()}
function back(){if(S.stack.length>1){S.stack.pop();render()}}
function addLog(c,t){if(S.log.length&&S.log[S.log.length-1].t===t)return;S.log.push({c,t})}
function toast(msg){S.toast=msg;render();clearTimeout(window._tt);window._tt=setTimeout(()=>{S.toast=null;render()},2600)}

const IC={
 back:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
 spark:'<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19.5 9.5l-5.7 1.9L12 17l-1.8-5.6L4.5 9.5l5.7-1.9z"/><path d="M19 15l.8 2.3 2.2.7-2.2.8L19 21l-.8-2.2-2.2-.8 2.2-.7z"/></svg>',
 check:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg>',
 big:'<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#06140E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg>',
 info:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex:none;margin-top:1px"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
 bell:'<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#7CC8F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 1112 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 003.4 0"/></svg>',
 nav:[
  '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10l9-7 9 7v10a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z"/></svg>',
  '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>',
  '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>',
  '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>',
  '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>']
};
const NAVL=()=>S.lang==='hi'?['होम','वॉचलिस्ट','पोर्टफोलियो','ऑर्डर','अकाउंट']:['Home','Watchlist','Portfolio','Orders','Account'];
const sb=()=>`<div class="status"><span>9:41</span><span style="display:flex;gap:5px;align-items:center"><svg width="17" height="11" viewBox="0 0 18 12" fill="currentColor"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5" width="3" height="7" rx="1"/><rect x="10" y="2" width="3" height="10" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg><svg width="25" height="12" viewBox="0 0 26 12"><rect x=".5" y=".5" width="22" height="11" rx="3" fill="none" stroke="currentColor" opacity=".5"/><rect x="2" y="2" width="16" height="8" rx="2" fill="currentColor"/></svg></span></div>`;
const tb=(t,s)=>`<div class="topbar"><button class="bk" data-a="back" aria-label="Back">${IC.back}</button><div><div class="tbt">${t}</div>${s?`<div class="tbs">${s}</div>`:''}</div><div class="brand">Angel One</div></div>`;
const pnav=a=>`<div class="pnav">${NAVL().map((l,i)=>`<div class="${i===a?'on':''}">${IC.nav[i]}<span>${l}</span></div>`).join('')}</div>`;
const askIn=()=>`<button class="askin" data-a="ask">${IC.spark}<span>${L('Have a doubt? Ask Angel about your money','कोई सवाल? अपने पैसे के बारे में Ask Angel से पूछें')}</span><span style="margin-left:auto;opacity:.6">›</span></button>`;
