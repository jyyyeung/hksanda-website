<template>
  <markdown-base
    class="lh-base"
    :source="translated"
    :plugins="plugins"
    breaks
    xhtmlOut
    html
  />

  <button
    v-if="isAdmin && !noEdit"
    @click="edit"
    type="submit"
    class="btn btn-primary mb-3"
  >
    編輯
  </button>
</template>

<script>
import { translate } from "@/helpers/i18n";
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "Markdown",
  props: {
    source: String,
    noEdit: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    const mapping = {
      div: "md",
      img: "img-fluid",
    };
    return {
      plugins: [],
      isEdit: false,
    };
  },
  computed: {
    ...mapGetters(["isAdmin"]),
    translated() {
      return translate(this.source);
    },
  },
  methods: {
    ...mapActions(["toggleModel", "updateView"]),
    edit() {
      const modelDetails = {
        content: this.source,
        submitFunction: this.submitChange,
      };
      this.toggleModel(modelDetails);
    },
    submitChange() {
      // id of view
      this.updateView();
    },
  },
});
</script>

<style lang="scss" scoped></style>
