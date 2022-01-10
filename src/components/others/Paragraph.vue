<template>
  <p v-if="paragraph">{{ paragraph }}</p>
  <div v-else v-for="(a_paragraph, i) in paragraphs" :key="generateId + i">
    <p v-if="typeof a_paragraph == 'string'">
      <Markdown :source="a_paragraph" />
    </p>
    <section-blocks v-else :sections="a_paragraph" />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { defineAsyncComponent } from "vue";
import Markdown from "vue3-markdown-it";

// import SectionBlocks from "./SectionBlocks.vue";
export default {
  components: {
    SectionBlocks: defineAsyncComponent(() => import("./SectionBlocks.vue")),
    Markdown,
  },
  name: "Paragraph",
  props: {
    paragraph: String,
    paragraphs: Array,
  },

  methods: {
    generateId() {
      return nanoid();
    },
  },
};
</script>

<style lang="scss" scoped></style>
