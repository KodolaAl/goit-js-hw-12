import{a as u,i as l,S as m}from"./assets/vendor-BG8zX51N.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",g="48798537-0207cfb0467814d90ddbd436c";function h(s){return u.get(f,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>(t.data.hits.length===0&&l.error(n),t.data.hits)).catch(t=>{throw l.error(n),console.error(t),t})}const y=document.querySelector(".gallery-list");function L(s){const{webformatURL:t,largeImageURL:o,tags:a,likes:e,views:r,comments:i,downloads:d}=s;return`<li class="img-list-item">
  <div class="image-container">
  <a  href="${o}">
    <img
      src="${t}"
      alt="${a}"
    />
  </a>
 <ul class="image-descript">
  <li class="descript-item">
  <p class="descript-text">Likes</p>
   <p class="descript-value">${e}</p>
  </li>
<li class="descript-item">
  <p class="descript-text">Views</p>
   <p class="descript-value">${r}</p>
  </li>
<li class="descript-item">
  <p class="descript-text">Comments</p>
   <p class="descript-value">${i}</p>
  </li>
  <li class="descript-item">
  <p class="descript-text">Downloads</p>
   <p class="descript-value">${d}</p>
  </li>
  </ul>
  </div>
</li>`}function w(s){return s.map(L).join("")}function b(s){y.innerHTML=w(s),v.refresh()}const v=new m(".gallery-list a",{captionsData:"alt",captionDelay:250}),c={form:document.querySelector(".form"),ul:document.querySelector(".gallery-list"),input:document.querySelector(".input-img"),loader:document.querySelector(".loader")},n={message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",progressBar:!1,displayMode:"replace",maxWidth:"300px"},x={message:"Please enter a search term!",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",progressBar:!1,displayMode:"replace"};function S(){c.loader.style.display="flex"}function p(){c.loader.style.display="none"}c.form.addEventListener("submit",s=>{s.preventDefault();const t=c.input.value.trim();if(t===""){l.warning(x);return}S(),h(t).then(o=>{p(),b(o),s.target.reset()}).catch(o=>{throw p(),l.error(n),console.error(o),o})});
//# sourceMappingURL=index.js.map
