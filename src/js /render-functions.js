import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a', { /* options */ );
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMoreBtn = document.querySelector(".load-more")


function createGallery(images) {
    const markup = images.map(img => `
     <li class="gallery-item">
  <a class="gallery-link" href="${img.largeImageURL}">
    <img class="gallery-img" src="${img.webformatURL}" alt="${img.tags}">
  </a>
  <ul class="info">
    <li class="info-item">
      <b>Likes</b>${img.likes}
    </li>
    <li class="info-item">
      <b>Views</b>${img.views}
    </li><li class="info-item">
      <b>Comments</b>${img.comments}
    </li><li class="info-item">
      <b>Downloads</b>${img.downloads}
    </li>
  </ul>
</li>   
        `).join("");


    gallery.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
}

function clearGallery() {
    gallery.innerHTML = "";
}

function showLoader() {
    loader.classList.remove("hidden");
}

function hideLoader() {
    loader.classList.add("hidden");
}


function showLoadMoreButton(){
  loadMoreBtn.classList.remove("hidden");

}

function hideLoadMoreButton(){
  loadMoreBtn.classList.add("hidden");
}
export { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton,loadMoreBtn,gallery};
