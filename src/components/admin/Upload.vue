<template>
  <va-file-upload v-model="basic" dropzone />
</template>

<script>
export default {
  name: "Upload",
  data() {
    return {
      basic: [],
    };
  },
};
</script>

<style lang="scss" scoped></style>
