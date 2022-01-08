<template>
  <div id="app" lang="zh-HK">
    <router-view></router-view>
  </div>
</template>

<script>
import { HTMLConvertHandler } from "@/helpers/i18n";

export default {
  name: "App",

  created() {
    // this.toTraditionalChinese();
  },
  mounted() {
    this.toTraditionalChinese();
  },
  updated() {
    this.toTraditionalChinese();
  },
  apollo: {},
  methods: {
    toTraditionalChinese() {
      let canbreak = false;
      const languages = navigator.languages;
      languages.forEach((language) => {
        console.log(language);
        if (!canbreak && language.includes("CN")) {
          HTMLConvertHandler.convert();

          canbreak = true;
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/style.scss";

* {
  scroll-behavior: smooth;
}
</style>
