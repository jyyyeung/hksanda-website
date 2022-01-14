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
        <div class="container__outer container">
          <div class="container__inner">
            <!-- <div class="container"> -->
            <router-view></router-view>
            <!-- </div> -->
          </div>
        </div>
      </ScrollPanel>
    </div>
    <whatsapp-chat />
  </div>
</template>

<script>
import NavigationVue from "./components/nav/Navigation.vue";

import WhatsappChat from "./components/others/WhatsappChat.vue";

export default {
  components: { NavigationVue, WhatsappChat },
  name: "App",
  computed: {
    isHome() {
      return this.$route.fullPath === "/";
    },
  },
  apollo: {},
};
</script>

<style lang="scss">
@import "@/scss/style.scss";
@import "bootstrap/scss/_functions.scss";
@import "bootstrap/scss/_variables.scss";
@import "bootstrap/scss/_mixins.scss";

.content {
  height: 100vh;
}

* {
  scroll-behavior: smooth;
}

.container__inner {
  div.md {
    // @include make-container();

    @include make-row();

    margin: auto 0;
    > * {
      // > div {
      @include make-col(6);

      // @include make-col-auto();
      // }
    }
  }
  button {
    @import "bootstrap/scss/_buttons.scss";
  }
}
</style>
