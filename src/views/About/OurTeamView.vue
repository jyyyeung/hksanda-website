<template>
    <div class="container">
        <h1>專業教練團隊</h1>
        <button
            v-if="isAdmin"
            class="btn btn-success"
            type="submit"
            @click="create"
        >
            添加教练
        </button>
        <div class="row">
            <div
                v-for="instructor in getInstructors"
                :key="instructor.id"
                class="col-lg-6 my-2"
            >
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">
                            {{ instructor.name }}
                        </h2>
                        <h5 class="card-subtitle mb-2 text-muted">
                            {{ instructor.strengths }}
                        </h5>
                        <p
                            v-for="(cert, i) in instructor.certificates"
                            :key="cert + i"
                            class="card-text"
                        >
                            {{ cert }}
                        </p>
                    </div>
                    <div
                        v-if="instructor.experiences || isAdmin"
                        class="card-footer"
                    >
                        <p
                            v-for="experience in instructor.experiences"
                            :key="instructor.id + experience"
                        >
                            {{ experience }}
                        </p>
                        <Button
                            v-if="isAdmin"
                            :label="`編輯 ${instructor.name}`"
                            class="p-button-primary p-button-sm"
                            type="submit"
                            @click="edit(instructor)"
                        />
                        <ConfirmPopup />
                        <Button
                            v-if="isAdmin"
                            class="p-button-danger p-button-outlined p-button-sm ml-2"
                            icon="pi pi-times"
                            label="删除"
                            @click="confirm($event, instructor)"
                        />
                    </div>
                </div>
            </div>

            <!--XXX: Add image or no? -->
            <!-- <div instructor="col-4">
        <Image
          preview
          instructor="instructor__image"
          src="https://www.hksanda.com/images/IMG_20181209_201349.jpg"
          alt=""
        />
            </div>-->
        </div>
        <hr>
        <h1>持有認可實用自衛散手段位證書</h1>
        <div
            v-for="rank in getRankings"
            :key="rank.name"
        >
            <h2>{{ rank.name }}</h2>
            <button
                v-if="isAdmin"
                class="btn btn-success"
                type="submit"
                @click="modify(rank)"
            >
                编辑 {{ rank.name }} 学员
            </button>
            <div class="row">
                <div
                    v-for="awardee in rank.awardees"
                    :key="awardee"
                    class="tag m-2 rank_tag"
                >
                    {{ awardee }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {GET_INSTRUCTORS} from "@/apollo/instructor";
import {GET_RANKINGS, UPDATE_RANK} from "@/apollo/rank";
import {useMeta} from "vue-meta";
import {mapActions, mapGetters} from "vuex";
import {ADD_INSTRUCTOR, REMOVE_INSTRUCTOR, UPDATE_INSTRUCTOR} from "@/apollo/instructor.js";

export default {
    name: "OurTeamView",
    setup() {
        useMeta({
            title: "專業教練團隊",
        });
    },
    apollo: {
        getInstructors: {query: GET_INSTRUCTORS},
        getRankings: {query: GET_RANKINGS},
    },
    computed: {
        ...mapGetters(["isAdmin"]),
    },
    methods: {
        ...mapActions(["toggleModel"]),
        remove(instructorDetails) {
            console.log("remove: ", instructorDetails)
            this.$apollo.mutate({
                mutation: REMOVE_INSTRUCTOR,
                variables: {
                    instructorId: instructorDetails.id,
                },
            });

        },
        edit(instructorDetails) {
            console.log("edit: ", instructorDetails)
            const modelDetails = {
                content: {
                    ...instructorDetails,
                    certificates: instructorDetails.certificates ? instructorDetails.certificates.join('\n') : "",
                    experiences: instructorDetails.experiences ? instructorDetails.experiences.join('\n') : "",
                },
                submitFunction: this.submitChange,
                type: "instructor",
            };
            this.toggleModel(modelDetails);
        },
        create() {
            const modelDetails = {
                content: {
                    name: "",
                    strengths: "",
                    certificates: null,
                    experiences: null
                },
                submitFunction: this.submitChange,
                type: "instructor",
            };
            this.toggleModel(modelDetails);
        },
        newInstructor(instructorDetails) {
            console.log("new instructor", instructorDetails)
            this.$apollo.mutate({
                mutation: ADD_INSTRUCTOR,
                variables: {
                    instructor: {
                        ...instructorDetails,
                        certificates: instructorDetails.certificates != null ? instructorDetails.certificates.split('\n') : "",
                        experiences: instructorDetails.experiences != null ? instructorDetails.experiences.split('\n') : ""
                    }
                },
            });
        },
        updateInstructor(instructorDetails) {
            console.log("update instructor", instructorDetails);
            this.$apollo.mutate({
                mutation: UPDATE_INSTRUCTOR,
                variables: {
                    instructor: {
                        ...instructorDetails,
                        certificates: instructorDetails.certificates != null ? instructorDetails.certificates.split('\n') : "",
                        experiences: instructorDetails.experiences != null ? instructorDetails.experiences.split('\n') : ""
                    },
                },
            });
        },
        submitChange(editedInstructor) {
            console.log(editedInstructor)
            if (editedInstructor.instructorId) {
                // Instructor Exists already
                this.updateInstructor(editedInstructor)
            } else {
                // this is a new instructor
                this.newInstructor(editedInstructor)
            }
        },
        confirm(event, instructor) {
            this.$confirm.require({
                target: event.currentTarget,
                message: `你确定要删除 ${instructor.name} 吗？`,
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    this.remove(instructor)
                    this.$toast.add({
                        severity: 'info',
                        summary: '成功',
                        detail: `已成功删除 ${instructor.name}`,
                        life: 3000
                    });
                },
                reject: () => {
                    // this.$toast.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000});
                }
            });
        },
        modify(rankDetails) {
            console.log("modify: ", rankDetails)
            const modelDetails = {
                content: {
                    ...rankDetails,
                    awardees: rankDetails.awardees ? rankDetails.awardees.join('\n') : "",
                },
                submitFunction: this.modifyRanking,
                type: "rank",
            };
            this.toggleModel(modelDetails);
        },
        modifyRanking(rankDetails) {
            console.log("update instructor", rankDetails);
            this.$apollo.mutate({
                mutation: UPDATE_RANK,
                variables: {
                    details: {
                        ...rankDetails,
                        awardees: rankDetails.awardees != null ? rankDetails.awardees.split('\n') : "",
                    },
                },
            });
        }
    }
};
</script>

<style lang="scss">
.rank_tag {
    width: auto !important;
}

.instructor {
    &__image {
        width: 100%;
    }
}

.card {
    background-color: transparent;
}

.tag {
    background-image: url("../../assets/images/wood.jpeg");
    background-repeat: repeat;
    background-size: contain;
    width: fit-content;
    writing-mode: vertical-lr;
    font-size: x-large;

    text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
    0px -1px 0px rgba(0, 0, 0, 0.7);

    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);

    padding: 1%;
    text-align-last: justify;
}
</style>
