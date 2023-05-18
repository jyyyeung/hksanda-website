<template>
    <nuxt-page />
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
