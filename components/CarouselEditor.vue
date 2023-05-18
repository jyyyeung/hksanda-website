<template>
    <DeferredContent>
        <div>
            <div class="card">
                <Toolbar class="mb-4">
                    <template #start>
                        <Button
                                class="p-button-success mr-2"
                                icon="pi pi-plus"
                                label="New"
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
                                    :alt="data.alt"
                                    :src="data.imageUrl"
                                    class="fluid-img slide-image"
                            >
                        </template>
                    </Column>
                    <Column :exportable="false">
                        <template #body="{ data, index }">
                            <Button
                                    class="p-button-rounded p-button-success mr-2"
                                    icon="pi pi-pencil"
                                    @click="editSlide(data, index)"
                            />
                            <Button
                                    class="p-button-rounded p-button-warning"
                                    icon="pi pi-trash"
                                    @click="confirmDeleteSlide(index)"
                            />
                        </template>
                    </Column>
                </DataTable>
            </div>
            <Dialog
                    v-model:visible="slideDialog"
                    :modal="true"
                    :style="{ width: '450px' }"
                    class="p-fluid edit-dialog"
                    header="Slide Details"
            >
                <img
                        v-if="slide.imageUrl"
                        :alt="slide.alt"
                        :src="slide.imageUrl"
                        class="slide-image fluid-img"
                >
                <upload-image
                        v-model:image="slide.imageUrl"
                        :disabled="!slide.title || !slide.paragraph"
                        :disabled-text="'请先输入标题和段落'"
                />
                <div class="field">
                    <!-- eslint-disable -->
                    <label
                            for="title"
                            html-for="title"
                    >
                        标题
                        <InputText
                                id="title"
                                v-model.trim="slide.title"
                                :class="{ 'p-invalid': submitted && !slide.title }"
                                required="true"
                                type="text"
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
                                cols="20"
                                required="true"
                                rows="3"
                        />
                    </label>
                </div>
                <template #footer>
                    <Button
                            class="p-button-text"
                            icon="pi pi-times"
                            label="取消"
                            @click="hideDialog"
                    />
                    <Button
                            class="p-button-text"
                            icon="pi pi-check"
                            label="储存更改"
                            @click="saveSlide"
                    />
                </template>
            </Dialog>
            <Dialog
                    v-model:visible="deleteSlideDialog"
                    :modal="true"
                    :style="{ width: '450px' }"
                    header="Confirm"
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
                            class="p-button-text"
                            icon="pi pi-times"
                            label="取消"
                            @click="deleteSlideDialog = false"
                    />
                    <Button
                            class="p-button-text"
                            icon="pi pi-check"
                            label="确定"
                            @click="deleteSlide"
                    />
                </template>
            </Dialog>
        </div>
    </DeferredContent>
</template>

<script setup>
import {UploadImage} from '#components';

defineProps({

    slides: {type: Array, default: () => []},
    submitFunction: {
        type: Function, default: () => {
            return null
        }
    }

})

const slideDialog = ref(false);

const deleteSlideDialog = ref(false)
const slide = reactive({
    image: "",
    titleUrl: "",
    alt: "",
    paragraph: "",
})
const submitted = ref(false)

function openNew() {
    this.slide = {};
    this.slideIndex = -1;
    this.submitted = false;
    this.slideDialog = true;
}

function hideDialog() {
    this.slideDialog = false;
    this.submitted = false;
}

function saveSlide() {
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
}

function editSlide(slide, index) {
    this.slide = Object.assign({}, slide);
    this.slideIndex = index;
    this.slideDialog = true;
}

function confirmDeleteSlide(index) {
    this.slideIndex = index;
    this.deleteSlideDialog = true;
}

function deleteSlide() {
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
}
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
