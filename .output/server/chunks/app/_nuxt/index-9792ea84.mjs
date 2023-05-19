import { a as useMainStore } from '../server.mjs';
import { useSSRContext, ref, resolveComponent, unref, withCtx, createVNode } from 'vue';
import { M as Markdown } from './Markdown-9cb3085a.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import 'ts-invariant';
import 'zen-observable-ts';
import 'throttle-debounce';
import 'ohash';
import 'cookie-es';
import 'optimism';
import '@wry/equality';
import '@wry/trie';
import '@yeger/vue-masonry-wall';
import 'vue-social-chat';
import 'defu';
import 'markdown-it';
import 'moment';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useMainStore();
    const sourceSanda = ref("\u9999\u6E2F\u6975\u62F3\u9053\u6B66\u8853\u5354\u6703\u63A8\u5EE3\u300E\u6563\u6253\u81EA\u885B\u8853\u300F\u662F\u9999\u6E2F\u653F\u5E9C\u8A8D\u53EF\u53CA\u8CC7\u52A9\u7684\u6B66\u8853\u904B\u52D5\u9805\u76EE\u4E4B\u4E00\uFF0C\u5B83\u662F\u904B\u7528\u6B66\u8853\u4E2D\u7684\u8E22\u3001\u6253\u3001\u6454\u62FF\u7B49\u65B9\u6CD5\uFF0C\u9032\u884C\u5F92\u624B\u9632\u8EAB\u81EA\u885B\u7684\u73FE\u4EE3\u9AD4\u80B2\u7AF6\u6280\u3002\u901A\u904E\u4E00\u9023\u4E32\u7684\u5E36\u6C27\u904B\u52D5\u4E4B\u935B\u7DF4\uFF0C\u53EF\u4EE5\u57F9\u990A\u7FD2\u6B66\u8005\u52C7\u6562\u3001\u9811\u5F37\u3001\u4E0D\u6015\u82E6\u3001\u6562\u65BC\u62FC\u640F\u7684\u7CBE\u795E\u3002\u65E2\u80FD\u6E1B\u8F15\u5DE5\u4F5C\u4E0A\u6216\u529F\u8AB2\u6240\u5E36\u4F86\u7684\u58D3\u529B\uFF0C\u9632\u8EAB\u81EA\u4FDD\uFF0C\u4FEE\u8EAB\u5065\u9AD4\u3001\u9069\u5408\u4E0D\u540C\u8EAB\u9AD4\u7D20\u8CEA\u3001\u5E74\u9F61\u5C64\u6B21\u7684\u4EBA\u58EB\u7DF4\u7FD2\u3002 \n\n---\n");
    const sourceFemale = ref("\u5973\u5B50\u81EA\u885B\u8853\u662F\u4E00\u9805\u5C08\u70BA\u5973\u5B50\u800C\u8A2D\u7684\u8A13\u7DF4\u8AB2\u7A0B\uFF0C\u8AB2\u7A0B\u5167\u5BB9\u6703\u4EE5\u5973\u5B50\u9632\u885B\u8853\u4F5C\u4E3B\u8981\u7684\u8A13\u7DF4\uFF0C\u9019\u662F\u4E00\u9805\u904B\u7528\u8E22\u3001\u6253\u3001\u6454\u3001\u62FF\u7B49\u6B66\u8853\u6280\u64CA\u7684\u65B9\u6CD5\uFF0C\u5982\u7576\u9762\u81E8\u53D7\u5236\u65BC\u6B79\u5F92\u6642\uFF0C\u4E26\u5177\u5099\u7C21\u55AE\u3001\u5BE6\u7528\u3001\u6613\u8A18\u3001\u6613\u5B78\u7684\u7279\u9EDE\u3002\u5B83\u662F\u4E00\u7A2E\u4EE5\u5236\u670D\u5C0D\u65B9\u3001\u4FDD\u8B77\u81EA\u5DF1\u70BA\u76EE\u7684\u7684\u5C08\u9580\u6280\u8853\u3002\u6B64\u8AB2\u7A0B\u5C07\u6703\u7531\u6DFA\u5165\u6DF1\u5730\u4ECB\u7D39\u81EA\u885B\u8853\u7684\u57FA\u672C\u6982\u5FF5\u53CA\u539F\u7406\uFF0C\u9069\u5408\u73FE\u4EE3\u5973\u6027\u7684\u81EA\u6211\u9632\u885B\u6280\u8853\u3002 \n\n---\n");
    const masonrySections = [
      {
        title: "\u5168\u6E2F\u6B66\u8853\u6563\u6253\u516C\u958B\u8CFD\u88C1\u5224\u5DE5\u4F5C",
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
        title: "\u9999\u6E2F\u6563\u6253\u4EE3\u8868\u968A\u7E3D\u6559\u7DF4  \u5F35\u7ACB\u529F\u8001\u5E2B",
        images: [
          {
            alt: "\u9999\u6E2F\u6563\u6253\u4EE3\u8868\u968A\u7E3D\u6559\u7DF4  \u5F35\u7ACB\u529F\u8001\u5E2B",
            image: "https://s2.loli.net/2022/01/21/RvdfQuY3ThMlkiX.jpg"
          }
        ]
      },
      {
        title: "2017\u5E74\u9999\u6E2F\u6B66\u8853\u6563\u6253\u516C\u958B\u8CFD\u5404\u88C1\u5224\u5408\u7167",
        images: [
          {
            alt: "2017\u5E74\u9999\u6E2F\u6B66\u8853\u6563\u6253\u516C\u958B\u8CFD\u5404\u88C1\u5224\u5408\u7167",
            image: "https://s2.loli.net/2022/01/21/ub3lMoTt4Ea2xpc.jpg"
          }
        ]
      },
      {
        title: "\u9999\u6E2F\u6B66\u8853\u6563\u6253\u6559\u7DF4\u57F9\u8A13\u73ED",
        images: [
          {
            alt: "\u9999\u6E2F\u6B66\u8853\u6563\u6253\u6559\u7DF4\u57F9\u8A13\u73ED",
            image: "https://s2.loli.net/2022/01/31/yBtrWJxEDUTkco5.png"
          }
        ]
      },
      {
        title: "\u9999\u6E2F\u6B66\u8853\u6563\u6253\u88C1\u5224\u57F9\u8A13\u73ED",
        images: [
          {
            alt: "\u9999\u6E2F\u6B66\u8853\u6563\u6253\u88C1\u5224\u57F9\u8A13\u73ED",
            image: "https://s2.loli.net/2022/01/31/zTJmOCDYP3cpWk5.png"
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_masonry_wall = resolveComponent("masonry-wall");
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-418a32c0><h1 id="title" data-v-418a32c0><span data-v-418a32c0>\u9999\u6E2F\u6975\u62F3\u9053\u6B66\u8853\u5354\u6703</span><br data-v-418a32c0><span data-v-418a32c0>Hong Kong Top Win Do Martial Arts Association</span></h1><div class="container" data-v-418a32c0><div class="row" data-v-418a32c0><div id="homeList" class="list-group col-3 hidden md:flex" data-v-418a32c0><a class="list-group-item list-group-item-action" href="#title" data-v-418a32c0>\u9999\u6E2F\u6975\u62F3\u9053\u6B66\u8853\u5354\u6703</a><a class="list-group-item list-group-item-action" href="#summary" data-v-418a32c0>\u6563\u6253\u81EA\u885B\u8853\u7C21\u4ECB</a><!--[-->`);
      ssrRenderList(masonrySections, (section) => {
        _push(`<a${ssrRenderAttr("href", "#" + section.title)} class="list-group-item list-group-item-action" data-v-418a32c0>${ssrInterpolate(section.title)}</a>`);
      });
      _push(`<!--]--><a class="list-group-item list-group-item-action" href="#images" data-v-418a32c0>\u7167\u7247</a></div><div class="col" data-bs-offset="0" data-bs-spy="scroll" data-bs-target="#homeList" tabindex="0" data-v-418a32c0><h2 id="summary_sanda" data-v-418a32c0> \u6563\u6253\u81EA\u885B\u8853\u7C21\u4ECB </h2>`);
      _push(ssrRenderComponent(unref(Markdown), { source: unref(sourceSanda) }, null, _parent));
      _push(`<h2 id="summary_female_self_protection" data-v-418a32c0> \u5973\u5B50\u81EA\u885B\u8853\u7C21\u4ECB </h2>`);
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
      _push(`<!--]--><h2 id="images" data-v-418a32c0> \u7167\u7247 </h2><div class="container-fluid" data-v-418a32c0></div></div></div></div></section>`);
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

export { index as default };
//# sourceMappingURL=index-9792ea84.mjs.map
