<template>
    <section>
        <Menubar :model="menuItems" class="hidden lg:flex">
            <template #start>
                <NuxtLink to="/">
                    <img alt="logo" class="mr-2" height="72" src="@/assets/images/logo-71.png">
                </NuxtLink>
            </template>
            <template #end>
                <localize />
            </template>
        </Menubar>
        <section class="block lg:hidden">
            <header class="flex m-1 justify-content-between">
                <NuxtLink to="/">
                    <img alt="logo" class="m-auto mr-2" height="58" src="@/assets/images/logo-58.png">
                </NuxtLink>
                <localize class="right-0 mr-1 my-auto h-3rem" />
            </header>
            <Menubar :model="menuItems" class="flex flex-wrap" />
            <Menu v-if="childrenRoutes != null" :model="childrenRoutes" />
        </section>
    </section>
</template>

<script setup>
import { Localize } from "#components";

import routes from "@/utils/routes.js";

const route = useRoute();

const menuItems = routes
    .filter(
        (route) => !("meta" in route) || !("hidden" in route.meta)
    )
    .map((route) => ({
        label: route.name,
        to: route.path,
        items:
            "children" in route
                ? route.children.map((child) => ({
                    label: child.name,
                    to: route.path + "/" + child.path,
                }))
                : null,
        icon: route.meta ? route.meta.icon : null,
    }))


const childrenRoutes = computed(() => {

    const currentTopLevelRoute = route.matched[0].path;
    const currentChildrenRoutes = menuItems.filter((route) => (route.to == currentTopLevelRoute))
    if (currentChildrenRoutes.length > 0) {
        return currentChildrenRoutes[0].items;
    }
    return null;
})

</script>

