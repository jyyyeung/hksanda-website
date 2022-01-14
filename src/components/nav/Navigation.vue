<template>
  <Menubar class="hidden-md-down" :model="translatedMenuItems">
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
  <nav class="hidden-sm-up navbar navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img
          alt="logo"
          src="@/assets/images/logo.png"
          height="72"
          class="p-mr-2"
        />極拳道武術協會</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
            極拳道武術協會
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="offcanvasNavbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="offcanvasNavbarDropdown"
              >
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { translate } from "@/helpers/i18n";
export default {
  name: "Navigation",
  data() {
    return {
      menuItems: [
        {
          label: "主页",
          icon: "pi pi-home",
          to: "/",
        },
        {
          label: "关于我们",
          items: [
            { label: "关于我们", to: "/about/" },
            { label: "专业教练团队", to: "/about/our-team" },
            { label: "传媒专访", to: "/about/media-interviews" },
          ],
        },
        {
          label: "章别考核",
          items: [
            { label: "考试动作", to: "/assessments/syllabus" },
            { label: "武术散手章别全港公开试", to: "/assessments/hk-badge" },
          ],
        },
        {
          label: "课程简介",
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
          items: [
            {
              label: "本会训练相簿",
              to: "/gallery/training",
            },
            { label: "本会活动影片", to: "/gallery/videos" },
          ],
        },
        { label: "联络我们", to: "/contact" },
      ],
    };
  },
  computed: {
    translatedMenuItems() {
      return translate(this.menuItems);
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

@media (min-width: 992px) {
  .navbar {
    display: none !important;
  }
}
</style>
