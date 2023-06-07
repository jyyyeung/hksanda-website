<template>
    <section>
        <h1>傳媒專訪</h1>
        <div v-if="pending">Loading</div>
        <ol v-else class="relative  border-text-color border-l">
            <li class="mb-10 ml-4" v-for="interview in interviews" :key="interview._key">
                <div class="absolute w-3 h-3 bg-text-color rounded-full mt-1.5 -left-1.5 border border-text-color">
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-text-color">
                    {{ moment(interview.publishedDate).format("L") }} </time>
                <h3 class="text-lg font-semibold text-text-color ">
                    {{ interview.title }} - {{ interview.company }}
                </h3>
                <p class=" mb-4 text-base font-normal text-text-color">
                <div v-if="interview.images.length > 0">
                    <SanityImage v-for="imageObj in interview?.images" class="img-fluid"
                        :asset-id="imageObj.image.asset._ref" auto="format" :alt="imageObj.alt" />
                </div>
                </p>
                <NuxtLink v-if="interview.url" :href="interview.url"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-text-color bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
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

<script setup lang="ts">
import moment from "moment";
import { GET_INTERVIEWS } from "~/utils/queries";


const { data: interviews, pending } = useSanityQuery(GET_INTERVIEWS);

useSeoMeta({
    title: '媒體專訪',
})
</script>
