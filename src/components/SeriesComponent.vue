<template>
    <div class="seriesCards">
            <img :src=" series.poster_path ? imgPath + series.poster_path : 'https://via.placeholder.com/185x278'" alt="series.title">
            <h3>{{series.name}}</h3>
            <h5>{{series.original_name}}</h5>

            <div class="d-flex">
                <div v-for="n in 5" class="fa-star" :class="(n <= star) ? 'fa-solid' : 'fa-regular'"></div>
                <span>{{series.vote_average}}</span>
            </div>

            <div v-if="availableFlag.includes(series.original_language)">
                <img class="img-flag" :src="'/images/' + series.original_language + '.png'" :alt="series.original_language">
            </div>
            <div v-else>{{series.original_language}}</div>


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

                imgPath: 'https://image.tmdb.org/t/p/w185',

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