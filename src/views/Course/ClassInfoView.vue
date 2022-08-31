<template>
    <h1>常規課程及地點</h1>
    <button
        v-if="isAdmin"
        class="btn btn-success"
        type="submit"
        @click="create"
    >
        添加課堂
    </button>
    <div class="container">
        <div class="row">
            <class-info-card
                v-for="session in getClasses"
                :key="session.id"
                :edit="edit"
                :is-admin="isAdmin"
                :remove="remove"
                :session="session"
            />
        </div>
    </div>
</template>

<script>
import ClassInfoCard from "@/components/class/ClassInfoCard.vue";
import {ADD_CLASS, GET_CLASSES, REMOVE_CLASS, UPDATE_CLASS} from "@/apollo/class";
import {useMeta} from "vue-meta";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "ClassInfo",
    components: {ClassInfoCard},
    apollo: {
        getClasses: {query: GET_CLASSES},
    },
    setup() {
        useMeta({
            title: "常規課程",
        });
    }, computed: {
        ...mapGetters(["isAdmin"]),
    }, methods: {
        ...mapActions(["toggleModel"]),
        remove(sessionDetails) {
            console.log("remove: ", sessionDetails)
            this.$apollo.mutate({
                mutation: REMOVE_CLASS,
                variables: {
                    classId: sessionDetails.id,
                },
            });

        },
        edit(sessionDetails) {
            console.log("edit: ", sessionDetails)
            const modelDetails = {
                content: sessionDetails,
                submitFunction: this.submitChange,
                type: "class",
            };
            this.toggleModel(modelDetails);
        },
        create() {
            const modelDetails = {
                content: {
                    title: "",
                    type: "",
                    students: null,
                    location: null,
                    mapQuery: null,
                    classroom: null,
                },
                submitFunction: this.submitChange,
                type: "class",
            };
            this.toggleModel(modelDetails);
        },
        newClassSession(classDetails) {
            this.$apollo.mutate({
                mutation: ADD_CLASS,
                variables: {
                    details: classDetails
                },
            });
        },
        updateClassSession(classDetails) {
            console.log(classDetails);
            this.$apollo.mutate({
                mutation: UPDATE_CLASS,
                variables: {
                    details: classDetails,
                },
            });
        },
        submitChange(newContent) {
            console.log(newContent)

            if (newContent.classId) {
                // Class Exists already
                this.updateClassSession(newContent)
            } else {
                // this is a new class
                this.newClassSession(newContent)
            }
        },
    },
};
</script>
