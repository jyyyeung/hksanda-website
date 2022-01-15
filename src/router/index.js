import { createWebHistory, createRouter } from "vue-router";

import HomeVue from "../views/HomePage.vue";

import AboutVue from "../views/About/AboutPage.vue";
import AboutUsVue from "../views/About/AboutUsView.vue";
import OurTeamVue from "../views/About/OurTeamView.vue";
import MediaInterviewsVue from "../views/About/MediaInterviewsView.vue";

import AssessmentsVue from "../views/Assessments/AssessmentsPage.vue";
import SyllabusVue from "../views/Assessments/SyllabusView.vue";
import HKBadgeVue from "../views/Assessments/HKBadgeView.vue";

import CourseVue from "../views/Course/CoursePage.vue";
import CourseContentVue from "../views/Course/CourseContentView.vue";
import ClassInfoVue from "../views/Course/ClassInfoView.vue";
import CourseSessionVue from "../views/Course/CourseSessionView.vue";

import GalleryVue from "../views/Gallery/GalleryPage.vue";
import TrainingGalleryVue from "../views/Gallery/TrainingGalleryView.vue";

import ContactsVue from "../views/ContactsPage.vue";

import AdminHomeVue from "../views/Admin/AdminHomeView.vue";
import AdminPanelVue from "../views/Admin/AdminPanelPage.vue";
import VideoGalleryViewVue from "@/views/Gallery/VideoGalleryView.vue";

const routes = [
  {
    path: "/",
    name: "主頁",
    component: HomeVue,
    meta: {
      icon: "home",
    },
  },
  {
    path: "/about",
    name: "關於",
    component: AboutVue,
    redirect: "/about/",
    children: [
      {
        path: "",
        name: "關於我們",
        component: AboutUsVue,
      },
      {
        path: "our-team",
        name: "專業團隊",
        component: OurTeamVue,
      },
      {
        path: "media-interviews",
        name: "媒體採訪",
        component: MediaInterviewsVue,
      },
    ],
  },
  {
    path: "/assessments",
    name: "考試",
    component: AssessmentsVue,
    redirect: "/assessments/syllabus",
    children: [
      {
        path: "syllabus",
        name: "武術自衛散手考试动作",
        component: SyllabusVue,
      },
      {
        path: "hk-badge",
        name: "武術散手章別全港公開試",
        component: HKBadgeVue,
      },
    ],
  },
  {
    path: "/course",
    name: "課程",
    component: CourseVue,
    redirect: "/course/content",
    children: [
      {
        path: "content",
        name: "學習內容",
        component: CourseContentVue,
      },
      {
        path: "session",
        name: "私人及組班課程",
        component: CourseSessionVue,
      },
      {
        path: "class",
        name: "各區上課地點",
        component: ClassInfoVue,
      },
    ],
  },
  {
    path: "/gallery",
    name: "相簿",
    component: GalleryVue,
    redirect: "/gallery/training",
    children: [
      {
        path: "training",
        name: "訓練照片",
        component: TrainingGalleryVue,
      },
      {
        path: "videos",
        name: "影片",
        component: VideoGalleryViewVue,
      },
    ],
  },
  { path: "/contact", name: "聯絡我們", component: ContactsVue },
  {
    path: "/admin",
    name: "Admin Panel",
    component: AdminPanelVue,
    children: [{ path: "", component: AdminHomeVue }],
  },
];

export const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
});
