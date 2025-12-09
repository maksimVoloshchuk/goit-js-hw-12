import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";


const API_KEY = "53372311-1598a9acbbcd6e2742c5f6eb6";

export async function getImagesByQuery(query, page) {
    const options = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page,
        per_page: 15
    })
    const { data } = await axios("", { params: options })
    return data
}



