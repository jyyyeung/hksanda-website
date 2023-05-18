<template>
    <section>
        <ClientOnly>
            <!-- <div v-for="carousel in getCarouselByRoute" id="galleryCarousel" :key="carousel.id"
                class="swiper carousel slide mySwiper" data-bs-interval="1500" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button v-for="(image, i) in carousel.images" :key="generateId(image.title)" type="button"
                        data-bs-target="#galleryCarousel" :data-slide-to="i" :data-bs-slide-to="i"
                        :class="i == 0 ? 'active' : null" aria-current="true" aria-label="Slide 1" />
                </div>
                Wrapper for slides 
                <div class="carousel-inner">
                    <div v-for="(image, i) in carousel.images" :key="image.imageUrl"
                        :class="`carousel-item  ${i == 0 ? 'active' : ''}`">
                        <img :src="image.imageUrl" class="img-fluid" :alt="image.alt">
                        <div class="carousel-caption d-none d-md-block">
                            <h3>{{ image.title }}</h3>
                            <p v-show="image.paragraph">
                                {{ image.paragraph }}
                            </p>
                        </div>
                    </div>
                </div>
                 Left and right controls 
                <div class="carousel-dark">
                    <button class="carousel-control-prev" type="button" data-bs-target="#galleryCarousel"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true" />
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#galleryCarousel"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true" />
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div> -->

            <Carousel :value="getCarouselByRoute" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions">
                <template #item="slotProps">
                    <div v-for="(image, i) in slotProps.data.carousel.images" :key="image.imageUrl"
                        :class="`carousel-item  ${i == 0 ? 'active' : ''}`">
                        <img :src="image.imageUrl" class="img-fluid" :alt="image.alt">
                        <div class="carousel-caption d-none d-md-block">
                            <h3>{{ image.title }}</h3>
                            <p v-show="image.paragraph">
                                {{ image.paragraph }}
                            </p>
                        </div>
                    </div>
                </template>
            </Carousel>

        </ClientOnly>
        <div v-for="masonry in getMasonryByRoute" :key="masonry.id">
            <h1>{{ masonry.title }}</h1>
            <masonry-wall :items="masonry.images" :ssr-columns="1" :column-width="300" :gap="16">
                <template #default="{ item }">
                    <img class="img-fluid" :src="item.imageUrl" :alt="item.alt">
                    <div v-if="item.title || item.paragraph" class="Content">
                        <h5 class="text-ellipsis-1l">
                            {{ item.title }}
                        </h5>
                        <p class="text-ellipsis-2l">
                            {{ item.paragraph }}
                        </p>
                    </div>
                </template>
            </masonry-wall>
        </div>
    </section>
</template>

<script setup>
import { GET_CAROUSEL_BY_ROUTE } from '~/apollo/carousel';
import { GET_MASONRY_BY_ROUTE } from '~/apollo/masonry';
// import { Carousel } from "bootstrap";

const store = useMainStore();
const { getMasonries: masonries } = storeToRefs(store);

const getMasonaryByRouteResponse = await useAsyncQuery(GET_MASONRY_BY_ROUTE, { route: '/gallery/training' });
const getMasonryByRoute = getMasonaryByRouteResponse.data.value?.getMasonryByRoute;

const getCarouselByRouteResponse = await useAsyncQuery(GET_CAROUSEL_BY_ROUTE, { route: '/gallery/training' });
const getCarouselByRoute = getCarouselByRouteResponse.data.value?.getCarouselByRoute;


// onMounted(() => {
    // if (document) {
    //     const galleryCarousel = document.querySelector("#galleryCarousel");
    //     new Carousel(galleryCarousel).cycle();
    // }
// })
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
