<template>
  <button v-if="isAdmin" type="submit" @click="create" class="btn btn-success">
    添加課堂介紹
  </button>
  <TabView :activeIndex="activeIndex">
    <TabPanel
      v-for="course in getCourseContents"
      :key="course.name"
      :header="course.name"
    >
      <Markdown :source="'# ' + course.name" />
      <button
        v-if="isAdmin"
        type="submit"
        @click="edit(course)"
        class="btn btn-primary"
      >
        編輯 {{ course.name }}
      </button>
      <Markdown :source="course.content" />
      <Markdown :source="footer" />
    </TabPanel>
  </TabView>
</template>

<script>
import {
  GET_COURSE_CONTENTS,
  ADD_COURSE_CONTENT,
  UPDATE_COURSE_CONTENT,
} from "@/apollo/course-contents";
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
  computed: {
    ...mapGetters(["isAdmin"]),
  },
  data() {
    return {
      // TODO: add ref to each element so route directs to tab
      activeIndex: 0,
      footer: `\n\n---\n如希望自行组班或报名私人班，欢迎浏览[*私人及组班课程*](/course/session)\n如有任何疑问，欢迎进行咨询`,
      openModel: false,
      course: {
        name: "",
        contents: "",
      },
    };
  },
  apollo: {
    getCourseContents: {
      query: GET_COURSE_CONTENTS,
    },
  },
  methods: {
    ...mapActions(["toggleModel"]),
    newCourse(course) {
      this.$apollo.mutate({
        mutation: ADD_COURSE_CONTENT,
        variables: {
          course: course,
        },
      });
      // TODO: check if mutation works
    },
    editCourse(course) {
      // TODO: check if mutation works
      console.log(course);
      this.$apollo.mutate({
        mutation: UPDATE_COURSE_CONTENT,
        variables: {
          course: course,
        },
      });
    },
    edit(course) {
      const modelDetails = {
        content: course,
        type: "course",
        submitFunction: this.editCourse,
      };
      console.log(modelDetails);
      this.toggleModel(modelDetails);
    },
    create() {
      const modelDetails = {
        content: {
          name: "",
          content: "",
        },
        type: "course",
        submitFunction: this.newCourse,
      };
      this.toggleModel(modelDetails);
    },
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
