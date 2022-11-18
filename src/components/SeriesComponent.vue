<template>
    <div class="seriesCards" @mouseover="showInfo" @mouseleave="showInfo">
            <img class="img-content" :src=" series.poster_path ? imgPath + series.poster_path : 'https://via.placeholder.com/154x231'" alt="series.title">

            <div class="container-info" v-if="mostraInfo">
                <h4>{{series.name}}</h4>
                <h5>{{series.original_name}}</h5>

                <div class="d-flex text-center">
                    <div v-for="n in 5" class="fa-star" :class="(n <= star) ? 'fa-solid' : 'fa-regular'"></div>
                    <span>{{series.vote_average}}</span>
                </div>

                <div class="text-center container-img-flag d-flex align-items-center justify-content-center" v-if="availableFlag.includes(series.original_language)">
                    <img class="img-flag" :src="'/images/' + series.original_language + '.png'" :alt="series.original_language">
                </div>
                <div v-else>{{series.original_language}}</div>
            </div>

    </div>
</template>

<script>
import {store} from '../store';
    export default {
        name: 'SeriesComponent',

        props: {
            series: Object
        },


        data() {
            return {
                availableFlag: [
                    'us', 'en', 'it', 'es', 'fr'
                ],
                store,
                imgPath: 'https://image.tmdb.org/t/p/w154',
                mostraInfo: false,

            }
        },
        computed: {
            star() {
                return Math.ceil(this.series.vote_average / 2)
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

    .seriesCards{
        width: 100%;
        height: 100%; 
    }

    .seriesCards{
        width: 154px;
        height: 231px;
    }

    .container-info{
        width: 100%;
        height: 100%; 
    }

</style>