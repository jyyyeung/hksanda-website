<template>
    <Menubar
        :model="menuItems"
        class="d-none d-lg-flex"
    >
        <template #start>
            <router-link to="/">
                <img
                    alt="logo"
                    class="p-mr-2"
                    height="72"
                    src="@/assets/images/logo.png"
                >
            </router-link>
        </template>
        <template #end>
            <localize />
        </template>
    </Menubar>
    <nav
        class="d-flex d-lg-none navbar navbar-light bg-light"
        role="navigation"
        style="z-index: 50"
    >
        <div class="container-fluid">
            <router-link
                class="navbar-brand"
                to="/"
            >
                <span class="d-none d-sm-inline-flex">
                    <img
                        alt="logo"
                        class="me-2"
                        height="72"
                        src="@/assets/images/logo.png"
                    >
                    <div class="text">
                        <span class="h2">香港極拳道武術協會</span>
                        <br>
                        <span
                            class="h2"
                        >Hong Kong Top Win Do Martial Arts Association
                        </span>
                    </div>
                </span>
                <span class="d-inline-flex d-sm-none">
                    <img
                        alt="logo"
                        class="me-2"
                        height="45"
                        src="@/assets/images/logo.png"
                    >
                    <div class="text">
                        <span class="h4">香港極拳道武術協會</span> <br>
                        <span
                            class="h6"
                        >Hong Kong Top Win Do Martial Arts Association</span>
                    </div>
                </span>
            </router-link>
            <span
                aria-controls="offcanvasNavbar"
                class="text"
                data-bs-target="#offcanvasNavbar"
                data-bs-toggle="offcanvas"
                type="button"
            >
                <span class="h4">浏览更多页面</span>
                <mdicon name="chevron-down" />
            </span>
            <sidebar-menu
                id="offcanvasNavbar"
                :menu="sidebarMenu"
                aria-labelledby="offcanvasNavbarLabel"
                class="offcanvas offcanvas-start"
                data-bs-dismiss="offcanvas"
                disable-hover
                hide-toggle
                show-child
                tabindex="-1"
                theme="white-theme"
            />
        </div>
    </nav>
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
