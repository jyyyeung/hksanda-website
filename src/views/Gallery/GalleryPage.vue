<template>
  <router-view></router-view>
</template>

<script>
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";
import { mapActions } from "vuex";

export default defineComponent({
  name: "GalleryPage",
  setup() {
    useMeta({
      title: "相簿",
      htmlAttrs: {
        lang: "zh-HK",
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
});
</script>

<style lang="scss" scoped></style>
