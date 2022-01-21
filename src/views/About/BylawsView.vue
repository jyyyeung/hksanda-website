<template>
  <div v-if="view" class="container-fluid">
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
  name: "BylawsView",
  setup() {
    useMeta({
      title: "本會章程",
    });
  },
  computed: {
    ...mapGetters(["getViewByRoute"]),
    view() {
      return this.getViewByRoute("/about/bylaws");
    },
  },
};
</script>
