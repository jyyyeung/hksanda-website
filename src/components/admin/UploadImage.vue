<template>
  <DeferredContent>
    <my-upload
      field="0"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
      @crop-success="cropSuccess"
      v-model="show"
      noCircle
      :width="width || 640"
      :height="height || 360"
      noSquare
      :params="params"
      :headers="headers"
      img-format="jpg"
      url="http://localhost:8000/graphql"
    ></my-upload>
    <Button class="btn" :disabled="disabled && 'disabled'" @click="toggleShow"
      >更改照片</Button
    >
    <p v-if="disabled">{{ disabledText }}</p>
  </DeferredContent>
</template>

<script>
import myUpload from "vue-image-crop-upload";
export default {
  name: "UploadImage",
  props: {
    image: {
      type: String,
      default: "",
    },
    width: { type: Number, required: false },
    height: { type: Number, required: false },
    disabled: { type: Boolean, required: false, default: false },
    disabledText: {
      type: String,
      default: "请先输入所有文字",
    },
  },
  data: {
    show: false,
    params: {
      operations:
        '{"query":"mutation singleUpload($file:Upload!) {\\n  singleUpload(file: $file) {\\n _id\\n imgUrl\\n }\\n}"}',
      map: '{"0": ["variables.file"]}',
    },
    headers: {},
    imgDataUrl: "", // the datebase64 url of created image
  },
  components: {
    "my-upload": myUpload,
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },

    cropSuccess(imageDataUrl) {
      // this.imageDataUrl = sharp(imageDataUrl)
      // .jpeg({ mozjpeg: true })
      // .toBuffer();
    },
    cropUploadSuccess(jsonData) {
      console.log("-------- upload success --------");
      console.log(jsonData.data.singleUpload.imgUrl);
      this.$emit("update:image", jsonData.data.singleUpload.imgUrl);
    },
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log(status);
      console.log("field: " + field);
    },
  },
};
</script>

<style lang="scss" scoped></style>
