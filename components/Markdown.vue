<template>
    <div class="text-base prose-xl border border-gray-300 prose-blue prose-pre:bg-zinc-300 prose-pre:text-gray-800 m-5 p-5 bg-gray-100 shadow-xl rounded-2xl"
        v-html="$mdRenderer.render(props.source)" />
</template>

<script setup>
const props = defineProps({
    source: { type: String, default: "" },
});

</script>
