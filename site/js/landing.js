/* Landing page: result-day notification chips, marquee, scroll reveal, before/after switch */
const HN=[
  {t:'Your IPO allotment status is updated',b:'Jio Platforms Ltd: check your application status.'},
  {t:'Jio Platforms IPO result is out',b:'Your ₹13,428 is back by 4 PM tomorrow. Tap to see your options.'},
  {t:'You got 12 shares of Jio Platforms!',b:'Listing is on 28 Oct at 10 AM. Get ready in 2 minutes.'},
  {t:'Jio Platforms IPO का रिज़ल्ट आ गया',b:'आपके ₹13,428 कल शाम 4 बजे तक वापस आ जाएंगे। आगे क्या करें, देखें।'}
];
let hIdx=0,hAuto=true;
function setHN(i){const n=document.getElementById('hn');n.classList.add('out');setTimeout(()=>{document.getElementById('hnt').textContent=HN[i].t;document.getElementById('hnb').textContent=HN[i].b;n.classList.remove('out')},250);
  document.querySelectorAll('#hchips button').forEach(b=>b.classList.toggle('on',+b.dataset.h===i));hIdx=i;}
setHN(0);
document.getElementById('hchips').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;hAuto=false;setHN(+b.dataset.h)});
setInterval(()=>{if(hAuto)setHN((hIdx+1)%4)},3800);

const MQ=['~1.01 crore retail applications for Jio','Listed +21.4% on 28 Oct','₹13,428 back by 4 PM, 27 Oct','Ask Angel said "3–4 working days"','67.6% of shares sold within a week','New SIP registrations −39% YoY','"View IPO listings" is the only next step','Flipkart, PayU and CarDekho are next'];
document.getElementById('mq').innerHTML=[...MQ,...MQ].map(x=>`<span>${x}</span>`).join('');

const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');
  en.target.querySelectorAll?.('[data-count]').forEach(countUp);io.unobserve(en.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
if(location.search.includes('static'))document.querySelectorAll('.rv').forEach(el=>{el.classList.add('in');el.querySelectorAll('[data-count]').forEach(countUp)});
function countUp(el){const to=parseFloat(el.dataset.count),dec=+(el.dataset.dec||1),suf=el.dataset.suf||'';let t0=null;
  const step=ts=>{if(!t0)t0=ts;const p=Math.min(1,(ts-t0)/1100),v=to*(1-Math.pow(1-p,3));el.textContent=(to<0?'−':'')+Math.abs(v).toFixed(Math.abs(to)<10||dec>1?dec:1).replace(/\.0$/,'')+suf;if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)}

const WW={0:{big:'₹0',log:[['rose','!','Result push: "status is updated"','Generic, no money info'],['rose','?','Ask Angel: "3–4 working days"','Wrong under SEBI\'s T+3 rule'],['rose','×','Next step offered: "View IPO listings"','Another IPO, nothing else'],['rose','–','Money goes back to the bank','No second investment']],
  ans:`<div class="bubble bad">Funds for non-allotted shares are typically unblocked <b>within 3–4 working days from the allotment date</b>, varies by bank. Angel One does not control the unblocking. Please contact your bank directly.</div>`,
  ver:'<span class="pill p-rose">Wrong timeline</span><span class="pill p-rose">Passes the problem to the bank</span><span class="pill p-rsoft">No next step</span>'},
 1:{big:'₹500/mo',log:[['cer','✓','Result push: "₹13,428 back by 4 PM"','Exact time, in Hindi or English'],['cer','✓','Ask Angel: T+2 rule, with source','Correct, and no ticket needed'],['cer','✓','Next step: ₹500/month Nifty 50 ETF','Picked by rules, from ₹11'],['cer','₹','First SIP set up in one tap','Second investment done']],
  ans:`<div class="bubble good">Under SEBI's T+3 rule, money for bids that weren't allotted is unblocked <b>by 4 PM on 27 Oct</b>, one working day after allotment. If it's late, your bank must pay you ₹100 a day. You don't need to raise a ticket.<div style="font-size:12px;opacity:.7;margin-top:6px">Source: SEBI circular on T+3 listing, Aug 2023</div></div>`,
  ver:'<span class="pill p-cer">Correct</span><span class="pill p-cer">Sourced</span><span class="pill p-soft">Leads to a next step</span>'}};
function setWW(i){const d=WW[i];document.getElementById('wwbig').textContent=d.big;
  document.getElementById('wwlog').innerHTML=d.log.map(([c,ic,t,s])=>`<div class="evrow"><span class="ic" style="background:${c==='rose'?'var(--rose)':'var(--cer)'};color:#fff">${ic}</span><span class="tx">${t}<small>${s}</small></span></div>`).join('');
  document.getElementById('wwans').innerHTML=d.ans;document.getElementById('wwver').innerHTML=d.ver;
  document.querySelectorAll('#wwtg button').forEach(b=>{const on=+b.dataset.w===i;b.classList.toggle('on',on);b.classList.toggle('r',on&&i===0)})}
setWW(0);
document.getElementById('wwtg').addEventListener('click',e=>{const b=e.target.closest('button');if(b)setWW(+b.dataset.w)});
