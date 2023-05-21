<template>
    <div id="hk-badge">
        <render-view :route="'/assessments/hk-badge'" />
        <div class=" w-full">
            <ul class="tab flex overflow-x-scroll">
                <li :class="`py-2 min-w-fit ${route.params.id == syllabus.id && 'bg-primary text-white'}`"
                    v-for="(syllabus, index) in syllabuses" :key="syllabus.id">
                    <NuxtLink :href="`/assessments/hk-badge/${syllabus.id}`" aria-current="page" class="tab-link py-2 p-4">
                        {{ syllabus.level }}</NuxtLink>
                </li>
            </ul>

            <div class="p-4">
                <NuxtPage></NuxtPage>
            </div>
        </div>
    </div>
</template>

<script setup>
import { GET_SYLLABUS } from "@/apollo/assessment-syllabus";
import { RenderView } from "#components"

const { data } = await useAsyncQuery(GET_SYLLABUS);
const getAssessmentSyllabus = data.value?.getAssessmentSyllabus;
const route = useRoute();

useSeoMeta({
    title: '武術散手章別全港公開試',
    description: '香港武術散手自衛術一至十級青少年章別計劃是由香港政府康樂及文化事務署認可及資助之全港性公開武術項目考核試，本會學員可報考章別考核試，考取認可武術章別資格及證書。 而成年學員亦可推薦報考政府認可之武術散打教練及裁判證書課程，考取認可專業資格。'
})

const syllabuses = computed(() => {
    // NOTE: Change text to a better expression?
    console.log(getAssessmentSyllabus);
    const syllabuses = getAssessmentSyllabus
        ? getAssessmentSyllabus.map((level) => ({
            id: level.id,
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
