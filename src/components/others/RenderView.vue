<template>
  <div v-if="view" class="container-fluid">
    <h1>{{ view.title }}</h1>
    <markdown :source="view.content" />
    <button
    v-if="isAdmin"
    @click="edit"
    type="submit"
    class="btn btn-primary mb-3"
  >
    編輯
  </button>

  </div>
  </template>

<script>
import { mapActions, mapGetters } from "vuex";
import Markdown from "./Markdown.vue";
export default {
  components: { Markdown },
  name: "RenderView",
  props: {
    view: {
      title: String,
      content: String,
      id: String,
      route: String,
    },
  },
  computed: {
    ...mapGetters(["isAdmin"]),
  },
  methods: {
    ...mapActions(["toggleModel", "updateView"]),
    edit() {
      const modelDetails = {
        content: this.view.content,
        submitFunction: this.submitChange,
      };
      this.toggleModel(modelDetails);
    },
    submitChange(updatedContent) {
      this.updateView({
        viewId: this.view.id,
        content: updatedContent,
      });
    },
  },
};
</script>

<style>
</style>
