<template>
  <router-view></router-view>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "AssessmentsPage",
  setup() {
    useMeta({
      title: "考試",
    });
  },
};
</script>
