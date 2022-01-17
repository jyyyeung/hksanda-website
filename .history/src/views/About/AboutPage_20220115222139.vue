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
      // htmlAttrs: {
      //   lang: "zh-HK",
      //   amp: true,
      // },
    });
  },
};
</script>
