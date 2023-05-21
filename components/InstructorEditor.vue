<template>
    <div class="grid p-fluid grid-cols-12">
        <div class="col-span-12 md:col-span-4">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user" />
                </span>
                <input id="instructorName" v-model="editedInstructor.name" placeholder="教练姓名" type="text" />
            </div>
        </div>
        <div class="col-span-12 md:col-span-4">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user" />
                </span>
                <input id="instructorStrengths" v-model="editedInstructor.strengths"
                    placeholder="教练教导项目（如：散打自衛術/泰拳Boxing/女子自衛術課程）" type="text" />
            </div>
        </div>
        <div class="col-span-12">
            <label for="instructorCertificates">
                教练证书
                <Textarea id="instructorCertificates" v-model="editedInstructor.certificates" :auto-resize="true" cols="50"
                    rows="5" />
            </label>
        </div>
        <div class="col-span-12 md:col-span-4">
            <label for="instructorExperiences">
                教练经验
                <Textarea id="instructorExperiences" v-model="editedInstructor.experiences" :auto-resize="true" cols="50"
                    rows="5" />
            </label>
        </div>
    </div>

    <button type="button" label="儲存" @click="props.submitFunction(editedInstructor)" />
</template>

<script setup lang="ts">
const props = defineProps({
    instructor: {
        type: Object,
        default: () => ({
            name: "",
            strengths: "",
            certificates: null,
            experiences: null
        })
    },
    submitFunction: {
        type: Function,
        default: () => {
            return null
        }
    }
})

const editedInstructor = reactive({
    name: "",
    strengths: "",
    certificates: null,
    experiences: null
})

onMounted(() => {
    editedInstructor = Object.assign({}, props.instructor);
})
</script>

