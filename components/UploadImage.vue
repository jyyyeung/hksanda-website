<template>
    <LazyClientOnly>
        <my-upload v-model="show" :headers="headers" :height="height || 360" :params="params" :width="width || 640"
            field="0" img-format="jpg" no-circle no-square url="http://localhost:8000/api"
            @crop-upload-success="cropUploadSuccess" @crop-upload-fail="cropUploadFail" @crop-success="cropSuccess" />
        <button type="button" :disabled="props.disabled && 'disabled'" class="btn" @click="toggleShow">
            更改照片
        </Button>
        <p v-if="props.disabled">
            {{ props.disabledText }}
        </p>
    </LazyClientOnly>
</template>

<script setup lang="ts">
import myUpload from "vue-image-crop-upload";


const props = defineProps({
    image: {
        type: String,
        default: "",
    },
    width: { type: Number, required: false, default: 640 },
    height: { type: Number, required: false, default: 360 },
    disabled: { type: Boolean, required: false, default: false },
    disabledText: {
        type: String,
        default: "请先输入所有文字",
    },
});

defineEmits(["update:image"]);


const show = ref(false)
const params = reactive({
    // FIXME: After updating schema fix to fit newest
    operations:
        '{"query":"mutation singleUpload($file:Upload!) {\\n  singleUpload(file: $file) {\\n _id\\n imgUrl\\n }\\n}"}',
    map: '{"0": ["variables.file"]}',
})
const headers = reactive({})
const imgDataUrl = ref(""); // the datebase64 url of created image
function toggleShow() {
    show = !show;
}

function cropSuccess() {
    // this.imageDataUrl = sharp(imageDataUrl)
    // .jpeg({ mozjpeg: true })
    // .toBuffer();
}

function cropUploadSuccess(jsonData) {
    console.log("-------- upload success --------");
    console.log(jsonData.data.singleUpload.imgUrl);
    this.$emit("update:image", jsonData.data.singleUpload.imgUrl);
}

function cropUploadFail(status, field) {
    console.log("-------- upload fail --------");
    console.log(status);
    console.log("field: " + field);
}
</script>
