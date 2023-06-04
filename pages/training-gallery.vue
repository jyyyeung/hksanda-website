<template>
    <section>
        <div v-if="getCarouselPending">Loading</div>
        <Swiper v-else :loop="true" :autoplay="{
                delay: 8000,
                disableOnInteraction: true,
            }" :slides-per-view="1" :space-between="50" v-for="carousel in getCarouselByRoute">
            <SwiperSlide v-for="(image, i) in carousel.images" :key="image.imageUrl">
                <img :src="image.imageUrl" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    :alt="image.alt" />
                <div class="absolute w-full hidden md:block">
                    <h3>{{ image.title }}</h3>
                    <p v-show="image.paragraph">
                        {{ image.paragraph }}
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
        <div v-if="getMasonaryPending">Loading</div>
        <div v-else v-for="masonry in getMasonryByRoute" :key="masonry.id">
            <h1>{{ masonry.title }}</h1>
            <div class="columns-3xs gap-3">
                <template v-for="item in masonry.images">
                    <nuxt-img format="webp" class="w-full img-fluid my-2" :src="item.imageUrl" :alt="item.alt" />
                    <div v-if="item.title || item.paragraph" class="Content">
                        <h5 class="text-ellipsis">
                            {{ item.title }}
                        </h5>
                        <p class="text-ellipsis">
                            {{ item.paragraph }}
                        </p>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { GET_CAROUSEL_BY_ROUTE } from '~/apollo/carousel';
import { GET_MASONRY_BY_ROUTE } from '~/apollo/masonry';
// import { Carousel } from "bootstrap";

const store = useMainStore();
const { getMasonries: masonries } = storeToRefs(store);

const { data: getMasonaryData, pending: getMasonaryPending } = await useLazyAsyncQuery(GET_MASONRY_BY_ROUTE, { route: '/gallery/training' });
const getMasonryByRoute = getMasonaryData.value?.getMasonryByRoute;

const { data: getCarouselData, pending: getCarouselPending } = await useLazyAsyncQuery(GET_CAROUSEL_BY_ROUTE, { route: '/gallery/training' });
const getCarouselByRoute = getCarouselData.value?.getCarouselByRoute;

useSeoMeta({
    title: '本會訓練相簿',
})

</script>


<style lang="scss" scoped>
.swiper {
    height: 60vh;
    max-width: 80vw;

    .grid-item {
        position: relative;
    }

    div.carousel-inner,
    .carousel-item {
        height: inherit;
    }

    img {
        display: block;
        width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
}
</style>
