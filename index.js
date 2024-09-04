import{a as f,S as w,i as d}from"./assets/vendor-u8rapaCG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const y=s=>`
  <li class="gallery-item">
	<a class="gallery-link" href="${s.largeImageURL}">
		<img 
			class="gallery-image" 
			src="${s.webformatURL}" 
			alt="${s.tags}" 
			/>
	</a>
  <div class='js-wraper'>
    <div>
      <h4 class='wraper-title'>Likes</h4>
      <p class='wraper-text'>${s.likes}</p>
    </div>
    <div>
      <h4 class='wraper-title'>Views</h4>
      <p class='wraper-text'>${s.views}</p>
    </div>
    <div>
     <h4 class='wraper-title'>Comments</h4>
      <p class='wraper-text'>${s.comments}</p>
    </div>
    <div>
      <h4 class='wraper-title'>Downloads</h4>
      <p class='wraper-text'>${s.downloads}</p>
    </div>
  </div>
</li>
  `;f.defaults.baseURL="https://pixabay.com";const L=(s,t,o)=>{const i={params:{key:"45521287-1fb3911845814b73b6d184262",q:s,image_type:"photo",orientation:"horizontal",per_page:o,page:t,safesearch:!0}};return f.get("/api/",i)},l=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),r=document.querySelector(".loader-box"),p=document.querySelector(".loader-btn"),b=new w(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.7});let c=1,h="",g=15,u=null,v=0;const x=async s=>{try{if(s.preventDefault(),r.classList.remove("hidden"),h=l.elements.user_query.value.trim(),c=1,h===""){d.show({message:"Please enter something to search",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#59a10d",position:"topRight",maxWidth:432}),r.classList.add("hidden"),l.reset(),n.innerHTML="";return}const t=await L(h,c,g);if(u=Math.ceil(t.data.total/g),t.data.total===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight",maxWidth:432}),n.innerHTML="",r.classList.add("hidden"),l.reset();return}const o=t.data.hits.map(a=>y(a)).join("");n.innerHTML=o,v=n.querySelector("li").getBoundingClientRect().height,b.refresh(),u===1?(p.classList.add("hidden"),r.classList.add("hidden")):(r.classList.add("hidden"),p.classList.remove("hidden"),l.reset())}catch(t){d.error({message:t.stack,messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight",maxWidth:432}),r.classList.add("hidden")}},C=async s=>{try{r.classList.remove("hidden"),c++;const o=(await L(h,c,g)).data.hits.map(i=>y(i)).join("");n.insertAdjacentHTML("beforeend",o),scrollBy({top:v*2,behavior:"smooth"}),b.refresh(),r.classList.add("hidden"),c===u&&(p.classList.add("hidden"),r.classList.add("hidden"),d.show({message:"We're sorry, but you've reached the end of search result",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#59a10d",position:"topRight",maxWidth:432}))}catch(t){d.error({message:t.stack,messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight",maxWidth:432}),r.classList.add("hidden")}};l.addEventListener("submit",x);p.addEventListener("click",C);
//# sourceMappingURL=index.js.map
