<template>
    <div class="text-base prose-xl m-5 p-5 bg-blend-hard-light rounded-2xl" v-html="$mdRenderer.render(props.source)" />
</template>

<script setup lang="ts">
const props = defineProps({
    source: { type: String, default: "" },
});
</script>
