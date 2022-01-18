<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-18 10:22:12
 * @FilePath: /hksanda-website/src/views/Course/CourseSessionView.vue
 * @Description: 私人及組班課程 
-->
<template>
  <div>
    <h1>{{ view.title }}</h1>
    <markdown :source="view.content" />
  </div>
</template>

<script>
import Markdown from "@/components/others/Markdown.vue";
import { useMeta } from "vue-meta";
import { mapGetters } from "vuex";

export default {
  name: "CourseSession",
  components: {
    Markdown,
  },
  setup() {
    useMeta({
      title: "私人及組班課程",
    });
  },
  computed: {
    ...mapGetters(["getViewByRoute"]),
    view() {
      return this.getViewByRoute("/course/session");
    },
  },
};
</script>

<style lang="scss" scoped></style>
