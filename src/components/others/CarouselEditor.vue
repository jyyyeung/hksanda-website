<template>
    <DeferredContent>
        <div>
            <div class="card">
                <Toolbar class="mb-4">
                    <template #start>
                        <Button
                            label="New"
                            icon="pi pi-plus"
                            class="p-button-success mr-2"
                            @click="openNew"
                        />
                    </template>
                </Toolbar>
                <DataTable
                    ref="dt"
                    :value="slides"
                    data-key="id"
                    responsive-layout="scroll"
                >
                    <Column
                        field="title"
                        header="标题"
                    />
                    <Column
                        field="paragraph"
                        header="段落"
                    />
                    <Column header="照片">
                        <template #body="{ data }">
                            <img
                                :src="data.imageUrl"
                                class="fluid-img slide-image"
                                :alt="data.alt"
                            >
                        </template>
                    </Column>
                    <Column :exportable="false">
                        <template #body="{ data, index }">
                            <Button
                                icon="pi pi-pencil"
                                class="p-button-rounded p-button-success mr-2"
                                @click="editSlide(data, index)"
                            />
                            <Button
                                icon="pi pi-trash"
                                class="p-button-rounded p-button-warning"
                                @click="confirmDeleteSlide(index)"
                            />
                        </template>
                    </Column>
                </DataTable>
            </div>
            <Dialog
                v-model:visible="slideDialog"
                :style="{ width: '450px' }"
                header="Slide Details"
                :modal="true"
                class="p-fluid edit-dialog"
            >
                <img
                    v-if="slide.imageUrl"
                    :src="slide.imageUrl"
                    :alt="slide.alt"
                    class="slide-image fluid-img"
                >
                <upload-image
                    v-model:image="slide.imageUrl"
                    :disabled-text="'请先输入标题和段落'"
                    :disabled="!slide.title || !slide.paragraph"
                />
                <div class="field">
                    <!-- eslint-disable -->
                    <label
                        html-for="title"
                        for="title"
                    >
                        标题
                        <InputText
                            id="title"
                            v-model.trim="slide.title"
                            type="text"
                            required="true"
                            :class="{ 'p-invalid': submitted && !slide.title }"
                        />
                    </label>
                    <!-- eslint-enable -->
                    
                    <small
                        v-if="submitted && !slide.title"
                        class="p-error"
                    >标题不能为空</small>
                </div>
                <div class="field">
                    <label for="paragraph">
                        段落
                        <Textarea
                            id="paragraph"
                            v-model="slide.paragraph"
                            :auto-resize="true"
                            required="true"
                            rows="3"
                            cols="20"
                        />
                    </label>
                </div>
                <template #footer>
                    <Button
                        label="取消"
                        icon="pi pi-times"
                        class="p-button-text"
                        @click="hideDialog"
                    />
                    <Button
                        label="储存更改"
                        icon="pi pi-check"
                        class="p-button-text"
                        @click="saveSlide"
                    />
                </template>
            </Dialog>
            <Dialog
                v-model:visible="deleteSlideDialog"
                :style="{ width: '450px' }"
                header="Confirm"
                :modal="true"
            >
                <div class="confirmation-content">
                    <i
                        class="pi pi-exclamation-triangle mr-3"
                        style="font-size: 2rem"
                    />
                    <span
                        v-if="slide"
                    >你确定你要删除 <b>{{ slide.title }}</b>吗?</span>
                </div>
                <template #footer>
                    <Button
                        label="取消"
                        icon="pi pi-times"
                        class="p-button-text"
                        @click="deleteSlideDialog = false"
                    />
                    <Button
                        label="确定"
                        icon="pi pi-check"
                        class="p-button-text"
                        @click="deleteSlide"
                    />
                </template>
            </Dialog>
        </div>
    </DeferredContent>
</template>

<script>
import Toolbar from "primevue/toolbar/sfc";
import InputText from "primevue/inputtext/sfc";
import DataTable from "primevue/datatable/sfc";
import Column from "primevue/column/sfc";
import Textarea from "primevue/textarea/sfc";
import UploadImage from "../admin/UploadImage.vue";
export default {
    name: "CarouselEditor",
    components: {
        Toolbar,
        InputText,
        DataTable,
        Column,
        Textarea,
        UploadImage,
    },
    props: {
        slides: { type:Array, default: ()=>[] },
        submitFunction: { type:Function, default: ()=>{return null} },
    },
    data() {
        return {
            slideDialog: false,
            deleteSlideDialog: false,
            slide: {
                image: "",
                titleUrl: "",
                alt: "",
                paragraph: "",
            },
            submitted: false,
        };
    },
    methods: {
        openNew() {
            this.slide = {};
            this.slideIndex = -1;
            this.submitted = false;
            this.slideDialog = true;
        },
        hideDialog() {
            this.slideDialog = false;
            this.submitted = false;
        },
        saveSlide() {
            this.submitted = true;

            let slides = Object.assign([], this.slides);
            const editedSlide = Object.assign({}, this.slide);
            this.slideIndex >= 0
                ? slides.splice(this.slideIndex, 1, editedSlide)
                : slides.push(editedSlide);
            this.submitFunction(slides);

            this.slideDialog = false;
            this.slide = {};
            this.slideIndex = undefined;
        },
        editSlide(slide, index) {
            this.slide = Object.assign({}, slide);
            this.slideIndex = index;
            this.slideDialog = true;
        },
        confirmDeleteSlide(index) {
            this.slideIndex = index;
            this.deleteSlideDialog = true;
        },
        deleteSlide() {
            let slides = Object.assign([], this.slides);
            slides.splice(this.slideIndex, 1);
            this.submitFunction(slides);
            this.deleteSlideDialog = false;
            this.slide = {};
            this.slideIndex = undefined;
            this.$toast.add({
                severity: "success",
                summary: "Successful",
                detail: "Slide Deleted",
                life: 3000,
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 960px) {
        align-items: start;
    }
}

.slide-image {
    width: 100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.edit-dialog .slide-image {
    width: 200px;
    margin: 0 auto 2rem auto;
    display: block;
}

.confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
}
@media screen and (max-width: 960px) {
    ::v-deep(.p-toolbar) {
        flex-wrap: wrap;

        .p-button {
            margin-bottom: 0.25rem;
        }
    }
}
</style>
