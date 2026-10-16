
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
const P=[]; function rnd(n){return Math.random()*n}
canvas.addEventListener('click',e=>{for(let i=0;i<100;i++){P.push({x:e.offsetX,y:e.offsetY,vx:rnd(4)-2,vy:rnd(4)-2,l:100})}});
function step(){
  ctx.fillStyle='#0f1730';ctx.fillRect(0,0,canvas.width,canvas.height);
  for(const p of P){p.x+=p.vx;p.y+=p.vy;p.vy+=0.02;p.l--;}
  for(let i=P.length-1;i>=0;i--){if(P[i].l<=0)P.splice(i,1)}
  ctx.fillStyle='#72e5ff';
  for(const p of P){ctx.globalAlpha=Math.max(0,p.l/100);ctx.fillRect(p.x,p.y,2,2)}
  ctx.globalAlpha=1.0;requestAnimationFrame(step)
}step();
