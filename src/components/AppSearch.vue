<template>
    <section class="d-flex justify-content-around align-items-center h-100 mx-2">
        <h1>Boolflix</h1>
        
        <form class="d-flex align-items-center" @submit.prevent="filterAPI">
            <div class="container-input">
                <input type="text" name="input-search-name" id="input-search-name" placeholder="Search name..." v-model.trim="search">
            </div>

            <div class="container-btn-submit">
                <button type="submit" class="btn btn-submit"> Search</button>
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
            filterAPI() {
                const search = this.search;
                store.params.query = this.search;
                store.getMovies();            
                store.getSeries();
            }
        }
    }

</script>

<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;

    h1{
        color: $title-color;
    }

    .btn-submit{
        background-color: $title-color;
        color: $text-color;
        margin-left: 10px;
    }

    .btn-submit:hover{
            background-color: $text-color;
            color: $title-color;
            font-weight: bold;
    }



</style>