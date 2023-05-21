<template>
    <section>
        <button v-if="getIsAdmin"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            type="submit" @click="create">
            添加課堂介紹
        </button>

        <div class="w-full">
            <ul class="tab flex">
                <li :class="`py-2 ${route.params.id == courseDetail.id && 'bg-primary text-white'}`"
                    v-for="courseDetail in getCourseContents" :key="courseDetail.id">
                    <NuxtLink :href="`/course/content/${courseDetail.id}`" aria-current="page" class="tab-link py-2 p-4">
                        {{ courseDetail.name }}</NuxtLink>
                </li>
            </ul>

            <div class="p-4">
                <NuxtPage></NuxtPage>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ADD_COURSE_CONTENT, GET_COURSE_CONTENTS } from "@/apollo/course-contents";
// import Markdown from "@/components/others/Markdown.vue";

const route = useRoute()

const store = useMainStore();
const { getIsAdmin } = storeToRefs(store);

const { data } = await useAsyncQuery(GET_COURSE_CONTENTS);
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
