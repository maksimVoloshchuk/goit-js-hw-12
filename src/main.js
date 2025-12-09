import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, hideLoadMoreButton, showLoadMoreButton, loadMoreBtn, gallery } from "./js/render-functions"


const form = document.querySelector(".form");
let currentPage = 1;
let userQuery = "";
let totalPages = 0;

form.addEventListener("submit", searchImages);
loadMoreBtn.addEventListener("click", onLoadMore);

async function searchImages(event) {
    event.preventDefault();
    const { searchText } = event.target.elements;
    userQuery = searchText.value.trim();
    if (userQuery === "") {
        return iziToast.error({
            position: "topRight",
            message: "Please fill in the search field."
        })
    }
    showLoader();
    clearGallery();
    hideLoadMoreButton();
    currentPage = 1;
    try {
        const data = await getImagesByQuery(userQuery, currentPage)
        if (data.hits.length === 0) {
            return iziToast.error({
                position: "topRight",
                message: "Sorry, there are no images matching your search query. Please try again!"
            })
        }
        createGallery(data.hits);

        if (data.totalHits > 15) {
            showLoadMoreButton();
            totalPages = Math.ceil(data.totalHits / 15)
        } else {
            iziToast.info({
                position: "topRight",
                message: "We're sorry, but you've reached the end of search results."
            });
        }

        form.reset();
    } catch (error) {
        iziToast.error({
            position: "topRight",
            message: error.message
        })
    } finally {
        hideLoader();
    }

}

async function onLoadMore() {
    currentPage += 1;
    hideLoadMoreButton();
    showLoader();
    try {
        const data = await getImagesByQuery(userQuery, currentPage);
        createGallery(data.hits);
        const { height } = gallery.firstElementChild.getBoundingClientRect()
        window.scrollBy({
            top: height * 2,
            behavior: "smooth",
        });
        if (totalPages === currentPage) {
            return iziToast.info({
                position: "topRight",
                message: "We're sorry, but you've reached the end of search results."
            });
        }
        showLoadMoreButton();

    } catch (error) {
        iziToast.error({
            position: "topRight",
            message: error.message
        })
    } finally {
        hideLoader();
    }
}
