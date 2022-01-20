<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-17 14:52:09
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-18 10:16:43
 * @FilePath: /hksanda-website/src/views/Course/LessonFeaturesView.vue
 * @Description: A page to display all the 特色 of our lessons 
-->
<template>
  <div v-if="view" class="container-fluid">
    <h1>{{ view.title }}</h1>
    <markdown :source="view.content" />
  </div>
</template>

<script>
import Markdown from "@/components/others/Markdown.vue";
import { useMeta } from "vue-meta";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "LessonFeaturesView",
  setup() {
    useMeta({
      title: "課程特色",
    });
  },
  components: { Markdown },
  computed: {
    // TODO: Combine all view files (about, lesson features)
    ...mapGetters(["getViewByRoute"]),
    view() {
      return this.getViewByRoute("/course/features");
    },
  },
};
</script>

<style lang="scss" scoped></style>
