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
    title: '晉升考試制度',
})
</script>
