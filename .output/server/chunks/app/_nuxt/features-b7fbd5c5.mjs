import { a as useMainStore } from '../server.mjs';
import { computed, unref, mergeProps, useSSRContext } from 'vue';
import { R as RenderView } from './RenderView-eb6c46ed.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
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
import './Markdown-9cb3085a.mjs';

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

export { _sfc_main as default };
//# sourceMappingURL=features-b7fbd5c5.mjs.map
