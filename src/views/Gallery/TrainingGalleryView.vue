<template>
    <div
        v-for="carousel in getCarouselByRoute"
        id="galleryCarousel"
        :key="carousel.id"
        class="swiper carousel slide mySwiper"
        data-bs-interval="1500"
        data-bs-ride="carousel"
    >
        <div class="carousel-indicators">
            <button
                v-for="(image, i) in carousel.images"
                :key="generateId(image.title)"
                type="button"
                data-bs-target="#galleryCarousel"
                :data-slide-to="i"
                :data-bs-slide-to="i"
                :class="i == 0 ? 'active' : null"
                aria-current="true"
                aria-label="Slide 1"
            />
        </div>

        <!-- Wrapper for slides -->
        <div class="carousel-inner">
            <div
                v-for="(image, i) in carousel.images"
                :key="image.imageUrl"
                :class="`carousel-item  ${i == 0 ? 'active' : ''}`"
            >
                <img
                    :src="image.imageUrl"
                    class="img-fluid"
                    :alt="image.alt"
                >
                <div class="carousel-caption d-none d-md-block">
                    <h3>{{ image.title }}</h3>

                    <p v-show="image.paragraph">
                        {{ image.paragraph }}
                    </p>
                </div>
            </div>
        </div>

        <!-- Left and right controls -->
        <div class="carousel-dark">
            <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#galleryCarousel"
                data-bs-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                />
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#galleryCarousel"
                data-bs-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                />
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <div
        v-for="masonry in getMasonryByRoute"
        :key="masonry.id"
    >
        <h1>{{ masonry.title }}</h1>
        <masonry-wall
            :items="masonry.images"
            :ssr-columns="1"
            :column-width="300"
            :gap="16"
        >
            <template #default="{ item }">
                <img
                    class="img-fluid"
                    :src="item.imageUrl"
                    :alt="item.alt"
                >
                <div
                    v-if="item.title || item.paragraph"
                    class="Content"
                >
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
</template>

<script>
import { defineComponent } from "vue";
import generateId from "@/helpers/generateId";
import { useMeta } from "vue-meta";
import { Carousel } from "bootstrap";
import { mapActions, mapGetters } from "vuex";
import { GET_MASONRY_BY_ROUTE } from "@/apollo/masonry";
import { GET_CAROUSEL_BY_ROUTE } from "@/apollo/carousel";

export default defineComponent({
    name: "TrainingGallery",
    apollo: {
        getMasonryByRoute: {
            query: GET_MASONRY_BY_ROUTE,
            variables: {
                route: "/gallery/training",
            },
        },
        getCarouselByRoute: {
            query: GET_CAROUSEL_BY_ROUTE,
            variables: {
                route: "/gallery/training",
            },
        },
    },
    setup() {
        useMeta({
            title: "訓練照片",
        });
    },

    computed: {
        ...mapGetters({ masonries: "getMasonries" }),
    },

    mounted() {
        const galleryCarousel = document.querySelector("#galleryCarousel");
        new Carousel(galleryCarousel).cycle();
    },
    methods: {
        generateId,
        ...mapActions(["getMasonry"]),
    },
});
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
