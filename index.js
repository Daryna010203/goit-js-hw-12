import{a as y,S as w,i as d}from"./assets/vendor-u8rapaCG.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const L=t=>`
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
  `;y.defaults.baseURL="https://pixabay.com";const b=(t,s,o)=>{const i={params:{key:"45521287-1fb3911845814b73b6d184262",q:t,image_type:"photo",orientation:"horizontal",per_page:o,page:s,safesearch:!0}};return y.get("/api/",i)},l=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),r=document.querySelector(".loader-box"),p=document.querySelector(".loader-btn"),g=new w(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.7});let c=1,h="",u=15,f=null,v=0;const x=async t=>{try{if(t.preventDefault(),r.classList.remove("hidden"),h=l.elements.user_query.value.trim(),c=1,h===""){d.show({message:"Please enter something to search",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#59a10d",position:"topRight",maxWidth:432}),r.classList.add("hidden"),l.reset(),n.innerHTML="";return}const s=await b(h,c,u);if(f=Math.ceil(s.data.total/u),s.data.total===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight",maxWidth:432}),n.innerHTML="",r.classList.add("hidden"),l.reset();return}const o=s.data.hits.map(a=>L(a)).join("");n.innerHTML=o,g.refresh(),v=n.querySelector("li").getBoundingClientRect().height,f===1?(p.classList.add("hidden"),r.classList.add("hidden")):(r.classList.add("hidden"),p.classList.remove("hidden"),l.reset(),g.refresh())}catch(s){d.error({message:s.stack,messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight",maxWidth:432}),r.classList.add("hidden")}},C=async t=>{try{r.classList.remove("hidden"),c++;const o=(await b(h,c,u)).data.hits.map(i=>L(i)).join("");n.insertAdjacentHTML("beforeend",o),scrollBy({top:v*2,behavior:"smooth"}),g.refresh(),r.classList.add("hidden"),c===f&&(p.classList.add("hidden"),r.classList.add("hidden"),d.show({message:"We're sorry, but you've reached the end of search result",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#59a10d",position:"topRight",maxWidth:432}))}catch(s){d.error({message:s.stack,messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight",maxWidth:432}),r.classList.add("hidden")}};l.addEventListener("submit",x);p.addEventListener("click",C);
//# sourceMappingURL=index.js.map
