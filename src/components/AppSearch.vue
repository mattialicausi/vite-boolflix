<template>
    <section class="p-3" @keyup="changeFlag">
        <form class="d-flex justify-content-center" @submit.prevent="filterAPI">
            <div class="container-input">
                <label for="charactername">Search by name</label>
                <input type="text" name="input-search-name" id="input-search-name" placeholder="Search name..." v-model.trim="search">
            </div>

            <div class="container-btn-submit">
                <button type="submit" class="btn btn-primary"> Search</button>
            </div>
            
        </form>
    </section>
</template>

<script>
    import {store} from '../store';

    export default {
        name: 'AppSearch',

        data() {
            return {
                store,

                search: '',

                state: '',
            }
        },

        methods: {
            filterAPI() {
                const search = this.search;
                store.params = this.search;
                store.getMovies();
                store.flagFilter = true;

                //FILTRO API DELLE SERIE
                
                store.seriesParams = this.search;
                store.getSeries();
                store.seriesFlag = true;

                //AGGIUNGO FLAG DA API

                // const state = {...this.state};
                // store.stateParams = this.state;
                // store.getStateFlag();

                // console.log('click su searchStateFlag');

            }
        }
    }

</script>

<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;


</style>