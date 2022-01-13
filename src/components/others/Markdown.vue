<template>
  <markdown-base :source="translated" :plugins="plugins" breaks xhtmlOut />
</template>

<script>
import MarkdownItAttrs from "markdown-it-attrs";
import MarkdownItDecorate from "markdown-it-decorate";
import MarkdownItBracketedSpans from "markdown-it-bracketed-spans";
import MarkdownItClass from "@toycode/markdown-it-class";
import MarkdownItDiv from "markdown-it-div";
import { translate } from "@/helpers/i18n";
export default {
  name: "Markdown",
  // inheritAttrs: false,
  props: {
    source: String,
  },
  data() {
    const mapping = {
      // h1: ["title", "is-4"],
      // h2: "subtitle",
      // em: "tag",
      div: "md",
      img: "img-fluid",
    };
    return {
      plugins: [
        { plugin: MarkdownItAttrs },
        { plugin: MarkdownItDecorate },
        { plugin: MarkdownItBracketedSpans },
        { plugin: MarkdownItClass, options: mapping },
        { plugin: MarkdownItDiv },
      ],
    };
  },
  computed: {
    translated() {
      return translate(this.source);
    },
  },
};
</script>

<style lang="scss" scoped></style>
