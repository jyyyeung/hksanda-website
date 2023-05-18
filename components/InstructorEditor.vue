<template>
    <div class="grid p-fluid">
        <div class="col-12 md:col-4">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user"/>
                </span>
                <InputText
                        id="instructorName"
                        v-model="editedInstructor.name"
                        placeholder="教练姓名"
                        type="text"
                />
            </div>
        </div>
        <div class="col-12 md:col-4">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user"/>
                </span>
                <InputText
                        id="instructorStrengths"
                        v-model="editedInstructor.strengths"
                        placeholder="教练教导项目（如：散打自衛術/泰拳Boxing/女子自衛術課程）"
                        type="text"
                />
            </div>
        </div>
        <div class="col-12">
            <label for="instructorCertificates">
                教练证书
                <Textarea
                        id="instructorCertificates"
                        v-model="editedInstructor.certificates"
                        :auto-resize="true"
                        cols="50"
                        rows="5"
                />
            </label>
        </div>
        <div class="col-12 md:col-4">
            <label for="instructorExperiences">
                教练经验
                <Textarea
                        id="instructorExperiences"
                        v-model="editedInstructor.experiences"
                        :auto-resize="true"
                        cols="50"
                        rows="5"
                />
            </label>
        </div>
    </div>

    <Button
            label="儲存"
            @click="submitFunction(editedInstructor)"
    />
</template>

<script setup>
defineProps({
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
    this.editedInstructor = Object.assign({}, this.instructor);
})
</script>

