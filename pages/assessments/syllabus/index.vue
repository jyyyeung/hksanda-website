<template>
    <section>
        <h1 class="text-4xl text-center">武術自衛散打 - 考试动作</h1>

        <div class=" w-full">
            <ul class="tab flex overflow-x-scroll">
                <li :class="`py-2 min-w-fit ${route.params.id == syllabus.id && 'bg-primary text-white'}`"
                    v-for="(syllabus, index) in getAssessmentSyllabus" :key="syllabus.id">
                    <NuxtLink :href="`/assessments/syllabus/${syllabus.id}`" aria-current="page" class="tab-link py-2 p-4">
                        {{ syllabus.level }}</NuxtLink>
                </li>
            </ul>

            <div class="p-4">
                <NuxtPage></NuxtPage>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
import { GET_SYLLABUS, MODIFY_SYLLABUS } from "@/apollo/assessment-syllabus";
// import {useMeta} from "vue-meta";

useSeoMeta({
    title: '武術自衛散手考試動作',
})

const route = useRoute();

const { data } = await useAsyncQuery(GET_SYLLABUS);
const getAssessmentSyllabus = data.value?.getAssessmentSyllabus;

const editingSyllabus = ref(-1);
const syllabusIndex = ref(-1);

const store = useMainStore();
const { getIsAdmin } = storeToRefs(store);
const { toggleModel } = store;

function edit(index, i) {
    editingSyllabus.value = index;
    syllabusIndex.value = i;
    const modelDetails = {
        content: getAssessmentSyllabus[index].syllabus[i],
        submitFunction: submitChange,
        type: "syllabus",
    };
    toggleModel(modelDetails);
}

function create(index) {
    editingSyllabus.value = index;
    syllabusIndex.value = -1;
    const modelDetails = {
        content: "",
        submitFunction: submitChange,
        type: "syllabus",
    };
    toggleModel(modelDetails);
}

function submitChange(newContent) {
    // id of view
    const assessment = Object.assign(
        {},
        getAssessmentSyllabus[editingSyllabus.value]
    );

    let syllabus = Object.assign([], assessment.syllabus);
    if (syllabusIndex.value >= 0) {
        syllabus[syllabusIndex.value] = newContent;
    } else {
        syllabus.push(newContent);
    }
    const { mutate } = useMutation(MODIFY_SYLLABUS, {
        level: {
            level: assessment.name,
            levelId: assessment.id,
            syllabus: syllabus,
        },
    });
    editingSyllabus.value = -1;
    syllabusIndex.value = -1;
}


</script>
