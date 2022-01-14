<!-- <markdown-base :source="translated" :plugins="plugins" breaks xhtmlOut html /> -->

<script lang="jsx">
import MarkdownItAttrs from "markdown-it-attrs";
import MarkdownItDecorate from "markdown-it-decorate";
import MarkdownItBracketedSpans from "markdown-it-bracketed-spans";
import MarkdownItClass from "@toycode/markdown-it-class";
import MarkdownItDiv from "markdown-it-div";
import { translate } from "@/helpers/i18n";
import jsx from "markdown-it-jsx";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Markdown",
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
        { plugin: jsx },
      ],
    };
  },
  computed: {
    translated() {
      return translate(this.source);
    },
  },
  render() {
    return (
      <markdown-base
        class="lh-base"
        source={this.translated}
        plugins={this.plugins}
        breaks
        xhtmlOut
        html
      />
    );
  },
});
</script>

<style lang="scss" scoped></style>
