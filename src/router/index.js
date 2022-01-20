import { createWebHistory, createRouter } from "vue-router";

// const { createWebHistory, createRouter } = require("vue-router");

export const routes = [
  {
    path: "/",
    component: () => import("@/views/Frontend.vue"),
    meta: {
      icon: "pi pi-home",
    },
    children: [
      {
        path: "",
        name: "主頁",
        component: () => import("@/views/HomePage.vue"),
      },
      {
        path: "about",
        name: "關於我們",
        component: () => import("@/views/About/AboutPage.vue"),
        redirect: "/about/",
        children: [
          {
            path: "",
            name: "關於我們",
            component: () => import("@/views/About/AboutUsView.vue"),
          },
          {
            path: "our-team",
            name: "專業教練團隊",
            component: () => import("@/views/About/OurTeamView.vue"),
          },
          {
            path: "bylaws",
            name: "本會章程",
            component: () => import("@/views/About/BylawsView.vue"),
          },
          {
            path: "media-interviews",
            name: "媒體採訪",
            component: () => import("@/views/About/MediaInterviewsView.vue"),
          },
        ],
      },
      {
        path: "assessments",
        name: "章別考核",
        component: () => import("@/views/Assessments/AssessmentsPage.vue"),
        redirect: "/assessments/syllabus",
        children: [
          {
            path: "syllabus",
            name: "武術自衛散手考试动作",
            component: () => import("@/views/Assessments/SyllabusView.vue"),
          },
          {
            path: "hk-badge",
            name: "武術散手章別全港公開試",
            component: () => import("@/views/Assessments/HKBadgeView.vue"),
          },
        ],
      },
      {
        path: "course",
        name: "課程",
        component: () => import("@/views/Course/CoursePage.vue"),
        redirect: "/course/content",
        children: [
          {
            path: "features",
            name: "課程特色",
            component: () => import("@/views/Course/LessonFeaturesView.vue"),
          },
          {
            path: "content",
            name: "學習內容",
            component: () => import("@/views/Course/CourseContentView.vue"),
          },
          {
            path: "class",
            name: "常規課程",
            component: () => import("@/views/Course/ClassInfoView.vue"),
          },
          {
            path: "session",
            name: "私人及組班課程",
            component: () => import("@/views/Course/CourseSessionView.vue"),
          },
        ],
      },
      {
        path: "gallery",
        name: "本會相簿",
        component: () => import("@/views/Gallery/GalleryPage.vue"),
        redirect: "/gallery/training",
        children: [
          {
            path: "training",
            name: "本會訓練相簿",
            component: () => import("@/views/Gallery/TrainingGalleryView.vue"),
          },
          {
            path: "videos",
            name: "本會訓練影片",
            component: () => import("@/views/Gallery/VideoGalleryView.vue"),
          },
        ],
      },
      {
        path: "contact",
        name: "聯絡我們",
        component: () => import("@/views/ContactsPage.vue"),
      },
    ],
  },

  {
    path: "/admin",
    name: "Admin Panel",
    component: () => import("@/views/Admin/AdminPage.vue"),
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
