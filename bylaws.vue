<template>
    <render-view route="本會章程" />
</template>


<script setup lang="ts">
import { RenderView } from "#components"

useSeoMeta({
    title: '本會章程',
    // reactive example
    // ogImage: () => someData.value?.image
})
</script>
