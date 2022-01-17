<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-15 21:25:02
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 09:40:22
 * @Description: file content
-->
<template>
  <Dropdown
    class="ignore-opencc"
    v-model="lang"
    :options="languages"
    optionLabel="name"
    style="z-index: 10000"
    optionValue="code"
  />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Localize",
  data() {
    return {
      // lang: "zh-HK",
      languages: [
        { name: "繁體中文", code: "zh-HK" },
        { name: "简体中文", code: "zh-CN" }
      ]
    };
  },
  computed: {
    ...mapGetters(["getLang"]),
    lang: {
      get() {
        return this.getLang;
      },
      set(lang) {
        return this.setLang(lang);
      }
    }
  },
  watch: {
    lang() {
      console.log(this.getLang);
      this.localizePage();
    }
  },
  methods: {
    ...mapActions(["setLang", "localizePage"])
  }
};
</script>
