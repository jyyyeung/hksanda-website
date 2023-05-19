import { g as gql, u as useAsyncQuery } from "../server.mjs";
import { withAsyncContext, resolveComponent, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import moment from "moment";
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
gql`
    mutation addInterviewMutation($files: [Upload]) {
        addInterview(interview: interviewInput) {
            company
            id
            publishedDate
            images {
                imageUrl
                alt
            }
            title
            url
        }
    }
`;
const GET_INTERVIEWS = gql`
    query getInterviewsQuery {
        getInterviews {
            id
            company
            title
            images {
                imageUrl
                alt
            }
            url
            publishedDate
        }
    }
`;
const mediaInterviews_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "media-interviews",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(GET_INTERVIEWS)), __temp = await __temp, __restore(), __temp);
    const getInterviews = (_a = data.value) == null ? void 0 : _a.getInterviews;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Timeline = resolveComponent("Timeline");
      const _component_Card = resolveComponent("Card");
      const _component_Button = resolveComponent("Button");
      _push(`<!--[--><h1>傳媒專訪</h1>`);
      _push(ssrRenderComponent(_component_Timeline, {
        value: unref(getInterviews),
        align: "left"
      }, {
        content: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Card, null, {
              title: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.title)} - ${ssrInterpolate(item.company)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.title) + " - " + toDisplayString(item.company), 1)
                  ];
                }
              }),
              subtitle: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(moment)(item.publishedDate).format("L"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(moment)(item.publishedDate).format("L")), 1)
                  ];
                }
              }),
              content: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (item.images.length > 0) {
                    _push3(`<div${_scopeId2}><!--[-->`);
                    ssrRenderList(item.images, (image) => {
                      _push3(`<img${ssrRenderAttr("alt", image.alt)}${ssrRenderAttr("src", image.imageUrl)} class="img-fluid"${_scopeId2}>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (item.content) {
                    _push3(`<p${_scopeId2}>${ssrInterpolate(item.content)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (item.url) {
                    _push3(ssrRenderComponent(_component_Button, {
                      class: "p-button-text",
                      label: "Read more"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    item.images.length > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.images, (image) => {
                        return openBlock(), createBlock("img", {
                          key: image.imageUrl,
                          alt: image.alt,
                          src: image.imageUrl,
                          class: "img-fluid"
                        }, null, 8, ["alt", "src"]);
                      }), 128))
                    ])) : createCommentVNode("", true),
                    item.content ? (openBlock(), createBlock("p", { key: 1 }, toDisplayString(item.content), 1)) : createCommentVNode("", true),
                    item.url ? (openBlock(), createBlock(_component_Button, {
                      key: 2,
                      class: "p-button-text",
                      label: "Read more"
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Card, null, {
                title: withCtx(() => [
                  createTextVNode(toDisplayString(item.title) + " - " + toDisplayString(item.company), 1)
                ]),
                subtitle: withCtx(() => [
                  createTextVNode(toDisplayString(unref(moment)(item.publishedDate).format("L")), 1)
                ]),
                content: withCtx(() => [
                  item.images.length > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(item.images, (image) => {
                      return openBlock(), createBlock("img", {
                        key: image.imageUrl,
                        alt: image.alt,
                        src: image.imageUrl,
                        class: "img-fluid"
                      }, null, 8, ["alt", "src"]);
                    }), 128))
                  ])) : createCommentVNode("", true),
                  item.content ? (openBlock(), createBlock("p", { key: 1 }, toDisplayString(item.content), 1)) : createCommentVNode("", true),
                  item.url ? (openBlock(), createBlock(_component_Button, {
                    key: 2,
                    class: "p-button-text",
                    label: "Read more"
                  })) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1024)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/media-interviews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=media-interviews-c32c8c79.js.map
