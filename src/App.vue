<template>
  <div id="app">
    <Menubar :model="menuItems">
      <template #start>
        <img
          alt="logo"
          src="./assets/images/logo.png"
          height="40"
          class="p-mr-2"
        />
      </template>
      <template #end>
        <InputText placeholder="Search" type="text" />
      </template>
    </Menubar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menuItems: [
        {
          label: "主页",
          icon: "",
          to: "/",
        },
        {
          label: "关于我们",
          icon: "",
          items: [
            { label: "关于我们", to: "/about/" },
            { label: "专业教练团队", to: "/about/our-team" },
            { label: "传媒专访", to: "/about/media-interviews" },
          ],
        },
        {
          label: "章别考核",
          items: [
            { label: "考试动作", to: "/assessments/syllabus" },
            { label: "武术散手章别全港公开试", to: "/assessments/hk-badge" },
          ],
        },
        {
          label: "课程简介",
          items: [
            {
              label: "学习内容",
              to: "/course/content",
              items: [
                { label: "太极" },
                { label: "泰拳" },
                { label: "女子自卫术" },
                { label: "儿童武术" },
                { label: "暑期武术功夫" },
                { label: "私人武术课程" },
                { label: "私人亲子功夫班" },
              ],
            },

            { label: "私人课程", to: "/course/private" },
            { label: "组班课程", to: "/course/group" },
            { label: "可参与团体课程（各区上课地点）", to: "/course/class" },
          ],
        },
        {
          label: "训练相簿",
          items: [
            {
              label: "本会训练相簿",
              to: "/gallary/training",
            },
            { label: "本会活动影片", to: "/gallary/activities" },
          ],
        },
        { label: "联络我们", to: "contact-us" },
      ],
    };
  },
  apollo: {},
};
</script>

<style>
body {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--surface-a);
  font-family: var(--font-family);
  font-weight: 400;
  color: var(--text-color);
}
p {
  font-family: TYZ-s, SXSL-t;
}
</style>
