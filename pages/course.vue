<template>
    <NuxtPage />
</template>
<script setup>
const store = useMainStore();
const { localizePage } = store;

onMounted(() => {
    nextTick(() => {
        localizePage();
    });
})
</script>

<style lang="scss" scoped>
</style>
