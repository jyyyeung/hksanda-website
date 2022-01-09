<template>
  <div id="animation">
    <section ref="panel-1" id="section-1" class="page page-1">
      <div id="shrink-container">
        <span class="img-container">
          <img ref="logo" id="logo" src="/src/assets/images/logo.png" />
        </span>
        <span id="page-1-text" class="page-1__text">
          <h1>香港极拳道武术协会</h1>
          <h2>Hong Kong Top Win Do Martial Arts Association</h2>
        </span>
      </div>

      <!-- https://codepen.io/mohanraj0411/pen/EKNWON -->
      <!-- BUG: -->
    </section>
    <div class="arrows"></div>
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
      <va-button size="large" to="/course/session">更多私教詳情</va-button>
    </section>
    <span id="end"></span>
    <section id="section-5" class="parallax page">
      <h1>組班</h1>
      <p>
        擁有十多年豐富的私人及團體班教自組六人即可在本港各區以團體恆常的形式開班（上課地點及時間）可雙方協定。授經驗，並持有國家認可防身自衛術專業資格證晝及香港認可註冊持牌散手教練及裁判的專業資格。
      </p>
      <va-button size="large" to="/course/session">更多組班詳情</va-button>
    </section>
    <section id="section-7" class="dark parallax page">
      <va-button to="/about" size="large">查看全部資訊</va-button>
    </section>
    <section id="section-6" class="parallax page">
      <ContactsPage />
    </section>
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
        // end: "200vh",

        end: "bottom center",
        pin: true,
        markers: true,
        scrub: true,
        pinSpacing: true,
      },
    });
    ScrollTrigger.create({
      trigger: "#section-1",
      // TODO: Measure dynamic location
      // start: "trigger location, detect location "
      start: "center start",
      // start: "#section-2",
      endTrigger: "#end",
      markers: true,
      pin: true,
    });
    tween_nav
      .fromTo(
        ".img-container",
        { width: "100vw" },
        { width: "20vw", ease: "linear" },
        "<"
      )
      .fromTo(
        "#page-1-text",
        { width: "100vw" },
        { width: "80vw", ease: "linear" },
        "<"
      )
      .to(
        "#shrink-container",
        {
          yPercent: "50",
        },'<'
      );
  },
  computed: {},
  components: { ContactsPage },
};
</script>

<style lang="scss">
#animation {
  @import "../scss/scroll_icon.scss";
  section {
    &.parallax {
      padding: 5%;
    }

    &#section-6 {
      h1 {
        // display: none;
      }
      div {
        margin: 0;
        iframe {
          height: 100%;
        }
      }
    }

    &.page {
      display: flex;
      flex-direction: column;

      * {
        margin: auto;
      }

      max-height: 100vh;
      width: 100vw;
      min-height: 50vh;

      &#section-1 {
        height: 100vh;
        * {
          box-sizing: border-box;
        }

        #shrink-container {
          width: 100%;
          display: flex;
          margin: auto;
          text-align: center;
          flex-wrap: wrap;

          .img-container {
            margin: 0 !important;
            text-align: center;

            img {
              width: -webkit-fill-available;
              max-width: fit-content;
            }
          }

          .page-1__text {
            margin: 0;
          }
        }
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
