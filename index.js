import{S as m,i as d}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p=t=>`
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
  `,u="https://pixabay.com",g="45521287-1fb3911845814b73b6d184262",f=t=>{const a=new URLSearchParams({q:t,image_type:"photo",orientation:"horizontal",per_page:15,page:1,safesearch:!0});return fetch(`${u}/api/?key=${g}&${a}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},o=document.querySelector(".js-search-form"),h=document.querySelector(".js-gallery"),i=document.querySelector(".loader-box"),n=document.querySelector(".loader-btn"),y=new m(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.7});i.classList.add("hidden");n.classList.add("hidden");const L=t=>{t.preventDefault(),i.classList.remove("hidden"),n.classList.add("hidden");const a=o.elements.user_query.value.trim();if(a===""){d.show({message:"Please enter something to search",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#59a10d",position:"topRight",maxWidth:432}),i.classList.add("hidden"),o.reset(),h.innerHTML="";return}f(a).then(s=>{if(console.log(s),s.total===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight",maxWidth:432}),h.innerHTML="",i.classList.add("hidden"),n.classList.add("hidden"),o.reset();return}const l=s.hits.map(e=>p(e)).join("");h.innerHTML=l,y.refresh(),i.classList.add("hidden"),n.classList.remove("hidden"),o.reset()}).catch(s=>{d.error({message:s.stack,messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight",maxWidth:432}),console.dir(s)})};o.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
