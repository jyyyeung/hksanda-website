<template>
    <section>
        <h1>常規課程及地點</h1>
        <div class="container">
            <div v-if="pending">Loading</div>
            <div v-else class="grid">
                <class-info-card v-for="session in data?.getClasses" :key="session.id" :edit="edit" :is-admin="getIsAdmin"
                    :remove="remove" :session="session" />
            </div>
        </div>
    </section>
</template>


<script setup lang="ts">
import { ADD_CLASS, GET_CLASSES, REMOVE_CLASS, UPDATE_CLASS } from "@/apollo/class";
import { ClassInfoCard } from '#components';

const store = useMainStore();

const { getIsAdmin } = storeToRefs(store);

const { data, pending } = await useLazyAsyncQuery(GET_CLASSES);
const getClasses = data.value?.getClasses;
const { toggleModel } = store;

useSeoMeta({
    title: '常規課程',
})


function remove(sessionDetails) {
    console.log("remove: ", sessionDetails)
    const { mutate } = useMutation(REMOVE_CLASS, {
        classId: sessionDetails.id,
    });

}

function edit(sessionDetails) {
    console.log("edit: ", sessionDetails)
    const modelDetails = {
        content: sessionDetails,
        submitFunction: submitChange,
        type: "class",
    };
    toggleModel(modelDetails);
}

function create() {
    const modelDetails = {
        content: {
            title: "",
            type: "",
            students: null,
            location: null,
            mapQuery: null,
            classroom: null,
        },
        submitFunction: submitChange,
        type: "class",
    };
    toggleModel(modelDetails);
}

function newClassSession(classDetails) {
    const { mutate } = useMutation(ADD_CLASS, {
        details: classDetails
    });
}

function updateClassSession(classDetails) {
    console.log(classDetails);
    const { mutate } = useMutation(UPDATE_CLASS, {
        details: classDetails,
    });
}

function submitChange(newContent) {
    console.log(newContent)

    if (newContent.classId) {
        // Class Exists already
        updateClassSession(newContent)
    } else {
        // this is a new class
        newClassSession(newContent)
    }
}
</script>
