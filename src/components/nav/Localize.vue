<template>
  <Dropdown
    v-model="lang"
    :options="languages"
    optionLabel="name"
    style="z-index: 10000"
    optionValue="code"
  />
</template>

<script>
import { HTMLConvertHandler } from "@/helpers/i18n";
export default {
  name: "Localize",
  data() {
    return {
      lang: "zh-hk",
      languages: [
        { name: "繁體中文", code: "zh-hk" },
        { name: "简体中文", code: "zh-cn" },
      ],
    };
  },
  watch: {
    lang(lang) {
      // console.log(lang);
      if (lang == "zh-cn") {
        HTMLConvertHandler.convert();
      } else {
        HTMLConvertHandler.restore();
      }
    },
    $route() {
      // console.log(route);
      // console.log(this.lang);
      if (this.lang == "zh-cn") {
        // HTMLConvertHandler.restore();
        HTMLConvertHandler.convert();
      } else {
        HTMLConvertHandler.restore();
      }
    },
  },
};
</script>
