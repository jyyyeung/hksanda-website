<template>
    <div class="container">
        <div class="mb-3">
            <div class="p-float-label">
                <!-- eslint-disable -->
                <label for="courseName">
                    <InputText id="courseName" v-model="editedCourse.name" type="text" />
                    課堂名稱
                </label>

                <!-- eslint-enable -->
            </div>
        </div>
        <div class="mb-3">
            <QuillEditor ref="courseQuillEditor" v-model:content="editedCourse.content" content-type="html"
                placeholder="添加課堂介紹" toolbar="minimal" />
        </div>
        <Button label="儲存" @click="submitFunction(editedCourse)" />
    </div>
</template>

<script>
// import InputText from "primevue/inputtext/sfc";

export default {
    name: "CourseEditor",
    components: {
        InputText,
    },
    props: {
        course: {
            type: Object,
            default: () => ({
                name: "",
                content: ""
            })
        },
        submitFunction: {
            type: Function,
            default: () => {
                return null
            }
        }
    },
    data() {
        return {
            editedCourse: {
                name: "",
                content: "",
            },
        };
    },
    mounted() {
        this.editedCourse = Object.assign({}, this.course);
        const editor = this.$refs.courseQuillEditor;
        editor.setHTML(this.editedCourse.content);
    },
};
</script>

<style>
</style>
