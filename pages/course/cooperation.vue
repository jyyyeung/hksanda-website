<template>
    <render-view :route="'/course/cooperation'" />
</template>


<script setup lang="ts">
import { RenderView } from "#components"

useSeoMeta({
    title: '機構及學校合辦課程',
})

</script>
