<template>
  <Button>text</Button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InkButton",
});
</script>

<style lang="scss" scoped>
button {
  background: radial-gradient(black, transparent);
}
</style>
