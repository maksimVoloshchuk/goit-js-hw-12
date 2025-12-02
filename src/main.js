import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton} from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let page = 1;       
let query = '';
const perPage = 15;

const form = document.querySelector('.form');
const loadButton = document.querySelector(".load-more-btn");

hideLoadMoreButton();

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const input = e.target.elements['search-text'].value.trim();

    if(!input) {
        iziToast.error({
                message: 'The input field is empty',
        });
        return;
    }

    query = input; 
    page = 1;

    clearGallery(); 
    showLoader();
    hideLoadMoreButton();

    try{
        const res = await getImagesByQuery(query, page);
        if(res.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            return;
        }
        createGallery(res.hits);

        if (res.totalHits > perPage) {
            showLoadMoreButton();
        }
    }
    catch(error) {
            console.log(error);
            iziToast.error({ message: "Something went wrong!" });
        }
        finally{
        hideLoader(); 
        e.target.reset();
    }
});

loadButton.addEventListener("click", async (e) => {
    page += 1;

    showLoader();
    hideLoadMoreButton();

    try {
        const res = await getImagesByQuery(query, page);
        
        createGallery(res.hits);
        scrollPage();
        
        const totalPages = Math.ceil(res.totalHits / perPage);

        if (page >= totalPages) {
            hideLoadMoreButton();
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
            });
        } else {
            showLoadMoreButton();
        }
    } catch (error) {
        console.log(error);
        iziToast.error({ message: "Error loading more images" });
    } finally {
        hideLoader();
    }
})

function scrollPage() {
    const firstCard = document.querySelector(".gallery-item");
    if (firstCard) {
        const cardHeight = firstCard.getBoundingClientRect().height;
        window.scrollBy({
            top: cardHeight * 2,
            behavior: "smooth",
        });
    }
}
