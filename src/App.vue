<template>
  <div id="app">
    <metainfo>
      <template v-slot:title="{ content }"
        >{{ content }} - 香港極拳道武術協會</template
      >
    </metainfo>
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
            <breadcrumb />
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
import Breadcrumb from "./components/nav/Breadcrumb.vue";
import NavigationVue from "./components/nav/Navigation.vue";

import WhatsappChat from "./components/others/WhatsappChat.vue";

import { useMeta } from "vue-meta";

export default {
  components: { NavigationVue, WhatsappChat, Breadcrumb },
  name: "App",
  computed: {
    isHome() {
      return this.$route.fullPath === "/";
    },
  },

  setup() {
    const meta = {
      description:
        "香港極拳道武術協會由一批具專業資格的武術教練於二零零五年成立，為香港政府註冊認可武術團體。以推廣中國武術散手自衞術為宗旨，不定期開辦不同年齡、水平的訓練班，為個人、會所、學校、公司或團體設計不同的課程(包括私人及小組教授)，本會教練持有國家認可之防身自衞術專業資格證書和政府認可註冊持牌武術散手教練及裁判的專業資格。",

      title: "香港極拳道武術協會",
    };
    useMeta({
      htmlAttrs: {
        lang: "zh-cn",
        amp: true,
      },
      ...meta,
      "google-site-verification": "",
      og: {
        ...meta,
      },
    });
  },
};
</script>

<style lang="scss">
@import "bootstrap/scss/bootstrap";

.content {
  height: 100vh;
}

* {
  scroll-behavior: smooth;
}

.container__inner {
  div.md {
    @include make-row();

    margin: auto 0;
    > * {
      @include make-col(6);
    }
  }
  // button {
  //   @import "bootstrap/scss/_buttons.scss";
  // }
}
</style>
