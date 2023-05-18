<template>
    <ClientOnly>
        <span
        class="lh-base"
        v-html="renderedMD"
        />
    </ClientOnly>
</template>

<script>
import MarkdownIt from "markdown-it";
export default {
    name: "Markdown",
    props: {
        source:{ type: String, default: "" },
    },
    computed: {
        renderedMD() {
            // var MarkdownIt = require("markdown-it");
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
