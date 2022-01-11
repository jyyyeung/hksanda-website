<template>
  <section class="slider-home">
    <section-blocks
      :sections="slides"
      :style="sliderStyles"
      :classes="'wrapper'"
    />
    <button type="button" class="arrows prev" @click="prevOne()">
      <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </button>
    <button type="button" class="arrows next" @click="nextOne()">
      <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </button>
    <ul class="dots-container">
      <li
        v-for="(slide, index) in slides"
        :class="`${isActive(index)} dots`"
        :key="index"
      >
        <button @click="active = index">
          <span>&#9679;</span>
        </button>
      </li>
    </ul>

    <button type="button" class="toggle-play" @click="toggleAutoPlay()">
      <svg
        v-if="this.autoplay"
        fill="#FFFFFF"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
        />
      </svg>
      <svg v-else fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
        />
      </svg>
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SectionBlocks from "../others/SectionBlocks.vue";

export default defineComponent({
  name: "HomeCarousel",
  components: { SectionBlocks },
  setup() {
    const slides = ref([
      {
        images: {
          images: ["https://www.hksanda.com/images/2017-01-12%2022.25.26.jpg"],
          onLeft: false,
          classes: "el-col-8",
          noPreview: true,
        },
        text: {
          paragraphs: [
            "擁有十多年豐富的私人及團體班教授經驗，並持有國家認可防身自衛術專業資格證晝及香港認可註冊持牌散手教練及裁判的專業資格。",
          ],
          h2: "師資",
          buttons: [{}],
          col: 16,
        },
        classes: "each-slide",
      },
      {
        images: {
          images: ["https://www.hksanda.com/images/%E5%8F%AF.jpg"],
          onLeft: false,
          col: 8,
          noPreview: true,
        },
        text: {
          col: 16,
          h2: "特點",
          paragraph:
            "此課程可報考政府康樂及文化事務署認可及資助之武術散手章別計劃一至十級全港公開考核試，考取青少年武術散手章別資格。亦可推薦成人報讀武術散手教練及裁判證書課程，考取認可武術專業資格。",
        },
        classes: "each-slide",
      },
    ]);
    const active = ref(0);
    const autoplay = ref(true);

    return { active, autoplay, slides };
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
    max(): number {
      return this.slides.length;
    },
    sliderStyles(): { width: String; transform: String } {
      const transition: Number = (this.active * -100) / this.max;

      return {
        width: this.slides.length * 100 + "%",
        transform: "translateX(" + transition + "%)",
      };
    },
  },

  methods: {
    toggleAutoPlay(): void {
      this.autoplay = !this.autoplay;
    },

    nextOne(): void {
      if (this.active < this.max - 1) {
        this.active += 1;
      }
    },

    prevOne(): void {
      if (this.active > 0) {
        this.active -= 1;
      }
    },

    isActive(value): void {
      this.active === value && "active";
    },
  },
});
</script>

<style lang="scss">
.slider-home {
  width: 100%;
  height: 50vh;
  overflow: hidden;
  position: relative;

  .wrapper {
    height: 100%;
    transition: 0.5s all linear;
    will-change: transform;
  }

  .arrows {
    position: absolute;
    top: 50%;
    background: none;
    height: 60px;
    border: 0;
    cursor: pointer;
    transition: ease 0.3s all;
    outline: none;

    &.prev {
      left: 0;

      &:hover {
        opacity: 0.7;
        left: -10px;
      }
    }

    &.next {
      right: 0;

      &:hover {
        right: -10px;
        opacity: 0.7;
      }
    }
  }

  .dots-container {
    height: auto;
    margin: 0;
    padding: 0;
    position: absolute;
    width: auto;
    text-align: center;
    left: 50%;
    bottom: 9px;
    transform: translateX(-50%);
    z-index: 10;
    list-style-type: none;

    li {
      display: inline-block;
      padding: 5px;

      &.active {
        button {
          color: #00d8ff;
        }
      }

      button {
        color: #fff;
        background-color: transparent;
        border: none;

        &:hover {
          text-decoration: none;
          opacity: 0.7;
          cursor: pointer;
        }
      }
    }
  }

  .toggle-play {
    background: transparent;
    border: none;
    height: auto;
    position: absolute;
    width: auto;
    right: 5%;
    bottom: 9px;
    color: #3d3d3d;
    z-index: 1000000;

    &:hover {
      text-decoration: none;
      opacity: 0.7;
      cursor: pointer;
    }
  }

  .each-slide {
    height: 100%;
    float: left;
    text-align: center;
    object-fit: cover;

    background-position: center center;
    background-color: transparent;

    &.el-grid > .col,
    &.el-grid > .el-col {
      height: 100%;

      > .va-image {
        height: inherit;
      }
    }
  }
}
</style>
