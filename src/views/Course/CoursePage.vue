<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 09:53:37
 * @FilePath: /hksanda-website/src/views/Course/CoursePage.vue
 * @Description: Route page for course, which includes course syllabus and location and other info  
-->
<template>
  <router-view></router-view>
</template>

<script>
import { useMeta } from "vue-meta";
import { mapActions } from "vuex";

export default {
  name: "CoursePage",
  setup() {
    useMeta({
      title: "課程",
      htmlAttrs: {
        lang: "zh-HK",
        //amp: true
      },
    });
  },
  mounted() {
    this.$nextTick(() => {
      this.localizePage();
    });
  },
  methods: {
    ...mapActions(["localizePage"]),
  },
};
</script>

<style lang="scss" scoped></style>
