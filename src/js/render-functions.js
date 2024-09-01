export const createGalleryCardTemplate = imgInfo => {
  return `
  <li class="gallery-item">
	<a class="gallery-link" href="${imgInfo.largeImageURL}">
		<img 
			class="gallery-image" 
			src="${imgInfo.webformatURL}" 
			alt="${imgInfo.tags}" 
			/>
	</a>
  <div class='js-wraper'>
    <div>
      <h4 class='wraper-title'>Likes</h4>
      <p class='wraper-text'>${imgInfo.likes}</p>
    </div>
    <div>
      <h4 class='wraper-title'>Views</h4>
      <p class='wraper-text'>${imgInfo.views}</p>
    </div>
    <div>
     <h4 class='wraper-title'>Comments</h4>
      <p class='wraper-text'>${imgInfo.comments}</p>
    </div>
    <div>
      <h4 class='wraper-title'>Downloads</h4>
      <p class='wraper-text'>${imgInfo.downloads}</p>
    </div>
  </div>
</li>
  `;
};
