<template>
    <Menubar
        class="d-none d-lg-flex"
        :model="menuItems"
    >
        <template #start>
            <router-link to="/">
                <img
                    alt="logo"
                    src="@/assets/images/logo.png"
                    height="72"
                    class="p-mr-2"
                >
            </router-link>
        </template>
        <template #end>
            <localize />
        </template>
    </Menubar>
    <nav
        class="d-flex d-lg-none navbar navbar-light bg-light"
        style="z-index: 50"
        role="navigation"
    >
        <div class="container-fluid">
            <router-link
                class="navbar-brand"
                to="/"
            >
                <span class="d-none d-sm-inline-flex">
                    <img
                        alt="logo"
                        src="@/assets/images/logo.png"
                        height="72"
                        class="me-2"
                    >
                    <div class="text">
                        <span class="h2">香港極拳道武術協會 </span>
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
                        src="@/assets/images/logo.png"
                        height="45"
                        class="me-2"
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
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
            >
                主页
                <mdicon name="chevron-down" />
            </span>
            <sidebar-menu
                id="offcanvasNavbar"
                theme="white-theme"
                class="offcanvas offcanvas-start"
                tabindex="-1"
                aria-labelledby="offcanvasNavbarLabel"
                data-bs-dismiss="offcanvas"
                hide-toggle
                disable-hover
                show-child
                :menu="sidebarMenu"
            />
        </div>
    </nav>
</template>

<script>
import { mdiChevronDown } from "@mdi/js";
import Localize from "./Localize.vue";
import routes from "@/router/routes.js";

export default {
    name: "Navigation",
    components: { Localize },

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
                href: item.to,
                child: item.items
                    ? item.items.map((child) => ({
                        title: child.label,
                        href: child.to,
                    }))
                    : null,
            }));
            menu.push({ component: Localize });
            return menu;
        },
    },
};
</script>
