import axios from "axios";

//https://api.themoviedb.org/3/movie/now_playing?api_key=4da872a62aa3992fa983bce40c10efd9&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export default api;
