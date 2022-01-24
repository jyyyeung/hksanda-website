<template>
    <render-view :view="view"/>
</template>

<script>
import { useMeta } from "vue-meta";
import { mapGetters } from "vuex";
import RenderView from '@/components/others/RenderView.vue';

export default {
  components: {RenderView },
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
