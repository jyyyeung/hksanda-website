<template>
    <nav v-if="routes.length > 1 && routes[0].name != routes[1].name" aria-label="breadcrumb">
        <ol class="breadcrumb flex">
            <li v-for="route in routes" :key="route.path" class="breadcrumb-item">
                <NuxtLink :to="route.path">
                    {{ route.name }}
                </NuxtLink>
            </li>
        </ol>
    </nav>
</template>

<script setup lang="ts">

const routes = computed(() => {
    const route = useRoute();
    const path = route.matched;
    // console.log(path);
    return path;
})
</script>

<style lang="scss">
.breadcrumb {
    @import "@/assets/scss/link.scss";
    padding: revert;
}
</style>
