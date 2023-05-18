<template>
    <render-view :view="getViewByRoute('/about')" />
</template>


<script setup>
const store = useMainStore();
// const view = computed(()=>store.getViewByRoute)
const { getViewByRoute } = storeToRefs(store);
</script>


<script>
// import { useMeta } from "vue-meta";
// import { mapState } from "pinia";
// import RenderView from "@/components/others/RenderView.vue";
import { RenderView } from "#components"

export default {
    name: "AboutUsView",
    components: { RenderView },
    // setup() {
    // useMeta({
    //     title: "關於我們",
    // });
    // },
    // computed: {
    //     ...mapGetters(["getViewByRoute"]),
    //     view() {
    //         return this.getViewByRoute("/about");
    //     },
    // },
}
</script> 
