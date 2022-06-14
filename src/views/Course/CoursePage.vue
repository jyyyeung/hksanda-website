<template>
    <router-view />
</template>

<script>
import { useMeta } from "vue-meta";
import { mapActions } from "vuex";

export default {
    name: "CoursePage",
    setup() {
        useMeta({
            title: "課程",
            htmlAttrs: {
                lang: "zh-HK",
                //amp: true
            },
        });
    },
    mounted() {
        this.$nextTick(() => {
            this.localizePage();
        });
    },
    methods: {
        ...mapActions(["localizePage"]),
    },
};
</script>

<style lang="scss" scoped></style>
