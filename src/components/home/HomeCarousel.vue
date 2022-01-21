<!--
 * @LastEditTime: 2022-01-17 19:39:14
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-13 14:31:29
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 14:46:08
 * @Description: file content
-->

<template>
  <DeferredContent>
    <section class="col-12">
      <div class="slider-home">
        <div
          id="homeCarousel"
          ref="homeCarousel"
          data-bs-interval="4000"
          data-bs-ride="carousel"
          class="swiper carousel carousel-dark slide mySwiper"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              v-for="(slide, i) in slides"
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
              v-for="(slide, i) in slides"
              :key="slide.title"
            >
              <div class="container">
                <div class="row d-block d-lg-flex">
                  <div class="col">
                    <!--  d-flex flex-column justify-content-evenly -->
                    <h1>{{ slide.title }}</h1>
                    <div class="d-none d-lg-flex">
                      <markdown :source="slide.paragraph" noEdit />
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
                        :src="slide.image"
                        class="img-thumbnail d-block"
                        alt="..."
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
  </DeferredContent>
</template>

<script>
import Markdown from "../others/Markdown.vue";
import generateId from "@/helpers/generateId";
import { Carousel } from "bootstrap";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { Markdown },
  name: "HomeCarousel",
  data() {
    return {
      slides: [
        {
          image: "https://s2.loli.net/2022/01/21/RvdfQuY3ThMlkiX.jpg",
          paragraph:
            "擁有十多年豐富的私人及團體班教授經驗，並持有國家認可防身自衛術專業資格證晝及香港認可註冊持牌散手教練及裁判的專業資格。",
          title: "師資",
        },
        {
          image: "https://s2.loli.net/2022/01/21/ozMP2eJcWrZj7wq.jpg",
          title: "特點",
          paragraph:
            "此課程可報考政府康樂及文化事務署認可及資助之武術散手章別計劃一至十級全港公開考核試，考取青少年武術散手章別資格。亦可推薦成人報讀武術散手教練及裁判證書課程，考取認可武術專業資格。",
        },
      ],
    };
  },
  mounted() {
    const myCarousel = document.querySelector("#homeCarousel");
    new Carousel(myCarousel).cycle();
  },

  methods: {
    generateId,
    ...mapActions(["toggleModel", "updateView"]),
    edit() {
      const modelDetails = {
        content: this.slides,
        submitFunction: this.submitChange,
        type: "carousel",
      };
      this.toggleModel(modelDetails);
    },
    submitChange() {
      // id of view
      // TODO: Change to correct action
      // this.updateView();
    },
  },
  computed: {
    ...mapGetters(["isAdmin"]),
  },
};
</script>
