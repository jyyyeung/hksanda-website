<template>
  <section class="col-12">
    <div class="slider-home">
      <div
        v-if="getCarouselById"
        id="homeCarousel"
        ref="homeCarousel"
        data-bs-interval="4000"
        data-bs-ride="carousel"
        class="swiper carousel carousel-dark slide mySwiper"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            v-for="(slide, i) in getCarouselById.images"
            :key="generateId(slide.title)"
            data-bs-target="#homeCarousel"
            :data-slide-to="i"
            :data-bs-slide-to="i"
            :class="i == 0 ? 'active' : null"
            aria-current="true"
            :aria-label="`Slide ${i}`"
          ></button>
        </div>
        <!-- Wrapper for slides -->
        <div class="carousel-inner">
          <div
            :class="`carousel-item   ${i == 0 ? 'active' : ''}`"
            
            v-for="(slide, i) in getCarouselById.images"
            :key="generateId(i+slide.alt)"
          >
            <div class="container">
              <div class="row d-block d-lg-flex">
                <div class="col">
                  <h1>{{ slide.title }}</h1>
                  <div class="d-none d-lg-flex">
                    <markdown :source="slide.paragraph" />
                    <button
                      v-if="isAdmin"
                      @click="edit"
                      type="submit"
                      class="btn btn-primary mb-3"
                    >
                      編輯
                    </button>
                  </div>
                </div>
                <div class="col my-3">
                  <div class="ratio ratio-16x9">
                    <img
                      :src="slide.imageUrl"
                      class="img-thumbnail d-block"
                      :alt="slide.alt"
                    />
                  </div>
                </div>
                <div class="d-lg-none d-flex">
                  <markdown :source="slide.paragraph" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Left and right controls -->
        <button
          class="carousel-control-prev d-none d-md-block"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next d-none d-md-block"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <hr />
    </div>
  </section>
</template>

<script>
import Markdown from "../others/Markdown.vue";
import generateId from "@/helpers/generateId";
import { Carousel } from "bootstrap";
import { mapActions, mapGetters } from "vuex";
import {GET_CAROUSEL_BY_ID, UPDATE_CAROUSEL} from '@/apollo/carousel'
export default {
  components: { Markdown },
  name: "HomeCarousel",
  setup(){
    return {
      carouselId: '61ee6bfb9c3de1b608293d4c'
    }
  },
 apollo: {
    getCarouselById: {
      query: GET_CAROUSEL_BY_ID,
      variables(){
        return {
          id: this.carouselId
        }
      }
         
    }
  },
    mounted() {
    const myCarousel = document.querySelector("#homeCarousel");
    new Carousel(myCarousel).cycle();
  },
  methods: {
    generateId,
    ...mapActions(["toggleModel"]),
    edit() {
      const modelDetails = {
        content: this.getCarouselById.images,
        submitFunction: this.submitChange,
        type: "carousel",
      };
      this.toggleModel(modelDetails);
    },
    submitChange(updatedSlides) {
      
        this.$apollo.mutate({
        mutation: UPDATE_CAROUSEL,
        variables: {
          carousel: {
            carouselId: this.carouselId, 
            images: updatedSlides 
          }
        }
      })
 
          },
  },
  computed: {
    ...mapGetters(["isAdmin"]),
      },
};
</script>
