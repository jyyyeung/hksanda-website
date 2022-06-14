<template>
    <div id="hk-badge">
        <render-view :view="view" />
        <TabView>
            <TabPanel
                v-for="syllabus in syllabuses"
                :key="syllabus.id"
                :header="syllabus.level"
            >
                <ol class="list-group list-group-flush list-group-numbered">
                    <li
                        v-for="item in syllabus.syllabus"
                        :key="item"
                        class="list-group-item"
                    >
                        {{ item }}
                    </li>
                </ol>
            </TabPanel>
        </TabView>
    </div>
</template>

<script>
import { GET_SYLLABUS } from "@/apollo/assessment-syllabus";
import { useMeta } from "vue-meta";
import { mapGetters } from "vuex";
import RenderView from "@/components/others/RenderView.vue";

export default {
    name: "HKBadge",
    components: { RenderView },
    setup() {
        useMeta({
            title: "武術散手章別全港公開試",
        });
    },
    apollo: {
        getAssessmentSyllabus: { query: GET_SYLLABUS },
    },
    computed: {
        ...mapGetters(["getViewByRoute"]),
        view() {
            return this.getViewByRoute("/assessments/hk-badge");
        },
        syllabuses() {
            // NOTE: Change text to a better expression?
            console.log(this.getAssessmentSyllabus);
            const syllabuses = this.getAssessmentSyllabus
                ? this.getAssessmentSyllabus.map((level) => ({
                    syllabus: level.syllabus.filter((syllabus) =>
                        syllabus.includes("散手章別計劃規定動作")
                    ),
                    level: level.level,
                }))
                : [];

            return syllabuses;
        },
    },
};
</script>
