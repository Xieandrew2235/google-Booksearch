import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    search: function(query) {
        return axios.get(BASEURL + query);
    },

    save: function(bookData) {
        console.log("bookData below")
        console.log(bookData.title)
        return axios.post("/api/books", bookData);

    },

    getBooks: function() {
        console.log("getBooks from API.js");
        return axios.get("/api/books")
    }, 

    deleteBook: function(id) {
        console.log(id.id)
        // Not sure why I had to do id.id here. It was coming through as an object instead of just the id. But now it works.
        // This way it fills out the route correctly.
        return axios.delete("/api/books/" + id.id);
    } 

}
