<template>
    <render-view :route="'/course/features'" />
</template>


<script setup lang="ts">
import { RenderView } from "#components";

useSeoMeta({
    title: '課程特色',
})
</script>
