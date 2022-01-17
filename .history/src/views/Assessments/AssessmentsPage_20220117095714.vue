<template>
  <router-view></router-view>
</template>

<script>
import { useMeta } from "vue-meta";
import { mapActions } from "vuex";

export default {
  name: "AssessmentsPage",
  setup() {
    useMeta({
      title: "考試",
      htmlAttrs: {
        lang: "zh-HK",
        amp: true
      }
    });
  },
  mounted() {
    this.$nextTick(() => {
      this.localizePage();
    });
  },
  methods: {
    ...mapActions(["localizePage"])
  }
};
</script>
