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
    });
  },
};
</script>

<style lang="scss" scoped></style>
