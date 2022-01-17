<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 18:35:27
 * @FilePath: /hksanda-website/src/views/Course/CourseContentView.vue
 * @Description: All course syllabuses and contents and introduction and stuff
-->
<template>
  <TabView :activeIndex="activeIndex">
    <TabPanel
      v-for="course in courseContents"
      :key="course.name"
      :header="course.name"
    >
      <Markdown :source="'# ' + course.name + '\n' + course.content + footer" />
    </TabPanel>
  </TabView>
</template>

<script>
import Markdown from "@/components/others/Markdown.vue";
import { defineComponent } from "@vue/runtime-core";
import { useMeta } from "vue-meta";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  components: {
    Markdown,
  },
  name: "CourseContent",
  setup() {
    useMeta({
      title: "課程內容",
    });
  },
  data() {
    return {
      // TODO: add ref to each element so route directs to tab
      activeIndex: 0,
      footer: `\n\n---\n如希望自行组班或报名私人班，欢迎浏览[*私人及组班课程*](/course/session)\n如有任何疑问，欢迎进行咨询`,
    };
  },
  computed: {
    ...mapGetters({ courseContents: "getCourseContents" }),
  },

  mounted() {
    this.getCourseContents();
  },
  methods: {
    ...mapActions(["getCourseContents"]),
    // setTab() {
    //   const type = this.$route.params.type;
    //   console.log(type);
    //   if (type) {
    //     this.activeIndex = parseInt(type);
    //     this.$router.push("/course/content");
    //   }
    // },
  },
});
</script>

<style lang="scss" scoped>
.sizes {
  .p-inputtext {
    display: block;
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
.p-field * {
  display: block;
}
</style>
