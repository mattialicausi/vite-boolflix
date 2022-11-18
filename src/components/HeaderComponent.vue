<template>
    <header>
        <AppSearch/>
    </header>

    <div class="row carousel">
        <div class="col-12" v-for="(item, index) in store.mostPopularList" :key="item.id">
            <JumboComponent :mostPopular="item"/>
        </div>
    </div>
    
    

</template>

<script>
    import {store} from '../store';
    import AppSearch from './AppSearch.vue';
    import JumboComponent from './JumboComponent.vue';

    export default {
    name: "HeaderComponent",
    data() {
        return {
            store,
        };
    },
    components: { 
        AppSearch,
        JumboComponent 
    },


}
</script>

<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;
    .carousel {
        overflow-x: auto;
        flex-wrap: nowrap;
    }

    header {
        background-color: rgba(20, 20, 20);
        width: 100%;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 1000;
        background-color: transparent;
    }

</style>