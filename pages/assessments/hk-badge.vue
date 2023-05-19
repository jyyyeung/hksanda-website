<template>
    <div id="hk-badge">
        <render-view :route="'/assessments/hk-badge'" />
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
const getAssessmentSyllabus = data.value?.getAssessmentSyllabus;

useSeoMeta({
    title: '武術散手章別全港公開試',
    description: '香港武術散手自衛術一至十級青少年章別計劃是由香港政府康樂及文化事務署認可及資助之全港性公開武術項目考核試，本會學員可報考章別考核試，考取認可武術章別資格及證書。 而成年學員亦可推薦報考政府認可之武術散打教練及裁判證書課程，考取認可專業資格。'
})

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
