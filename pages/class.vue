<template>
    <section>
        <h1>常規課程及地點</h1>
        <div class="container">
            <div v-if="pending">Loading</div>
            <div v-else class="grid grid-cols-12">
                <class-info-card v-for="classSession in classes" :key="classSession._id" :session="classSession" />
            </div>
        </div>
    </section>
</template>


<script setup lang="ts">
// import { ADD_CLASS, GET_SESSIONS, REMOVE_CLASS, UPDATE_CLASS } from "@/apollo/class";
import { ClassInfoCard } from '#components';

// const store = useMainStore();
const GET_CLASSES = `*[_type == "class"]`

const { data: classes, pending, refresh } = useSanityQuery(GET_CLASSES);
// const getClasses = data.value?.getClasses;
// const { toggleModel } = store;

if (!classes.value) {
    refresh()
}

useSeoMeta({
    title: '常規課程',
})


// function remove(sessionDetails) {
//     console.log("remove: ", sessionDetails)
//     const { mutate } = useMutation(REMOVE_CLASS, {
//         classId: sessionDetails.id,
//     });

// }

// function edit(sessionDetails) {
//     console.log("edit: ", sessionDetails)
//     const modelDetails = {
//         content: sessionDetails,
//         submitFunction: submitChange,
//         type: "class",
//     };
//     toggleModel(modelDetails);
// }

// function create() {
//     const modelDetails = {
//         content: {
//             title: "",
//             type: "",
//             students: null,
//             location: null,
//             mapQuery: null,
//             classroom: null,
//         },
//         submitFunction: submitChange,
//         type: "class",
//     };
//     toggleModel(modelDetails);
// }

// function newClassSession(classDetails) {
//     const { mutate } = useMutation(ADD_CLASS, {
//         details: classDetails
//     });
// }

// function updateClassSession(classDetails) {
//     console.log(classDetails);
//     const { mutate } = useMutation(UPDATE_CLASS, {
//         details: classDetails,
//     });
// }

// function submitChange(newContent) {
//     console.log(newContent)

//     if (newContent.classId) {
//         // Class Exists already
//         updateClassSession(newContent)
//     } else {
//         // this is a new class
//         newClassSession(newContent)
//     }
// }
</script>
