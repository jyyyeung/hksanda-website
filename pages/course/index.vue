<template>
  <Head>
    <Title>{{ "學習內容" }}</Title>
  </Head>
  <section>
    <h1 v-for="course in courses">
      <NuxtLink :href="`/course/content-${course.name}`">{{
        course.name
      }}</NuxtLink>
    </h1>
  </section>
</template>

<script setup lang="ts">
const GET_ALL_COURSES: string = groq`*[_type == "course-content" ]`;

const { data: courses } = useSanityQuery(GET_ALL_COURSES);
</script>
