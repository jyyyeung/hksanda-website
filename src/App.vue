<template>
  <div id="app" lang="zh-HK">
    <navigation-vue />
    <div class="main">
      <!-- <navigation-vue /> -->
      <div class="bg__text-outer">
        <div id="bg__text-1" class="bg__text noselect">勇敢</div>
        <div id="bg__text-2" class="bg__text noselect">頑强</div>
        <div id="bg__text-3" class="bg__text noselect">不怕苦</div>
        <div id="bg__text-4" class="bg__text noselect">敢於拼搏</div>
      </div>
      <ScrollPanel style="height: 100%; width: 100%">
        <div class="container">
          <div class="container__inner">
            <router-view></router-view>
          </div>
        </div>
      </ScrollPanel>
    </div>
  </div>
</template>

<script lang="ts">
import NavigationVue from "./components/nav/Navigation.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    NavigationVue,
  },
  computed: {
    isHome(): Boolean {
      return this.$route.fullPath === "/";
    },
  },
});
</script>

<style lang="scss">
@import "@/scss/style.scss";

.content {
  height: 100vh;
}

* {
  scroll-behavior: smooth;
}
</style>
