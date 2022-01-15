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
    });
  },
});
</script>

<style lang="scss" scoped></style>
