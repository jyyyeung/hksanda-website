<template>
    <nuxt-page />
</template>

<script setup>
const store = useMainStore();
const { localizePage } = store;

useSeoMeta({
    title: '本會相簿',
})

onMounted(() => {
    nextTick(() => {
        localizePage();
    });
})
</script>
 