import { createWebHistory, createRouter } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "主頁",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/HomePage.vue"),
    meta: {
      icon: "pi pi-home",
    },
  },
  {
    path: "/about",
    name: "關於我們",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About/AboutPage.vue"),
    redirect: "/about/",
    children: [
      {
        path: "",
        name: "關於我們",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/About/AboutUsView.vue"
          ),
      },
      {
        path: "our-team",
        name: "專業教練團隊",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/About/OurTeamView.vue"
          ),
      },
      {
        path: "bylaws",
        name: "本會章程",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/About/BylawsView.vue"
          ),
      },
      {
        path: "media-interviews",
        name: "媒體採訪",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/About/MediaInterviewsView.vue"
          ),
      },
    ],
  },
  {
    path: "/assessments",
    name: "章別考核",
    component: () =>
      import(
        /* webpackChunkName: "assessments" */ "@/views/Assessments/AssessmentsPage.vue"
      ),
    redirect: "/assessments/syllabus",
    children: [
      {
        path: "syllabus",
        name: "武術自衛散手考试动作",
        component: () =>
          import(
            /* webpackChunkName: "assessments" */ "@/views/Assessments/SyllabusView.vue"
          ),
      },
      {
        path: "hk-badge",
        name: "武術散手章別全港公開試",
        component: () =>
          import(
            /* webpackChunkName: "assessments" */ "@/views/Assessments/HKBadgeView.vue"
          ),
      },
    ],
  },
  {
    path: "/course",
    name: "課程",
    component: () =>
      import(/* webpackChunkName: "course" */ "@/views/Course/CoursePage.vue"),
    redirect: "/course/content",
    children: [
      {
        path: "features",
        name: "課程特色",
        component: () =>
          import(
            /* webpackChunkName: "course" */ "@/views/Course/LessonFeaturesView.vue"
          ),
      },
      {
        path: "content",
        name: "學習內容",
        component: () =>
          import(
            /* webpackChunkName: "course" */ "@/views/Course/CourseContentView.vue"
          ),
      },
      {
        path: "class",
        name: "常規課程",
        component: () =>
          import(
            /* webpackChunkName: "course" */ "@/views/Course/ClassInfoView.vue"
          ),
      },
      {
        path: "session",
        name: "私人及組班課程",
        component: () =>
          import(
            /* webpackChunkName: "course" */ "@/views/Course/CourseSessionView.vue"
          ),
      },
      {
        name: "機構及學校合辦課程",
        path: "cooperation",
        component: () =>
          import(
            /* webpackChunkName: "course" */ "@/views/Course/CooperationCourseView.vue"
          ),
      },
    ],
  },
  {
    path: "/gallery",
    name: "本會相簿",
    component: () =>
      import(
        /* webpackChunkName: "gallery" */ "@/views/Gallery/GalleryPage.vue"
      ),
    redirect: "/gallery/training",
    children: [
      {
        path: "training",
        name: "本會訓練相簿",
        component: () =>
          import(
            /* webpackChunkName: "gallery" */ "@/views/Gallery/TrainingGalleryView.vue"
          ),
      },
      {
        path: "videos",
        name: "本會訓練影片",
        component: () =>
          import(
            /* webpackChunkName: "gallery" */ "@/views/Gallery/VideoGalleryView.vue"
          ),
      },
    ],
  },
  {
    path: "/contact",
    name: "聯絡我們",
    component: () =>
      import(/* webpackChunkName: "contact" */ "@/views/ContactsPage.vue"),
  },

  {
    path: "/admin",
    name: "Admin Panel",
    component: () =>
      import(/* webpackChunkName: "admin" */ "@/views/Admin/AdminPage.vue"),
    meta: {
      hidden: true,
    },
  },
];

export const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
});
