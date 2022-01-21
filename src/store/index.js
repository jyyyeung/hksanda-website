/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-16 15:40:21
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-19 11:19:42
 * @Description: vuex store file for project
 * @FilePath: /hksanda-website/src/store/index.js
 */
import { s2t_HTMLConvertHandler, t2s_HTMLConvertHandler } from "@/helpers/i18n";

import { createStore } from "vuex";
import { apolloProvider } from "@/apollo/index.js";
import { GET_COURSE_CONTENTS } from "@/apollo/course-contents";
import { GET_VIEW } from "@/apollo/view";
import { GET_CONTACTS } from "@/apollo/contact";
import { GET_INTERVIEWS } from "@/apollo/interview";
import { GET_MASONRY } from "@/apollo/masonry";

import MarkdownIt from "markdown-it";
const md = new MarkdownIt().set({
  html: true,
  linkify: true,
  typographer: true,
  xhtmlOut: true,
});

const apollo = apolloProvider.defaultClient;

const parseMarkdown = (content) => {
  const markdown = md.render(content);
  return markdown.replace(/(li>\n)/gm, "li>").replace(/(ul>\n)/gm, "ul>");
};

// Create a new store instance.
export const store = createStore({
  state: {
    lang: "zh-HK",
    isAdmin: false,
    openModel: false,
    editModel: {
      submitFunction: () => {},
      content: "",
    },
  },

  getters: {
    getLang: (state) => {
      return state.lang;
    },
    getCourseContents: (state) => {
      return state.courseContent;
    },
    getViewByRoute: (state) => (route) => {
      return state.views && state.views.find((view) => view.route == route);
    },
    getContacts: (state) => {
      return state.contacts;
    },
    getInterviews: (state) => {
      return state.interviews;
    },
    getMasonries: (state) => {
      return state.masonries;
    },
    isAdmin: (state) => {
      return state.isAdmin;
    },
    modelIsOpen: (state) => {
      return state.openModel;
    },
    getModelDetails: (state) => {
      if (!("type" in state.editModel)) {
        const modelDetails = {
          submitFunction: state.editModel.submitFunction,
          // content: markdown,
          content: parseMarkdown(state.editModel.content),
          type: "text",
        };
        return modelDetails;
      } else if (state.editModel.type == "carousel") {
        return state.editModel;
      }
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
    SET_CONTACTS: (state, contacts) => {
      state.contacts = contacts;
    },
    SET_INTERVIEWS: (state, interviews) => {
      state.interviews = interviews;
    },
    SET_MASONRIES: (state, masonries) => {
      state.masonries = masonries;
    },
    TOGGLE_MODEL_STATE: (state) => {
      state.openModel = !state.openModel;
      if (!state.openModel) {
        const defaultModel = {
          submitFunction: () => {},
          content: "",
        };
        state.editModel = defaultModel;
      }
    },
    SET_EDIT_MODEL: (state, editDetails) => {
      state.editModel = editDetails;
    },
  },
  actions: {
    setLang: ({ commit, state }, lang) => {
      commit("SET_LANG", lang);
      return state.lang;
    },
    localizePage: ({ state }) => {
      state.lang == "zh-CN"
        ? t2s_HTMLConvertHandler.convert()
        : s2t_HTMLConvertHandler.convert();
    },
    getCourseContents: async ({ commit }) => {
      const courseContents = await apollo.query({ query: GET_COURSE_CONTENTS });

      commit("SET_COURSE_CONTENT", courseContents.data.getCourseContents);
    },
    getView: async ({ commit }) => {
      const view = await apollo.query({
        query: GET_VIEW,
      });

      commit("SET_VIEW", view.data.getView);
    },
    getContacts: async ({ commit }) => {
      const contacts = await apollo.query({
        query: GET_CONTACTS,
      });
      commit("SET_CONTACTS", contacts.data.getContacts);
    },
    getInterviews: async ({ commit }) => {
      const interviews = await apollo.query({ query: GET_INTERVIEWS });
      commit("SET_INTERVIEWS", interviews.data.getInterviews);
    },
    getMasonries: async ({ commit }) => {
      const masonries = await apollo.query({ query: GET_MASONRY });
      commit("SET_MASONRIES", masonries.data.getMasonry);
    },
    toggleModel: ({ commit }, editDetails) => {
      commit("SET_EDIT_MODEL", editDetails);
      commit("TOGGLE_MODEL_STATE");
    },
  },
});
