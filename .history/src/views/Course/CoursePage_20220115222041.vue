<template>
  <router-view></router-view>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "CoursePage",
  setup() {
    useMeta({
      title: "課程",
      // htmlAttrs: {
      //   lang: "zh-HK",
      //   amp: true,
      // },
    });
  },
};
</script>

<style lang="scss" scoped></style>
