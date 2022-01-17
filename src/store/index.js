/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-16 15:40:21
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 19:21:01
 * @Description: vuex store file for project
 * @FilePath: /hksanda-website/src/store/index.js
 */
import { s2t_HTMLConvertHandler, t2s_HTMLConvertHandler } from "@/helpers/i18n";

import { createStore } from "vuex";
import { apolloProvider } from "@/apollo/index.js";
import { GET_COURSE_CONTENTS } from "@/apollo/course-contents";
import { GET_VIEW, GET_VIEW_BY_ROUTE } from "@/apollo/view";

const apollo = apolloProvider.defaultClient;

// Create a new store instance.
export const store = createStore({
  state: {
    lang: "zh-HK",
  },
  getters: {
    getLang: (state) => {
      return state.lang;
    },
    getCourseContents: (state) => {
      return state.courseContent;
    },
    getViewByRoute: (state) => (route) => {
      return state.views.find((view) => view.route == route);
    },
  },
  mutations: {
    SET_LANG: (state, lang) => {
      state.lang = lang;
    },
    SET_COURSE_CONTENT: (state, courseContent) => {
      state.courseContent = courseContent;
    },
    SET_VIEW: (state, view) => {
      state.views = view;
    },
  },
  actions: {
    setLang: ({ commit, state }, lang) => {
      commit("SET_LANG", lang);
      return state.lang;
    },
    localizePage: ({ state }) => {
      state.lang == "zh-CH"
        ? t2s_HTMLConvertHandler.convert()
        : s2t_HTMLConvertHandler.convert();
    },
    getCourseContents: async ({ commit }) => {
      // OPTIONAL: Check if can only fetch data from db when state doesn't exist
      const courseContents = await apollo.query({ query: GET_COURSE_CONTENTS });

      commit("SET_COURSE_CONTENT", courseContents.data.getCourseContents);
    },
    getView: async ({ commit }) => {
      const view = await apollo.query({
        query: GET_VIEW,
      });

      commit("SET_VIEW", view.data.getView);
    },
  },
});
