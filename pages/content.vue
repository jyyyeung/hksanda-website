<template>
    <section>
        <div class="w-full">
            <section v-if="pending">
                Loading
            </section>
            <section v-else v-for="course in getCourseContents">
                <Markdown v-bind:source="'# ' + course?.name" />
                <button v-if="getIsAdmin"
                    class="text-white bg-primary font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                    type="button" @click="edit(courseDetail)">
                    編輯 {{ course?.name }}
                </button>
                <Markdown :source="course?.content" />
                <Markdown :source="footer" />
            </section>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ADD_COURSE_CONTENT, GET_COURSE_CONTENTS } from "@/apollo/course-contents";


const footer = `\n\n---\n如希望自行组班或报名私人班，欢迎浏览[*私人及组班课程*](/course/session)\n如有任何疑问，欢迎进行咨询`

const store = useMainStore();
const { getIsAdmin } = storeToRefs(store);

const { data, pending } = await useLazyAsyncQuery(GET_COURSE_CONTENTS);
const getCourseContents = data?.value?.getCourseContents;
console.log(getCourseContents)

const { toggleModel } = store;

useSeoMeta({
    title: '學習內容',
})

function newCourse(course) {
    const { mutate } = useMutation(ADD_COURSE_CONTENT, {
        course: course,
    });
    // TODO: check if mutation works
}


function create() {
    const modelDetails = {
        content: {
            name: "",
            content: "",
        },
        type: "course",
        submitFunction: newCourse,
    };
    toggleModel(modelDetails);
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
