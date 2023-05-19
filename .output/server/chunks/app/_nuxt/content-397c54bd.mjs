import { useSSRContext, ref, reactive, withAsyncContext, resolveComponent, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList } from 'vue';
import { g as gql$1, a as useMainStore, s as storeToRefs, u as useAsyncQuery, b as useMutation } from '../server.mjs';
import { M as Markdown } from './Markdown-9cb3085a.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const GET_COURSE_CONTENTS = gql$1`
    query getCourseContentsQuery {
        getCourseContents {
            name
            content
            id
        }
    }
`;
const UPDATE_COURSE_CONTENT = gql$1`
    mutation updateCourseContentMutation($course: CourseContentInput) {
        updateCourseContent(course: $course) {
            id
            name
            content
        }
    }
`;
gql$1`
    mutation addCourseContentMutation($course: CourseContentInput) {
        addCourseContent(course: $course) {
            name
            content
        }
    }
`;
const activeIndex = 0;
const footer = `

---
\u5982\u5E0C\u671B\u81EA\u884C\u7EC4\u73ED\u6216\u62A5\u540D\u79C1\u4EBA\u73ED\uFF0C\u6B22\u8FCE\u6D4F\u89C8[*\u79C1\u4EBA\u53CA\u7EC4\u73ED\u8BFE\u7A0B*](/course/session)
\u5982\u6709\u4EFB\u4F55\u7591\u95EE\uFF0C\u6B22\u8FCE\u8FDB\u884C\u54A8\u8BE2`;
const _sfc_main = {
  __name: "content",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    ref(false);
    reactive({
      name: "",
      contents: ""
    });
    const store = useMainStore();
    const { getIsAdmin } = storeToRefs(store);
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(GET_COURSE_CONTENTS)), __temp = await __temp, __restore(), __temp);
    const getCourseContents = (_a = data.value) == null ? void 0 : _a.getCourseContents;
    console.log(getCourseContents);
    const { toggleModel } = store;
    function editCourse(course) {
      console.log(course);
      useMutation(UPDATE_COURSE_CONTENT, {
        course
      });
    }
    function edit(course) {
      const modelDetails = {
        content: course,
        type: "course",
        submitFunction: editCourse
      };
      console.log(modelDetails);
      toggleModel(modelDetails);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TabView = resolveComponent("TabView");
      const _component_TabPanel = resolveComponent("TabPanel");
      _push(`<!--[-->`);
      if (unref(getIsAdmin)) {
        _push(`<button class="btn btn-success" type="submit" data-v-7e47e658> \u6DFB\u52A0\u8AB2\u5802\u4ECB\u7D39 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_TabView, { "active-index": activeIndex }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(getCourseContents), (courseDetail) => {
              _push2(ssrRenderComponent(_component_TabPanel, {
                key: courseDetail.name,
                header: courseDetail.name
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Markdown), {
                      source: "# " + courseDetail.name
                    }, null, _parent3, _scopeId2));
                    if (unref(getIsAdmin)) {
                      _push3(`<button class="btn btn-primary" type="submit" data-v-7e47e658${_scopeId2}> \u7DE8\u8F2F ${ssrInterpolate(courseDetail.name)}</button>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(unref(Markdown), {
                      source: courseDetail.content
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(Markdown), { source: footer }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Markdown), {
                        source: "# " + courseDetail.name
                      }, null, 8, ["source"]),
                      unref(getIsAdmin) ? (openBlock(), createBlock("button", {
                        key: 0,
                        class: "btn btn-primary",
                        type: "submit",
                        onClick: ($event) => edit(courseDetail)
                      }, " \u7DE8\u8F2F " + toDisplayString(courseDetail.name), 9, ["onClick"])) : createCommentVNode("", true),
                      createVNode(unref(Markdown), {
                        source: courseDetail.content
                      }, null, 8, ["source"]),
                      createVNode(unref(Markdown), { source: footer })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(getCourseContents), (courseDetail) => {
                return openBlock(), createBlock(_component_TabPanel, {
                  key: courseDetail.name,
                  header: courseDetail.name
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Markdown), {
                      source: "# " + courseDetail.name
                    }, null, 8, ["source"]),
                    unref(getIsAdmin) ? (openBlock(), createBlock("button", {
                      key: 0,
                      class: "btn btn-primary",
                      type: "submit",
                      onClick: ($event) => edit(courseDetail)
                    }, " \u7DE8\u8F2F " + toDisplayString(courseDetail.name), 9, ["onClick"])) : createCommentVNode("", true),
                    createVNode(unref(Markdown), {
                      source: courseDetail.content
                    }, null, 8, ["source"]),
                    createVNode(unref(Markdown), { source: footer })
                  ]),
                  _: 2
                }, 1032, ["header"]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/course/content.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const content = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7e47e658"]]);

export { content as default };
//# sourceMappingURL=content-397c54bd.mjs.map
