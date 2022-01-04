<template>
  <!-- TODO: scroll down  to heading when click on nav  -->
  <syllabus-view ref="syllabus" />
  <hr />
  <h-k-badge-view id="hk-badge" ref="hkBadge" />
</template>

<script>
import HKBadgeView from "./HKBadgeView.vue";
import SyllabusView from "./SyllabusView.vue";
export default {
  components: { SyllabusView, HKBadgeView },
  name: "AssessmentsPage",
  mounted() {
    this.$nextTick(() => {
      // var el = this.$refs.hkBadge;
      // // const el = this.$el.getElementById("hk-badge");
      // console.log(el);
      // el.scrollIntoView({ behavior: "smooth" });
      // this.$refs.hkBadge0.$el.scrollIntoView({
      //   block: "end",
      //   scrollBehavior: "smooth",
      // });
      const container = this.$refs.hkBadge;
      console.log(container);
      container.scrollTop = container.scrollHeight;
      // var element = document.getElementById("hk-badge");
      // console.log(element);
      // var top = element.offsetTop;
      // window.scrollTo(0, top);
    });
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
