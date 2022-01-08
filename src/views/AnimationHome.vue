<template>
  <div id="animation">
    <section
      ref="panel-1"
      id="section-1"
      class="pin-spacer parallax page page-1"
    >
      <div id="img-container" style="width: 100%">
        <img ref="logo" id="logo" src="/src/assets/images/logo.png" />
      </div>
      <div id="page-1-text" class="page-1__text">
        <h1>香港极拳道武术协会</h1>
        <h2>Hong Kong Top Win Do Martial Arts Association</h2>
      </div>
    </section>
    <section ref="trigger" id="section-2" class="page text">
      <h1>師 資</h1>
      <p>
        擁有十多年豐富的私人及團體班教授經驗，並持有國家認可防身自衛術專業資格證晝及香港認可註冊持牌散手教練及裁判的專業資格。
      </p>
    </section>
    <section id="trigger-3" class="parallax page">
      <h1>師 資</h1>
      <p>
        擁有十多年豐富的私人及團體班教授經驗，並持有國家認可防身自衛術專業資格證晝及香港認可註冊持牌散手教練及裁判的專業資格。
      </p>
    </section>
    <section id="trigger-4" class="parallax page">
      <h1>師 資</h1>
      <p>
        擁有十多年豐富的私人及團體班教授經驗，並持有國家認可防身自衛術專業資格證晝及香港認可註冊持牌散手教練及裁判的專業資格。
      </p>
    </section>
    <section id="trigger-5" class="parallax page">
      <h1>師 資</h1>
      <p>
        擁有十多年豐富的私人及團體班教授經驗，並持有國家認可防身自衛術專業資格證晝及香港認可註冊持牌散手教練及裁判的專業資格。
      </p>
    </section>
    <section id="end"></section>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { CSSPlugin } from "gsap/CSSPlugin.js";

gsap.registerPlugin(ScrollTrigger, CSSPlugin);

export default {
  name: "AnimationHome",
  data() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  },
  mounted() {
    const tween_nav = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-1",

        pin: true,
        markers: true,
        scrub: true,

        // pinReparent: true,
      },
    });

    const scale = 0.5;
    tween_nav.fromTo(
      "#logo",
      {
        xPercent: -50,
        x: "50vw",
      },
      {
        scale: scale,
        x: 0,
        xPercent: (0 - 50) * scale,
        // yPercent: -50,
        // xPercent: -25,
        // xPercent: -((scale * 10) ** 2),
        ease: "linear",
      }
    );

    tween_nav.to("#page-1-text", { scale: 0.5, y: "-50vh", x: 0 }, "<");

    // tween_nav.to('#section-1')

    ScrollTrigger.create({
      trigger: "#section-1",
      start: "100vh",
      endTrigger: "#end",

      markers: true,
      pin: true,

      // pinReparent: true,
    });
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
#animation {
  background-image: url("../assets/images/df098a8450fc65081bba1a00db798acbe8ddf696.jpg@942w_630h_progressive.webp");
  // background-image: url("https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg");

  // min-height: 500px;
  // height: 80%;

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
