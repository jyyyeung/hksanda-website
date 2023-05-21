<template>
  <div>
    <ol class="list-group list-group-flush list-group-numbered">
      <li v-for="item in syllabus?.syllabus" :key="item" class="list-decimal list-outside">
        {{ item }}
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { GET_BADGE_SYLLABUS_BY_ID } from "@/apollo/assessment-syllabus";
// import {useMeta} from "vue-meta";

useSeoMeta({
  title: '武術自衛散手考試動作',
})

const route = useRoute();

const { data } = await useAsyncQuery(GET_BADGE_SYLLABUS_BY_ID, {
  id: route.params.id
});
const syllabus = data?.value?.getBadgeSyllabusById;
</script>
