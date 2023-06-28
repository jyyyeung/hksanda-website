<template>
  <section>
    <render-page />

    <div class="container">
      <div v-if="pending">Loading</div>
      <div v-else class="grid grid-cols-12">
        <class-info-card
          v-for="classSession in classes"
          :key="classSession._id"
          :session="classSession"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ClassInfoCard } from "#components";
import { GET_CLASSES } from "~/utils/queries";

const { data: classes, pending, refresh } = useSanityQuery(GET_CLASSES);

if (!classes.value) {
  refresh();
}

useSeoMeta({
  title: "常規課程",
});
</script>
