<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-04 17:46:02
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-16 23:32:28
 * @Description: 
 * @FilePath: /hksanda-website/src/views/Gallery/GalleryPage.vue
-->
<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";

export default defineComponent({
  name: "GalleryPage",
  setup() {
    useMeta({
      title: "相簿",
      // htmlAttrs: {
      //   lang: "zh-HK",
      //   amp: true,
      // },
    });
  },
});
</script>

<style lang="scss" scoped></style>
