import{a as L,i,S}from"./assets/vendor-D0cagnvz.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const v="https://pixabay.com/api/",x="48798537-0207cfb0467814d90ddbd436c";async function m(e,r){try{const o=await L.get(v,{params:{key:x,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:40}});if(!o.data||o.data.hits.length===0){i.error(u);return}return o.data}catch(o){throw i.error(u),o}}const B=document.querySelector(".gallery-list");function q(e){const{webformatURL:r,largeImageURL:o,tags:d,likes:t,views:s,comments:l,downloads:w}=e;return`<li class="img-list-item">
  <div class="image-container">
  <a  href="${o}">
    <img
      src="${r}"
      alt="${d}"
    />
  </a>
 <ul class="image-descript">
  <li class="descript-item">
  <p class="descript-text">Likes</p>
   <p class="descript-value">${t}</p>
  </li>
<li class="descript-item">
  <p class="descript-text">Views</p>
   <p class="descript-value">${s}</p>
  </li>
<li class="descript-item">
  <p class="descript-text">Comments</p>
   <p class="descript-value">${l}</p>
  </li>
  <li class="descript-item">
  <p class="descript-text">Downloads</p>
   <p class="descript-value">${w}</p>
  </li>
  </ul>
  </div>
</li>`}function M(e){return e.map(q).join("")}function g(e){B.insertAdjacentHTML("beforeend",M(e)),C.refresh()}const C=new S(".gallery-list a",{captionsData:"alt",captionDelay:250}),a={form:document.querySelector(".form"),ul:document.querySelector(".gallery-list"),input:document.querySelector(".input-img"),loader:document.querySelector(".loader"),loadButton:document.querySelector(".button-load")},u={message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",progressBar:!1,displayMode:"replace",maxWidth:"300px"},P={message:"Please enter a search term!",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",progressBar:!1,displayMode:"replace"},$={message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter",backgroundColor:"white",messageColor:"black",progressBar:!1,displayMode:"replace"};function f(){a.loader.style.display="flex"}function n(){a.loader.style.display="none"}function E(){a.loadButton.style.display="flex"}function h(){a.loadButton.style.display="none"}function y(){const r=Math.ceil(b/40);c>=r?(h(),i.info($)):E()}let p="",c=1,b=0;a.form.addEventListener("submit",async e=>{if(e.preventDefault(),p=a.input.value.trim(),c=1,p===""){i.warning(P);return}f(),a.ul.innerHTML="";try{const r=await m(p,c);if(!r){n();return}b=r.totalHits,g(r.hits),n(),y(),e.target.reset()}catch(r){throw n(),h(),i.error(u),r}});a.loadButton.addEventListener("click",async()=>{c+=1,y(),f();try{const e=await m(p,c);g(e.hits),n(),O()}catch{n(),i.error(u)}});function O(){const e=document.querySelector(".gallery-list li");if(e){const o=e.getBoundingClientRect().height*2;window.scrollBy({top:o,left:0,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
