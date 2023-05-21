<template>
    <section>
        <header class="z-30 grid max-h-[25vh] lg:grid-cols-12 grid-cols-6 lg:grid-rows-1 gap-3">
            <NuxtLink to="/" class="nav-link col-span-1 col-start-1 row-start-1">
                <img alt="logo" class="mx-2 my-1" src="@/assets/images/logo-71.png" />
            </NuxtLink>
            <nav class="lg:col-span-9 row-start-2 lg:row-start-1 col-span-6 lg:self-center lg:h-auto">
                <ul class="flex flex-wrap lg:gap-3 lg:flex-row lg:min-h-[3em] lg:items-center">
                    <li class="w-fit mx-2 group" v-for="menuItem in menuItems">
                        <NuxtLink :href="menuItem.to"
                            :class="`nav-link px-4 text-text-color text-center block hover:text-white hover:bg-brush hover:bg-cover hover:bg-center hover:bg-transparent ${menuItem.to == route.matched[0].path ? 'text-white bg-brush bg-cover bg-center bg-transparent' : ''}`">
                            {{ menuItem.label }}
                        </NuxtLink>
                        <div class="z-30 hidden lg:group-hover:block lg:shadow lg:rounded-sm lg:absolute lg:bg-gradient-to-t lg:from-background lg:from-50% lg:to-transparent"
                            v-if="menuItem.items != null">
                            <ul v-for="item in menuItem.items">
                                <li>
                                    <NuxtLink
                                        class="nav-link block px-4 py-2 hover:text-white hover:bg-brush hover:bg-cover hover:bg-center hover:bg-transparent"
                                        :href="item.to">
                                        {{ item.label }}
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
            <div class="lg:col-end-12 lg:col-span-1 self-center col-end-6">
                <Localize />
            </div>
        </header>
        <div class="flex flex-col lg:hidden my-2 z-50" v-if="childrenRoutes != null">
            <ul v-for="item in childrenRoutes">
                <li class="w-full">
                    <NuxtLink class="nav-link block px-4" :href="item.to">
                        {{ item.label }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Localize } from "#components";

import routes from "@/utils/routes.js";

const route = useRoute();

const menuItems = routes
    .filter(
        (route): boolean => !("meta" in route) || !("hidden" in route.meta)
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

    const currentTopLevelRoute: string = route.matched[0].path;
    const currentChildrenRoutes = menuItems.filter((route) => (route.to == currentTopLevelRoute))
    if (currentChildrenRoutes.length > 0) {
        return currentChildrenRoutes[0].items;
    }
    return null;
})

</script>
