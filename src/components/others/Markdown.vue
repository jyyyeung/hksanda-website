<template>
    <!-- eslint-disable vue/no-v-html -->
    <span
        class="lh-base"
        v-html="renderedMD"
    />
    <!--eslint-enable-->
</template>

<script>
export default {
    name: "Markdown",
    props: {
        source:{ type: String, default: "" },
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
