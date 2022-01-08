<template>
  <!-- TODO: scroll down  to heading when click on nav  -->
  <div id="assessments">
    <syllabus-view />
    <hr />
    <h-k-badge-view />
  </div>
</template>

<script>
import HKBadgeView from "./HKBadgeView.vue";
import SyllabusView from "./SyllabusView.vue";

import * as ScrollMagic from "scrollmagic";
import { gsap } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, gsap);
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";

gsap.registerPlugin(ScrollToPlugin);

export default {
  components: { SyllabusView, HKBadgeView },
  name: "AssessmentsPage",

  mounted() {
    // this.controller = new ScrollMagic.Controller();
    // this.controller.scrollTo((element) => {
    //   console.log(document.getElementById(element));
    //   // console.log(position);
    //   // gsap.to(window, { scrollTo: { y: position } });
    // });
    // this.controller.scrollTo("#hk-badge");
    gsap.to("#assessments", { scrollTo: { y: 400 } });
  },
  updated() {
    this.goto();
  },
  methods: {
    goto() {
      const destination = this.$route.params.dest;
      console.log(destination);
      if (destination) {
        var element = this.$refs[destination];
        var top = element.offsetTop;

        window.scrollTo(0, top);
      }
    },
  },
};
</script>
