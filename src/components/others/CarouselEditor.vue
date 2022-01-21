<template>
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
        dataKey="id"
        responsiveLayout="scroll"
      >
        <Column field="title" header="标题"></Column>
        <Column field="paragraph" header="段落"></Column>
        <Column header="照片">
          <template #body="slotProps">
            <img
              :src="slotProps.data.image"
              class="fluid-img slide-image"
              :alt="slotProps.data.image"
            />
          </template>
        </Column>

        <Column :exportable="false">
          <template #body="slotProps">
            <Button
              icon="pi pi-pencil"
              class="p-button-rounded p-button-success mr-2"
              @click="editSlide(slotProps.data)"
            />
            <Button
              icon="pi pi-trash"
              class="p-button-rounded p-button-warning"
              @click="confirmDeleteSlide(slotProps.data)"
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
        :src="slide.image"
        :alt="slide.image"
        class="slide-image fluid-img"
        v-if="slide.image"
      />
      <upload-image
        :disabled-text="'请先输入标题和段落'"
        :disabled="!slide.title || !slide.paragraph"
        v-model:image="slide.image"
      />
      <div class="field">
        <label for="title">标题</label>
        <InputText
          id="title"
          v-model.trim="slide.title"
          required="true"
          autofocus
          :class="{ 'p-invalid': submitted && !slide.title }"
        />
        <small class="p-error" v-if="submitted && !slide.title"
          >标题不能为空</small
        >
      </div>
      <div class="field">
        <label for="paragraph">段落</label>
        <Textarea
          :autoResize="true"
          id="paragraph"
          v-model="slide.paragraph"
          required="true"
          rows="3"
          cols="20"
        />
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
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
        <span v-if="slide"
          >你确定你要删除 <b>{{ slide.title }}</b
          >吗?</span
        >
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
  props: {
    slides: Array,
  },
  components: {
    Toolbar,
    InputText,
    DataTable,
    Column,
    Textarea,
    UploadImage,
  },
  data() {
    return {
      slideDialog: false,
      deleteSlideDialog: false,
      slide: {
        image: "",
        title: "",
        paragraph: "",
      },
      filters: {},
      submitted: false,
    };
  },
  methods: {
    openNew() {
      this.slide = {};
      this.submitted = false;
      this.slideDialog = true;
    },
    hideDialog() {
      this.slideDialog = false;
      this.submitted = false;
    },
    saveSlide() {
      this.submitted = true;

      if (this.slide.name.trim()) {
        if (this.slide.id) {
          this.slide.inventoryStatus = this.slide.inventoryStatus.value
            ? this.slide.inventoryStatus.value
            : this.slide.inventoryStatus;
          this.slides[this.findIndexById(this.slide.id)] = this.slide;
          this.$toast.add({
            severity: "success",
            summary: "Successful",
            detail: "Slide Updated",
            life: 3000,
          });
        } else {
          this.slide.id = this.createId();
          this.slide.code = this.createId();
          this.slide.image = "slide-placeholder.svg";
          this.slide.inventoryStatus = this.slide.inventoryStatus
            ? this.slide.inventoryStatus.value
            : "INSTOCK";
          this.slides.push(this.slide);
          this.$toast.add({
            severity: "success",
            summary: "Successful",
            detail: "Slide Created",
            life: 3000,
          });
        }

        this.slideDialog = false;
        this.slide = {};
      }
    },
    editSlide(slide) {
      this.slide = { ...slide };
      this.slideDialog = true;
    },
    confirmDeleteSlide(slide) {
      this.slide = slide;
      this.deleteSlideDialog = true;
    },
    deleteSlide() {
      this.slides = this.slides.filter((val) => val.id !== this.slide.id);
      this.deleteSlideDialog = false;
      this.slide = {};
      this.$toast.add({
        severity: "success",
        summary: "Successful",
        detail: "Slide Deleted",
        life: 3000,
      });
    },

    confirmDeleteSelected() {
      this.deleteSlidesDialog = true;
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
