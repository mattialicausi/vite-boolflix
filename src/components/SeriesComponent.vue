<template>
    <div class="seriesCards">
            <img src="#" alt="#">
            <h3>{{series.name}}</h3>
            <h5>{{series.original_name}}</h5>
            <div>{{series.original_language}}</div>
            <div>{{series.vote_average}}</div>
        </div>
</template>

<script>
    export default {
        name: 'SeriesComponent',

        props: {
            series: Object
        },
        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;


</style>