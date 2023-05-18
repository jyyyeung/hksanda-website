<template>
    <render-view :view="getViewByRoute('/about/bylaws')" />
</template>


<script setup>
const store = useMainStore();
// const view = computed(()=>store.getViewByRoute)
const { getViewByRoute } = storeToRefs(store);
</script>

<script>
// import { useMeta } from "vue-meta";
import { mapState } from "pinia";
// import RenderView from "@/components/others/RenderView.vue";
import { RenderView } from "#components"

export default {
    name: "BylawsView",
    components: { RenderView },
    // setup() {
    //     // useMeta({
    //     //     title: "本會章程",
    //     // });
    // },
    // computed: {
    //     ...mapGetters(["getViewByRoute"]),
    //     view() {
    //         return this.getViewByRoute("/about/bylaws");
    //     },
    // },
};
</script>
