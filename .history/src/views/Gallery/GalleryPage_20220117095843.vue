<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-04 17:46:02
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 09:58:43
 * @Description: Routing page for Gallery, which includes most media (images, videos, etc. ) 
 * @FilePath: /hksanda-website/src/views/Gallery/GalleryPage.vue
-->
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
        amp: true
      }
    });
  },
  mounted() {
    this.$nextTick(() => {
      this.localizePage();
    });
  },
  methods: {
    ...mapActions(["localizePage"])
  }
});
</script>

<style lang="scss" scoped></style>
