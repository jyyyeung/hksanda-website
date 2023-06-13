<template>
  <section>

    <Head>
      <Title>{{ course?.name + '學習內容' }}</Title>
      <Meta name="description" :content="view?.title" />
    </Head>
    <div class="w-full">
      <section v-if="pending">
        <TextSkeleton />
      </section>
      <section v-else>
        <!-- <Markdown v-bind:source="'# ' + course?.name" /> -->
        <SanityContent :blocks="course?.content" />
        <Markdown :source="footer" />
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();

const GET_COURSE_CONTENT = groq`*[_type == "course-content" && name == "${route.params.id}"][0]`

const footer = `\n\n---\n如希望自行组班或报名私人班，欢迎浏览[*私人及组班课程*](/course/session)\n如有任何疑问，欢迎进行咨询`


const { data: course, pending } = useSanityQuery(GET_COURSE_CONTENT);
</script>

