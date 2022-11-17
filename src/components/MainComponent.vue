<template>
    <main>
        <section class="container-content position-relative">
            <h3>Movies</h3>
            <div class="row carousel ">
                <div class="col  mb-5 " v-for="(item, index) in store.moviesList" :key="item.id">
                    <CardComponent :movie="item"/>
                </div>
            </div>
        </section>


        <section class="container-content position-relative">
            <h3>Series</h3>
            <div class="row carousel">
                <div class="col mb-5" v-for="(item, index) in store.seriesList" :key="item.id">
                    <SeriesComponent :series="item"/>
                </div>
            </div>
        </section>


        
    </main>
</template>

<script>
    import {store} from '../store';
    import CardComponent from './CardComponent.vue';
    import SeriesComponent from './SeriesComponent.vue';

    export default {
    name: "MainComponent",
    data() {
        return {
            store,
        };
    },
    components: { 
        CardComponent,
        SeriesComponent,
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;

.carousel {
    overflow-x: auto;
    flex-wrap: nowrap;
}

h3{
    color: $text-color;
    z-index:100;
    position: absolute;
    top: 0;
    left: 20px
}


</style>