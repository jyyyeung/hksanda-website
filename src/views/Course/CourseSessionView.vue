<template>
  <render-view :view="view"/>
  </template>

<script>
import { useMeta } from "vue-meta";
import { mapGetters } from "vuex";
import RenderView from '@/components/others/RenderView.vue';

export default {
  name: "CourseSession",
  components: {
    RenderView,
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

