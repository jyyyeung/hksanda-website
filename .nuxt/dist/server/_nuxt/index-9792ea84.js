import { a as useMainStore } from "../server.mjs";
import { ref, resolveComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { M as Markdown } from "./Markdown-9cb3085a.js";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "tslib";
import "ts-invariant";
import "ts-invariant/process/index.js";
import "zen-observable-ts";
import "symbol-observable";
import "throttle-debounce";
import "ohash";
import "cookie-es";
import "optimism";
import "@wry/equality";
import "@wry/trie";
import "@yeger/vue-masonry-wall";
import "vue-social-chat";
import "defu";
import "markdown-it";
import "moment";
const index_vue_vue_type_style_index_0_scoped_418a32c0_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useMainStore();
    const sourceSanda = ref("香港極拳道武術協會推廣『散打自衛術』是香港政府認可及資助的武術運動項目之一，它是運用武術中的踢、打、摔拿等方法，進行徒手防身自衛的現代體育競技。通過一連串的帶氧運動之鍛練，可以培養習武者勇敢、頑強、不怕苦、敢於拼搏的精神。既能減輕工作上或功課所帶來的壓力，防身自保，修身健體、適合不同身體素質、年齡層次的人士練習。 \n\n---\n");
    const sourceFemale = ref("女子自衛術是一項專為女子而設的訓練課程，課程內容會以女子防衛術作主要的訓練，這是一項運用踢、打、摔、拿等武術技擊的方法，如當面臨受制於歹徒時，並具備簡單、實用、易記、易學的特點。它是一種以制服對方、保護自己為目的的專門技術。此課程將會由淺入深地介紹自衛術的基本概念及原理，適合現代女性的自我防衛技術。 \n\n---\n");
    const masonrySections = [
      {
        title: "全港武術散打公開賽裁判工作",
        images: [
          {
            image: "https://s2.loli.net/2022/01/21/UFTvaOVMtQKd6ie.jpg"
          },
          {
            image: "https://s2.loli.net/2022/01/21/wfHAL3zGUcYoEIy.jpg"
          },
          {
            image: "https://s2.loli.net/2022/01/21/A7rkahiRbIWCqfe.jpg"
          },
          {
            image: "https://s2.loli.net/2022/01/31/pzmaH4JN58Uu2hx.png"
          }
        ]
      },
      // TODO: Also in masonry database
      {
        title: "香港散打代表隊總教練  張立功老師",
        images: [
          {
            alt: "香港散打代表隊總教練  張立功老師",
            image: "https://s2.loli.net/2022/01/21/RvdfQuY3ThMlkiX.jpg"
          }
        ]
      },
      {
        title: "2017年香港武術散打公開賽各裁判合照",
        images: [
          {
            alt: "2017年香港武術散打公開賽各裁判合照",
            image: "https://s2.loli.net/2022/01/21/ub3lMoTt4Ea2xpc.jpg"
          }
        ]
      },
      {
        title: "香港武術散打教練培訓班",
        images: [
          {
            alt: "香港武術散打教練培訓班",
            image: "https://s2.loli.net/2022/01/31/yBtrWJxEDUTkco5.png"
          }
        ]
      },
      {
        title: "香港武術散打裁判培訓班",
        images: [
          {
            alt: "香港武術散打裁判培訓班",
            image: "https://s2.loli.net/2022/01/31/zTJmOCDYP3cpWk5.png"
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_masonry_wall = resolveComponent("masonry-wall");
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-418a32c0><h1 id="title" data-v-418a32c0><span data-v-418a32c0>香港極拳道武術協會</span><br data-v-418a32c0><span data-v-418a32c0>Hong Kong Top Win Do Martial Arts Association</span></h1><div class="container" data-v-418a32c0><div class="row" data-v-418a32c0><div id="homeList" class="list-group col-3 hidden md:flex" data-v-418a32c0><a class="list-group-item list-group-item-action" href="#title" data-v-418a32c0>香港極拳道武術協會</a><a class="list-group-item list-group-item-action" href="#summary" data-v-418a32c0>散打自衛術簡介</a><!--[-->`);
      ssrRenderList(masonrySections, (section) => {
        _push(`<a${ssrRenderAttr("href", "#" + section.title)} class="list-group-item list-group-item-action" data-v-418a32c0>${ssrInterpolate(section.title)}</a>`);
      });
      _push(`<!--]--><a class="list-group-item list-group-item-action" href="#images" data-v-418a32c0>照片</a></div><div class="col" data-bs-offset="0" data-bs-spy="scroll" data-bs-target="#homeList" tabindex="0" data-v-418a32c0><h2 id="summary_sanda" data-v-418a32c0> 散打自衛術簡介 </h2>`);
      _push(ssrRenderComponent(unref(Markdown), { source: unref(sourceSanda) }, null, _parent));
      _push(`<h2 id="summary_female_self_protection" data-v-418a32c0> 女子自衛術簡介 </h2>`);
      _push(ssrRenderComponent(unref(Markdown), { source: unref(sourceFemale) }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(masonrySections, (section) => {
        _push(`<div${ssrRenderAttr("id", section.title)} data-v-418a32c0><h2 data-v-418a32c0>${ssrInterpolate(section.title)}</h2>`);
        _push(ssrRenderComponent(_component_masonry_wall, {
          "column-width": 300,
          gap: 16,
          items: section.images,
          "ssr-columns": 1
        }, {
          default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="ratio ratio-4x3" data-v-418a32c0${_scopeId}><img${ssrRenderAttr("alt", item.image)}${ssrRenderAttr("src", item.image)} class="img-fluid" style="${ssrRenderStyle({ "object-fit": "cover" })}" data-v-418a32c0${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "ratio ratio-4x3" }, [
                  createVNode("img", {
                    alt: item.image,
                    src: item.image,
                    class: "img-fluid",
                    style: { "object-fit": "cover" }
                  }, null, 8, ["alt", "src"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><h2 id="images" data-v-418a32c0> 照片 </h2><div class="container-fluid" data-v-418a32c0></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-418a32c0"]]);
export {
  index as default
};
//# sourceMappingURL=index-9792ea84.js.map
