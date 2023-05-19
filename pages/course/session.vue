<template>
    <render-view :route="'/course/session'" />
</template>


<script setup>
import { RenderView } from "#components"

const store = useMainStore();
const { getViewByRoute } = store;
const view = computed(() => getViewByRoute('/course/session'))
</script>
