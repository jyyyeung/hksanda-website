<template>
  <section>
    <h1 class="text-center text-4xl">武術自衛散打 - 考试动作</h1>
    <div class="w-full">
      <section v-if="pending">Loading</section>
      <div v-else>
        <section :key="syllabus._id" v-for="syllabus in syllabuses">
          <h2>{{ syllabus.level }}</h2>
          <ol class="list-group list-group-flush list-group-numbered">
            <li
              v-for="(item, i) in syllabus?.syllabus"
              :key="i"
              class="list-inside list-decimal"
            >
              {{ item }}
            </li>
          </ol>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GET_SYLLABUS } from "~/utils/queries";

useSeoMeta({
  title: "武術自衛散手考試動作",
});

const { data: syllabuses, pending, refresh } = useSanityQuery(GET_SYLLABUS);

if (!syllabuses.value) {
  refresh();
}
</script>
