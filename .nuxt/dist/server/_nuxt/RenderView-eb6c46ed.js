import { a as useMainStore, u as useAsyncQuery, G as GET_VIEW_BY_ROUTE, s as storeToRefs } from "../server.mjs";
import { withAsyncContext, unref, mergeProps, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { M as Markdown } from "./Markdown-9cb3085a.js";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "RenderView",
  __ssrInlineRender: true,
  props: {
    route: String
  },
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const props = __props;
    const store = useMainStore();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(GET_VIEW_BY_ROUTE, { route: props.route })), __temp = await __temp, __restore(), __temp);
    const view = (_a = data.value) == null ? void 0 : _a.getViewByRoute;
    console.log("getView", (_b = data.value) == null ? void 0 : _b.getViewByRoute);
    const { getIsAdmin } = storeToRefs(store);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c, _d;
      if (((_a2 = unref(view)) == null ? void 0 : _a2.title) != null) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid" }, _attrs))}><h1>${ssrInterpolate((_b2 = unref(view)) == null ? void 0 : _b2.title)}</h1>`);
        if (((_c = unref(view)) == null ? void 0 : _c.content) != null) {
          _push(ssrRenderComponent(unref(Markdown), {
            source: (_d = unref(view)) == null ? void 0 : _d.content
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(getIsAdmin)) {
          _push(`<button class="btn btn-primary mb-3" type="submit"> 編輯 </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RenderView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RenderView = _sfc_main;
export {
  RenderView as R
};
//# sourceMappingURL=RenderView-eb6c46ed.js.map
