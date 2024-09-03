import{a as f,S as v,i as n}from"./assets/vendor-u8rapaCG.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const y=r=>`
  <li class="gallery-item">
	<a class="gallery-link" href="${r.largeImageURL}">
		<img 
			class="gallery-image" 
			src="${r.webformatURL}" 
			alt="${r.tags}" 
			/>
	</a>
  <div class='js-wraper'>
    <div>
      <h4 class='wraper-title'>Likes</h4>
      <p class='wraper-text'>${r.likes}</p>
    </div>
    <div>
      <h4 class='wraper-title'>Views</h4>
      <p class='wraper-text'>${r.views}</p>
    </div>
    <div>
     <h4 class='wraper-title'>Comments</h4>
      <p class='wraper-text'>${r.comments}</p>
    </div>
    <div>
      <h4 class='wraper-title'>Downloads</h4>
      <p class='wraper-text'>${r.downloads}</p>
    </div>
  </div>
</li>
  `;f.defaults.baseURL="https://pixabay.com";const L=(r,e,o)=>{const a={params:{key:"45521287-1fb3911845814b73b6d184262",q:r,image_type:"photo",orientation:"horizontal",per_page:o,page:e,safesearch:!0}};return f.get("/api/",a)},i=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),m=document.querySelector(".loader-box"),u=document.querySelector(".loader-btn"),b=new v(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.7});m.classList.add("hidden");let l=1,d="",g=15,h=null;const w=async r=>{try{if(r.preventDefault(),d=i.elements.user_query.value.trim(),l=1,d===""){n.show({message:"Please enter something to search",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#59a10d",position:"topRight",maxWidth:432}),i.reset(),c.innerHTML="";return}const e=await L(d,l,g);if(console.log(e),h=Math.ceil(e.data.total/g),console.log(h),e.data.total===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight",maxWidth:432}),c.innerHTML="",m.classList.add("hidden"),i.reset();return}const o=e.data.hits.map(a=>y(a)).join("");c.innerHTML=o,b.refresh(),m.classList.add("hidden"),u.classList.remove("hidden"),i.reset()}catch(e){n.error({message:e.stack,messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight",maxWidth:432})}},x=async r=>{try{l++;const o=(await L(d,l,g)).data.hits.map(a=>y(a)).join("");c.insertAdjacentHTML("beforeend",o),b.refresh(),l===h&&u.classList.add("hidden")}catch(e){n.error({message:e.stack,messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight",maxWidth:432})}};i.addEventListener("submit",w);u.addEventListener("click",x);
//# sourceMappingURL=index.js.map
