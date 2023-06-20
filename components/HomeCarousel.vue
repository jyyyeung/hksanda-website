<template>
    <section class="col-span-12">
        <Swiper v-if="!pending" :loop="true" :autoplay="{ delay: 3000, disableOnInteraction: true }" :slides-per-view="1"
            :space-between="50">
            <SwiperSlide v-for="(slide, i) in data?.images" :key="generateId(i + slide.alt)">
                <div>
                    <div class="block lg:flex">
                        <div class="grid">
                            <h1>{{ slide.title }}</h1>
                            <div class="hidden lg:flex">
                                <Markdown :source="slide.paragraph" />
                            </div>
                        </div>
                        <div class="col my-3">
                            <div class="aspect-video object-cover">
                                <nuxt-img format="webp" :alt="slide.alt" :src="slide.imageUrl" class="img-thumbnail block aspect-video"
                                    sizes="sm:100vw md:50vw lg:400px" width="400" />
                            </div>
                        </div>
                        <div class="lg:hidden flex">
                            <Markdown :source="slide.paragraph" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script setup lang="ts">
// import { UPDATE_CAROUSEL, GET_CAROUSEL_BY_ID } from "@/apollo/carousel";
import { Markdown } from "#components"

const carouselId = "61ee6bfb9c3de1b608293d4c";

interface Carousel {
    images: {
        title: string
        alt: string
        imageUrl: string
        paragraph: string
    }[]
}

const GET_CAROUSEL_BY_ID = groq`*[_type == "carousel" && _id == ${carouselId}] | order(index asc)`

const { data, pending, refresh } = await useSanityQuery(GET_CAROUSEL_BY_ID);

if (!data.value) {
    refresh()
}
</script>
