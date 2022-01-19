<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-19 12:03:28
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-19 12:10:55
 * @FilePath: /hksanda-website/src/components/admin/NavigationBar.vue
 * @Description: Nav bar for admin panel 
-->
<template>
  <nav id="admin-navbar" class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading1">First</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading2">Second</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
              >Dropdown</a
            >
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#scrollspyHeading3">Third</a>
              </li>
              <li>
                <a class="dropdown-item" href="#scrollspyHeading4">Fourth</a>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="#scrollspyHeading5">Fifth</a>
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
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <div
    data-bs-spy="scroll"
    data-bs-target="#admin-navbar"
    data-bs-offset="0"
    class="scrollspy"
    tabindex="0"
  >
    <h4 id="scrollspyHeading1">First heading</h4>
    <p>...</p>
    <h4 id="scrollspyHeading2">Second heading</h4>
    <p>...</p>
    <h4 id="scrollspyHeading3">Third heading</h4>
    <p>...</p>
    <h4 id="scrollspyHeading4">Fourth heading</h4>
    <p>...</p>
    <h4 id="scrollspyHeading5">Fifth heading</h4>
    <p>...</p>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
