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
    },

    //VARIABILI PER FILTRARE FILM PER GENERE
        search: {
            status: '',
        },

        genres : {
            genres: [
            {
            "id": 28,
            "name": "Action"
            },
            {
            "id": 12,
            "name": "Adventure"
            },
            {
            "id": 16,
            "name": "Animation"
            },
            {
            "id": 35,
            "name": "Comedy"
            },
            {
            "id": 80,
            "name": "Crime"
            },
            {
            "id": 99,
            "name": "Documentary"
            },
            {
            "id": 18,
            "name": "Drama"
            },
            {
            "id": 10751,
            "name": "Family"
            },
            {
            "id": 14,
            "name": "Fantasy"
            },
            {
            "id": 36,
            "name": "History"
            },
            {
            "id": 27,
            "name": "Horror"
            },
            {
            "id": 10402,
            "name": "Music"
            },
            {
            "id": 9648,
            "name": "Mystery"
            },
            {
            "id": 10749,
            "name": "Romance"
            },
            {
            "id": 878,
            "name": "Science Fiction"
            },
            {
            "id": 10770,
            "name": "TV Movie"
            },
            {
            "id": 53,
            "name": "Thriller"
            },
            {
            "id": 10752,
            "name": "War"
            },
            {
            "id": 37,
            "name": "Western"
            }
            ]
            }

    
});
