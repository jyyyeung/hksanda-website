<template>
  <section>

    <Head>
      <Title>{{ course?.name + "：學習內容" }}</Title>
      <Meta name="description" :content="course?.name" />
    </Head>
    <SchemaOrgCourse :name="course?.name" :description="blocksToText(course?.content)" />
    <div class="w-full">
      <section v-if="pending">
        <TextSkeleton />
      </section>
      <section v-else>
        <h1 v-if="course?.name">{{ course?.name }}</h1>
        <!-- <Markdown v-bind:source="'# ' + course?.name" /> -->
        <SanityContent :blocks="course?.content" :serializers="serializers" />

        <div class="my-3">
          <p>
            如希望自行組班或報名私人班，歡迎瀏覽
            <NuxtLink href="/course-type">私人及组班课程</NuxtLink>
          </p>
          <p>如有任何疑問，歡迎進行咨詢</p>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
import serializers from "~/utils/serializers";
definePageMeta({
  validate: async (route) => {
    return /^\p{Script=Han}+$/u.test(decodeURIComponent(route.params.id));
  },
});

const GET_COURSE_CONTENT = groq`*[_type == "course-content" && name == "${decodeURIComponent(
  route.params.id
)}"][0]`;

const { data: course, pending } = useSanityQuery(GET_COURSE_CONTENT);
</script>
