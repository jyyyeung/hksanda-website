<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-13 14:31:29
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-19 11:55:40
 * @Description: Base file of Website, Contains background and main router-view 
 * @FilePath: /hksanda-website/src/App.vue
-->
<template>
  <edit-model />
  <router-view></router-view>
</template>

<script>
import EditModel from "./components/others/EditModel.vue";
export default {
  name: "App",
  components: {
    EditModel,
  },
};
</script>
