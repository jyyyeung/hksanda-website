<template>
  <render-view :view="view" />
</template>

<script>
import { useMeta } from "vue-meta";
import { mapGetters } from "vuex";
import RenderView from "@/components/others/RenderView.vue";
export default {
  name: "LessonFeaturesView",
  setup() {
    useMeta({
      title: "課程特色",
    });
  },
  components: { RenderView },
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
