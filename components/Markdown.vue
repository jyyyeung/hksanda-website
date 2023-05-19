<template>
    <ClientOnly>
        <span class="lh-base" v-html="renderedMD" />
    </ClientOnly>
</template>

<script setup>
import MarkdownIt from "markdown-it";

const props = defineProps({
    source: { type: String, default: "" },
});

const renderedMD = computed(() => {
    // var MarkdownIt = require("markdown-it");
    const md = new MarkdownIt({
        breaks: true,
        xhtmlOut: true,
        html: true,
    });
    return md.render(props.source);
})
</script>
