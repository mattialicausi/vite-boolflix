<template>
    <section class="jumbo-section">
       <div class="container-content-jumbo">
            <div class="container-img">
               <img :src=" mostPopular.poster_path ? imgPath + mostPopular.poster_path : 'https://via.placeholder.com/154x231'" :alt="mostPopular.title">
            </div>
            <div class="container-info-jumbo">
                <h2>{{mostPopular.title}}</h2>
                <p>{{mostPopular.overview}}</p>
            </div>
       </div>
    </section>
</template>

<script>

    export default {
        name: 'JumboComponent',

        data() {
            return {

                imgPath: 'https://image.tmdb.org/t/p/w1280',
               

            }
        }, 
        props: {
            mostPopular: Object,
        }
    }

</script>

<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;

.jumbo-section{
    color: $text-color;
    // margin-top: 10vh;
    position: relative;
}

.container-info-jumbo{
    position: absolute;
    bottom: 50px;
    left: 50px;
    width: 50%;
}

.container-img{
    width: 100%;
    

    img{
        width: 100%;
        height: 100%;
        object-position: center;
        overflow-y: hidden;
    }
}

</style>