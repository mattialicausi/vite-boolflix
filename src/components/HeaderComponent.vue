<template>
    <header>
        <AppSearch/>
    </header>

    <JumboComponent/>

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
        }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;


    header {
        width: 100%;
    }

</style>