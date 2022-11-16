// store.js
import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=63f4e64703771045ee9d77c590e22712&query=',
    endPoint: '',
    basendPoint: 'a',
     params: "",
    flagFilter: false,
    characterList : [],
 




    //FUNZIONE PER CICLARE TUTTI GLI ELEMENTI DELL'API DI BASE
    getCharacters() {
    
        axios.get(this.flagFilter ? this.baseURL + this.params : this.baseURL + this.basendPoint).then ((res) =>{
            this.characterList = res.data.results;

            console.log('click su getCharacters')
            console.log(this.flagFilter)

        }).catch((error) => {
            this.characterList = 0;

            //INSERIRE MESSAGGIO DENTRO UN COMPONENTE DA CREAREV IN SEGUITO-------------------------------
        });
    }
});
