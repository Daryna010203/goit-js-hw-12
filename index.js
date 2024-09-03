import{a as u,S as v,i as c}from"./assets/vendor-u8rapaCG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const f=s=>`
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
  `;u.defaults.baseURL="https://pixabay.com";const y=(s,t,o)=>{const i={params:{key:"45521287-1fb3911845814b73b6d184262",q:s,image_type:"photo",orientation:"horizontal",per_page:o,page:t,safesearch:!0}};return u.get("/api/",i)},l=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),r=document.querySelector(".loader-box"),g=document.querySelector(".loader-btn"),w=new v(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.7});let d=1,h="",m=15,L=null,b=0;const x=async s=>{try{if(s.preventDefault(),r.classList.remove("hidden"),h=l.elements.user_query.value.trim(),d=1,h===""){c.show({message:"Please enter something to search",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#59a10d",position:"topRight",maxWidth:432}),r.classList.add("hidden"),l.reset(),n.innerHTML="";return}const t=await y(h,d,m);if(L=Math.ceil(t.data.total/m),t.data.total===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight",maxWidth:432}),n.innerHTML="",r.classList.add("hidden"),l.reset();return}const o=t.data.hits.map(a=>f(a)).join("");n.innerHTML=o,b=n.querySelector("li").getBoundingClientRect().height,r.classList.add("hidden"),g.classList.remove("hidden"),l.reset()}catch(t){c.error({message:t.stack,messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight",maxWidth:432}),r.classList.add("hidden")}},C=async s=>{try{r.classList.remove("hidden"),d++;const o=(await y(h,d,m)).data.hits.map(i=>f(i)).join("");n.insertAdjacentHTML("beforeend",o),scrollBy({top:b*2,behavior:"smooth"}),w.refresh(),r.classList.add("hidden"),d===L&&(g.classList.add("hidden"),r.classList.add("hidden"),c.show({message:"We're sorry, but you've reached the end of search result",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#59a10d",position:"topRight",maxWidth:432}))}catch(t){c.error({message:t.stack,messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight",maxWidth:432}),r.classList.add("hidden")}};l.addEventListener("submit",x);g.addEventListener("click",C);
//# sourceMappingURL=index.js.map
