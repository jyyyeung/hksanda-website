import { _ as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, withCtx, createTextVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<!--[--><h1>\u4F60\u6B63\u5728\u5C0B\u627E\u7684\u9801\u9762\u4E0D\u5B58\u5728</h1><h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u8FD4\u56DE\u4E3B\u9801`);
      } else {
        return [
          createTextVNode("\u8FD4\u56DE\u4E3B\u9801")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h1><h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { href: "/about-us" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u95DC\u65BC\u6211\u5011`);
      } else {
        return [
          createTextVNode("\u95DC\u65BC\u6211\u5011")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h1><h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { href: "/assessments" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u7AE0\u5225\u8003\u6838`);
      } else {
        return [
          createTextVNode("\u7AE0\u5225\u8003\u6838")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h1><h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { href: "/course" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u672C\u6703\u8AB2\u7A0B`);
      } else {
        return [
          createTextVNode("\u672C\u6703\u8AB2\u7A0B")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h1><h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { href: "/gallery" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u67E5\u770B\u76F8\u7C3F`);
      } else {
        return [
          createTextVNode("\u67E5\u770B\u76F8\u7C3F")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h1><h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { href: "/contact-us" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u806F\u7D61\u6211\u5011`);
      } else {
        return [
          createTextVNode("\u806F\u7D61\u6211\u5011")
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

export { _404 as default };
//# sourceMappingURL=404-50594e5c.mjs.map
