<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 09:57:14
 * @FilePath: /hksanda-website/src/views/Assessments/AssessmentsPage.vue
 * @Description: Routing page for wushu assessments, which includes the syllabus for each level  
-->
<template>
  <router-view></router-view>
</template>

<script>
import { useMeta } from "vue-meta";
import { mapActions } from "vuex";

export default {
  name: "AssessmentsPage",
  setup() {
    useMeta({
      title: "考試",
      htmlAttrs: {
        lang: "zh-HK",
        // amp: true
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
