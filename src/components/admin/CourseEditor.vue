<template>
  <div class="container">
    <div class="mb-3">
      <div class="p-float-label">
        <InputText id="courseName" type="text" v-model="editedCourse.name" />
        <label for="courseName">課堂名稱</label>
      </div>
    </div>
    <div class="mb-3">
      <QuillEditor
        ref="courseQuillEditor"
        contentType="html"
        toolbar="minimal"
        v-model:content="editedCourse.content"
        placeholder="添加課堂介紹"
      />
    </div>
    <Button label="儲存" @click="submitFunction(this.editedCourse)" />
  </div>
</template>

<script>
import InputText from "primevue/inputtext/sfc";
export default {
  name: "CourseEditor",
  props: {
    course: {
      name: { type: String, default: "" },
      content: { type: String, default: "" },
    },
    submitFunction: Function,
  },
  data() {
    return {
      editedCourse: {
        name: "",
        content: "",
      },
    };
  },
  components: {
    InputText,
  },
  mounted() {
    this.editedCourse = Object.assign({}, this.course);
    const editor = this.$refs.courseQuillEditor;
    editor.setHTML(this.editedCourse.content);
  },
};
</script>

<style></style>
