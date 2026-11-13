/* Switches between the landing page and the demo app (#demo), and between demo tabs */
function route(){const demo=location.hash==='#demo';document.body.classList.toggle('demo',demo);if(demo){window.scrollTo(0,0);render()}}
document.addEventListener('click',e=>{const g=e.target.closest('[data-go]');if(!g)return;e.preventDefault();
  if(g.dataset.go==='demo'){location.hash='demo'}else{history.pushState('',document.title,location.pathname);route();window.scrollTo(0,0)}});
window.addEventListener('hashchange',route);

/* tabs */
document.getElementById('atabs').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
  document.querySelectorAll('#atabs button').forEach(x=>x.classList.toggle('on',x===b));
  document.querySelectorAll('[data-pane]').forEach(p=>p.style.display=p.dataset.pane===b.dataset.tab?'':'none');window.scrollTo(0,0)});
