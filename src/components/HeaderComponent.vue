<template>
    <header>
        <AppSearch/>
    </header>
</template>

<script>
    import {store} from '../store';
    import AppSearch from './AppSearch.vue';

    export default {
    name: "HeaderComponent",
    data() {
        return {
            store,
        };
    },
    components: { AppSearch }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;

    header {
        width: 100%;
    }

</style>