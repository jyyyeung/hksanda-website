<template>
  <section class="col-12">
    <div class="slider-home">
      <div
        id="homeCarousel"
        class="swiper carousel carousel-dark slide mySwiper"
        data-bs-interval="1500"
        data-bs-ride="carousel"
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
            aria-label="Slide 1"
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
                    <markdown :source="slide.paragraph" />
                    <button
                      v-if="slide.button"
                      class="btn btn-primary"
                      link
                      :to="slide.button.to"
                    >
                      {{ slide.button.text }}
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
                  <button
                    v-if="slide.button"
                    class="btn btn-primary"
                    link
                    :to="slide.button.to"
                  >
                    {{ slide.button.text }}
                  </button>
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
export default {
  components: { Markdown },
  // components: { BaseBlock },
  name: "HomeCarousel",
  data() {
    return {
      // slides: [
      //   `::: .md .wrapper\n::: .md .each-slide  \n::: text\n# 师资 \n擁有十多年豐富的私人及團體班教授經驗，並持有國家認可防身自衛術專業資格證晝及香港認可註冊持牌散手教練及裁判的專業資格。\n<button>Button</button>\n:::\n::: image\n![](https://www.hksanda.com/images/2017-01-12%2022.25.26.jpg)\n:::\n:::\n:::`,
      //   `::: .md .each-slide \n::: text \n # 特点 \n此課程可報考政府康樂及文化事務署認可及資助之武術散手章別計劃一至十級全港公開考核試，考取青少年武術散手章別資格。亦可推薦成人報讀武術散手教練及裁判證書課程，考取認可武術專業資格。\n:::\n:::image\n![](https://www.hksanda.com/images/%E5%8F%AF.jpg)\n:::\n:::`,
      // ],
      slides: [
        {
          image: "https://www.hksanda.com/images/2017-01-12%2022.25.26.jpg",
          paragraph:
            "擁有十多年豐富的私人及團體班教授經驗，並持有國家認可防身自衛術專業資格證晝及香港認可註冊持牌散手教練及裁判的專業資格。",
          title: "師資",
        },
        {
          image: "https://www.hksanda.com/images/%E5%8F%AF.jpg",
          title: "特點",
          paragraph:
            "此課程可報考政府康樂及文化事務署認可及資助之武術散手章別計劃一至十級全港公開考核試，考取青少年武術散手章別資格。亦可推薦成人報讀武術散手教練及裁判證書課程，考取認可武術專業資格。",
        },
      ],
      active: 0,
      autoplay: false,
    };
  },
  mounted() {
    const intervalBetweenSlides = () => {
      if (this.autoplay) {
        this.active = this.active === this.max - 1 ? 0 : this.active + 1;
      }
    };
    // react use effect
    const interval = setInterval(() => intervalBetweenSlides(), 3000);
    return () => clearInterval(interval);
  },
  computed: {
    max() {
      return this.slides.length;
    },
  },
  methods: {
    generateId,
    toggleAutoPlay() {
      this.autoplay = !this.autoplay;
    },

    nextOne() {
      if (this.active < this.max - 1) {
        this.active += 1;
      }
    },

    prevOne() {
      if (this.active > 0) {
        this.active -= 1;
      }
    },

    isActive(value) {
      this.active === value && "active";
    },
    setSliderStyles() {
      const transition = (this.active * -100) / this.max;

      return {
        width: this.slides.length * 100 + "%",
        transform: "translateX(" + transition + "%)",
      };
    },
  },
};
</script>

<style lang="scss">
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/mixins/_breakpoints";
.slider-home {
  // max-height: 50vh;
  hr {
    margin: 0 2.5vw;
    color: black;
  }

  .ratio-inner {
    height: 100%;
  }
  .carousel-inner {
    padding: 2.5vw;
    padding-top: 1.6vw;
    padding-bottom: 0;
    & > .item > img,
    & > .item > a > img {
      margin: auto;
    }

    h1 {
      margin: 0;
      margin-bottom: 0.5rem;
      text-align: start !important;
    }

    img {
      object-fit: cover;
      object-position: top;
    }

    @include media-breakpoint-down(md) {
      padding: 0;
    }
  }
}
</style>
