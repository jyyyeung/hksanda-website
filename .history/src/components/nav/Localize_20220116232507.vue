<!--
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-15 21:25:02
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-16 23:25:07
 * @Description: file content
-->
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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Localize",
  data() {
    return {
      // lang: "zh-HK",
      languages: [
        { name: "繁體中文", code: "zh-HK" },
        { name: "简体中文", code: "zh-CN" },
      ],
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
      },
    },
  },
  watch: {
    lang() {
      this.localizePage();
    },
  },
  methods: {
    ...mapActions(["setLang", "localizePage"]),
  },
};
</script>
