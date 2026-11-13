/* Renders the phone and handles every tap */
function render(){
 if(!document.body.classList.contains('demo'))return;
 document.body.classList.toggle('hi',S.lang==='hi');
 [['cScen',S.scen],['cMode',S.mode],['cLang',S.lang]].forEach(([id,v])=>document.querySelectorAll('#'+id+' button').forEach(b=>b.classList.toggle('on',b.dataset.v===v)));
 const v=cur();let h='';
 if(v==='lock')h=vLock();
 else if(v==='result')h=S.scen==='na'?vResNA():vResAL();
 else if(v==='listing')h=vListing();else if(v==='buy')h=vBuy();else if(v==='success')h=vSuccess();else if(v==='pf')h=vPF();else if(v==='rem')h=vRem();
 else if(v==='t-list')h=vTodayList();else if(v==='t-tpin')h=vTodayTPIN();else if(v==='t-end')h=vTodayEnd();
 if(S.ask&&v!=='lock')h+=vAsk();
 if(S.toast)h+=`<div class="toast">${S.toast}</div>`;
 const sc=document.getElementById('screen'),prev=sc.dataset.view;sc.innerHTML='<div class="notch"></div>'+h;sc.dataset.view=v;
 if(prev===v){sc.querySelectorAll('.view').forEach(e=>e.style.animation='none');const sv=sc.querySelector('.view');if(sv&&window._sc!=null)sv.scrollTop=window._sc}
 const cb=document.getElementById('cb');if(cb)cb.scrollTop=cb.scrollHeight;
 if(S.ask){sc.querySelectorAll('.sheet,.scrim').forEach(e=>{if(window._so)e.style.animation='none'});window._so=true}else window._so=false;
 sidePanel();
}
function restart(){resetS();render()}

document.addEventListener('input',e=>{if(e.target.dataset.a==='keep'){S.keep=+e.target.value;const sv=document.querySelector('#screen .view');window._sc=sv?sv.scrollTop:0;render();document.querySelector('[data-a=keep]')?.focus()}});
document.getElementById('cScen').addEventListener('click',e=>{const b=e.target.closest('button');if(b){S.scen=b.dataset.v;restart()}});
document.getElementById('cMode').addEventListener('click',e=>{const b=e.target.closest('button');if(b){S.mode=b.dataset.v;restart()}});
document.getElementById('cLang').addEventListener('click',e=>{const b=e.target.closest('button');if(b){S.lang=b.dataset.v;render()}});
document.getElementById('restart').addEventListener('click',restart);

document.getElementById('screen').addEventListener('click',e=>{
 const el=e.target.closest('[data-a]');if(!el)return;const a=el.dataset.a,v=el.dataset.v;
 const sv=document.querySelector('#screen .view');window._sc=sv?sv.scrollTop:0;
 const on=S.mode==='on';
 switch(a){
  case 'back':window._sc=0;back();break;
  case 'open':window._sc=0;
   if(on){addLog('c',S.scen==='na'?'Result push showed the refund time: 4 PM, 27 Oct':'Result push: 12 shares, listing tomorrow at 10 AM');if(S.scen==='na')S.refund='ok';go('result')}
   else{addLog('g','Generic push: "allotment status updated"');go('t-list')}break;
  case 'choice':S.choice=v;render();break;
  case 'na-cont':window._sc=0;
   if(S.choice==='etf'){S.buyMode='sip';addLog('c','Chose "Start small": ₹500/month Nifty 50 ETF');go('buy')}
   else if(S.choice==='ipo'){addLog('c','Chose "Keep it ready for the next IPO"');go('rem')}
   else{addLog('g','Chose "Not now": no nudges for 30 days');toast(L('Okay, no nudges for 30 days.','ठीक है, 30 दिन तक कोई रिमाइंडर नहीं।'))}break;
  case 'ask':S.ask=true;render();break;
  case 'ask-x':S.ask=false;render();break;
  case 'q':{S.chat.push({k:v,ans:false});S.typing=true;render();
   setTimeout(()=>{S.chat[S.chat.length-1].ans=true;S.typing=false;
    if(v==='refund'){S.refund=on?'ok':'bad';addLog(on?'c':'r',on?'Ask Angel gave the correct refund rule (T+2), with source':'Ask Angel said "3–4 working days" (wrong) and "contact your bank"')}
    else if(v==='pick')addLog(on?'c':'r',on?'Ask Angel refused to tip a stock and explained why':'Ask Angel answered "which stock will go up?" with stock ideas');
    else if(v==='why'&&!on)addLog('r','Ask Angel: raise a ticket or contact another platform');
    else addLog('c','Ask Angel answered: "'+QA[v].q[0]+'"');
    render()},1000);break}
  case 'remind':S.ask=false;window._sc=0;addLog('c','Set a reminder for the next big IPO');go('rem');break;
  case 'ddpi':S.otp=true;render();break;
  case 'otp-x':S.otp=false;render();break;
  case 'ddpi-ok':S.otp=false;S.ddpi=true;addLog('c','Turned on Quick Sell before listing day');render();break;
  case 'lt':S.listOpen=!S.listOpen;if(S.listOpen)addLog('c','Read how the 9:00–10:00 listing session works');render();break;
  case 'plan':S.plan=v;render();break;
  case 'to-list':window._sc=0;if(S.plan==='hold')S.pmode='sip';addLog('c',S.plan==='all'?'Listing day: sold 12 shares at ₹1,417 (+₹3,576)':S.plan==='half'?'Listing day: sold 6, kept 6':'Listing day: holding all 12 shares');go('listing');break;
  case 'pmode':S.pmode=v;render();break;
  case 'bank':addLog('g','Sent everything to the bank');toast(L('Withdrawal requested. Money reaches your bank after settlement.','निकासी का अनुरोध हो गया। सेटलमेंट के बाद पैसा बैंक में आएगा।'));setTimeout(()=>{window._sc=0;go('pf')},1400);break;
  case 'to-buy':window._sc=0;S.buyMode=S.pmode;if(S.pmode==='once'&&S.keep<100)S.keep=1000;go('buy');break;
  case 'bm':S.buyMode=v;render();break;
  case 'amt':S.sipAmt=+v;render();break;
  case 'date':S.sipDate=+v;render();break;
  case 'confirm':window._sc=0;S.done=S.buyMode;addLog('c',S.done==='once'?`Invested ${fmt(S.keep)} of the profit in a Nifty 50 ETF`:`Second investment: ₹${S.sipAmt}/month Nifty 50 ETF SIP`);go('success');break;
  case 'pf':window._sc=0;go('pf');break;
  case 'rem-sip':window._sc=0;S.buyMode='sip';go('buy');break;
  case 'restart':restart();break;
  case 'off-end':S.ask=false;window._sc=0;S.risky=true;addLog('r','Only next step offered: "View IPO listings"');addLog('r','Empty portfolio shows "MTF Borrowing: 4x" first');addLog('r','No next step. Money goes back to the bank');go('t-end');break;
  case 'off-sell':window._sc=0;S.tpin=true;addLog('r','Selling needs TPIN + OTP: Quick Sell is off');go('t-tpin');break;
  case 'off-sold':window._sc=0;S.risky=true;addLog('g','Sold 12 shares at ₹1,417');addLog('r','Empty portfolio shows "MTF Borrowing: 4x" first');addLog('r','No next step. Profit goes back to the bank');go('t-end');break;
  case 'mode-on':S.mode='on';restart();break;
 }
});
