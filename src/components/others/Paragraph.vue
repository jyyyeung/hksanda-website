<template>
  <div v-for="(a_paragraph, i) in paragraphs" :key="generateId(i)">
    <Markdown v-if="typeof a_paragraph == 'string'" :source="a_paragraph" />
    <section-blocks v-else :sections="a_paragraph" />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from "vue";
import Markdown from "vue3-markdown-it";

// import SectionBlocks from "./SectionBlocks.vue";
import { defineComponent } from "vue";
import generateId from "@/helpers/generateId";

const Paragraph = defineComponent({
  components: {
    SectionBlocks: defineAsyncComponent(() => import("./SectionBlocks.vue")),
    Markdown,
  },
  name: "Paragraph",
  props: {
    paragraphs: {
      type: Array as () => string[],
      required: true,
      default: () => [],
    },
  },
  methods: {
    generateId,
  },
});

export default Paragraph;
</script>

<style lang="scss" scoped></style>
