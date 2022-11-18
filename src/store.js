// store.js
import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({

    baseURL: 'https://api.themoviedb.org/3/',

    endPoint: {
        movie: 'search/movie',
        series: 'search/tv',
        mostPopular: 'movie/popular',
    },
   
    params: {

        api_key  : '63f4e64703771045ee9d77c590e22712',
        query: '',
        language: 'it-IT',
    },
 
    moviesList: [],
    seriesList: [],
    mostPopularList: [],


    //FUNZIONE PER CICLARE TUTTI GLI ELEMENTI DELL'API DI BASE PER I MOVIE

    getMovies() {
        const movieURL = this.baseURL + this.endPoint.movie;
        //console.log(this.params)

        const params = this.params
    
        axios.get(movieURL, {params}).then ((res) =>{
            this.moviesList = res.data.results;

        }).catch((error) => {
            this.moviesList = 0;

            //INSERIRE MESSAGGIO DENTRO UN COMPONENTE DA CREARE IN SEGUITO-------------------------------
        });
        
    },

    //FUNZIONI PER CICLARE LE SERIE 

    getSeries() {
        const seriesURL = this.baseURL + this.endPoint.series;
        const params = this.params
        
        axios.get(seriesURL, {params}).then ((res) =>{
            this.seriesList = res.data.results;

        }).catch((error) => {
            this.seriesList = 0;

            //INSERIRE MESSAGGIO DENTRO UN COMPONENTE DA CREARE IN SEGUITO-------------------------------
        });
        
    },

    getMostPopular(){
        const movieURL = this.baseURL + this.endPoint.mostPopular;
        const params = this.params;

        axios.get(movieURL, {params}).then ((res) => {
            this.mostPopularList = res.data.results;
        }).catch((error) => {
            this.mostPopularList = 0;
        })
    }

    
});
