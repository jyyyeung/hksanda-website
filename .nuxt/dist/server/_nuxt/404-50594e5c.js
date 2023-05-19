import { _ as __nuxt_component_0 } from "../server.mjs";
import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<!--[--><h1>你正在尋找的頁面不存在</h1><h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`返回主頁`);
      } else {
        return [
          createTextVNode("返回主頁")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h1><h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { href: "/about-us" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`關於我們`);
      } else {
        return [
          createTextVNode("關於我們")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h1><h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { href: "/assessments" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`章別考核`);
      } else {
        return [
          createTextVNode("章別考核")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h1><h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { href: "/course" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`本會課程`);
      } else {
        return [
          createTextVNode("本會課程")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h1><h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { href: "/gallery" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`查看相簿`);
      } else {
        return [
          createTextVNode("查看相簿")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h1><h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { href: "/contact-us" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`聯絡我們`);
      } else {
        return [
          createTextVNode("聯絡我們")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h1><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _404 as default
};
//# sourceMappingURL=404-50594e5c.js.map
