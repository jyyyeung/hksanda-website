<template>
    <section>
        <div v-if="getCarouselPending">Loading</div>
        <Swiper v-else :loop="true" :autoplay="{
                delay: 8000,
                disableOnInteraction: true,
            }" :slides-per-view="1" :space-between="50" v-for="carousel in getCarouselData?.getCarouselByRoute">
            <SwiperSlide v-for="(image, i) in carousel.images" :key="image.imageUrl">
                <nuxt-img sizes="sm:100vw md:50vw lg:400px" :src="image.imageUrl"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="image.alt" />
                <div class="absolute bottom-0 text-center bg-background p-2 bg-opacity-75 w-full hidden md:block">
                    <h3>{{ image.title }}</h3>
                    <p v-show="image.paragraph">
                        {{ image.paragraph }}
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
        <div v-if="getMasonryPending">Loading</div>
        <div v-else v-for="masonry in getMasonryData?.getMasonryByRoute" :key="masonry.id">
            <h1>{{ masonry.title }}</h1>
            <div class="columns-3xs gap-3">
                <template v-for="item in masonry.images">
                    <nuxt-img sizes="sm:100vw md:50vw lg:400px" format="webp" class="w-full img-fluid my-2"
                        :src="item.imageUrl" :alt="item.alt" />
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

// const store = useMainStore();
// const { getMasonries: masonries } = storeToRefs(store);

const { data: getMasonryData, pending: getMasonryPending, refresh: getMasonryRefresh } = await useLazyAsyncQuery(GET_MASONRY_BY_ROUTE, { route: '/gallery/training' });
const getMasonryByRoute = getMasonryData.value?.getMasonryByRoute;

if (!getMasonryData.value) {
    getMasonryRefresh()
}

const { data: getCarouselData, pending: getCarouselPending, refresh: getCarouselRefresh } = await useLazyAsyncQuery(GET_CAROUSEL_BY_ROUTE, { route: '/gallery/training' });
const getCarouselByRoute = getCarouselData.value?.getCarouselByRoute;

if (!getCarouselData.value) {
    getCarouselRefresh()
}

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
