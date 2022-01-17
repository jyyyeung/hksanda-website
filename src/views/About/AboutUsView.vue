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
  <div class="container-fluid">
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
