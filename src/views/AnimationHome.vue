<template>
  <div id="animation">
    <section ref="panel-1" id="section-1" class="pin-spacer page page-1">
      <div id="img-container" style="width: 100%">
        <img ref="logo" id="logo" src="/src/assets/images/logo.png" />
      </div>
      <div id="page-1-text" class="page-1__text">
        <h1>香港极拳道武术协会</h1>
        <h2>Hong Kong Top Win Do Martial Arts Association</h2>
      </div>
      <!-- <Navigation /> -->
      <!-- https://codepen.io/mohanraj0411/pen/EKNWON -->
      <div id="scroll-icon" class="spinner scroll-down">
        <a class="animate"></a>
      </div>
    </section>
    <section id="section-2" class="dark parallax page text">
      <h1>師資</h1>
      <p>
        擁有十多年豐富的私人及團體班教授經驗，並持有國家認可防身自衛術專業資格證晝及香港認可註冊持牌散手教練及裁判的專業資格。
      </p>
      <va-button size="large" to="/about/our-team">專業教練團隊</va-button>
    </section>
    <section id="section-3" class="parallax page">
      <h1>特點</h1>
      <p>
        此課程可報考政府康樂及文化事務署認可及資助之武術散手章別計劃一至十級全港公開考核試，考取青少年武術散手章別資格。亦可推薦成人報讀武術散手教練及裁判證書課程，考取認可武術專業資格。
      </p>
      <div class="grid">
        <va-button block class="col m-3" to="/assessments/syllabus" size="large"
          >考試動作</va-button
        >
        <va-button block class="col m-3" to="/course/content" size="large"
          >所有課程簡介</va-button
        >
      </div>
    </section>
    <section id="section-4" class="dark parallax page">
      <h1>私教</h1>
      <p>
        一對一、多人或自組小組教授，可選擇戶外、會所、體育館或上門授課，彈性上課時間及地點。
      </p>
    </section>
    <section id="section-5" class="parallax page">
      <h1>組班</h1>
      <p>
        擁有十多年豐富的私人及團體班教自組六人即可在本港各區以團體恆常的形式開班（上課地點及時間）可雙方協定。授經驗，並持有國家認可防身自衛術專業資格證晝及香港認可註冊持牌散手教練及裁判的專業資格。
      </p>
    </section>
    <section id="section-6" class="parallax dark page">
      <ContactsPage />
    </section>
    <section id="section-7" class="parallax page">
      <va-button to="/about" size="large">查看全部資訊</va-button>
    </section>
    <span id="end"></span>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { CSSPlugin } from "gsap/CSSPlugin.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import ContactsPage from "./ContactsPage.vue";

gsap.registerPlugin(ScrollTrigger, CSSPlugin, ScrollToPlugin);

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
        end: "100vh",
        pin: true,
        // markers: true,
        scrub: true,
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
        yPercent: 10,
        // xPercent: -((scale * 10) ** 2),
        ease: "linear",
      }
    );
    tween_nav.to("#page-1-text", { y: "-50vh", x: 0, yPercent: 25 }, "<");
    tween_nav.fromTo(
      "#scroll-icon",
      { opacity: 1 },
      {
        opacity: 0,
      },
      "<"
    );
    tween_nav.to(
      ["#img-container"],
      {
        css: { margin: 10 },
      },
      "<"
    );
    // tween_nav.to('#section-1')
    ScrollTrigger.create({
      trigger: "#section-1",
      start: "100vh",
      endTrigger: "#end",
      // markers: true,
      pin: true,
      // pinReparent: true,
    });
  },
  computed: {},
  components: { ContactsPage },
};
</script>

<style lang="scss">
#animation {
  section {
    &.parallax {
      padding: 5%;
    }

    &#section-6 {
      h1 {
        display: none;
      }
      div {
        margin: 0;
        iframe {
          height: 100%;
        }
      }
    }
    &.text {
      // background-color: black;
    }
    // @media only screen and (max-device-width: 1366px) {
    //   .parallax {
    //     background-attachment: scroll;
    //   }
    // }

    &.page {
      max-height: 100vh;
      width: 100vw;
      min-height: 50vh;

      &#section-1 {
        height: 100vh;
        .img-container {
          margin: 0;
        }

        @import "../scss/scroll_icon.scss";
      }
      display: flex;
      flex-direction: column;

      * {
        margin: auto;
      }
    }

    &.dark {
      background-color: rgb(0, 0, 0, 0.7);
      color: white;
    }
  }
  background-image: url("../assets/images/df098a8450fc65081bba1a00db798acbe8ddf696.jpg@942w_630h_progressive.webp");

  // min-height: 500px;
  // height: 80%;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
