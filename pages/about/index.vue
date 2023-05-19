<template>
    <render-view :route="'/about'" />
</template>


<script setup>
import { RenderView } from "#components"

useSeoMeta({
    title: '關於我們',
})
</script>

