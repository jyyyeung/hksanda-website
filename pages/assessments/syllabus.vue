<template>
    <h1>武術自衛散打 - 考试动作</h1>
    <DeferredContent>
        <TabView :scrollable="true">
            <TabPanel v-for="(syllabus, index) in getAssessmentSyllabus" :key="syllabus.id" :header="syllabus.level">
                <Button v-if="getIsAdmin" label="添加項目" @click="create(index)" />
                <ol class="list-group list-group-flush list-group-numbered">
                    <li v-for="(item, i) in syllabus.syllabus" :key="item" class="list-group-item">
                        {{ item }}
                        <button v-if="getIsAdmin" class="btn btn-primary mb-3" type="submit" @click="edit(index, i)">
                            編輯
                        </button>
                    </li>
                </ol>
            </TabPanel>
        </TabView>
    </DeferredContent>
</template>

<script setup>
import { GET_SYLLABUS, MODIFY_SYLLABUS } from "@/apollo/assessment-syllabus";
// import {useMeta} from "vue-meta";

const { data } = await useAsyncQuery(GET_SYLLABUS);
const getAssessmentSyllabus = data?.value?.getAssessmentSyllabus;
const editingSyllabus = -1;
const syllabusIndex = -1;

const store = useMainStore();
const { getIsAdmin } = storeToRefs(store);
const { toggleModel } = store;

function edit(index, i) {
    editingSyllabus = index;
    syllabusIndex = i;
    const modelDetails = {
        content: getAssessmentSyllabus[index].syllabus[i],
        submitFunction: submitChange,
        type: "syllabus",
    };
    toggleModel(modelDetails);
}

function create(index) {
    editingSyllabus = index;
    syllabusIndex = -1;
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
        getAssessmentSyllabus[editingSyllabus]
    );

    let syllabus = Object.assign([], assessment.syllabus);
    if (syllabusIndex >= 0) {
        syllabus[syllabusIndex] = newContent;
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
    editingSyllabus = -1;
    syllabusIndex = -1;
}


</script>
