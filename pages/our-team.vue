<template>
    <div class="container">
        <h1>專業教練團隊</h1>
        <div v-if="!getInstructorsPending" class="xl:columns-3 md:columns-2 columns-1">
            <div v-for="instructor in getInstructorsResponse" :key="instructor._id" class="w-full inline-block my-2">
                <div class="p-6 border-4 border-primary rounded-sm shadow ">
                    <div class="card-body">
                        <h2 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {{ instructor.name }}
                        </h2>
                        <h5 class="card-subtitle mb-2 text-muted">
                            {{ instructor.strengths }}
                        </h5>
                        <p v-for="(cert, i) in instructor.certificates" :key="cert + i" class="font-normal mb-1">
                            {{ cert }}
                        </p>
                    </div>
                    <div v-if="instructor.experiences || getIsAdmin">
                        <p v-for="experience in instructor.experiences" :key="instructor.id + experience">
                            {{ experience }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <h1>持有認可實用自衛散打段位證書</h1>

        <div v-if="!getRankingsPending" v-for="rank in ranks" :key="rank._id">
            <h2>{{ rank.name }}</h2>
            <div class="flex flex-wrap">
                <div v-for="awardee in rank.awardees" :key="awardee" class="tag m-2 w-auto">
                    {{ awardee }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// // import { ADD_INSTRUCTOR, GET_INSTRUCTORS, REMOVE_INSTRUCTOR, UPDATE_INSTRUCTOR } from "@/apollo/instructor";
// import { GET_RANKINGS, UPDATE_RANK } from "@/apollo/rank";

// const { data: getInstructorsResponse, pending: getInstructorsPending, refresh: getInstructorsRefresh } = await useLazyAsyncQuery(GET_INSTRUCTORS);
// const getInstructors = getInstructorsResponse.value?.getInstructors;

const GET_INSTRUCTORS = groq`*[_type == "instructor"] | order(_createdAt asc)`
const { data: getInstructorsResponse, refresh: getInstructorsRefresh, pending: getInstructorsPending } = useSanityQuery(GET_INSTRUCTORS)
console.log("getInstructorsResponse", getInstructorsResponse.value)


if (!getInstructorsResponse.value) {
    getInstructorsRefresh()
}

const GET_RANKINGS = groq`*[_type == "rank"] | order(index desc)`

const { data: ranks, pending: getRankingsPending, refresh: getRankingsRefresh } = useSanityQuery(GET_RANKINGS);
// const getRankings = getRankingsData?.value?.getRankings;

if (!ranks.value) {
    getRankingsRefresh()
}

// const store = useMainStore();
// const { getIsAdmin } = storeToRefs(store);

// const { toggleModel } = store;

useSeoMeta({
    title: '專業教練團隊',
})

// function remove(instructorDetails) {
//     console.log("remove: ", instructorDetails)
//     const { mutate } = useMutation(REMOVE_INSTRUCTOR, {
//         instructorId: instructorDetails.id,
//     })

// }

// function edit(instructorDetails) {
//     console.log("edit: ", instructorDetails)
//     const modelDetails = {
//         content: {
//             ...instructorDetails,
//             certificates: instructorDetails.certificates ? instructorDetails.certificates.join('\n') : "",
//             experiences: instructorDetails.experiences ? instructorDetails.experiences.join('\n') : "",
//         },
//         submitFunction: submitChange,
//         type: "instructor",
//     };
//     toggleModel(modelDetails);
// }

// function create() {
//     const modelDetails = {
//         content: {
//             name: "",
//             strengths: "",
//             certificates: null,
//             experiences: null
//         },
//         submitFunction: submitChange,
//         type: "instructor",
//     };
//     toggleModel(modelDetails);
// }

// function newInstructor(instructorDetails) {
//     console.log("new instructor", instructorDetails)
//     const { mutate } = useMutation(ADD_INSTRUCTOR,
//         {
//             instructor: {
//                 ...instructorDetails,
//                 certificates: instructorDetails.certificates != null ? instructorDetails.certificates.split('\n') : "",
//                 experiences: instructorDetails.experiences != null ? instructorDetails.experiences.split('\n') : ""
//             }
//         })
// }

// function updateInstructor(instructorDetails) {
//     console.log("update instructor", instructorDetails);
//     const { mutate } = useMutation(UPDATE_INSTRUCTOR,
//         {
//             instructor: {
//                 ...instructorDetails,
//                 certificates: instructorDetails.certificates != null ? instructorDetails.certificates.split('\n') : "",
//                 experiences: instructorDetails.experiences != null ? instructorDetails.experiences.split('\n') : ""
//             },
//         })
// }

// function submitChange(editedInstructor) {
//     console.log(editedInstructor)
//     if (editedInstructor.instructorId) {
//         // Instructor Exists already
//         updateInstructor(editedInstructor)
//     } else {
//         // this is a new instructor
//         newInstructor(editedInstructor)
//     }
// }

// function confirm(event, instructor) {
//     this.$confirm.require({
//         target: event.currentTarget,
//         message: `你确定要删除 ${instructor.name} 吗？`,
//         icon: 'pi pi-info-circle',
//         acceptClass: 'p-button-danger',
//         accept: () => {
//             remove(instructor)
//             this.$toast.add({
//                 severity: 'info',
//                 summary: '成功',
//                 detail: `已成功删除 ${instructor.name}`,
//                 life: 3000
//             });
//         },
//         reject: () => {
//             // this.$toast.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000});
//         }
//     });
// }

// function modifyRanking(rankDetails) {
//     console.log("update instructor", rankDetails);
//     const { mutate } = useMutation(UPDATE_RANK, {
//         details: {
//             ...rankDetails,
//             awardees: rankDetails.awardees != null ? rankDetails.awardees.split('\n') : "",
//         },
//     })
// }

</script>

<style lang="scss">
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
