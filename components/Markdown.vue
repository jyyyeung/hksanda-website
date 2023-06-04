<template>
    <div class="text-base prose-xl lg:m-5 lg:p-5 bg-blend-hard-light rounded-2xl"
        v-html="$mdRenderer.render(props.source)" />
</template>

<script setup lang="ts">
const props = defineProps({
    source: { type: String, default: "" },
});
</script>
