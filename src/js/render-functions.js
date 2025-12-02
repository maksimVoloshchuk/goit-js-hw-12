import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const list = document.querySelector('.gallery');
const loader = document.querySelector(".loader");
const loadButton = document.querySelector(".load-more-btn");

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', 
    captionDelay: 250,   
});

export function createGallery(images) {
    const markup = images.map((image) => {
        return `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img 
                    class="gallery-image" 
                    src="${image.webformatURL}" 
                    alt="${image.tags}" 
                />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes</b> ${image.likes}</p>
                <p class="info-item"><b>Views</b> ${image.views}</p>
                <p class="info-item"><b>Comments</b> ${image.comments}</p>
                <p class="info-item"><b>Downloads</b> ${image.downloads}</p>
            </div>
        </li>`;
    }).join("");
    list.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}

export function clearGallery() {
    list.innerHTML = "";
}

export function showLoader() {
    if(loader) {
        loader.classList.remove('is-hidden'); 
    }
}

export function hideLoader() {
    if (loader) {
        loader.classList.add('is-hidden');
    }
}

export function showLoadMoreButton() {
    if(loadButton) {
        loadButton.classList.remove('is-hidden');
    }
}

export function hideLoadMoreButton() {
    if(loadButton) {
        loadButton.classList.add('is-hidden');
    }
}
