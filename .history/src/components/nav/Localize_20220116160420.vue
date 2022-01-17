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
