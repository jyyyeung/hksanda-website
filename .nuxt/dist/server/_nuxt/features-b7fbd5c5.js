import { a as useMainStore } from "../server.mjs";
import { computed, unref, mergeProps, useSSRContext } from "vue";
import { R as RenderView } from "./RenderView-eb6c46ed.js";
import { ssrRenderComponent } from "vue/server-renderer";
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
import "./Markdown-9cb3085a.js";
const _sfc_main = {
  __name: "features",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useMainStore();
    const { getViewByRoute } = store;
    computed(() => getViewByRoute("/course/features"));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RenderView), mergeProps({ route: "/course/features" }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/course/features.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=features-b7fbd5c5.js.map
