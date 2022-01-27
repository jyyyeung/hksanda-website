import { s2t_HTMLConvertHandler, t2s_HTMLConvertHandler } from "@/helpers/i18n";

import { createStore } from "vuex";
import { apolloProvider } from "@/apollo/index.js";
import { GET_VIEW, UPDATE_VIEW } from "@/apollo/view";
import { GET_MASONRY } from "@/apollo/masonry";

import MarkdownIt from "markdown-it";
const md = new MarkdownIt().set({
  html: true,
  linkify: true,
  typographer: true,
  xhtmlOut: true
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
    editModel: {}
  },

  getters: {
    getLang: (state) => {
      return state.lang;
    },
    getViewByRoute: (state) => (route) => {
      return state.views && state.views.find((view) => view.route == route);
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
      if ("type" in state.editModel) {
        let modelDetails = Object.assign({}, state.editModel);
        switch (state.editModel.type) {
          case "carousel": {
            modelDetails.content = parseMarkdown(modelDetails.content);
            break;
          }
          case "course": {
            modelDetails.content = {
              name: modelDetails.content.name,
              content: parseMarkdown(modelDetails.content.content)
            };
            break;
          }
          default:
            break;
        }
        return modelDetails;
      } else {
        return state.editModel;
      }
    }
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
          content: ""
        };
        state.editModel = defaultModel;
      }
    },
    SET_EDIT_MODEL: (state, editDetails) => {
      state.editModel = Object.assign({}, editDetails);
    }
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
    getView: async ({ commit }) => {
      const view = await apollo.query({
        query: GET_VIEW
      });

      commit("SET_VIEW", view.data.getView);
    },
    getMasonries: async ({ commit }) => {
      const masonries = await apollo.query({ query: GET_MASONRY });
      commit("SET_MASONRIES", masonries.data.getMasonry);
    },
    toggleModel: ({ commit }, editDetails) => {
      commit("SET_EDIT_MODEL", editDetails);
      commit("TOGGLE_MODEL_STATE");
    },
    updateView: async (_, newView) => {
      await apollo.mutate({
        mutation: UPDATE_VIEW,
        variables: { details: newView }
      });
    }
  }
});
