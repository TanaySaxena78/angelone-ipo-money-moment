/* Phone screens with the next step OFF: the journey as it works today */
function vTodayList(){const na=S.scen==='na';
 return `${sb()}<div class="view">${tb('IPOs',L('Applied','Applied'))}<div class="pad">
 <div class="card"><div class="lst"><div class="lg2" style="background:#163A5C;color:#9CD3F2">JPL</div><div style="flex:1"><div style="font-weight:600;font-size:13.5px">Jio Platforms Ltd</div><div class="mt">${na?'Bid ₹13,428 · 12 shares':'Allotted · 12 shares'}</div></div><span class="chip ${na?'red':'grn'}">${na?'Not allotted':'Allotted'}</span></div></div>
 ${na?`<div class="info bad">${IC.info}<span>Amount will be unblocked by your bank. Angel One has no control over the unblocking process.</span></div>`:`<div class="card"><div class="mt">Shares will be credited to your demat account before listing on 28 Oct.</div></div>`}
 <div class="h3">${'Upcoming IPOs'}</div>
 <div class="card">${['Flipkart','PayU','CarDekho'].map(n=>`<div class="lst"><div class="lg2" style="background:var(--card2);color:#C9CED8">${n.slice(0,2).toUpperCase()}</div><div style="flex:1"><div style="font-weight:600;font-size:13px">${n}</div><div class="mt">To be announced</div></div><span class="mt">›</span></div>`).join('')}</div>
 <button class="askin" data-a="ask" style="background:var(--card);border-color:var(--line2);color:#C9CED8">${IC.spark}<span>Need help? Ask Angel (Help Centre)</span></button>
 </div></div>${na?`<div class="cta"><button class="pbtn gray" data-a="off-end">View IPO listings</button></div>`:`<div class="cta"><button class="pbtn" data-a="off-sell">Sell on listing day</button></div>`}${pnav(3)}`}

function vTodayTPIN(){return `${sb()}<div class="view">${tb('Authorise sale','CDSL · eDIS')}<div class="pad">
 <div class="card"><div class="ot">Enter your CDSL TPIN</div><p class="mt" style="margin-top:4px">Quick Sell (DDPI) is not active on your account, so every sale needs your TPIN and an OTP, once a day.</p><div class="otp"><div>•</div><div>•</div><div>•</div><div>•</div><div>•</div><div>•</div></div></div>
 <div class="info bad">${IC.info}<span>It's 9:52 AM on listing day. The price is moving while you find your TPIN.</span></div>
 </div></div><div class="cta nn"><button class="pbtn" data-a="off-sold">Authorise and sell</button></div>`}

function vTodayEnd(){const na=S.scen==='na';
 return `${sb()}<div class="view"><div class="topbar"><div class="tbt" style="font-size:19px">Portfolio</div><div class="brand">Angel One</div></div><div class="pad">
 <div class="card"><div class="mt">${na?'Your ₹13,428 went back to your bank.':'You sold 12 shares at ₹1,417. ₹17,004 goes to your bank after settlement.'}</div><div class="bigt" style="font-size:17px">Holdings: nothing yet</div></div>
 <div class="card mtf"><span class="chip red">Margin</span><div class="ot" style="margin-top:8px">MTF Borrowing</div><div class="os">Maximise your gains by 4x</div></div>
 <div class="card"><div class="ot">Mutual Funds</div><div class="os">Start SIPs with just ₹500</div></div>
 <div class="info bad">${IC.info}<span>No message connects the money you just got back to a next step. The first card is margin borrowing.</span></div>
 </div></div><div class="cta"><button class="pbtn" data-a="mode-on" style="background:linear-gradient(135deg,#1B95D6,#FF2E7E)">Now switch the next step on →</button></div>${pnav(2)}`}
