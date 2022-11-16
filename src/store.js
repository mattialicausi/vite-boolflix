// store.js
import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    apiURL: 'https://api.themoviedb.org/3/search/movie?api_key=63f4e64703771045ee9d77c590e22712&query=a',
    characterList : [],

    //FUNZIONE PER CICLARE TUTTI GLI ELEMENTI DELL'API
    getCharacters() {
        axios.get(this.apiURL).then ((res) =>{
            this.characterList = res.data.results;
        }).catch((error) => {
            this.characterList = 0;
            //INSERIRE MESSAGGIO DENTRO UN COMPONENTE DA CREAREV IN SEGUITO-------------------------------
        });
    }
});
