<template>
  <Menubar class="d-none d-md-block" :model="translatedMenuItems">
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
  </Menubar>

  <nav class="hidden-sm-up navbar navbar-light bg-light" style="z-index: 100">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"
        ><span class="d-none d-sm-inline-block">
          <img
            alt="logo"
            src="@/assets/images/logo.png"
            height="72"
            class="me-2"
          />
          <span class="h2 my-auto">香港極拳道武術協會</span>
        </span>
        <span class="d-sm-none d-inline-block">
          <img
            alt="logo"
            src="@/assets/images/logo.png"
            height="45"
            class="me-2"
          />
          <span class="h4 my-auto">香港極拳道武術協會</span>
        </span></a
      >
      <!-- class="navbar-toggler" -->
      <span
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <svg-icon type="mdi" :path="mdiMenu"></svg-icon>

        <!-- <span class="navbar-toggler-icon"></span> -->
      </span>
      <!-- <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
          極拳道武術協會
        </h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div> -->
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
import { translate } from "@/helpers/i18n";
import { mdiMenu } from "@mdi/js";

export default {
  name: "Navigation",

  data() {
    return {
      mdiMenu,
      menuItems: [
        {
          label: "主页",
          icon: "pi pi-home",
          to: "/",
          items: null,
        },
        {
          label: "关于我们",
          to: "/about",
          items: [
            { label: "关于我们", to: "/about/" },
            { label: "专业教练团队", to: "/about/our-team" },
            { label: "传媒专访", to: "/about/media-interviews" },
          ],
        },
        {
          label: "章别考核",
          to: "/assessments",
          items: [
            { label: "考试动作", to: "/assessments/syllabus" },
            { label: "武术散手章别全港公开试", to: "/assessments/hk-badge" },
          ],
        },
        {
          label: "课程简介",
          to: "/course",
          items: [
            {
              label: "学习内容",
              to: "/course/content",
            },
            { label: "私人及组班课程", to: "/course/session" },
            { label: "可参与团体课程（各区上课地点）", to: "/course/class" },
          ],
        },
        {
          label: "训练相簿",
          to: "/gallery",
          items: [
            {
              label: "本会训练相簿",
              to: "/gallery/training",
            },
            { label: "本会活动影片", to: "/gallery/videos" },
          ],
        },
        { label: "联络我们", to: "/contact", items: null },
      ],
    };
  },
  computed: {
    translatedMenuItems() {
      return translate(this.menuItems);
    },
    sidebarMenu() {
      const menu = this.translatedMenuItems;
      return menu.map((item) => ({
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

<style lang="scss">
.p-menubar
  .p-menubar-root-list
  .p-menuitem
  > .p-menuitem-link
  .p-menuitem-text {
  font-size: 22px;
}

.navbar-brand {
  span.h1 {
    margin: auto 1rem;
  }
}

@media (min-width: 992px) {
  .navbar {
    display: none !important;
  }
}
</style>
