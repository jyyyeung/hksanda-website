<template>
    <section class="z-10">
        <header class="z-30 grid h-auto lg:grid-cols-12 md:grid-cols-6 grid-cols-3 lg:grid-rows-1 lg:gap-3 gap-0">
            <NuxtLink to="/" class="nav-link col-span-1 col-start-1 row-start-1">
                <nuxt-img width="72" alt="logo" class="mx-2 my-1" src="/images/logo.png" sizes="sm:24 md:52 lg:71" />
            </NuxtLink>
            <nav class="lg:col-span-9 row-start-2 lg:row-start-1 col-span-6 lg:self-center lg:h-auto  lg:my-1">
                <ul class="flex flex-wrap lg:gap-3 lg:flex-row lg:min-h-[3em] lg:items-center">
                    <li class="w-fit mx-2" v-for="route in (routes as Route[])">
                        <NuxtLink :href="route.to"
                            :class="`group nav-link px-4 text-text-color text-center block hover:text-white hover:bg-brush hover:bg-cover hover:bg-center hover:bg-transparent ${route.to == currentRoute.path ? 'text-white bg-brush bg-cover bg-center bg-transparent' : ''} `">
                            {{ route.label }}
                        </NuxtLink>
                        <div class="z-30 hidden lg:group-hover:block lg:shadow lg:rounded-sm lg:absolute lg:bg-gradient-to-t lg:from-background lg:from-50% lg:to-transparent"
                            v-if="route.items != null">
                            <ul v-for="item in route.items">
                                <li>
                                    <NuxtLink
                                        class="nav-link block lg:px-4 px-0 lg:py-1 py-1 hover:text-white hover:bg-brush hover:bg-cover hover:bg-center hover:bg-transparent"
                                        :href="item.to">
                                        {{ item.label }}
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
            <div class="m-auto">
                <a href="https://api.whatsapp.com/send?phone=85297322082&text=" target="_blank">
                    <Icon name="logos:whatsapp-icon" />
                    WhatsApp 傅教練 97322082
                </a>
            </div>
            <!--<div class="lg:col-end-12 lg:col-span-1 self-center col-end-6">
                <Localize />
            </div>-->
        </header>
        <!--    <div class="flex flex-col lg:hidden my-2 z-50" v-if="childrenRoutes != null">
            <ul v-for="item in childrenRoutes">
                <li class="w-full">
                    <NuxtLink class="nav-link block px-4" :href="item.to">
                        {{ item.label }}
                    </NuxtLink>
                </li>
            </ul>
        </div>-->
    </section>
</template>

<script setup lang="ts">
const GET_ALL_ROUTES = groq`*[ _type == "page" ]{'to': '/' + route, 'label': title, orderRank} | order(orderRank)`;

const currentRoute = useRoute()

interface Route {
    to: String
    label: String
    items: Route[]
}

const { data: routes, pending } = useSanityQuery(GET_ALL_ROUTES);

// const route: RouteLocationNormalizedLoaded = useRoute();

// const menuItems = routes
//     .filter(
//         (route): boolean => !("meta" in route) || !("hidden" in route.meta)
//     )
//     .map((route) => ({
//         label: route.label,
//         to: route.to,
//         items:
//             "children" in route
//                 ? route.children.map((child) => ({
//                     label: child.label,
//                     to: route.to + "/" + child.to,
//                 }))
//                 : null,
//         icon: route.meta ? route.meta.icon : null,
//     }))


// const childrenRoutes = computed(() => {

//     const currentTopLevelRoute: string = route.matched[0].to;
//     const currentChildrenRoutes = menuItems.filter((route) => (route.to == currentTopLevelRoute))
//     if (currentChildrenRoutes.length > 0) {
//         return currentChildrenRoutes[0].items;
//     }
//     return null;
// })

</script>
