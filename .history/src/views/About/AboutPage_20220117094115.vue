<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 09:41:14
 * @FilePath: /hksanda-website/src/views/About/AboutPage.vue
 * @Description: 
-->
<template>
  <router-view></router-view>
</template>

<script>
import { useMeta } from "vue-meta";
export default {
  name: "AboutPage",
  setup() {
    useMeta({
      title: "關於我們",
      htmlAttrs: {
        lang: "zh-HK",
        amp: true
      }
    });
  }
};
</script>
