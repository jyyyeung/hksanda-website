<template>
    <section class="col-span-12">
        <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" v-if="getCarouselById" :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: true, }" :slides-per-view="1" :space-between="50"
            @swiper="onSwiper" @slideChange="onSlideChange">
            <SwiperSlide v-for="(slide, i) in getCarouselById.images" :key="generateId(i + slide.alt)">
                <div class="container">
                    <div class="block lg:flex">
                        <div class="grid">
                            <h1>{{ slide.title }}</h1>
                            <div class="hidden lg:flex">
                                <Markdown :source="slide.paragraph" />
                                <button v-if="getIsAdmin"
                                    class="text-white bg-primary font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                    type="submit" @click="edit">
                                    編輯
                                </button>
                            </div>
                        </div>
                        <div class="col my-3">
                            <div class="aspect-video">
                                <nuxt-img format="webp" :alt="slide.alt" :src="slide.imageUrl"
                                    class="img-thumbnail block" />
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
import { GET_CAROUSEL_BY_ID, UPDATE_CAROUSEL } from "@/apollo/carousel";
import { Markdown } from "#components"

const carouselId = "61ee6bfb9c3de1b608293d4c";
const store = useMainStore();

interface Carousel {
    images: {
        title: string
        alt: string
        imageUrl: string
        paragraph: string
    }[]
}

const { data } = await useAsyncQuery(GET_CAROUSEL_BY_ID, { id: carouselId });
const getCarouselById: Carousel = data.value?.getCarouselById;

const { getIsAdmin } = storeToRefs(store);

function edit() {
    const modelDetails = {
        content: getCarouselById.images,
        submitFunction: submitChange,
        type: "carousel",
    };
    store.toggleModel(modelDetails);
}

function submitChange(updatedSlides) {
    const { mutate } = useMutation(UPDATE_CAROUSEL, {
        carousel: {
            carouselId: carouselId,
            images: updatedSlides,
        },
    })
    console.log((mutate))
}
</script>
