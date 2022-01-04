<template>
  <TabView :activeIndex="activeIndex" lazy>
    <TabPanel header="太极">
      <tai-chi />
    </TabPanel>
    <TabPanel header="泰拳">
      <muay-thai />
    </TabPanel>
    <TabPanel header="女子自卫术">
      <nv-zi-zi-wei-shu />
      <!-- TODO: Other Content -->
    </TabPanel>
    <TabPanel header="儿童武术">
      <children-wu-shu />
      <!-- TODO: Other Content -->
    </TabPanel>
    <TabPanel header="暑期武术功夫班">
      <!-- TODO: Content -->
    </TabPanel>
    <TabPanel header="私人武术课程">
      <private-wu-shu />
      <!-- TODO: Other content -->
    </TabPanel>
    <TabPanel header="私人亲子功夫班">
      <private-family-kung-fu />
      <!-- TODO: Other content -->
    </TabPanel>
  </TabView>
</template>

<script>
import ChildrenWuShu from "./Details/ChildrenWuShu.vue";
import NvZiZiWeiShu from "./Details/NvZiZiWeiShu.vue";
import PrivateFamilyKungFu from "./Details/PrivateFamilyKungFu.vue";
import PrivateWuShu from "./Details/PrivateWuShu.vue";
import TaiChi from "./Details/TaiChi.vue";
import MuayThai from "./Details/MuayThai.vue";
export default {
  components: {
    TaiChi,
    NvZiZiWeiShu,
    ChildrenWuShu,
    PrivateWuShu,
    PrivateFamilyKungFu,
    MuayThai,
  },
  name: "CourseContent",
  data() {
    return {
      activeIndex: 0,
    };
  },
  created() {
    this.setTab();
  },
  updated() {
    this.setTab();
  },

  methods: {
    setTab() {
      const type = this.$route.params.type;
      console.log(type);
      if (type) {
        this.activeIndex = parseInt(type);
        this.$router.push("/course/content");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sizes {
  .p-inputtext {
    display: block;
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
.p-field * {
  display: block;
}
</style>
