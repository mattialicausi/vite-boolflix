<template>

  <HeaderComponent/>

  <MainComponent />

</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

import axios from 'axios';

import {store} from './store';

  export default {

    components: { 
      HeaderComponent,
      MainComponent
    },

    data() {
        return {
            store,
        };
    },

    created() {
            store.getMovies();
            store.getSeries();
            //store.getStateFlag();
        }
}
</script>

<style lang="scss" scoped>
@use './assets/styles/general.scss' as *;

</style>
