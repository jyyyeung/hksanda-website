<template>
    <DeferredContent>
        <my-upload
            v-model="show"
            :headers="headers"
            :height="height || 360"
            :params="params"
            :width="width || 640"
            field="0"
            img-format="jpg"
            no-circle
            no-square
            url="http://localhost:8000/api"
            @crop-upload-success="cropUploadSuccess"
            @crop-upload-fail="cropUploadFail"
            @crop-success="cropSuccess"
        />
        <Button
            :disabled="disabled && 'disabled'"
            class="btn"
            @click="toggleShow"
        >
            更改照片
        </Button>
        <p v-if="disabled">
            {{ disabledText }}
        </p>
    </DeferredContent>
</template>

<script>
import myUpload from "vue-image-crop-upload";

export default {
    name: "UploadImage",
    components: {
        "my-upload": myUpload,
    },
    props: {
        image: {
            type: String,
            default: "",
        },
        width: {type: Number, required: false, default: 640},
        height: {type: Number, required: false, default: 360},
        disabled: {type: Boolean, required: false, default: false},
        disabledText: {
            type: String,
            default: "请先输入所有文字",
        },
    },
    emits: ["update:image"],
    data: () => ({
        show: false,
        params: {
            // FIXME: After updating schema fix to fit newest
            operations:
                '{"query":"mutation singleUpload($file:Upload!) {\\n  singleUpload(file: $file) {\\n _id\\n imgUrl\\n }\\n}"}',
            map: '{"0": ["variables.file"]}',
        },
        headers: {},
        imgDataUrl: "", // the datebase64 url of created image
    }),
    methods: {
        toggleShow() {
            this.show = !this.show;
        },

        cropSuccess() {
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
