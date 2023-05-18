<template>
    <Dialog :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :closable="false" :style="{ width: '50vw' }"
            :visible="display" header="編輯內容">
        <QuillEditor v-if="details.type === 'text'" ref="quillEditor" :content="details.content" content-type="html"
                     toolbar="minimal"/>
        <CarouselEditor v-else-if="details.type === 'carousel'" :slides="details.content"
                        :submit-function="details.submitFunction"/>
        <course-editor v-else-if="details.type === 'course'" :course="details.content" :submit-function="submitCourse"/>
        <instructor-editor v-else-if="details.type === 'instructor'" :instructor="details.content"
                           :submit-function="submitInstructor"/>
        <class-session-editor v-else-if="details.type === 'class'" :class-details="details.content"
                              :submit-function="submitClassSession"/>
        <rank-editor v-else-if="details.type === 'rank'" :ranking="details.content" :submit-function="submitRanking"/>

        <template #footer>
            <Button label="关闭" @click="toggleModel"/>
            <Button v-if="details.type === 'text'" label="儲存" @click="submitChange"/>
        </template>
    </Dialog>
</template>

<script setup>
import TurndownService from "turndown";
import {CarouselEditor, ClassSessionEditor, CourseEditor, InstructorEditor, RankEditor} from "#components"

const turndownService = new TurndownService({
    headingStyle: "atx",
    hr: "---",
    bulletListMarker: "-",
});
const store = useMainStore();

const {
    getModelIsOpen: modelIsOpen,
    getModelDetails: details
} = storeToRefs(store);
const {toggleModel, updateView} = store;

const display = computed({
    get() {
        return this.modelIsOpen;
    },
    set() {
        this.toggleModel();
    }
})

function submitChange() {
    console.log(this.details);
    const markdown = this.turndownService.turndown(
        this.$refs.quillEditor.getHTML()
    );
    this.details.submitFunction(markdown);
    this.toggleModel();
}

function submitCourse(editedCourse) {
    const course = {
        ...editedCourse,
        content: this.turndownService.turndown(
            this.$refs.courseQuillEditor.getHTML
        ),
    };
    this.details.submitFunction(course);
    this.toggleModel();
}

function submitClassSession(editedClassSession) {
    const classDetails = {
        ...editedClassSession,
    };
    this.details.submitFunction(classDetails);
    this.toggleModel();
}

function submitInstructor(editedInstructor) {
    const instructorDetails = {
        ...editedInstructor
    }
    this.details.submitFunction(instructorDetails)
    this.toggleModel()
}

function submitRanking(editedRanking) {
    const rankingDetails = {
        ...editedRanking
    }
    this.details.submitFunction(rankingDetails)
    this.toggleModel()
}


</script>

