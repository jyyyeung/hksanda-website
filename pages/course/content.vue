<template>
    <button v-if="isAdmin" class="btn btn-success" type="submit" @click="create">
        添加課堂介紹
    </button>
    <TabView :active-index="activeIndex">
        <TabPanel v-for="courseDetail in getCourseContents" :key="courseDetail.name" :header="courseDetail.name">
            <Markdown :source="'# ' + courseDetail.name"/>
            <button v-if="isAdmin" class="btn btn-primary" type="submit" @click="edit(courseDetail)">
                編輯 {{ courseDetail.name }}
            </button>
            <Markdown :source="courseDetail.content"/>
            <Markdown :source="footer"/>
        </TabPanel>
    </TabView>
</template>

<script setup>
import {ADD_COURSE_CONTENT, GET_COURSE_CONTENTS, UPDATE_COURSE_CONTENT,} from "@/apollo/course-contents";
// import Markdown from "@/components/others/Markdown.vue";

const activeIndex = 0;
const footer = `\n\n---\n如希望自行组班或报名私人班，欢迎浏览[*私人及组班课程*](/course/session)\n如有任何疑问，欢迎进行咨询`
const openModel = false
const course = reactive({
    name: "",
    contents: "",
})

const store = useMainStore();
const {getIsAdmin} = storeToRefs(store);

const {data} = await useAsyncQuery(GET_COURSE_CONTENTS);
const getCourseContents = data.value?.getCourseContents;

const {toggleModel} = store;

function newCourse(course) {
    const {mutate} = useMutation(ADD_COURSE_CONTENT, {
        course: course,
    });
    // TODO: check if mutation works
}

function editCourse(course) {
    // TODO: check if mutation works
    console.log(course);
    const {mutate} = useMutation(UPDATE_COURSE_CONTENT, {
        course: course,
    });
}

function edit(course) {
    const modelDetails = {
        content: course,
        type: "course",
        submitFunction: this.editCourse,
    };
    console.log(modelDetails);
    this.toggleModel(modelDetails);
}

function create() {
    const modelDetails = {
        content: {
            name: "",
            content: "",
        },
        type: "course",
        submitFunction: this.newCourse,
    };
    this.toggleModel(modelDetails);
}


</script>

<style lang="scss" scoped>
.sizes {
  .p-inputtext {
    display: block;
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.p-field * {
  display: block;
}
</style>
