<template>

        <div class="filmCards">
            <img src="#" alt="#">
            <h3>{{movie.title}}</h3>
            <h5>{{movie.original_title}}</h5>


            <div v-if="availableFlag.includes(movie.original_language)">
                <img class="img-flag" :src="'/images/' + movie.original_language + '.png'" :alt="movie.original_language">
            </div>
            <div v-else>{{movie.original_language}}</div>


            <div>{{movie.vote_average}}</div>
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