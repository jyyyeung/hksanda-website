import { g as gql$1, a as useMainStore, s as storeToRefs, u as useAsyncQuery, f as GET_MASONRY_BY_ROUTE, e as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, withAsyncContext, resolveComponent, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

gql$1`
    query GetCarouselByIdQuery($id: ID) {
        getCarouselById(id: $id) {
            id
            route
            order
            images {
                imageUrl
                alt
                title
                paragraph
            }
        }
    }
`;
const GET_CAROUSEL_BY_ROUTE = gql$1`
    query GetCarouselByRouteQuery($route: String) {
        getCarouselByRoute(route: $route) {
            id
            route
            order
            images {
                imageUrl
                alt
                title
                paragraph
            }
        }
    }
`;
gql$1`
    mutation UpdateCarouselMutation($carousel: CarouselInput) {
        updateCarousel(carousel: $carousel) {
            id
            route
            order
            images {
                imageUrl
                paragraph
                title
                alt
            }
        }
    }
`;
const _sfc_main = {
  __name: "training",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const store = useMainStore();
    storeToRefs(store);
    const getMasonaryByRouteResponse = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(GET_MASONRY_BY_ROUTE, { route: "/gallery/training" })), __temp = await __temp, __restore(), __temp);
    const getMasonryByRoute = (_a = getMasonaryByRouteResponse.data.value) == null ? void 0 : _a.getMasonryByRoute;
    const getCarouselByRouteResponse = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(GET_CAROUSEL_BY_ROUTE, { route: "/gallery/training" })), __temp = await __temp, __restore(), __temp);
    (_b = getCarouselByRouteResponse.data.value) == null ? void 0 : _b.getCarouselByRoute;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      const _component_masonry_wall = resolveComponent("masonry-wall");
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-24b41d9b>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(getMasonryByRoute), (masonry) => {
        _push(`<div data-v-24b41d9b><h1 data-v-24b41d9b>${ssrInterpolate(masonry.title)}</h1>`);
        _push(ssrRenderComponent(_component_masonry_wall, {
          items: masonry.images,
          "ssr-columns": 1,
          "column-width": 300,
          gap: 16
        }, {
          default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="img-fluid"${ssrRenderAttr("src", item.imageUrl)}${ssrRenderAttr("alt", item.alt)} data-v-24b41d9b${_scopeId}>`);
              if (item.title || item.paragraph) {
                _push2(`<div class="Content" data-v-24b41d9b${_scopeId}><h5 class="text-ellipsis-1l" data-v-24b41d9b${_scopeId}>${ssrInterpolate(item.title)}</h5><p class="text-ellipsis-2l" data-v-24b41d9b${_scopeId}>${ssrInterpolate(item.paragraph)}</p></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("img", {
                  class: "img-fluid",
                  src: item.imageUrl,
                  alt: item.alt
                }, null, 8, ["src", "alt"]),
                item.title || item.paragraph ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "Content"
                }, [
                  createVNode("h5", { class: "text-ellipsis-1l" }, toDisplayString(item.title), 1),
                  createVNode("p", { class: "text-ellipsis-2l" }, toDisplayString(item.paragraph), 1)
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery/training.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const training = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-24b41d9b"]]);

export { training as default };
//# sourceMappingURL=training-df488b89.mjs.map
