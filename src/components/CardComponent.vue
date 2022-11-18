<template>

        <div class="filmCards" @mouseover="showInfo" @mouseleave="showInfo">

            <img class="img-content" :src=" movie.poster_path ? imgPath + movie.poster_path : 'https://via.placeholder.com/154x231'" alt="movie.title">
            <div class="container-info " v-if="mostraInfo">

                <h4>{{movie.title}}</h4>
                <h5>{{movie.original_title}}</h5>
            
                    <div class="d-flex text-center">
                        <div v-for="n in 5" class="fa-star" :class="(n <= star) ? 'fa-solid' : 'fa-regular'"></div>
  
                    </div>

                    <div class="text-center container-img-flag d-flex align-items-center justify-content-center" v-if="availableFlag.includes(movie.original_language)">
                        <img class="img-flag" :src="'/images/' + movie.original_language + '.png'" :alt="movie.original_language">
                    </div>
                <div v-else>{{movie.original_language}}</div>

            </div>

        </div>

</template>

<script>
import {store} from '../store';


    export default {
       
        name: 'CardSection',
    
        props: {
            movie: Object,
        },

        data() {
            return {
                availableFlag: [
                    'us', 'en', 'it', 'es', 'fr'
                ],
                store,
                mostraInfo: false,
                imgPath: 'https://image.tmdb.org/t/p/w154',
            }
        }, 

        computed: {
            star() {
                return Math.ceil(this.movie.vote_average / 2)
                console.log(this.movie.vote_average)
            }
        },

        methods: {

            showInfo() {
                this.mostraInfo = !this.mostraInfo
                console.log(this.mostraInfo)
            }
        },
        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;

    .container-img-flag{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }

    .img-flag{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .filmCards{
        width: 154px;
        height: 231px; 
    }

    .container-info{
        width: 100%;
        height: 100%; 
    }


</style>