import { u as useAsyncQuery, a as useMainStore } from "../server.mjs";
import { withAsyncContext, computed, resolveComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { R as RenderView } from "./RenderView-eb6c46ed.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { G as GET_SYLLABUS } from "./assessment-syllabus-9af082b9.js";
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
  __name: "hk-badge",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(GET_SYLLABUS)), __temp = await __temp, __restore(), __temp);
    const getAssessmentSyllabus = (_a = data.value) == null ? void 0 : _a.getAssessmentSyllabus;
    useMainStore();
    const syllabuses = computed(() => {
      console.log(getAssessmentSyllabus);
      const syllabuses2 = getAssessmentSyllabus ? getAssessmentSyllabus.map((level) => ({
        syllabus: level.syllabus.filter(
          (syllabus) => syllabus.includes("規定動作")
        ),
        level: level.level
      })) : [];
      console.log(syllabuses2);
      return syllabuses2;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TabView = resolveComponent("TabView");
      const _component_TabPanel = resolveComponent("TabPanel");
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "hk-badge" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(RenderView), { route: "/assessments/hk-badge" }, null, _parent));
      _push(ssrRenderComponent(_component_TabView, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(syllabuses), (syllabus) => {
              _push2(ssrRenderComponent(_component_TabPanel, {
                key: syllabus.id,
                header: syllabus.level
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<ol class="list-group list-group-flush list-group-numbered"${_scopeId2}><!--[-->`);
                    ssrRenderList(syllabus.syllabus, (item) => {
                      _push3(`<li class="list-group-item"${_scopeId2}>${ssrInterpolate(item)}</li>`);
                    });
                    _push3(`<!--]--></ol>`);
                  } else {
                    return [
                      createVNode("ol", { class: "list-group list-group-flush list-group-numbered" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(syllabus.syllabus, (item) => {
                          return openBlock(), createBlock("li", {
                            key: item,
                            class: "list-group-item"
                          }, toDisplayString(item), 1);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(syllabuses), (syllabus) => {
                return openBlock(), createBlock(_component_TabPanel, {
                  key: syllabus.id,
                  header: syllabus.level
                }, {
                  default: withCtx(() => [
                    createVNode("ol", { class: "list-group list-group-flush list-group-numbered" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(syllabus.syllabus, (item) => {
                        return openBlock(), createBlock("li", {
                          key: item,
                          class: "list-group-item"
                        }, toDisplayString(item), 1);
                      }), 128))
                    ])
                  ]),
                  _: 2
                }, 1032, ["header"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/assessments/hk-badge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=hk-badge-3d464f1f.js.map
