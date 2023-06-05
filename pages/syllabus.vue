<template>
    <section>
        <h1 class="text-4xl text-center">武術自衛散打 - 考试动作</h1>
        <div class=" w-full">
            <section v-if="pending">
                Loading
            </section>
            <div v-else>
                <section :key="syllabus._id" v-for="syllabus in syllabuses">
                    <h2>{{ syllabus.level }}</h2>
                    <ol class="list-group list-group-flush list-group-numbered">
                        <li v-for="(item, i) in syllabus?.syllabus" :key="i" class="list-decimal list-outside">
                            {{ item }}
                        </li>
                    </ol>
                </section>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { MODIFY_SYLLABUS } from "@/apollo/assessment-syllabus";

useSeoMeta({
    title: '武術自衛散手考試動作',
})

const GET_SYLLABUS = groq`*[_type == "assessment-syllabus"] | order(index asc)`

const { data: syllabuses, pending, refresh } = useSanityQuery(GET_SYLLABUS);
// const getAssessmentSyllabus = data.value?.getAssessmentSyllabus;
if (!syllabuses.value) {
    refresh()
}
// const editingSyllabus = ref(-1);
// const syllabusIndex = ref(-1);

// const store = useMainStore();
// const { toggleModel } = store;

// function edit(index, i) {
//     editingSyllabus.value = index;
//     syllabusIndex.value = i;
//     const modelDetails = {
//         content: getAssessmentSyllabus[index].syllabus[i],
//         submitFunction: submitChange,
//         type: "syllabus",
//     };
//     toggleModel(modelDetails);
// }

// function create(index) {
//     editingSyllabus.value = index;
//     syllabusIndex.value = -1;
//     const modelDetails = {
//         content: "",
//         submitFunction: submitChange,
//         type: "syllabus",
//     };
//     toggleModel(modelDetails);
// }

// function submitChange(newContent) {
//     // id of view
//     const assessment = Object.assign(
//         {},
//         getAssessmentSyllabus[editingSyllabus.value]
//     );

//     let syllabus = Object.assign([], assessment.syllabus);
//     if (syllabusIndex.value >= 0) {
//         syllabus[syllabusIndex.value] = newContent;
//     } else {
//         syllabus.push(newContent);
//     }
//     const { mutate } = useMutation(MODIFY_SYLLABUS, {
//         level: {
//             level: assessment.name,
//             levelId: assessment.id,
//             syllabus: syllabus,
//         },
//     });
//     editingSyllabus.value = -1;
//     syllabusIndex.value = -1;
// }


</script>
