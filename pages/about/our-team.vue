<template>
    <div class="container">
        <h1>專業教練團隊</h1>
        <button v-if="getIsAdmin"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            type="button" @click="create">
            添加教练
        </button>
        <div class="xl:columns-3 md:columns-2 columns-1">
            <div v-for="instructor in getInstructors" :key="instructor.id" class="w-full inline-block my-2">
                <div class="max-w-sm p-6  border-4 border-primary rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="card-body">
                        <h2 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {{ instructor.name }}
                        </h2>
                        <h5 class="card-subtitle mb-2 text-muted">
                            {{ instructor.strengths }}
                        </h5>
                        <p v-for="(cert, i) in instructor.certificates" :key="cert + i"
                            class="font-normal text-gray-700 dark:text-gray-400">
                            {{ cert }}
                        </p>
                    </div>
                    <div v-if="instructor.experiences || getIsAdmin">
                        <p v-for="experience in instructor.experiences" :key="instructor.id + experience"> {{ experience }}
                        </p>
                        <button v-if="getIsAdmin" class="p-button-primary p-button-sm" type="button"
                            @click="edit(instructor)">編輯 {{ instructor.name }}</button>
                        <!--<ConfirmPopup />-->
                        <button type="button" v-if="getIsAdmin" class="p-button-danger p-button-outlined p-button-sm ml-2"
                            icon="pi pi-times" @click="confirm($event, instructor)">删除</button>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <h1>持有認可實用自衛散打段位證書</h1>
        <div v-for="rank in getRankings" :key="rank.name">
            <h2>{{ rank.name }}</h2>
            <button v-if="getIsAdmin"
                class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                type="button" @click="modify(rank)">
                编辑 {{ rank.name }} 学员
            </button>
            <div class="flex flex-wrap">
                <div v-for="awardee in rank.awardees" :key="awardee" class="tag m-2 rank_tag">
                    {{ awardee }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ADD_INSTRUCTOR, GET_INSTRUCTORS, REMOVE_INSTRUCTOR, UPDATE_INSTRUCTOR } from "@/apollo/instructor";
import { GET_RANKINGS, UPDATE_RANK } from "@/apollo/rank";

const getInstructorsResponse = await useAsyncQuery(GET_INSTRUCTORS);
const getInstructors = getInstructorsResponse.data?.value?.getInstructors;

const { data } = await useAsyncQuery(GET_RANKINGS);
const getRankings = data?.value?.getRankings;

const store = useMainStore();
const { getIsAdmin } = storeToRefs(store);

const { toggleModel } = store;

// TODO: correctly sort instructors

useSeoMeta({
    title: '專業教練團隊',
})

function remove(instructorDetails) {
    console.log("remove: ", instructorDetails)
    const { mutate } = useMutation(REMOVE_INSTRUCTOR, {
        instructorId: instructorDetails.id,
    })

}

function edit(instructorDetails) {
    console.log("edit: ", instructorDetails)
    const modelDetails = {
        content: {
            ...instructorDetails,
            certificates: instructorDetails.certificates ? instructorDetails.certificates.join('\n') : "",
            experiences: instructorDetails.experiences ? instructorDetails.experiences.join('\n') : "",
        },
        submitFunction: submitChange,
        type: "instructor",
    };
    toggleModel(modelDetails);
}

function create() {
    const modelDetails = {
        content: {
            name: "",
            strengths: "",
            certificates: null,
            experiences: null
        },
        submitFunction: submitChange,
        type: "instructor",
    };
    toggleModel(modelDetails);
}

function newInstructor(instructorDetails) {
    console.log("new instructor", instructorDetails)
    const { mutate } = useMutation(ADD_INSTRUCTOR,
        {
            instructor: {
                ...instructorDetails,
                certificates: instructorDetails.certificates != null ? instructorDetails.certificates.split('\n') : "",
                experiences: instructorDetails.experiences != null ? instructorDetails.experiences.split('\n') : ""
            }
        })
}

function updateInstructor(instructorDetails) {
    console.log("update instructor", instructorDetails);
    const { mutate } = useMutation(UPDATE_INSTRUCTOR,
        {
            instructor: {
                ...instructorDetails,
                certificates: instructorDetails.certificates != null ? instructorDetails.certificates.split('\n') : "",
                experiences: instructorDetails.experiences != null ? instructorDetails.experiences.split('\n') : ""
            },
        })
}

function submitChange(editedInstructor) {
    console.log(editedInstructor)
    if (editedInstructor.instructorId) {
        // Instructor Exists already
        updateInstructor(editedInstructor)
    } else {
        // this is a new instructor
        newInstructor(editedInstructor)
    }
}

function confirm(event, instructor) {
    this.$confirm.require({
        target: event.currentTarget,
        message: `你确定要删除 ${instructor.name} 吗？`,
        icon: 'pi pi-info-circle',
        acceptClass: 'p-button-danger',
        accept: () => {
            remove(instructor)
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
}

function modifyRanking(rankDetails) {
    console.log("update instructor", rankDetails);
    const { mutate } = useMutation(UPDATE_RANK, {
        details: {
            ...rankDetails,
            awardees: rankDetails.awardees != null ? rankDetails.awardees.split('\n') : "",
        },
    })
}

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
    background-image: url("@/assets/images/wood.jpeg");
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
