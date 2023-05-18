<template>
    <section class="col-12">
        <div class="slider-home">
            <div v-if="getCarouselById" id="homeCarousel" ref="homeCarousel"
                 class="swiper carousel carousel-dark slide mySwiper" data-bs-interval="4000" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button v-for="(slide, i) in getCarouselById.images" :key="generateId(slide.title)"
                            :aria-label="`Slide ${i}`" :class="i == 0 ? 'active' : null" :data-bs-slide-to="i"
                            :data-slide-to="i" aria-current="true" data-bs-target="#homeCarousel" type="button"/>
                </div>
                <!-- Wrapper for slides -->
                <div class="carousel-inner">
                    <div v-for="(slide, i) in getCarouselById.images" :key="generateId(i + slide.alt)"
                         :class="`carousel-item   ${i == 0 ? 'active' : ''}`">
                        <div class="container">
                            <div class="row d-block d-lg-flex">
                                <div class="col">
                                    <h1>{{ slide.title }}</h1>
                                    <div class="d-none d-lg-flex">
                                        <Markdown :source="slide.paragraph"/>
                                        <button v-if="getIsAdmin" class="btn btn-primary mb-3" type="submit"
                                                @click="edit">
                                            編輯
                                        </button>
                                    </div>
                                </div>
                                <div class="col my-3">
                                    <div class="ratio ratio-16x9">
                                        <img :alt="slide.alt" :src="slide.imageUrl" class="img-thumbnail d-block">
                                    </div>
                                </div>
                                <div class="d-lg-none d-flex">
                                    <Markdown :source="slide.paragraph"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Left and right controls -->
                <button class="carousel-control-prev d-none d-md-block" data-bs-slide="prev"
                        data-bs-target="#homeCarousel"
                        type="button">
                    <span aria-hidden="true" class="carousel-control-prev-icon"/>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next d-none d-md-block" data-bs-slide="next"
                        data-bs-target="#homeCarousel"
                        type="button">
                    <span aria-hidden="true" class="carousel-control-next-icon"/>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <hr>
        </div>
    </section>
</template>

<script setup>
import {Carousel} from "bootstrap";
import {GET_CAROUSEL_BY_ID, UPDATE_CAROUSEL} from "@/apollo/carousel";
import {Markdown} from "#components"

const carouselId = "61ee6bfb9c3de1b608293d4c";
const store = useMainStore();

const {result} = useQuery(GET_CAROUSEL_BY_ID, {id: carouselId});
console.log((result))
const getCarouselById = result.value?.getCarouselById;

const {getIsAdmin} = storeToRefs(store);

onMounted(() => {
    if (document) {
        const myCarousel = document.querySelector("#homeCarousel");
        new Carousel(myCarousel).cycle();
    }
})

// generateId,
// ...mapActions(["toggleModel"]),
function edit() {
    const modelDetails = {
        content: getCarouselById.images,
        submitFunction: submitChange,
        type: "carousel",
    };
    store.toggleModel(modelDetails);
}

function submitChange(updatedSlides) {
    const {mutate} = useMutation(UPDATE_CAROUSEL, {
        carousel: {
            carouselId: this.carouselId,
            images: updatedSlides,
        },
    })
    console.log((mutate))
}
</script>
