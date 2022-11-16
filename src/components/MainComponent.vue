<template>
    <main>
        <h2 class="text-center">Movie</h2>
        <section class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5" v-for="(item, index) in store.moviesList" :key="item.id">
                <CardComponent :movie="item"/>
            </div>
        </section>

        <h2 class="text-center m-5">Series</h2>
        <section class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5" v-for="(item, index) in store.seriesList" :key="item.id">
                <SeriesComponent :series="item"/>
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



</style>