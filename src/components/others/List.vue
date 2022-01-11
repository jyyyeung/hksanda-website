<template>
  <ol>
    <li v-for="item in list" :key="item">{{ item }}</li>
  </ol>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "List",
  props: { list: Array },
});
</script>

<style lang="scss" scoped></style>
