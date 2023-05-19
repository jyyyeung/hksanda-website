<template>
    <render-view :route="'/course/features'" />
</template>


<script setup>
import { RenderView } from "#components";

const store = useMainStore();
const { getViewByRoute } = store;
const view = computed(() => getViewByRoute('/course/features'))
</script>
