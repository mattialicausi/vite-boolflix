// store.js
import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({

    // VARIABILI PER I MOVIE

    baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=63f4e64703771045ee9d77c590e22712&query=',
    endPoint: '',
    basendPoint: 'a',
    params: "",
    flagFilter: false,
    moviesList : [],

    //VARIABILI PER LE FLAG

    // bandieraURL : 'https://countryflagsapi.com/png/',
    // stateParams: "",

    //VARIABILI PER LE SERIE

    baseSeriesURL: 'https://api.themoviedb.org/3/search/tv?api_key=63f4e64703771045ee9d77c590e22712&query=',
    endPointSeries: '',
    seriesParams: "",
    seriesFlag: false,
    seriesList: [],
    

    //FUNZIONE PER CICLARE TUTTI GLI ELEMENTI DELL'API DI BASE PER I MOVIE

    getMovies() {
    
        axios.get(this.flagFilter ? this.baseURL + this.params : this.baseURL + this.basendPoint).then ((res) =>{
            this.moviesList = res.data.results;

        }).catch((error) => {
            this.moviesList = 0;

            //INSERIRE MESSAGGIO DENTRO UN COMPONENTE DA CREAREV IN SEGUITO-------------------------------
        });
        
    },

    //FUNZIONE PER CICLARE LE FLAG

    // getStateFlag() {

    //     axios.get( this.bandieraURL + this.stateParams).then ((res) => {
    //         this.moviesList.original_language = res.data.result.original_language;
    //         this.seriesList.original_language = res.data.result.original_language;
    //         console.log(seriesList.original_language)

    //         console.log(this.moviesList.original_language)
    //         console.log(res.data.result.original_language)
    //     })
    // },

    //FUNZIONI PER CICLARE LE SERIE 

    getSeries() {
    
        axios.get(this.seriesFlag ? this.baseSeriesURL + this.seriesParams : this.baseSeriesURL + this.basendPoint).then ((res) =>{
            this.seriesList = res.data.results;

        }).catch((error) => {
            this.seriesList = 0;

            //INSERIRE MESSAGGIO DENTRO UN COMPONENTE DA CREAREV IN SEGUITO-------------------------------
        });
        
    },
});
