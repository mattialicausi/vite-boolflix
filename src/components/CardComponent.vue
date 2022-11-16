<template>

        <div class="filmCards">
            <img src="#" alt="#">
            <h3>{{movie.title}}</h3>
            <h5>{{movie.original_title}}</h5>
            <div>{{movie.original_language}}</div>
            <div>{{movie.vote_average}}</div>
        </div>

</template>

<script>


    export default {
       
        name: 'CardSection',
    
        props: {
            movie: Object
        },


        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;


</style>