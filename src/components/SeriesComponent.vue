<template>
    <div class="seriesCards">
            <img class="img-content" :src=" series.poster_path ? imgPath + series.poster_path : 'https://via.placeholder.com/154x231'" alt="series.title">

            <div class="container-info" v-if="!mostraInfo">
                <h4>{{series.name}}</h4>
                <h5>{{series.original_name}}</h5>

                <div class="d-flex text-center">
                    <div v-for="n in 5" class="fa-star" :class="(n <= star) ? 'fa-solid' : 'fa-regular'"></div>
                    <span>{{series.vote_average}}</span>
                </div>

                <div class="text-center" v-if="availableFlag.includes(series.original_language)">
                    <img class="img-flag" :src="'/images/' + series.original_language + '.png'" :alt="series.original_language">
                </div>
                <div v-else>{{series.original_language}}</div>
            </div>

    </div>
</template>

<script>
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

                imgPath: 'https://image.tmdb.org/t/p/w154',

            }
        },
        computed: {
            star() {
                return Math.ceil(this.series.vote_average / 2)
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