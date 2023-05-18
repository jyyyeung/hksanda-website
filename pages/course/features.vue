<template>
    <render-view :view="getViewByRoute('/course/features')" />
</template>


<script setup>
const store = useMainStore();
// const view = computed(()=>store.getViewByRoute)
const { getViewByRoute } = storeToRefs(store);
</script>

<script>
// import { useMeta } from "vue-meta";
import { mapState } from "pinia";
import { RenderView } from "#components";

// import RenderView from "@/components/others/RenderView.vue";
export default {
    name: "LessonFeaturesView",
    components: { RenderView },
    // setup() {
    //     // useMeta({
    //     //     title: "課程特色",
    //     // });
    // },
    // computed: {
    // // TODO: Combine all view files (about, lesson features)
    //     ...mapGetters(["getViewByRoute"]),
    //     view() {
    //         return this.getViewByRoute("/course/features");
    //     },
    // },
};
</script>
