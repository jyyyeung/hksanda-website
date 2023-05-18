<template>
    <render-view :view="getViewByRoute('/course/cooperation')" />
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
    name: "CooperationCourseView",
    components: { RenderView },
    // setup() {
    //     // useMeta({
    //     //     title: "機構及學校合辦課程",
    //     // });
    // },
    // computed: {
    //     ...mapGetters(["getViewByRoute"]),
    //     view() {
    //         return this.getViewByRoute("/course/cooperation");
    //     },
    // },
};
</script>
