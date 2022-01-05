<template>
  <ol>
    <li v-for="item in list" :key="item">{{ item }}</li>
  </ol>
</template>

<script>
export default {
  name: "List",
  props: { list: Array },
};
</script>

<style lang="scss" scoped></style>
