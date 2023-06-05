<template>
    <section>
        <div class="w-full">
            <section v-if="pending">
                <TextSkeleton />
            </section>
            <section v-else v-for="course in courseContents">
                <Markdown v-bind:source="'# ' + course?.name" />
                <SanityContent :blocks="course?.content" />
                <Markdown :source="footer" />
            </section>
        </div>
    </section>
</template>

<script setup lang="ts">
// import { ADD_COURSE_CONTENT, GET_COURSE_CONTENTS } from "@/apollo/course-contents";
// import { SanityContent } from "~/.nuxt/components";


const footer = `\n\n---\n如希望自行组班或报名私人班，欢迎浏览[*私人及组班课程*](/course/session)\n如有任何疑问，欢迎进行咨询`

// const store = useMainStore();
// const { getIsAdmin } = storeToRefs(store);

const GET_COURSE_CONTENTS = groq`*[_type == "course-content"]`

const { data: courseContents, pending, refresh } = useSanityQuery(GET_COURSE_CONTENTS);
// const getCourseContents = data?.value?.getCourseContents;
// console.log(getCourseContents)

// const { toggleModel } = store;
if (!courseContents.value) {
    refresh()
}
useSeoMeta({
    title: '學習內容',
})

// function newCourse(course) {
//     const { mutate } = useMutation(ADD_COURSE_CONTENT, {
//         course: course,
//     });
//     // TODO: check if mutation works
// }


// function create() {
//     const modelDetails = {
//         content: {
//             name: "",
//             content: "",
//         },
//         type: "course",
//         submitFunction: newCourse,
//     };
//     toggleModel(modelDetails);
// }


</script>

