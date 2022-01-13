<template>
  <!-- <p v-if="paragraph">{{ paragraph }}</p> -->
  <div v-for="(a_paragraph, i) in paragraphs" :key="generateId(i)">
    <Markdown v-if="typeof a_paragraph == 'string'" :source="a_paragraph" />
    <base-block v-else :sections="a_paragraph" />
  </div>
</template>

<script>
// import { defineAsyncComponent } from "vue";
import Markdown from "vue3-markdown-it";
import generateId from "@/helpers/generateId";

export default {
  components: {
    // BaseBlock: defineAsyncComponent(() => import("./BaseBlock.vue")),
    Markdown,
  },
  name: "ParagraphBlock",
  props: {
    paragraphs: Array,
  },

  methods: {
    generateId,
  },
};
</script>

<style lang="scss" scoped></style>
