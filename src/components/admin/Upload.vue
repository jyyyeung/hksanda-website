<template>
  <va-file-upload v-model="basic" dropzone />
</template>

<script>
import { UPLOAD_IMAGE } from "@/apollo/image";
export default {
  name: "Upload",
  data() {
    return {
      basic: [],
    };
  },
  watch: {
    basic(files) {
      console.log(files);
      if (files.length > 0) {
        this.uploadImage(files[files.length - 1]);
      }
    },
  },
  methods: {
    async uploadImage(file) {
      console.log("🚀 ~ file: Upload.vue ~ line 24 ~ uploadImage ~ file", file);
      const result = await this.$apollo.mutate({
        mutation: UPLOAD_IMAGE,
        variables: { file: file },
        context: {
          hasUpload: true,
        },
      });
      console.log("result", result);
    },
  },
};
</script>

<style lang="scss" scoped></style>
