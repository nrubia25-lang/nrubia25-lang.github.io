
window.GL_CONFIG={checkoutUrl:"https://pay.kiwify.com.br/HIzqBGT",metaPixelId:"2548234138956309"};
function trackGL(event,props={}){
  window.dataLayer=window.dataLayer||[];window.dataLayer.push({event,...props});
  if(window.fbq){
    const map={view_offer:'ViewContent',click_checkout:'InitiateCheckout',blog_to_checkout:'InitiateCheckout',begin_checkout:'InitiateCheckout'};
    if(map[event]) fbq('track',map[event],{...props,content_name:'27 Receitas do Equilíbrio',content_type:'product',value:29.90,currency:'BRL'});
    else if(event!=='page_view') fbq('trackCustom',event,props);
  }
}
function initTracking(){
 const c=window.GL_CONFIG||{};
 if(c.metaPixelId){
   !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
   fbq('init',c.metaPixelId);fbq('track','PageView');
   if(location.pathname.startsWith('/oferta-'))fbq('track','ViewContent',{content_name:'27 Receitas do Equilíbrio',content_type:'product',value:29.90,currency:'BRL'});
 }
 trackGL('page_view',{page_path:location.pathname});
}
function cookieChoice(v){localStorage.setItem('gl_consent',v);document.getElementById('cookie')?.classList.remove('show');if(v==='yes')initTracking();}
document.addEventListener('DOMContentLoaded',()=>{
 const consent=localStorage.getItem('gl_consent');if(consent==='yes')initTracking();else if(consent!=='no')document.getElementById('cookie')?.classList.add('show');
 document.querySelectorAll('[data-checkout]').forEach(a=>a.addEventListener('click',e=>{trackGL(a.dataset.event||'click_checkout',{location:a.dataset.location||'unknown'});e.preventDefault();setTimeout(()=>location.href=window.GL_CONFIG.checkoutUrl,120);}));
 document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.mobile-panel')?.classList.toggle('open'));
});
