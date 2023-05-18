<template>
    <Dialog :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :closable="false" :style="{ width: '50vw' }"
        :visible="display" header="編輯內容">
        <QuillEditor v-if="details.type === 'text'" ref="quillEditor" :content="details.content" content-type="html"
            toolbar="minimal" />
        <CarouselEditor v-else-if="details.type === 'carousel'" :slides="details.content"
            :submit-function="details.submitFunction" />
        <course-editor v-else-if="details.type === 'course'" :course="details.content" :submit-function="submitCourse" />
        <instructor-editor v-else-if="details.type === 'instructor'" :instructor="details.content"
            :submit-function="submitInstructor" />
        <class-session-editor v-else-if="details.type === 'class'" :class-details="details.content"
            :submit-function="submitClassSession" />
        <rank-editor v-else-if="details.type === 'rank'" :ranking="details.content" :submit-function="submitRanking" />

        <template #footer>
            <Button label="关闭" @click="toggleModel" />
            <Button v-if="details.type === 'text'" label="儲存" @click="submitChange" />
        </template>
    </Dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// enable everything
import TurndownService from "turndown";
import CarouselEditor from "./CarouselEditor.vue";
// import CourseEditor from "@/components/admin/CourseEditor.vue";
// import ClassSessionEditor from "@/components/admin/ClassSessionEditor.vue";
// import InstructorEditor from "@/components/admin/InstructorEditor.vue";
// import RankEditor from "@/components/admin/RankEditor.vue";

export default {
    name: "EditModel",

    components: { RankEditor, InstructorEditor, ClassSessionEditor, CarouselEditor, CourseEditor },
    data() {
        const turndownService = new TurndownService({
            headingStyle: "atx",
            hr: "---",
            bulletListMarker: "-",
        });
        return { turndownService };
    },
    computed: {
        ...mapGetters({
            modelIsOpen: "modelIsOpen",
            details: "getModelDetails",
        }),
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
            const markdown = this.turndownService.turndown(
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
        submitClassSession(editedClassSession) {
            const classDetails = {
                ...editedClassSession,
            };
            this.details.submitFunction(classDetails);
            this.toggleModel();
        },
        submitInstructor(editedInstructor) {
            const instructorDetails = {
                ...editedInstructor
            }
            this.details.submitFunction(instructorDetails)
            this.toggleModel()
        },
        submitRanking(editedRanking) {
            const rankingDetails = {
                ...editedRanking
            }
            this.details.submitFunction(rankingDetails)
            this.toggleModel()
        }
    },
};
</script>

