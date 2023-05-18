<template>
    <h1>武術自衛散打 - 考试动作</h1>
    <DeferredContent>
        <TabView :scrollable="true">
            <TabPanel
                v-for="(syllabus, index) in getAssessmentSyllabus"
                :key="syllabus.id"
                :header="syllabus.level"
            >
                <Button
                    v-if="isAdmin"
                    label="添加項目"
                    @click="create(index)"
                />
                <ol class="list-group list-group-flush list-group-numbered">
                    <li
                        v-for="(item, i) in syllabus.syllabus"
                        :key="item"
                        class="list-group-item"
                    >
                        {{ item }}
                        <button
                            v-if="isAdmin"
                            class="btn btn-primary mb-3"
                            type="submit"
                            @click="edit(index, i)"
                        >
                            編輯
                        </button>
                    </li>
                </ol>
            </TabPanel>
        </TabView>
    </DeferredContent>
</template>

<script>
import {GET_SYLLABUS, MODIFY_SYLLABUS} from "@/apollo/assessment-syllabus";
// import {useMeta} from "vue-meta";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "SyllabusView",
    apollo: {
        getAssessmentSyllabus: {query: GET_SYLLABUS},
    },
    setup() {
        // useMeta({
        //     title: "考試動作",
        // });
    },
    data() {
        return {
            editingSyllabus: -1,
            syllabusIndex: -1,
        };
    },
    computed: {
        ...mapGetters(["isAdmin"]),
    },
    methods: {
        ...mapActions(["toggleModel"]),
        edit(index, i) {
            this.editingSyllabus = index;
            this.syllabusIndex = i;
            const modelDetails = {
                content: this.getAssessmentSyllabus[index].syllabus[i],
                submitFunction: this.submitChange,
                type: "syllabus",
            };
            this.toggleModel(modelDetails);
        },
        create(index) {
            this.editingSyllabus = index;
            this.syllabusIndex = -1;
            const modelDetails = {
                content: "",
                submitFunction: this.submitChange,
                type: "syllabus",
            };
            this.toggleModel(modelDetails);
        },
        submitChange(newContent) {
            // id of view
            const assessment = Object.assign(
                {},
                this.getAssessmentSyllabus[this.editingSyllabus]
            );

            let syllabus = Object.assign([], assessment.syllabus);
            if (this.syllabusIndex >= 0) {
                syllabus[this.syllabusIndex] = newContent;
            } else {
                syllabus.push(newContent);
            }const {mutate} = useMutation(MODIFY_SYLLABUS, {
                    level: {
                        level: assessment.name,
                        levelId: assessment.id,
                        syllabus: syllabus,
                    },
                });
            this.editingSyllabus = -1;
            this.syllabusIndex = -1;
        },
    },
};
</script>
