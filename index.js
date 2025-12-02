import{a as w,S as v,i}from"./assets/vendor-CNqCr-V-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))f(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&f(d)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function f(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();async function m(o,t){try{return(await w.get("https://pixabay.com/api/",{params:{key:"53332129-128929aa08dcf95595eb6ffa3",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}catch(e){throw console.log("Помилка при запиті:",e),e}}const g=document.querySelector(".gallery"),a=document.querySelector(".loader"),c=document.querySelector(".load-more-btn");let S=new v(".gallery a",{captionsData:"alt",captionDelay:250});function p(o){const t=o.map(e=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img 
                    class="gallery-image" 
                    src="${e.webformatURL}" 
                    alt="${e.tags}" 
                />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes</b> ${e.likes}</p>
                <p class="info-item"><b>Views</b> ${e.views}</p>
                <p class="info-item"><b>Comments</b> ${e.comments}</p>
                <p class="info-item"><b>Downloads</b> ${e.downloads}</p>
            </div>
        </li>`).join("");g.insertAdjacentHTML("beforeend",t),S.refresh()}function q(){g.innerHTML=""}function y(){a&&a.classList.remove("is-hidden")}function h(){a&&a.classList.add("is-hidden")}function b(){c&&c.classList.remove("is-hidden")}function l(){c&&c.classList.add("is-hidden")}let n=1,u="";const L=15,P=document.querySelector(".form"),$=document.querySelector(".load-more-btn");l();P.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){i.error({message:"The input field is empty"});return}u=t,n=1,q(),y(),l();try{const e=await m(u,n);if(e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}p(e.hits),e.totalHits>L&&b()}catch(e){console.log(e),i.error({message:"Something went wrong!"})}finally{h(),o.target.reset()}});$.addEventListener("click",async o=>{n+=1,y(),l();try{const t=await m(u,n);p(t.hits),B();const e=Math.ceil(t.totalHits/L);n>=e?(l(),i.info({message:"We're sorry, but you've reached the end of search results."})):b()}catch(t){console.log(t),i.error({message:"Error loading more images"})}finally{h()}});function B(){const o=document.querySelector(".gallery-item");if(o){const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
