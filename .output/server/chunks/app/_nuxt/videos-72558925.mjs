import { ref, withAsyncContext, resolveComponent, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { a as useMainStore, s as storeToRefs, u as useAsyncQuery, G as GET_VIEW_BY_ROUTE } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "videos",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const youtubeList = ref(null);
    const store = useMainStore();
    const { getIsAdmin } = storeToRefs(store);
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(GET_VIEW_BY_ROUTE, { route: "/gallery/videos" })), __temp = await __temp, __restore(), __temp);
    const getViewByRoute = (_a = data.value) == null ? void 0 : _a.getViewByRoute;
    const list = JSON.parse(getViewByRoute.content);
    youtubeList.value = Object.assign([], list);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Chips = resolveComponent("Chips");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}>`);
      if (unref(getIsAdmin)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_Chips, {
          modelValue: unref(youtubeList),
          "onUpdate:modelValue": ($event) => isRef(youtubeList) ? youtubeList.value = $event : null,
          separator: ","
        }, null, _parent));
        _push(`<button class="btn btn-primary" type="button"> \u5132\u5B58 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="row"><!--[-->`);
      ssrRenderList(unref(youtubeList), (url) => {
        _push(`<div class="col-12 col-lg-6 my-2"><div class="ratio ratio-16x9"><iframe${ssrRenderAttr("id", url.substring(url.length - 11))}${ssrRenderAttr("src", `//www.youtube.com/embed/${url.substring(
          url.length - 11
        )}?autoplay=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&cc_load_policy=0&rel=0`)}${ssrRenderAttr("title", url.substring(url.length - 11))} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery/videos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=videos-72558925.mjs.map
