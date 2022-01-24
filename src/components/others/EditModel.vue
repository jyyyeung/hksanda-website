<template>
    <Dialog
      header="編輯內容"
      :visible="display"
      :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
      :style="{ width: '50vw' }"
      :closable="false"
    >
      <QuillEditor
        ref="quillEditor"
        v-if="details.type == 'text'"
        :content="details.content"
        contentType="html"
        toolbar="minimal"
      />
      <CarouselEditor v-else :slides="details.content" />
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
import CarouselEditor from "./CarouselEditor.vue";
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
    ...mapActions(["toggleModel", "updateView"]),
    submitChange() {
      var turndownService = new TurndownService({
        headingStyle: "atx",
        hr: "---",
        bulletListMarker: "-",
      });
      console.log(this.details);
      var markdown = turndownService.turndown(this.$refs.quillEditor.getHTML());
      this.details.submitFunction(markdown);
      this.toggleModel();
    },
  },
  components: { CarouselEditor },
};
</script>

<style lang="scss" scoped></style>
