<template>
    <Menubar
        :model="menuItems"
        class="d-none d-lg-flex"
    >
        <template #start>
            <router-link to="/">
                <img
                    alt="logo"
                    class="mr-2"
                    height="72"
                    src="@/assets/images/logo.png"
                >
            </router-link>
        </template>
        <template #end>
            <localize />
        </template>
    </Menubar>
    <section class="block lg:hidden">
        <header class="flex m-1 justify-content-between">
            <router-link to="/">
                <img
                    alt="logo"
                    class="m-auto mr-2"
                    height="58"
                    src="@/assets/images/logo.png"
                >
            </router-link>
            <localize class="right-0 mr-1 my-auto h-3rem" />
        </header>

        <Menubar
            :model="menuItems"
            class="flex d-flex flex-wrap d-lg-none"
        />
        <Menu
            v-if="childrenRoutes!=null"
            :model="childrenRoutes"
        />
    </section>
</template>

<script>
import {mdiChevronDown} from "@mdi/js";
import Localize from "./Localize.vue";
import routes from "@/router/routes.js";

export default {
    name: "Navigation",
    components: {Localize},

    data() {
        return {
            mdiChevronDown,

        };
    },
    computed: {
        menuItems() {
            return routes
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
                }));

        },
        childrenRoutes() {
            console.log(this.$route)
            const currentTopLevelRoute = this.$route.matched[0].path;
            console.log(currentTopLevelRoute)
            console.log(this.menuItems)
            const routes = this.menuItems.filter((route) => (route.to === currentTopLevelRoute));
            console.log(routes)
            if (routes.length > 0) {
                return routes[0].items;
            }
            return null;
        },
        sidebarMenu() {
            // const menu = this.translatedMenuItems;
            const menu = this.menuItems.map((item) => ({
                title: item.label,
                //header: item.label,
                href: item.to,
                child: item.items
                    ? item.items.map((child) => ({
                        title: child.label,
                        href: {path: child.to},
                        //      href: child.to,
                        exact: true,
                    }))
                    : null,
            }));
            // const menu = [];
            // this.menuItems.map((item) => {
            //menu.push({
            //header: item.label,
            //});
            //item.items &&
            //item.items.map((child) => {
            //menu.push({
            // title: child.label,
            // href: child.to,
            // exact: true,
            // });
            // });
            //});

            //menu.push({ component: Localize });
            return menu;
        },
    },
};
</script>
