import { g as gql, a as useMainStore, u as useAsyncQuery, _ as __nuxt_component_0 } from "../server.mjs";
import { withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
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
const GET_CONTACTS = gql`
    query getContactsQuery {
        getContacts {
            id
            field
            icon
            to
            content
        }
    }
`;
gql`
    mutation addContactMutation($contact: ContactInput) {
        addContact(contact: $contact) {
            id
            field
            icon
            to
            content
        }
    }
`;
gql`
    mutation updateContactMutation($contact: ContactInput) {
        updateContact(contact: $contact) {
            id
            to
            icon
            field
            content
        }
    }
`;
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    useMainStore();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(GET_CONTACTS)), __temp = await __temp, __restore(), __temp);
    const getContacts = (_a = data.value) == null ? void 0 : _a.getContacts;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h1>联络我们</h1><div class="row justify-content-center"><div class="contact col-12 fs-4 col-xl-6"><h2>香港極拳道武術協會</h2><dl class="row row-cols-1 row-cols-sm-2"><!--[-->`);
      ssrRenderList(unref(getContacts), (contact) => {
        _push(`<!--[--><dt class="col">${ssrInterpolate(contact.field)}</dt><dd class="col">`);
        if (contact.to) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            href: contact.to,
            target: "_blank"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(contact.content)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(contact.content), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!--[-->${ssrInterpolate(contact.content)}<!--]-->`);
        }
        _push(`</dd><!--]-->`);
      });
      _push(`<!--]--></dl><p>請報名前致電或whatsApp有關開班詳情及確認上課時間</p></div><div class="col-12 col-xl-6 d-none d-md-block" style="${ssrRenderStyle({ "height": "50vh", "margin": "auto" })}"><iframe id="facebook-frame" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen="true" frameborder="0" height="100%" src="https://www.facebook.com/plugins/page.php?href=www.facebook.com/散打自衛術訓練班-172784523322461&amp;tabs=timeline&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=936602643635144&amp;height=1000&amp;width=500" style="${ssrRenderStyle({ "border": "none", "overflow": "hidden" })}" title="facebook-frame" width="100%"></iframe></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-dcef7097.js.map
