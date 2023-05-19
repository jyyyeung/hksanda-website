<template>
    <render-view :route="'/course/features'" />
</template>


<script setup>
import { RenderView } from "#components";

useSeoMeta({
    title: '課程特色',
})
</script>
