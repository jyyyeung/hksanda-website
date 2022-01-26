<template>
  <TabView :activeIndex="activeIndex">
    <TabPanel
      v-for="course in getCourseContents"
      :key="course.name"
      :header="course.name"
    >
      <Markdown :source="'# ' + course.name" />
      <Markdown :source="course.content" />
      <Markdown :source="footer" />
    </TabPanel>
  </TabView>
</template>

<script>
import { GET_COURSE_CONTENTS } from "@/apollo/course-contents";
import Markdown from "@/components/others/Markdown.vue";
import { defineComponent } from "@vue/runtime-core";
import { useMeta } from "vue-meta";

export default defineComponent({
  components: {
    Markdown,
  },
  // TODO: add, update course content
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
  apollo: {
    getCourseContents: {
      query: GET_COURSE_CONTENTS,
    },
  },

  methods: {
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
