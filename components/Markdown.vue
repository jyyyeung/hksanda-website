<template>
  <div
    class="prose-xl rounded-2xl text-base bg-blend-hard-light lg:m-5 lg:p-5"
    v-html="$mdRenderer.render(props.source)"
  />
</template>

<script setup lang="ts">
interface Props {
  source: string;
}
const props = defineProps<Props>();
</script>
