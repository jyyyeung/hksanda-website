<template>
    <div id="hk-badge">
        <render-view :view="view" />
        <TabView>
            <TabPanel v-for="syllabus in syllabuses" :key="syllabus.id" :header="syllabus.level">
                <ol class="list-group list-group-flush list-group-numbered">
                    <li v-for="item in syllabus.syllabus" :key="item" class="list-group-item">
                        {{ item }}
                    </li>
                </ol>
            </TabPanel>
        </TabView>
    </div>
</template>

<script setup>
import { GET_SYLLABUS } from "@/apollo/assessment-syllabus";
import { RenderView } from "#components"

const { data } = await useAsyncQuery(GET_SYLLABUS);
const getAssessmentSyllabus = data.value.getSyllabus;

const store = useMainStore();
const { getViewByRoute } = store;

const view = getViewByRoute("/assessments/hk-badge");

const syllabuses = computed(() => {
    // NOTE: Change text to a better expression?
    console.log(getAssessmentSyllabus);
    const syllabuses = getAssessmentSyllabus
        ? getAssessmentSyllabus.map((level) => ({
            syllabus: level.syllabus.filter((syllabus) =>
                syllabus.includes("規定動作")
            ),
            level: level.level,
        }))
        : [];

    console.log(syllabuses)

    return syllabuses;
})

</script>
