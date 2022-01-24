<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 19:25:40
 * @FilePath: /hksanda-website/src/views/About/AboutUsView.vue
 * @Description: ABout us View to display the basics of our org
-->
<template>
  <render-view :view="view" />
</template>

<script>
import { useMeta } from "vue-meta";
import { mapGetters } from "vuex";
import RenderView from "@/components/others/RenderView.vue";

export default {
  components: { RenderView },
  name: "AboutUsView",
  setup() {
    useMeta({
      title: "關於我們",
    });
  },
  computed: {
    ...mapGetters(["getViewByRoute"]),
    view() {
      return this.getViewByRoute("/about");
    },
  },
};
</script>
