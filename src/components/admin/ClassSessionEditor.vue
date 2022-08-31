<template>
    <div class="grid p-fluid">
        <div class="col-12 md:col-4">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user" />
                </span>
                <InputText
                    id="courseTitle"
                    v-model="editedClassDetails.title"
                    placeholder="課堂名称（例：九龍土瓜灣體育館）"
                    type="text"
                />
            </div>
        </div>
        <div class="col-12 md:col-4">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user" />
                </span>
                <InputText
                    id="courseType"
                    v-model="editedClassDetails.type"
                    placeholder="課堂种类（例：散手自卫术训练班）"
                    type="text"
                />
            </div>
        </div>
        <div class="col-12 md:col-4">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user" />
                </span>
                <InputText
                    id="courseTime"
                    v-model="editedClassDetails.time"
                    placeholder="时间（例：逢星期日 8:00 - 9:30pm）"
                    type="text"
                />
            </div>
        </div>
        <div class="col-12 md:col-4">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user" />
                </span>
                <InputText
                    id="courseStudents"
                    v-model="editedClassDetails.students"
                    placeholder="对象（例：小童及成人均可）"
                    type="text"
                />
            </div>
        </div>
        <div class="col-12 md:col-4">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user" />
                </span>
                <InputText
                    id="courseLocation"
                    v-model="editedClassDetails.location"
                    placeholder="地点：（例：近牛头角地铁站）"
                    type="text"
                />
            </div>
        </div>
        <div class="col-12 md:col-4">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user" />
                </span>
                <InputText
                    id="courseClassroom"
                    v-model="editedClassDetails.classroom"
                    placeholder="教室：（例：小舞蹈室）"
                    type="text"
                />
            </div>
        </div>
    </div>

    <Button
        label="儲存"
        @click="submitFunction(editedClassDetails)"
    />
</template>

<script>
import InputText from "primevue/inputtext/sfc";

export default {
    name: "ClassSessionEditor",
    components: {
        InputText,
    },
    props: {
        classDetails: {
            type: Object,
            default: () => ({
                title: "",
                type: "",
                students: null,
                location: null,
                mapQuery: null,
                classroom: null,
            })
        },
        submitFunction: {
            type: Function,
            default: () => {
                return null
            }
        }
    },
    data() {
        return {
            editedClassDetails: {
                title: "",
                type: "",
                students: null,
                location: null,
                mapQuery: null,
                classroom: null,
            },
        };
    }, mounted() {
        this.editedClassDetails = Object.assign({}, this.classDetails);

    },
};
</script>

<style></style>
