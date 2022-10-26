<template>
    <nav
        v-if="routes.length > 1 && routes[0].name != routes[1].name"
        aria-label="breadcrumb"
    >
        <ol class="breadcrumb">
            <li
                v-for="route in routes"
                :key="route"
                class="breadcrumb-item"
            >
                <router-link :to="route.path">
                    {{ route.name }}
                </router-link>
                <!--<a :href="route.path">{{ route.name }}</a>-->
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
            const path = this.$router.currentRoute.value.matched;
            // console.log(path);
            return path;
        },
    },
};
</script>
