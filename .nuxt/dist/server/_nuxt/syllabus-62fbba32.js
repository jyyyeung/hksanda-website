import { u as useAsyncQuery, a as useMainStore, s as storeToRefs, b as useMutation } from "../server.mjs";
import { withAsyncContext, ref, resolveComponent, withCtx, unref, openBlock, createBlock, createCommentVNode, createVNode, Fragment, renderList, createTextVNode, toDisplayString, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { G as GET_SYLLABUS, M as MODIFY_SYLLABUS } from "./assessment-syllabus-9af082b9.js";
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
  __name: "syllabus",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(GET_SYLLABUS)), __temp = await __temp, __restore(), __temp);
    const getAssessmentSyllabus = (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.getAssessmentSyllabus;
    const editingSyllabus = ref(-1);
    const syllabusIndex = ref(-1);
    const store = useMainStore();
    const { getIsAdmin } = storeToRefs(store);
    const { toggleModel } = store;
    function edit(index, i) {
      editingSyllabus.value = index;
      syllabusIndex.value = i;
      const modelDetails = {
        content: getAssessmentSyllabus[index].syllabus[i],
        submitFunction: submitChange,
        type: "syllabus"
      };
      toggleModel(modelDetails);
    }
    function create(index) {
      editingSyllabus.value = index;
      syllabusIndex.value = -1;
      const modelDetails = {
        content: "",
        submitFunction: submitChange,
        type: "syllabus"
      };
      toggleModel(modelDetails);
    }
    function submitChange(newContent) {
      const assessment = Object.assign(
        {},
        getAssessmentSyllabus[editingSyllabus.value]
      );
      let syllabus = Object.assign([], assessment.syllabus);
      if (syllabusIndex.value >= 0) {
        syllabus[syllabusIndex.value] = newContent;
      } else {
        syllabus.push(newContent);
      }
      useMutation(MODIFY_SYLLABUS, {
        level: {
          level: assessment.name,
          levelId: assessment.id,
          syllabus
        }
      });
      editingSyllabus.value = -1;
      syllabusIndex.value = -1;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DeferredContent = resolveComponent("DeferredContent");
      const _component_TabView = resolveComponent("TabView");
      const _component_TabPanel = resolveComponent("TabPanel");
      const _component_Button = resolveComponent("Button");
      _push(`<!--[--><h1>武術自衛散打 - 考试动作</h1>`);
      _push(ssrRenderComponent(_component_DeferredContent, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TabView, { scrollable: true }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(getAssessmentSyllabus), (syllabus, index) => {
                    _push3(ssrRenderComponent(_component_TabPanel, {
                      key: syllabus.id,
                      header: syllabus.level
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (unref(getIsAdmin)) {
                            _push4(ssrRenderComponent(_component_Button, {
                              label: "添加項目",
                              onClick: ($event) => create(index)
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<ol class="list-group list-group-flush list-group-numbered"${_scopeId3}><!--[-->`);
                          ssrRenderList(syllabus.syllabus, (item, i) => {
                            _push4(`<li class="list-group-item"${_scopeId3}>${ssrInterpolate(item)} `);
                            if (unref(getIsAdmin)) {
                              _push4(`<button class="btn btn-primary mb-3" type="submit"${_scopeId3}> 編輯 </button>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</li>`);
                          });
                          _push4(`<!--]--></ol>`);
                        } else {
                          return [
                            unref(getIsAdmin) ? (openBlock(), createBlock(_component_Button, {
                              key: 0,
                              label: "添加項目",
                              onClick: ($event) => create(index)
                            }, null, 8, ["onClick"])) : createCommentVNode("", true),
                            createVNode("ol", { class: "list-group list-group-flush list-group-numbered" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(syllabus.syllabus, (item, i) => {
                                return openBlock(), createBlock("li", {
                                  key: item,
                                  class: "list-group-item"
                                }, [
                                  createTextVNode(toDisplayString(item) + " ", 1),
                                  unref(getIsAdmin) ? (openBlock(), createBlock("button", {
                                    key: 0,
                                    class: "btn btn-primary mb-3",
                                    type: "submit",
                                    onClick: ($event) => edit(index, i)
                                  }, " 編輯 ", 8, ["onClick"])) : createCommentVNode("", true)
                                ]);
                              }), 128))
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(getAssessmentSyllabus), (syllabus, index) => {
                      return openBlock(), createBlock(_component_TabPanel, {
                        key: syllabus.id,
                        header: syllabus.level
                      }, {
                        default: withCtx(() => [
                          unref(getIsAdmin) ? (openBlock(), createBlock(_component_Button, {
                            key: 0,
                            label: "添加項目",
                            onClick: ($event) => create(index)
                          }, null, 8, ["onClick"])) : createCommentVNode("", true),
                          createVNode("ol", { class: "list-group list-group-flush list-group-numbered" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(syllabus.syllabus, (item, i) => {
                              return openBlock(), createBlock("li", {
                                key: item,
                                class: "list-group-item"
                              }, [
                                createTextVNode(toDisplayString(item) + " ", 1),
                                unref(getIsAdmin) ? (openBlock(), createBlock("button", {
                                  key: 0,
                                  class: "btn btn-primary mb-3",
                                  type: "submit",
                                  onClick: ($event) => edit(index, i)
                                }, " 編輯 ", 8, ["onClick"])) : createCommentVNode("", true)
                              ]);
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TabView, { scrollable: true }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(getAssessmentSyllabus), (syllabus, index) => {
                    return openBlock(), createBlock(_component_TabPanel, {
                      key: syllabus.id,
                      header: syllabus.level
                    }, {
                      default: withCtx(() => [
                        unref(getIsAdmin) ? (openBlock(), createBlock(_component_Button, {
                          key: 0,
                          label: "添加項目",
                          onClick: ($event) => create(index)
                        }, null, 8, ["onClick"])) : createCommentVNode("", true),
                        createVNode("ol", { class: "list-group list-group-flush list-group-numbered" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(syllabus.syllabus, (item, i) => {
                            return openBlock(), createBlock("li", {
                              key: item,
                              class: "list-group-item"
                            }, [
                              createTextVNode(toDisplayString(item) + " ", 1),
                              unref(getIsAdmin) ? (openBlock(), createBlock("button", {
                                key: 0,
                                class: "btn btn-primary mb-3",
                                type: "submit",
                                onClick: ($event) => edit(index, i)
                              }, " 編輯 ", 8, ["onClick"])) : createCommentVNode("", true)
                            ]);
                          }), 128))
                        ])
                      ]),
                      _: 2
                    }, 1032, ["header"]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/assessments/syllabus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=syllabus-62fbba32.js.map
