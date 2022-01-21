<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-15 10:48:31
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-16 23:32:24
 * @Description: 
 * @FilePath: /hksanda-website/src/components/nav/Breadcrumb.vue
-->
<template>
  <nav v-if="routes.length > 1" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li v-for="route in routes" :key="route" class="breadcrumb-item">
        <a :href="route.path">{{ route.name }}</a>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "BreadcrumbComponent",
  data() {
    return {};
  },

  computed: {
    routes() {
      const path = this.$router.currentRoute.value.matched;
      console.log(path);
      return path;
    },
  },
};
</script>

<style lang="scss" scoped></style>
