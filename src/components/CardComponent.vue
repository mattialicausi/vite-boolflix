<template>

        <div class="filmCards">
            <img :src=" movie.poster_path ? imgPath + movie.poster_path : 'https://via.placeholder.com/185x278'" alt="movie.title">
            <h3>{{movie.title}}</h3>
            <h5>{{movie.original_title}}</h5>
            
            <div class="d-flex">
                <div v-for="n in 5" class="fa-star" :class="(n <= star) ? 'fa-solid' : 'fa-regular'"></div>
  
            </div>

            <div v-if="availableFlag.includes(movie.original_language)">
                <img class="img-flag" :src="'/images/' + movie.original_language + '.png'" :alt="movie.original_language">
            </div>
            <div v-else>{{movie.original_language}}</div>



            
        </div>

</template>

<script>


    export default {
       
        name: 'CardSection',
    
        props: {
            movie: Object
        },

        data() {
            return {
                availableFlag: [
                    'us', 'en', 'it', 'es', 'fr'
                ],

                imgPath: 'https://image.tmdb.org/t/p/w185',
            }
        }, 
        computed: {
            star() {
                return Math.ceil(this.movie.vote_average / 2)
                console.log(this.movie.vote_average)
            }
        }


        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;
    .img-flag{
        width: 30px;
    }

</style>