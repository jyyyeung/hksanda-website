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
            <button type="button" label="关闭" @click="toggleModel" />
            <button type="button" v-if="details.type === 'text'" label="儲存" @click="submitChange" />
        </template>
    </Dialog>
</template>

<script setup>
import TurndownService from "turndown";
import { CarouselEditor, ClassSessionEditor, CourseEditor, InstructorEditor, RankEditor } from "#components"

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
const { toggleModel, updateView } = store;

const display = computed({
    get() {
        return modelIsOpen;
    },
    set() {
        toggleModel();
    }
})

function submitChange() {
    console.log(details);
    const markdownContents = turndownService.turndown(
        this.$refs.quillEditor.getHTML()
    );
    details.submitFunction(markdownContents);
    toggleModel();
}

function submitCourse(editedCourse) {
    const course = {
        ...editedCourse,
        content: turndownService.turndown(
            this.$refs.courseQuillEditor.getHTML
        ),
    };
    details.submitFunction(course);
    toggleModel();
}

function submitClassSession(editedClassSession) {
    const classDetails = {
        ...editedClassSession,
    };
    details.submitFunction(classDetails);
    toggleModel();
}

function submitInstructor(editedInstructor) {
    const instructorDetails = {
        ...editedInstructor
    }
    details.submitFunction(instructorDetails)
    toggleModel()
}

function submitRanking(editedRanking) {
    const rankingDetails = {
        ...editedRanking
    }
    details.submitFunction(rankingDetails)
    toggleModel()
}


</script>

