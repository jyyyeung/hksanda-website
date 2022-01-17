/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-16 15:40:21
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 09:42:55
 * @Description: vuex store file for project
 * @FilePath: /hksanda-website/src/store/index.js
 */
import { s2t_HTMLConvertHandler, t2s_HTMLConvertHandler } from "@/helpers/i18n";
import { createStore } from "vuex";

// Create a new store instance.
export const store = createStore({
  state: {
    lang: "zh-HK",
  },
  getters: {
    getLang: (state) => {
      return state.lang;
    },
  },
  mutations: {
    SET_LANG: (state, lang) => {
      state.lang = lang;
    },
  },
  actions: {
    setLang: ({ commit, state }, lang) => {
      commit("SET_LANG", lang);
      return state.lang;
    },
    localizePage: ({ state }) => {
      // console.log(lang);
      if (state.lang == "zh-CN") {
        // t2s_HTMLConvertHandler.restore();
        t2s_HTMLConvertHandler.convert();
        console.log("converted zh-cn");
      } else {
        // t2s_HTMLConvertHandler.restore();
        s2t_HTMLConvertHandler.convert();
        console.log("converted");
      }
    },
  },
});
