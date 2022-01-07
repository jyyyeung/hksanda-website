<template>
  <section ref="panel-1" class="parallax page page-1">
    <img ref="logo" id="logo" src="/src/assets/images/logo.png" />
    <div id="page-1-text" class="page-1__text">
      <h1>香港极拳道武术协会</h1>
      <h2>Hong Kong Top Win Do Martial Arts Assosiation</h2>
    </div>
  </section>
  <section id="trigger" class="page text">
    <h1>師 資</h1>
    <p>
      擁有十多年豐富的私人及團體班教授經驗，並持有國家認可防身自衛術專業資格證晝及香港認可註冊持牌散手教練及裁判的專業資格。
    </p>
  </section>
  <section id="trigger-2" class="parallax page">
    <h1>師 資</h1>
    <p>
      擁有十多年豐富的私人及團體班教授經驗，並持有國家認可防身自衛術專業資格證晝及香港認可註冊持牌散手教練及裁判的專業資格。
    </p>
  </section>
</template>

<script>
import { ref } from "vue";
import * as ScrollMagic from "scrollmagic";
import { gsap } from "gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, gsap);

// let windowWidth = ref(window.innerWidth);
// let windowHeight = ref(window.innerHeight);

// const onWidthChange = () => {
//   windowWidth.value = window.innerWidth;
//   windowHeight.value = window.innerHeight;
// };

export default {
  nmae: "AnimationHome",
  // created() {},
  data() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  },
  mounted() {
    this.logoWidth = this.$refs.logo.clientWidth;
    this.logoHeight = this.$refs.logo.clientHeight;

    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    };

    const controller = new ScrollMagic.Controller({});

    const tween = gsap.timeline();

    console.log(this.$refs.logo.clientHeight);
    console.log(this.$refs.logo.clientWidth);
    const scale = 0.5;
    tween
      .fromTo(
        "#logo",
        { x: 0, y: 0 },
        {
          scale: scale,

          // x: -this.windowWidth / 2 + (this.logoWidth / 2) * scale,
          ease: "linear",
        }
      )
      .to("#logo", {
        x: -this.windowWidth / 2 + (this.logoHeight / 2) * scale + 20,
        y: 10,
      });
    new ScrollMagic.Scene({
      triggerElement: "#page-1-text",
      triggerHook: 0.5,
      // duration: 20,
    })
      .setTween(tween)
      .setPin("#logo")
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.parallax {
  background-image: url("../assets/images/df098a8450fc65081bba1a00db798acbe8ddf696.jpg@942w_630h_progressive.webp");
  // background-image: url("https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg");

  // min-height: 500px;
  height: 80%;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .text {
    background-color: black;
  }
}

// @media only screen and (max-device-width: 1366px) {
//   .parallax {
//     background-attachment: scroll;
//   }
// }

.page {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  * {
    margin: auto;
  }
  &-1 {
    //
  }
}
</style>
