<template>
  <Menubar :model="menuItems">
    <template #start>
      <a href="/">
        <img
          alt="logo"
          src="@/assets/images/logo.png"
          height="72"
          class="p-mr-2"
        />
      </a>
    </template>
  </Menubar>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      menuItems: [
        {
          label: "主页",
          icon: "pi pi-home",
          to: "/",
        },
        {
          label: "关于我们",
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
                { label: "太极", to: "/course/content/0" },
                { label: "泰拳", to: "/course/content/1" },
                { label: "女子自卫术", to: "/course/content/2" },
                { label: "儿童武术", to: "/course/content/3" },
                { label: "暑期武术功夫", to: "/course/content/4" },
                { label: "私人武术课程", to: "/course/content/5" },
                { label: "私人亲子功夫班", to: "/course/content/6" },
              ],
            },

            { label: "私人及组班课程", to: "/course/session" },
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
        { label: "联络我们", to: "/contact" },
      ],
    };
  },
};
</script>

<style lang="scss">
#animation {
  .p-menubar-start {
    display: none;
  }
  .p-menubar-button {
    display: none;
  }
  .p-menubar-root-list {
    right: 0;
    position: fixed;
    display: contents;

    .p-submenu-list {
      display: inline-flex;
    }
  }
}
</style>
