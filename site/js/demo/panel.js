/* Right-hand live panel: money kept investing, checks and the event log */
function sidePanel(){
 const on=S.mode==='on',na=S.scen==='na';
 document.getElementById('taskh').innerHTML=na?
  L('Jio Platforms IPO result day. You bid <b style="font-weight:400;color:var(--rose-deep)">₹13,428</b> for 12 shares and didn\'t get any.','Jio Platforms IPO result day. आपने 12 शेयरों के लिए <b style="font-weight:400;color:var(--rose-deep)">₹13,428</b> की बोली लगाई और शेयर नहीं मिले।'):
  L('Jio Platforms IPO result day. You got <b style="font-weight:400;color:var(--cer-deep)">12 shares</b>, and they list tomorrow at 10 AM.','Jio Platforms IPO result day. आपको <b style="font-weight:400;color:var(--cer-deep)">12 शेयर</b> मिले, कल सुबह 10 बजे लिस्टिंग है।');
 document.getElementById('trytxt').textContent=on?'This is the new flow. Tap through it on the phone.':'This is the journey as it works today. Tap through it, then switch the next step on.';
 const steps=on?(na?['Tap the result notification','Open Ask Angel: "When will my money come back?"','Pick "Start small" and continue','Set up the ₹500 SIP']:['Tap the result notification','Turn on Quick Sell and open "How listing day works"','Choose "Sell all", then see listing day','Keep ₹1,000 working and invest']):(na?['Tap the notification','Find your IPO result','Ask Angel when your money comes back','Look for a next step']:['Tap the notification','See your allotment','Try to sell on listing day','Look for a next step']);
 const doneIdx=progressIdx();
 document.getElementById('trysteps').innerHTML=steps.map((s,i)=>`<li class="${i<doneIdx?'done':''}">${s}</li>`).join('');
 document.getElementById('trytip').innerHTML=on?'Switch to <b>हिंदी</b> any time. Everything on the phone changes language.':'Notice the wrong refund timeline and that the only next step is another IPO.';
 const big=document.getElementById('wbig'),sub=document.getElementById('wsub');
 if(S.done){const amt=S.done==='once'?S.keep:S.sipAmt;big.textContent=S.done==='once'?fmt(amt):fmt(amt)+'/mo';big.classList.remove('z');sub.textContent=S.done==='once'?'One-time Nifty 50 ETF buy from the listing profit.':'Nifty 50 ETF SIP. A second investment, and a habit.'}
 else{big.textContent='₹0';big.classList.add('z');sub.textContent=S.mode==='off'&&S.log.length>2?'The money went back to the bank. No second investment.':'No second investment yet.'}
 const k1=document.getElementById('kv1'),k2=document.getElementById('kv2'),k3=document.getElementById('kv3');
 k1.className='pill '+(S.done?'p-cer':(S.mode==='off'&&S.log.length>2?'p-rose':'p-ice'));k1.textContent=S.done?'Done':(S.mode==='off'&&S.log.length>2?'Didn\'t happen':'Not yet');
 if(S.scen==='al'&&S.refund==null){k2.className='pill p-ice';k2.textContent='No refund due'}else{k2.className='pill '+(S.refund==='ok'?'p-cer':S.refund==='bad'?'p-rose':'p-ice');k2.textContent=S.refund==='ok'?'Correct (T+2)':S.refund==='bad'?'Wrong (3–4 days)':'Not yet'}
 k3.className='pill '+(S.risky?'p-rose':'p-soft');k3.textContent=S.risky?'Yes (MTF 4x)':'No';
 document.getElementById('log').innerHTML=S.log.length?S.log.map(l=>`<div class="lg"><span class="d" style="background:${l.c==='r'?'var(--rose)':l.c==='c'?'var(--cer)':'#B8BEC9'}"></span><span>${l.t}</span></div>`).join(''):'<div class="empty" style="margin-top:6px">Nothing yet. Tap the notification on the phone to start.</div>';
 const st=document.getElementById('astat');st.classList.toggle('off',!on);st.querySelector('span').textContent=on?'Next step on':'Next step off (today)';
}
function progressIdx(){const v=cur(),on=S.mode==='on',na=S.scen==='na';
 if(v==='lock')return 0;
 if(on&&na){if(S.done)return 4;if(v==='buy')return 3;if(S.chat.length)return 2;return 1}
 if(on&&!na){if(S.done)return 4;if(v==='buy'||v==='listing')return 3;if(S.ddpi&&S.listOpen)return 2;return 1}
 if(!on){if(S.log.some(l=>l.t.includes('next step')))return 4;if(S.chat.length||S.tpin)return 3;if(v!=='lock')return 2;return 1}
 return 0}
