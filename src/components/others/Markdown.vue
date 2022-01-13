<template>
  <markdown-base :source="source" :plugins="plugins" breaks />
</template>

<script>
import MarkdownItAttrs from "markdown-it-attrs";
import MarkdownItDecorate from "markdown-it-decorate";
import MarkdownItBracketedSpans from "markdown-it-bracketed-spans";
import MarkdownItClass from "@toycode/markdown-it-class";
import MarkdownItDiv from "markdown-it-div";
export default {
  name: "Markdown",
  props: {
    source: String,
  },
  data() {
    const mapping = {
      h1: ["title", "is-4"],
      h2: "subtitle",
      em: "tag",
      div: "md",
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
};
</script>

<style lang="scss" scoped></style>
