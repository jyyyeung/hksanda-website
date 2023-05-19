<template>
    <render-view :route="'/course/session'" />
</template>


<script setup>
import { RenderView } from "#components"

useSeoMeta({
    title: '私人及组班课程',
})
</script>
