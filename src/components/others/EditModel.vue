<template>
  <Dialog
    header="編輯內容"
    :visible="display"
    :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    :style="{ width: '50vw' }"
    :closable="false"
  >
    <QuillEditor
      :content="details.content"
      contentType="html"
      toolbar="minimal"
    />
    <template #footer>
      <Button label="取消" @click="toggleModel" />
      <Button label="儲存" @click="submitChange" />
    </template>
  </Dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// enable everything
import TurndownService from "turndown";
export default {
  name: "EditModel",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ modelIsOpen: "modelIsOpen", details: "getModelDetails" }),
    display: {
      set() {
        this.toggleModel();
      },
      get() {
        return this.modelIsOpen;
      },
    },
  },
  methods: {
    ...mapActions(["toggleModel"]),
    submitChange() {
      var turndownService = new TurndownService({
        headingStyle: "atx",
        hr: "---",
        bulletListMarker: "-",
      });
      var markdown = turndownService.turndown(this.details.content);
      console.log(markdown);
      // this.submitFunction();
      this.toggleModel();
    },
  },
};
</script>

<style lang="scss" scoped></style>
