<template>
    <render-view :view="view" />
</template>

<script>
import { useMeta } from "vue-meta";
import { mapGetters } from "vuex";
import RenderView from "@/components/others/RenderView.vue";

export default {
    name: "AboutUsView",
    components: { RenderView },
    setup() {
        useMeta({
            title: "關於我們",
        });
    },
    computed: {
        ...mapGetters(["getViewByRoute"]),
        view() {
            return this.getViewByRoute("/about");
        },
    },
};
</script>
