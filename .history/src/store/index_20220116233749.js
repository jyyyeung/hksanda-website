/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-16 15:40:21
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-16 23:29:55
 * @Description:
 * @FilePath: /hksanda-website/src/store/index.js
 */
import { t2s_HTMLConvertHandler } from "@/helpers/i18n";
import { createStore } from "vuex";

// Create a new store instance.
export const store = createStore(
  {
    lang: "zh-HK",
  },
  {
    getLang: (state) => {
      return state.lang;
    },
  },
  {
    SET_LANG: (state, lang) => {
      state.lang = lang;
    },
  },
  {
    setLang: ({ commit, state }, lang) => {
      commit("SET_LANG", lang);
      return state.lang;
    },
    localizePage: ({ state }) => {
      // console.log(lang);
      if (state.lang == "zh-CN") {
        t2s_HTMLConvertHandler.restore();
        t2s_HTMLConvertHandler.convert();
      } else {
        t2s_HTMLConvertHandler.restore();
      }
      console.log("converted");
    },
  }
);
