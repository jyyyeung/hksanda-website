<template>
  <section>
    <h1>傳媒專訪</h1>
    <div v-if="pending">Loading</div>
    <ol v-else class="media-interview relative border-l border-text-color">
      <li
        class="mb-10 ml-4 list-none"
        v-for="interview in (interviews as SanityInterview[])"
        :key="interview._key"
      >
        <div
          class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-text-color bg-text-color"
        ></div>
        <time class="mb-1 text-sm font-normal leading-none text-text-color">
          {{ moment(interview.publishedDate).format("L") }}
        </time>
        <h3 class="text-lg font-semibold text-text-color">
          {{ interview.title }} - {{ interview.company }}
        </h3>
        <div class="mb-4 text-base font-normal text-text-color">
          <div v-if="interview.images.length > 0">
            <nuxt-img
              provider="sanity"
              v-for="imageObj in interview.images"
              class="img-fluid mb-3 w-full max-w-xl rounded-lg object-cover"
              loading="lazy"
              :max-w="1920"
              :src="imageObj.image.asset._ref"
              :alt="imageObj.alt"
            />
          </div>
          <nuxt-link
            v-if="interview.url"
            :href="interview.url"
            _target="blank"
            class="inline-flex items-center rounded-lg bg-white px-4 py-2 text-xl font-medium"
          >
            點擊查看
            <svg
              class="ml-2 h-3 w-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </nuxt-link>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
import moment from "moment";
import { GET_INTERVIEWS } from "~/utils/queries";
import { SanityInterview } from "~/utils/types";

const { data: interviews, pending } = useSanityQuery(GET_INTERVIEWS);

useSeoMeta({
  title: "媒體專訪",
});
</script>

<style lang="scss">
ol.media-interview li {
  list-style-type: none !important;
}
</style>
