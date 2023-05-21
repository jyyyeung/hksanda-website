<template>
    <section>
        <h1>傳媒專訪</h1>
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-4" v-for="item in getInterviews" :key="item.title">
                <div
                    class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {{ moment(item.publishedDate).format("L") }} </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ item.title }} - {{ item.company }}</h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                <div v-if="item.images.length > 0">
                    <nuxt-img format="webp" v-for="image in item.images" :key="image.imageUrl" :alt="image.alt"
                        :src="image.imageUrl" class="img-fluid" />
                </div>
                <p v-if="item.content">
                    {{ item.content }}
                </p>
                </p>
                <NuxtLink v-if="item.url" :href="item.url"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                    <button type="button">Learn more </button>
                    <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </NuxtLink>
            </li>
        </ol>
    </section>
</template>

<script setup>
import { GET_INTERVIEWS } from "@/apollo/interview.js";

import moment from "moment";

const { data } = await useAsyncQuery(GET_INTERVIEWS);
const getInterviews = data.value?.getInterviews;

useSeoMeta({
    title: '媒體專訪',
})
</script>
