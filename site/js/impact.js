/* Impact tab: sizing calculator */
function calc(){const a=+s1.value,l=+s2.value,m=+s3.value,n=+s4.value;
 v1.textContent=a+' lakh';v2.textContent='+'+l+' pts';v3.textContent='₹'+m.toLocaleString('en-IN');v4.textContent=n;
 const inv=a*1e5*l/100;o1.textContent=Math.round(inv).toLocaleString('en-IN');o2.textContent=Math.round(inv*n).toLocaleString('en-IN');
 const cr=inv*n*m*12/1e7;o3.textContent='₹'+(cr>=10?Math.round(cr):cr.toFixed(1))+' cr';o4.textContent=Math.round(inv/243000*100)+'%'}
['s1','s2','s3','s4'].forEach(id=>document.getElementById(id).addEventListener('input',calc));calc();
