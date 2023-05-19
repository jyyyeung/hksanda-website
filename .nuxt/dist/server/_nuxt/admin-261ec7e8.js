import { ref, mergeProps, unref, useSSRContext } from "vue";
import { a as useMainStore, s as storeToRefs } from "../server.mjs";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import "bcryptjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
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
const _sfc_main = {
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const username = ref("");
    const password = ref("");
    const store = useMainStore();
    storeToRefs(store);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ ref: "form" }, _attrs))}><div class="form-group mb-3"><label class="form-label" for="usernameInput" html-for="usernameInput">用户<input id="usernameInput"${ssrRenderAttr("value", unref(username))} class="form-control" type="text"></label></div><div class="form-group mb-3"><label class="form-label" for="passwordInput" html-for="passwordInput">密码 <input id="passwordInput"${ssrRenderAttr("value", unref(password))} class="form-control" type="password"></label></div><button class="btn btn-primary" type="submit"> 登入 </button></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=admin-261ec7e8.js.map
