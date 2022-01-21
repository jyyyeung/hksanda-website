<template>
  <!-- <va-file-upload v-model="basic" dropzone /> -->
  <Button class="btn" @click="toggleShow">set avatar</Button>
  <my-upload
    field="img"
    @crop-success="cropSuccess"
    @crop-upload-success="cropUploadSuccess"
    @crop-upload-fail="cropUploadFail"
    v-model="show"
    :width="300"
    :height="300"
    :params="params"
    :headers="headers"
    img-format="png"
  ></my-upload>
  <!-- url="/upload" -->
  <img :src="imgDataUrl" />
</template>

<script>
import { UPLOAD_IMAGE } from "@/apollo/image";
// TODO: Upload function

import myUpload from "vue-image-crop-upload";
export default {
  name: "UploadImage",
  // methods: {
  //   async uploadImage(file) {
  //     console.log("🚀 ~ file: Upload.vue ~ line 24 ~ uploadImage ~ file", file);
  //     const result = await this.$apollo.mutate({
  //       mutation: UPLOAD_IMAGE,
  //       variables: { file: file },
  //       context: {
  //         hasUpload: true,
  //       },
  //     });
  //     console.log("result", result);
  //   },
  // },
  data: {
    show: false,
    params: {
      token: "123456798",
      name: "avatar",
    },
    headers: {
      smail: "*_~",
    },
    imgDataUrl: "", // the datebase64 url of created image
  },
  components: {
    "my-upload": myUpload,
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------");
      this.imgDataUrl = imgDataUrl;
    },
    /**
     * upload success
     *
     * [param] jsonData  server api return data, already json encode
     * [param] field
     */
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      console.log(jsonData);
      console.log("field: " + field);
    },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log(status);
      console.log("field: " + field);
    },
  },
};
</script>

<style lang="scss" scoped></style>
