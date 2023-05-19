import { e as __nuxt_component_0 } from "../server.mjs";
import { computed, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import MarkdownIt from "markdown-it";
const _sfc_main = {
  __name: "Markdown",
  __ssrInlineRender: true,
  props: {
    source: { type: String, default: "" }
  },
  setup(__props) {
    const props = __props;
    computed(() => {
      const md = new MarkdownIt({
        breaks: true,
        xhtmlOut: true,
        html: true
      });
      return md.render(props.source);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Markdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Markdown = _sfc_main;
export {
  Markdown as M
};
//# sourceMappingURL=Markdown-9cb3085a.js.map
