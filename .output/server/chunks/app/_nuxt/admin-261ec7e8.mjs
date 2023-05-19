import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { a as useMainStore, s as storeToRefs } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const username = ref("");
    const password = ref("");
    const store = useMainStore();
    storeToRefs(store);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ ref: "form" }, _attrs))}><div class="form-group mb-3"><label class="form-label" for="usernameInput" html-for="usernameInput">\u7528\u6237<input id="usernameInput"${ssrRenderAttr("value", unref(username))} class="form-control" type="text"></label></div><div class="form-group mb-3"><label class="form-label" for="passwordInput" html-for="passwordInput">\u5BC6\u7801 <input id="passwordInput"${ssrRenderAttr("value", unref(password))} class="form-control" type="password"></label></div><button class="btn btn-primary" type="submit"> \u767B\u5165 </button></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=admin-261ec7e8.mjs.map
