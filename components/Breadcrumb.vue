<template>
    <nav v-if="routes.length > 1 && routes[0].name != routes[1].name" aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li v-for="route in routes" :key="route" class="breadcrumb-item">
                <NuxtLink :to="route.path">
                    {{ route.name }}
                </NuxtLink>
                <!--<NuxtLink :href="route.path">{{ route.name }}</NuxtLink>-->
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    name: "BreadcrumbComponent",
    data() {
        return {};
    },

    computed: {
        routes() {
            const route = useRoute()
            const path = route.matched;
            // console.log(path);
            return path;
        },
    },
};
</script>
