// amogujennifer.com — small, dependency-free
(function(){
  // theme
  var root=document.documentElement, key='ja-theme';
  try{ var saved=localStorage.getItem(key); if(saved) root.setAttribute('data-theme',saved); }catch(e){}
  var btn=document.querySelector('.theme');
  if(btn){ btn.addEventListener('click',function(){
    var next=root.getAttribute('data-theme')==='dark'?'light':'dark';
    root.setAttribute('data-theme',next);
    try{localStorage.setItem(key,next);}catch(e){}
  }); }

  // clock (Central Time, like the original)
  var clock=document.querySelector('.clock');
  function tick(){
    if(!clock) return;
    var d=new Date();
    var s=d.toLocaleTimeString('en-US',{timeZone:'America/Chicago',hour12:false,hour:'2-digit',minute:'2-digit',second:'2-digit'});
    clock.textContent=s+' CT';
  }
  tick(); setInterval(tick,1000);

  // current nav link
  var path=location.pathname.replace(/index\.html$/,'');
  document.querySelectorAll('.links a').forEach(function(a){
    var href=a.getAttribute('href');
    if(href===path || (href==='/' && (path===''||path==='/'))) a.setAttribute('aria-current','page');
  });

  // reveal on scroll
  var els=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
    },{rootMargin:'0px 0px -8% 0px',threshold:.08});
    els.forEach(function(el,i){ el.style.transitionDelay=Math.min(i%6*60,300)+'ms'; io.observe(el); });
  } else { els.forEach(function(el){el.classList.add('in');}); }

  // folder tilt
  document.querySelectorAll('.folder').forEach(function(f){
    f.addEventListener('mousemove',function(ev){
      var r=f.getBoundingClientRect(), x=(ev.clientX-r.left)/r.width-.5, y=(ev.clientY-r.top)/r.height-.5;
      f.style.transform='translateY(-6px) rotateX('+(-y*6)+'deg) rotateY('+(x*8)+'deg)';
    });
    f.addEventListener('mouseleave',function(){ f.style.transform=''; });
  });

  // duplicate ticker content for a seamless loop
  var t=document.querySelector('.ticker__track');
  if(t){ t.innerHTML=t.innerHTML+t.innerHTML; }
})();
