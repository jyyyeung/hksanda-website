<template>
  <div v-if="view.id" class="container-fluid">
    <h1>{{ view.title }}</h1>
    <markdown :source="view.content" />
  </div>
</template>

<script>
import Markdown from "@/components/others/Markdown.vue";
import { useMeta } from "vue-meta";
import { mapGetters } from "vuex";

export default {
  components: { Markdown },
  name: "CooperationCourseView",
  setup() {
    useMeta({
      title: "機構及學校合辦課程",
    });
  },
  computed: {
    ...mapGetters(["getViewByRoute"]),
    view() {
      return this.getViewByRoute("/course/cooperation");
    },
  },
};
</script>
