<template>
    <section class="p-3">
        <form class="d-flex justify-content-center" @submit.prevent="searchMovie">
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
            }
        },

        methods: {
            searchMovie() {
                const search = {...this.search};
                store.params = this.search;
                store.getCharacters();
                store.flagFilter = true;
                console.log('click su searchmovie')
            }
        },

  


    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;


</style>