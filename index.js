import{a as f,S as R,i}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();f.defaults.baseURL="https://pixabay.com/api/";const P="53372311-1598a9acbbcd6e2742c5f6eb6";async function h(o,r){const e=new URLSearchParams({key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}),{data:n}=await f("",{params:e});return n}const S=new R(".gallery a",{}),d=document.querySelector(".gallery"),m=document.querySelector(".loader"),u=document.querySelector(".load-more");function g(o){const r=o.map(e=>`
     <li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}">
  </a>
  <ul class="info">
    <li class="info-item">
      <b>Likes</b>${e.likes}
    </li>
    <li class="info-item">
      <b>Views</b>${e.views}
    </li><li class="info-item">
      <b>Comments</b>${e.comments}
    </li><li class="info-item">
      <b>Downloads</b>${e.downloads}
    </li>
  </ul>
</li>   
        `).join("");d.insertAdjacentHTML("beforeend",r),S.refresh()}function M(){d.innerHTML=""}function y(){m.classList.remove("hidden")}function p(){m.classList.add("hidden")}function b(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}const w=document.querySelector(".form");let a=1,l="",v=0;w.addEventListener("submit",q);u.addEventListener("click",$);async function q(o){o.preventDefault();const{searchText:r}=o.target.elements;if(l=r.value.trim(),l==="")return i.error({position:"topRight",message:"Please fill in the search field."});y(),M(),L(),a=1;try{const e=await h(l,a);if(e.hits.length===0)return i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});g(e.hits),e.totalHits>15?(b(),v=Math.ceil(e.totalHits/15)):i.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),w.reset()}catch(e){i.error({position:"topRight",message:e.message})}finally{p()}}async function $(){a+=1,L(),y();try{const o=await h(l,a);g(o.hits);const{height:r}=d.firstElementChild.getBoundingClientRect();if(window.scrollBy({top:r*2,behavior:"smooth"}),v===a)return i.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});b()}catch(o){i.error({position:"topRight",message:o.message})}finally{p()}}
//# sourceMappingURL=index.js.map
