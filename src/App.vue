<template>
  <div id="app">
    <Menubar :model="menuItems">
      <template #start>
        <a href="/">
          <img
            alt="logo"
            src="./assets/images/logo.png"
            height="72"
            class="p-mr-2"
          />
        </a>
      </template>
    </Menubar>
    <!-- <div class="bg"> -->
    <div class="bg__text-outer">
      <div id="bg__text-1" class="bg__text noselect">勇敢</div>
      <div id="bg__text-2" class="bg__text noselect">頑强</div>
      <div id="bg__text-3" class="bg__text noselect">不怕苦</div>
      <div id="bg__text-4" class="bg__text noselect">敢於拼搏</div>
    </div>
    <!-- </div> -->
    <div class="main">
      <div class="container">
        <div class="container__inner">
          <ScrollPanel style="height: 100%; width: 100%">
            <router-view class="main__router router-view"></router-view>
          </ScrollPanel>
        </div>
      </div>
    </div>
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
        { label: "联络我们", to: "/contact" },
      ],
    };
  },
  apollo: {},
  methods: {},
};
</script>

<style lang="scss">
:root {
  // --bg-color: #000;
  --text-color: #73b0d7;
  --primary-color: #73b0d7 !important;
  --focus-ring: #73b0d7 !important;
}

body {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
  background-color: var(--surface-a);
  // font-family: var(--font-family);
  font-family: FZYan;
  font-weight: 400;
  // color: var(--text-color);
  color: #73b0d7;
  #app {
    overflow: hidden;
    .p-component {
      font-family: FZYan;
    }
    .bg__text {
      color: black;
      writing-mode: vertical-lr;

      font-size: 7em;
      font-weight: bolder;
      font-family: luxun;
      position: absolute;

      background-image: linear-gradient(
        -65deg,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.8)
      );
      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;

      &#bg__text-1 {
        left: 8vw;
        opacity: 0.6;
      }
      &#bg__text-2 {
        right: 4.5vw;
        bottom: 13vh;
      }
      &#bg__text-3 {
        left: 3vw;
        bottom: 5vh;
        opacity: 0.8;
      }
      &#bg__text-4 {
        opacity: 0.75;
        right: 2vh;
        top: 1vw;
      }
    }
    height: 100vh;
    background-image: url("./assets/images/df098a8450fc65081bba1a00db798acbe8ddf696.jpg@942w_630h_progressive.webp");
    background-size: cover;
  }

  .main {
    z-index: 1;
    width: 70vw;
    margin: auto;
    height: 80vh;
    background: linear-gradient(45deg, black, transparent);
    padding: 10px;

    .container {
      padding: 0.32rem;
      border-color: white;
      border-width: 5px;
      border-style: solid;
      color: white;
      height: 100%;

      &__inner {
        border: white 1px solid;
        padding: 10px;
        height: 100%;

        h1 {
          font-family: luxun;
          font-size: xxx-large;
          text-align: center;
        }

        h2 {
          font-size: xx-large;
          margin: 15px auto;
        }

        p {
          font-size: larger;
          margin: 1% auto;
          line-height: normal;
        }

        a {
          color: var(--primary-color);
        }

        .p-card {
          background: transparent;
        }

        .main__router {
          height: 100%;
        }
      }
    }
  }
  .p-menubar {
    background: transparent;
    border: none;
    .p-menubar-root-list {
      z-index: 2;

      & > .p-menuitem > .p-menuitem-link {
        background: transparent;
        min-height: 3em;
      }
      .p-menuitem {
        &-active,
        &:hover {
          background: url("./assets/images/brush.png");
          background-position: center;
          background-size: cover;
          background-color: transparent;
          border: none;
        }
        &.p-menuitem-active > .p-menuitem-link,
        &.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover {
          background: transparent;
        }
        &-active > .p-submenu-list {
          border: none;
          box-shadow: none;
          background: radial-gradient(black, transparent);
        }
      }
    }
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
    .p-menuitem-text,
    .p-menuitem-icon,
    .p-submenu-icon {
      color: black;
    }
  }

  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
}
</style>
