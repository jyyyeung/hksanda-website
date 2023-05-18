<template>
    <render-view :view="getViewByRoute('/course/session')" />
</template>


<script setup>
const store = useMainStore();
const getViewByRoute = computed(() => store.getViewByRoute)
// const { getViewByRoute } = storeToRefs(store);
</script>

<script>
// import { useMeta } from "vue-meta";
import { mapState } from "pinia";
// import RenderView from "@/components/others/RenderView.vue";
import { RenderView } from "#components"
export default {
    name: "CourseSession",
    components: {
        RenderView,
    },
    setup() {
        // useMeta({
        //     title: "私人及組班課程",
        // });
    },
    // computed: {
    //     ...mapGetters(["getViewByRoute"]),
    //     view() {
    //         return this.getViewByRoute("/course/session");
    //     },
    // },
};
</script>
