<template>
    <main>
        <section class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5" v-for="(item, index) in store.characterList" :key="item.id">
                <CardComponent :movie="item"/>
            </div>
        </section>

        
    </main>
</template>

<script>
    import {store} from '../store';
    import CardComponent from './CardComponent.vue';

    export default {
    name: "MainComponent",
    data() {
        return {
            store,
        };
    },
    components: { CardComponent }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;


</style>