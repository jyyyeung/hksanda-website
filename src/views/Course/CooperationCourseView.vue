<template>
  <render-view :view="view"/>
</template>

<script>
import { useMeta } from "vue-meta";
import { mapGetters } from "vuex";
import RenderView from '@/components/others/RenderView.vue';

export default {
  components: { RenderView },
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
