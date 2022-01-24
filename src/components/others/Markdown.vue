<template>
  <span class="lh-base" v-html="renderedMD" />
</template>

<script>
export default {
  name: "Markdown",
  props: {
    source: String,
  },
  computed: {
    renderedMD() {
      var MarkdownIt = require("markdown-it");
      const md = new MarkdownIt({
        breaks: true,
        xhtmlOut: true,
        html: true,
      });
      return md.render(this.source);
    },
  },
};
</script>

<style lang="scss" scoped></style>
