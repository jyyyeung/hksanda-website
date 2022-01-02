import { createWebHashHistory, createRouter } from "vue-router";

import HomeVue from "../views/HomePage.vue";
import AboutVue from "../views/AboutPage.vue";
import AssessmentsVue from "../views/AssessmentsPage.vue";
import CourseVue from "../views/CoursePage.vue";
import GallaryVue from "../views/GallaryPage.vue";
import ContactsVue from "../views/ContactsPage.vue";

const routes = [
  { path: "/", name: "Home", component: HomeVue },
  { path: "/about", name: "About", component: AboutVue },
  { path: "/assessments", name: "Assessments", component: AssessmentsVue },
  { path: "/course", name: "Course", component: CourseVue },
  { path: "/gallary", name: "Gallary", component: GallaryVue },
  { path: "/contact", name: "Contact", component: ContactsVue },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
