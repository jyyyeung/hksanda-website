<template>
  <section>
    <h1>最新資訊</h1>
    <div
      v-for="post in posts"
      :key="post._id"
      class="my-2 inline-block w-full shadow-primary hover:shadow-2xl"
    >
      <NuxtLink :href="`/news/post-${post._id}`" class="no-highlight">
        <div class="rounded-lg border-4 border-primary p-6 shadow md:flex">
          <div class="card-body">
            <h2 class="mb-2 text-2xl font-semibold tracking-tight">
              {{ post.title }}
            </h2>
            <h5 class="card-subtitle text-muted mb-2">
              {{ moment(post._createdAt).locale("zh").format("LL") }}
            </h5>
            <p class="mb-4 text-gray-700 dark:text-gray-400">
              {{ blocksToText(post.content) }}
            </p>
          </div>
          <div class="my-auto ml-auto w-fit">
            <!-- <div v-if="post.mainImage">
              <img
                :src="urlFor(post.mainImage).width(600).height(400).url()"
                :alt="post.mainImage.alt"
                class="h-full w-full object-cover"
              />
            </div> -->
            <svg
              class="animate-bounce-h h-12 w-12 rounded-lg fill-primary stroke-primary stroke-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#888888"
                d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"
              />
            </svg>
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

<style>
.animate-bounce-h {
  animation: bounce 1s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateX(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateX(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
}
</style>
