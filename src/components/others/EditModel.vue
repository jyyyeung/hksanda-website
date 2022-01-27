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
    <CarouselEditor
      v-else-if="details.type == 'carousel'"
      :submitFunction="details.submitFunction"
      :slides="details.content"
    />
    <course-editor :course="details.content" :submitFunction="submitCourse" />

    <template #footer>
      <Button label="关闭" @click="toggleModel" />
      <Button
        label="儲存"
        v-if="details.type == 'text'"
        @click="submitChange"
      />
    </template>
  </Dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// enable everything
import TurndownService from "turndown";
import CarouselEditor from "./CarouselEditor.vue";
import CourseEditor from "@/components/admin/CourseEditor.vue";
export default {
  name: "EditModel",
  data() {
    var turndownService = new TurndownService({
      headingStyle: "atx",
      hr: "---",
      bulletListMarker: "-",
    });
    return { turndownService };
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
      console.log(this.details);
      var markdown = this.turndownService.turndown(
        this.$refs.quillEditor.getHTML()
      );
      this.details.submitFunction(markdown);
      this.toggleModel();
    },
    submitCourse(editedCourse) {
      const course = {
        ...editedCourse,
        content: this.turndownService.turndown(
          this.$refs.courseQuillEditor.getHTML
        ),
      };
      this.details.submitFunction(course);
      this.toggleModel();
    },
  },
  components: { CarouselEditor, CourseEditor },
};
</script>

<style lang="scss" scoped></style>
