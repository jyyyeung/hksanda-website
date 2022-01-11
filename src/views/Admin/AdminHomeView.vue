<template>
  <div>
    <upload />
  </div>
</template>

<script lang="ts">
import Upload from "@/components/admin/Upload.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { Upload },
  name: "AdminHome",
});
</script>

<style lang="scss" scoped></style>
