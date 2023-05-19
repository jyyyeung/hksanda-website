import { g as gql$1, a as useMainStore, u as useAsyncQuery, _ as __nuxt_component_0$2 } from '../server.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
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

const GET_CONTACTS = gql$1`
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
gql$1`
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
gql$1`
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
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h1>\u8054\u7EDC\u6211\u4EEC</h1><div class="row justify-content-center"><div class="contact col-12 fs-4 col-xl-6"><h2>\u9999\u6E2F\u6975\u62F3\u9053\u6B66\u8853\u5354\u6703</h2><dl class="row row-cols-1 row-cols-sm-2"><!--[-->`);
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
      _push(`<!--]--></dl><p>\u8ACB\u5831\u540D\u524D\u81F4\u96FB\u6216whatsApp\u6709\u95DC\u958B\u73ED\u8A73\u60C5\u53CA\u78BA\u8A8D\u4E0A\u8AB2\u6642\u9593</p></div><div class="col-12 col-xl-6 d-none d-md-block" style="${ssrRenderStyle({ "height": "50vh", "margin": "auto" })}"><iframe id="facebook-frame" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen="true" frameborder="0" height="100%" src="https://www.facebook.com/plugins/page.php?href=www.facebook.com/\u6563\u6253\u81EA\u885B\u8853\u8A13\u7DF4\u73ED-172784523322461&amp;tabs=timeline&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=936602643635144&amp;height=1000&amp;width=500" style="${ssrRenderStyle({ "border": "none", "overflow": "hidden" })}" title="facebook-frame" width="100%"></iframe></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-dcef7097.mjs.map
