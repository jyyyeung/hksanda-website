<template>
    <NuxtPage />
</template>
<script setup lang="ts">
const store = useMainStore();
const { localizePage } = store;

onMounted(() => {
    nextTick(() => {
        localizePage();
    });
})

useSeoMeta({
    title: '本會課程',
})
</script>

<style lang="scss" scoped>
</style>
