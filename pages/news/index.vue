<template>
  <section>
    <h1>最新資訊</h1>
    <div
      v-for="post in posts"
      :key="post._id"
      class="my-2 inline-block w-full shadow-primary hover:shadow-2xl"
    >
      <NuxtLink :href="`/news/post-${post._id}`" class="no-highlight">
        <div class="rounded-lg border-4 border-primary p-6 shadow">
          <div class="card-body">
            <h2
              class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
            >
              {{ post.title }}
            </h2>
            <h5 class="card-subtitle text-muted mb-2">
              {{ moment(post._createdAt).locale("zh").format("LL") }}
            </h5>
            <p class="mb-4 text-gray-700 dark:text-gray-400">
              {{ blocksToText(post.content) }}
            </p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import moment from "moment";
const GET_ALL_POSTS: string = groq`*[_type == "post" ] | order(_createdAt desc)`;

const { data: posts } = useSanityQuery(GET_ALL_POSTS);
</script>
