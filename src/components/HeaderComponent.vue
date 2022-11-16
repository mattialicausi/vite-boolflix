<template>
    <header class="text-center">
        HEADER
    </header>
</template>

<script>
    import {store} from '../store';

    export default {
        name: 'HeaderComponent',
        data() {
            return {
                store,
            }
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;

</style>