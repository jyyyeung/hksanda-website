<template>
    <render-view :route="'/about/bylaws'" />
</template>


<script setup>
import { RenderView } from "#components"

useSeoMeta({
    title: '本會章程',
    // reactive example
    // ogImage: () => someData.value?.image
})
</script>
