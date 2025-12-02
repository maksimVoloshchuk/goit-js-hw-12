import axios from "axios";

async function getImagesByQuery(query, page) {
    try {
        const response = await axios.get("https://pixabay.com/api/", {
            params: {
                key: "53332129-128929aa08dcf95595eb6ffa3",
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                page: page,
                per_page: 15
            },
        })
        return response.data;
    }
    catch (error) {
        console.log("Помилка при запиті:", error);
        throw error;
    }
}

export { getImagesByQuery};
