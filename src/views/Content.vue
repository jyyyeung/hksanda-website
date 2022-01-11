<template>
  <!-- <div class="bg"> -->

  <!-- </div> -->
  <div class="main">
    <div class="container">
      <div class="container__inner">
        <ScrollPanel style="height: 100%; width: 100%">
          <!-- <router-view class="main__router router-view"></router-view> -->
        </ScrollPanel>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Content",
});
</script>

<style lang="scss" scoped></style>
