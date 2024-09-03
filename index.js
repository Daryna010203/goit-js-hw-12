import{a as m,S as h,i as d}from"./assets/vendor-u8rapaCG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const u=t=>`
  <li class="gallery-item">
	<a class="gallery-link" href="${t.largeImageURL}">
		<img 
			class="gallery-image" 
			src="${t.webformatURL}" 
			alt="${t.tags}" 
			/>
	</a>
  <div class='js-wraper'>
    <div>
      <h4 class='wraper-title'>Likes</h4>
      <p class='wraper-text'>${t.likes}</p>
    </div>
    <div>
      <h4 class='wraper-title'>Views</h4>
      <p class='wraper-text'>${t.views}</p>
    </div>
    <div>
     <h4 class='wraper-title'>Comments</h4>
      <p class='wraper-text'>${t.comments}</p>
    </div>
    <div>
      <h4 class='wraper-title'>Downloads</h4>
      <p class='wraper-text'>${t.downloads}</p>
    </div>
  </div>
</li>
  `;m.defaults.baseURL="https://pixabay.com";let g=15,f=1;const y=t=>{const r={params:{key:"45521287-1fb3911845814b73b6d184262",q:t,image_type:"photo",orientation:"horizontal",per_page:g,page:f,safesearch:!0}};return m.get("/api/",r)},a=document.querySelector(".js-search-form"),p=document.querySelector(".js-gallery"),o=document.querySelector(".loader-box"),n=document.querySelector(".loader-btn"),L=new h(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.7});o.classList.add("hidden");n.classList.add("hidden");const b=async t=>{try{t.preventDefault(),o.classList.remove("hidden"),n.classList.add("hidden");const r=a.elements.user_query.value.trim();if(r===""){d.show({message:"Please enter something to search",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#59a10d",position:"topRight",maxWidth:432}),o.classList.add("hidden"),a.reset(),p.innerHTML="";return}const i=await y(r);if(i.data.total===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight",maxWidth:432}),p.innerHTML="",o.classList.add("hidden"),n.classList.add("hidden"),a.reset();return}const l=i.data.hits.map(e=>u(e)).join("");p.innerHTML=l,L.refresh(),o.classList.add("hidden"),n.classList.remove("hidden"),a.reset()}catch(r){d.error({message:r.stack,messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight",maxWidth:432})}};a.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
