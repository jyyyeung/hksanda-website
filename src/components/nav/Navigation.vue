<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-13 14:31:29
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 15:35:21
 * @Description: 
 * @FilePath: /hksanda-website/src/components/nav/Navigation.vue
-->
<template>
  <Menubar class="d-none d-lg-flex" :model="menuItems">
    <template #start>
      <a href="/">
        <img
          alt="logo"
          src="@/assets/images/logo.png"
          height="72"
          class="p-mr-2"
        />
      </a>
    </template>
    <template #end>
      <localize />
    </template>
  </Menubar>
  <nav
    class="d-flex d-lg-none navbar navbar-light bg-light"
    style="z-index: 10000"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="/"
        ><span class="d-none d-sm-inline-flex">
          <img
            alt="logo"
            src="@/assets/images/logo.png"
            height="72"
            class="me-2"
          />
          <div class="text">
            <span class="h2">香港極拳道武術協會 </span>
            <br />
            <span class="h2"
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
          />
          <div class="text">
            <span class="h4">香港極拳道武術協會</span> <br />
            <span class="h6"
              >Hong Kong Top Win Do Martial Arts Association</span
            >
          </div>
        </span></a
      >
      <span
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <svg-icon type="mdi" :path="mdiMenu"></svg-icon>
      </span>
      <sidebar-menu
        theme="white-theme"
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        data-bs-dismiss="offcanvas"
        hideToggle
        disableHover
        showChild
        :menu="sidebarMenu"
      >
      </sidebar-menu>
    </div>
  </nav>
</template>

<script>
import { mdiMenu } from "@mdi/js";
import Localize from "./Localize.vue";
import { routes } from "@/router";

export default {
  components: { Localize },
  name: "Navigation",

  data() {
    return {
      mdiMenu,
    };
  },
  computed: {
    menuItems() {
      return routes
        .filter((route) => !("meta" in route) || !("hidden" in route.meta))
        .map((route) => ({
          label: route.name,
          to: route.path,
          items:
            "children" in route
              ? route.children.map((child) => ({
                  label: child.name,
                  to: route.path + child.path,
                }))
              : null,
          icon: route.meta ? route.meta.icon : null,
        }));
    },
    sidebarMenu() {
      // const menu = this.translatedMenuItems;
      return this.menuItems.map((item) => ({
        title: item.label,
        href: item.to,
        child: item.items
          ? item.items.map((child) => ({
              title: child.label,
              href: child.to,
            }))
          : null,
      }));
    },
  },
};
</script>
