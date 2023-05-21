import { toRaw, isRef, isReactive, toRef, version as version$1, getCurrentInstance, ref, onBeforeUnmount, useSSRContext, defineComponent, h, Suspense, nextTick, Transition, computed, provide, reactive, createElementBlock, inject, watchEffect, watch, onServerPrefetch, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, createApp, markRaw, effectScope, onUnmounted, onErrorCaptured, resolveDynamicComponent, getCurrentScope, onScopeDispose, shallowRef, isReadonly, defineAsyncComponent, toRefs, openBlock, resolveDirective, withDirectives, renderSlot, normalizeClass, createBlock, createCommentVNode, createElementVNode, normalizeProps, guardReactiveProps, Fragment as Fragment$1, renderList, vShow, Teleport, createSlots, TransitionGroup, createStaticVNode } from 'vue';
import { $fetch } from 'ofetch';
import { createHooks } from 'hookable';
import { getContext, executeAsync } from 'unctx';
import destr from 'destr';
import { klona } from 'klona';
import { RouterView, createMemoryHistory, createRouter } from 'vue-router';
import { createError as createError$1, appendHeader, sanitizeStatusCode } from 'h3';
import { hasProtocol as hasProtocol$1, parseURL, parseQuery, encodeParam, withTrailingSlash as withTrailingSlash$1, withoutTrailingSlash as withoutTrailingSlash$1, joinURL as joinURL$1, withBase as withBase$1, hasTrailingSlash as hasTrailingSlash$1, stringifyParsedURL, withLeadingSlash, encodePath } from 'ufo';
import { defu } from 'defu';
import { invariant as invariant$1, InvariantError } from 'ts-invariant';
import { Observable } from 'zen-observable-ts';
import { throttle, debounce } from 'throttle-debounce';
import { hash as hash$1, isEqual } from 'ohash';
import { parse as parse$1, serialize } from 'cookie-es';
import { wrap as wrap$1, dep } from 'optimism';
import { equal } from '@wry/equality';
import { Trie } from '@wry/trie';
import MasonryWall from '@yeger/vue-masonry-wall';
import VueSocialChat, { SocialChat } from 'vue-social-chat';
import { ssrRenderAttrs, ssrRenderList, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSuspense, ssrRenderVNode } from 'vue/server-renderer';
import MarkdownIt from 'markdown-it';
import moment from 'moment';
import { a as useRuntimeConfig$1 } from '../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function maybe$2(thunk) {
  try { return thunk() } catch (_) {}
}

var safeGlobal = (
  maybe$2(function() { return globalThis }) ||
  maybe$2(function() { return window }) ||
  maybe$2(function() { return self }) ||
  maybe$2(function() { return global }) ||
  // We don't expect the Function constructor ever to be invoked at runtime, as
  // long as at least one of globalThis, window, self, or global is defined, so
  // we are under no obligation to make it easy for static analysis tools to
  // detect syntactic usage of the Function constructor. If you think you can
  // improve your static analysis to detect this obfuscation, think again. This
  // is an arms race you cannot win, at least not in JavaScript.
  maybe$2(function() { return maybe$2.constructor("return this")() })
);

var needToRemove = false;

function install() {
  if (safeGlobal &&
      !maybe$2(function() { return "production" }) &&
      !maybe$2(function() { return process })) {
    Object.defineProperty(safeGlobal, "process", {
      value: {
        env: {
          // This default needs to be "production" instead of "development", to
          // avoid the problem https://github.com/graphql/graphql-js/pull/2894
          // will eventually solve, once merged and released.
          NODE_ENV: "production",
        },
      },
      // Let anyone else change globalThis.process as they see fit, but hide it from
      // Object.keys(global) enumeration.
      configurable: true,
      enumerable: false,
      writable: true,
    });
    needToRemove = true;
  }
}

// Call install() at least once, when this module is imported.
install();

function remove$1() {
  if (needToRemove) {
    delete safeGlobal.process;
    needToRemove = false;
  }
}

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.4.3";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtAppCtx.callAsync(nuxtApp, () => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext._payloadReducers = {};
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      return target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin2, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin2 of plugins2) {
    await applyPlugin(nuxtApp, plugin2);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = [];
  for (const plugin2 of _plugins2) {
    if (typeof plugin2 !== "function") {
      continue;
    }
    let _plugin = plugin2;
    if (plugin2.length > 1) {
      _plugin = (nuxtApp) => plugin2(nuxtApp, nuxtApp.provide);
    }
    plugins2.push(_plugin);
  }
  plugins2.sort((a, b) => {
    var _a, _b;
    return (((_a = a.meta) == null ? void 0 : _a.order) || orderMap.default) - (((_b = b.meta) == null ? void 0 : _b.order) || orderMap.default);
  });
  return plugins2;
}
const orderMap = {
  pre: -20,
  default: 0,
  post: 20
};
function defineNuxtPlugin(plugin2, meta) {
  var _a;
  if (typeof plugin2 === "function") {
    return /* @__PURE__ */ defineNuxtPlugin({ setup: plugin2 }, meta);
  }
  const wrapper = (nuxtApp) => {
    if (plugin2.hooks) {
      nuxtApp.hooks.addHooks(plugin2.hooks);
    }
    if (plugin2.setup) {
      return plugin2.setup(nuxtApp);
    }
  };
  wrapper.meta = {
    name: (meta == null ? void 0 : meta.name) || plugin2.name || ((_a = plugin2.setup) == null ? void 0 : _a.name),
    order: (meta == null ? void 0 : meta.order) || plugin2.order || orderMap[plugin2.enforce || "default"] || orderMap.default
  };
  wrapper[NuxtPluginIndicator] = true;
  return wrapper;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      {
        throw new Error("[nuxt] instance unavailable");
      }
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const isVue2 = false;
/*!
  * pinia v2.0.36
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin2) => _p.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin2);
      } else {
        _p.push(plugin2);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign: assign$2 } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!("production" !== "production") )) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign$2(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign$2({ actions: {} }, options);
  const $subscribeOptions = {
    deep: true
    // flush: 'post',
  };
  let isListening;
  let isSyncListening;
  let subscriptions = markRaw([]);
  let actionSubscriptions = markRaw([]);
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!("production" !== "production") )) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign$2($state, newState);
    });
  } : (
    /* istanbul ignore next */
    noop
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError2(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError: onError2
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign$2({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(partialStore);
  pinia._s.set($id, store);
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup());
  });
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  {
    assign$2(store, setupStore);
    assign$2(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign$2($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign$2(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const currentInstance = getCurrentInstance();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (pinia) || currentInstance && inject(piniaSymbol, null);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
function storeToRefs(store) {
  {
    store = toRaw(store);
    const refs = {};
    for (const key in store) {
      const value = store[key];
      if (isRef(value) || isReactive(value)) {
        refs[key] = // ---
        toRef(store, key);
      }
    }
    return refs;
  }
}
function asArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
const SelfClosingTags = ["meta", "link", "base"];
const TagsWithInnerContent = ["title", "script", "style", "noscript"];
const HasElementTags = [
  "base",
  "meta",
  "link",
  "style",
  "script",
  "noscript"
];
const ValidHeadTags = [
  "title",
  "titleTemplate",
  "templateParams",
  "base",
  "htmlAttrs",
  "bodyAttrs",
  "meta",
  "link",
  "style",
  "script",
  "noscript"
];
const UniqueTags = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"];
const TagConfigKeys = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent"];
function defineHeadPlugin$1(plugin2) {
  return plugin2;
}
function hashCode$1(s) {
  let h2 = 9;
  for (let i = 0; i < s.length; )
    h2 = Math.imul(h2 ^ s.charCodeAt(i++), 9 ** 9);
  return ((h2 ^ h2 >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase();
}
function hashTag(tag) {
  return hashCode$1(`${tag.tag}:${tag.textContent || tag.innerHTML || ""}:${Object.entries(tag.props).map(([key, value]) => `${key}:${String(value)}`).join(",")}`);
}
function computeHashes(hashes) {
  let h2 = 9;
  for (const s of hashes) {
    for (let i = 0; i < s.length; )
      h2 = Math.imul(h2 ^ s.charCodeAt(i++), 9 ** 9);
  }
  return ((h2 ^ h2 >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase();
}
function tagDedupeKey(tag, fn) {
  const { props, tag: tagName } = tag;
  if (UniqueTags.includes(tagName))
    return tagName;
  if (tagName === "link" && props.rel === "canonical")
    return "canonical";
  if (props.charset)
    return "charset";
  const name = ["id"];
  if (tagName === "meta")
    name.push(...["name", "property", "http-equiv"]);
  for (const n of name) {
    if (typeof props[n] !== "undefined") {
      const val = String(props[n]);
      if (fn && !fn(val))
        return false;
      return `${tagName}:${n}:${val}`;
    }
  }
  return false;
}
function resolveTitleTemplate$1(template, title) {
  if (template == null)
    return title || null;
  if (typeof template === "function")
    return template(title);
  return template;
}
const TAG_WEIGHTS = {
  // aliases
  critical: 2,
  high: 9,
  low: 12,
  // tags
  base: -1,
  title: 1,
  meta: 10
};
function tagWeight(tag) {
  if (typeof tag.tagPriority === "number")
    return tag.tagPriority;
  if (tag.tag === "meta") {
    if (tag.props.charset)
      return -2;
    if (tag.props["http-equiv"] === "content-security-policy")
      return 0;
  }
  const key = tag.tagPriority || tag.tag;
  if (key in TAG_WEIGHTS) {
    return TAG_WEIGHTS[key];
  }
  return 10;
}
const SortModifiers = [{ prefix: "before:", offset: -1 }, { prefix: "after:", offset: 1 }];
function SortTagsPlugin() {
  return defineHeadPlugin$1({
    hooks: {
      "tags:resolve": (ctx) => {
        const tagPositionForKey = (key) => {
          var _a;
          return (_a = ctx.tags.find((tag) => tag._d === key)) == null ? void 0 : _a._p;
        };
        for (const { prefix, offset } of SortModifiers) {
          for (const tag of ctx.tags.filter((tag2) => typeof tag2.tagPriority === "string" && tag2.tagPriority.startsWith(prefix))) {
            const position = tagPositionForKey(
              tag.tagPriority.replace(prefix, "")
            );
            if (typeof position !== "undefined")
              tag._p = position + offset;
          }
        }
        ctx.tags.sort((a, b) => a._p - b._p).sort((a, b) => tagWeight(a) - tagWeight(b));
      }
    }
  });
}
function TitleTemplatePlugin() {
  return defineHeadPlugin$1({
    hooks: {
      "tags:resolve": (ctx) => {
        const { tags } = ctx;
        let titleTemplateIdx = tags.findIndex((i) => i.tag === "titleTemplate");
        const titleIdx = tags.findIndex((i) => i.tag === "title");
        if (titleIdx !== -1 && titleTemplateIdx !== -1) {
          const newTitle = resolveTitleTemplate$1(
            tags[titleTemplateIdx].textContent,
            tags[titleIdx].textContent
          );
          if (newTitle !== null) {
            tags[titleIdx].textContent = newTitle || tags[titleIdx].textContent;
          } else {
            delete tags[titleIdx];
          }
        } else if (titleTemplateIdx !== -1) {
          const newTitle = resolveTitleTemplate$1(
            tags[titleTemplateIdx].textContent
          );
          if (newTitle !== null) {
            tags[titleTemplateIdx].textContent = newTitle;
            tags[titleTemplateIdx].tag = "title";
            titleTemplateIdx = -1;
          }
        }
        if (titleTemplateIdx !== -1) {
          delete tags[titleTemplateIdx];
        }
        ctx.tags = tags.filter(Boolean);
      }
    }
  });
}
function DeprecatedTagAttrPlugin() {
  return defineHeadPlugin$1({
    hooks: {
      "tag:normalise": function({ tag }) {
        if (typeof tag.props.body !== "undefined") {
          tag.tagPosition = "bodyClose";
          delete tag.props.body;
        }
      }
    }
  });
}
const DupeableTags = ["link", "style", "script", "noscript"];
function ProvideTagHashPlugin() {
  return defineHeadPlugin$1({
    hooks: {
      "tag:normalise": ({ tag, resolvedOptions }) => {
        if (resolvedOptions.experimentalHashHydration === true) {
          tag._h = hashTag(tag);
        }
        if (tag.key && DupeableTags.includes(tag.tag)) {
          tag._h = hashCode$1(tag.key);
          tag.props[`data-h-${tag._h}`] = "";
        }
      }
    }
  });
}
const ValidEventTags = ["script", "link", "bodyAttrs"];
function EventHandlersPlugin() {
  const stripEventHandlers = (mode, tag) => {
    const props = {};
    const eventHandlers = {};
    Object.entries(tag.props).forEach(([key, value]) => {
      if (key.startsWith("on") && typeof value === "function")
        eventHandlers[key] = value;
      else
        props[key] = value;
    });
    let delayedSrc;
    if (mode === "dom" && tag.tag === "script" && typeof props.src === "string" && typeof eventHandlers.onload !== "undefined") {
      delayedSrc = props.src;
      delete props.src;
    }
    return { props, eventHandlers, delayedSrc };
  };
  return defineHeadPlugin$1({
    hooks: {
      "ssr:render": function(ctx) {
        ctx.tags = ctx.tags.map((tag) => {
          if (!ValidEventTags.includes(tag.tag))
            return tag;
          if (!Object.entries(tag.props).find(([key, value]) => key.startsWith("on") && typeof value === "function"))
            return tag;
          tag.props = stripEventHandlers("ssr", tag).props;
          return tag;
        });
      },
      "dom:beforeRenderTag": function(ctx) {
        if (!ValidEventTags.includes(ctx.tag.tag))
          return;
        if (!Object.entries(ctx.tag.props).find(([key, value]) => key.startsWith("on") && typeof value === "function"))
          return;
        const { props, eventHandlers, delayedSrc } = stripEventHandlers("dom", ctx.tag);
        if (!Object.keys(eventHandlers).length)
          return;
        ctx.tag.props = props;
        ctx.tag._eventHandlers = eventHandlers;
        ctx.tag._delayedSrc = delayedSrc;
      },
      "dom:renderTag": function(ctx) {
        const $el = ctx.$el;
        if (!ctx.tag._eventHandlers || !$el)
          return;
        const $eventListenerTarget = ctx.tag.tag === "bodyAttrs" && false ? window : $el;
        Object.entries(ctx.tag._eventHandlers).forEach(([k, value]) => {
          const sdeKey = `${ctx.tag._d || ctx.tag._p}:${k}`;
          const eventName = k.slice(2).toLowerCase();
          const eventDedupeKey = `data-h-${eventName}`;
          ctx.markSideEffect(sdeKey, () => {
          });
          if ($el.hasAttribute(eventDedupeKey))
            return;
          const handler2 = value;
          $el.setAttribute(eventDedupeKey, "");
          $eventListenerTarget.addEventListener(eventName, handler2);
          if (ctx.entry) {
            ctx.entry._sde[sdeKey] = () => {
              $eventListenerTarget.removeEventListener(eventName, handler2);
              $el.removeAttribute(eventDedupeKey);
            };
          }
        });
        if (ctx.tag._delayedSrc) {
          $el.setAttribute("src", ctx.tag._delayedSrc);
        }
      }
    }
  });
}
const UsesMergeStrategy = ["templateParams", "htmlAttrs", "bodyAttrs"];
function DedupesTagsPlugin() {
  return defineHeadPlugin$1({
    hooks: {
      "tag:normalise": function({ tag }) {
        ["hid", "vmid", "key"].forEach((key) => {
          if (tag.props[key]) {
            tag.key = tag.props[key];
            delete tag.props[key];
          }
        });
        const generatedKey = tagDedupeKey(tag);
        const dedupe = generatedKey || (tag.key ? `${tag.tag}:${tag.key}` : false);
        if (dedupe)
          tag._d = dedupe;
      },
      "tags:resolve": function(ctx) {
        const deduping = {};
        ctx.tags.forEach((tag) => {
          const dedupeKey = (tag.key ? `${tag.tag}:${tag.key}` : tag._d) || tag._p;
          const dupedTag = deduping[dedupeKey];
          if (dupedTag) {
            let strategy = tag == null ? void 0 : tag.tagDuplicateStrategy;
            if (!strategy && UsesMergeStrategy.includes(tag.tag))
              strategy = "merge";
            if (strategy === "merge") {
              const oldProps = dupedTag.props;
              ["class", "style"].forEach((key) => {
                if (tag.props[key] && oldProps[key]) {
                  if (key === "style" && !oldProps[key].endsWith(";"))
                    oldProps[key] += ";";
                  tag.props[key] = `${oldProps[key]} ${tag.props[key]}`;
                }
              });
              deduping[dedupeKey].props = {
                ...oldProps,
                ...tag.props
              };
              return;
            } else if (tag._e === dupedTag._e) {
              dupedTag._duped = dupedTag._duped || [];
              tag._d = `${dupedTag._d}:${dupedTag._duped.length + 1}`;
              dupedTag._duped.push(tag);
              return;
            }
          }
          const propCount = Object.keys(tag.props).length + (tag.innerHTML ? 1 : 0) + (tag.textContent ? 1 : 0);
          if (HasElementTags.includes(tag.tag) && propCount === 0) {
            delete deduping[dedupeKey];
            return;
          }
          deduping[dedupeKey] = tag;
        });
        const newTags = [];
        Object.values(deduping).forEach((tag) => {
          const dupes = tag._duped;
          delete tag._duped;
          newTags.push(tag);
          if (dupes)
            newTags.push(...dupes);
        });
        ctx.tags = newTags;
      }
    }
  });
}
function processTemplateParams(s, config2) {
  function sub(token) {
    if (["s", "pageTitle"].includes(token))
      return config2.pageTitle;
    let val;
    if (token.includes(".")) {
      val = token.split(".").reduce((acc, key) => acc ? acc[key] || void 0 : void 0, config2);
    } else {
      val = config2[token];
    }
    return typeof val !== "undefined" ? val || "" : false;
  }
  let decoded = s;
  try {
    decoded = decodeURI(s);
  } catch {
  }
  const tokens = (decoded.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse();
  tokens.forEach((token) => {
    const re = sub(token.slice(1));
    if (typeof re === "string") {
      s = s.replaceAll(new RegExp(`\\${token}(\\W|$)`, "g"), `${re}$1`).trim();
    }
  });
  if (config2.separator) {
    if (s.endsWith(config2.separator))
      s = s.slice(0, -config2.separator.length).trim();
    if (s.startsWith(config2.separator))
      s = s.slice(config2.separator.length).trim();
    s = s.replace(new RegExp(`\\${config2.separator}\\s*\\${config2.separator}`, "g"), config2.separator);
  }
  return s;
}
function TemplateParamsPlugin() {
  return defineHeadPlugin$1({
    hooks: {
      "tags:resolve": (ctx) => {
        var _a;
        const { tags } = ctx;
        const title = (_a = tags.find((tag) => tag.tag === "title")) == null ? void 0 : _a.textContent;
        const idx = tags.findIndex((tag) => tag.tag === "templateParams");
        const params = idx !== -1 ? tags[idx].props : {};
        params.pageTitle = params.pageTitle || title || "";
        for (const tag of tags) {
          if (["titleTemplate", "title"].includes(tag.tag) && typeof tag.textContent === "string") {
            tag.textContent = processTemplateParams(tag.textContent, params);
          } else if (tag.tag === "meta" && typeof tag.props.content === "string") {
            tag.props.content = processTemplateParams(tag.props.content, params);
          } else if (tag.tag === "link" && typeof tag.props.href === "string") {
            tag.props.href = processTemplateParams(tag.props.href, params);
          } else if (tag.tag === "script" && ["application/json", "application/ld+json"].includes(tag.props.type) && typeof tag.innerHTML === "string") {
            try {
              tag.innerHTML = JSON.stringify(JSON.parse(tag.innerHTML), (key, val) => {
                if (typeof val === "string")
                  return processTemplateParams(val, params);
                return val;
              });
            } catch {
            }
          }
        }
        ctx.tags = tags.filter((tag) => tag.tag !== "templateParams");
      }
    }
  });
}
let activeHead;
function setActiveHead(head) {
  return activeHead = head;
}
function getActiveHead() {
  return activeHead;
}
async function normaliseTag(tagName, input) {
  const tag = { tag: tagName, props: {} };
  if (tagName === "templateParams") {
    tag.props = input;
    return tag;
  }
  if (["title", "titleTemplate"].includes(tagName)) {
    tag.textContent = input instanceof Promise ? await input : input;
    return tag;
  }
  if (typeof input === "string") {
    if (!["script", "noscript", "style"].includes(tagName))
      return false;
    if (tagName === "script" && (/^(https?:)?\/\//.test(input) || input.startsWith("/")))
      tag.props.src = input;
    else
      tag.innerHTML = input;
    return tag;
  }
  tag.props = await normaliseProps(tagName, { ...input });
  if (tag.props.children) {
    tag.props.innerHTML = tag.props.children;
  }
  delete tag.props.children;
  Object.keys(tag.props).filter((k) => TagConfigKeys.includes(k)).forEach((k) => {
    if (!["innerHTML", "textContent"].includes(k) || TagsWithInnerContent.includes(tag.tag)) {
      tag[k] = tag.props[k];
    }
    delete tag.props[k];
  });
  ["innerHTML", "textContent"].forEach((k) => {
    if (tag.tag === "script" && typeof tag[k] === "string" && ["application/ld+json", "application/json"].includes(tag.props.type)) {
      try {
        tag[k] = JSON.parse(tag[k]);
      } catch (e) {
        tag[k] = "";
      }
    }
    if (typeof tag[k] === "object")
      tag[k] = JSON.stringify(tag[k]);
  });
  if (tag.props.class)
    tag.props.class = normaliseClassProp(tag.props.class);
  if (tag.props.content && Array.isArray(tag.props.content))
    return tag.props.content.map((v) => ({ ...tag, props: { ...tag.props, content: v } }));
  return tag;
}
function normaliseClassProp(v) {
  if (typeof v === "object" && !Array.isArray(v)) {
    v = Object.keys(v).filter((k) => v[k]);
  }
  return (Array.isArray(v) ? v.join(" ") : v).split(" ").filter((c) => c.trim()).filter(Boolean).join(" ");
}
async function normaliseProps(tagName, props) {
  for (const k of Object.keys(props)) {
    const isDataKey = k.startsWith("data-");
    if (props[k] instanceof Promise) {
      props[k] = await props[k];
    }
    if (String(props[k]) === "true") {
      props[k] = isDataKey ? "true" : "";
    } else if (String(props[k]) === "false") {
      if (isDataKey) {
        props[k] = "false";
      } else {
        delete props[k];
      }
    }
  }
  return props;
}
const TagEntityBits = 10;
async function normaliseEntryTags(e) {
  const tagPromises = [];
  Object.entries(e.resolvedInput).filter(([k, v]) => typeof v !== "undefined" && ValidHeadTags.includes(k)).forEach(([k, value]) => {
    const v = asArray$1(value);
    tagPromises.push(...v.map((props) => normaliseTag(k, props)).flat());
  });
  return (await Promise.all(tagPromises)).flat().filter(Boolean).map((t, i) => {
    t._e = e._i;
    t._p = (e._i << TagEntityBits) + i;
    return t;
  });
}
function CorePlugins() {
  return [
    // dedupe needs to come first
    DedupesTagsPlugin(),
    SortTagsPlugin(),
    TemplateParamsPlugin(),
    TitleTemplatePlugin(),
    ProvideTagHashPlugin(),
    EventHandlersPlugin(),
    DeprecatedTagAttrPlugin()
  ];
}
function createServerHead$1(options = {}) {
  const head = createHeadCore(options);
  setActiveHead(head);
  return head;
}
function createHeadCore(options = {}) {
  let entries = [];
  let _sde = {};
  let _eid = 0;
  const hooks = createHooks();
  if (options == null ? void 0 : options.hooks)
    hooks.addHooks(options.hooks);
  options.plugins = [
    ...CorePlugins(),
    ...(options == null ? void 0 : options.plugins) || []
  ];
  options.plugins.forEach((p) => p.hooks && hooks.addHooks(p.hooks));
  options.document = options.document || void 0;
  const updated = () => hooks.callHook("entries:updated", head);
  const head = {
    resolvedOptions: options,
    headEntries() {
      return entries;
    },
    get hooks() {
      return hooks;
    },
    use(plugin2) {
      if (plugin2.hooks)
        hooks.addHooks(plugin2.hooks);
    },
    push(input, options2) {
      const activeEntry = {
        _i: _eid++,
        input,
        _sde: {}
      };
      if (options2 == null ? void 0 : options2.mode)
        activeEntry._m = options2 == null ? void 0 : options2.mode;
      if (options2 == null ? void 0 : options2.transform) {
        activeEntry._t = options2 == null ? void 0 : options2.transform;
      }
      entries.push(activeEntry);
      updated();
      return {
        dispose() {
          entries = entries.filter((e) => {
            if (e._i !== activeEntry._i)
              return true;
            _sde = { ..._sde, ...e._sde || {} };
            e._sde = {};
            updated();
            return false;
          });
        },
        // a patch is the same as creating a new entry, just a nice DX
        patch(input2) {
          entries = entries.map((e) => {
            if (e._i === activeEntry._i) {
              activeEntry.input = e.input = input2;
              updated();
            }
            return e;
          });
        }
      };
    },
    async resolveTags() {
      const resolveCtx = { tags: [], entries: [...entries] };
      await hooks.callHook("entries:resolve", resolveCtx);
      for (const entry2 of resolveCtx.entries) {
        const transformer = entry2._t || ((i) => i);
        entry2.resolvedInput = transformer(entry2.resolvedInput || entry2.input);
        if (entry2.resolvedInput) {
          for (const tag of await normaliseEntryTags(entry2)) {
            const tagCtx = { tag, entry: entry2, resolvedOptions: head.resolvedOptions };
            await hooks.callHook("tag:normalise", tagCtx);
            resolveCtx.tags.push(tagCtx.tag);
          }
        }
      }
      await hooks.callHook("tags:resolve", resolveCtx);
      return resolveCtx.tags;
    },
    _popSideEffectQueue() {
      const sde = { ..._sde };
      _sde = {};
      return sde;
    },
    _elMap: {}
  };
  head.hooks.callHook("init", head);
  return head;
}
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
const Vue3 = version$1.startsWith("3");
const headSymbol = "usehead";
function injectHead() {
  return getCurrentInstance() && inject(headSymbol) || getActiveHead();
}
function vueInstall(head) {
  const plugin2 = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin2.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1({
    ...options,
    plugins: [
      VueReactiveUseHeadPlugin(),
      ...(options == null ? void 0 : options.plugins) || []
    ]
  });
  head.install = vueInstall(head);
  return head;
}
function VueReactiveUseHeadPlugin() {
  return defineHeadPlugin$1({
    hooks: {
      "entries:resolve": function(ctx) {
        for (const entry2 of ctx.entries)
          entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
      }
    }
  });
}
function clientUseHead(input, options = {}) {
  const head = injectHead();
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
function serverUseHead(input, options = {}) {
  const head = injectHead();
  return head.push(input, options);
}
function useHead(input, options = {}) {
  var _a;
  const head = injectHead();
  if (head) {
    const isBrowser = !!((_a = head.resolvedOptions) == null ? void 0 : _a.document);
    if (options.mode === "server" && isBrowser || options.mode === "client" && !isBrowser)
      return;
    return isBrowser ? clientUseHead(input, options) : serverUseHead(input, options);
  }
}
function useServerHead(input, options = {}) {
  return serverUseHead(input, { ...options, mode: "server" });
}
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol$1(toPath, { acceptRelative: true });
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL$1(useRuntimeConfig().app.baseURL, fullPath);
      async function redirect() {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return inMiddleware ? (
          /* abort route navigation */
          false
        ) : void 0;
      }
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect() : void 0);
        return to;
      }
      return redirect();
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
const getDefault = () => null;
function useAsyncData(...args) {
  var _a;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler2, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler2 !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  const nuxt = useNuxtApp();
  const getCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  const hasCachedData = () => getCachedData() !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref(getCachedData() ?? ((_a = options.default) == null ? void 0 : _a.call(options)) ?? null),
      pending: ref(!hasCachedData()),
      error: toRef(nuxt.payload._errors, key)
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial && hasCachedData()) {
      return getCachedData();
    }
    asyncData.pending.value = true;
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler2(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      var _a2;
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref(((_a2 = options.default) == null ? void 0 : _a2.call(options)) ?? null);
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", () => promise);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useRequestHeaders(include) {
  var _a;
  const headers = ((_a = useNuxtApp().ssrContext) == null ? void 0 : _a.event.node.req.headers) ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.map((key) => key.toLowerCase()).filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref(cookies[name] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    const writeAndUnhook = () => {
      unhook();
      return writeFinalCookieValue();
    };
    nuxtApp.hooks.hookOnce("app:error", writeAndUnhook);
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a;
  {
    return parse$1(((_a = useRequestEvent()) == null ? void 0 : _a.node.req.headers.cookie) || "", opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return serialize(name, value, { ...opts, maxAge: -1 });
  }
  return serialize(name, value, opts);
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
const appHead = { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }], "link": [{ "rel": "icon", "type": "image/x-icon", "href": "/favicon.ico" }], "style": [], "script": [], "noscript": [], "titleTemplate": "%s %separator %siteName" };
const appPageTransition = false;
const appKeepalive = false;
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const resolveTrailingSlashBehavior = (to, resolve) => {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    const normalizeTrailingSlash = options.trailingSlash === "append" ? withTrailingSlash$1 : withoutTrailingSlash$1;
    if (typeof to === "string") {
      return normalizeTrailingSlash(to, true);
    }
    const path = "path" in to ? to.path : resolve(to).path;
    return {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: normalizeTrailingSlash(path, true)
    };
  };
  return /* @__PURE__ */ defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        const path = props.to || props.href || "";
        return resolveTrailingSlashBehavior(path, router.resolve);
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol$1(to.value, { acceptRelative: true });
      });
      const prefetched = ref(false);
      const el = void 0;
      const elRef = void 0;
      return () => {
        var _a, _b;
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const href = typeof to.value === "object" ? ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0;
              }
              const url = parseURL(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                // stub properties for compat with vue-router
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_b = slots.default) == null ? void 0 : _b.call(slots));
      };
    }
  });
}
const __nuxt_component_0$3 = /* @__PURE__ */ defineNuxtLink({ componentName: "NuxtLink" });
function isObject(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults2, namespace = ".", merger) {
  if (!isObject(defaults2)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults2);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject(value) && isObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defuFn = createDefu((object, key, currentValue) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});
const inlineConfig = {};
const __appConfig = /* @__PURE__ */ defuFn(inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig);
  }
  return nuxtApp._appConfig;
}
const plugin = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
function propsToString(props) {
  const handledAttributes = [];
  for (const [key, value] of Object.entries(props)) {
    if (value === false || value == null)
      continue;
    let attribute = key;
    if (value !== true)
      attribute += `="${String(value).replace(/"/g, "&quot;")}"`;
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? ` ${handledAttributes.join(" ")}` : "";
}
function encodeInnerHtml(str) {
  return str.replace(/[&<>"'/]/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#x27;";
      case "/":
        return "&#x2F;";
      default:
        return char;
    }
  });
}
function tagToString(tag) {
  const attrs = propsToString(tag.props);
  const openTag = `<${tag.tag}${attrs}>`;
  if (!TagsWithInnerContent.includes(tag.tag))
    return SelfClosingTags.includes(tag.tag) ? openTag : `${openTag}</${tag.tag}>`;
  let content = String(tag.innerHTML || "");
  if (tag.textContent)
    content = encodeInnerHtml(String(tag.textContent));
  return SelfClosingTags.includes(tag.tag) ? openTag : `${openTag}${content}</${tag.tag}>`;
}
function ssrRenderTags(tags) {
  const schema = { htmlAttrs: {}, bodyAttrs: {}, tags: { head: [], bodyClose: [], bodyOpen: [] } };
  for (const tag of tags) {
    if (tag.tag === "htmlAttrs" || tag.tag === "bodyAttrs") {
      schema[tag.tag] = { ...schema[tag.tag], ...tag.props };
      continue;
    }
    schema.tags[tag.tagPosition || "head"].push(tagToString(tag));
  }
  return {
    headTags: schema.tags.head.join("\n"),
    bodyTags: schema.tags.bodyClose.join("\n"),
    bodyTagsOpen: schema.tags.bodyOpen.join("\n"),
    htmlAttrs: propsToString(schema.htmlAttrs),
    bodyAttrs: propsToString(schema.bodyAttrs)
  };
}
async function renderSSRHead(head) {
  const beforeRenderCtx = { shouldRender: true };
  await head.hooks.callHook("ssr:beforeRender", beforeRenderCtx);
  if (!beforeRenderCtx.shouldRender) {
    return {
      headTags: "",
      bodyTags: "",
      bodyTagsOpen: "",
      htmlAttrs: "",
      bodyAttrs: ""
    };
  }
  const ctx = { tags: await head.resolveTags() };
  if (head.resolvedOptions.experimentalHashHydration) {
    ctx.tags.push({
      tag: "meta",
      props: {
        name: "unhead:ssr",
        content: computeHashes(
          ctx.tags.filter((t) => {
            const entry2 = head.headEntries().find((entry22) => entry22._i === t._e);
            return (entry2 == null ? void 0 : entry2._m) !== "server";
          }).map((tag) => tag._h)
        )
      }
    });
  }
  await head.hooks.callHook("ssr:render", ctx);
  const html = ssrRenderTags(ctx.tags);
  const renderCtx = { tags: ctx.tags, html };
  await head.hooks.callHook("ssr:rendered", renderCtx);
  return renderCtx.html;
}
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  setup(nuxtApp) {
    const createHead = createServerHead;
    const head = createHead();
    head.push(appHead);
    nuxtApp.vueApp.use(head);
    {
      nuxtApp.ssrContext.renderMeta = async () => {
        const meta = await renderSSRHead(head);
        return {
          ...meta,
          bodyScriptsPrepend: meta.bodyTagsOpen,
          // resolves naming difference with NuxtMeta and Unhead
          bodyScripts: meta.bodyTags
        };
      };
    }
  }
});
const _routes = [
  {
    name: "404",
    path: "/404",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/404-72c90ae3.mjs').then((m) => m.default || m)
  },
  {
    path: "/about",
    children: [
      {
        name: "about-bylaws",
        path: "bylaws",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => import('./_nuxt/bylaws-47b54dba.mjs').then((m) => m.default || m)
      },
      {
        name: "about",
        path: "",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => import('./_nuxt/index-30b6a2cd.mjs').then((m) => m.default || m)
      },
      {
        name: "about-media-interviews",
        path: "media-interviews",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => import('./_nuxt/media-interviews-322d24a5.mjs').then((m) => m.default || m)
      },
      {
        name: "about-our-team",
        path: "our-team",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => import('./_nuxt/our-team-6db7498a.mjs').then((m) => m.default || m)
      }
    ],
    name: void 0,
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/about-248af4fe.mjs').then((m) => m.default || m)
  },
  {
    name: "admin",
    path: "/admin",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/admin-d3608139.mjs').then((m) => m.default || m)
  },
  {
    name: "assessments",
    path: "/assessments",
    children: [
      {
        name: "assessments-hk-badge",
        path: "hk-badge",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => import('./_nuxt/hk-badge-7f8664b0.mjs').then((m) => m.default || m)
      },
      {
        name: "assessments-syllabus",
        path: "syllabus",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => import('./_nuxt/syllabus-00d0252a.mjs').then((m) => m.default || m)
      }
    ],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/assessments-8c85e6e2.mjs').then((m) => m.default || m)
  },
  {
    name: "contact",
    path: "/contact",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/contact-91aef1ba.mjs').then((m) => m.default || m)
  },
  {
    name: "course",
    path: "/course",
    children: [
      {
        name: "course-class",
        path: "class",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => import('./_nuxt/class-47866d78.mjs').then((m) => m.default || m)
      },
      {
        name: "course-content",
        path: "content",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => import('./_nuxt/content-afca86d3.mjs').then((m) => m.default || m)
      },
      {
        name: "course-cooperation",
        path: "cooperation",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => import('./_nuxt/cooperation-77ac8e9f.mjs').then((m) => m.default || m)
      },
      {
        name: "course-features",
        path: "features",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => import('./_nuxt/features-526de2a9.mjs').then((m) => m.default || m)
      },
      {
        name: "course-session",
        path: "session",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => import('./_nuxt/session-d1ae8875.mjs').then((m) => m.default || m)
      }
    ],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/course-d7a57c83.mjs').then((m) => m.default || m)
  },
  {
    name: "gallery",
    path: "/gallery",
    children: [
      {
        name: "gallery-training",
        path: "training",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => import('./_nuxt/training-2f191bff.mjs').then((m) => m.default || m)
      },
      {
        name: "gallery-videos",
        path: "videos",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => import('./_nuxt/videos-a2670ae5.mjs').then((m) => m.default || m)
      }
    ],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/gallery-3115b4c3.mjs').then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-78ba2070.mjs').then((m) => m.default || m)
  }
];
const routes = [
  {
    path: "/",
    name: "主頁",
    // component: HomePage,
    component: () => import('./_nuxt/index-78ba2070.mjs').then((r) => r.default || r),
    meta: {
      icon: "pi pi-home",
      carousel: "61ee6bfb9c3de1b608293d4c"
    }
  },
  {
    path: "/about",
    name: "關於我們",
    //component: () =>
    //import([>* webpackChunkName: "about" <] "@/views/About/AboutPage.vue"),
    // component: AboutPage,
    component: () => import('./_nuxt/about-248af4fe.mjs').then((r) => r.default || r),
    redirect: "/about/",
    children: [
      {
        path: "",
        name: "關於我們",
        component: () => import('./_nuxt/index-30b6a2cd.mjs').then((r) => r.default || r)
        //component: () =>
        //import(
        //* webpackChunkName: "about" "@/views/About/AboutUsView.vue"
        //)
        // component: AboutUsView,
      },
      {
        path: "our-team",
        name: "專業教練團隊",
        component: () => import('./_nuxt/our-team-6db7498a.mjs').then((r) => r.default || r)
        //component: () =>
        //import(
        //[> webpackChunkName: "about" <] "@/views/About/OurTeamView.vue"
        //)
        //component: () => import("../views/About/OurTeamView.vue")
        // component: OurTeamView,
      },
      {
        path: "bylaws",
        name: "本會章程",
        component: () => import('./_nuxt/bylaws-47b54dba.mjs').then((r) => r.default || r)
        // component: () =>
        //     import(
        //         /* webpackChunkName: "about" */ "@/views/About/BylawsView.vue"
        //     ),
      },
      {
        path: "media-interviews",
        name: "媒體採訪",
        component: () => import('./_nuxt/media-interviews-322d24a5.mjs').then((r) => r.default || r)
        // component: () =>
        //     import(
        //         /* webpackChunkName: "about" */ "@/views/About/MediaInterviewsView.vue"
        //     ),
      }
    ]
  },
  {
    path: "/assessments",
    name: "晋升考试制度",
    component: () => import('./_nuxt/assessments-8c85e6e2.mjs').then((r) => r.default || r),
    // component: () =>
    //     import(
    //         /* webpackChunkName: "assessments" */ "@/views/Assessments/AssessmentsPage.vue"
    //     ),
    redirect: "/assessments/syllabus",
    children: [
      {
        path: "syllabus",
        name: "武術自衛散打考试动作",
        component: () => import('./_nuxt/syllabus-00d0252a.mjs').then((r) => r.default || r)
        // component: () =>
        //     import(
        //         /* webpackChunkName: "assessments" */ "@/views/Assessments/SyllabusView.vue"
        //     ),
      },
      {
        path: "hk-badge",
        name: "武術散打章別全港公開試",
        component: () => import('./_nuxt/hk-badge-7f8664b0.mjs').then((r) => r.default || r)
        // component: () =>
        //     import(
        //         /* webpackChunkName: "assessments" */ "@/views/Assessments/HKBadgeView.vue"
        //     ),
      }
    ]
  },
  {
    path: "/course",
    name: "本会課程",
    component: () => import('./_nuxt/course-d7a57c83.mjs').then((r) => r.default || r),
    // component: () =>
    //     import(
    //         /* webpackChunkName: "course" */ "@/views/Course/CoursePage.vue"
    //     ),
    redirect: "/course/content",
    children: [
      {
        path: "features",
        name: "課程特色",
        component: () => import('./_nuxt/features-526de2a9.mjs').then((r) => r.default || r)
        // component: () =>
        //     import(
        //         /* webpackChunkName: "course" */ "@/views/Course/LessonFeaturesView.vue"
        //     ),
      },
      {
        path: "content",
        name: "學習內容",
        component: () => import('./_nuxt/content-afca86d3.mjs').then((r) => r.default || r)
        // component: () =>
        //     import(
        //         /* webpackChunkName: "course" */ "@/views/Course/CourseContentView.vue"
        //     ),
      },
      {
        path: "class",
        name: "常規課程",
        component: () => import('./_nuxt/class-47866d78.mjs').then((r) => r.default || r)
        // component: () =>
        //     import(
        //         /* webpackChunkName: "course" */ "@/views/Course/ClassInfoView.vue"
        //     ),
      },
      {
        path: "session",
        name: "私人及組班課程",
        component: () => import('./_nuxt/session-d1ae8875.mjs').then((r) => r.default || r)
        // component: () =>
        //     import(
        //         /* webpackChunkName: "course" */ "@/views/Course/CourseSessionView.vue"
        //     ),
      },
      {
        name: "機構及學校合辦課程",
        path: "cooperation",
        component: () => import('./_nuxt/cooperation-77ac8e9f.mjs').then((r) => r.default || r)
        // component: () =>
        //     import(
        //         /* webpackChunkName: "course" */ "@/views/Course/CooperationCourseView.vue"
        //     ),
      }
    ]
  },
  {
    path: "/gallery",
    name: "本會相簿",
    component: () => import('./_nuxt/gallery-3115b4c3.mjs').then((r) => r.default || r),
    // component: () =>
    //     import(
    //         /* webpackChunkName: "gallery" */ "@/views/Gallery/GalleryPage.vue"
    //     ),
    redirect: "/gallery/training",
    children: [
      {
        path: "training",
        name: "本會訓練相簿",
        component: () => import('./_nuxt/training-2f191bff.mjs').then((r) => r.default || r)
        // component: () =>
        //     import(
        //         /* webpackChunkName: "gallery" */ "@/views/Gallery/TrainingGalleryView.vue"
        //     ),
      },
      {
        path: "videos",
        name: "本會訓練影片",
        component: () => import('./_nuxt/videos-a2670ae5.mjs').then((r) => r.default || r)
        // component: () =>
        //     import(
        //         /* webpackChunkName: "gallery" */ "@/views/Gallery/VideoGalleryView.vue"
        //     ),
      }
    ]
  },
  {
    path: "/contact",
    name: "聯絡我們",
    component: () => import('./_nuxt/contact-91aef1ba.mjs').then((r) => r.default || r)
    // component: () =>
    //     import(
    //         /* webpackChunkName: "contact" */ "@/views/ContactsPage.vue"
    //     ),
  },
  {
    path: "/admin",
    name: "Admin Panel",
    component: () => import('./_nuxt/admin-d3608139.mjs').then((r) => r.default || r),
    // component: () =>
    //     import(
    //         /* webpackChunkName: "admin" */ "@/views/Admin/AdminPage.vue"
    //     ),
    meta: {
      sitemap: { ignoreRoute: true },
      hidden: true
    }
  },
  {
    path: "/:pathMatch(.*)*",
    //path: "/:catchAll(.*)",
    name: "NotFound",
    beforeEnter: (_, __2, next) => {
      next("/404");
    },
    meta: {
      hidden: true,
      sitemap: { ignoreRoute: true }
    }
  },
  {
    path: "/404",
    name: "404",
    component: () => import('./_nuxt/404-72c90ae3.mjs').then((r) => r.default || r),
    // component: () => import("@/pages/404.vue"),
    meta: {
      hidden: true,
      sitemap: { ignoreRoute: true }
    }
  }
];
const routerOptions0 = {
  routes: (_routes2) => routes
};
const routerOptions1 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(a, b) {
  const samePageComponent = a.matched[0] === b.matched[0];
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(a.params) !== JSON.stringify(b.params)) {
    return true;
  }
  return false;
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions1,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useNuxtApp();
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const globalMiddleware = [
  validate
];
const namedMiddleware = {};
const router_jmwsqit4Rs = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b;
    let __temp, __restore;
    let routerBase = useRuntimeConfig().app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes2 = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      history,
      routes: routes2
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      route[key] = computed(() => _route.value[key]);
    }
    nuxtApp._route = reactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => callWithNuxt(nuxtApp, showError, [error2])), await __temp, __restore();
    }
    const initialLayout = useState("_layout");
    router.beforeEach(async (to, from) => {
      var _a2;
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout.value && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout.value;
      }
      nuxtApp._processingMiddleware = true;
      const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
      for (const component of to.matched) {
        const componentMiddleware = component.meta.middleware;
        if (!componentMiddleware) {
          continue;
        }
        if (Array.isArray(componentMiddleware)) {
          for (const entry2 of componentMiddleware) {
            middlewareEntries.add(entry2);
          }
        } else {
          middlewareEntries.add(componentMiddleware);
        }
      }
      for (const entry2 of middlewareEntries) {
        const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_a2 = namedMiddleware[entry2]) == null ? void 0 : _a2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
        if (!middleware) {
          throw new Error(`Unknown route middleware: '${entry2}'.`);
        }
        const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
        {
          if (result === false || result instanceof Error) {
            const error2 = result || createError$1({
              statusCode: 404,
              statusMessage: `Page Not Found: ${initialURL}`
            });
            await callWithNuxt(nuxtApp, showError, [error2]);
            return false;
          }
        }
        if (result || result === false) {
          return result;
        }
      }
    });
    router.onError(() => {
      delete nuxtApp._processingMiddleware;
    });
    router.afterEach(async (to, _from, failure) => {
      delete nuxtApp._processingMiddleware;
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0) {
        await callWithNuxt(nuxtApp, showError, [createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`
        })]);
      } else if (to.redirectedFrom) {
        await callWithNuxt(nuxtApp, navigateTo, [to.fullPath || "/"]);
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #$4982
          force: true
        });
      } catch (error2) {
        await callWithNuxt(nuxtApp, showError, [error2]);
      }
    });
    return { provide: { router } };
  }
}, 1);
function defineHeadPlugin(plugin2) {
  return plugin2;
}
function resolveTitleTemplate(template, title) {
  if (template == null)
    return title || null;
  if (typeof template === "function")
    return template(title);
  return template;
}
function InferSeoMetaPlugin(options = {}) {
  return defineHeadPlugin({
    hooks: {
      entries: {
        resolve({ entries }) {
          var _a;
          let titleTemplate = null;
          for (const entry2 of entries) {
            const inputKey = entry2.resolvedInput ? "resolvedInput" : "input";
            const input = entry2[inputKey];
            if (typeof input.titleTemplate !== "undefined")
              titleTemplate = input.titleTemplate;
          }
          for (const entry2 of entries) {
            const inputKey = entry2.resolvedInput ? "resolvedInput" : "input";
            const input = entry2[inputKey];
            const resolvedMeta = input.meta || [];
            titleTemplate = resolveTitleTemplate(titleTemplate, input.title);
            const title = input.title;
            const description = (_a = resolvedMeta.find((meta) => meta.name === "description")) == null ? void 0 : _a.content;
            const hasOgTitle = !!resolvedMeta.find((meta) => meta.property === "og:title");
            const hasOgImage = !!resolvedMeta.find((meta) => meta.property === "og:image");
            const hasTwitterCard = !!resolvedMeta.find((meta) => meta.property === "twitter:card");
            const hasOgDescription = !!resolvedMeta.find((meta) => meta.property === "og:description");
            entry2[inputKey].meta = input.meta || [];
            if (titleTemplate && !hasOgTitle) {
              let newOgTitle = (options == null ? void 0 : options.ogTitle) || titleTemplate;
              if (typeof newOgTitle === "function")
                newOgTitle = newOgTitle(title);
              if (newOgTitle) {
                entry2[inputKey].meta.push({
                  property: "og:title",
                  // have the og:title be removed if we don't have a title
                  content: String(newOgTitle)
                });
              }
            }
            if (description && !hasOgDescription) {
              let newOgDescription = (options == null ? void 0 : options.ogDescription) || description;
              if (typeof newOgDescription === "function")
                newOgDescription = newOgDescription(title);
              if (newOgDescription) {
                entry2[inputKey].meta.push({
                  property: "og:description",
                  content: String(newOgDescription)
                });
              }
            }
            if (hasOgImage && !hasTwitterCard) {
              entry2[inputKey].meta.push({
                name: "twitter:card",
                content: (options == null ? void 0 : options.twitterCard) || "summary_large_image"
              });
            }
          }
        }
      }
    }
  });
}
const plugin_BEnDUEy4ze = /* @__PURE__ */ defineNuxtPlugin(() => {
  const head = injectHead();
  const config2 = useRuntimeConfig().public;
  if (!head)
    return;
  const { resolveAliases, seoOptimise } = config2["nuxt-unhead"];
  if (seoOptimise)
    head.use(InferSeoMetaPlugin());
  const separator = config2.separator || config2.titleSeparator || "|";
  head.push({
    templateParams: {
      // @ts-expect-error untyped
      ...config2,
      // @ts-expect-error untyped
      separator,
      // @ts-expect-error untyped
      titleSeparator: separator
    }
  });
  if (resolveAliases) {
    head.hooks.hook("tags:resolve", async (ctx) => {
      var _a;
      const validTags = [];
      for (const tag of ctx.tags) {
        for (const prop of resolveAliasProps) {
          if (!tag.props[prop] || !(((_a = tag.props) == null ? void 0 : _a[prop]) && /^[~@]+\//.test(tag.props[prop])))
            continue;
          {
            let moduleUrl = tag.props[prop];
            try {
              moduleUrl = (await import(
                /* @vite-ignore */
                `${tag.props[prop]}?url`
              )).default;
            } catch (e) {
            }
            tag.props[prop] = moduleUrl;
          }
        }
        validTags.push(tag);
      }
      ctx.tags = validTags;
    });
  }
});
const provideResolver = (input, resolver2) => {
  if (!input)
    input = {};
  input._resolver = resolver2;
  return input;
};
const defineBreadcrumb = (input) => provideResolver(input, "breadcrumb");
const defineOrganization = (input) => provideResolver(input, "organization");
const defineWebPage = (input) => provideResolver(input, "webPage");
const defineWebSite = (input) => provideResolver(input, "webSite");
function useSchemaOrg(input) {
  return useHead({
    script: [
      {
        type: "application/ld+json",
        id: "schema-org-graph",
        key: "schema-org-graph",
        // @ts-expect-error runtime type
        nodes: input
      }
    ]
  }, { mode: "server" });
}
function defineSchemaOrgResolver(schema) {
  return schema;
}
const PROTOCOL_STRICT_REGEX = /^\w{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^\w{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^[/\\]{2}[^/\\]+/;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.slice(1) : input) || "/";
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const index of input.filter((url2) => isNonEmptyURL(url2))) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(index) : index;
  }
  return url;
}
const idReference = (node) => ({
  "@id": typeof node !== "string" ? node["@id"] : node
});
const resolvableDateToDate = (val) => {
  try {
    const date = val instanceof Date ? val : new Date(Date.parse(val));
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  } catch (e) {
  }
  return typeof val === "string" ? val : val.toString();
};
const resolvableDateToIso = (val) => {
  if (!val)
    return val;
  try {
    if (val instanceof Date)
      return val.toISOString();
    else
      return new Date(Date.parse(val)).toISOString();
  } catch (e) {
  }
  return typeof val === "string" ? val : val.toString();
};
const IdentityId = "#identity";
const setIfEmpty = (node, field, value) => {
  if (!(node == null ? void 0 : node[field]) && value)
    node[field] = value;
};
const asArray = (input) => Array.isArray(input) ? input : [input];
const dedupeMerge = (node, field, value) => {
  const dedupeMerge2 = [];
  const input = asArray(node[field]);
  dedupeMerge2.push(...input);
  const data = new Set(dedupeMerge2);
  data.add(value);
  node[field] = [...data.values()].filter(Boolean);
};
const prefixId = (url, id) => {
  if (hasProtocol(id))
    return url;
  if (!id.startsWith("#"))
    id = `#${id}`;
  return joinURL(url, id);
};
const trimLength = (val, length) => {
  if (!val)
    return val;
  if (val.length > length) {
    const trimmedString = val.substring(0, length);
    return trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
  }
  return val;
};
const resolveDefaultType = (node, defaultType) => {
  const val = node["@type"];
  if (val === defaultType)
    return;
  const types = /* @__PURE__ */ new Set([
    ...asArray(defaultType),
    ...asArray(val)
  ]);
  node["@type"] = types.size === 1 ? val : [...types.values()];
};
const resolveWithBase = (base, urlOrPath) => {
  if (!urlOrPath || hasProtocol(urlOrPath) || !urlOrPath.startsWith("/") && !urlOrPath.startsWith("#"))
    return urlOrPath;
  return withBase(urlOrPath, base);
};
const resolveAsGraphKey = (key) => {
  if (!key)
    return key;
  return key.substring(key.lastIndexOf("#"));
};
const stripEmptyProperties = (obj) => {
  Object.keys(obj).forEach((k) => {
    if (obj[k] && typeof obj[k] === "object") {
      if (obj[k].__v_isReadonly || obj[k].__v_isRef)
        return;
      stripEmptyProperties(obj[k]);
      return;
    }
    if (obj[k] === "" || obj[k] === null || typeof obj[k] === "undefined")
      delete obj[k];
  });
  return obj;
};
function hashCode(s) {
  let h2 = 9;
  for (let i = 0; i < s.length; )
    h2 = Math.imul(h2 ^ s.charCodeAt(i++), 9 ** 9);
  return ((h2 ^ h2 >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase();
}
const offerResolver = defineSchemaOrgResolver({
  cast(node) {
    if (typeof node === "number" || typeof node === "string") {
      return {
        price: node
      };
    }
    return node;
  },
  defaults: {
    "@type": "Offer",
    "availability": "InStock"
  },
  resolve(node, ctx) {
    setIfEmpty(node, "priceCurrency", ctx.meta.currency);
    setIfEmpty(node, "priceValidUntil", new Date(Date.UTC((/* @__PURE__ */ new Date()).getFullYear() + 1, 12, -1, 0, 0, 0)));
    if (node.url)
      resolveWithBase(ctx.meta.host, node.url);
    if (node.availability)
      node.availability = withBase(node.availability, "https://schema.org/");
    if (node.priceValidUntil)
      node.priceValidUntil = resolvableDateToIso(node.priceValidUntil);
    return node;
  }
});
const aggregateOfferResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "AggregateOffer"
  },
  inheritMeta: [
    { meta: "currency", key: "priceCurrency" }
  ],
  resolve(node, ctx) {
    node.offers = resolveRelation(node.offers, ctx, offerResolver);
    if (node.offers)
      setIfEmpty(node, "offerCount", asArray(node.offers).length);
    return node;
  }
});
const aggregateRatingResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "AggregateRating"
  }
});
const searchActionResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint"
    },
    "query-input": {
      "@type": "PropertyValueSpecification",
      "valueRequired": true,
      "valueName": "search_term_string"
    }
  },
  resolve(node, ctx) {
    if (typeof node.target === "string") {
      node.target = {
        "@type": "EntryPoint",
        "urlTemplate": resolveWithBase(ctx.meta.host, node.target)
      };
    }
    return node;
  }
});
const PrimaryWebSiteId = "#website";
const webSiteResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "WebSite"
  },
  inheritMeta: [
    "inLanguage",
    { meta: "host", key: "url" }
  ],
  idPrefix: ["host", PrimaryWebSiteId],
  resolve(node, ctx) {
    node.potentialAction = resolveRelation(node.potentialAction, ctx, searchActionResolver, {
      array: true
    });
    node.publisher = resolveRelation(node.publisher, ctx);
    return node;
  },
  resolveRootNode(node, { find }) {
    if (resolveAsGraphKey(node["@id"]) === PrimaryWebSiteId) {
      const identity = find(IdentityId);
      if (identity)
        setIfEmpty(node, "publisher", idReference(identity));
      const webPage = find(PrimaryWebPageId);
      if (webPage)
        setIfEmpty(webPage, "isPartOf", idReference(node));
    }
    return node;
  }
});
const listItemResolver = defineSchemaOrgResolver({
  cast(node) {
    if (typeof node === "string") {
      node = {
        name: node
      };
    }
    return node;
  },
  defaults: {
    "@type": "ListItem"
  },
  resolve(node, ctx) {
    if (typeof node.item === "string")
      node.item = resolveWithBase(ctx.meta.host, node.item);
    else if (typeof node.item === "object")
      node.item = resolveRelation(node.item, ctx);
    return node;
  }
});
const PrimaryBreadcrumbId = "#breadcrumb";
const breadcrumbResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "BreadcrumbList"
  },
  idPrefix: ["url", PrimaryBreadcrumbId],
  resolve(breadcrumb, ctx) {
    if (breadcrumb.itemListElement) {
      let index = 1;
      breadcrumb.itemListElement = resolveRelation(breadcrumb.itemListElement, ctx, listItemResolver, {
        array: true,
        afterResolve(node) {
          setIfEmpty(node, "position", index++);
        }
      });
    }
    return breadcrumb;
  },
  resolveRootNode(node, { find }) {
    const webPage = find(PrimaryWebPageId);
    if (webPage)
      setIfEmpty(webPage, "breadcrumb", idReference(node));
  }
});
const imageResolver = defineSchemaOrgResolver({
  alias: "image",
  cast(input) {
    if (typeof input === "string") {
      input = {
        url: input
      };
    }
    return input;
  },
  defaults: {
    "@type": "ImageObject"
  },
  inheritMeta: [
    // @todo possibly only do if there's a caption
    "inLanguage"
  ],
  idPrefix: "host",
  resolve(image, { meta }) {
    image.url = resolveWithBase(meta.host, image.url);
    setIfEmpty(image, "contentUrl", image.url);
    if (image.height && !image.width)
      delete image.height;
    if (image.width && !image.height)
      delete image.width;
    return image;
  }
});
const addressResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "PostalAddress"
  }
});
const organizationResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Organization"
  },
  idPrefix: ["host", IdentityId],
  inheritMeta: [
    { meta: "host", key: "url" }
  ],
  resolve(node, ctx) {
    resolveDefaultType(node, "Organization");
    node.address = resolveRelation(node.address, ctx, addressResolver);
    return node;
  },
  resolveRootNode(node, ctx) {
    const isIdentity = resolveAsGraphKey(node["@id"]) === IdentityId;
    const webPage = ctx.find(PrimaryWebPageId);
    if (node.logo) {
      node.logo = resolveRelation(node.logo, ctx, imageResolver, {
        root: true,
        afterResolve(logo) {
          if (isIdentity)
            logo["@id"] = prefixId(ctx.meta.host, "#logo");
          setIfEmpty(logo, "caption", node.name);
        }
      });
      if (webPage)
        setIfEmpty(webPage, "primaryImageOfPage", idReference(node.logo));
    }
    if (isIdentity && webPage)
      setIfEmpty(webPage, "about", idReference(node));
    const webSite = ctx.find(PrimaryWebSiteId);
    if (webSite)
      setIfEmpty(webSite, "publisher", idReference(node));
  }
});
const personResolver = defineSchemaOrgResolver({
  cast(node) {
    if (typeof node === "string") {
      return {
        name: node
      };
    }
    return node;
  },
  defaults: {
    "@type": "Person"
  },
  idPrefix: ["host", IdentityId],
  resolveRootNode(node, { find, meta }) {
    if (resolveAsGraphKey(node["@id"]) === IdentityId) {
      setIfEmpty(node, "url", meta.host);
      const webPage = find(PrimaryWebPageId);
      if (webPage)
        setIfEmpty(webPage, "about", idReference(node));
      const webSite = find(PrimaryWebSiteId);
      if (webSite)
        setIfEmpty(webSite, "publisher", idReference(node));
    }
    const article = find(PrimaryArticleId);
    if (article)
      setIfEmpty(article, "author", idReference(node));
  }
});
const readActionResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "ReadAction"
  },
  resolve(node, ctx) {
    if (!node.target.includes(ctx.meta.url))
      node.target.unshift(ctx.meta.url);
    return node;
  }
});
const PrimaryWebPageId = "#webpage";
const webPageResolver = defineSchemaOrgResolver({
  defaults({ meta }) {
    const endPath = withoutTrailingSlash(meta.url.substring(meta.url.lastIndexOf("/") + 1));
    let type = "WebPage";
    switch (endPath) {
      case "about":
      case "about-us":
        type = "AboutPage";
        break;
      case "search":
        type = "SearchResultsPage";
        break;
      case "checkout":
        type = "CheckoutPage";
        break;
      case "contact":
      case "get-in-touch":
      case "contact-us":
        type = "ContactPage";
        break;
      case "faq":
        type = "FAQPage";
        break;
    }
    const defaults2 = {
      "@type": type
    };
    return defaults2;
  },
  idPrefix: ["url", PrimaryWebPageId],
  inheritMeta: [
    { meta: "title", key: "name" },
    "description",
    "datePublished",
    "dateModified",
    "url"
  ],
  resolve(node, ctx) {
    node.dateModified = resolvableDateToIso(node.dateModified);
    node.datePublished = resolvableDateToIso(node.datePublished);
    resolveDefaultType(node, "WebPage");
    node.about = resolveRelation(node.about, ctx, organizationResolver);
    node.breadcrumb = resolveRelation(node.breadcrumb, ctx, breadcrumbResolver);
    node.author = resolveRelation(node.author, ctx, personResolver);
    node.primaryImageOfPage = resolveRelation(node.primaryImageOfPage, ctx, imageResolver);
    node.potentialAction = resolveRelation(node.potentialAction, ctx, readActionResolver);
    if (node["@type"] === "WebPage") {
      setIfEmpty(node, "potentialAction", [
        {
          "@type": "ReadAction",
          "target": [ctx.meta.url]
        }
      ]);
    }
    return node;
  },
  resolveRootNode(webPage, { find, meta }) {
    const identity = find(IdentityId);
    const webSite = find(PrimaryWebSiteId);
    const logo = find("#logo");
    if (identity && meta.url === meta.host)
      setIfEmpty(webPage, "about", idReference(identity));
    if (logo)
      setIfEmpty(webPage, "primaryImageOfPage", idReference(logo));
    if (webSite)
      setIfEmpty(webPage, "isPartOf", idReference(webSite));
    const breadcrumb = find(PrimaryBreadcrumbId);
    if (breadcrumb)
      setIfEmpty(webPage, "breadcrumb", idReference(breadcrumb));
    return webPage;
  }
});
const PrimaryArticleId = "#article";
const articleResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Article"
  },
  inheritMeta: [
    "inLanguage",
    "description",
    "image",
    "dateModified",
    "datePublished",
    { meta: "title", key: "headline" }
  ],
  idPrefix: ["url", PrimaryArticleId],
  resolve(node, ctx) {
    node.author = resolveRelation(node.author, ctx, personResolver, {
      root: true
    });
    node.publisher = resolveRelation(node.publisher, ctx);
    node.dateModified = resolvableDateToIso(node.dateModified);
    node.datePublished = resolvableDateToIso(node.datePublished);
    resolveDefaultType(node, "Article");
    node.headline = trimLength(node.headline, 110);
    return node;
  },
  resolveRootNode(node, { find, meta }) {
    var _a;
    const webPage = find(PrimaryWebPageId);
    const identity = find(IdentityId);
    if (node.image && !node.thumbnailUrl) {
      const firstImage = asArray(node.image)[0];
      if (typeof firstImage === "string")
        setIfEmpty(node, "thumbnailUrl", resolveWithBase(meta.host, firstImage));
      else if (firstImage == null ? void 0 : firstImage["@id"])
        setIfEmpty(node, "thumbnailUrl", (_a = find(firstImage["@id"])) == null ? void 0 : _a.url);
    }
    if (identity) {
      setIfEmpty(node, "publisher", idReference(identity));
      setIfEmpty(node, "author", idReference(identity));
    }
    if (webPage) {
      setIfEmpty(node, "isPartOf", idReference(webPage));
      setIfEmpty(node, "mainEntityOfPage", idReference(webPage));
      setIfEmpty(webPage, "potentialAction", [
        {
          "@type": "ReadAction",
          "target": [meta.url]
        }
      ]);
      setIfEmpty(webPage, "dateModified", node.dateModified);
      setIfEmpty(webPage, "datePublished", node.datePublished);
    }
    return node;
  }
});
const bookEditionResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Book"
  },
  inheritMeta: [
    "inLanguage"
  ],
  resolve(node, ctx) {
    if (node.bookFormat)
      node.bookFormat = withBase(node.bookFormat, "https://schema.org/");
    if (node.datePublished)
      node.datePublished = resolvableDateToDate(node.datePublished);
    node.author = resolveRelation(node.author, ctx);
    return node;
  },
  resolveRootNode(node, { find }) {
    const identity = find(IdentityId);
    if (identity)
      setIfEmpty(node, "provider", idReference(identity));
    return node;
  }
});
const PrimaryBookId = "#book";
const bookResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Book"
  },
  inheritMeta: [
    "description",
    "url",
    { meta: "title", key: "name" }
  ],
  idPrefix: ["url", PrimaryBookId],
  resolve(node, ctx) {
    node.workExample = resolveRelation(node.workExample, ctx, bookEditionResolver);
    node.author = resolveRelation(node.author, ctx);
    if (node.url)
      withBase(node.url, ctx.meta.host);
    return node;
  },
  resolveRootNode(node, { find }) {
    const identity = find(IdentityId);
    if (identity)
      setIfEmpty(node, "author", idReference(identity));
    return node;
  }
});
const commentResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Comment"
  },
  idPrefix: "url",
  resolve(node, ctx) {
    node.author = resolveRelation(node.author, ctx, personResolver, {
      root: true
    });
    return node;
  },
  resolveRootNode(node, { find }) {
    const article = find(PrimaryArticleId);
    if (article)
      setIfEmpty(node, "about", idReference(article));
  }
});
const courseResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Course"
  },
  resolve(node, ctx) {
    node.provider = resolveRelation(node.provider, ctx, organizationResolver, {
      root: true
    });
    return node;
  },
  resolveRootNode(node, { find }) {
    const identity = find(IdentityId);
    if (identity)
      setIfEmpty(node, "provider", idReference(identity));
    return node;
  }
});
const placeResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Place"
  },
  resolve(node, ctx) {
    if (typeof node.address !== "string")
      node.address = resolveRelation(node.address, ctx, addressResolver);
    return node;
  }
});
const virtualLocationResolver = defineSchemaOrgResolver({
  cast(node) {
    if (typeof node === "string") {
      return {
        url: node
      };
    }
    return node;
  },
  defaults: {
    "@type": "VirtualLocation"
  }
});
const PrimaryEventId = "#event";
const eventResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Event"
  },
  inheritMeta: [
    "inLanguage",
    "description",
    "image",
    { meta: "title", key: "name" }
  ],
  idPrefix: ["url", PrimaryEventId],
  resolve(node, ctx) {
    var _a;
    if (node.location) {
      const isVirtual = node.location === "string" || ((_a = node.location) == null ? void 0 : _a.url) !== "undefined";
      node.location = resolveRelation(node.location, ctx, isVirtual ? virtualLocationResolver : placeResolver);
    }
    node.performer = resolveRelation(node.performer, ctx, personResolver, {
      root: true
    });
    node.organizer = resolveRelation(node.organizer, ctx, organizationResolver, {
      root: true
    });
    node.offers = resolveRelation(node.offers, ctx, offerResolver);
    if (node.eventAttendanceMode)
      node.eventAttendanceMode = withBase(node.eventAttendanceMode, "https://schema.org/");
    if (node.eventStatus)
      node.eventStatus = withBase(node.eventStatus, "https://schema.org/");
    const isOnline = node.eventStatus === "https://schema.org/EventMovedOnline";
    const dates = ["startDate", "previousStartDate", "endDate"];
    dates.forEach((date) => {
      if (!isOnline) {
        if (node[date] instanceof Date && node[date].getHours() === 0 && node[date].getMinutes() === 0)
          node[date] = resolvableDateToDate(node[date]);
      } else {
        node[date] = resolvableDateToIso(node[date]);
      }
    });
    setIfEmpty(node, "endDate", node.startDate);
    return node;
  },
  resolveRootNode(node, { find }) {
    const identity = find(IdentityId);
    if (identity)
      setIfEmpty(node, "organizer", idReference(identity));
  }
});
const howToStepDirectionResolver = defineSchemaOrgResolver({
  cast(node) {
    if (typeof node === "string") {
      return {
        text: node
      };
    }
    return node;
  },
  defaults: {
    "@type": "HowToDirection"
  }
});
const howToStepResolver = defineSchemaOrgResolver({
  cast(node) {
    if (typeof node === "string") {
      return {
        text: node
      };
    }
    return node;
  },
  defaults: {
    "@type": "HowToStep"
  },
  resolve(step, ctx) {
    if (step.url)
      step.url = resolveWithBase(ctx.meta.url, step.url);
    if (step.image) {
      step.image = resolveRelation(step.image, ctx, imageResolver, {
        root: true
      });
    }
    if (step.itemListElement)
      step.itemListElement = resolveRelation(step.itemListElement, ctx, howToStepDirectionResolver);
    return step;
  }
});
const HowToId = "#howto";
const howToResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "HowTo"
  },
  inheritMeta: [
    "description",
    "image",
    "inLanguage",
    { meta: "title", key: "name" }
  ],
  idPrefix: ["url", HowToId],
  resolve(node, ctx) {
    node.step = resolveRelation(node.step, ctx, howToStepResolver);
    return node;
  },
  resolveRootNode(node, { find }) {
    const webPage = find(PrimaryWebPageId);
    if (webPage)
      setIfEmpty(node, "mainEntityOfPage", idReference(webPage));
  }
});
const itemListResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "ItemList"
  },
  resolve(node, ctx) {
    if (node.itemListElement) {
      let index = 1;
      node.itemListElement = resolveRelation(node.itemListElement, ctx, listItemResolver, {
        array: true,
        afterResolve(node2) {
          setIfEmpty(node2, "position", index++);
        }
      });
    }
    return node;
  }
});
const quantitativeValueResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "QuantitativeValue"
  }
});
const monetaryAmountResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "MonetaryAmount"
  },
  resolve(node, ctx) {
    node.value = resolveRelation(node.value, ctx, quantitativeValueResolver);
    return node;
  }
});
const jobPostingResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "JobPosting"
  },
  resolve(node, ctx) {
    node.datePosted = resolvableDateToIso(node.datePosted);
    node.hiringOrganization = resolveRelation(node.hiringOrganization, ctx, organizationResolver);
    node.jobLocation = resolveRelation(node.jobLocation, ctx, placeResolver);
    node.baseSalary = resolveRelation(node.baseSalary, ctx, monetaryAmountResolver);
    node.validThrough = resolvableDateToIso(node.validThrough);
    return node;
  }
});
const openingHoursResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "OpeningHoursSpecification",
    "opens": "00:00",
    "closes": "23:59"
  }
});
const localBusinessResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": ["Organization", "LocalBusiness"]
  },
  inheritMeta: [
    { key: "url", meta: "host" },
    { key: "currenciesAccepted", meta: "currency" }
  ],
  idPrefix: ["host", IdentityId],
  resolve(node, ctx) {
    resolveDefaultType(node, ["Organization", "LocalBusiness"]);
    node.address = resolveRelation(node.address, ctx, addressResolver);
    node.openingHoursSpecification = resolveRelation(node.openingHoursSpecification, ctx, openingHoursResolver);
    node.logo = resolveRelation(node.logo, ctx, imageResolver, {
      afterResolve(logo) {
        const hasLogo = !!ctx.find("#logo");
        if (!hasLogo)
          logo["@id"] = prefixId(ctx.meta.host, "#logo");
        setIfEmpty(logo, "caption", node.name);
      }
    });
    return node;
  }
});
const ratingResolver = defineSchemaOrgResolver({
  cast(node) {
    if (node === "number") {
      return {
        ratingValue: node
      };
    }
    return node;
  },
  defaults: {
    "@type": "Rating",
    "bestRating": 5,
    "worstRating": 1
  }
});
const reviewResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Review"
  },
  inheritMeta: [
    "inLanguage"
  ],
  resolve(review, ctx) {
    review.reviewRating = resolveRelation(review.reviewRating, ctx, ratingResolver);
    review.author = resolveRelation(review.author, ctx, personResolver);
    return review;
  }
});
const videoResolver = defineSchemaOrgResolver({
  cast(input) {
    if (typeof input === "string") {
      input = {
        url: input
      };
    }
    return input;
  },
  alias: "video",
  defaults: {
    "@type": "VideoObject"
  },
  inheritMeta: [
    { meta: "title", key: "name" },
    "description",
    "image",
    "inLanguage",
    { meta: "datePublished", key: "uploadDate" }
  ],
  idPrefix: "host",
  resolve(video, ctx) {
    if (video.uploadDate)
      video.uploadDate = resolvableDateToIso(video.uploadDate);
    video.url = resolveWithBase(ctx.meta.host, video.url);
    if (video.caption && !video.description)
      video.description = video.caption;
    if (!video.description)
      video.description = "No description";
    if (video.thumbnailUrl)
      video.thumbnailUrl = resolveRelation(video.thumbnailUrl, ctx, imageResolver);
    return video;
  },
  resolveRootNode(video, { find }) {
    var _a;
    if (video.image && !video.thumbnailUrl) {
      const firstImage = asArray(video.image)[0];
      setIfEmpty(video, "thumbnailUrl", (_a = find(firstImage["@id"])) == null ? void 0 : _a.url);
    }
  }
});
const movieResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Movie"
  },
  resolve(node, ctx) {
    node.aggregateRating = resolveRelation(node.aggregateRating, ctx, aggregateRatingResolver);
    node.review = resolveRelation(node.review, ctx, reviewResolver);
    node.director = resolveRelation(node.director, ctx, personResolver);
    node.actor = resolveRelation(node.actor, ctx, personResolver);
    node.trailer = resolveRelation(node.trailer, ctx, videoResolver);
    if (node.dateCreated)
      node.dateCreated = resolvableDateToDate(node.dateCreated);
    return node;
  }
});
const defaults$1 = {
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false
};
function objectHash(object, options = {}) {
  options = { ...defaults$1, ...options };
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
function createHasher(options) {
  const buff = [];
  let context = [];
  const write = (str) => {
    buff.push(str);
  };
  return {
    toString() {
      return buff.join("");
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this["_" + type](value);
    },
    _object(object) {
      const pattern = /\[object (.*)]/i;
      const objString = Object.prototype.toString.call(object);
      const _objType = pattern.exec(objString);
      const objType = _objType ? _objType[1].toLowerCase() : "unknown:[" + objString.toLowerCase() + "]";
      let objectNumber = null;
      if ((objectNumber = context.indexOf(object)) >= 0) {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      } else {
        context.push(object);
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this["_" + objType]) {
          this["_" + objType](object);
        } else if (options.ignoreUnknown) {
          return write("[" + objType + "]");
        } else {
          throw new Error('Unknown object type "' + objType + '"');
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        if (options.respectType !== false && !isNativeFunction(object)) {
          keys.splice(0, 0, "prototype", "__proto__", "letructor");
        }
        if (options.excludeKeys) {
          keys = keys.filter(function(key) {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + keys.length + ":");
        for (const key of keys) {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        }
      }
    },
    _array(arr, unordered) {
      unordered = typeof unordered !== "undefined" ? unordered : options.unorderedArrays !== false;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry2 of arr) {
          this.dispatch(entry2);
        }
        return;
      }
      const contextAdditions = [];
      const entries = arr.map((entry2) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry2);
        contextAdditions.push(hasher.getContext());
        return hasher.toString();
      });
      context = [...context, ...contextAdditions];
      entries.sort();
      return this._array(entries, false);
    },
    _date(date) {
      return write("date:" + date.toJSON());
    },
    _symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    _error(err) {
      return write("error:" + err.toString());
    },
    _boolean(bool) {
      return write("bool:" + bool.toString());
    },
    _string(string) {
      write("string:" + string.length + ":");
      write(string.toString());
    },
    _function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this._object(fn);
      }
    },
    _number(number) {
      return write("number:" + number.toString());
    },
    _xml(xml) {
      return write("xml:" + xml.toString());
    },
    _null() {
      return write("Null");
    },
    _undefined() {
      return write("Undefined");
    },
    _regexp(regex) {
      return write("regex:" + regex.toString());
    },
    _uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    _url(url) {
      return write("url:" + url.toString());
    },
    _map(map) {
      write("map:");
      const arr = [...map];
      return this._array(arr, options.unorderedSets !== false);
    },
    _set(set2) {
      write("set:");
      const arr = [...set2];
      return this._array(arr, options.unorderedSets !== false);
    },
    _file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    _blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error('Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n');
    },
    _domwindow() {
      return write("domwindow");
    },
    _bigint(number) {
      return write("bigint:" + number.toString());
    },
    _process() {
      return write("process");
    },
    _timer() {
      return write("timer");
    },
    _pipe() {
      return write("pipe");
    },
    _tcp() {
      return write("tcp");
    },
    _udp() {
      return write("udp");
    },
    _tty() {
      return write("tty");
    },
    _statwatcher() {
      return write("statwatcher");
    },
    _securecontext() {
      return write("securecontext");
    },
    _connection() {
      return write("connection");
    },
    _zlib() {
      return write("zlib");
    },
    _context() {
      return write("context");
    },
    _nodescript() {
      return write("nodescript");
    },
    _httpparser() {
      return write("httpparser");
    },
    _dataview() {
      return write("dataview");
    },
    _signal() {
      return write("signal");
    },
    _fsevent() {
      return write("fsevent");
    },
    _tlswrap() {
      return write("tlswrap");
    }
  };
}
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  const exp = /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i;
  return exp.exec(Function.prototype.toString.call(f)) != null;
}
class WordArray {
  constructor(words, sigBytes) {
    words = this.words = words || [];
    this.sigBytes = sigBytes !== void 0 ? sigBytes : words.length * 4;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push(
        (bite >>> 4).toString(16),
        (bite & 15).toString(16)
      );
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    this._minBufferSize = 0;
    this.blockSize = 512 / 32;
    this.reset();
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}
const H = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225];
const K = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
const W = [];
class SHA256 extends Hasher {
  constructor() {
    super();
    this.reset();
  }
  reset() {
    super.reset();
    this._hash = new WordArray([...H]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f = H2[5];
    let g = H2[6];
    let h2 = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h2 + sigma1 + ch + K[i] + W[i];
      const t2 = sigma0 + maj;
      h2 = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h2 | 0;
  }
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}
function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}
const ProductId = "#product";
const productResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Product"
  },
  inheritMeta: [
    "description",
    "image",
    { meta: "title", key: "name" }
  ],
  idPrefix: ["url", ProductId],
  resolve(node, ctx) {
    setIfEmpty(node, "sku", hash(node.name));
    node.aggregateOffer = resolveRelation(node.aggregateOffer, ctx, aggregateOfferResolver);
    node.aggregateRating = resolveRelation(node.aggregateRating, ctx, aggregateRatingResolver);
    node.offers = resolveRelation(node.offers, ctx, offerResolver);
    node.review = resolveRelation(node.review, ctx, reviewResolver);
    return node;
  },
  resolveRootNode(product, { find }) {
    const webPage = find(PrimaryWebPageId);
    const identity = find(IdentityId);
    if (identity)
      setIfEmpty(product, "brand", idReference(identity));
    if (webPage)
      setIfEmpty(product, "mainEntityOfPage", idReference(webPage));
    return product;
  }
});
const answerResolver = defineSchemaOrgResolver({
  cast(node) {
    if (typeof node === "string") {
      return {
        text: node
      };
    }
    return node;
  },
  defaults: {
    "@type": "Answer"
  }
});
const questionResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Question"
  },
  inheritMeta: [
    "inLanguage"
  ],
  idPrefix: "url",
  resolve(question, ctx) {
    if (question.question)
      question.name = question.question;
    if (question.answer)
      question.acceptedAnswer = question.answer;
    question.acceptedAnswer = resolveRelation(question.acceptedAnswer, ctx, answerResolver);
    return question;
  },
  resolveRootNode(question, { find }) {
    const webPage = find(PrimaryWebPageId);
    if (webPage && asArray(webPage["@type"]).includes("FAQPage"))
      dedupeMerge(webPage, "mainEntity", idReference(question));
  }
});
const RecipeId = "#recipe";
const recipeResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Recipe"
  },
  inheritMeta: [
    { meta: "title", key: "name" },
    "description",
    "image",
    "datePublished"
  ],
  idPrefix: ["url", RecipeId],
  resolve(node, ctx) {
    node.recipeInstructions = resolveRelation(node.recipeInstructions, ctx, howToStepResolver);
    return node;
  },
  resolveRootNode(node, { find }) {
    const article = find(PrimaryArticleId);
    const webPage = find(PrimaryWebPageId);
    if (article)
      setIfEmpty(node, "mainEntityOfPage", idReference(article));
    else if (webPage)
      setIfEmpty(node, "mainEntityOfPage", idReference(webPage));
    if (article == null ? void 0 : article.author)
      setIfEmpty(node, "author", article.author);
    return node;
  }
});
const softwareAppResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "SoftwareApplication"
  },
  resolve(node, ctx) {
    resolveDefaultType(node, "SoftwareApplication");
    node.offers = resolveRelation(node.offers, ctx, offerResolver);
    node.aggregateRating = resolveRelation(node.aggregateRating, ctx, aggregateRatingResolver);
    node.review = resolveRelation(node.review, ctx, reviewResolver);
    return node;
  }
});
function loadResolver(resolver2) {
  switch (resolver2) {
    case "address":
      return addressResolver;
    case "aggregateOffer":
      return aggregateOfferResolver;
    case "aggregateRating":
      return aggregateRatingResolver;
    case "article":
      return articleResolver;
    case "breadcrumb":
      return breadcrumbResolver;
    case "comment":
      return commentResolver;
    case "event":
      return eventResolver;
    case "virtualLocation":
      return virtualLocationResolver;
    case "place":
      return placeResolver;
    case "howTo":
      return howToResolver;
    case "howToStep":
      return howToStepResolver;
    case "image":
      return imageResolver;
    case "localBusiness":
      return localBusinessResolver;
    case "offer":
      return offerResolver;
    case "openingHours":
      return openingHoursResolver;
    case "organization":
      return organizationResolver;
    case "person":
      return personResolver;
    case "product":
      return productResolver;
    case "question":
      return questionResolver;
    case "recipe":
      return recipeResolver;
    case "review":
      return reviewResolver;
    case "video":
      return videoResolver;
    case "webPage":
      return webPageResolver;
    case "webSite":
      return webSiteResolver;
    case "book":
      return bookResolver;
    case "course":
      return courseResolver;
    case "itemList":
      return itemListResolver;
    case "jobPosting":
      return jobPostingResolver;
    case "listItem":
      return listItemResolver;
    case "movie":
      return movieResolver;
    case "searchAction":
      return searchActionResolver;
    case "readAction":
      return readActionResolver;
    case "softwareApp":
      return softwareAppResolver;
    case "bookEdition":
      return bookEditionResolver;
  }
  return null;
}
const resolver = {
  __proto__: null,
  loadResolver
};
const resolveMeta = (meta) => {
  if (!meta.host && meta.canonicalHost)
    meta.host = meta.canonicalHost;
  if (!meta.tagPosition && meta.position)
    meta.tagPosition = meta.position;
  if (!meta.currency && meta.defaultCurrency)
    meta.currency = meta.defaultCurrency;
  if (!meta.inLanguage && meta.defaultLanguage)
    meta.inLanguage = meta.defaultLanguage;
  if (!meta.path)
    meta.path = "/";
  if (!meta.host && false)
    meta.host = document.location.host;
  if (!meta.url && meta.canonicalUrl)
    meta.url = meta.canonicalUrl;
  if (meta.path !== "/") {
    if (meta.trailingSlash && !hasTrailingSlash(meta.path))
      meta.path = withTrailingSlash(meta.path);
    else if (!meta.trailingSlash && hasTrailingSlash(meta.path))
      meta.path = withoutTrailingSlash(meta.path);
  }
  meta.url = joinURL(meta.host, meta.path);
  return {
    ...meta,
    host: meta.host,
    url: meta.url,
    currency: meta.currency,
    image: meta.image,
    inLanguage: meta.inLanguage,
    title: meta.title,
    description: meta.description,
    datePublished: meta.datePublished,
    dateModified: meta.dateModified
  };
};
const resolveNode = (node, ctx, resolver2) => {
  var _a;
  if (resolver2 == null ? void 0 : resolver2.cast)
    node = resolver2.cast(node, ctx);
  if (resolver2 == null ? void 0 : resolver2.defaults) {
    let defaults2 = resolver2.defaults || {};
    if (typeof defaults2 === "function")
      defaults2 = defaults2(ctx);
    node = {
      ...defaults2,
      ...node
    };
  }
  (_a = resolver2.inheritMeta) == null ? void 0 : _a.forEach((entry2) => {
    if (typeof entry2 === "string")
      setIfEmpty(node, entry2, ctx.meta[entry2]);
    else
      setIfEmpty(node, entry2.key, ctx.meta[entry2.meta]);
  });
  if (resolver2 == null ? void 0 : resolver2.resolve)
    node = resolver2.resolve(node, ctx);
  for (const k in node) {
    const v = node[k];
    if (typeof v === "object" && (v == null ? void 0 : v._resolver))
      node[k] = resolveRelation(v, ctx, v._resolver);
  }
  stripEmptyProperties(node);
  return node;
};
const resolveNodeId = (node, ctx, resolver2, resolveAsRoot = false) => {
  var _a, _b;
  const prefix = Array.isArray(resolver2.idPrefix) ? resolver2.idPrefix[0] : resolver2.idPrefix;
  if (!prefix)
    return node;
  if (node["@id"] && !node["@id"].startsWith(ctx.meta.host)) {
    node["@id"] = prefixId(ctx.meta[prefix], node["@id"]);
    return node;
  }
  const rootId = Array.isArray(resolver2.idPrefix) ? (_a = resolver2.idPrefix) == null ? void 0 : _a[1] : void 0;
  if (resolveAsRoot && rootId) {
    node["@id"] = prefixId(ctx.meta[prefix], rootId);
  }
  if (!node["@id"]) {
    let alias = resolver2 == null ? void 0 : resolver2.alias;
    if (!alias) {
      const type = ((_b = asArray(node["@type"])) == null ? void 0 : _b[0]) || "";
      alias = type.toLowerCase();
    }
    const hashNodeData = {};
    Object.entries(node).forEach(([key, val]) => {
      if (!key.startsWith("_"))
        hashNodeData[key] = val;
    });
    node["@id"] = prefixId(ctx.meta[prefix], `#/schema/${alias}/${hashCode(JSON.stringify(hashNodeData))}`);
  }
  return node;
};
function resolveRelation(input, ctx, fallbackResolver, options = {}) {
  if (!input)
    return input;
  const ids = asArray(input).map((a) => {
    if (Object.keys(a).length === 1 && a["@id"])
      return a;
    let resolver2 = fallbackResolver;
    if (a._resolver) {
      resolver2 = a._resolver;
      if (typeof resolver2 === "string")
        resolver2 = loadResolver(resolver2);
      delete a._resolver;
    }
    if (!resolver2)
      return a;
    let node = resolveNode(a, ctx, resolver2);
    if (options.afterResolve)
      options.afterResolve(node);
    if (options.generateId || options.root)
      node = resolveNodeId(node, ctx, resolver2, false);
    if (options.root) {
      if (resolver2.resolveRootNode)
        resolver2.resolveRootNode(node, ctx);
      ctx.push(node);
      return idReference(node["@id"]);
    }
    return node;
  });
  if (!options.array && ids.length === 1)
    return ids[0];
  return ids;
}
const groupBy = (array, predicate) => array.reduce((acc, value, index, array2) => {
  const key = predicate(value, index, array2);
  if (!acc[key])
    acc[key] = [];
  acc[key].push(value);
  return acc;
}, {});
const dedupeNodes = (nodes) => {
  const sortedNodeKeys = nodes.keys();
  const dedupedNodes = {};
  for (const key of sortedNodeKeys) {
    const n = nodes[key];
    const nodeKey = resolveAsGraphKey(n["@id"] || hash(n));
    const groupedKeys = groupBy(Object.keys(n), (key2) => {
      const val = n[key2];
      if (key2.startsWith("_"))
        return "ignored";
      if (Array.isArray(val) || typeof val === "object")
        return "relations";
      return "primitives";
    });
    const keys = [
      ...(groupedKeys.primitives || []).sort(),
      ...(groupedKeys.relations || []).sort()
    ];
    const newNode = {};
    for (const key2 of keys)
      newNode[key2] = n[key2];
    dedupedNodes[nodeKey] = newNode;
  }
  return Object.values(dedupedNodes);
};
const createSchemaOrgGraph = () => {
  const ctx = {
    find(id) {
      const key = resolveAsGraphKey(id);
      return ctx.nodes.filter((n) => !!n["@id"]).find((n) => resolveAsGraphKey(n["@id"]) === key);
    },
    push(input) {
      asArray(input).forEach((node) => {
        const registeredNode = node;
        ctx.nodes.push(registeredNode);
      });
    },
    resolveGraph(meta) {
      ctx.meta = resolveMeta({ ...meta });
      ctx.nodes.forEach((node, key) => {
        const resolver2 = node._resolver;
        if (resolver2) {
          node = resolveNode(node, ctx, resolver2);
          node = resolveNodeId(node, ctx, resolver2, true);
        }
        ctx.nodes[key] = node;
      });
      ctx.nodes.forEach((node) => {
        var _a;
        if (node.image && typeof node.image === "string") {
          node.image = resolveRelation(node.image, ctx, imageResolver, {
            root: true
          });
        }
        if ((_a = node._resolver) == null ? void 0 : _a.resolveRootNode)
          node._resolver.resolveRootNode(node, ctx);
        delete node._resolver;
      });
      return dedupeNodes(ctx.nodes);
    },
    nodes: [],
    meta: {}
  };
  return ctx;
};
function SchemaOrgUnheadPlugin(config2, meta) {
  config2 = resolveMeta({ ...config2 });
  let graph;
  const resolvedMeta = {};
  return {
    hooks: {
      "entries:resolve": function() {
        graph = createSchemaOrgGraph();
      },
      "tag:normalise": async function({ tag }) {
        if (tag.key === "schema-org-graph") {
          const { loadResolver: loadResolver2 } = await Promise.resolve().then(function() {
            return resolver;
          });
          const nodes = await tag.props.nodes;
          for (const node of Array.isArray(nodes) ? nodes : [nodes]) {
            const newNode = {
              ...node,
              _resolver: loadResolver2(await node._resolver)
            };
            graph.push(newNode);
          }
          tag.tagPosition = config2.tagPosition === "head" ? "head" : "bodyClose";
        }
        if (tag.tag === "title")
          resolvedMeta.title = tag.textContent;
        else if (tag.tag === "meta" && tag.props.name === "description")
          resolvedMeta.description = tag.props.content;
        else if (tag.tag === "link" && tag.props.rel === "canonical")
          resolvedMeta.url = tag.props.href;
        else if (tag.tag === "meta" && tag.props.property === "og:image")
          resolvedMeta.image = tag.props.content;
      },
      "tags:resolve": async function(ctx) {
        for (const tag of ctx.tags) {
          if (tag.tag === "script" && tag.key === "schema-org-graph") {
            tag.innerHTML = JSON.stringify({
              "@context": "https://schema.org",
              "@graph": graph.resolveGraph({ ...config2, ...resolvedMeta, ...await meta() })
            }, null, 2);
            delete tag.props.nodes;
          }
        }
      }
    }
  };
}
const config = { "host": "https://hksanda.netlify.app", "trailingSlash": false, "inLanguage": "zh-HK" };
const plugin_hk8DoX26Pk = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const head = nuxtApp.vueApp._context.provides.usehead;
  const router = useRouter();
  const currentRoute = router.currentRoute;
  head.use(SchemaOrgUnheadPlugin(config, async () => {
    const route = unref(currentRoute);
    const meta = {
      ...config,
      path: route.path,
      ...route.meta
    };
    await nuxtApp.hooks.callHook("schema-org:meta", meta);
    return meta;
  }));
});
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults: defaults2 } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol$1(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL$1(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol$1(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults2);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const hwRatio = width && height ? height / width : 0;
  const variants = [];
  const sizes = {};
  if (typeof opts.sizes === "string") {
    for (const entry2 of opts.sizes.split(/[\s,]+/).filter((e) => e)) {
      const s = entry2.split(":");
      if (s.length !== 2) {
        continue;
      }
      sizes[s[0].trim()] = s[1].trim();
    }
  } else {
    Object.assign(sizes, opts.sizes);
  }
  for (const key in sizes) {
    const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
    let size = String(sizes[key]);
    const isFluid = size.endsWith("vw");
    if (!isFluid && /^\d+$/.test(size)) {
      size = size + "px";
    }
    if (!isFluid && !size.endsWith("px")) {
      continue;
    }
    let _cWidth = parseInt(size);
    if (!screenMaxWidth || !_cWidth) {
      continue;
    }
    if (isFluid) {
      _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
    }
    const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
    variants.push({
      width: _cWidth,
      size,
      screenMaxWidth,
      media: `(max-width: ${screenMaxWidth}px)`,
      src: ctx.$img(input, { ...opts.modifiers, width: _cWidth, height: _cHeight }, opts)
    });
  }
  variants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  const defaultVar = variants[variants.length - 1];
  if (defaultVar) {
    defaultVar.media = "";
  }
  return {
    sizes: variants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", "),
    srcset: variants.map((v) => `${v.src} ${v.width}w`).join(", "),
    src: defaultVar == null ? void 0 : defaultVar.src
  };
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL: baseURL2 } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL2) {
    baseURL2 = joinURL$1(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL$1(baseURL2, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$s9eVUTX1jM = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
});
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {}
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$s9eVUTX1jM, defaults: {} }
};
const plugin_OrkQhMqHci = /* @__PURE__ */ defineNuxtPlugin(() => {
  const config2 = /* @__PURE__ */ useRuntimeConfig();
  const img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config2.app.baseURL
    }
  });
  return {
    provide: {
      img
    }
  };
});
function maybe$1(thunk) {
  try {
    return thunk();
  } catch (_a) {
  }
}
const global$1 = maybe$1(function() {
  return globalThis;
}) || maybe$1(function() {
  return window;
}) || maybe$1(function() {
  return self;
}) || maybe$1(function() {
  return global;
}) || maybe$1(function() {
  return maybe$1.constructor("return this")();
});
var __ = "__";
var GLOBAL_KEY = [__, __].join("DEV");
function getDEV() {
  try {
    return Boolean(false);
  } catch (_a) {
    Object.defineProperty(global$1, GLOBAL_KEY, {
      value: maybe$1(function() {
        return "production";
      }) !== "production",
      enumerable: false,
      configurable: true,
      writable: true
    });
    return global$1[GLOBAL_KEY];
  }
}
const DEV = getDEV();
function devAssert(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message);
  }
}
function isObjectLike(value) {
  return typeof value == "object" && value !== null;
}
function invariant(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(
      message != null ? message : "Unexpected invariant triggered."
    );
  }
}
const LineRegExp = /\r\n|[\n\r]/g;
function getLocation(source, position) {
  let lastLineStart = 0;
  let line = 1;
  for (const match of source.body.matchAll(LineRegExp)) {
    typeof match.index === "number" || invariant(false);
    if (match.index >= position) {
      break;
    }
    lastLineStart = match.index + match[0].length;
    line += 1;
  }
  return {
    line,
    column: position + 1 - lastLineStart
  };
}
function printLocation(location2) {
  return printSourceLocation(
    location2.source,
    getLocation(location2.source, location2.start)
  );
}
function printSourceLocation(source, sourceLocation) {
  const firstLineColumnOffset = source.locationOffset.column - 1;
  const body = "".padStart(firstLineColumnOffset) + source.body;
  const lineIndex = sourceLocation.line - 1;
  const lineOffset = source.locationOffset.line - 1;
  const lineNum = sourceLocation.line + lineOffset;
  const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  const columnNum = sourceLocation.column + columnOffset;
  const locationStr = `${source.name}:${lineNum}:${columnNum}
`;
  const lines = body.split(/\r\n|[\n\r]/g);
  const locationLine = lines[lineIndex];
  if (locationLine.length > 120) {
    const subLineIndex = Math.floor(columnNum / 80);
    const subLineColumnNum = columnNum % 80;
    const subLines = [];
    for (let i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }
    return locationStr + printPrefixedLines([
      [`${lineNum} |`, subLines[0]],
      ...subLines.slice(1, subLineIndex + 1).map((subLine) => ["|", subLine]),
      ["|", "^".padStart(subLineColumnNum)],
      ["|", subLines[subLineIndex + 1]]
    ]);
  }
  return locationStr + printPrefixedLines([
    // Lines specified like this: ["prefix", "string"],
    [`${lineNum - 1} |`, lines[lineIndex - 1]],
    [`${lineNum} |`, locationLine],
    ["|", "^".padStart(columnNum)],
    [`${lineNum + 1} |`, lines[lineIndex + 1]]
  ]);
}
function printPrefixedLines(lines) {
  const existingLines = lines.filter(([_, line]) => line !== void 0);
  const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
  return existingLines.map(([prefix, line]) => prefix.padStart(padLen) + (line ? " " + line : "")).join("\n");
}
function toNormalizedOptions(args) {
  const firstArg = args[0];
  if (firstArg == null || "kind" in firstArg || "length" in firstArg) {
    return {
      nodes: firstArg,
      source: args[1],
      positions: args[2],
      path: args[3],
      originalError: args[4],
      extensions: args[5]
    };
  }
  return firstArg;
}
class GraphQLError extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */
  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */
  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */
  /**
   * The original error thrown from a field resolver during execution.
   */
  /**
   * Extension fields to add to the formatted error.
   */
  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(message, ...rawArgs) {
    var _this$nodes, _nodeLocations$, _ref;
    const { nodes, source, positions, path, originalError, extensions } = toNormalizedOptions(rawArgs);
    super(message);
    this.name = "GraphQLError";
    this.path = path !== null && path !== void 0 ? path : void 0;
    this.originalError = originalError !== null && originalError !== void 0 ? originalError : void 0;
    this.nodes = undefinedIfEmpty(
      Array.isArray(nodes) ? nodes : nodes ? [nodes] : void 0
    );
    const nodeLocations = undefinedIfEmpty(
      (_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map((node) => node.loc).filter((loc) => loc != null)
    );
    this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
    this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => loc.start);
    this.locations = positions && source ? positions.map((pos) => getLocation(source, pos)) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => getLocation(loc.source, loc.start));
    const originalExtensions = isObjectLike(
      originalError === null || originalError === void 0 ? void 0 : originalError.extensions
    ) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : void 0;
    this.extensions = (_ref = extensions !== null && extensions !== void 0 ? extensions : originalExtensions) !== null && _ref !== void 0 ? _ref : /* @__PURE__ */ Object.create(null);
    Object.defineProperties(this, {
      message: {
        writable: true,
        enumerable: true
      },
      name: {
        enumerable: false
      },
      nodes: {
        enumerable: false
      },
      source: {
        enumerable: false
      },
      positions: {
        enumerable: false
      },
      originalError: {
        enumerable: false
      }
    });
    if (originalError !== null && originalError !== void 0 && originalError.stack) {
      Object.defineProperty(this, "stack", {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GraphQLError);
    } else {
      Object.defineProperty(this, "stack", {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let output = this.message;
    if (this.nodes) {
      for (const node of this.nodes) {
        if (node.loc) {
          output += "\n\n" + printLocation(node.loc);
        }
      }
    } else if (this.source && this.locations) {
      for (const location2 of this.locations) {
        output += "\n\n" + printSourceLocation(this.source, location2);
      }
    }
    return output;
  }
  toJSON() {
    const formattedError = {
      message: this.message
    };
    if (this.locations != null) {
      formattedError.locations = this.locations;
    }
    if (this.path != null) {
      formattedError.path = this.path;
    }
    if (this.extensions != null && Object.keys(this.extensions).length > 0) {
      formattedError.extensions = this.extensions;
    }
    return formattedError;
  }
}
function undefinedIfEmpty(array) {
  return array === void 0 || array.length === 0 ? void 0 : array;
}
function syntaxError(source, position, description) {
  return new GraphQLError(`Syntax Error: ${description}`, {
    source,
    positions: [position]
  });
}
class Location {
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The Token at which this Node begins.
   */
  /**
   * The Token at which this Node ends.
   */
  /**
   * The Source document the AST represents.
   */
  constructor(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  }
}
class Token {
  /**
   * The kind of Token.
   */
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The 1-indexed line number on which this Token appears.
   */
  /**
   * The 1-indexed column number at which this Token begins.
   */
  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */
  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  constructor(kind, start, end, line, column, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  }
}
const QueryDocumentKeys = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
};
const kindValues = new Set(Object.keys(QueryDocumentKeys));
function isNode(maybeNode) {
  const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
  return typeof maybeKind === "string" && kindValues.has(maybeKind);
}
var OperationTypeNode;
(function(OperationTypeNode2) {
  OperationTypeNode2["QUERY"] = "query";
  OperationTypeNode2["MUTATION"] = "mutation";
  OperationTypeNode2["SUBSCRIPTION"] = "subscription";
})(OperationTypeNode || (OperationTypeNode = {}));
var DirectiveLocation;
(function(DirectiveLocation2) {
  DirectiveLocation2["QUERY"] = "QUERY";
  DirectiveLocation2["MUTATION"] = "MUTATION";
  DirectiveLocation2["SUBSCRIPTION"] = "SUBSCRIPTION";
  DirectiveLocation2["FIELD"] = "FIELD";
  DirectiveLocation2["FRAGMENT_DEFINITION"] = "FRAGMENT_DEFINITION";
  DirectiveLocation2["FRAGMENT_SPREAD"] = "FRAGMENT_SPREAD";
  DirectiveLocation2["INLINE_FRAGMENT"] = "INLINE_FRAGMENT";
  DirectiveLocation2["VARIABLE_DEFINITION"] = "VARIABLE_DEFINITION";
  DirectiveLocation2["SCHEMA"] = "SCHEMA";
  DirectiveLocation2["SCALAR"] = "SCALAR";
  DirectiveLocation2["OBJECT"] = "OBJECT";
  DirectiveLocation2["FIELD_DEFINITION"] = "FIELD_DEFINITION";
  DirectiveLocation2["ARGUMENT_DEFINITION"] = "ARGUMENT_DEFINITION";
  DirectiveLocation2["INTERFACE"] = "INTERFACE";
  DirectiveLocation2["UNION"] = "UNION";
  DirectiveLocation2["ENUM"] = "ENUM";
  DirectiveLocation2["ENUM_VALUE"] = "ENUM_VALUE";
  DirectiveLocation2["INPUT_OBJECT"] = "INPUT_OBJECT";
  DirectiveLocation2["INPUT_FIELD_DEFINITION"] = "INPUT_FIELD_DEFINITION";
})(DirectiveLocation || (DirectiveLocation = {}));
var Kind;
(function(Kind2) {
  Kind2["NAME"] = "Name";
  Kind2["DOCUMENT"] = "Document";
  Kind2["OPERATION_DEFINITION"] = "OperationDefinition";
  Kind2["VARIABLE_DEFINITION"] = "VariableDefinition";
  Kind2["SELECTION_SET"] = "SelectionSet";
  Kind2["FIELD"] = "Field";
  Kind2["ARGUMENT"] = "Argument";
  Kind2["FRAGMENT_SPREAD"] = "FragmentSpread";
  Kind2["INLINE_FRAGMENT"] = "InlineFragment";
  Kind2["FRAGMENT_DEFINITION"] = "FragmentDefinition";
  Kind2["VARIABLE"] = "Variable";
  Kind2["INT"] = "IntValue";
  Kind2["FLOAT"] = "FloatValue";
  Kind2["STRING"] = "StringValue";
  Kind2["BOOLEAN"] = "BooleanValue";
  Kind2["NULL"] = "NullValue";
  Kind2["ENUM"] = "EnumValue";
  Kind2["LIST"] = "ListValue";
  Kind2["OBJECT"] = "ObjectValue";
  Kind2["OBJECT_FIELD"] = "ObjectField";
  Kind2["DIRECTIVE"] = "Directive";
  Kind2["NAMED_TYPE"] = "NamedType";
  Kind2["LIST_TYPE"] = "ListType";
  Kind2["NON_NULL_TYPE"] = "NonNullType";
  Kind2["SCHEMA_DEFINITION"] = "SchemaDefinition";
  Kind2["OPERATION_TYPE_DEFINITION"] = "OperationTypeDefinition";
  Kind2["SCALAR_TYPE_DEFINITION"] = "ScalarTypeDefinition";
  Kind2["OBJECT_TYPE_DEFINITION"] = "ObjectTypeDefinition";
  Kind2["FIELD_DEFINITION"] = "FieldDefinition";
  Kind2["INPUT_VALUE_DEFINITION"] = "InputValueDefinition";
  Kind2["INTERFACE_TYPE_DEFINITION"] = "InterfaceTypeDefinition";
  Kind2["UNION_TYPE_DEFINITION"] = "UnionTypeDefinition";
  Kind2["ENUM_TYPE_DEFINITION"] = "EnumTypeDefinition";
  Kind2["ENUM_VALUE_DEFINITION"] = "EnumValueDefinition";
  Kind2["INPUT_OBJECT_TYPE_DEFINITION"] = "InputObjectTypeDefinition";
  Kind2["DIRECTIVE_DEFINITION"] = "DirectiveDefinition";
  Kind2["SCHEMA_EXTENSION"] = "SchemaExtension";
  Kind2["SCALAR_TYPE_EXTENSION"] = "ScalarTypeExtension";
  Kind2["OBJECT_TYPE_EXTENSION"] = "ObjectTypeExtension";
  Kind2["INTERFACE_TYPE_EXTENSION"] = "InterfaceTypeExtension";
  Kind2["UNION_TYPE_EXTENSION"] = "UnionTypeExtension";
  Kind2["ENUM_TYPE_EXTENSION"] = "EnumTypeExtension";
  Kind2["INPUT_OBJECT_TYPE_EXTENSION"] = "InputObjectTypeExtension";
})(Kind || (Kind = {}));
function isWhiteSpace(code) {
  return code === 9 || code === 32;
}
function isDigit(code) {
  return code >= 48 && code <= 57;
}
function isLetter(code) {
  return code >= 97 && code <= 122 || // A-Z
  code >= 65 && code <= 90;
}
function isNameStart(code) {
  return isLetter(code) || code === 95;
}
function isNameContinue(code) {
  return isLetter(code) || isDigit(code) || code === 95;
}
function dedentBlockStringLines(lines) {
  var _firstNonEmptyLine2;
  let commonIndent = Number.MAX_SAFE_INTEGER;
  let firstNonEmptyLine = null;
  let lastNonEmptyLine = -1;
  for (let i = 0; i < lines.length; ++i) {
    var _firstNonEmptyLine;
    const line = lines[i];
    const indent2 = leadingWhitespace(line);
    if (indent2 === line.length) {
      continue;
    }
    firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i;
    lastNonEmptyLine = i;
    if (i !== 0 && indent2 < commonIndent) {
      commonIndent = indent2;
    }
  }
  return lines.map((line, i) => i === 0 ? line : line.slice(commonIndent)).slice(
    (_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0,
    lastNonEmptyLine + 1
  );
}
function leadingWhitespace(str) {
  let i = 0;
  while (i < str.length && isWhiteSpace(str.charCodeAt(i))) {
    ++i;
  }
  return i;
}
function printBlockString(value, options) {
  const escapedValue = value.replace(/"""/g, '\\"""');
  const lines = escapedValue.split(/\r\n|[\n\r]/g);
  const isSingleLine = lines.length === 1;
  const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line) => line.length === 0 || isWhiteSpace(line.charCodeAt(0)));
  const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""');
  const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
  const hasTrailingSlash2 = value.endsWith("\\");
  const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash2;
  const printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && // add leading and trailing new lines only if it improves readability
  (!isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
  let result = "";
  const skipLeadingNewLine = isSingleLine && isWhiteSpace(value.charCodeAt(0));
  if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) {
    result += "\n";
  }
  result += escapedValue;
  if (printAsMultipleLines || forceTrailingNewline) {
    result += "\n";
  }
  return '"""' + result + '"""';
}
var TokenKind;
(function(TokenKind2) {
  TokenKind2["SOF"] = "<SOF>";
  TokenKind2["EOF"] = "<EOF>";
  TokenKind2["BANG"] = "!";
  TokenKind2["DOLLAR"] = "$";
  TokenKind2["AMP"] = "&";
  TokenKind2["PAREN_L"] = "(";
  TokenKind2["PAREN_R"] = ")";
  TokenKind2["SPREAD"] = "...";
  TokenKind2["COLON"] = ":";
  TokenKind2["EQUALS"] = "=";
  TokenKind2["AT"] = "@";
  TokenKind2["BRACKET_L"] = "[";
  TokenKind2["BRACKET_R"] = "]";
  TokenKind2["BRACE_L"] = "{";
  TokenKind2["PIPE"] = "|";
  TokenKind2["BRACE_R"] = "}";
  TokenKind2["NAME"] = "Name";
  TokenKind2["INT"] = "Int";
  TokenKind2["FLOAT"] = "Float";
  TokenKind2["STRING"] = "String";
  TokenKind2["BLOCK_STRING"] = "BlockString";
  TokenKind2["COMMENT"] = "Comment";
})(TokenKind || (TokenKind = {}));
class Lexer {
  /**
   * The previously focused non-ignored token.
   */
  /**
   * The currently focused non-ignored token.
   */
  /**
   * The (1-indexed) line containing the current token.
   */
  /**
   * The character offset at which the current line begins.
   */
  constructor(source) {
    const startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */
  advance() {
    this.lastToken = this.token;
    const token = this.token = this.lookahead();
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  lookahead() {
    let token = this.token;
    if (token.kind !== TokenKind.EOF) {
      do {
        if (token.next) {
          token = token.next;
        } else {
          const nextToken = readNextToken(this, token.end);
          token.next = nextToken;
          nextToken.prev = token;
          token = nextToken;
        }
      } while (token.kind === TokenKind.COMMENT);
    }
    return token;
  }
}
function isPunctuatorTokenKind(kind) {
  return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
}
function isUnicodeScalarValue(code) {
  return code >= 0 && code <= 55295 || code >= 57344 && code <= 1114111;
}
function isSupplementaryCodePoint(body, location2) {
  return isLeadingSurrogate(body.charCodeAt(location2)) && isTrailingSurrogate(body.charCodeAt(location2 + 1));
}
function isLeadingSurrogate(code) {
  return code >= 55296 && code <= 56319;
}
function isTrailingSurrogate(code) {
  return code >= 56320 && code <= 57343;
}
function printCodePointAt(lexer, location2) {
  const code = lexer.source.body.codePointAt(location2);
  if (code === void 0) {
    return TokenKind.EOF;
  } else if (code >= 32 && code <= 126) {
    const char = String.fromCodePoint(code);
    return char === '"' ? `'"'` : `"${char}"`;
  }
  return "U+" + code.toString(16).toUpperCase().padStart(4, "0");
}
function createToken(lexer, kind, start, end, value) {
  const line = lexer.line;
  const col = 1 + start - lexer.lineStart;
  return new Token(kind, start, end, line, col, value);
}
function readNextToken(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    switch (code) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++position;
        continue;
      case 10:
        ++position;
        ++lexer.line;
        lexer.lineStart = position;
        continue;
      case 13:
        if (body.charCodeAt(position + 1) === 10) {
          position += 2;
        } else {
          ++position;
        }
        ++lexer.line;
        lexer.lineStart = position;
        continue;
      case 35:
        return readComment(lexer, position);
      case 33:
        return createToken(lexer, TokenKind.BANG, position, position + 1);
      case 36:
        return createToken(lexer, TokenKind.DOLLAR, position, position + 1);
      case 38:
        return createToken(lexer, TokenKind.AMP, position, position + 1);
      case 40:
        return createToken(lexer, TokenKind.PAREN_L, position, position + 1);
      case 41:
        return createToken(lexer, TokenKind.PAREN_R, position, position + 1);
      case 46:
        if (body.charCodeAt(position + 1) === 46 && body.charCodeAt(position + 2) === 46) {
          return createToken(lexer, TokenKind.SPREAD, position, position + 3);
        }
        break;
      case 58:
        return createToken(lexer, TokenKind.COLON, position, position + 1);
      case 61:
        return createToken(lexer, TokenKind.EQUALS, position, position + 1);
      case 64:
        return createToken(lexer, TokenKind.AT, position, position + 1);
      case 91:
        return createToken(lexer, TokenKind.BRACKET_L, position, position + 1);
      case 93:
        return createToken(lexer, TokenKind.BRACKET_R, position, position + 1);
      case 123:
        return createToken(lexer, TokenKind.BRACE_L, position, position + 1);
      case 124:
        return createToken(lexer, TokenKind.PIPE, position, position + 1);
      case 125:
        return createToken(lexer, TokenKind.BRACE_R, position, position + 1);
      case 34:
        if (body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
          return readBlockString(lexer, position);
        }
        return readString(lexer, position);
    }
    if (isDigit(code) || code === 45) {
      return readNumber(lexer, position, code);
    }
    if (isNameStart(code)) {
      return readName(lexer, position);
    }
    throw syntaxError(
      lexer.source,
      position,
      code === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position) ? `Unexpected character: ${printCodePointAt(lexer, position)}.` : `Invalid character: ${printCodePointAt(lexer, position)}.`
    );
  }
  return createToken(lexer, TokenKind.EOF, bodyLength, bodyLength);
}
function readComment(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 10 || code === 13) {
      break;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      break;
    }
  }
  return createToken(
    lexer,
    TokenKind.COMMENT,
    start,
    position,
    body.slice(start + 1, position)
  );
}
function readNumber(lexer, start, firstCode) {
  const body = lexer.source.body;
  let position = start;
  let code = firstCode;
  let isFloat = false;
  if (code === 45) {
    code = body.charCodeAt(++position);
  }
  if (code === 48) {
    code = body.charCodeAt(++position);
    if (isDigit(code)) {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid number, unexpected digit after 0: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  } else {
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 46) {
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 69 || code === 101) {
    isFloat = true;
    code = body.charCodeAt(++position);
    if (code === 43 || code === 45) {
      code = body.charCodeAt(++position);
    }
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 46 || isNameStart(code)) {
    throw syntaxError(
      lexer.source,
      position,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        position
      )}.`
    );
  }
  return createToken(
    lexer,
    isFloat ? TokenKind.FLOAT : TokenKind.INT,
    start,
    position,
    body.slice(start, position)
  );
}
function readDigits(lexer, start, firstCode) {
  if (!isDigit(firstCode)) {
    throw syntaxError(
      lexer.source,
      start,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        start
      )}.`
    );
  }
  const body = lexer.source.body;
  let position = start + 1;
  while (isDigit(body.charCodeAt(position))) {
    ++position;
  }
  return position;
}
function readString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  let chunkStart = position;
  let value = "";
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return createToken(lexer, TokenKind.STRING, start, position + 1, value);
    }
    if (code === 92) {
      value += body.slice(chunkStart, position);
      const escape = body.charCodeAt(position + 1) === 117 ? body.charCodeAt(position + 2) === 123 ? readEscapedUnicodeVariableWidth(lexer, position) : readEscapedUnicodeFixedWidth(lexer, position) : readEscapedCharacter(lexer, position);
      value += escape.value;
      position += escape.size;
      chunkStart = position;
      continue;
    }
    if (code === 10 || code === 13) {
      break;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  }
  throw syntaxError(lexer.source, position, "Unterminated string.");
}
function readEscapedUnicodeVariableWidth(lexer, position) {
  const body = lexer.source.body;
  let point = 0;
  let size = 3;
  while (size < 12) {
    const code = body.charCodeAt(position + size++);
    if (code === 125) {
      if (size < 5 || !isUnicodeScalarValue(point)) {
        break;
      }
      return {
        value: String.fromCodePoint(point),
        size
      };
    }
    point = point << 4 | readHexDigit(code);
    if (point < 0) {
      break;
    }
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(
      position,
      position + size
    )}".`
  );
}
function readEscapedUnicodeFixedWidth(lexer, position) {
  const body = lexer.source.body;
  const code = read16BitHexCode(body, position + 2);
  if (isUnicodeScalarValue(code)) {
    return {
      value: String.fromCodePoint(code),
      size: 6
    };
  }
  if (isLeadingSurrogate(code)) {
    if (body.charCodeAt(position + 6) === 92 && body.charCodeAt(position + 7) === 117) {
      const trailingCode = read16BitHexCode(body, position + 8);
      if (isTrailingSurrogate(trailingCode)) {
        return {
          value: String.fromCodePoint(code, trailingCode),
          size: 12
        };
      }
    }
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`
  );
}
function read16BitHexCode(body, position) {
  return readHexDigit(body.charCodeAt(position)) << 12 | readHexDigit(body.charCodeAt(position + 1)) << 8 | readHexDigit(body.charCodeAt(position + 2)) << 4 | readHexDigit(body.charCodeAt(position + 3));
}
function readHexDigit(code) {
  return code >= 48 && code <= 57 ? code - 48 : code >= 65 && code <= 70 ? code - 55 : code >= 97 && code <= 102 ? code - 87 : -1;
}
function readEscapedCharacter(lexer, position) {
  const body = lexer.source.body;
  const code = body.charCodeAt(position + 1);
  switch (code) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: "\n",
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid character escape sequence: "${body.slice(
      position,
      position + 2
    )}".`
  );
}
function readBlockString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let lineStart = lexer.lineStart;
  let position = start + 3;
  let chunkStart = position;
  let currentLine = "";
  const blockLines = [];
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      const token = createToken(
        lexer,
        TokenKind.BLOCK_STRING,
        start,
        position + 3,
        // Return a string of the lines joined with U+000A.
        dedentBlockStringLines(blockLines).join("\n")
      );
      lexer.line += blockLines.length - 1;
      lexer.lineStart = lineStart;
      return token;
    }
    if (code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      currentLine += body.slice(chunkStart, position);
      chunkStart = position + 1;
      position += 4;
      continue;
    }
    if (code === 10 || code === 13) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      if (code === 13 && body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }
      currentLine = "";
      chunkStart = position;
      lineStart = position;
      continue;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  }
  throw syntaxError(lexer.source, position, "Unterminated string.");
}
function readName(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (isNameContinue(code)) {
      ++position;
    } else {
      break;
    }
  }
  return createToken(
    lexer,
    TokenKind.NAME,
    start,
    position,
    body.slice(start, position)
  );
}
const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;
function inspect(value) {
  return formatValue(value, []);
}
function formatValue(value, seenValues) {
  switch (typeof value) {
    case "string":
      return JSON.stringify(value);
    case "function":
      return value.name ? `[function ${value.name}]` : "[function]";
    case "object":
      return formatObjectValue(value, seenValues);
    default:
      return String(value);
  }
}
function formatObjectValue(value, previouslySeenValues) {
  if (value === null) {
    return "null";
  }
  if (previouslySeenValues.includes(value)) {
    return "[Circular]";
  }
  const seenValues = [...previouslySeenValues, value];
  if (isJSONable(value)) {
    const jsonValue = value.toJSON();
    if (jsonValue !== value) {
      return typeof jsonValue === "string" ? jsonValue : formatValue(jsonValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }
  return formatObject(value, seenValues);
}
function isJSONable(value) {
  return typeof value.toJSON === "function";
}
function formatObject(object, seenValues) {
  const entries = Object.entries(object);
  if (entries.length === 0) {
    return "{}";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[" + getObjectTag(object) + "]";
  }
  const properties = entries.map(
    ([key, value]) => key + ": " + formatValue(value, seenValues)
  );
  return "{ " + properties.join(", ") + " }";
}
function formatArray(array, seenValues) {
  if (array.length === 0) {
    return "[]";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[Array]";
  }
  const len = Math.min(MAX_ARRAY_LENGTH, array.length);
  const remaining = array.length - len;
  const items = [];
  for (let i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }
  if (remaining === 1) {
    items.push("... 1 more item");
  } else if (remaining > 1) {
    items.push(`... ${remaining} more items`);
  }
  return "[" + items.join(", ") + "]";
}
function getObjectTag(object) {
  const tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
  if (tag === "Object" && typeof object.constructor === "function") {
    const name = object.constructor.name;
    if (typeof name === "string" && name !== "") {
      return name;
    }
  }
  return tag;
}
const instanceOf = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  // eslint-disable-next-line no-undef
  function instanceOf2(value, constructor) {
    return value instanceof constructor;
  } 
);
class Source {
  constructor(body, name = "GraphQL request", locationOffset = {
    line: 1,
    column: 1
  }) {
    typeof body === "string" || devAssert(false, `Body must be a string. Received: ${inspect(body)}.`);
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || devAssert(
      false,
      "line in locationOffset is 1-indexed and must be positive."
    );
    this.locationOffset.column > 0 || devAssert(
      false,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function isSource(source) {
  return instanceOf(source, Source);
}
function parse(source, options) {
  const parser = new Parser(source, options);
  return parser.parseDocument();
}
class Parser {
  constructor(source, options = {}) {
    const sourceObj = isSource(source) ? source : new Source(source);
    this._lexer = new Lexer(sourceObj);
    this._options = options;
    this._tokenCounter = 0;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const token = this.expectToken(TokenKind.NAME);
    return this.node(token, {
      kind: Kind.NAME,
      value: token.value
    });
  }
  // Implements the parsing rules in the Document section.
  /**
   * Document : Definition+
   */
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: Kind.DOCUMENT,
      definitions: this.many(
        TokenKind.SOF,
        this.parseDefinition,
        TokenKind.EOF
      )
    });
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  parseDefinition() {
    if (this.peek(TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    }
    const hasDescription = this.peekDescription();
    const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (hasDescription) {
        throw syntaxError(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      }
      switch (keywordToken.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(keywordToken);
  }
  // Implements the parsing rules in the Operations section.
  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  parseOperationDefinition() {
    const start = this._lexer.token;
    if (this.peek(TokenKind.BRACE_L)) {
      return this.node(start, {
        kind: Kind.OPERATION_DEFINITION,
        operation: OperationTypeNode.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    }
    const operation = this.parseOperationType();
    let name;
    if (this.peek(TokenKind.NAME)) {
      name = this.parseName();
    }
    return this.node(start, {
      kind: Kind.OPERATION_DEFINITION,
      operation,
      name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */
  parseOperationType() {
    const operationToken = this.expectToken(TokenKind.NAME);
    switch (operationToken.value) {
      case "query":
        return OperationTypeNode.QUERY;
      case "mutation":
        return OperationTypeNode.MUTATION;
      case "subscription":
        return OperationTypeNode.SUBSCRIPTION;
    }
    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(
      TokenKind.PAREN_L,
      this.parseVariableDefinition,
      TokenKind.PAREN_R
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const start = this._lexer.token;
    this.expectToken(TokenKind.DOLLAR);
    return this.node(start, {
      kind: Kind.VARIABLE,
      name: this.parseName()
    });
  }
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: Kind.SELECTION_SET,
      selections: this.many(
        TokenKind.BRACE_L,
        this.parseSelection,
        TokenKind.BRACE_R
      )
    });
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  parseSelection() {
    return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const start = this._lexer.token;
    const nameOrAlias = this.parseName();
    let alias;
    let name;
    if (this.expectOptionalToken(TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }
    return this.node(start, {
      kind: Kind.FIELD,
      alias,
      name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(isConst) {
    const item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(isConst = false) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return this.node(start, {
      kind: Kind.ARGUMENT,
      name,
      value: this.parseValueLiteral(isConst)
    });
  }
  parseConstArgument() {
    return this.parseArgument(true);
  }
  // Implements the parsing rules in the Fragments section.
  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  parseFragment() {
    const start = this._lexer.token;
    this.expectToken(TokenKind.SPREAD);
    const hasTypeCondition = this.expectOptionalKeyword("on");
    if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
      return this.node(start, {
        kind: Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false)
      });
    }
    return this.node(start, {
      kind: Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  parseFragmentDefinition() {
    const start = this._lexer.token;
    this.expectKeyword("fragment");
    if (this._options.allowLegacyFragmentVariables === true) {
      return this.node(start, {
        kind: Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet()
      });
    }
    return this.node(start, {
      kind: Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentName : Name but not `on`
   */
  parseFragmentName() {
    if (this._lexer.token.value === "on") {
      throw this.unexpected();
    }
    return this.parseName();
  }
  // Implements the parsing rules in the Values section.
  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseValueLiteral(isConst) {
    const token = this._lexer.token;
    switch (token.kind) {
      case TokenKind.BRACKET_L:
        return this.parseList(isConst);
      case TokenKind.BRACE_L:
        return this.parseObject(isConst);
      case TokenKind.INT:
        this.advanceLexer();
        return this.node(token, {
          kind: Kind.INT,
          value: token.value
        });
      case TokenKind.FLOAT:
        this.advanceLexer();
        return this.node(token, {
          kind: Kind.FLOAT,
          value: token.value
        });
      case TokenKind.STRING:
      case TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();
      case TokenKind.NAME:
        this.advanceLexer();
        switch (token.value) {
          case "true":
            return this.node(token, {
              kind: Kind.BOOLEAN,
              value: true
            });
          case "false":
            return this.node(token, {
              kind: Kind.BOOLEAN,
              value: false
            });
          case "null":
            return this.node(token, {
              kind: Kind.NULL
            });
          default:
            return this.node(token, {
              kind: Kind.ENUM,
              value: token.value
            });
        }
      case TokenKind.DOLLAR:
        if (isConst) {
          this.expectToken(TokenKind.DOLLAR);
          if (this._lexer.token.kind === TokenKind.NAME) {
            const varName = this._lexer.token.value;
            throw syntaxError(
              this._lexer.source,
              token.start,
              `Unexpected variable "$${varName}" in constant value.`
            );
          } else {
            throw this.unexpected(token);
          }
        }
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(true);
  }
  parseStringLiteral() {
    const token = this._lexer.token;
    this.advanceLexer();
    return this.node(token, {
      kind: Kind.STRING,
      value: token.value,
      block: token.kind === TokenKind.BLOCK_STRING
    });
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  parseList(isConst) {
    const item = () => this.parseValueLiteral(isConst);
    return this.node(this._lexer.token, {
      kind: Kind.LIST,
      values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R)
    });
  }
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */
  parseObject(isConst) {
    const item = () => this.parseObjectField(isConst);
    return this.node(this._lexer.token, {
      kind: Kind.OBJECT,
      fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(isConst) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return this.node(start, {
      kind: Kind.OBJECT_FIELD,
      name,
      value: this.parseValueLiteral(isConst)
    });
  }
  // Implements the parsing rules in the Directives section.
  /**
   * Directives[Const] : Directive[?Const]+
   */
  parseDirectives(isConst) {
    const directives = [];
    while (this.peek(TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }
    return directives;
  }
  parseConstDirectives() {
    return this.parseDirectives(true);
  }
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */
  parseDirective(isConst) {
    const start = this._lexer.token;
    this.expectToken(TokenKind.AT);
    return this.node(start, {
      kind: Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst)
    });
  }
  // Implements the parsing rules in the Types section.
  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  parseTypeReference() {
    const start = this._lexer.token;
    let type;
    if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
      const innerType = this.parseTypeReference();
      this.expectToken(TokenKind.BRACKET_R);
      type = this.node(start, {
        kind: Kind.LIST_TYPE,
        type: innerType
      });
    } else {
      type = this.parseNamedType();
    }
    if (this.expectOptionalToken(TokenKind.BANG)) {
      return this.node(start, {
        kind: Kind.NON_NULL_TYPE,
        type
      });
    }
    return type;
  }
  /**
   * NamedType : Name
   */
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: Kind.NAMED_TYPE,
      name: this.parseName()
    });
  }
  // Implements the parsing rules in the Type Definition section.
  peekDescription() {
    return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */
  parseSchemaDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("schema");
    const directives = this.parseConstDirectives();
    const operationTypes = this.many(
      TokenKind.BRACE_L,
      this.parseOperationTypeDefinition,
      TokenKind.BRACE_R
    );
    return this.node(start, {
      kind: Kind.SCHEMA_DEFINITION,
      description,
      directives,
      operationTypes
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  parseOperationTypeDefinition() {
    const start = this._lexer.token;
    const operation = this.parseOperationType();
    this.expectToken(TokenKind.COLON);
    const type = this.parseNamedType();
    return this.node(start, {
      kind: Kind.OPERATION_TYPE_DEFINITION,
      operation,
      type
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  parseScalarTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("scalar");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.SCALAR_TYPE_DEFINITION,
      description,
      name,
      directives
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  parseObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("type");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: Kind.OBJECT_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(TokenKind.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseFieldDefinition,
      TokenKind.BRACE_R
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    this.expectToken(TokenKind.COLON);
    const type = this.parseTypeReference();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.FIELD_DEFINITION,
      description,
      name,
      arguments: args,
      type,
      directives
    });
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  parseArgumentDefs() {
    return this.optionalMany(
      TokenKind.PAREN_L,
      this.parseInputValueDef,
      TokenKind.PAREN_R
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    const type = this.parseTypeReference();
    let defaultValue;
    if (this.expectOptionalToken(TokenKind.EQUALS)) {
      defaultValue = this.parseConstValueLiteral();
    }
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.INPUT_VALUE_DEFINITION,
      description,
      name,
      type,
      defaultValue,
      directives
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  parseInterfaceTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("interface");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: Kind.INTERFACE_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  parseUnionTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("union");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types = this.parseUnionMemberTypes();
    return this.node(start, {
      kind: Kind.UNION_TYPE_DEFINITION,
      description,
      name,
      directives,
      types
    });
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  parseUnionMemberTypes() {
    return this.expectOptionalToken(TokenKind.EQUALS) ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  parseEnumTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("enum");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();
    return this.node(start, {
      kind: Kind.ENUM_TYPE_DEFINITION,
      description,
      name,
      directives,
      values
    });
  }
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */
  parseEnumValuesDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseEnumValueDefinition,
      TokenKind.BRACE_R
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseEnumValueName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.ENUM_VALUE_DEFINITION,
      description,
      name,
      directives
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") {
      throw syntaxError(
        this._lexer.source,
        this._lexer.token.start,
        `${getTokenDesc(
          this._lexer.token
        )} is reserved and cannot be used for an enum value.`
      );
    }
    return this.parseName();
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  parseInputObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("input");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();
    return this.node(start, {
      kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description,
      name,
      directives,
      fields
    });
  }
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */
  parseInputFieldsDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseInputValueDef,
      TokenKind.BRACE_R
    );
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  parseTypeSystemExtension() {
    const keywordToken = this._lexer.lookahead();
    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    }
    throw this.unexpected(keywordToken);
  }
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */
  parseSchemaExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("schema");
    const directives = this.parseConstDirectives();
    const operationTypes = this.optionalMany(
      TokenKind.BRACE_L,
      this.parseOperationTypeDefinition,
      TokenKind.BRACE_R
    );
    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.SCHEMA_EXTENSION,
      directives,
      operationTypes
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  parseScalarTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("scalar");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    if (directives.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.SCALAR_TYPE_EXTENSION,
      name,
      directives
    });
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  parseObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("type");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.OBJECT_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  parseInterfaceTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("interface");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.INTERFACE_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  parseUnionTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("union");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types = this.parseUnionMemberTypes();
    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.UNION_TYPE_EXTENSION,
      name,
      directives,
      types
    });
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  parseEnumTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("enum");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();
    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.ENUM_TYPE_EXTENSION,
      name,
      directives,
      values
    });
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  parseInputObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("input");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();
    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name,
      directives,
      fields
    });
  }
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */
  parseDirectiveDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("directive");
    this.expectToken(TokenKind.AT);
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    const repeatable = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const locations = this.parseDirectiveLocations();
    return this.node(start, {
      kind: Kind.DIRECTIVE_DEFINITION,
      description,
      name,
      arguments: args,
      repeatable,
      locations
    });
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  parseDirectiveLocations() {
    return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  parseDirectiveLocation() {
    const start = this._lexer.token;
    const name = this.parseName();
    if (Object.prototype.hasOwnProperty.call(DirectiveLocation, name.value)) {
      return name;
    }
    throw this.unexpected(start);
  }
  // Core parsing utility functions
  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */
  node(startToken, node) {
    if (this._options.noLocation !== true) {
      node.loc = new Location(
        startToken,
        this._lexer.lastToken,
        this._lexer.source
      );
    }
    return node;
  }
  /**
   * Determines if the next token is of a given kind
   */
  peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectToken(kind) {
    const token = this._lexer.token;
    if (token.kind === kind) {
      this.advanceLexer();
      return token;
    }
    throw syntaxError(
      this._lexer.source,
      token.start,
      `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`
    );
  }
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalToken(kind) {
    const token = this._lexer.token;
    if (token.kind === kind) {
      this.advanceLexer();
      return true;
    }
    return false;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectKeyword(value) {
    const token = this._lexer.token;
    if (token.kind === TokenKind.NAME && token.value === value) {
      this.advanceLexer();
    } else {
      throw syntaxError(
        this._lexer.source,
        token.start,
        `Expected "${value}", found ${getTokenDesc(token)}.`
      );
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(value) {
    const token = this._lexer.token;
    if (token.kind === TokenKind.NAME && token.value === value) {
      this.advanceLexer();
      return true;
    }
    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(atToken) {
    const token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return syntaxError(
      this._lexer.source,
      token.start,
      `Unexpected ${getTokenDesc(token)}.`
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];
    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }
    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      const nodes = [];
      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));
      return nodes;
    }
    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];
    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));
    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    const nodes = [];
    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));
    return nodes;
  }
  advanceLexer() {
    const { maxTokens } = this._options;
    const token = this._lexer.advance();
    if (maxTokens !== void 0 && token.kind !== TokenKind.EOF) {
      ++this._tokenCounter;
      if (this._tokenCounter > maxTokens) {
        throw syntaxError(
          this._lexer.source,
          token.start,
          `Document contains more that ${maxTokens} tokens. Parsing aborted.`
        );
      }
    }
  }
}
function getTokenDesc(token) {
  const value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : "");
}
function getTokenKindDesc(kind) {
  return isPunctuatorTokenKind(kind) ? `"${kind}"` : kind;
}
function printString(str) {
  return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
}
const escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function escapedReplacer(str) {
  return escapeSequences[str.charCodeAt(0)];
}
const escapeSequences = [
  "\\u0000",
  "\\u0001",
  "\\u0002",
  "\\u0003",
  "\\u0004",
  "\\u0005",
  "\\u0006",
  "\\u0007",
  "\\b",
  "\\t",
  "\\n",
  "\\u000B",
  "\\f",
  "\\r",
  "\\u000E",
  "\\u000F",
  "\\u0010",
  "\\u0011",
  "\\u0012",
  "\\u0013",
  "\\u0014",
  "\\u0015",
  "\\u0016",
  "\\u0017",
  "\\u0018",
  "\\u0019",
  "\\u001A",
  "\\u001B",
  "\\u001C",
  "\\u001D",
  "\\u001E",
  "\\u001F",
  "",
  "",
  '\\"',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 2F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 3F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 4F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  // 5F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 6F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\u007F",
  "\\u0080",
  "\\u0081",
  "\\u0082",
  "\\u0083",
  "\\u0084",
  "\\u0085",
  "\\u0086",
  "\\u0087",
  "\\u0088",
  "\\u0089",
  "\\u008A",
  "\\u008B",
  "\\u008C",
  "\\u008D",
  "\\u008E",
  "\\u008F",
  "\\u0090",
  "\\u0091",
  "\\u0092",
  "\\u0093",
  "\\u0094",
  "\\u0095",
  "\\u0096",
  "\\u0097",
  "\\u0098",
  "\\u0099",
  "\\u009A",
  "\\u009B",
  "\\u009C",
  "\\u009D",
  "\\u009E",
  "\\u009F"
];
const BREAK = Object.freeze({});
function visit(root, visitor, visitorKeys = QueryDocumentKeys) {
  const enterLeaveMap = /* @__PURE__ */ new Map();
  for (const kind of Object.values(Kind)) {
    enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
  }
  let stack = void 0;
  let inArray = Array.isArray(root);
  let keys = [root];
  let index = -1;
  let edits = [];
  let node = root;
  let key = void 0;
  let parent = void 0;
  const path = [];
  const ancestors = [];
  do {
    index++;
    const isLeaving = index === keys.length;
    const isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? void 0 : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
          let editOffset = 0;
          for (const [editKey, editValue] of edits) {
            const arrayKey = editKey - editOffset;
            if (editValue === null) {
              node.splice(arrayKey, 1);
              editOffset++;
            } else {
              node[arrayKey] = editValue;
            }
          }
        } else {
          node = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(node)
          );
          for (const [editKey, editValue] of edits) {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else if (parent) {
      key = inArray ? index : keys[index];
      node = parent[key];
      if (node === null || node === void 0) {
        continue;
      }
      path.push(key);
    }
    let result;
    if (!Array.isArray(node)) {
      var _enterLeaveMap$get, _enterLeaveMap$get2;
      isNode(node) || devAssert(false, `Invalid AST Node: ${inspect(node)}.`);
      const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
      result = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path, ancestors);
      if (result === BREAK) {
        break;
      }
      if (result === false) {
        if (!isLeaving) {
          path.pop();
          continue;
        }
      } else if (result !== void 0) {
        edits.push([key, result]);
        if (!isLeaving) {
          if (isNode(result)) {
            node = result;
          } else {
            path.pop();
            continue;
          }
        }
      }
    }
    if (result === void 0 && isEdited) {
      edits.push([key, node]);
    }
    if (isLeaving) {
      path.pop();
    } else {
      var _node$kind;
      stack = {
        inArray,
        index,
        keys,
        edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== void 0);
  if (edits.length !== 0) {
    return edits[edits.length - 1][1];
  }
  return root;
}
function getEnterLeaveForKind(visitor, kind) {
  const kindVisitor = visitor[kind];
  if (typeof kindVisitor === "object") {
    return kindVisitor;
  } else if (typeof kindVisitor === "function") {
    return {
      enter: kindVisitor,
      leave: void 0
    };
  }
  return {
    enter: visitor.enter,
    leave: visitor.leave
  };
}
function print(ast) {
  return visit(ast, printDocASTReducer);
}
const MAX_LINE_LENGTH = 80;
const printDocASTReducer = {
  Name: {
    leave: (node) => node.value
  },
  Variable: {
    leave: (node) => "$" + node.name
  },
  // Document
  Document: {
    leave: (node) => join(node.definitions, "\n\n")
  },
  OperationDefinition: {
    leave(node) {
      const varDefs = wrap("(", join(node.variableDefinitions, ", "), ")");
      const prefix = join(
        [
          node.operation,
          join([node.name, varDefs]),
          join(node.directives, " ")
        ],
        " "
      );
      return (prefix === "query" ? "" : prefix + " ") + node.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable, type, defaultValue, directives }) => variable + ": " + type + wrap(" = ", defaultValue) + wrap(" ", join(directives, " "))
  },
  SelectionSet: {
    leave: ({ selections }) => block(selections)
  },
  Field: {
    leave({ alias, name, arguments: args, directives, selectionSet }) {
      const prefix = wrap("", alias, ": ") + name;
      let argsLine = prefix + wrap("(", join(args, ", "), ")");
      if (argsLine.length > MAX_LINE_LENGTH) {
        argsLine = prefix + wrap("(\n", indent(join(args, "\n")), "\n)");
      }
      return join([argsLine, join(directives, " "), selectionSet], " ");
    }
  },
  Argument: {
    leave: ({ name, value }) => name + ": " + value
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name, directives }) => "..." + name + wrap(" ", join(directives, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition, directives, selectionSet }) => join(
      [
        "...",
        wrap("on ", typeCondition),
        join(directives, " "),
        selectionSet
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name, typeCondition, variableDefinitions, directives, selectionSet }) => (
      // or removed in the future.
      `fragment ${name}${wrap("(", join(variableDefinitions, ", "), ")")} on ${typeCondition} ${wrap("", join(directives, " "), " ")}` + selectionSet
    )
  },
  // Value
  IntValue: {
    leave: ({ value }) => value
  },
  FloatValue: {
    leave: ({ value }) => value
  },
  StringValue: {
    leave: ({ value, block: isBlockString }) => isBlockString ? printBlockString(value) : printString(value)
  },
  BooleanValue: {
    leave: ({ value }) => value ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value }) => value
  },
  ListValue: {
    leave: ({ values }) => "[" + join(values, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields }) => "{" + join(fields, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name, value }) => name + ": " + value
  },
  // Directive
  Directive: {
    leave: ({ name, arguments: args }) => "@" + name + wrap("(", join(args, ", "), ")")
  },
  // Type
  NamedType: {
    leave: ({ name }) => name
  },
  ListType: {
    leave: ({ type }) => "[" + type + "]"
  },
  NonNullType: {
    leave: ({ type }) => type + "!"
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description, directives, operationTypes }) => wrap("", description, "\n") + join(["schema", join(directives, " "), block(operationTypes)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation, type }) => operation + ": " + type
  },
  ScalarTypeDefinition: {
    leave: ({ description, name, directives }) => wrap("", description, "\n") + join(["scalar", name, join(directives, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) => wrap("", description, "\n") + join(
      [
        "type",
        name,
        wrap("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description, name, arguments: args, type, directives }) => wrap("", description, "\n") + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + ": " + type + wrap(" ", join(directives, " "))
  },
  InputValueDefinition: {
    leave: ({ description, name, type, defaultValue, directives }) => wrap("", description, "\n") + join(
      [name + ": " + type, wrap("= ", defaultValue), join(directives, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) => wrap("", description, "\n") + join(
      [
        "interface",
        name,
        wrap("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description, name, directives, types }) => wrap("", description, "\n") + join(
      ["union", name, join(directives, " "), wrap("= ", join(types, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description, name, directives, values }) => wrap("", description, "\n") + join(["enum", name, join(directives, " "), block(values)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description, name, directives }) => wrap("", description, "\n") + join([name, join(directives, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description, name, directives, fields }) => wrap("", description, "\n") + join(["input", name, join(directives, " "), block(fields)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description, name, arguments: args, repeatable, locations }) => wrap("", description, "\n") + "directive @" + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ")
  },
  SchemaExtension: {
    leave: ({ directives, operationTypes }) => join(
      ["extend schema", join(directives, " "), block(operationTypes)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name, directives }) => join(["extend scalar", name, join(directives, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) => join(
      [
        "extend type",
        name,
        wrap("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) => join(
      [
        "extend interface",
        name,
        wrap("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name, directives, types }) => join(
      [
        "extend union",
        name,
        join(directives, " "),
        wrap("= ", join(types, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name, directives, values }) => join(["extend enum", name, join(directives, " "), block(values)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name, directives, fields }) => join(["extend input", name, join(directives, " "), block(fields)], " ")
  }
};
function join(maybeArray, separator = "") {
  var _maybeArray$filter$jo;
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x) => x).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
}
function block(array) {
  return wrap("{\n", indent(join(array, "\n")), "\n}");
}
function wrap(start, maybeString, end = "") {
  return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
}
function indent(str) {
  return wrap("  ", str.replace(/\n/g, "\n  "));
}
function hasMultilineItems(maybeArray) {
  var _maybeArray$some;
  return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str) => str.includes("\n"))) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
}
function isSelectionNode(node) {
  return node.kind === Kind.FIELD || node.kind === Kind.FRAGMENT_SPREAD || node.kind === Kind.INLINE_FRAGMENT;
}
function removeTemporaryGlobals() {
  return typeof Source === "function" ? remove$1() : remove$1();
}
function checkDEV() {
  invariant$1("boolean" === typeof DEV, 39);
}
removeTemporaryGlobals();
checkDEV();
function shouldInclude(_a, variables) {
  var directives = _a.directives;
  if (!directives || !directives.length) {
    return true;
  }
  return getInclusionDirectives(directives).every(function(_a2) {
    var directive = _a2.directive, ifArgument = _a2.ifArgument;
    var evaledValue = false;
    if (ifArgument.value.kind === "Variable") {
      evaledValue = variables && variables[ifArgument.value.name.value];
      invariant$1(evaledValue !== void 0, 40);
    } else {
      evaledValue = ifArgument.value.value;
    }
    return directive.name.value === "skip" ? !evaledValue : evaledValue;
  });
}
function hasDirectives(names, root, all) {
  var nameSet = new Set(names);
  var uniqueCount = nameSet.size;
  visit(root, {
    Directive: function(node) {
      if (nameSet.delete(node.name.value) && (!all || !nameSet.size)) {
        return BREAK;
      }
    }
  });
  return all ? !nameSet.size : nameSet.size < uniqueCount;
}
function hasClientExports(document2) {
  return document2 && hasDirectives(["client", "export"], document2, true);
}
function isInclusionDirective(_a) {
  var value = _a.name.value;
  return value === "skip" || value === "include";
}
function getInclusionDirectives(directives) {
  var result = [];
  if (directives && directives.length) {
    directives.forEach(function(directive) {
      if (!isInclusionDirective(directive))
        return;
      var directiveArguments = directive.arguments;
      directive.name.value;
      invariant$1(directiveArguments && directiveArguments.length === 1, 41);
      var ifArgument = directiveArguments[0];
      invariant$1(ifArgument.name && ifArgument.name.value === "if", 42);
      var ifValue = ifArgument.value;
      invariant$1(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), 43);
      result.push({ directive, ifArgument });
    });
  }
  return result;
}
function getFragmentQueryDocument(document2, fragmentName) {
  var actualFragmentName = fragmentName;
  var fragments = [];
  document2.definitions.forEach(function(definition) {
    if (definition.kind === "OperationDefinition") {
      throw new InvariantError(44);
    }
    if (definition.kind === "FragmentDefinition") {
      fragments.push(definition);
    }
  });
  if (typeof actualFragmentName === "undefined") {
    invariant$1(fragments.length === 1, 45);
    actualFragmentName = fragments[0].name.value;
  }
  var query = __assign(__assign({}, document2), { definitions: __spreadArray([
    {
      kind: "OperationDefinition",
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: actualFragmentName
            }
          }
        ]
      }
    }
  ], document2.definitions, true) });
  return query;
}
function createFragmentMap(fragments) {
  if (fragments === void 0) {
    fragments = [];
  }
  var symTable = {};
  fragments.forEach(function(fragment) {
    symTable[fragment.name.value] = fragment;
  });
  return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
  switch (selection.kind) {
    case "InlineFragment":
      return selection;
    case "FragmentSpread": {
      var fragmentName = selection.name.value;
      if (typeof fragmentMap === "function") {
        return fragmentMap(fragmentName);
      }
      var fragment = fragmentMap && fragmentMap[fragmentName];
      invariant$1(fragment, 46);
      return fragment || null;
    }
    default:
      return null;
  }
}
function isNonNullObject(obj) {
  return obj !== null && typeof obj === "object";
}
function makeReference(id) {
  return { __ref: String(id) };
}
function isReference(obj) {
  return Boolean(obj && typeof obj === "object" && typeof obj.__ref === "string");
}
function isDocumentNode(value) {
  return isNonNullObject(value) && value.kind === "Document" && Array.isArray(value.definitions);
}
function isStringValue(value) {
  return value.kind === "StringValue";
}
function isBooleanValue(value) {
  return value.kind === "BooleanValue";
}
function isIntValue(value) {
  return value.kind === "IntValue";
}
function isFloatValue(value) {
  return value.kind === "FloatValue";
}
function isVariable(value) {
  return value.kind === "Variable";
}
function isObjectValue(value) {
  return value.kind === "ObjectValue";
}
function isListValue(value) {
  return value.kind === "ListValue";
}
function isEnumValue(value) {
  return value.kind === "EnumValue";
}
function isNullValue(value) {
  return value.kind === "NullValue";
}
function valueToObjectRepresentation(argObj, name, value, variables) {
  if (isIntValue(value) || isFloatValue(value)) {
    argObj[name.value] = Number(value.value);
  } else if (isBooleanValue(value) || isStringValue(value)) {
    argObj[name.value] = value.value;
  } else if (isObjectValue(value)) {
    var nestedArgObj_1 = {};
    value.fields.map(function(obj) {
      return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
    });
    argObj[name.value] = nestedArgObj_1;
  } else if (isVariable(value)) {
    var variableValue = (variables || {})[value.name.value];
    argObj[name.value] = variableValue;
  } else if (isListValue(value)) {
    argObj[name.value] = value.values.map(function(listValue) {
      var nestedArgArrayObj = {};
      valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
      return nestedArgArrayObj[name.value];
    });
  } else if (isEnumValue(value)) {
    argObj[name.value] = value.value;
  } else if (isNullValue(value)) {
    argObj[name.value] = null;
  } else {
    throw new InvariantError(55);
  }
}
function storeKeyNameFromField(field, variables) {
  var directivesObj = null;
  if (field.directives) {
    directivesObj = {};
    field.directives.forEach(function(directive) {
      directivesObj[directive.name.value] = {};
      if (directive.arguments) {
        directive.arguments.forEach(function(_a) {
          var name = _a.name, value = _a.value;
          return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
        });
      }
    });
  }
  var argObj = null;
  if (field.arguments && field.arguments.length) {
    argObj = {};
    field.arguments.forEach(function(_a) {
      var name = _a.name, value = _a.value;
      return valueToObjectRepresentation(argObj, name, value, variables);
    });
  }
  return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export"
];
var getStoreKeyName = Object.assign(function(fieldName, args, directives) {
  if (args && directives && directives["connection"] && directives["connection"]["key"]) {
    if (directives["connection"]["filter"] && directives["connection"]["filter"].length > 0) {
      var filterKeys = directives["connection"]["filter"] ? directives["connection"]["filter"] : [];
      filterKeys.sort();
      var filteredArgs_1 = {};
      filterKeys.forEach(function(key) {
        filteredArgs_1[key] = args[key];
      });
      return "".concat(directives["connection"]["key"], "(").concat(stringify(filteredArgs_1), ")");
    } else {
      return directives["connection"]["key"];
    }
  }
  var completeFieldName = fieldName;
  if (args) {
    var stringifiedArgs = stringify(args);
    completeFieldName += "(".concat(stringifiedArgs, ")");
  }
  if (directives) {
    Object.keys(directives).forEach(function(key) {
      if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
        return;
      if (directives[key] && Object.keys(directives[key]).length) {
        completeFieldName += "@".concat(key, "(").concat(stringify(directives[key]), ")");
      } else {
        completeFieldName += "@".concat(key);
      }
    });
  }
  return completeFieldName;
}, {
  setStringify: function(s) {
    var previous = stringify;
    stringify = s;
    return previous;
  }
});
var stringify = function defaultStringify(value) {
  return JSON.stringify(value, stringifyReplacer);
};
function stringifyReplacer(_key, value) {
  if (isNonNullObject(value) && !Array.isArray(value)) {
    value = Object.keys(value).sort().reduce(function(copy, key) {
      copy[key] = value[key];
      return copy;
    }, {});
  }
  return value;
}
function argumentsObjectFromField(field, variables) {
  if (field.arguments && field.arguments.length) {
    var argObj_1 = {};
    field.arguments.forEach(function(_a) {
      var name = _a.name, value = _a.value;
      return valueToObjectRepresentation(argObj_1, name, value, variables);
    });
    return argObj_1;
  }
  return null;
}
function resultKeyNameFromField(field) {
  return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
  if (typeof result.__typename === "string") {
    return result.__typename;
  }
  for (var _i = 0, _a = selectionSet.selections; _i < _a.length; _i++) {
    var selection = _a[_i];
    if (isField(selection)) {
      if (selection.name.value === "__typename") {
        return result[resultKeyNameFromField(selection)];
      }
    } else {
      var typename = getTypenameFromResult(result, getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);
      if (typeof typename === "string") {
        return typename;
      }
    }
  }
}
function isField(selection) {
  return selection.kind === "Field";
}
function isInlineFragment(selection) {
  return selection.kind === "InlineFragment";
}
function checkDocument(doc) {
  invariant$1(doc && doc.kind === "Document", 47);
  var operations = doc.definitions.filter(function(d) {
    return d.kind !== "FragmentDefinition";
  }).map(function(definition) {
    if (definition.kind !== "OperationDefinition") {
      throw new InvariantError(48);
    }
    return definition;
  });
  invariant$1(operations.length <= 1, 49);
  return doc;
}
function getOperationDefinition(doc) {
  checkDocument(doc);
  return doc.definitions.filter(function(definition) {
    return definition.kind === "OperationDefinition";
  })[0];
}
function getOperationName(doc) {
  return doc.definitions.filter(function(definition) {
    return definition.kind === "OperationDefinition" && !!definition.name;
  }).map(function(x) {
    return x.name.value;
  })[0] || null;
}
function getFragmentDefinitions(doc) {
  return doc.definitions.filter(function(definition) {
    return definition.kind === "FragmentDefinition";
  });
}
function getQueryDefinition(doc) {
  var queryDef = getOperationDefinition(doc);
  invariant$1(queryDef && queryDef.operation === "query", 50);
  return queryDef;
}
function getFragmentDefinition(doc) {
  invariant$1(doc.kind === "Document", 51);
  invariant$1(doc.definitions.length <= 1, 52);
  var fragmentDef = doc.definitions[0];
  invariant$1(fragmentDef.kind === "FragmentDefinition", 53);
  return fragmentDef;
}
function getMainDefinition(queryDoc) {
  checkDocument(queryDoc);
  var fragmentDefinition;
  for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
    var definition = _a[_i];
    if (definition.kind === "OperationDefinition") {
      var operation = definition.operation;
      if (operation === "query" || operation === "mutation" || operation === "subscription") {
        return definition;
      }
    }
    if (definition.kind === "FragmentDefinition" && !fragmentDefinition) {
      fragmentDefinition = definition;
    }
  }
  if (fragmentDefinition) {
    return fragmentDefinition;
  }
  throw new InvariantError(54);
}
function getDefaultValues(definition) {
  var defaultValues = /* @__PURE__ */ Object.create(null);
  var defs = definition && definition.variableDefinitions;
  if (defs && defs.length) {
    defs.forEach(function(def) {
      if (def.defaultValue) {
        valueToObjectRepresentation(defaultValues, def.variable.name, def.defaultValue);
      }
    });
  }
  return defaultValues;
}
var isArray = Array.isArray;
function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}
var TYPENAME_FIELD = {
  kind: Kind.FIELD,
  name: {
    kind: Kind.NAME,
    value: "__typename"
  }
};
function isEmpty(op, fragmentMap) {
  return !op || op.selectionSet.selections.every(function(selection) {
    return selection.kind === Kind.FRAGMENT_SPREAD && isEmpty(fragmentMap[selection.name.value], fragmentMap);
  });
}
function nullIfDocIsEmpty(doc) {
  return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc))) ? null : doc;
}
function getDirectiveMatcher(directives) {
  var nameSet = /* @__PURE__ */ new Set();
  var tests = [];
  directives.forEach(function(directive) {
    if (directive.name) {
      nameSet.add(directive.name);
    } else if (directive.test) {
      tests.push(directive.test);
    }
  });
  return function(directive) {
    return nameSet.has(directive.name.value) || tests.some(function(test) {
      return test(directive);
    });
  };
}
function makeInUseGetterFunction(defaultKey) {
  var map = /* @__PURE__ */ new Map();
  return function inUseGetterFunction(key) {
    if (key === void 0) {
      key = defaultKey;
    }
    var inUse = map.get(key);
    if (!inUse) {
      map.set(key, inUse = {
        variables: /* @__PURE__ */ new Set(),
        fragmentSpreads: /* @__PURE__ */ new Set()
      });
    }
    return inUse;
  };
}
function removeDirectivesFromDocument(directives, doc) {
  var getInUseByOperationName = makeInUseGetterFunction("");
  var getInUseByFragmentName = makeInUseGetterFunction("");
  var getInUse = function(ancestors) {
    for (var p = 0, ancestor = void 0; p < ancestors.length && (ancestor = ancestors[p]); ++p) {
      if (isArray(ancestor))
        continue;
      if (ancestor.kind === Kind.OPERATION_DEFINITION) {
        return getInUseByOperationName(ancestor.name && ancestor.name.value);
      }
      if (ancestor.kind === Kind.FRAGMENT_DEFINITION) {
        return getInUseByFragmentName(ancestor.name.value);
      }
    }
    return null;
  };
  var operationCount = 0;
  for (var i = doc.definitions.length - 1; i >= 0; --i) {
    if (doc.definitions[i].kind === Kind.OPERATION_DEFINITION) {
      ++operationCount;
    }
  }
  var directiveMatcher = getDirectiveMatcher(directives);
  var hasRemoveDirective = directives.some(function(directive) {
    return directive.remove;
  });
  var shouldRemoveField = function(nodeDirectives) {
    return hasRemoveDirective && nodeDirectives && nodeDirectives.some(directiveMatcher);
  };
  var originalFragmentDefsByPath = /* @__PURE__ */ new Map();
  var firstVisitMadeChanges = false;
  var fieldOrInlineFragmentVisitor = {
    enter: function(node) {
      if (shouldRemoveField(node.directives)) {
        firstVisitMadeChanges = true;
        return null;
      }
    }
  };
  var docWithoutDirectiveSubtrees = visit(doc, {
    Field: fieldOrInlineFragmentVisitor,
    InlineFragment: fieldOrInlineFragmentVisitor,
    VariableDefinition: {
      enter: function() {
        return false;
      }
    },
    Variable: {
      enter: function(node, _key, _parent, _path, ancestors) {
        var inUse = getInUse(ancestors);
        if (inUse) {
          inUse.variables.add(node.name.value);
        }
      }
    },
    FragmentSpread: {
      enter: function(node, _key, _parent, _path, ancestors) {
        if (shouldRemoveField(node.directives)) {
          firstVisitMadeChanges = true;
          return null;
        }
        var inUse = getInUse(ancestors);
        if (inUse) {
          inUse.fragmentSpreads.add(node.name.value);
        }
      }
    },
    FragmentDefinition: {
      enter: function(node, _key, _parent, path) {
        originalFragmentDefsByPath.set(JSON.stringify(path), node);
      },
      leave: function(node, _key, _parent, path) {
        var originalNode = originalFragmentDefsByPath.get(JSON.stringify(path));
        if (node === originalNode) {
          return node;
        }
        if (operationCount > 0 && node.selectionSet.selections.every(function(selection) {
          return selection.kind === Kind.FIELD && selection.name.value === "__typename";
        })) {
          getInUseByFragmentName(node.name.value).removed = true;
          firstVisitMadeChanges = true;
          return null;
        }
      }
    },
    Directive: {
      leave: function(node) {
        if (directiveMatcher(node)) {
          firstVisitMadeChanges = true;
          return null;
        }
      }
    }
  });
  if (!firstVisitMadeChanges) {
    return doc;
  }
  var populateTransitiveVars = function(inUse) {
    if (!inUse.transitiveVars) {
      inUse.transitiveVars = new Set(inUse.variables);
      if (!inUse.removed) {
        inUse.fragmentSpreads.forEach(function(childFragmentName) {
          populateTransitiveVars(getInUseByFragmentName(childFragmentName)).transitiveVars.forEach(function(varName) {
            inUse.transitiveVars.add(varName);
          });
        });
      }
    }
    return inUse;
  };
  var allFragmentNamesUsed = /* @__PURE__ */ new Set();
  docWithoutDirectiveSubtrees.definitions.forEach(function(def) {
    if (def.kind === Kind.OPERATION_DEFINITION) {
      populateTransitiveVars(getInUseByOperationName(def.name && def.name.value)).fragmentSpreads.forEach(function(childFragmentName) {
        allFragmentNamesUsed.add(childFragmentName);
      });
    } else if (def.kind === Kind.FRAGMENT_DEFINITION && operationCount === 0 && !getInUseByFragmentName(def.name.value).removed) {
      allFragmentNamesUsed.add(def.name.value);
    }
  });
  allFragmentNamesUsed.forEach(function(fragmentName) {
    populateTransitiveVars(getInUseByFragmentName(fragmentName)).fragmentSpreads.forEach(function(childFragmentName) {
      allFragmentNamesUsed.add(childFragmentName);
    });
  });
  var fragmentWillBeRemoved = function(fragmentName) {
    return !!(!allFragmentNamesUsed.has(fragmentName) || getInUseByFragmentName(fragmentName).removed);
  };
  var enterVisitor = {
    enter: function(node) {
      if (fragmentWillBeRemoved(node.name.value)) {
        return null;
      }
    }
  };
  return nullIfDocIsEmpty(visit(docWithoutDirectiveSubtrees, {
    FragmentSpread: enterVisitor,
    FragmentDefinition: enterVisitor,
    OperationDefinition: {
      leave: function(node) {
        if (node.variableDefinitions) {
          var usedVariableNames_1 = populateTransitiveVars(getInUseByOperationName(node.name && node.name.value)).transitiveVars;
          if (usedVariableNames_1.size < node.variableDefinitions.length) {
            return __assign(__assign({}, node), { variableDefinitions: node.variableDefinitions.filter(function(varDef) {
              return usedVariableNames_1.has(varDef.variable.name.value);
            }) });
          }
        }
      }
    }
  }));
}
var addTypenameToDocument = Object.assign(function(doc) {
  return visit(doc, {
    SelectionSet: {
      enter: function(node, _key, parent) {
        if (parent && parent.kind === Kind.OPERATION_DEFINITION) {
          return;
        }
        var selections = node.selections;
        if (!selections) {
          return;
        }
        var skip = selections.some(function(selection) {
          return isField(selection) && (selection.name.value === "__typename" || selection.name.value.lastIndexOf("__", 0) === 0);
        });
        if (skip) {
          return;
        }
        var field = parent;
        if (isField(field) && field.directives && field.directives.some(function(d) {
          return d.name.value === "export";
        })) {
          return;
        }
        return __assign(__assign({}, node), { selections: __spreadArray(__spreadArray([], selections, true), [TYPENAME_FIELD], false) });
      }
    }
  });
}, {
  added: function(field) {
    return field === TYPENAME_FIELD;
  }
});
var connectionRemoveConfig = {
  test: function(directive) {
    var willRemove = directive.name.value === "connection";
    if (willRemove) {
      if (!directive.arguments || !directive.arguments.some(function(arg) {
        return arg.name.value === "key";
      }))
        ;
    }
    return willRemove;
  }
};
function removeConnectionDirectiveFromDocument(doc) {
  return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
}
function buildQueryFromSelectionSet(document2) {
  var definition = getMainDefinition(document2);
  var definitionOperation = definition.operation;
  if (definitionOperation === "query") {
    return document2;
  }
  var modifiedDoc = visit(document2, {
    OperationDefinition: {
      enter: function(node) {
        return __assign(__assign({}, node), { operation: "query" });
      }
    }
  });
  return modifiedDoc;
}
function removeClientSetsFromDocument(document2) {
  checkDocument(document2);
  var modifiedDoc = removeDirectivesFromDocument([
    {
      test: function(directive) {
        return directive.name.value === "client";
      },
      remove: true
    }
  ], document2);
  return modifiedDoc;
}
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function mergeDeep() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
  var target = sources[0] || {};
  var count = sources.length;
  if (count > 1) {
    var merger = new DeepMerger();
    for (var i = 1; i < count; ++i) {
      target = merger.merge(target, sources[i]);
    }
  }
  return target;
}
var defaultReconciler = function(target, source, property) {
  return this.merge(target[property], source[property]);
};
var DeepMerger = function() {
  function DeepMerger2(reconciler) {
    if (reconciler === void 0) {
      reconciler = defaultReconciler;
    }
    this.reconciler = reconciler;
    this.isObject = isNonNullObject;
    this.pastCopies = /* @__PURE__ */ new Set();
  }
  DeepMerger2.prototype.merge = function(target, source) {
    var _this = this;
    var context = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      context[_i - 2] = arguments[_i];
    }
    if (isNonNullObject(source) && isNonNullObject(target)) {
      Object.keys(source).forEach(function(sourceKey) {
        if (hasOwnProperty$2.call(target, sourceKey)) {
          var targetValue = target[sourceKey];
          if (source[sourceKey] !== targetValue) {
            var result = _this.reconciler.apply(_this, __spreadArray([target, source, sourceKey], context, false));
            if (result !== targetValue) {
              target = _this.shallowCopyForMerge(target);
              target[sourceKey] = result;
            }
          }
        } else {
          target = _this.shallowCopyForMerge(target);
          target[sourceKey] = source[sourceKey];
        }
      });
      return target;
    }
    return source;
  };
  DeepMerger2.prototype.shallowCopyForMerge = function(value) {
    if (isNonNullObject(value)) {
      if (!this.pastCopies.has(value)) {
        if (Array.isArray(value)) {
          value = value.slice(0);
        } else {
          value = __assign({ __proto__: Object.getPrototypeOf(value) }, value);
        }
        this.pastCopies.add(value);
      }
    }
    return value;
  };
  return DeepMerger2;
}();
var toString = Object.prototype.toString;
function cloneDeep(value) {
  return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
  switch (toString.call(val)) {
    case "[object Array]": {
      seen = seen || /* @__PURE__ */ new Map();
      if (seen.has(val))
        return seen.get(val);
      var copy_1 = val.slice(0);
      seen.set(val, copy_1);
      copy_1.forEach(function(child, i) {
        copy_1[i] = cloneDeepHelper(child, seen);
      });
      return copy_1;
    }
    case "[object Object]": {
      seen = seen || /* @__PURE__ */ new Map();
      if (seen.has(val))
        return seen.get(val);
      var copy_2 = Object.create(Object.getPrototypeOf(val));
      seen.set(val, copy_2);
      Object.keys(val).forEach(function(key) {
        copy_2[key] = cloneDeepHelper(val[key], seen);
      });
      return copy_2;
    }
    default:
      return val;
  }
}
function maybeDeepFreeze(obj) {
  return obj;
}
function iterateObserversSafely(observers, method, argument) {
  var observersWithMethod = [];
  observers.forEach(function(obs) {
    return obs[method] && observersWithMethod.push(obs);
  });
  observersWithMethod.forEach(function(obs) {
    return obs[method](argument);
  });
}
function asyncMap(observable, mapFn, catchFn) {
  return new Observable(function(observer) {
    var next = observer.next, error = observer.error, complete = observer.complete;
    var activeCallbackCount = 0;
    var completed = false;
    var promiseQueue = {
      then: function(callback) {
        return new Promise(function(resolve) {
          return resolve(callback());
        });
      }
    };
    function makeCallback(examiner, delegate) {
      if (examiner) {
        return function(arg) {
          ++activeCallbackCount;
          var both = function() {
            return examiner(arg);
          };
          promiseQueue = promiseQueue.then(both, both).then(function(result) {
            --activeCallbackCount;
            next && next.call(observer, result);
            if (completed) {
              handler2.complete();
            }
          }, function(error2) {
            --activeCallbackCount;
            throw error2;
          }).catch(function(caught) {
            error && error.call(observer, caught);
          });
        };
      } else {
        return function(arg) {
          return delegate && delegate.call(observer, arg);
        };
      }
    }
    var handler2 = {
      next: makeCallback(mapFn, next),
      error: makeCallback(catchFn, error),
      complete: function() {
        completed = true;
        if (!activeCallbackCount) {
          complete && complete.call(observer);
        }
      }
    };
    var sub = observable.subscribe(handler2);
    return function() {
      return sub.unsubscribe();
    };
  });
}
var canUseWeakMap = typeof WeakMap === "function" && maybe$1(function() {
  return navigator.product;
}) !== "ReactNative";
var canUseWeakSet = typeof WeakSet === "function";
var canUseSymbol = typeof Symbol === "function" && typeof Symbol.for === "function";
var canUseAsyncIteratorSymbol = canUseSymbol && Symbol.asyncIterator;
typeof maybe$1(function() {
  return window.document.createElement;
}) === "function";
maybe$1(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
}) || false;
function fixObservableSubclass(subclass) {
  function set2(key) {
    Object.defineProperty(subclass, key, { value: Observable });
  }
  if (canUseSymbol && Symbol.species) {
    set2(Symbol.species);
  }
  set2("@@species");
  return subclass;
}
function isPromiseLike(value) {
  return value && typeof value.then === "function";
}
var Concast = function(_super) {
  __extends(Concast2, _super);
  function Concast2(sources) {
    var _this = _super.call(this, function(observer) {
      _this.addObserver(observer);
      return function() {
        return _this.removeObserver(observer);
      };
    }) || this;
    _this.observers = /* @__PURE__ */ new Set();
    _this.promise = new Promise(function(resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
    _this.handlers = {
      next: function(result) {
        if (_this.sub !== null) {
          _this.latest = ["next", result];
          _this.notify("next", result);
          iterateObserversSafely(_this.observers, "next", result);
        }
      },
      error: function(error) {
        var sub = _this.sub;
        if (sub !== null) {
          if (sub)
            setTimeout(function() {
              return sub.unsubscribe();
            });
          _this.sub = null;
          _this.latest = ["error", error];
          _this.reject(error);
          _this.notify("error", error);
          iterateObserversSafely(_this.observers, "error", error);
        }
      },
      complete: function() {
        var _a = _this, sub = _a.sub, _b = _a.sources, sources2 = _b === void 0 ? [] : _b;
        if (sub !== null) {
          var value = sources2.shift();
          if (!value) {
            if (sub)
              setTimeout(function() {
                return sub.unsubscribe();
              });
            _this.sub = null;
            if (_this.latest && _this.latest[0] === "next") {
              _this.resolve(_this.latest[1]);
            } else {
              _this.resolve();
            }
            _this.notify("complete");
            iterateObserversSafely(_this.observers, "complete");
          } else if (isPromiseLike(value)) {
            value.then(function(obs) {
              return _this.sub = obs.subscribe(_this.handlers);
            });
          } else {
            _this.sub = value.subscribe(_this.handlers);
          }
        }
      }
    };
    _this.nextResultListeners = /* @__PURE__ */ new Set();
    _this.cancel = function(reason) {
      _this.reject(reason);
      _this.sources = [];
      _this.handlers.complete();
    };
    _this.promise.catch(function(_) {
    });
    if (typeof sources === "function") {
      sources = [new Observable(sources)];
    }
    if (isPromiseLike(sources)) {
      sources.then(function(iterable) {
        return _this.start(iterable);
      }, _this.handlers.error);
    } else {
      _this.start(sources);
    }
    return _this;
  }
  Concast2.prototype.start = function(sources) {
    if (this.sub !== void 0)
      return;
    this.sources = Array.from(sources);
    this.handlers.complete();
  };
  Concast2.prototype.deliverLastMessage = function(observer) {
    if (this.latest) {
      var nextOrError = this.latest[0];
      var method = observer[nextOrError];
      if (method) {
        method.call(observer, this.latest[1]);
      }
      if (this.sub === null && nextOrError === "next" && observer.complete) {
        observer.complete();
      }
    }
  };
  Concast2.prototype.addObserver = function(observer) {
    if (!this.observers.has(observer)) {
      this.deliverLastMessage(observer);
      this.observers.add(observer);
    }
  };
  Concast2.prototype.removeObserver = function(observer) {
    if (this.observers.delete(observer) && this.observers.size < 1) {
      this.handlers.complete();
    }
  };
  Concast2.prototype.notify = function(method, arg) {
    var nextResultListeners = this.nextResultListeners;
    if (nextResultListeners.size) {
      this.nextResultListeners = /* @__PURE__ */ new Set();
      nextResultListeners.forEach(function(listener) {
        return listener(method, arg);
      });
    }
  };
  Concast2.prototype.beforeNext = function(callback) {
    var called = false;
    this.nextResultListeners.add(function(method, arg) {
      if (!called) {
        called = true;
        callback(method, arg);
      }
    });
  };
  return Concast2;
}(Observable);
fixObservableSubclass(Concast);
function isExecutionPatchIncrementalResult(value) {
  return "incremental" in value;
}
function isExecutionPatchInitialResult(value) {
  return "hasNext" in value && "data" in value;
}
function isExecutionPatchResult(value) {
  return isExecutionPatchIncrementalResult(value) || isExecutionPatchInitialResult(value);
}
function isApolloPayloadResult(value) {
  return isNonNullObject(value) && "payload" in value;
}
function mergeIncrementalData(prevResult, result) {
  var mergedData = prevResult;
  var merger = new DeepMerger();
  if (isExecutionPatchIncrementalResult(result) && isNonEmptyArray(result.incremental)) {
    result.incremental.forEach(function(_a) {
      var data = _a.data, path = _a.path;
      for (var i = path.length - 1; i >= 0; --i) {
        var key = path[i];
        var isNumericKey = !isNaN(+key);
        var parent_1 = isNumericKey ? [] : {};
        parent_1[key] = data;
        data = parent_1;
      }
      mergedData = merger.merge(mergedData, data);
    });
  }
  return mergedData;
}
function graphQLResultHasError(result) {
  var errors = getGraphQLErrorsFromResult(result);
  return isNonEmptyArray(errors);
}
function getGraphQLErrorsFromResult(result) {
  var graphQLErrors = isNonEmptyArray(result.errors) ? result.errors.slice(0) : [];
  if (isExecutionPatchIncrementalResult(result) && isNonEmptyArray(result.incremental)) {
    result.incremental.forEach(function(incrementalResult) {
      if (incrementalResult.errors) {
        graphQLErrors.push.apply(graphQLErrors, incrementalResult.errors);
      }
    });
  }
  return graphQLErrors;
}
function compact() {
  var objects = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    objects[_i] = arguments[_i];
  }
  var result = /* @__PURE__ */ Object.create(null);
  objects.forEach(function(obj) {
    if (!obj)
      return;
    Object.keys(obj).forEach(function(key) {
      var value = obj[key];
      if (value !== void 0) {
        result[key] = value;
      }
    });
  });
  return result;
}
var prefixCounts = /* @__PURE__ */ new Map();
function makeUniqueId(prefix) {
  var count = prefixCounts.get(prefix) || 1;
  prefixCounts.set(prefix, count + 1);
  return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}
function mergeOptions(defaults2, options) {
  return compact(defaults2, options, options.variables && {
    variables: __assign(__assign({}, defaults2 && defaults2.variables), options.variables)
  });
}
function fromError(errorValue) {
  return new Observable(function(observer) {
    observer.error(errorValue);
  });
}
var throwServerError = function(response, result, message) {
  var error = new Error(message);
  error.name = "ServerError";
  error.response = response;
  error.statusCode = response.status;
  error.result = result;
  throw error;
};
function validateOperation(operation) {
  var OPERATION_FIELDS = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ];
  for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
    var key = _a[_i];
    if (OPERATION_FIELDS.indexOf(key) < 0) {
      throw new InvariantError(27);
    }
  }
  return operation;
}
function createOperation(starting, operation) {
  var context = __assign({}, starting);
  var setContext2 = function(next) {
    if (typeof next === "function") {
      context = __assign(__assign({}, context), next(context));
    } else {
      context = __assign(__assign({}, context), next);
    }
  };
  var getContext2 = function() {
    return __assign({}, context);
  };
  Object.defineProperty(operation, "setContext", {
    enumerable: false,
    value: setContext2
  });
  Object.defineProperty(operation, "getContext", {
    enumerable: false,
    value: getContext2
  });
  return operation;
}
function transformOperation(operation) {
  var transformedOperation = {
    variables: operation.variables || {},
    extensions: operation.extensions || {},
    operationName: operation.operationName,
    query: operation.query
  };
  if (!transformedOperation.operationName) {
    transformedOperation.operationName = typeof transformedOperation.query !== "string" ? getOperationName(transformedOperation.query) || void 0 : "";
  }
  return transformedOperation;
}
function passthrough(op, forward) {
  return forward ? forward(op) : Observable.of();
}
function toLink(handler2) {
  return typeof handler2 === "function" ? new ApolloLink(handler2) : handler2;
}
function isTerminating(link) {
  return link.request.length <= 1;
}
(function(_super) {
  __extends(LinkError, _super);
  function LinkError(message, link) {
    var _this = _super.call(this, message) || this;
    _this.link = link;
    return _this;
  }
  return LinkError;
})(Error);
var ApolloLink = function() {
  function ApolloLink2(request) {
    if (request)
      this.request = request;
  }
  ApolloLink2.empty = function() {
    return new ApolloLink2(function() {
      return Observable.of();
    });
  };
  ApolloLink2.from = function(links) {
    if (links.length === 0)
      return ApolloLink2.empty();
    return links.map(toLink).reduce(function(x, y) {
      return x.concat(y);
    });
  };
  ApolloLink2.split = function(test, left, right) {
    var leftLink = toLink(left);
    var rightLink = toLink(right || new ApolloLink2(passthrough));
    if (isTerminating(leftLink) && isTerminating(rightLink)) {
      return new ApolloLink2(function(operation) {
        return test(operation) ? leftLink.request(operation) || Observable.of() : rightLink.request(operation) || Observable.of();
      });
    } else {
      return new ApolloLink2(function(operation, forward) {
        return test(operation) ? leftLink.request(operation, forward) || Observable.of() : rightLink.request(operation, forward) || Observable.of();
      });
    }
  };
  ApolloLink2.execute = function(link, operation) {
    return link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || Observable.of();
  };
  ApolloLink2.concat = function(first, second) {
    var firstLink = toLink(first);
    if (isTerminating(firstLink)) {
      return firstLink;
    }
    var nextLink = toLink(second);
    if (isTerminating(nextLink)) {
      return new ApolloLink2(function(operation) {
        return firstLink.request(operation, function(op) {
          return nextLink.request(op) || Observable.of();
        }) || Observable.of();
      });
    } else {
      return new ApolloLink2(function(operation, forward) {
        return firstLink.request(operation, function(op) {
          return nextLink.request(op, forward) || Observable.of();
        }) || Observable.of();
      });
    }
  };
  ApolloLink2.prototype.split = function(test, left, right) {
    return this.concat(ApolloLink2.split(test, left, right || new ApolloLink2(passthrough)));
  };
  ApolloLink2.prototype.concat = function(next) {
    return ApolloLink2.concat(this, next);
  };
  ApolloLink2.prototype.request = function(operation, forward) {
    throw new InvariantError(22);
  };
  ApolloLink2.prototype.onError = function(error, observer) {
    if (observer && observer.error) {
      observer.error(error);
      return false;
    }
    throw error;
  };
  ApolloLink2.prototype.setOnError = function(fn) {
    this.onError = fn;
    return this;
  };
  return ApolloLink2;
}();
var execute = ApolloLink.execute;
function onError(errorHandler) {
  return new ApolloLink(function(operation, forward) {
    return new Observable(function(observer) {
      var sub;
      var retriedSub;
      var retriedResult;
      try {
        sub = forward(operation).subscribe({
          next: function(result) {
            if (result.errors) {
              retriedResult = errorHandler({
                graphQLErrors: result.errors,
                response: result,
                operation,
                forward
              });
              if (retriedResult) {
                retriedSub = retriedResult.subscribe({
                  next: observer.next.bind(observer),
                  error: observer.error.bind(observer),
                  complete: observer.complete.bind(observer)
                });
                return;
              }
            }
            observer.next(result);
          },
          error: function(networkError) {
            retriedResult = errorHandler({
              operation,
              networkError,
              graphQLErrors: networkError && networkError.result && networkError.result.errors,
              forward
            });
            if (retriedResult) {
              retriedSub = retriedResult.subscribe({
                next: observer.next.bind(observer),
                error: observer.error.bind(observer),
                complete: observer.complete.bind(observer)
              });
              return;
            }
            observer.error(networkError);
          },
          complete: function() {
            if (!retriedResult) {
              observer.complete.bind(observer)();
            }
          }
        });
      } catch (e) {
        errorHandler({ networkError: e, operation, forward });
        observer.error(e);
      }
      return function() {
        if (sub)
          sub.unsubscribe();
        if (retriedSub)
          sub.unsubscribe();
      };
    });
  });
}
(function(_super) {
  __extends(ErrorLink, _super);
  function ErrorLink(errorHandler) {
    var _this = _super.call(this) || this;
    _this.link = onError(errorHandler);
    return _this;
  }
  ErrorLink.prototype.request = function(operation, forward) {
    return this.link.request(operation, forward);
  };
  return ErrorLink;
})(ApolloLink);
var version = "3.7.14";
function isNodeResponse(value) {
  return !!value.body;
}
function isReadableStream(value) {
  return !!value.getReader;
}
function isAsyncIterableIterator(value) {
  return !!(canUseAsyncIteratorSymbol && value[Symbol.asyncIterator]);
}
function isStreamableBlob(value) {
  return !!value.stream;
}
function isBlob(value) {
  return !!value.arrayBuffer;
}
function isNodeReadableStream(value) {
  return !!value.pipe;
}
function asyncIterator(source) {
  var _a;
  var iterator = source[Symbol.asyncIterator]();
  return _a = {
    next: function() {
      return iterator.next();
    }
  }, _a[Symbol.asyncIterator] = function() {
    return this;
  }, _a;
}
function nodeStreamIterator(stream) {
  var cleanup = null;
  var error = null;
  var done = false;
  var data = [];
  var waiting = [];
  function onData(chunk) {
    if (error)
      return;
    if (waiting.length) {
      var shiftedArr = waiting.shift();
      if (Array.isArray(shiftedArr) && shiftedArr[0]) {
        return shiftedArr[0]({ value: chunk, done: false });
      }
    }
    data.push(chunk);
  }
  function onError2(err) {
    error = err;
    var all = waiting.slice();
    all.forEach(function(pair) {
      pair[1](err);
    });
    !cleanup || cleanup();
  }
  function onEnd() {
    done = true;
    var all = waiting.slice();
    all.forEach(function(pair) {
      pair[0]({ value: void 0, done: true });
    });
    !cleanup || cleanup();
  }
  cleanup = function() {
    cleanup = null;
    stream.removeListener("data", onData);
    stream.removeListener("error", onError2);
    stream.removeListener("end", onEnd);
    stream.removeListener("finish", onEnd);
    stream.removeListener("close", onEnd);
  };
  stream.on("data", onData);
  stream.on("error", onError2);
  stream.on("end", onEnd);
  stream.on("finish", onEnd);
  stream.on("close", onEnd);
  function getNext() {
    return new Promise(function(resolve, reject) {
      if (error)
        return reject(error);
      if (data.length)
        return resolve({ value: data.shift(), done: false });
      if (done)
        return resolve({ value: void 0, done: true });
      waiting.push([resolve, reject]);
    });
  }
  var iterator = {
    next: function() {
      return getNext();
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}
function promiseIterator(promise) {
  var resolved = false;
  var iterator = {
    next: function() {
      if (resolved)
        return Promise.resolve({
          value: void 0,
          done: true
        });
      resolved = true;
      return new Promise(function(resolve, reject) {
        promise.then(function(value) {
          resolve({ value, done: false });
        }).catch(reject);
      });
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}
function readerIterator(reader) {
  var iterator = {
    next: function() {
      return reader.read();
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}
function responseIterator(response) {
  var body = response;
  if (isNodeResponse(response))
    body = response.body;
  if (isAsyncIterableIterator(body))
    return asyncIterator(body);
  if (isReadableStream(body))
    return readerIterator(body.getReader());
  if (isStreamableBlob(body)) {
    return readerIterator(body.stream().getReader());
  }
  if (isBlob(body))
    return promiseIterator(body.arrayBuffer());
  if (isNodeReadableStream(body))
    return nodeStreamIterator(body);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var PROTOCOL_ERRORS_SYMBOL = Symbol();
function graphQLResultHasProtocolErrors(result) {
  if (result.extensions) {
    return Array.isArray(result.extensions[PROTOCOL_ERRORS_SYMBOL]);
  }
  return false;
}
function isApolloError(err) {
  return err.hasOwnProperty("graphQLErrors");
}
var generateErrorMessage = function(err) {
  var errors = __spreadArray(__spreadArray(__spreadArray([], err.graphQLErrors, true), err.clientErrors, true), err.protocolErrors, true);
  if (err.networkError)
    errors.push(err.networkError);
  return errors.map(function(err2) {
    return isNonNullObject(err2) && err2.message || "Error message not found.";
  }).join("\n");
};
var ApolloError = function(_super) {
  __extends(ApolloError2, _super);
  function ApolloError2(_a) {
    var graphQLErrors = _a.graphQLErrors, protocolErrors = _a.protocolErrors, clientErrors = _a.clientErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
    var _this = _super.call(this, errorMessage) || this;
    _this.name = "ApolloError";
    _this.graphQLErrors = graphQLErrors || [];
    _this.protocolErrors = protocolErrors || [];
    _this.clientErrors = clientErrors || [];
    _this.networkError = networkError || null;
    _this.message = errorMessage || generateErrorMessage(_this);
    _this.extraInfo = extraInfo;
    _this.__proto__ = ApolloError2.prototype;
    return _this;
  }
  return ApolloError2;
}(Error);
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function readMultipartBody(response, observer) {
  var _a, _b, _c, _d, _e;
  return __awaiter(this, void 0, void 0, function() {
    var decoder, contentType, delimiter, boundaryVal, boundary, buffer, iterator, running, _f, value, done, chunk, bi, message, i, headers, contentType_1, body, result, next;
    var _g, _h;
    return __generator(this, function(_j) {
      switch (_j.label) {
        case 0:
          if (TextDecoder === void 0) {
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          }
          decoder = new TextDecoder("utf-8");
          contentType = (_a = response.headers) === null || _a === void 0 ? void 0 : _a.get("content-type");
          delimiter = "boundary=";
          boundaryVal = (contentType === null || contentType === void 0 ? void 0 : contentType.includes(delimiter)) ? contentType === null || contentType === void 0 ? void 0 : contentType.substring((contentType === null || contentType === void 0 ? void 0 : contentType.indexOf(delimiter)) + delimiter.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-";
          boundary = "--".concat(boundaryVal);
          buffer = "";
          iterator = responseIterator(response);
          running = true;
          _j.label = 1;
        case 1:
          if (!running)
            return [3, 3];
          return [4, iterator.next()];
        case 2:
          _f = _j.sent(), value = _f.value, done = _f.done;
          chunk = typeof value === "string" ? value : decoder.decode(value);
          running = !done;
          buffer += chunk;
          bi = buffer.indexOf(boundary);
          while (bi > -1) {
            message = void 0;
            _g = [
              buffer.slice(0, bi),
              buffer.slice(bi + boundary.length)
            ], message = _g[0], buffer = _g[1];
            if (message.trim()) {
              i = message.indexOf("\r\n\r\n");
              headers = parseHeaders(message.slice(0, i));
              contentType_1 = headers["content-type"];
              if (contentType_1 && contentType_1.toLowerCase().indexOf("application/json") === -1) {
                throw new Error("Unsupported patch content type: application/json is required.");
              }
              body = message.slice(i);
              try {
                result = parseJsonBody(response, body.replace("\r\n", ""));
                if (Object.keys(result).length > 1 || "data" in result || "incremental" in result || "errors" in result || "payload" in result) {
                  if (isApolloPayloadResult(result)) {
                    next = {};
                    if ("payload" in result) {
                      next = __assign({}, result.payload);
                    }
                    if ("errors" in result) {
                      next = __assign(__assign({}, next), { extensions: __assign(__assign({}, "extensions" in next ? next.extensions : null), (_h = {}, _h[PROTOCOL_ERRORS_SYMBOL] = result.errors, _h)) });
                    }
                    (_b = observer.next) === null || _b === void 0 ? void 0 : _b.call(observer, next);
                  } else {
                    (_c = observer.next) === null || _c === void 0 ? void 0 : _c.call(observer, result);
                  }
                } else if (Object.keys(result).length === 1 && "hasNext" in result && !result.hasNext) {
                  (_d = observer.complete) === null || _d === void 0 ? void 0 : _d.call(observer);
                }
              } catch (err) {
                handleError(err, observer);
              }
            }
            bi = buffer.indexOf(boundary);
          }
          return [3, 1];
        case 3:
          (_e = observer.complete) === null || _e === void 0 ? void 0 : _e.call(observer);
          return [2];
      }
    });
  });
}
function parseHeaders(headerText) {
  var headersInit = {};
  headerText.split("\n").forEach(function(line) {
    var i = line.indexOf(":");
    if (i > -1) {
      var name_1 = line.slice(0, i).trim().toLowerCase();
      var value = line.slice(i + 1).trim();
      headersInit[name_1] = value;
    }
  });
  return headersInit;
}
function parseJsonBody(response, bodyText) {
  if (response.status >= 300) {
    var getResult = function() {
      try {
        return JSON.parse(bodyText);
      } catch (err) {
        return bodyText;
      }
    };
    throwServerError(response, getResult(), "Response not successful: Received status code ".concat(response.status));
  }
  try {
    return JSON.parse(bodyText);
  } catch (err) {
    var parseError = err;
    parseError.name = "ServerParseError";
    parseError.response = response;
    parseError.statusCode = response.status;
    parseError.bodyText = bodyText;
    throw parseError;
  }
}
function handleError(err, observer) {
  var _a, _b;
  if (err.name === "AbortError")
    return;
  if (err.result && err.result.errors && err.result.data) {
    (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, err.result);
  }
  (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, err);
}
function readJsonBody(response, operation, observer) {
  parseAndCheckHttpResponse(operation)(response).then(function(result) {
    var _a, _b;
    (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, result);
    (_b = observer.complete) === null || _b === void 0 ? void 0 : _b.call(observer);
  }).catch(function(err) {
    return handleError(err, observer);
  });
}
function parseAndCheckHttpResponse(operations) {
  return function(response) {
    return response.text().then(function(bodyText) {
      return parseJsonBody(response, bodyText);
    }).then(function(result) {
      if (response.status >= 300) {
        throwServerError(response, result, "Response not successful: Received status code ".concat(response.status));
      }
      if (!Array.isArray(result) && !hasOwnProperty$1.call(result, "data") && !hasOwnProperty$1.call(result, "errors")) {
        throwServerError(response, result, "Server response was missing for query '".concat(Array.isArray(operations) ? operations.map(function(op) {
          return op.operationName;
        }) : operations.operationName, "'."));
      }
      return result;
    });
  };
}
var serializeFetchParameter = function(p, label) {
  var serialized;
  try {
    serialized = JSON.stringify(p);
  } catch (e) {
    var parseError = new InvariantError(24);
    parseError.parseError = e;
    throw parseError;
  }
  return serialized;
};
var defaultHttpOptions = {
  includeQuery: true,
  includeExtensions: false,
  preserveHeaderCase: false
};
var defaultHeaders = {
  accept: "*/*",
  "content-type": "application/json"
};
var defaultOptions$1 = {
  method: "POST"
};
var fallbackHttpConfig = {
  http: defaultHttpOptions,
  headers: defaultHeaders,
  options: defaultOptions$1
};
var defaultPrinter = function(ast, printer) {
  return printer(ast);
};
function selectHttpOptionsAndBodyInternal(operation, printer) {
  var configs = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    configs[_i - 2] = arguments[_i];
  }
  var options = {};
  var http = {};
  configs.forEach(function(config2) {
    options = __assign(__assign(__assign({}, options), config2.options), { headers: __assign(__assign({}, options.headers), config2.headers) });
    if (config2.credentials) {
      options.credentials = config2.credentials;
    }
    http = __assign(__assign({}, http), config2.http);
  });
  if (options.headers) {
    options.headers = removeDuplicateHeaders(options.headers, http.preserveHeaderCase);
  }
  var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
  var body = { operationName, variables };
  if (http.includeExtensions)
    body.extensions = extensions;
  if (http.includeQuery)
    body.query = printer(query, print);
  return {
    options,
    body
  };
}
function removeDuplicateHeaders(headers, preserveHeaderCase) {
  if (!preserveHeaderCase) {
    var normalizedHeaders_1 = /* @__PURE__ */ Object.create(null);
    Object.keys(Object(headers)).forEach(function(name) {
      normalizedHeaders_1[name.toLowerCase()] = headers[name];
    });
    return normalizedHeaders_1;
  }
  var headerData = /* @__PURE__ */ Object.create(null);
  Object.keys(Object(headers)).forEach(function(name) {
    headerData[name.toLowerCase()] = { originalName: name, value: headers[name] };
  });
  var normalizedHeaders = /* @__PURE__ */ Object.create(null);
  Object.keys(headerData).forEach(function(name) {
    normalizedHeaders[headerData[name].originalName] = headerData[name].value;
  });
  return normalizedHeaders;
}
var createSignalIfSupported = function() {
  if (typeof AbortController === "undefined")
    return { controller: false, signal: false };
  var controller = new AbortController();
  var signal = controller.signal;
  return { controller, signal };
};
var selectURI = function(operation, fallbackURI) {
  var context = operation.getContext();
  var contextURI = context.uri;
  if (contextURI) {
    return contextURI;
  } else if (typeof fallbackURI === "function") {
    return fallbackURI(operation);
  } else {
    return fallbackURI || "/graphql";
  }
};
function rewriteURIForGET(chosenURI, body) {
  var queryParams = [];
  var addQueryParam = function(key, value) {
    queryParams.push("".concat(key, "=").concat(encodeURIComponent(value)));
  };
  if ("query" in body) {
    addQueryParam("query", body.query);
  }
  if (body.operationName) {
    addQueryParam("operationName", body.operationName);
  }
  if (body.variables) {
    var serializedVariables = void 0;
    try {
      serializedVariables = serializeFetchParameter(body.variables, "Variables map");
    } catch (parseError) {
      return { parseError };
    }
    addQueryParam("variables", serializedVariables);
  }
  if (body.extensions) {
    var serializedExtensions = void 0;
    try {
      serializedExtensions = serializeFetchParameter(body.extensions, "Extensions map");
    } catch (parseError) {
      return { parseError };
    }
    addQueryParam("extensions", serializedExtensions);
  }
  var fragment = "", preFragment = chosenURI;
  var fragmentStart = chosenURI.indexOf("#");
  if (fragmentStart !== -1) {
    fragment = chosenURI.substr(fragmentStart);
    preFragment = chosenURI.substr(0, fragmentStart);
  }
  var queryParamsPrefix = preFragment.indexOf("?") === -1 ? "?" : "&";
  var newURI = preFragment + queryParamsPrefix + queryParams.join("&") + fragment;
  return { newURI };
}
var backupFetch = maybe$1(function() {
  return fetch;
});
var createHttpLink = function(linkOptions) {
  if (linkOptions === void 0) {
    linkOptions = {};
  }
  var _a = linkOptions.uri, uri = _a === void 0 ? "/graphql" : _a, preferredFetch = linkOptions.fetch, _b = linkOptions.print, print2 = _b === void 0 ? defaultPrinter : _b, includeExtensions = linkOptions.includeExtensions, preserveHeaderCase = linkOptions.preserveHeaderCase, useGETForQueries = linkOptions.useGETForQueries, _c = linkOptions.includeUnusedVariables, includeUnusedVariables = _c === void 0 ? false : _c, requestOptions = __rest(linkOptions, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  var linkConfig = {
    http: { includeExtensions, preserveHeaderCase },
    options: requestOptions.fetchOptions,
    credentials: requestOptions.credentials,
    headers: requestOptions.headers
  };
  return new ApolloLink(function(operation) {
    var chosenURI = selectURI(operation, uri);
    var context = operation.getContext();
    var clientAwarenessHeaders = {};
    if (context.clientAwareness) {
      var _a2 = context.clientAwareness, name_1 = _a2.name, version2 = _a2.version;
      if (name_1) {
        clientAwarenessHeaders["apollographql-client-name"] = name_1;
      }
      if (version2) {
        clientAwarenessHeaders["apollographql-client-version"] = version2;
      }
    }
    var contextHeaders = __assign(__assign({}, clientAwarenessHeaders), context.headers);
    var contextConfig = {
      http: context.http,
      options: context.fetchOptions,
      credentials: context.credentials,
      headers: contextHeaders
    };
    var _b2 = selectHttpOptionsAndBodyInternal(operation, print2, fallbackHttpConfig, linkConfig, contextConfig), options = _b2.options, body = _b2.body;
    if (body.variables && !includeUnusedVariables) {
      var unusedNames_1 = new Set(Object.keys(body.variables));
      visit(operation.query, {
        Variable: function(node, _key, parent) {
          if (parent && parent.kind !== "VariableDefinition") {
            unusedNames_1.delete(node.name.value);
          }
        }
      });
      if (unusedNames_1.size) {
        body.variables = __assign({}, body.variables);
        unusedNames_1.forEach(function(name) {
          delete body.variables[name];
        });
      }
    }
    var controller;
    if (!options.signal) {
      var _c2 = createSignalIfSupported(), _controller = _c2.controller, signal = _c2.signal;
      controller = _controller;
      if (controller)
        options.signal = signal;
    }
    var definitionIsMutation = function(d) {
      return d.kind === "OperationDefinition" && d.operation === "mutation";
    };
    var definitionIsSubscription = function(d) {
      return d.kind === "OperationDefinition" && d.operation === "subscription";
    };
    var isSubscription = definitionIsSubscription(getMainDefinition(operation.query));
    var hasDefer = hasDirectives(["defer"], operation.query);
    if (useGETForQueries && !operation.query.definitions.some(definitionIsMutation)) {
      options.method = "GET";
    }
    if (hasDefer || isSubscription) {
      options.headers = options.headers || {};
      var acceptHeader = "multipart/mixed;";
      if (isSubscription) {
        acceptHeader += "boundary=graphql;subscriptionSpec=1.0,application/json";
      } else if (hasDefer) {
        acceptHeader += "deferSpec=20220824,application/json";
      }
      options.headers.accept = acceptHeader;
    }
    if (options.method === "GET") {
      var _d = rewriteURIForGET(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
      if (parseError) {
        return fromError(parseError);
      }
      chosenURI = newURI;
    } else {
      try {
        options.body = serializeFetchParameter(body, "Payload");
      } catch (parseError2) {
        return fromError(parseError2);
      }
    }
    return new Observable(function(observer) {
      var currentFetch = preferredFetch || maybe$1(function() {
        return fetch;
      }) || backupFetch;
      currentFetch(chosenURI, options).then(function(response) {
        var _a3;
        operation.setContext({ response });
        var ctype = (_a3 = response.headers) === null || _a3 === void 0 ? void 0 : _a3.get("content-type");
        if (ctype !== null && /^multipart\/mixed/i.test(ctype)) {
          return readMultipartBody(response, observer);
        } else {
          return readJsonBody(response, operation, observer);
        }
      }).catch(function(err) {
        return handleError(err, observer);
      });
      return function() {
        if (controller)
          controller.abort();
      };
    });
  });
};
var HttpLink = function(_super) {
  __extends(HttpLink2, _super);
  function HttpLink2(options) {
    if (options === void 0) {
      options = {};
    }
    var _this = _super.call(this, createHttpLink(options).request) || this;
    _this.options = options;
    return _this;
  }
  return HttpLink2;
}(ApolloLink);
var ApolloCache = function() {
  function ApolloCache2() {
    this.getFragmentDoc = wrap$1(getFragmentQueryDocument);
  }
  ApolloCache2.prototype.batch = function(options) {
    var _this = this;
    var optimisticId = typeof options.optimistic === "string" ? options.optimistic : options.optimistic === false ? null : void 0;
    var updateResult;
    this.performTransaction(function() {
      return updateResult = options.update(_this);
    }, optimisticId);
    return updateResult;
  };
  ApolloCache2.prototype.recordOptimisticTransaction = function(transaction, optimisticId) {
    this.performTransaction(transaction, optimisticId);
  };
  ApolloCache2.prototype.transformDocument = function(document2) {
    return document2;
  };
  ApolloCache2.prototype.transformForLink = function(document2) {
    return document2;
  };
  ApolloCache2.prototype.identify = function(object) {
    return;
  };
  ApolloCache2.prototype.gc = function() {
    return [];
  };
  ApolloCache2.prototype.modify = function(options) {
    return false;
  };
  ApolloCache2.prototype.readQuery = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = !!options.optimistic;
    }
    return this.read(__assign(__assign({}, options), { rootId: options.id || "ROOT_QUERY", optimistic }));
  };
  ApolloCache2.prototype.readFragment = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = !!options.optimistic;
    }
    return this.read(__assign(__assign({}, options), { query: this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic }));
  };
  ApolloCache2.prototype.writeQuery = function(_a) {
    var id = _a.id, data = _a.data, options = __rest(_a, ["id", "data"]);
    return this.write(Object.assign(options, {
      dataId: id || "ROOT_QUERY",
      result: data
    }));
  };
  ApolloCache2.prototype.writeFragment = function(_a) {
    var id = _a.id, data = _a.data, fragment = _a.fragment, fragmentName = _a.fragmentName, options = __rest(_a, ["id", "data", "fragment", "fragmentName"]);
    return this.write(Object.assign(options, {
      query: this.getFragmentDoc(fragment, fragmentName),
      dataId: id,
      result: data
    }));
  };
  ApolloCache2.prototype.updateQuery = function(options, update) {
    return this.batch({
      update: function(cache) {
        var value = cache.readQuery(options);
        var data = update(value);
        if (data === void 0 || data === null)
          return value;
        cache.writeQuery(__assign(__assign({}, options), { data }));
        return data;
      }
    });
  };
  ApolloCache2.prototype.updateFragment = function(options, update) {
    return this.batch({
      update: function(cache) {
        var value = cache.readFragment(options);
        var data = update(value);
        if (data === void 0 || data === null)
          return value;
        cache.writeFragment(__assign(__assign({}, options), { data }));
        return data;
      }
    });
  };
  return ApolloCache2;
}();
var MissingFieldError = function(_super) {
  __extends(MissingFieldError2, _super);
  function MissingFieldError2(message, path, query, variables) {
    var _a;
    var _this = _super.call(this, message) || this;
    _this.message = message;
    _this.path = path;
    _this.query = query;
    _this.variables = variables;
    if (Array.isArray(_this.path)) {
      _this.missing = _this.message;
      for (var i = _this.path.length - 1; i >= 0; --i) {
        _this.missing = (_a = {}, _a[_this.path[i]] = _this.missing, _a);
      }
    } else {
      _this.missing = _this.path;
    }
    _this.__proto__ = MissingFieldError2.prototype;
    return _this;
  }
  return MissingFieldError2;
}(Error);
var hasOwn = Object.prototype.hasOwnProperty;
function isNullish(value) {
  return value === null || value === void 0;
}
function defaultDataIdFromObject(_a, context) {
  var __typename = _a.__typename, id = _a.id, _id = _a._id;
  if (typeof __typename === "string") {
    if (context) {
      context.keyObject = !isNullish(id) ? { id } : !isNullish(_id) ? { _id } : void 0;
    }
    if (isNullish(id) && !isNullish(_id)) {
      id = _id;
    }
    if (!isNullish(id)) {
      return "".concat(__typename, ":").concat(typeof id === "number" || typeof id === "string" ? id : JSON.stringify(id));
    }
  }
}
var defaultConfig = {
  dataIdFromObject: defaultDataIdFromObject,
  addTypename: true,
  resultCaching: true,
  canonizeResults: false
};
function normalizeConfig(config2) {
  return compact(defaultConfig, config2);
}
function shouldCanonizeResults(config2) {
  var value = config2.canonizeResults;
  return value === void 0 ? defaultConfig.canonizeResults : value;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
  var match = storeFieldName.match(TypeOrFieldNameRegExp);
  return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
  if (isNonNullObject(result)) {
    return isArray(result) ? result.every(function(item) {
      return selectionSetMatchesResult(selectionSet, item, variables);
    }) : selectionSet.selections.every(function(field) {
      if (isField(field) && shouldInclude(field, variables)) {
        var key = resultKeyNameFromField(field);
        return hasOwn.call(result, key) && (!field.selectionSet || selectionSetMatchesResult(field.selectionSet, result[key], variables));
      }
      return true;
    });
  }
  return false;
}
function storeValueIsStoreObject(value) {
  return isNonNullObject(value) && !isReference(value) && !isArray(value);
}
function makeProcessedFieldsMerger() {
  return new DeepMerger();
}
function extractFragmentContext(document2, fragments) {
  var fragmentMap = createFragmentMap(getFragmentDefinitions(document2));
  return {
    fragmentMap,
    lookupFragment: function(name) {
      var def = fragmentMap[name];
      if (!def && fragments) {
        def = fragments.lookup(name);
      }
      return def || null;
    }
  };
}
var DELETE = /* @__PURE__ */ Object.create(null);
var delModifier = function() {
  return DELETE;
};
var INVALIDATE = /* @__PURE__ */ Object.create(null);
var EntityStore = function() {
  function EntityStore2(policies, group) {
    var _this = this;
    this.policies = policies;
    this.group = group;
    this.data = /* @__PURE__ */ Object.create(null);
    this.rootIds = /* @__PURE__ */ Object.create(null);
    this.refs = /* @__PURE__ */ Object.create(null);
    this.getFieldValue = function(objectOrReference, storeFieldName) {
      return maybeDeepFreeze(isReference(objectOrReference) ? _this.get(objectOrReference.__ref, storeFieldName) : objectOrReference && objectOrReference[storeFieldName]);
    };
    this.canRead = function(objOrRef) {
      return isReference(objOrRef) ? _this.has(objOrRef.__ref) : typeof objOrRef === "object";
    };
    this.toReference = function(objOrIdOrRef, mergeIntoStore) {
      if (typeof objOrIdOrRef === "string") {
        return makeReference(objOrIdOrRef);
      }
      if (isReference(objOrIdOrRef)) {
        return objOrIdOrRef;
      }
      var id = _this.policies.identify(objOrIdOrRef)[0];
      if (id) {
        var ref2 = makeReference(id);
        if (mergeIntoStore) {
          _this.merge(id, objOrIdOrRef);
        }
        return ref2;
      }
    };
  }
  EntityStore2.prototype.toObject = function() {
    return __assign({}, this.data);
  };
  EntityStore2.prototype.has = function(dataId) {
    return this.lookup(dataId, true) !== void 0;
  };
  EntityStore2.prototype.get = function(dataId, fieldName) {
    this.group.depend(dataId, fieldName);
    if (hasOwn.call(this.data, dataId)) {
      var storeObject = this.data[dataId];
      if (storeObject && hasOwn.call(storeObject, fieldName)) {
        return storeObject[fieldName];
      }
    }
    if (fieldName === "__typename" && hasOwn.call(this.policies.rootTypenamesById, dataId)) {
      return this.policies.rootTypenamesById[dataId];
    }
    if (this instanceof Layer) {
      return this.parent.get(dataId, fieldName);
    }
  };
  EntityStore2.prototype.lookup = function(dataId, dependOnExistence) {
    if (dependOnExistence)
      this.group.depend(dataId, "__exists");
    if (hasOwn.call(this.data, dataId)) {
      return this.data[dataId];
    }
    if (this instanceof Layer) {
      return this.parent.lookup(dataId, dependOnExistence);
    }
    if (this.policies.rootTypenamesById[dataId]) {
      return /* @__PURE__ */ Object.create(null);
    }
  };
  EntityStore2.prototype.merge = function(older, newer) {
    var _this = this;
    var dataId;
    if (isReference(older))
      older = older.__ref;
    if (isReference(newer))
      newer = newer.__ref;
    var existing = typeof older === "string" ? this.lookup(dataId = older) : older;
    var incoming = typeof newer === "string" ? this.lookup(dataId = newer) : newer;
    if (!incoming)
      return;
    invariant$1(typeof dataId === "string", 1);
    var merged = new DeepMerger(storeObjectReconciler).merge(existing, incoming);
    this.data[dataId] = merged;
    if (merged !== existing) {
      delete this.refs[dataId];
      if (this.group.caching) {
        var fieldsToDirty_1 = /* @__PURE__ */ Object.create(null);
        if (!existing)
          fieldsToDirty_1.__exists = 1;
        Object.keys(incoming).forEach(function(storeFieldName) {
          if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
            fieldsToDirty_1[storeFieldName] = 1;
            var fieldName = fieldNameFromStoreName(storeFieldName);
            if (fieldName !== storeFieldName && !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
              fieldsToDirty_1[fieldName] = 1;
            }
            if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
              delete merged[storeFieldName];
            }
          }
        });
        if (fieldsToDirty_1.__typename && !(existing && existing.__typename) && this.policies.rootTypenamesById[dataId] === merged.__typename) {
          delete fieldsToDirty_1.__typename;
        }
        Object.keys(fieldsToDirty_1).forEach(function(fieldName) {
          return _this.group.dirty(dataId, fieldName);
        });
      }
    }
  };
  EntityStore2.prototype.modify = function(dataId, fields) {
    var _this = this;
    var storeObject = this.lookup(dataId);
    if (storeObject) {
      var changedFields_1 = /* @__PURE__ */ Object.create(null);
      var needToMerge_1 = false;
      var allDeleted_1 = true;
      var sharedDetails_1 = {
        DELETE,
        INVALIDATE,
        isReference,
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function(fieldNameOrOptions, from) {
          return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
            fieldName: fieldNameOrOptions,
            from: from || makeReference(dataId)
          } : fieldNameOrOptions, { store: _this });
        }
      };
      Object.keys(storeObject).forEach(function(storeFieldName) {
        var fieldName = fieldNameFromStoreName(storeFieldName);
        var fieldValue = storeObject[storeFieldName];
        if (fieldValue === void 0)
          return;
        var modify = typeof fields === "function" ? fields : fields[storeFieldName] || fields[fieldName];
        if (modify) {
          var newValue = modify === delModifier ? DELETE : modify(maybeDeepFreeze(fieldValue), __assign(__assign({}, sharedDetails_1), { fieldName, storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
          if (newValue === INVALIDATE) {
            _this.group.dirty(dataId, storeFieldName);
          } else {
            if (newValue === DELETE)
              newValue = void 0;
            if (newValue !== fieldValue) {
              changedFields_1[storeFieldName] = newValue;
              needToMerge_1 = true;
              fieldValue = newValue;
            }
          }
        }
        if (fieldValue !== void 0) {
          allDeleted_1 = false;
        }
      });
      if (needToMerge_1) {
        this.merge(dataId, changedFields_1);
        if (allDeleted_1) {
          if (this instanceof Layer) {
            this.data[dataId] = void 0;
          } else {
            delete this.data[dataId];
          }
          this.group.dirty(dataId, "__exists");
        }
        return true;
      }
    }
    return false;
  };
  EntityStore2.prototype.delete = function(dataId, fieldName, args) {
    var _a;
    var storeObject = this.lookup(dataId);
    if (storeObject) {
      var typename = this.getFieldValue(storeObject, "__typename");
      var storeFieldName = fieldName && args ? this.policies.getStoreFieldName({ typename, fieldName, args }) : fieldName;
      return this.modify(dataId, storeFieldName ? (_a = {}, _a[storeFieldName] = delModifier, _a) : delModifier);
    }
    return false;
  };
  EntityStore2.prototype.evict = function(options, limit) {
    var evicted = false;
    if (options.id) {
      if (hasOwn.call(this.data, options.id)) {
        evicted = this.delete(options.id, options.fieldName, options.args);
      }
      if (this instanceof Layer && this !== limit) {
        evicted = this.parent.evict(options, limit) || evicted;
      }
      if (options.fieldName || evicted) {
        this.group.dirty(options.id, options.fieldName || "__exists");
      }
    }
    return evicted;
  };
  EntityStore2.prototype.clear = function() {
    this.replace(null);
  };
  EntityStore2.prototype.extract = function() {
    var _this = this;
    var obj = this.toObject();
    var extraRootIds = [];
    this.getRootIdSet().forEach(function(id) {
      if (!hasOwn.call(_this.policies.rootTypenamesById, id)) {
        extraRootIds.push(id);
      }
    });
    if (extraRootIds.length) {
      obj.__META = { extraRootIds: extraRootIds.sort() };
    }
    return obj;
  };
  EntityStore2.prototype.replace = function(newData) {
    var _this = this;
    Object.keys(this.data).forEach(function(dataId) {
      if (!(newData && hasOwn.call(newData, dataId))) {
        _this.delete(dataId);
      }
    });
    if (newData) {
      var __META = newData.__META, rest_1 = __rest(newData, ["__META"]);
      Object.keys(rest_1).forEach(function(dataId) {
        _this.merge(dataId, rest_1[dataId]);
      });
      if (__META) {
        __META.extraRootIds.forEach(this.retain, this);
      }
    }
  };
  EntityStore2.prototype.retain = function(rootId) {
    return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
  };
  EntityStore2.prototype.release = function(rootId) {
    if (this.rootIds[rootId] > 0) {
      var count = --this.rootIds[rootId];
      if (!count)
        delete this.rootIds[rootId];
      return count;
    }
    return 0;
  };
  EntityStore2.prototype.getRootIdSet = function(ids) {
    if (ids === void 0) {
      ids = /* @__PURE__ */ new Set();
    }
    Object.keys(this.rootIds).forEach(ids.add, ids);
    if (this instanceof Layer) {
      this.parent.getRootIdSet(ids);
    } else {
      Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
    }
    return ids;
  };
  EntityStore2.prototype.gc = function() {
    var _this = this;
    var ids = this.getRootIdSet();
    var snapshot = this.toObject();
    ids.forEach(function(id) {
      if (hasOwn.call(snapshot, id)) {
        Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
        delete snapshot[id];
      }
    });
    var idsToRemove = Object.keys(snapshot);
    if (idsToRemove.length) {
      var root_1 = this;
      while (root_1 instanceof Layer)
        root_1 = root_1.parent;
      idsToRemove.forEach(function(id) {
        return root_1.delete(id);
      });
    }
    return idsToRemove;
  };
  EntityStore2.prototype.findChildRefIds = function(dataId) {
    if (!hasOwn.call(this.refs, dataId)) {
      var found_1 = this.refs[dataId] = /* @__PURE__ */ Object.create(null);
      var root = this.data[dataId];
      if (!root)
        return found_1;
      var workSet_1 = /* @__PURE__ */ new Set([root]);
      workSet_1.forEach(function(obj) {
        if (isReference(obj)) {
          found_1[obj.__ref] = true;
        }
        if (isNonNullObject(obj)) {
          Object.keys(obj).forEach(function(key) {
            var child = obj[key];
            if (isNonNullObject(child)) {
              workSet_1.add(child);
            }
          });
        }
      });
    }
    return this.refs[dataId];
  };
  EntityStore2.prototype.makeCacheKey = function() {
    return this.group.keyMaker.lookupArray(arguments);
  };
  return EntityStore2;
}();
var CacheGroup = function() {
  function CacheGroup2(caching, parent) {
    if (parent === void 0) {
      parent = null;
    }
    this.caching = caching;
    this.parent = parent;
    this.d = null;
    this.resetCaching();
  }
  CacheGroup2.prototype.resetCaching = function() {
    this.d = this.caching ? dep() : null;
    this.keyMaker = new Trie(canUseWeakMap);
  };
  CacheGroup2.prototype.depend = function(dataId, storeFieldName) {
    if (this.d) {
      this.d(makeDepKey(dataId, storeFieldName));
      var fieldName = fieldNameFromStoreName(storeFieldName);
      if (fieldName !== storeFieldName) {
        this.d(makeDepKey(dataId, fieldName));
      }
      if (this.parent) {
        this.parent.depend(dataId, storeFieldName);
      }
    }
  };
  CacheGroup2.prototype.dirty = function(dataId, storeFieldName) {
    if (this.d) {
      this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
    }
  };
  return CacheGroup2;
}();
function makeDepKey(dataId, storeFieldName) {
  return storeFieldName + "#" + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
  if (supportsResultCaching(store)) {
    store.group.depend(entityId, "__exists");
  }
}
(function(EntityStore2) {
  var Root = function(_super) {
    __extends(Root2, _super);
    function Root2(_a) {
      var policies = _a.policies, _b = _a.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a.seed;
      var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
      _this.stump = new Stump(_this);
      _this.storageTrie = new Trie(canUseWeakMap);
      if (seed)
        _this.replace(seed);
      return _this;
    }
    Root2.prototype.addLayer = function(layerId, replay) {
      return this.stump.addLayer(layerId, replay);
    };
    Root2.prototype.removeLayer = function() {
      return this;
    };
    Root2.prototype.getStorage = function() {
      return this.storageTrie.lookupArray(arguments);
    };
    return Root2;
  }(EntityStore2);
  EntityStore2.Root = Root;
})(EntityStore || (EntityStore = {}));
var Layer = function(_super) {
  __extends(Layer2, _super);
  function Layer2(id, parent, replay, group) {
    var _this = _super.call(this, parent.policies, group) || this;
    _this.id = id;
    _this.parent = parent;
    _this.replay = replay;
    _this.group = group;
    replay(_this);
    return _this;
  }
  Layer2.prototype.addLayer = function(layerId, replay) {
    return new Layer2(layerId, this, replay, this.group);
  };
  Layer2.prototype.removeLayer = function(layerId) {
    var _this = this;
    var parent = this.parent.removeLayer(layerId);
    if (layerId === this.id) {
      if (this.group.caching) {
        Object.keys(this.data).forEach(function(dataId) {
          var ownStoreObject = _this.data[dataId];
          var parentStoreObject = parent["lookup"](dataId);
          if (!parentStoreObject) {
            _this.delete(dataId);
          } else if (!ownStoreObject) {
            _this.group.dirty(dataId, "__exists");
            Object.keys(parentStoreObject).forEach(function(storeFieldName) {
              _this.group.dirty(dataId, storeFieldName);
            });
          } else if (ownStoreObject !== parentStoreObject) {
            Object.keys(ownStoreObject).forEach(function(storeFieldName) {
              if (!equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                _this.group.dirty(dataId, storeFieldName);
              }
            });
          }
        });
      }
      return parent;
    }
    if (parent === this.parent)
      return this;
    return parent.addLayer(this.id, this.replay);
  };
  Layer2.prototype.toObject = function() {
    return __assign(__assign({}, this.parent.toObject()), this.data);
  };
  Layer2.prototype.findChildRefIds = function(dataId) {
    var fromParent = this.parent.findChildRefIds(dataId);
    return hasOwn.call(this.data, dataId) ? __assign(__assign({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
  };
  Layer2.prototype.getStorage = function() {
    var p = this.parent;
    while (p.parent)
      p = p.parent;
    return p.getStorage.apply(p, arguments);
  };
  return Layer2;
}(EntityStore);
var Stump = function(_super) {
  __extends(Stump2, _super);
  function Stump2(root) {
    return _super.call(this, "EntityStore.Stump", root, function() {
    }, new CacheGroup(root.group.caching, root.group)) || this;
  }
  Stump2.prototype.removeLayer = function() {
    return this;
  };
  Stump2.prototype.merge = function() {
    return this.parent.merge.apply(this.parent, arguments);
  };
  return Stump2;
}(Layer);
function storeObjectReconciler(existingObject, incomingObject, property) {
  var existingValue = existingObject[property];
  var incomingValue = incomingObject[property];
  return equal(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
  return !!(store instanceof EntityStore && store.group.caching);
}
function shallowCopy(value) {
  if (isNonNullObject(value)) {
    return isArray(value) ? value.slice(0) : __assign({ __proto__: Object.getPrototypeOf(value) }, value);
  }
  return value;
}
var ObjectCanon = function() {
  function ObjectCanon2() {
    this.known = new (canUseWeakSet ? WeakSet : Set)();
    this.pool = new Trie(canUseWeakMap);
    this.passes = /* @__PURE__ */ new WeakMap();
    this.keysByJSON = /* @__PURE__ */ new Map();
    this.empty = this.admit({});
  }
  ObjectCanon2.prototype.isKnown = function(value) {
    return isNonNullObject(value) && this.known.has(value);
  };
  ObjectCanon2.prototype.pass = function(value) {
    if (isNonNullObject(value)) {
      var copy = shallowCopy(value);
      this.passes.set(copy, value);
      return copy;
    }
    return value;
  };
  ObjectCanon2.prototype.admit = function(value) {
    var _this = this;
    if (isNonNullObject(value)) {
      var original = this.passes.get(value);
      if (original)
        return original;
      var proto = Object.getPrototypeOf(value);
      switch (proto) {
        case Array.prototype: {
          if (this.known.has(value))
            return value;
          var array = value.map(this.admit, this);
          var node = this.pool.lookupArray(array);
          if (!node.array) {
            this.known.add(node.array = array);
          }
          return node.array;
        }
        case null:
        case Object.prototype: {
          if (this.known.has(value))
            return value;
          var proto_1 = Object.getPrototypeOf(value);
          var array_1 = [proto_1];
          var keys = this.sortedKeys(value);
          array_1.push(keys.json);
          var firstValueIndex_1 = array_1.length;
          keys.sorted.forEach(function(key) {
            array_1.push(_this.admit(value[key]));
          });
          var node = this.pool.lookupArray(array_1);
          if (!node.object) {
            var obj_1 = node.object = Object.create(proto_1);
            this.known.add(obj_1);
            keys.sorted.forEach(function(key, i) {
              obj_1[key] = array_1[firstValueIndex_1 + i];
            });
          }
          return node.object;
        }
      }
    }
    return value;
  };
  ObjectCanon2.prototype.sortedKeys = function(obj) {
    var keys = Object.keys(obj);
    var node = this.pool.lookupArray(keys);
    if (!node.keys) {
      keys.sort();
      var json = JSON.stringify(keys);
      if (!(node.keys = this.keysByJSON.get(json))) {
        this.keysByJSON.set(json, node.keys = { sorted: keys, json });
      }
    }
    return node.keys;
  };
  return ObjectCanon2;
}();
var canonicalStringify = Object.assign(function(value) {
  if (isNonNullObject(value)) {
    if (stringifyCanon === void 0) {
      resetCanonicalStringify();
    }
    var canonical = stringifyCanon.admit(value);
    var json = stringifyCache.get(canonical);
    if (json === void 0) {
      stringifyCache.set(canonical, json = JSON.stringify(canonical));
    }
    return json;
  }
  return JSON.stringify(value);
}, {
  reset: resetCanonicalStringify
});
var stringifyCanon;
var stringifyCache;
function resetCanonicalStringify() {
  stringifyCanon = new ObjectCanon();
  stringifyCache = new (canUseWeakMap ? WeakMap : Map)();
}
function execSelectionSetKeyArgs(options) {
  return [
    options.selectionSet,
    options.objectOrReference,
    options.context,
    options.context.canonizeResults
  ];
}
var StoreReader = function() {
  function StoreReader2(config2) {
    var _this = this;
    this.knownResults = new (canUseWeakMap ? WeakMap : Map)();
    this.config = compact(config2, {
      addTypename: config2.addTypename !== false,
      canonizeResults: shouldCanonizeResults(config2)
    });
    this.canon = config2.canon || new ObjectCanon();
    this.executeSelectionSet = wrap$1(function(options) {
      var _a;
      var canonizeResults = options.context.canonizeResults;
      var peekArgs = execSelectionSetKeyArgs(options);
      peekArgs[3] = !canonizeResults;
      var other = (_a = _this.executeSelectionSet).peek.apply(_a, peekArgs);
      if (other) {
        if (canonizeResults) {
          return __assign(__assign({}, other), { result: _this.canon.admit(other.result) });
        }
        return other;
      }
      maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
      return _this.execSelectionSetImpl(options);
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: execSelectionSetKeyArgs,
      makeCacheKey: function(selectionSet, parent, context, canonizeResults) {
        if (supportsResultCaching(context.store)) {
          return context.store.makeCacheKey(selectionSet, isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
        }
      }
    });
    this.executeSubSelectedArray = wrap$1(function(options) {
      maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
      return _this.execSubSelectedArrayImpl(options);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(_a) {
        var field = _a.field, array = _a.array, context = _a.context;
        if (supportsResultCaching(context.store)) {
          return context.store.makeCacheKey(field, array, context.varString);
        }
      }
    });
  }
  StoreReader2.prototype.resetCanon = function() {
    this.canon = new ObjectCanon();
  };
  StoreReader2.prototype.diffQueryAgainstStore = function(_a) {
    var store = _a.store, query = _a.query, _b = _a.rootId, rootId = _b === void 0 ? "ROOT_QUERY" : _b, variables = _a.variables, _c = _a.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
    var policies = this.config.cache.policies;
    variables = __assign(__assign({}, getDefaultValues(getQueryDefinition(query))), variables);
    var rootRef = makeReference(rootId);
    var execResult = this.executeSelectionSet({
      selectionSet: getMainDefinition(query).selectionSet,
      objectOrReference: rootRef,
      enclosingRef: rootRef,
      context: __assign({ store, query, policies, variables, varString: canonicalStringify(variables), canonizeResults }, extractFragmentContext(query, this.config.fragments))
    });
    var missing;
    if (execResult.missing) {
      missing = [new MissingFieldError(firstMissing(execResult.missing), execResult.missing, query, variables)];
      if (!returnPartialData) {
        throw missing[0];
      }
    }
    return {
      result: execResult.result,
      complete: !missing,
      missing
    };
  };
  StoreReader2.prototype.isFresh = function(result, parent, selectionSet, context) {
    if (supportsResultCaching(context.store) && this.knownResults.get(result) === selectionSet) {
      var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result));
      if (latest && result === latest.result) {
        return true;
      }
    }
    return false;
  };
  StoreReader2.prototype.execSelectionSetImpl = function(_a) {
    var _this = this;
    var selectionSet = _a.selectionSet, objectOrReference = _a.objectOrReference, enclosingRef = _a.enclosingRef, context = _a.context;
    if (isReference(objectOrReference) && !context.policies.rootTypenamesById[objectOrReference.__ref] && !context.store.has(objectOrReference.__ref)) {
      return {
        result: this.canon.empty,
        missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object")
      };
    }
    var variables = context.variables, policies = context.policies, store = context.store;
    var typename = store.getFieldValue(objectOrReference, "__typename");
    var objectsToMerge = [];
    var missing;
    var missingMerger = new DeepMerger();
    if (this.config.addTypename && typeof typename === "string" && !policies.rootIdsByTypename[typename]) {
      objectsToMerge.push({ __typename: typename });
    }
    function handleMissing(result2, resultName) {
      var _a2;
      if (result2.missing) {
        missing = missingMerger.merge(missing, (_a2 = {}, _a2[resultName] = result2.missing, _a2));
      }
      return result2.result;
    }
    var workSet = new Set(selectionSet.selections);
    workSet.forEach(function(selection) {
      var _a2, _b;
      if (!shouldInclude(selection, variables))
        return;
      if (isField(selection)) {
        var fieldValue = policies.readField({
          fieldName: selection.name.value,
          field: selection,
          variables: context.variables,
          from: objectOrReference
        }, context);
        var resultName = resultKeyNameFromField(selection);
        if (fieldValue === void 0) {
          if (!addTypenameToDocument.added(selection)) {
            missing = missingMerger.merge(missing, (_a2 = {}, _a2[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat(isReference(objectOrReference) ? objectOrReference.__ref + " object" : "object " + JSON.stringify(objectOrReference, null, 2)), _a2));
          }
        } else if (isArray(fieldValue)) {
          fieldValue = handleMissing(_this.executeSubSelectedArray({
            field: selection,
            array: fieldValue,
            enclosingRef,
            context
          }), resultName);
        } else if (!selection.selectionSet) {
          if (context.canonizeResults) {
            fieldValue = _this.canon.pass(fieldValue);
          }
        } else if (fieldValue != null) {
          fieldValue = handleMissing(_this.executeSelectionSet({
            selectionSet: selection.selectionSet,
            objectOrReference: fieldValue,
            enclosingRef: isReference(fieldValue) ? fieldValue : enclosingRef,
            context
          }), resultName);
        }
        if (fieldValue !== void 0) {
          objectsToMerge.push((_b = {}, _b[resultName] = fieldValue, _b));
        }
      } else {
        var fragment = getFragmentFromSelection(selection, context.lookupFragment);
        if (!fragment && selection.kind === Kind.FRAGMENT_SPREAD) {
          throw new InvariantError(5);
        }
        if (fragment && policies.fragmentMatches(fragment, typename)) {
          fragment.selectionSet.selections.forEach(workSet.add, workSet);
        }
      }
    });
    var result = mergeDeepArray(objectsToMerge);
    var finalResult = { result, missing };
    var frozen = context.canonizeResults ? this.canon.admit(finalResult) : maybeDeepFreeze(finalResult);
    if (frozen.result) {
      this.knownResults.set(frozen.result, selectionSet);
    }
    return frozen;
  };
  StoreReader2.prototype.execSubSelectedArrayImpl = function(_a) {
    var _this = this;
    var field = _a.field, array = _a.array, enclosingRef = _a.enclosingRef, context = _a.context;
    var missing;
    var missingMerger = new DeepMerger();
    function handleMissing(childResult, i) {
      var _a2;
      if (childResult.missing) {
        missing = missingMerger.merge(missing, (_a2 = {}, _a2[i] = childResult.missing, _a2));
      }
      return childResult.result;
    }
    if (field.selectionSet) {
      array = array.filter(context.store.canRead);
    }
    array = array.map(function(item, i) {
      if (item === null) {
        return null;
      }
      if (isArray(item)) {
        return handleMissing(_this.executeSubSelectedArray({
          field,
          array: item,
          enclosingRef,
          context
        }), i);
      }
      if (field.selectionSet) {
        return handleMissing(_this.executeSelectionSet({
          selectionSet: field.selectionSet,
          objectOrReference: item,
          enclosingRef: isReference(item) ? item : enclosingRef,
          context
        }), i);
      }
      return item;
    });
    return {
      result: context.canonizeResults ? this.canon.admit(array) : array,
      missing
    };
  };
  return StoreReader2;
}();
function firstMissing(tree) {
  try {
    JSON.stringify(tree, function(_, value) {
      if (typeof value === "string")
        throw value;
      return value;
    });
  } catch (result) {
    return result;
  }
}
let currentContext = null;
const MISSING_VALUE = {};
let idCounter = 1;
const makeSlotClass = () => class Slot {
  constructor() {
    this.id = [
      "slot",
      idCounter++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let context = currentContext; context; context = context.parent) {
      if (this.id in context.slots) {
        const value = context.slots[this.id];
        if (value === MISSING_VALUE)
          break;
        if (context !== currentContext) {
          currentContext.slots[this.id] = value;
        }
        return true;
      }
    }
    if (currentContext) {
      currentContext.slots[this.id] = MISSING_VALUE;
    }
    return false;
  }
  getValue() {
    if (this.hasValue()) {
      return currentContext.slots[this.id];
    }
  }
  withValue(value, callback, args, thisArg) {
    const slots = {
      __proto__: null,
      [this.id]: value
    };
    const parent = currentContext;
    currentContext = { parent, slots };
    try {
      return callback.apply(thisArg, args);
    } finally {
      currentContext = parent;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(callback) {
    const context = currentContext;
    return function() {
      const saved = currentContext;
      try {
        currentContext = context;
        return callback.apply(this, arguments);
      } finally {
        currentContext = saved;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(callback, args, thisArg) {
    if (currentContext) {
      const saved = currentContext;
      try {
        currentContext = null;
        return callback.apply(thisArg, args);
      } finally {
        currentContext = saved;
      }
    } else {
      return callback.apply(thisArg, args);
    }
  }
};
function maybe(fn) {
  try {
    return fn();
  } catch (ignored) {
  }
}
const globalKey = "@wry/context:Slot";
const host$1 = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  maybe(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  maybe(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
);
const globalHost = host$1;
const Slot = globalHost[globalKey] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[globalKey] || function(Slot2) {
  try {
    Object.defineProperty(globalHost, globalKey, {
      value: Slot2,
      enumerable: false,
      writable: false,
      // When it was possible for globalHost to be the Array constructor (a
      // legacy Slot dedup strategy), it was important for the property to be
      // configurable:true so it could be deleted. That does not seem to be as
      // important when globalHost is the global object, but I don't want to
      // cause similar problems again, and configurable:true seems safest.
      // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
      configurable: true
    });
  } finally {
    return Slot2;
  }
}(makeSlotClass());
var cacheSlot = new Slot();
var cacheInfoMap = /* @__PURE__ */ new WeakMap();
function getCacheInfo(cache) {
  var info = cacheInfoMap.get(cache);
  if (!info) {
    cacheInfoMap.set(cache, info = {
      vars: /* @__PURE__ */ new Set(),
      dep: dep()
    });
  }
  return info;
}
function forgetCache(cache) {
  getCacheInfo(cache).vars.forEach(function(rv) {
    return rv.forgetCache(cache);
  });
}
function recallCache(cache) {
  getCacheInfo(cache).vars.forEach(function(rv) {
    return rv.attachCache(cache);
  });
}
function makeVar(value) {
  var caches = /* @__PURE__ */ new Set();
  var listeners = /* @__PURE__ */ new Set();
  var rv = function(newValue) {
    if (arguments.length > 0) {
      if (value !== newValue) {
        value = newValue;
        caches.forEach(function(cache2) {
          getCacheInfo(cache2).dep.dirty(rv);
          broadcast(cache2);
        });
        var oldListeners = Array.from(listeners);
        listeners.clear();
        oldListeners.forEach(function(listener) {
          return listener(value);
        });
      }
    } else {
      var cache = cacheSlot.getValue();
      if (cache) {
        attach(cache);
        getCacheInfo(cache).dep(rv);
      }
    }
    return value;
  };
  rv.onNextChange = function(listener) {
    listeners.add(listener);
    return function() {
      listeners.delete(listener);
    };
  };
  var attach = rv.attachCache = function(cache) {
    caches.add(cache);
    getCacheInfo(cache).vars.add(rv);
    return rv;
  };
  rv.forgetCache = function(cache) {
    return caches.delete(cache);
  };
  return rv;
}
function broadcast(cache) {
  if (cache.broadcastWatches) {
    cache.broadcastWatches();
  }
}
var specifierInfoCache = /* @__PURE__ */ Object.create(null);
function lookupSpecifierInfo(spec) {
  var cacheKey = JSON.stringify(spec);
  return specifierInfoCache[cacheKey] || (specifierInfoCache[cacheKey] = /* @__PURE__ */ Object.create(null));
}
function keyFieldsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyFieldsFn || (info.keyFieldsFn = function(object, context) {
    var extract = function(from, key) {
      return context.readField(key, from);
    };
    var keyObject = context.keyObject = collectSpecifierPaths(specifier, function(schemaKeyPath) {
      var extracted = extractKeyPath(context.storeObject, schemaKeyPath, extract);
      if (extracted === void 0 && object !== context.storeObject && hasOwn.call(object, schemaKeyPath[0])) {
        extracted = extractKeyPath(object, schemaKeyPath, extractKey);
      }
      invariant$1(extracted !== void 0, 2);
      return extracted;
    });
    return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
  });
}
function keyArgsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyArgsFn || (info.keyArgsFn = function(args, _a) {
    var field = _a.field, variables = _a.variables, fieldName = _a.fieldName;
    var collected = collectSpecifierPaths(specifier, function(keyPath) {
      var firstKey = keyPath[0];
      var firstChar = firstKey.charAt(0);
      if (firstChar === "@") {
        if (field && isNonEmptyArray(field.directives)) {
          var directiveName_1 = firstKey.slice(1);
          var d = field.directives.find(function(d2) {
            return d2.name.value === directiveName_1;
          });
          var directiveArgs = d && argumentsObjectFromField(d, variables);
          return directiveArgs && extractKeyPath(directiveArgs, keyPath.slice(1));
        }
        return;
      }
      if (firstChar === "$") {
        var variableName = firstKey.slice(1);
        if (variables && hasOwn.call(variables, variableName)) {
          var varKeyPath = keyPath.slice(0);
          varKeyPath[0] = variableName;
          return extractKeyPath(variables, varKeyPath);
        }
        return;
      }
      if (args) {
        return extractKeyPath(args, keyPath);
      }
    });
    var suffix = JSON.stringify(collected);
    if (args || suffix !== "{}") {
      fieldName += ":" + suffix;
    }
    return fieldName;
  });
}
function collectSpecifierPaths(specifier, extractor) {
  var merger = new DeepMerger();
  return getSpecifierPaths(specifier).reduce(function(collected, path) {
    var _a;
    var toMerge = extractor(path);
    if (toMerge !== void 0) {
      for (var i = path.length - 1; i >= 0; --i) {
        toMerge = (_a = {}, _a[path[i]] = toMerge, _a);
      }
      collected = merger.merge(collected, toMerge);
    }
    return collected;
  }, /* @__PURE__ */ Object.create(null));
}
function getSpecifierPaths(spec) {
  var info = lookupSpecifierInfo(spec);
  if (!info.paths) {
    var paths_1 = info.paths = [];
    var currentPath_1 = [];
    spec.forEach(function(s, i) {
      if (isArray(s)) {
        getSpecifierPaths(s).forEach(function(p) {
          return paths_1.push(currentPath_1.concat(p));
        });
        currentPath_1.length = 0;
      } else {
        currentPath_1.push(s);
        if (!isArray(spec[i + 1])) {
          paths_1.push(currentPath_1.slice(0));
          currentPath_1.length = 0;
        }
      }
    });
  }
  return info.paths;
}
function extractKey(object, key) {
  return object[key];
}
function extractKeyPath(object, path, extract) {
  extract = extract || extractKey;
  return normalize$1(path.reduce(function reducer(obj, key) {
    return isArray(obj) ? obj.map(function(child) {
      return reducer(child, key);
    }) : obj && extract(obj, key);
  }, object));
}
function normalize$1(value) {
  if (isNonNullObject(value)) {
    if (isArray(value)) {
      return value.map(normalize$1);
    }
    return collectSpecifierPaths(Object.keys(value).sort(), function(path) {
      return extractKeyPath(value, path);
    });
  }
  return value;
}
getStoreKeyName.setStringify(canonicalStringify);
function argsFromFieldSpecifier(spec) {
  return spec.args !== void 0 ? spec.args : spec.field ? argumentsObjectFromField(spec.field, spec.variables) : null;
}
var nullKeyFieldsFn = function() {
  return void 0;
};
var simpleKeyArgsFn = function(_args, context) {
  return context.fieldName;
};
var mergeTrueFn = function(existing, incoming, _a) {
  var mergeObjects = _a.mergeObjects;
  return mergeObjects(existing, incoming);
};
var mergeFalseFn = function(_, incoming) {
  return incoming;
};
var Policies = function() {
  function Policies2(config2) {
    this.config = config2;
    this.typePolicies = /* @__PURE__ */ Object.create(null);
    this.toBeAdded = /* @__PURE__ */ Object.create(null);
    this.supertypeMap = /* @__PURE__ */ new Map();
    this.fuzzySubtypes = /* @__PURE__ */ new Map();
    this.rootIdsByTypename = /* @__PURE__ */ Object.create(null);
    this.rootTypenamesById = /* @__PURE__ */ Object.create(null);
    this.usingPossibleTypes = false;
    this.config = __assign({ dataIdFromObject: defaultDataIdFromObject }, config2);
    this.cache = this.config.cache;
    this.setRootTypename("Query");
    this.setRootTypename("Mutation");
    this.setRootTypename("Subscription");
    if (config2.possibleTypes) {
      this.addPossibleTypes(config2.possibleTypes);
    }
    if (config2.typePolicies) {
      this.addTypePolicies(config2.typePolicies);
    }
  }
  Policies2.prototype.identify = function(object, partialContext) {
    var _a;
    var policies = this;
    var typename = partialContext && (partialContext.typename || ((_a = partialContext.storeObject) === null || _a === void 0 ? void 0 : _a.__typename)) || object.__typename;
    if (typename === this.rootTypenamesById.ROOT_QUERY) {
      return ["ROOT_QUERY"];
    }
    var storeObject = partialContext && partialContext.storeObject || object;
    var context = __assign(__assign({}, partialContext), { typename, storeObject, readField: partialContext && partialContext.readField || function() {
      var options = normalizeReadFieldOptions(arguments, storeObject);
      return policies.readField(options, {
        store: policies.cache["data"],
        variables: options.variables
      });
    } });
    var id;
    var policy = typename && this.getTypePolicy(typename);
    var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
    while (keyFn) {
      var specifierOrId = keyFn(object, context);
      if (isArray(specifierOrId)) {
        keyFn = keyFieldsFnFromSpecifier(specifierOrId);
      } else {
        id = specifierOrId;
        break;
      }
    }
    id = id ? String(id) : void 0;
    return context.keyObject ? [id, context.keyObject] : [id];
  };
  Policies2.prototype.addTypePolicies = function(typePolicies) {
    var _this = this;
    Object.keys(typePolicies).forEach(function(typename) {
      var _a = typePolicies[typename], queryType = _a.queryType, mutationType = _a.mutationType, subscriptionType = _a.subscriptionType, incoming = __rest(_a, ["queryType", "mutationType", "subscriptionType"]);
      if (queryType)
        _this.setRootTypename("Query", typename);
      if (mutationType)
        _this.setRootTypename("Mutation", typename);
      if (subscriptionType)
        _this.setRootTypename("Subscription", typename);
      if (hasOwn.call(_this.toBeAdded, typename)) {
        _this.toBeAdded[typename].push(incoming);
      } else {
        _this.toBeAdded[typename] = [incoming];
      }
    });
  };
  Policies2.prototype.updateTypePolicy = function(typename, incoming) {
    var _this = this;
    var existing = this.getTypePolicy(typename);
    var keyFields = incoming.keyFields, fields = incoming.fields;
    function setMerge(existing2, merge) {
      existing2.merge = typeof merge === "function" ? merge : merge === true ? mergeTrueFn : merge === false ? mergeFalseFn : existing2.merge;
    }
    setMerge(existing, incoming.merge);
    existing.keyFn = keyFields === false ? nullKeyFieldsFn : isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) : typeof keyFields === "function" ? keyFields : existing.keyFn;
    if (fields) {
      Object.keys(fields).forEach(function(fieldName) {
        var existing2 = _this.getFieldPolicy(typename, fieldName, true);
        var incoming2 = fields[fieldName];
        if (typeof incoming2 === "function") {
          existing2.read = incoming2;
        } else {
          var keyArgs = incoming2.keyArgs, read = incoming2.read, merge = incoming2.merge;
          existing2.keyFn = keyArgs === false ? simpleKeyArgsFn : isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) : typeof keyArgs === "function" ? keyArgs : existing2.keyFn;
          if (typeof read === "function") {
            existing2.read = read;
          }
          setMerge(existing2, merge);
        }
        if (existing2.read && existing2.merge) {
          existing2.keyFn = existing2.keyFn || simpleKeyArgsFn;
        }
      });
    }
  };
  Policies2.prototype.setRootTypename = function(which, typename) {
    if (typename === void 0) {
      typename = which;
    }
    var rootId = "ROOT_" + which.toUpperCase();
    var old = this.rootTypenamesById[rootId];
    if (typename !== old) {
      invariant$1(!old || old === which, 3);
      if (old)
        delete this.rootIdsByTypename[old];
      this.rootIdsByTypename[typename] = rootId;
      this.rootTypenamesById[rootId] = typename;
    }
  };
  Policies2.prototype.addPossibleTypes = function(possibleTypes) {
    var _this = this;
    this.usingPossibleTypes = true;
    Object.keys(possibleTypes).forEach(function(supertype) {
      _this.getSupertypeSet(supertype, true);
      possibleTypes[supertype].forEach(function(subtype) {
        _this.getSupertypeSet(subtype, true).add(supertype);
        var match = subtype.match(TypeOrFieldNameRegExp);
        if (!match || match[0] !== subtype) {
          _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
        }
      });
    });
  };
  Policies2.prototype.getTypePolicy = function(typename) {
    var _this = this;
    if (!hasOwn.call(this.typePolicies, typename)) {
      var policy_1 = this.typePolicies[typename] = /* @__PURE__ */ Object.create(null);
      policy_1.fields = /* @__PURE__ */ Object.create(null);
      var supertypes = this.supertypeMap.get(typename);
      if (supertypes && supertypes.size) {
        supertypes.forEach(function(supertype) {
          var _a = _this.getTypePolicy(supertype), fields = _a.fields, rest = __rest(_a, ["fields"]);
          Object.assign(policy_1, rest);
          Object.assign(policy_1.fields, fields);
        });
      }
    }
    var inbox = this.toBeAdded[typename];
    if (inbox && inbox.length) {
      inbox.splice(0).forEach(function(policy) {
        _this.updateTypePolicy(typename, policy);
      });
    }
    return this.typePolicies[typename];
  };
  Policies2.prototype.getFieldPolicy = function(typename, fieldName, createIfMissing) {
    if (typename) {
      var fieldPolicies = this.getTypePolicy(typename).fields;
      return fieldPolicies[fieldName] || createIfMissing && (fieldPolicies[fieldName] = /* @__PURE__ */ Object.create(null));
    }
  };
  Policies2.prototype.getSupertypeSet = function(subtype, createIfMissing) {
    var supertypeSet = this.supertypeMap.get(subtype);
    if (!supertypeSet && createIfMissing) {
      this.supertypeMap.set(subtype, supertypeSet = /* @__PURE__ */ new Set());
    }
    return supertypeSet;
  };
  Policies2.prototype.fragmentMatches = function(fragment, typename, result, variables) {
    var _this = this;
    if (!fragment.typeCondition)
      return true;
    if (!typename)
      return false;
    var supertype = fragment.typeCondition.name.value;
    if (typename === supertype)
      return true;
    if (this.usingPossibleTypes && this.supertypeMap.has(supertype)) {
      var typenameSupertypeSet = this.getSupertypeSet(typename, true);
      var workQueue_1 = [typenameSupertypeSet];
      var maybeEnqueue_1 = function(subtype) {
        var supertypeSet2 = _this.getSupertypeSet(subtype, false);
        if (supertypeSet2 && supertypeSet2.size && workQueue_1.indexOf(supertypeSet2) < 0) {
          workQueue_1.push(supertypeSet2);
        }
      };
      var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
      for (var i = 0; i < workQueue_1.length; ++i) {
        var supertypeSet = workQueue_1[i];
        if (supertypeSet.has(supertype)) {
          if (!typenameSupertypeSet.has(supertype)) {
            typenameSupertypeSet.add(supertype);
          }
          return true;
        }
        supertypeSet.forEach(maybeEnqueue_1);
        if (needToCheckFuzzySubtypes && i === workQueue_1.length - 1 && selectionSetMatchesResult(fragment.selectionSet, result, variables)) {
          needToCheckFuzzySubtypes = false;
          this.fuzzySubtypes.forEach(function(regExp, fuzzyString) {
            var match = typename.match(regExp);
            if (match && match[0] === typename) {
              maybeEnqueue_1(fuzzyString);
            }
          });
        }
      }
    }
    return false;
  };
  Policies2.prototype.hasKeyArgs = function(typename, fieldName) {
    var policy = this.getFieldPolicy(typename, fieldName, false);
    return !!(policy && policy.keyFn);
  };
  Policies2.prototype.getStoreFieldName = function(fieldSpec) {
    var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
    var policy = this.getFieldPolicy(typename, fieldName, false);
    var storeFieldName;
    var keyFn = policy && policy.keyFn;
    if (keyFn && typename) {
      var context = {
        typename,
        fieldName,
        field: fieldSpec.field || null,
        variables: fieldSpec.variables
      };
      var args = argsFromFieldSpecifier(fieldSpec);
      while (keyFn) {
        var specifierOrString = keyFn(args, context);
        if (isArray(specifierOrString)) {
          keyFn = keyArgsFnFromSpecifier(specifierOrString);
        } else {
          storeFieldName = specifierOrString || fieldName;
          break;
        }
      }
    }
    if (storeFieldName === void 0) {
      storeFieldName = fieldSpec.field ? storeKeyNameFromField(fieldSpec.field, fieldSpec.variables) : getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
    }
    if (storeFieldName === false) {
      return fieldName;
    }
    return fieldName === fieldNameFromStoreName(storeFieldName) ? storeFieldName : fieldName + ":" + storeFieldName;
  };
  Policies2.prototype.readField = function(options, context) {
    var objectOrReference = options.from;
    if (!objectOrReference)
      return;
    var nameOrField = options.field || options.fieldName;
    if (!nameOrField)
      return;
    if (options.typename === void 0) {
      var typename = context.store.getFieldValue(objectOrReference, "__typename");
      if (typename)
        options.typename = typename;
    }
    var storeFieldName = this.getStoreFieldName(options);
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
    var policy = this.getFieldPolicy(options.typename, fieldName, false);
    var read = policy && policy.read;
    if (read) {
      var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(isReference(objectOrReference) ? objectOrReference.__ref : objectOrReference, storeFieldName));
      return cacheSlot.withValue(this.cache, read, [existing, readOptions]);
    }
    return existing;
  };
  Policies2.prototype.getReadFunction = function(typename, fieldName) {
    var policy = this.getFieldPolicy(typename, fieldName, false);
    return policy && policy.read;
  };
  Policies2.prototype.getMergeFunction = function(parentTypename, fieldName, childTypename) {
    var policy = this.getFieldPolicy(parentTypename, fieldName, false);
    var merge = policy && policy.merge;
    if (!merge && childTypename) {
      policy = this.getTypePolicy(childTypename);
      merge = policy && policy.merge;
    }
    return merge;
  };
  Policies2.prototype.runMergeFunction = function(existing, incoming, _a, context, storage) {
    var field = _a.field, typename = _a.typename, merge = _a.merge;
    if (merge === mergeTrueFn) {
      return makeMergeObjectsFunction(context.store)(existing, incoming);
    }
    if (merge === mergeFalseFn) {
      return incoming;
    }
    if (context.overwrite) {
      existing = void 0;
    }
    return merge(existing, incoming, makeFieldFunctionOptions(this, void 0, { typename, fieldName: field.name.value, field, variables: context.variables }, context, storage || /* @__PURE__ */ Object.create(null)));
  };
  return Policies2;
}();
function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
  var storeFieldName = policies.getStoreFieldName(fieldSpec);
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var variables = fieldSpec.variables || context.variables;
  var _a = context.store, toReference = _a.toReference, canRead = _a.canRead;
  return {
    args: argsFromFieldSpecifier(fieldSpec),
    field: fieldSpec.field || null,
    fieldName,
    storeFieldName,
    variables,
    isReference,
    toReference,
    storage,
    cache: policies.cache,
    canRead,
    readField: function() {
      return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, variables), context);
    },
    mergeObjects: makeMergeObjectsFunction(context.store)
  };
}
function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
  var fieldNameOrOptions = readFieldArgs[0], from = readFieldArgs[1], argc = readFieldArgs.length;
  var options;
  if (typeof fieldNameOrOptions === "string") {
    options = {
      fieldName: fieldNameOrOptions,
      from: argc > 1 ? from : objectOrReference
    };
  } else {
    options = __assign({}, fieldNameOrOptions);
    if (!hasOwn.call(options, "from")) {
      options.from = objectOrReference;
    }
  }
  if (void 0 === options.variables) {
    options.variables = variables;
  }
  return options;
}
function makeMergeObjectsFunction(store) {
  return function mergeObjects(existing, incoming) {
    if (isArray(existing) || isArray(incoming)) {
      throw new InvariantError(4);
    }
    if (isNonNullObject(existing) && isNonNullObject(incoming)) {
      var eType = store.getFieldValue(existing, "__typename");
      var iType = store.getFieldValue(incoming, "__typename");
      var typesDiffer = eType && iType && eType !== iType;
      if (typesDiffer) {
        return incoming;
      }
      if (isReference(existing) && storeValueIsStoreObject(incoming)) {
        store.merge(existing.__ref, incoming);
        return existing;
      }
      if (storeValueIsStoreObject(existing) && isReference(incoming)) {
        store.merge(existing, incoming.__ref);
        return incoming;
      }
      if (storeValueIsStoreObject(existing) && storeValueIsStoreObject(incoming)) {
        return __assign(__assign({}, existing), incoming);
      }
    }
    return incoming;
  };
}
function getContextFlavor(context, clientOnly, deferred) {
  var key = "".concat(clientOnly).concat(deferred);
  var flavored = context.flavors.get(key);
  if (!flavored) {
    context.flavors.set(key, flavored = context.clientOnly === clientOnly && context.deferred === deferred ? context : __assign(__assign({}, context), { clientOnly, deferred }));
  }
  return flavored;
}
var StoreWriter = function() {
  function StoreWriter2(cache, reader, fragments) {
    this.cache = cache;
    this.reader = reader;
    this.fragments = fragments;
  }
  StoreWriter2.prototype.writeToStore = function(store, _a) {
    var _this = this;
    var query = _a.query, result = _a.result, dataId = _a.dataId, variables = _a.variables, overwrite = _a.overwrite;
    var operationDefinition = getOperationDefinition(query);
    var merger = makeProcessedFieldsMerger();
    variables = __assign(__assign({}, getDefaultValues(operationDefinition)), variables);
    var context = __assign(__assign({ store, written: /* @__PURE__ */ Object.create(null), merge: function(existing, incoming) {
      return merger.merge(existing, incoming);
    }, variables, varString: canonicalStringify(variables) }, extractFragmentContext(query, this.fragments)), { overwrite: !!overwrite, incomingById: /* @__PURE__ */ new Map(), clientOnly: false, deferred: false, flavors: /* @__PURE__ */ new Map() });
    var ref2 = this.processSelectionSet({
      result: result || /* @__PURE__ */ Object.create(null),
      dataId,
      selectionSet: operationDefinition.selectionSet,
      mergeTree: { map: /* @__PURE__ */ new Map() },
      context
    });
    if (!isReference(ref2)) {
      throw new InvariantError(7);
    }
    context.incomingById.forEach(function(_a2, dataId2) {
      var storeObject = _a2.storeObject, mergeTree = _a2.mergeTree;
      _a2.fieldNodeSet;
      var entityRef = makeReference(dataId2);
      if (mergeTree && mergeTree.map.size) {
        var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);
        if (isReference(applied)) {
          return;
        }
        storeObject = applied;
      }
      store.merge(dataId2, storeObject);
    });
    store.retain(ref2.__ref);
    return ref2;
  };
  StoreWriter2.prototype.processSelectionSet = function(_a) {
    var _this = this;
    var dataId = _a.dataId, result = _a.result, selectionSet = _a.selectionSet, context = _a.context, mergeTree = _a.mergeTree;
    var policies = this.cache.policies;
    var incoming = /* @__PURE__ */ Object.create(null);
    var typename = dataId && policies.rootTypenamesById[dataId] || getTypenameFromResult(result, selectionSet, context.fragmentMap) || dataId && context.store.get(dataId, "__typename");
    if ("string" === typeof typename) {
      incoming.__typename = typename;
    }
    var readField = function() {
      var options = normalizeReadFieldOptions(arguments, incoming, context.variables);
      if (isReference(options.from)) {
        var info = context.incomingById.get(options.from.__ref);
        if (info) {
          var result_1 = policies.readField(__assign(__assign({}, options), { from: info.storeObject }), context);
          if (result_1 !== void 0) {
            return result_1;
          }
        }
      }
      return policies.readField(options, context);
    };
    var fieldNodeSet = /* @__PURE__ */ new Set();
    this.flattenFields(selectionSet, result, context, typename).forEach(function(context2, field) {
      var _a2;
      var resultFieldKey = resultKeyNameFromField(field);
      var value = result[resultFieldKey];
      fieldNodeSet.add(field);
      if (value !== void 0) {
        var storeFieldName = policies.getStoreFieldName({
          typename,
          fieldName: field.name.value,
          field,
          variables: context2.variables
        });
        var childTree = getChildMergeTree(mergeTree, storeFieldName);
        var incomingValue = _this.processFieldValue(value, field, field.selectionSet ? getContextFlavor(context2, false, false) : context2, childTree);
        var childTypename = void 0;
        if (field.selectionSet && (isReference(incomingValue) || storeValueIsStoreObject(incomingValue))) {
          childTypename = readField("__typename", incomingValue);
        }
        var merge = policies.getMergeFunction(typename, field.name.value, childTypename);
        if (merge) {
          childTree.info = {
            field,
            typename,
            merge
          };
        } else {
          maybeRecycleChildMergeTree(mergeTree, storeFieldName);
        }
        incoming = context2.merge(incoming, (_a2 = {}, _a2[storeFieldName] = incomingValue, _a2));
      }
    });
    try {
      var _b = policies.identify(result, {
        typename,
        selectionSet,
        fragmentMap: context.fragmentMap,
        storeObject: incoming,
        readField
      }), id = _b[0], keyObject = _b[1];
      dataId = dataId || id;
      if (keyObject) {
        incoming = context.merge(incoming, keyObject);
      }
    } catch (e) {
      if (!dataId)
        throw e;
    }
    if ("string" === typeof dataId) {
      var dataRef = makeReference(dataId);
      var sets = context.written[dataId] || (context.written[dataId] = []);
      if (sets.indexOf(selectionSet) >= 0)
        return dataRef;
      sets.push(selectionSet);
      if (this.reader && this.reader.isFresh(result, dataRef, selectionSet, context)) {
        return dataRef;
      }
      var previous_1 = context.incomingById.get(dataId);
      if (previous_1) {
        previous_1.storeObject = context.merge(previous_1.storeObject, incoming);
        previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
        fieldNodeSet.forEach(function(field) {
          return previous_1.fieldNodeSet.add(field);
        });
      } else {
        context.incomingById.set(dataId, {
          storeObject: incoming,
          mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
          fieldNodeSet
        });
      }
      return dataRef;
    }
    return incoming;
  };
  StoreWriter2.prototype.processFieldValue = function(value, field, context, mergeTree) {
    var _this = this;
    if (!field.selectionSet || value === null) {
      return value;
    }
    if (isArray(value)) {
      return value.map(function(item, i) {
        var value2 = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
        maybeRecycleChildMergeTree(mergeTree, i);
        return value2;
      });
    }
    return this.processSelectionSet({
      result: value,
      selectionSet: field.selectionSet,
      context,
      mergeTree
    });
  };
  StoreWriter2.prototype.flattenFields = function(selectionSet, result, context, typename) {
    if (typename === void 0) {
      typename = getTypenameFromResult(result, selectionSet, context.fragmentMap);
    }
    var fieldMap = /* @__PURE__ */ new Map();
    var policies = this.cache.policies;
    var limitingTrie = new Trie(false);
    (function flatten(selectionSet2, inheritedContext) {
      var visitedNode = limitingTrie.lookup(selectionSet2, inheritedContext.clientOnly, inheritedContext.deferred);
      if (visitedNode.visited)
        return;
      visitedNode.visited = true;
      selectionSet2.selections.forEach(function(selection) {
        if (!shouldInclude(selection, context.variables))
          return;
        var clientOnly = inheritedContext.clientOnly, deferred = inheritedContext.deferred;
        if (!(clientOnly && deferred) && isNonEmptyArray(selection.directives)) {
          selection.directives.forEach(function(dir) {
            var name = dir.name.value;
            if (name === "client")
              clientOnly = true;
            if (name === "defer") {
              var args = argumentsObjectFromField(dir, context.variables);
              if (!args || args.if !== false) {
                deferred = true;
              }
            }
          });
        }
        if (isField(selection)) {
          var existing = fieldMap.get(selection);
          if (existing) {
            clientOnly = clientOnly && existing.clientOnly;
            deferred = deferred && existing.deferred;
          }
          fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
        } else {
          var fragment = getFragmentFromSelection(selection, context.lookupFragment);
          if (!fragment && selection.kind === Kind.FRAGMENT_SPREAD) {
            throw new InvariantError(8);
          }
          if (fragment && policies.fragmentMatches(fragment, typename, result, context.variables)) {
            flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
          }
        }
      });
    })(selectionSet, context);
    return fieldMap;
  };
  StoreWriter2.prototype.applyMerges = function(mergeTree, existing, incoming, context, getStorageArgs) {
    var _a;
    var _this = this;
    if (mergeTree.map.size && !isReference(incoming)) {
      var e_1 = !isArray(incoming) && (isReference(existing) || storeValueIsStoreObject(existing)) ? existing : void 0;
      var i_1 = incoming;
      if (e_1 && !getStorageArgs) {
        getStorageArgs = [isReference(e_1) ? e_1.__ref : e_1];
      }
      var changedFields_1;
      var getValue_1 = function(from, name) {
        return isArray(from) ? typeof name === "number" ? from[name] : void 0 : context.store.getFieldValue(from, String(name));
      };
      mergeTree.map.forEach(function(childTree, storeFieldName) {
        var eVal = getValue_1(e_1, storeFieldName);
        var iVal = getValue_1(i_1, storeFieldName);
        if (void 0 === iVal)
          return;
        if (getStorageArgs) {
          getStorageArgs.push(storeFieldName);
        }
        var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
        if (aVal !== iVal) {
          changedFields_1 = changedFields_1 || /* @__PURE__ */ new Map();
          changedFields_1.set(storeFieldName, aVal);
        }
        if (getStorageArgs) {
          invariant$1(getStorageArgs.pop() === storeFieldName);
        }
      });
      if (changedFields_1) {
        incoming = isArray(i_1) ? i_1.slice(0) : __assign({}, i_1);
        changedFields_1.forEach(function(value, name) {
          incoming[name] = value;
        });
      }
    }
    if (mergeTree.info) {
      return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a = context.store).getStorage.apply(_a, getStorageArgs));
    }
    return incoming;
  };
  return StoreWriter2;
}();
var emptyMergeTreePool = [];
function getChildMergeTree(_a, name) {
  var map = _a.map;
  if (!map.has(name)) {
    map.set(name, emptyMergeTreePool.pop() || { map: /* @__PURE__ */ new Map() });
  }
  return map.get(name);
}
function mergeMergeTrees(left, right) {
  if (left === right || !right || mergeTreeIsEmpty(right))
    return left;
  if (!left || mergeTreeIsEmpty(left))
    return right;
  var info = left.info && right.info ? __assign(__assign({}, left.info), right.info) : left.info || right.info;
  var needToMergeMaps = left.map.size && right.map.size;
  var map = needToMergeMaps ? /* @__PURE__ */ new Map() : left.map.size ? left.map : right.map;
  var merged = { info, map };
  if (needToMergeMaps) {
    var remainingRightKeys_1 = new Set(right.map.keys());
    left.map.forEach(function(leftTree, key) {
      merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
      remainingRightKeys_1.delete(key);
    });
    remainingRightKeys_1.forEach(function(key) {
      merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
    });
  }
  return merged;
}
function mergeTreeIsEmpty(tree) {
  return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a, name) {
  var map = _a.map;
  var childTree = map.get(name);
  if (childTree && mergeTreeIsEmpty(childTree)) {
    emptyMergeTreePool.push(childTree);
    map.delete(name);
  }
}
var InMemoryCache = function(_super) {
  __extends(InMemoryCache2, _super);
  function InMemoryCache2(config2) {
    if (config2 === void 0) {
      config2 = {};
    }
    var _this = _super.call(this) || this;
    _this.watches = /* @__PURE__ */ new Set();
    _this.typenameDocumentCache = /* @__PURE__ */ new Map();
    _this.makeVar = makeVar;
    _this.txCount = 0;
    _this.config = normalizeConfig(config2);
    _this.addTypename = !!_this.config.addTypename;
    _this.policies = new Policies({
      cache: _this,
      dataIdFromObject: _this.config.dataIdFromObject,
      possibleTypes: _this.config.possibleTypes,
      typePolicies: _this.config.typePolicies
    });
    _this.init();
    return _this;
  }
  InMemoryCache2.prototype.init = function() {
    var rootStore = this.data = new EntityStore.Root({
      policies: this.policies,
      resultCaching: this.config.resultCaching
    });
    this.optimisticData = rootStore.stump;
    this.resetResultCache();
  };
  InMemoryCache2.prototype.resetResultCache = function(resetResultIdentities) {
    var _this = this;
    var previousReader = this.storeReader;
    var fragments = this.config.fragments;
    this.storeWriter = new StoreWriter(this, this.storeReader = new StoreReader({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: shouldCanonizeResults(this.config),
      canon: resetResultIdentities ? void 0 : previousReader && previousReader.canon,
      fragments
    }), fragments);
    this.maybeBroadcastWatch = wrap$1(function(c, options) {
      return _this.broadcastWatch(c, options);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(c) {
        var store = c.optimistic ? _this.optimisticData : _this.data;
        if (supportsResultCaching(store)) {
          var optimistic = c.optimistic, id = c.id, variables = c.variables;
          return store.makeCacheKey(c.query, c.callback, canonicalStringify({ optimistic, id, variables }));
        }
      }
    });
    (/* @__PURE__ */ new Set([
      this.data.group,
      this.optimisticData.group
    ])).forEach(function(group) {
      return group.resetCaching();
    });
  };
  InMemoryCache2.prototype.restore = function(data) {
    this.init();
    if (data)
      this.data.replace(data);
    return this;
  };
  InMemoryCache2.prototype.extract = function(optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return (optimistic ? this.optimisticData : this.data).extract();
  };
  InMemoryCache2.prototype.read = function(options) {
    var _a = options.returnPartialData, returnPartialData = _a === void 0 ? false : _a;
    try {
      return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData })).result || null;
    } catch (e) {
      if (e instanceof MissingFieldError) {
        return null;
      }
      throw e;
    }
  };
  InMemoryCache2.prototype.write = function(options) {
    try {
      ++this.txCount;
      return this.storeWriter.writeToStore(this.data, options);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.modify = function(options) {
    if (hasOwn.call(options, "id") && !options.id) {
      return false;
    }
    var store = options.optimistic ? this.optimisticData : this.data;
    try {
      ++this.txCount;
      return store.modify(options.id || "ROOT_QUERY", options.fields);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.diff = function(options) {
    return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
  };
  InMemoryCache2.prototype.watch = function(watch2) {
    var _this = this;
    if (!this.watches.size) {
      recallCache(this);
    }
    this.watches.add(watch2);
    if (watch2.immediate) {
      this.maybeBroadcastWatch(watch2);
    }
    return function() {
      if (_this.watches.delete(watch2) && !_this.watches.size) {
        forgetCache(_this);
      }
      _this.maybeBroadcastWatch.forget(watch2);
    };
  };
  InMemoryCache2.prototype.gc = function(options) {
    canonicalStringify.reset();
    var ids = this.optimisticData.gc();
    if (options && !this.txCount) {
      if (options.resetResultCache) {
        this.resetResultCache(options.resetResultIdentities);
      } else if (options.resetResultIdentities) {
        this.storeReader.resetCanon();
      }
    }
    return ids;
  };
  InMemoryCache2.prototype.retain = function(rootId, optimistic) {
    return (optimistic ? this.optimisticData : this.data).retain(rootId);
  };
  InMemoryCache2.prototype.release = function(rootId, optimistic) {
    return (optimistic ? this.optimisticData : this.data).release(rootId);
  };
  InMemoryCache2.prototype.identify = function(object) {
    if (isReference(object))
      return object.__ref;
    try {
      return this.policies.identify(object)[0];
    } catch (e) {
    }
  };
  InMemoryCache2.prototype.evict = function(options) {
    if (!options.id) {
      if (hasOwn.call(options, "id")) {
        return false;
      }
      options = __assign(__assign({}, options), { id: "ROOT_QUERY" });
    }
    try {
      ++this.txCount;
      return this.optimisticData.evict(options, this.data);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.reset = function(options) {
    var _this = this;
    this.init();
    canonicalStringify.reset();
    if (options && options.discardWatches) {
      this.watches.forEach(function(watch2) {
        return _this.maybeBroadcastWatch.forget(watch2);
      });
      this.watches.clear();
      forgetCache(this);
    } else {
      this.broadcastWatches();
    }
    return Promise.resolve();
  };
  InMemoryCache2.prototype.removeOptimistic = function(idToRemove) {
    var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
    if (newOptimisticData !== this.optimisticData) {
      this.optimisticData = newOptimisticData;
      this.broadcastWatches();
    }
  };
  InMemoryCache2.prototype.batch = function(options) {
    var _this = this;
    var update = options.update, _a = options.optimistic, optimistic = _a === void 0 ? true : _a, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
    var updateResult;
    var perform = function(layer) {
      var _a2 = _this, data = _a2.data, optimisticData = _a2.optimisticData;
      ++_this.txCount;
      if (layer) {
        _this.data = _this.optimisticData = layer;
      }
      try {
        return updateResult = update(_this);
      } finally {
        --_this.txCount;
        _this.data = data;
        _this.optimisticData = optimisticData;
      }
    };
    var alreadyDirty = /* @__PURE__ */ new Set();
    if (onWatchUpdated && !this.txCount) {
      this.broadcastWatches(__assign(__assign({}, options), { onWatchUpdated: function(watch2) {
        alreadyDirty.add(watch2);
        return false;
      } }));
    }
    if (typeof optimistic === "string") {
      this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
    } else if (optimistic === false) {
      perform(this.data);
    } else {
      perform();
    }
    if (typeof removeOptimistic === "string") {
      this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
    }
    if (onWatchUpdated && alreadyDirty.size) {
      this.broadcastWatches(__assign(__assign({}, options), { onWatchUpdated: function(watch2, diff) {
        var result = onWatchUpdated.call(this, watch2, diff);
        if (result !== false) {
          alreadyDirty.delete(watch2);
        }
        return result;
      } }));
      if (alreadyDirty.size) {
        alreadyDirty.forEach(function(watch2) {
          return _this.maybeBroadcastWatch.dirty(watch2);
        });
      }
    } else {
      this.broadcastWatches(options);
    }
    return updateResult;
  };
  InMemoryCache2.prototype.performTransaction = function(update, optimisticId) {
    return this.batch({
      update,
      optimistic: optimisticId || optimisticId !== null
    });
  };
  InMemoryCache2.prototype.transformDocument = function(document2) {
    if (this.addTypename) {
      var result = this.typenameDocumentCache.get(document2);
      if (!result) {
        result = addTypenameToDocument(document2);
        this.typenameDocumentCache.set(document2, result);
        this.typenameDocumentCache.set(result, result);
      }
      return result;
    }
    return document2;
  };
  InMemoryCache2.prototype.transformForLink = function(document2) {
    var fragments = this.config.fragments;
    return fragments ? fragments.transform(document2) : document2;
  };
  InMemoryCache2.prototype.broadcastWatches = function(options) {
    var _this = this;
    if (!this.txCount) {
      this.watches.forEach(function(c) {
        return _this.maybeBroadcastWatch(c, options);
      });
    }
  };
  InMemoryCache2.prototype.broadcastWatch = function(c, options) {
    var lastDiff = c.lastDiff;
    var diff = this.diff(c);
    if (options) {
      if (c.optimistic && typeof options.optimistic === "string") {
        diff.fromOptimisticTransaction = true;
      }
      if (options.onWatchUpdated && options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
        return;
      }
    }
    if (!lastDiff || !equal(lastDiff.result, diff.result)) {
      c.callback(c.lastDiff = diff, lastDiff);
    }
  };
  return InMemoryCache2;
}(ApolloCache);
var NetworkStatus;
(function(NetworkStatus2) {
  NetworkStatus2[NetworkStatus2["loading"] = 1] = "loading";
  NetworkStatus2[NetworkStatus2["setVariables"] = 2] = "setVariables";
  NetworkStatus2[NetworkStatus2["fetchMore"] = 3] = "fetchMore";
  NetworkStatus2[NetworkStatus2["refetch"] = 4] = "refetch";
  NetworkStatus2[NetworkStatus2["poll"] = 6] = "poll";
  NetworkStatus2[NetworkStatus2["ready"] = 7] = "ready";
  NetworkStatus2[NetworkStatus2["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
  return networkStatus ? networkStatus < 7 : false;
}
var assign = Object.assign;
var ObservableQuery = function(_super) {
  __extends(ObservableQuery2, _super);
  function ObservableQuery2(_a) {
    var queryManager = _a.queryManager, queryInfo = _a.queryInfo, options = _a.options;
    var _this = _super.call(this, function(observer) {
      try {
        var subObserver = observer._subscription._observer;
        if (subObserver && !subObserver.error) {
          subObserver.error = defaultSubscriptionObserverErrorCallback;
        }
      } catch (_a2) {
      }
      var first = !_this.observers.size;
      _this.observers.add(observer);
      var last = _this.last;
      if (last && last.error) {
        observer.error && observer.error(last.error);
      } else if (last && last.result) {
        observer.next && observer.next(last.result);
      }
      if (first) {
        _this.reobserve().catch(function() {
        });
      }
      return function() {
        if (_this.observers.delete(observer) && !_this.observers.size) {
          _this.tearDownQuery();
        }
      };
    }) || this;
    _this.observers = /* @__PURE__ */ new Set();
    _this.subscriptions = /* @__PURE__ */ new Set();
    _this.queryInfo = queryInfo;
    _this.queryManager = queryManager;
    _this.isTornDown = false;
    var _b = queryManager.defaultOptions.watchQuery, _c = _b === void 0 ? {} : _b, _d = _c.fetchPolicy, defaultFetchPolicy = _d === void 0 ? "cache-first" : _d;
    var _e = options.fetchPolicy, fetchPolicy = _e === void 0 ? defaultFetchPolicy : _e, _f = options.initialFetchPolicy, initialFetchPolicy = _f === void 0 ? fetchPolicy === "standby" ? defaultFetchPolicy : fetchPolicy : _f;
    _this.options = __assign(__assign({}, options), { initialFetchPolicy, fetchPolicy });
    _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
    var opDef = getOperationDefinition(_this.query);
    _this.queryName = opDef && opDef.name && opDef.name.value;
    return _this;
  }
  Object.defineProperty(ObservableQuery2.prototype, "query", {
    get: function() {
      return this.queryManager.transform(this.options.query).document;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ObservableQuery2.prototype, "variables", {
    get: function() {
      return this.options.variables;
    },
    enumerable: false,
    configurable: true
  });
  ObservableQuery2.prototype.result = function() {
    var _this = this;
    return new Promise(function(resolve, reject) {
      var observer = {
        next: function(result) {
          resolve(result);
          _this.observers.delete(observer);
          if (!_this.observers.size) {
            _this.queryManager.removeQuery(_this.queryId);
          }
          setTimeout(function() {
            subscription.unsubscribe();
          }, 0);
        },
        error: reject
      };
      var subscription = _this.subscribe(observer);
    });
  };
  ObservableQuery2.prototype.getCurrentResult = function(saveAsLastResult) {
    if (saveAsLastResult === void 0) {
      saveAsLastResult = true;
    }
    var lastResult = this.getLastResult(true);
    var networkStatus = this.queryInfo.networkStatus || lastResult && lastResult.networkStatus || NetworkStatus.ready;
    var result = __assign(__assign({}, lastResult), { loading: isNetworkRequestInFlight(networkStatus), networkStatus });
    var _a = this.options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a;
    if (fetchPolicy === "network-only" || fetchPolicy === "no-cache" || fetchPolicy === "standby" || this.queryManager.transform(this.options.query).hasForcedResolvers)
      ;
    else {
      var diff = this.queryInfo.getDiff();
      if (diff.complete || this.options.returnPartialData) {
        result.data = diff.result;
      }
      if (equal(result.data, {})) {
        result.data = void 0;
      }
      if (diff.complete) {
        delete result.partial;
        if (diff.complete && result.networkStatus === NetworkStatus.loading && (fetchPolicy === "cache-first" || fetchPolicy === "cache-only")) {
          result.networkStatus = NetworkStatus.ready;
          result.loading = false;
        }
      } else {
        result.partial = true;
      }
    }
    if (saveAsLastResult) {
      this.updateLastResult(result);
    }
    return result;
  };
  ObservableQuery2.prototype.isDifferentFromLastResult = function(newResult, variables) {
    return !this.last || !equal(this.last.result, newResult) || variables && !equal(this.last.variables, variables);
  };
  ObservableQuery2.prototype.getLast = function(key, variablesMustMatch) {
    var last = this.last;
    if (last && last[key] && (!variablesMustMatch || equal(last.variables, this.variables))) {
      return last[key];
    }
  };
  ObservableQuery2.prototype.getLastResult = function(variablesMustMatch) {
    return this.getLast("result", variablesMustMatch);
  };
  ObservableQuery2.prototype.getLastError = function(variablesMustMatch) {
    return this.getLast("error", variablesMustMatch);
  };
  ObservableQuery2.prototype.resetLastResults = function() {
    delete this.last;
    this.isTornDown = false;
  };
  ObservableQuery2.prototype.resetQueryStoreErrors = function() {
    this.queryManager.resetErrors(this.queryId);
  };
  ObservableQuery2.prototype.refetch = function(variables) {
    var reobserveOptions = {
      pollInterval: 0
    };
    var fetchPolicy = this.options.fetchPolicy;
    if (fetchPolicy === "cache-and-network") {
      reobserveOptions.fetchPolicy = fetchPolicy;
    } else if (fetchPolicy === "no-cache") {
      reobserveOptions.fetchPolicy = "no-cache";
    } else {
      reobserveOptions.fetchPolicy = "network-only";
    }
    if (variables && !equal(this.options.variables, variables)) {
      reobserveOptions.variables = this.options.variables = __assign(__assign({}, this.options.variables), variables);
    }
    this.queryInfo.resetLastWrite();
    return this.reobserve(reobserveOptions, NetworkStatus.refetch);
  };
  ObservableQuery2.prototype.fetchMore = function(fetchMoreOptions) {
    var _this = this;
    var combinedOptions = __assign(__assign({}, fetchMoreOptions.query ? fetchMoreOptions : __assign(__assign(__assign(__assign({}, this.options), { query: this.query }), fetchMoreOptions), { variables: __assign(__assign({}, this.options.variables), fetchMoreOptions.variables) })), { fetchPolicy: "no-cache" });
    var qid = this.queryManager.generateQueryId();
    var queryInfo = this.queryInfo;
    var originalNetworkStatus = queryInfo.networkStatus;
    queryInfo.networkStatus = NetworkStatus.fetchMore;
    if (combinedOptions.notifyOnNetworkStatusChange) {
      this.observe();
    }
    var updatedQuerySet = /* @__PURE__ */ new Set();
    return this.queryManager.fetchQuery(qid, combinedOptions, NetworkStatus.fetchMore).then(function(fetchMoreResult) {
      _this.queryManager.removeQuery(qid);
      if (queryInfo.networkStatus === NetworkStatus.fetchMore) {
        queryInfo.networkStatus = originalNetworkStatus;
      }
      _this.queryManager.cache.batch({
        update: function(cache) {
          var updateQuery = fetchMoreOptions.updateQuery;
          if (updateQuery) {
            cache.updateQuery({
              query: _this.query,
              variables: _this.variables,
              returnPartialData: true,
              optimistic: false
            }, function(previous) {
              return updateQuery(previous, {
                fetchMoreResult: fetchMoreResult.data,
                variables: combinedOptions.variables
              });
            });
          } else {
            cache.writeQuery({
              query: combinedOptions.query,
              variables: combinedOptions.variables,
              data: fetchMoreResult.data
            });
          }
        },
        onWatchUpdated: function(watch2) {
          updatedQuerySet.add(watch2.query);
        }
      });
      return fetchMoreResult;
    }).finally(function() {
      if (!updatedQuerySet.has(_this.query)) {
        reobserveCacheFirst(_this);
      }
    });
  };
  ObservableQuery2.prototype.subscribeToMore = function(options) {
    var _this = this;
    var subscription = this.queryManager.startGraphQLSubscription({
      query: options.document,
      variables: options.variables,
      context: options.context
    }).subscribe({
      next: function(subscriptionData) {
        var updateQuery = options.updateQuery;
        if (updateQuery) {
          _this.updateQuery(function(previous, _a) {
            var variables = _a.variables;
            return updateQuery(previous, {
              subscriptionData,
              variables
            });
          });
        }
      },
      error: function(err) {
        if (options.onError) {
          options.onError(err);
          return;
        }
      }
    });
    this.subscriptions.add(subscription);
    return function() {
      if (_this.subscriptions.delete(subscription)) {
        subscription.unsubscribe();
      }
    };
  };
  ObservableQuery2.prototype.setOptions = function(newOptions) {
    return this.reobserve(newOptions);
  };
  ObservableQuery2.prototype.setVariables = function(variables) {
    if (equal(this.variables, variables)) {
      return this.observers.size ? this.result() : Promise.resolve();
    }
    this.options.variables = variables;
    if (!this.observers.size) {
      return Promise.resolve();
    }
    return this.reobserve({
      fetchPolicy: this.options.initialFetchPolicy,
      variables
    }, NetworkStatus.setVariables);
  };
  ObservableQuery2.prototype.updateQuery = function(mapFn) {
    var queryManager = this.queryManager;
    var result = queryManager.cache.diff({
      query: this.options.query,
      variables: this.variables,
      returnPartialData: true,
      optimistic: false
    }).result;
    var newResult = mapFn(result, {
      variables: this.variables
    });
    if (newResult) {
      queryManager.cache.writeQuery({
        query: this.options.query,
        data: newResult,
        variables: this.variables
      });
      queryManager.broadcastQueries();
    }
  };
  ObservableQuery2.prototype.startPolling = function(pollInterval) {
    this.options.pollInterval = pollInterval;
    this.updatePolling();
  };
  ObservableQuery2.prototype.stopPolling = function() {
    this.options.pollInterval = 0;
    this.updatePolling();
  };
  ObservableQuery2.prototype.applyNextFetchPolicy = function(reason, options) {
    if (options.nextFetchPolicy) {
      var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a, _b = options.initialFetchPolicy, initialFetchPolicy = _b === void 0 ? fetchPolicy : _b;
      if (fetchPolicy === "standby")
        ;
      else if (typeof options.nextFetchPolicy === "function") {
        options.fetchPolicy = options.nextFetchPolicy(fetchPolicy, {
          reason,
          options,
          observable: this,
          initialFetchPolicy
        });
      } else if (reason === "variables-changed") {
        options.fetchPolicy = initialFetchPolicy;
      } else {
        options.fetchPolicy = options.nextFetchPolicy;
      }
    }
    return options.fetchPolicy;
  };
  ObservableQuery2.prototype.fetch = function(options, newNetworkStatus) {
    this.queryManager.setObservableQuery(this);
    return this.queryManager["fetchConcastWithInfo"](this.queryId, options, newNetworkStatus);
  };
  ObservableQuery2.prototype.updatePolling = function() {
    var _this = this;
    if (this.queryManager.ssrMode) {
      return;
    }
    var _a = this, pollingInfo = _a.pollingInfo, pollInterval = _a.options.pollInterval;
    if (!pollInterval) {
      if (pollingInfo) {
        clearTimeout(pollingInfo.timeout);
        delete this.pollingInfo;
      }
      return;
    }
    if (pollingInfo && pollingInfo.interval === pollInterval) {
      return;
    }
    invariant$1(pollInterval, 13);
    var info = pollingInfo || (this.pollingInfo = {});
    info.interval = pollInterval;
    var maybeFetch = function() {
      if (_this.pollingInfo) {
        if (!isNetworkRequestInFlight(_this.queryInfo.networkStatus)) {
          _this.reobserve({
            fetchPolicy: _this.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
          }, NetworkStatus.poll).then(poll, poll);
        } else {
          poll();
        }
      }
    };
    var poll = function() {
      var info2 = _this.pollingInfo;
      if (info2) {
        clearTimeout(info2.timeout);
        info2.timeout = setTimeout(maybeFetch, info2.interval);
      }
    };
    poll();
  };
  ObservableQuery2.prototype.updateLastResult = function(newResult, variables) {
    if (variables === void 0) {
      variables = this.variables;
    }
    this.last = __assign(__assign({}, this.last), { result: this.queryManager.assumeImmutableResults ? newResult : cloneDeep(newResult), variables });
    if (!isNonEmptyArray(newResult.errors)) {
      delete this.last.error;
    }
    return this.last;
  };
  ObservableQuery2.prototype.reobserveAsConcast = function(newOptions, newNetworkStatus) {
    var _this = this;
    this.isTornDown = false;
    var useDisposableConcast = newNetworkStatus === NetworkStatus.refetch || newNetworkStatus === NetworkStatus.fetchMore || newNetworkStatus === NetworkStatus.poll;
    var oldVariables = this.options.variables;
    var oldFetchPolicy = this.options.fetchPolicy;
    var mergedOptions = compact(this.options, newOptions || {});
    var options = useDisposableConcast ? mergedOptions : assign(this.options, mergedOptions);
    if (!useDisposableConcast) {
      this.updatePolling();
      if (newOptions && newOptions.variables && !equal(newOptions.variables, oldVariables) && options.fetchPolicy !== "standby" && options.fetchPolicy === oldFetchPolicy) {
        this.applyNextFetchPolicy("variables-changed", options);
        if (newNetworkStatus === void 0) {
          newNetworkStatus = NetworkStatus.setVariables;
        }
      }
    }
    var variables = options.variables && __assign({}, options.variables);
    var _a = this.fetch(options, newNetworkStatus), concast = _a.concast, fromLink = _a.fromLink;
    var observer = {
      next: function(result) {
        _this.reportResult(result, variables);
      },
      error: function(error) {
        _this.reportError(error, variables);
      }
    };
    if (!useDisposableConcast && fromLink) {
      if (this.concast && this.observer) {
        this.concast.removeObserver(this.observer);
      }
      this.concast = concast;
      this.observer = observer;
    }
    concast.addObserver(observer);
    return concast;
  };
  ObservableQuery2.prototype.reobserve = function(newOptions, newNetworkStatus) {
    return this.reobserveAsConcast(newOptions, newNetworkStatus).promise;
  };
  ObservableQuery2.prototype.observe = function() {
    this.reportResult(this.getCurrentResult(false), this.variables);
  };
  ObservableQuery2.prototype.reportResult = function(result, variables) {
    var lastError = this.getLastError();
    if (lastError || this.isDifferentFromLastResult(result, variables)) {
      if (lastError || !result.partial || this.options.returnPartialData) {
        this.updateLastResult(result, variables);
      }
      iterateObserversSafely(this.observers, "next", result);
    }
  };
  ObservableQuery2.prototype.reportError = function(error, variables) {
    var errorResult = __assign(__assign({}, this.getLastResult()), { error, errors: error.graphQLErrors, networkStatus: NetworkStatus.error, loading: false });
    this.updateLastResult(errorResult, variables);
    iterateObserversSafely(this.observers, "error", this.last.error = error);
  };
  ObservableQuery2.prototype.hasObservers = function() {
    return this.observers.size > 0;
  };
  ObservableQuery2.prototype.tearDownQuery = function() {
    if (this.isTornDown)
      return;
    if (this.concast && this.observer) {
      this.concast.removeObserver(this.observer);
      delete this.concast;
      delete this.observer;
    }
    this.stopPolling();
    this.subscriptions.forEach(function(sub) {
      return sub.unsubscribe();
    });
    this.subscriptions.clear();
    this.queryManager.stopQuery(this.queryId);
    this.observers.clear();
    this.isTornDown = true;
  };
  return ObservableQuery2;
}(Observable);
fixObservableSubclass(ObservableQuery);
function reobserveCacheFirst(obsQuery) {
  var _a = obsQuery.options, fetchPolicy = _a.fetchPolicy, nextFetchPolicy = _a.nextFetchPolicy;
  if (fetchPolicy === "cache-and-network" || fetchPolicy === "network-only") {
    return obsQuery.reobserve({
      fetchPolicy: "cache-first",
      nextFetchPolicy: function() {
        this.nextFetchPolicy = nextFetchPolicy;
        if (typeof nextFetchPolicy === "function") {
          return nextFetchPolicy.apply(this, arguments);
        }
        return fetchPolicy;
      }
    });
  }
  return obsQuery.reobserve();
}
function defaultSubscriptionObserverErrorCallback(error) {
}
var LocalState = function() {
  function LocalState2(_a) {
    var cache = _a.cache, client = _a.client, resolvers = _a.resolvers, fragmentMatcher = _a.fragmentMatcher;
    this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap();
    this.cache = cache;
    if (client) {
      this.client = client;
    }
    if (resolvers) {
      this.addResolvers(resolvers);
    }
    if (fragmentMatcher) {
      this.setFragmentMatcher(fragmentMatcher);
    }
  }
  LocalState2.prototype.addResolvers = function(resolvers) {
    var _this = this;
    this.resolvers = this.resolvers || {};
    if (Array.isArray(resolvers)) {
      resolvers.forEach(function(resolverGroup) {
        _this.resolvers = mergeDeep(_this.resolvers, resolverGroup);
      });
    } else {
      this.resolvers = mergeDeep(this.resolvers, resolvers);
    }
  };
  LocalState2.prototype.setResolvers = function(resolvers) {
    this.resolvers = {};
    this.addResolvers(resolvers);
  };
  LocalState2.prototype.getResolvers = function() {
    return this.resolvers || {};
  };
  LocalState2.prototype.runResolvers = function(_a) {
    var document2 = _a.document, remoteResult = _a.remoteResult, context = _a.context, variables = _a.variables, _b = _a.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_c) {
        if (document2) {
          return [2, this.resolveDocument(document2, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function(localResult) {
            return __assign(__assign({}, remoteResult), { data: localResult.result });
          })];
        }
        return [2, remoteResult];
      });
    });
  };
  LocalState2.prototype.setFragmentMatcher = function(fragmentMatcher) {
    this.fragmentMatcher = fragmentMatcher;
  };
  LocalState2.prototype.getFragmentMatcher = function() {
    return this.fragmentMatcher;
  };
  LocalState2.prototype.clientQuery = function(document2) {
    if (hasDirectives(["client"], document2)) {
      if (this.resolvers) {
        return document2;
      }
    }
    return null;
  };
  LocalState2.prototype.serverQuery = function(document2) {
    return removeClientSetsFromDocument(document2);
  };
  LocalState2.prototype.prepareContext = function(context) {
    var cache = this.cache;
    return __assign(__assign({}, context), { cache, getCacheKey: function(obj) {
      return cache.identify(obj);
    } });
  };
  LocalState2.prototype.addExportedVariables = function(document2, variables, context) {
    if (variables === void 0) {
      variables = {};
    }
    if (context === void 0) {
      context = {};
    }
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        if (document2) {
          return [2, this.resolveDocument(document2, this.buildRootValueFromCache(document2, variables) || {}, this.prepareContext(context), variables).then(function(data) {
            return __assign(__assign({}, variables), data.exportedVariables);
          })];
        }
        return [2, __assign({}, variables)];
      });
    });
  };
  LocalState2.prototype.shouldForceResolvers = function(document2) {
    var forceResolvers = false;
    visit(document2, {
      Directive: {
        enter: function(node) {
          if (node.name.value === "client" && node.arguments) {
            forceResolvers = node.arguments.some(function(arg) {
              return arg.name.value === "always" && arg.value.kind === "BooleanValue" && arg.value.value === true;
            });
            if (forceResolvers) {
              return BREAK;
            }
          }
        }
      }
    });
    return forceResolvers;
  };
  LocalState2.prototype.buildRootValueFromCache = function(document2, variables) {
    return this.cache.diff({
      query: buildQueryFromSelectionSet(document2),
      variables,
      returnPartialData: true,
      optimistic: false
    }).result;
  };
  LocalState2.prototype.resolveDocument = function(document2, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
    if (context === void 0) {
      context = {};
    }
    if (variables === void 0) {
      variables = {};
    }
    if (fragmentMatcher === void 0) {
      fragmentMatcher = function() {
        return true;
      };
    }
    if (onlyRunForcedResolvers === void 0) {
      onlyRunForcedResolvers = false;
    }
    return __awaiter(this, void 0, void 0, function() {
      var mainDefinition, fragments, fragmentMap, selectionsToResolve, definitionOperation, defaultOperationType, _a, cache, client, execContext, isClientFieldDescendant;
      return __generator(this, function(_b) {
        mainDefinition = getMainDefinition(document2);
        fragments = getFragmentDefinitions(document2);
        fragmentMap = createFragmentMap(fragments);
        selectionsToResolve = this.collectSelectionsToResolve(mainDefinition, fragmentMap);
        definitionOperation = mainDefinition.operation;
        defaultOperationType = definitionOperation ? definitionOperation.charAt(0).toUpperCase() + definitionOperation.slice(1) : "Query";
        _a = this, cache = _a.cache, client = _a.client;
        execContext = {
          fragmentMap,
          context: __assign(__assign({}, context), { cache, client }),
          variables,
          fragmentMatcher,
          defaultOperationType,
          exportedVariables: {},
          selectionsToResolve,
          onlyRunForcedResolvers
        };
        isClientFieldDescendant = false;
        return [2, this.resolveSelectionSet(mainDefinition.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function(result) {
          return {
            result,
            exportedVariables: execContext.exportedVariables
          };
        })];
      });
    });
  };
  LocalState2.prototype.resolveSelectionSet = function(selectionSet, isClientFieldDescendant, rootValue, execContext) {
    return __awaiter(this, void 0, void 0, function() {
      var fragmentMap, context, variables, resultsToMerge, execute2;
      var _this = this;
      return __generator(this, function(_a) {
        fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
        resultsToMerge = [rootValue];
        execute2 = function(selection) {
          return __awaiter(_this, void 0, void 0, function() {
            var fragment, typeCondition;
            return __generator(this, function(_a2) {
              if (!isClientFieldDescendant && !execContext.selectionsToResolve.has(selection)) {
                return [2];
              }
              if (!shouldInclude(selection, variables)) {
                return [2];
              }
              if (isField(selection)) {
                return [2, this.resolveField(selection, isClientFieldDescendant, rootValue, execContext).then(function(fieldResult) {
                  var _a3;
                  if (typeof fieldResult !== "undefined") {
                    resultsToMerge.push((_a3 = {}, _a3[resultKeyNameFromField(selection)] = fieldResult, _a3));
                  }
                })];
              }
              if (isInlineFragment(selection)) {
                fragment = selection;
              } else {
                fragment = fragmentMap[selection.name.value];
                invariant$1(fragment, 11);
              }
              if (fragment && fragment.typeCondition) {
                typeCondition = fragment.typeCondition.name.value;
                if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                  return [2, this.resolveSelectionSet(fragment.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function(fragmentResult) {
                    resultsToMerge.push(fragmentResult);
                  })];
                }
              }
              return [2];
            });
          });
        };
        return [2, Promise.all(selectionSet.selections.map(execute2)).then(function() {
          return mergeDeepArray(resultsToMerge);
        })];
      });
    });
  };
  LocalState2.prototype.resolveField = function(field, isClientFieldDescendant, rootValue, execContext) {
    return __awaiter(this, void 0, void 0, function() {
      var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
      var _this = this;
      return __generator(this, function(_a) {
        if (!rootValue) {
          return [2, null];
        }
        variables = execContext.variables;
        fieldName = field.name.value;
        aliasedFieldName = resultKeyNameFromField(field);
        aliasUsed = fieldName !== aliasedFieldName;
        defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
        resultPromise = Promise.resolve(defaultResult);
        if (!execContext.onlyRunForcedResolvers || this.shouldForceResolvers(field)) {
          resolverType = rootValue.__typename || execContext.defaultOperationType;
          resolverMap = this.resolvers && this.resolvers[resolverType];
          if (resolverMap) {
            resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
            if (resolve) {
              resultPromise = Promise.resolve(cacheSlot.withValue(this.cache, resolve, [
                rootValue,
                argumentsObjectFromField(field, variables),
                execContext.context,
                { field, fragmentMap: execContext.fragmentMap }
              ]));
            }
          }
        }
        return [2, resultPromise.then(function(result) {
          var _a2, _b;
          if (result === void 0) {
            result = defaultResult;
          }
          if (field.directives) {
            field.directives.forEach(function(directive) {
              if (directive.name.value === "export" && directive.arguments) {
                directive.arguments.forEach(function(arg) {
                  if (arg.name.value === "as" && arg.value.kind === "StringValue") {
                    execContext.exportedVariables[arg.value.value] = result;
                  }
                });
              }
            });
          }
          if (!field.selectionSet) {
            return result;
          }
          if (result == null) {
            return result;
          }
          var isClientField = (_b = (_a2 = field.directives) === null || _a2 === void 0 ? void 0 : _a2.some(function(d) {
            return d.name.value === "client";
          })) !== null && _b !== void 0 ? _b : false;
          if (Array.isArray(result)) {
            return _this.resolveSubSelectedArray(field, isClientFieldDescendant || isClientField, result, execContext);
          }
          if (field.selectionSet) {
            return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant || isClientField, result, execContext);
          }
        })];
      });
    });
  };
  LocalState2.prototype.resolveSubSelectedArray = function(field, isClientFieldDescendant, result, execContext) {
    var _this = this;
    return Promise.all(result.map(function(item) {
      if (item === null) {
        return null;
      }
      if (Array.isArray(item)) {
        return _this.resolveSubSelectedArray(field, isClientFieldDescendant, item, execContext);
      }
      if (field.selectionSet) {
        return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant, item, execContext);
      }
    }));
  };
  LocalState2.prototype.collectSelectionsToResolve = function(mainDefinition, fragmentMap) {
    var isSingleASTNode = function(node) {
      return !Array.isArray(node);
    };
    var selectionsToResolveCache = this.selectionsToResolveCache;
    function collectByDefinition(definitionNode) {
      if (!selectionsToResolveCache.has(definitionNode)) {
        var matches_1 = /* @__PURE__ */ new Set();
        selectionsToResolveCache.set(definitionNode, matches_1);
        visit(definitionNode, {
          Directive: function(node, _, __2, ___, ancestors) {
            if (node.name.value === "client") {
              ancestors.forEach(function(node2) {
                if (isSingleASTNode(node2) && isSelectionNode(node2)) {
                  matches_1.add(node2);
                }
              });
            }
          },
          FragmentSpread: function(spread, _, __2, ___, ancestors) {
            var fragment = fragmentMap[spread.name.value];
            invariant$1(fragment, 12);
            var fragmentSelections = collectByDefinition(fragment);
            if (fragmentSelections.size > 0) {
              ancestors.forEach(function(node) {
                if (isSingleASTNode(node) && isSelectionNode(node)) {
                  matches_1.add(node);
                }
              });
              matches_1.add(spread);
              fragmentSelections.forEach(function(selection) {
                matches_1.add(selection);
              });
            }
          }
        });
      }
      return selectionsToResolveCache.get(definitionNode);
    }
    return collectByDefinition(mainDefinition);
  };
  return LocalState2;
}();
var destructiveMethodCounts = new (canUseWeakMap ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache, methodName) {
  var original = cache[methodName];
  if (typeof original === "function") {
    cache[methodName] = function() {
      destructiveMethodCounts.set(cache, (destructiveMethodCounts.get(cache) + 1) % 1e15);
      return original.apply(this, arguments);
    };
  }
}
function cancelNotifyTimeout(info) {
  if (info["notifyTimeout"]) {
    clearTimeout(info["notifyTimeout"]);
    info["notifyTimeout"] = void 0;
  }
}
var QueryInfo = function() {
  function QueryInfo2(queryManager, queryId) {
    if (queryId === void 0) {
      queryId = queryManager.generateQueryId();
    }
    this.queryId = queryId;
    this.listeners = /* @__PURE__ */ new Set();
    this.document = null;
    this.lastRequestId = 1;
    this.subscriptions = /* @__PURE__ */ new Set();
    this.stopped = false;
    this.dirty = false;
    this.observableQuery = null;
    var cache = this.cache = queryManager.cache;
    if (!destructiveMethodCounts.has(cache)) {
      destructiveMethodCounts.set(cache, 0);
      wrapDestructiveCacheMethod(cache, "evict");
      wrapDestructiveCacheMethod(cache, "modify");
      wrapDestructiveCacheMethod(cache, "reset");
    }
  }
  QueryInfo2.prototype.init = function(query) {
    var networkStatus = query.networkStatus || NetworkStatus.loading;
    if (this.variables && this.networkStatus !== NetworkStatus.loading && !equal(this.variables, query.variables)) {
      networkStatus = NetworkStatus.setVariables;
    }
    if (!equal(query.variables, this.variables)) {
      this.lastDiff = void 0;
    }
    Object.assign(this, {
      document: query.document,
      variables: query.variables,
      networkError: null,
      graphQLErrors: this.graphQLErrors || [],
      networkStatus
    });
    if (query.observableQuery) {
      this.setObservableQuery(query.observableQuery);
    }
    if (query.lastRequestId) {
      this.lastRequestId = query.lastRequestId;
    }
    return this;
  };
  QueryInfo2.prototype.reset = function() {
    cancelNotifyTimeout(this);
    this.dirty = false;
  };
  QueryInfo2.prototype.getDiff = function(variables) {
    if (variables === void 0) {
      variables = this.variables;
    }
    var options = this.getDiffOptions(variables);
    if (this.lastDiff && equal(options, this.lastDiff.options)) {
      return this.lastDiff.diff;
    }
    this.updateWatch(this.variables = variables);
    var oq = this.observableQuery;
    if (oq && oq.options.fetchPolicy === "no-cache") {
      return { complete: false };
    }
    var diff = this.cache.diff(options);
    this.updateLastDiff(diff, options);
    return diff;
  };
  QueryInfo2.prototype.updateLastDiff = function(diff, options) {
    this.lastDiff = diff ? {
      diff,
      options: options || this.getDiffOptions()
    } : void 0;
  };
  QueryInfo2.prototype.getDiffOptions = function(variables) {
    var _a;
    if (variables === void 0) {
      variables = this.variables;
    }
    return {
      query: this.document,
      variables,
      returnPartialData: true,
      optimistic: true,
      canonizeResults: (_a = this.observableQuery) === null || _a === void 0 ? void 0 : _a.options.canonizeResults
    };
  };
  QueryInfo2.prototype.setDiff = function(diff) {
    var _this = this;
    var oldDiff = this.lastDiff && this.lastDiff.diff;
    this.updateLastDiff(diff);
    if (!this.dirty && !equal(oldDiff && oldDiff.result, diff && diff.result)) {
      this.dirty = true;
      if (!this.notifyTimeout) {
        this.notifyTimeout = setTimeout(function() {
          return _this.notify();
        }, 0);
      }
    }
  };
  QueryInfo2.prototype.setObservableQuery = function(oq) {
    var _this = this;
    if (oq === this.observableQuery)
      return;
    if (this.oqListener) {
      this.listeners.delete(this.oqListener);
    }
    this.observableQuery = oq;
    if (oq) {
      oq["queryInfo"] = this;
      this.listeners.add(this.oqListener = function() {
        var diff = _this.getDiff();
        if (diff.fromOptimisticTransaction) {
          oq["observe"]();
        } else {
          reobserveCacheFirst(oq);
        }
      });
    } else {
      delete this.oqListener;
    }
  };
  QueryInfo2.prototype.notify = function() {
    var _this = this;
    cancelNotifyTimeout(this);
    if (this.shouldNotify()) {
      this.listeners.forEach(function(listener) {
        return listener(_this);
      });
    }
    this.dirty = false;
  };
  QueryInfo2.prototype.shouldNotify = function() {
    if (!this.dirty || !this.listeners.size) {
      return false;
    }
    if (isNetworkRequestInFlight(this.networkStatus) && this.observableQuery) {
      var fetchPolicy = this.observableQuery.options.fetchPolicy;
      if (fetchPolicy !== "cache-only" && fetchPolicy !== "cache-and-network") {
        return false;
      }
    }
    return true;
  };
  QueryInfo2.prototype.stop = function() {
    if (!this.stopped) {
      this.stopped = true;
      this.reset();
      this.cancel();
      this.cancel = QueryInfo2.prototype.cancel;
      this.subscriptions.forEach(function(sub) {
        return sub.unsubscribe();
      });
      var oq = this.observableQuery;
      if (oq)
        oq.stopPolling();
    }
  };
  QueryInfo2.prototype.cancel = function() {
  };
  QueryInfo2.prototype.updateWatch = function(variables) {
    var _this = this;
    if (variables === void 0) {
      variables = this.variables;
    }
    var oq = this.observableQuery;
    if (oq && oq.options.fetchPolicy === "no-cache") {
      return;
    }
    var watchOptions = __assign(__assign({}, this.getDiffOptions(variables)), { watcher: this, callback: function(diff) {
      return _this.setDiff(diff);
    } });
    if (!this.lastWatch || !equal(watchOptions, this.lastWatch)) {
      this.cancel();
      this.cancel = this.cache.watch(this.lastWatch = watchOptions);
    }
  };
  QueryInfo2.prototype.resetLastWrite = function() {
    this.lastWrite = void 0;
  };
  QueryInfo2.prototype.shouldWrite = function(result, variables) {
    var lastWrite = this.lastWrite;
    return !(lastWrite && lastWrite.dmCount === destructiveMethodCounts.get(this.cache) && equal(variables, lastWrite.variables) && equal(result.data, lastWrite.result.data));
  };
  QueryInfo2.prototype.markResult = function(result, document2, options, cacheWriteBehavior) {
    var _this = this;
    var merger = new DeepMerger();
    var graphQLErrors = isNonEmptyArray(result.errors) ? result.errors.slice(0) : [];
    this.reset();
    if ("incremental" in result && isNonEmptyArray(result.incremental)) {
      var mergedData = mergeIncrementalData(this.getDiff().result, result);
      result.data = mergedData;
    } else if ("hasNext" in result && result.hasNext) {
      var diff = this.getDiff();
      result.data = merger.merge(diff.result, result.data);
    }
    this.graphQLErrors = graphQLErrors;
    if (options.fetchPolicy === "no-cache") {
      this.updateLastDiff({ result: result.data, complete: true }, this.getDiffOptions(options.variables));
    } else if (cacheWriteBehavior !== 0) {
      if (shouldWriteResult(result, options.errorPolicy)) {
        this.cache.performTransaction(function(cache) {
          if (_this.shouldWrite(result, options.variables)) {
            cache.writeQuery({
              query: document2,
              data: result.data,
              variables: options.variables,
              overwrite: cacheWriteBehavior === 1
            });
            _this.lastWrite = {
              result,
              variables: options.variables,
              dmCount: destructiveMethodCounts.get(_this.cache)
            };
          } else {
            if (_this.lastDiff && _this.lastDiff.diff.complete) {
              result.data = _this.lastDiff.diff.result;
              return;
            }
          }
          var diffOptions = _this.getDiffOptions(options.variables);
          var diff2 = cache.diff(diffOptions);
          if (!_this.stopped) {
            _this.updateWatch(options.variables);
          }
          _this.updateLastDiff(diff2, diffOptions);
          if (diff2.complete) {
            result.data = diff2.result;
          }
        });
      } else {
        this.lastWrite = void 0;
      }
    }
  };
  QueryInfo2.prototype.markReady = function() {
    this.networkError = null;
    return this.networkStatus = NetworkStatus.ready;
  };
  QueryInfo2.prototype.markError = function(error) {
    this.networkStatus = NetworkStatus.error;
    this.lastWrite = void 0;
    this.reset();
    if (error.graphQLErrors) {
      this.graphQLErrors = error.graphQLErrors;
    }
    if (error.networkError) {
      this.networkError = error.networkError;
    }
    return error;
  };
  return QueryInfo2;
}();
function shouldWriteResult(result, errorPolicy) {
  if (errorPolicy === void 0) {
    errorPolicy = "none";
  }
  var ignoreErrors = errorPolicy === "ignore" || errorPolicy === "all";
  var writeWithErrors = !graphQLResultHasError(result);
  if (!writeWithErrors && ignoreErrors && result.data) {
    writeWithErrors = true;
  }
  return writeWithErrors;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
var QueryManager = function() {
  function QueryManager2(_a) {
    var cache = _a.cache, link = _a.link, defaultOptions2 = _a.defaultOptions, _b = _a.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, onBroadcast = _a.onBroadcast, _c = _a.ssrMode, ssrMode = _c === void 0 ? false : _c, _d = _a.clientAwareness, clientAwareness = _d === void 0 ? {} : _d, localState = _a.localState, assumeImmutableResults = _a.assumeImmutableResults;
    this.clientAwareness = {};
    this.queries = /* @__PURE__ */ new Map();
    this.fetchCancelFns = /* @__PURE__ */ new Map();
    this.transformCache = new (canUseWeakMap ? WeakMap : Map)();
    this.queryIdCounter = 1;
    this.requestIdCounter = 1;
    this.mutationIdCounter = 1;
    this.inFlightLinkObservables = /* @__PURE__ */ new Map();
    this.cache = cache;
    this.link = link;
    this.defaultOptions = defaultOptions2 || /* @__PURE__ */ Object.create(null);
    this.queryDeduplication = queryDeduplication;
    this.clientAwareness = clientAwareness;
    this.localState = localState || new LocalState({ cache });
    this.ssrMode = ssrMode;
    this.assumeImmutableResults = !!assumeImmutableResults;
    if (this.onBroadcast = onBroadcast) {
      this.mutationStore = /* @__PURE__ */ Object.create(null);
    }
  }
  QueryManager2.prototype.stop = function() {
    var _this = this;
    this.queries.forEach(function(_info, queryId) {
      _this.stopQueryNoBroadcast(queryId);
    });
    this.cancelPendingFetches(new InvariantError(14));
  };
  QueryManager2.prototype.cancelPendingFetches = function(error) {
    this.fetchCancelFns.forEach(function(cancel) {
      return cancel(error);
    });
    this.fetchCancelFns.clear();
  };
  QueryManager2.prototype.mutate = function(_a) {
    var _b, _c;
    var mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, updateQueries = _a.updateQueries, _d = _a.refetchQueries, refetchQueries = _d === void 0 ? [] : _d, _e = _a.awaitRefetchQueries, awaitRefetchQueries = _e === void 0 ? false : _e, updateWithProxyFn = _a.update, onQueryUpdated = _a.onQueryUpdated, _f = _a.fetchPolicy, fetchPolicy = _f === void 0 ? ((_b = this.defaultOptions.mutate) === null || _b === void 0 ? void 0 : _b.fetchPolicy) || "network-only" : _f, _g = _a.errorPolicy, errorPolicy = _g === void 0 ? ((_c = this.defaultOptions.mutate) === null || _c === void 0 ? void 0 : _c.errorPolicy) || "none" : _g, keepRootFields = _a.keepRootFields, context = _a.context;
    return __awaiter(this, void 0, void 0, function() {
      var mutationId, _h, document2, hasClientExports2, mutationStoreValue, self2;
      return __generator(this, function(_j) {
        switch (_j.label) {
          case 0:
            invariant$1(mutation, 15);
            invariant$1(fetchPolicy === "network-only" || fetchPolicy === "no-cache", 16);
            mutationId = this.generateMutationId();
            _h = this.transform(mutation), document2 = _h.document, hasClientExports2 = _h.hasClientExports;
            mutation = this.cache.transformForLink(document2);
            variables = this.getVariables(mutation, variables);
            if (!hasClientExports2)
              return [3, 2];
            return [4, this.localState.addExportedVariables(mutation, variables, context)];
          case 1:
            variables = _j.sent();
            _j.label = 2;
          case 2:
            mutationStoreValue = this.mutationStore && (this.mutationStore[mutationId] = {
              mutation,
              variables,
              loading: true,
              error: null
            });
            if (optimisticResponse) {
              this.markMutationOptimistic(optimisticResponse, {
                mutationId,
                document: mutation,
                variables,
                fetchPolicy,
                errorPolicy,
                context,
                updateQueries,
                update: updateWithProxyFn,
                keepRootFields
              });
            }
            this.broadcastQueries();
            self2 = this;
            return [2, new Promise(function(resolve, reject) {
              return asyncMap(self2.getObservableFromLink(mutation, __assign(__assign({}, context), { optimisticResponse }), variables, false), function(result) {
                if (graphQLResultHasError(result) && errorPolicy === "none") {
                  throw new ApolloError({
                    graphQLErrors: getGraphQLErrorsFromResult(result)
                  });
                }
                if (mutationStoreValue) {
                  mutationStoreValue.loading = false;
                  mutationStoreValue.error = null;
                }
                var storeResult = __assign({}, result);
                if (typeof refetchQueries === "function") {
                  refetchQueries = refetchQueries(storeResult);
                }
                if (errorPolicy === "ignore" && graphQLResultHasError(storeResult)) {
                  delete storeResult.errors;
                }
                return self2.markMutationResult({
                  mutationId,
                  result: storeResult,
                  document: mutation,
                  variables,
                  fetchPolicy,
                  errorPolicy,
                  context,
                  update: updateWithProxyFn,
                  updateQueries,
                  awaitRefetchQueries,
                  refetchQueries,
                  removeOptimistic: optimisticResponse ? mutationId : void 0,
                  onQueryUpdated,
                  keepRootFields
                });
              }).subscribe({
                next: function(storeResult) {
                  self2.broadcastQueries();
                  if (!("hasNext" in storeResult) || storeResult.hasNext === false) {
                    resolve(storeResult);
                  }
                },
                error: function(err) {
                  if (mutationStoreValue) {
                    mutationStoreValue.loading = false;
                    mutationStoreValue.error = err;
                  }
                  if (optimisticResponse) {
                    self2.cache.removeOptimistic(mutationId);
                  }
                  self2.broadcastQueries();
                  reject(err instanceof ApolloError ? err : new ApolloError({
                    networkError: err
                  }));
                }
              });
            })];
        }
      });
    });
  };
  QueryManager2.prototype.markMutationResult = function(mutation, cache) {
    var _this = this;
    if (cache === void 0) {
      cache = this.cache;
    }
    var result = mutation.result;
    var cacheWrites = [];
    var skipCache = mutation.fetchPolicy === "no-cache";
    if (!skipCache && shouldWriteResult(result, mutation.errorPolicy)) {
      if (!isExecutionPatchIncrementalResult(result)) {
        cacheWrites.push({
          result: result.data,
          dataId: "ROOT_MUTATION",
          query: mutation.document,
          variables: mutation.variables
        });
      }
      if (isExecutionPatchIncrementalResult(result) && isNonEmptyArray(result.incremental)) {
        var diff = cache.diff({
          id: "ROOT_MUTATION",
          query: this.transform(mutation.document).asQuery,
          variables: mutation.variables,
          optimistic: false,
          returnPartialData: true
        });
        var mergedData = void 0;
        if (diff.result) {
          mergedData = mergeIncrementalData(diff.result, result);
        }
        if (typeof mergedData !== "undefined") {
          result.data = mergedData;
          cacheWrites.push({
            result: mergedData,
            dataId: "ROOT_MUTATION",
            query: mutation.document,
            variables: mutation.variables
          });
        }
      }
      var updateQueries_1 = mutation.updateQueries;
      if (updateQueries_1) {
        this.queries.forEach(function(_a, queryId) {
          var observableQuery = _a.observableQuery;
          var queryName = observableQuery && observableQuery.queryName;
          if (!queryName || !hasOwnProperty.call(updateQueries_1, queryName)) {
            return;
          }
          var updater = updateQueries_1[queryName];
          var _b = _this.queries.get(queryId), document2 = _b.document, variables = _b.variables;
          var _c = cache.diff({
            query: document2,
            variables,
            returnPartialData: true,
            optimistic: false
          }), currentQueryResult = _c.result, complete = _c.complete;
          if (complete && currentQueryResult) {
            var nextQueryResult = updater(currentQueryResult, {
              mutationResult: result,
              queryName: document2 && getOperationName(document2) || void 0,
              queryVariables: variables
            });
            if (nextQueryResult) {
              cacheWrites.push({
                result: nextQueryResult,
                dataId: "ROOT_QUERY",
                query: document2,
                variables
              });
            }
          }
        });
      }
    }
    if (cacheWrites.length > 0 || mutation.refetchQueries || mutation.update || mutation.onQueryUpdated || mutation.removeOptimistic) {
      var results_1 = [];
      this.refetchQueries({
        updateCache: function(cache2) {
          if (!skipCache) {
            cacheWrites.forEach(function(write) {
              return cache2.write(write);
            });
          }
          var update = mutation.update;
          var isFinalResult = !isExecutionPatchResult(result) || isExecutionPatchIncrementalResult(result) && !result.hasNext;
          if (update) {
            if (!skipCache) {
              var diff2 = cache2.diff({
                id: "ROOT_MUTATION",
                query: _this.transform(mutation.document).asQuery,
                variables: mutation.variables,
                optimistic: false,
                returnPartialData: true
              });
              if (diff2.complete) {
                result = __assign(__assign({}, result), { data: diff2.result });
                if ("incremental" in result) {
                  delete result.incremental;
                }
                if ("hasNext" in result) {
                  delete result.hasNext;
                }
              }
            }
            if (isFinalResult) {
              update(cache2, result, {
                context: mutation.context,
                variables: mutation.variables
              });
            }
          }
          if (!skipCache && !mutation.keepRootFields && isFinalResult) {
            cache2.modify({
              id: "ROOT_MUTATION",
              fields: function(value, _a) {
                var fieldName = _a.fieldName, DELETE2 = _a.DELETE;
                return fieldName === "__typename" ? value : DELETE2;
              }
            });
          }
        },
        include: mutation.refetchQueries,
        optimistic: false,
        removeOptimistic: mutation.removeOptimistic,
        onQueryUpdated: mutation.onQueryUpdated || null
      }).forEach(function(result2) {
        return results_1.push(result2);
      });
      if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
        return Promise.all(results_1).then(function() {
          return result;
        });
      }
    }
    return Promise.resolve(result);
  };
  QueryManager2.prototype.markMutationOptimistic = function(optimisticResponse, mutation) {
    var _this = this;
    var data = typeof optimisticResponse === "function" ? optimisticResponse(mutation.variables) : optimisticResponse;
    return this.cache.recordOptimisticTransaction(function(cache) {
      try {
        _this.markMutationResult(__assign(__assign({}, mutation), { result: { data } }), cache);
      } catch (error) {
      }
    }, mutation.mutationId);
  };
  QueryManager2.prototype.fetchQuery = function(queryId, options, networkStatus) {
    return this.fetchQueryObservable(queryId, options, networkStatus).promise;
  };
  QueryManager2.prototype.getQueryStore = function() {
    var store = /* @__PURE__ */ Object.create(null);
    this.queries.forEach(function(info, queryId) {
      store[queryId] = {
        variables: info.variables,
        networkStatus: info.networkStatus,
        networkError: info.networkError,
        graphQLErrors: info.graphQLErrors
      };
    });
    return store;
  };
  QueryManager2.prototype.resetErrors = function(queryId) {
    var queryInfo = this.queries.get(queryId);
    if (queryInfo) {
      queryInfo.networkError = void 0;
      queryInfo.graphQLErrors = [];
    }
  };
  QueryManager2.prototype.transform = function(document2) {
    var transformCache = this.transformCache;
    if (!transformCache.has(document2)) {
      var transformed = this.cache.transformDocument(document2);
      var noConnection = removeConnectionDirectiveFromDocument(transformed);
      var clientQuery = this.localState.clientQuery(transformed);
      var serverQuery = noConnection && this.localState.serverQuery(noConnection);
      var cacheEntry_1 = {
        document: transformed,
        hasClientExports: hasClientExports(transformed),
        hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
        clientQuery,
        serverQuery,
        defaultVars: getDefaultValues(getOperationDefinition(transformed)),
        asQuery: __assign(__assign({}, transformed), { definitions: transformed.definitions.map(function(def) {
          if (def.kind === "OperationDefinition" && def.operation !== "query") {
            return __assign(__assign({}, def), { operation: "query" });
          }
          return def;
        }) })
      };
      var add = function(doc) {
        if (doc && !transformCache.has(doc)) {
          transformCache.set(doc, cacheEntry_1);
        }
      };
      add(document2);
      add(transformed);
      add(clientQuery);
      add(serverQuery);
    }
    return transformCache.get(document2);
  };
  QueryManager2.prototype.getVariables = function(document2, variables) {
    return __assign(__assign({}, this.transform(document2).defaultVars), variables);
  };
  QueryManager2.prototype.watchQuery = function(options) {
    options = __assign(__assign({}, options), { variables: this.getVariables(options.query, options.variables) });
    if (typeof options.notifyOnNetworkStatusChange === "undefined") {
      options.notifyOnNetworkStatusChange = false;
    }
    var queryInfo = new QueryInfo(this);
    var observable = new ObservableQuery({
      queryManager: this,
      queryInfo,
      options
    });
    this.queries.set(observable.queryId, queryInfo);
    queryInfo.init({
      document: observable.query,
      observableQuery: observable,
      variables: observable.variables
    });
    return observable;
  };
  QueryManager2.prototype.query = function(options, queryId) {
    var _this = this;
    if (queryId === void 0) {
      queryId = this.generateQueryId();
    }
    invariant$1(options.query, 17);
    invariant$1(options.query.kind === "Document", 18);
    invariant$1(!options.returnPartialData, 19);
    invariant$1(!options.pollInterval, 20);
    return this.fetchQuery(queryId, options).finally(function() {
      return _this.stopQuery(queryId);
    });
  };
  QueryManager2.prototype.generateQueryId = function() {
    return String(this.queryIdCounter++);
  };
  QueryManager2.prototype.generateRequestId = function() {
    return this.requestIdCounter++;
  };
  QueryManager2.prototype.generateMutationId = function() {
    return String(this.mutationIdCounter++);
  };
  QueryManager2.prototype.stopQueryInStore = function(queryId) {
    this.stopQueryInStoreNoBroadcast(queryId);
    this.broadcastQueries();
  };
  QueryManager2.prototype.stopQueryInStoreNoBroadcast = function(queryId) {
    var queryInfo = this.queries.get(queryId);
    if (queryInfo)
      queryInfo.stop();
  };
  QueryManager2.prototype.clearStore = function(options) {
    if (options === void 0) {
      options = {
        discardWatches: true
      };
    }
    this.cancelPendingFetches(new InvariantError(21));
    this.queries.forEach(function(queryInfo) {
      if (queryInfo.observableQuery) {
        queryInfo.networkStatus = NetworkStatus.loading;
      } else {
        queryInfo.stop();
      }
    });
    if (this.mutationStore) {
      this.mutationStore = /* @__PURE__ */ Object.create(null);
    }
    return this.cache.reset(options);
  };
  QueryManager2.prototype.getObservableQueries = function(include) {
    var _this = this;
    if (include === void 0) {
      include = "active";
    }
    var queries = /* @__PURE__ */ new Map();
    var queryNamesAndDocs = /* @__PURE__ */ new Map();
    var legacyQueryOptions = /* @__PURE__ */ new Set();
    if (Array.isArray(include)) {
      include.forEach(function(desc) {
        if (typeof desc === "string") {
          queryNamesAndDocs.set(desc, false);
        } else if (isDocumentNode(desc)) {
          queryNamesAndDocs.set(_this.transform(desc).document, false);
        } else if (isNonNullObject(desc) && desc.query) {
          legacyQueryOptions.add(desc);
        }
      });
    }
    this.queries.forEach(function(_a, queryId) {
      var oq = _a.observableQuery, document2 = _a.document;
      if (oq) {
        if (include === "all") {
          queries.set(queryId, oq);
          return;
        }
        var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
        if (fetchPolicy === "standby" || include === "active" && !oq.hasObservers()) {
          return;
        }
        if (include === "active" || queryName && queryNamesAndDocs.has(queryName) || document2 && queryNamesAndDocs.has(document2)) {
          queries.set(queryId, oq);
          if (queryName)
            queryNamesAndDocs.set(queryName, true);
          if (document2)
            queryNamesAndDocs.set(document2, true);
        }
      }
    });
    if (legacyQueryOptions.size) {
      legacyQueryOptions.forEach(function(options) {
        var queryId = makeUniqueId("legacyOneTimeQuery");
        var queryInfo = _this.getQuery(queryId).init({
          document: options.query,
          variables: options.variables
        });
        var oq = new ObservableQuery({
          queryManager: _this,
          queryInfo,
          options: __assign(__assign({}, options), { fetchPolicy: "network-only" })
        });
        invariant$1(oq.queryId === queryId);
        queryInfo.setObservableQuery(oq);
        queries.set(queryId, oq);
      });
    }
    return queries;
  };
  QueryManager2.prototype.reFetchObservableQueries = function(includeStandby) {
    var _this = this;
    if (includeStandby === void 0) {
      includeStandby = false;
    }
    var observableQueryPromises = [];
    this.getObservableQueries(includeStandby ? "all" : "active").forEach(function(observableQuery, queryId) {
      var fetchPolicy = observableQuery.options.fetchPolicy;
      observableQuery.resetLastResults();
      if (includeStandby || fetchPolicy !== "standby" && fetchPolicy !== "cache-only") {
        observableQueryPromises.push(observableQuery.refetch());
      }
      _this.getQuery(queryId).setDiff(null);
    });
    this.broadcastQueries();
    return Promise.all(observableQueryPromises);
  };
  QueryManager2.prototype.setObservableQuery = function(observableQuery) {
    this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
  };
  QueryManager2.prototype.startGraphQLSubscription = function(_a) {
    var _this = this;
    var query = _a.query, fetchPolicy = _a.fetchPolicy, errorPolicy = _a.errorPolicy, variables = _a.variables, _b = _a.context, context = _b === void 0 ? {} : _b;
    query = this.transform(query).document;
    variables = this.getVariables(query, variables);
    var makeObservable = function(variables2) {
      return _this.getObservableFromLink(query, context, variables2).map(function(result) {
        if (fetchPolicy !== "no-cache") {
          if (shouldWriteResult(result, errorPolicy)) {
            _this.cache.write({
              query,
              result: result.data,
              dataId: "ROOT_SUBSCRIPTION",
              variables: variables2
            });
          }
          _this.broadcastQueries();
        }
        var hasErrors = graphQLResultHasError(result);
        var hasProtocolErrors = graphQLResultHasProtocolErrors(result);
        if (hasErrors || hasProtocolErrors) {
          var errors = {};
          if (hasErrors) {
            errors.graphQLErrors = result.errors;
          }
          if (hasProtocolErrors) {
            errors.protocolErrors = result.extensions[PROTOCOL_ERRORS_SYMBOL];
          }
          throw new ApolloError(errors);
        }
        return result;
      });
    };
    if (this.transform(query).hasClientExports) {
      var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
      return new Observable(function(observer) {
        var sub = null;
        observablePromise_1.then(function(observable) {
          return sub = observable.subscribe(observer);
        }, observer.error);
        return function() {
          return sub && sub.unsubscribe();
        };
      });
    }
    return makeObservable(variables);
  };
  QueryManager2.prototype.stopQuery = function(queryId) {
    this.stopQueryNoBroadcast(queryId);
    this.broadcastQueries();
  };
  QueryManager2.prototype.stopQueryNoBroadcast = function(queryId) {
    this.stopQueryInStoreNoBroadcast(queryId);
    this.removeQuery(queryId);
  };
  QueryManager2.prototype.removeQuery = function(queryId) {
    this.fetchCancelFns.delete(queryId);
    if (this.queries.has(queryId)) {
      this.getQuery(queryId).stop();
      this.queries.delete(queryId);
    }
  };
  QueryManager2.prototype.broadcastQueries = function() {
    if (this.onBroadcast)
      this.onBroadcast();
    this.queries.forEach(function(info) {
      return info.notify();
    });
  };
  QueryManager2.prototype.getLocalState = function() {
    return this.localState;
  };
  QueryManager2.prototype.getObservableFromLink = function(query, context, variables, deduplication) {
    var _this = this;
    var _a;
    if (deduplication === void 0) {
      deduplication = (_a = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a !== void 0 ? _a : this.queryDeduplication;
    }
    var observable;
    var serverQuery = this.transform(query).serverQuery;
    if (serverQuery) {
      var _b = this, inFlightLinkObservables_1 = _b.inFlightLinkObservables, link = _b.link;
      var operation = {
        query: serverQuery,
        variables,
        operationName: getOperationName(serverQuery) || void 0,
        context: this.prepareContext(__assign(__assign({}, context), { forceFetch: !deduplication }))
      };
      context = operation.context;
      if (deduplication) {
        var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || /* @__PURE__ */ new Map();
        inFlightLinkObservables_1.set(serverQuery, byVariables_1);
        var varJson_1 = canonicalStringify(variables);
        observable = byVariables_1.get(varJson_1);
        if (!observable) {
          var concast = new Concast([
            execute(link, operation)
          ]);
          byVariables_1.set(varJson_1, observable = concast);
          concast.beforeNext(function() {
            if (byVariables_1.delete(varJson_1) && byVariables_1.size < 1) {
              inFlightLinkObservables_1.delete(serverQuery);
            }
          });
        }
      } else {
        observable = new Concast([
          execute(link, operation)
        ]);
      }
    } else {
      observable = new Concast([
        Observable.of({ data: {} })
      ]);
      context = this.prepareContext(context);
    }
    var clientQuery = this.transform(query).clientQuery;
    if (clientQuery) {
      observable = asyncMap(observable, function(result) {
        return _this.localState.runResolvers({
          document: clientQuery,
          remoteResult: result,
          context,
          variables
        });
      });
    }
    return observable;
  };
  QueryManager2.prototype.getResultsFromLink = function(queryInfo, cacheWriteBehavior, options) {
    var requestId = queryInfo.lastRequestId = this.generateRequestId();
    var linkDocument = this.cache.transformForLink(this.transform(queryInfo.document).document);
    return asyncMap(this.getObservableFromLink(linkDocument, options.context, options.variables), function(result) {
      var graphQLErrors = getGraphQLErrorsFromResult(result);
      var hasErrors = graphQLErrors.length > 0;
      if (requestId >= queryInfo.lastRequestId) {
        if (hasErrors && options.errorPolicy === "none") {
          throw queryInfo.markError(new ApolloError({
            graphQLErrors
          }));
        }
        queryInfo.markResult(result, linkDocument, options, cacheWriteBehavior);
        queryInfo.markReady();
      }
      var aqr = {
        data: result.data,
        loading: false,
        networkStatus: NetworkStatus.ready
      };
      if (hasErrors && options.errorPolicy !== "ignore") {
        aqr.errors = graphQLErrors;
        aqr.networkStatus = NetworkStatus.error;
      }
      return aqr;
    }, function(networkError) {
      var error = isApolloError(networkError) ? networkError : new ApolloError({ networkError });
      if (requestId >= queryInfo.lastRequestId) {
        queryInfo.markError(error);
      }
      throw error;
    });
  };
  QueryManager2.prototype.fetchQueryObservable = function(queryId, options, networkStatus) {
    return this.fetchConcastWithInfo(queryId, options, networkStatus).concast;
  };
  QueryManager2.prototype.fetchConcastWithInfo = function(queryId, options, networkStatus) {
    var _this = this;
    if (networkStatus === void 0) {
      networkStatus = NetworkStatus.loading;
    }
    var query = this.transform(options.query).document;
    var variables = this.getVariables(query, options.variables);
    var queryInfo = this.getQuery(queryId);
    var defaults2 = this.defaultOptions.watchQuery;
    var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? defaults2 && defaults2.fetchPolicy || "cache-first" : _a, _b = options.errorPolicy, errorPolicy = _b === void 0 ? defaults2 && defaults2.errorPolicy || "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
    var normalized = Object.assign({}, options, {
      query,
      variables,
      fetchPolicy,
      errorPolicy,
      returnPartialData,
      notifyOnNetworkStatusChange,
      context
    });
    var fromVariables = function(variables2) {
      normalized.variables = variables2;
      var sourcesWithInfo2 = _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
      if (normalized.fetchPolicy !== "standby" && sourcesWithInfo2.sources.length > 0 && queryInfo.observableQuery) {
        queryInfo.observableQuery["applyNextFetchPolicy"]("after-fetch", options);
      }
      return sourcesWithInfo2;
    };
    var cleanupCancelFn = function() {
      return _this.fetchCancelFns.delete(queryId);
    };
    this.fetchCancelFns.set(queryId, function(reason) {
      cleanupCancelFn();
      setTimeout(function() {
        return concast.cancel(reason);
      });
    });
    var concast, containsDataFromLink;
    if (this.transform(normalized.query).hasClientExports) {
      concast = new Concast(this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables).then(function(sourcesWithInfo2) {
        return sourcesWithInfo2.sources;
      }));
      containsDataFromLink = true;
    } else {
      var sourcesWithInfo = fromVariables(normalized.variables);
      containsDataFromLink = sourcesWithInfo.fromLink;
      concast = new Concast(sourcesWithInfo.sources);
    }
    concast.promise.then(cleanupCancelFn, cleanupCancelFn);
    return {
      concast,
      fromLink: containsDataFromLink
    };
  };
  QueryManager2.prototype.refetchQueries = function(_a) {
    var _this = this;
    var updateCache = _a.updateCache, include = _a.include, _b = _a.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? makeUniqueId("refetchQueries") : void 0 : _c, onQueryUpdated = _a.onQueryUpdated;
    var includedQueriesById = /* @__PURE__ */ new Map();
    if (include) {
      this.getObservableQueries(include).forEach(function(oq, queryId) {
        includedQueriesById.set(queryId, {
          oq,
          lastDiff: _this.getQuery(queryId).getDiff()
        });
      });
    }
    var results = /* @__PURE__ */ new Map();
    if (updateCache) {
      this.cache.batch({
        update: updateCache,
        optimistic: optimistic && removeOptimistic || false,
        removeOptimistic,
        onWatchUpdated: function(watch2, diff, lastDiff) {
          var oq = watch2.watcher instanceof QueryInfo && watch2.watcher.observableQuery;
          if (oq) {
            if (onQueryUpdated) {
              includedQueriesById.delete(oq.queryId);
              var result = onQueryUpdated(oq, diff, lastDiff);
              if (result === true) {
                result = oq.refetch();
              }
              if (result !== false) {
                results.set(oq, result);
              }
              return result;
            }
            if (onQueryUpdated !== null) {
              includedQueriesById.set(oq.queryId, { oq, lastDiff, diff });
            }
          }
        }
      });
    }
    if (includedQueriesById.size) {
      includedQueriesById.forEach(function(_a2, queryId) {
        var oq = _a2.oq, lastDiff = _a2.lastDiff, diff = _a2.diff;
        var result;
        if (onQueryUpdated) {
          if (!diff) {
            var info = oq["queryInfo"];
            info.reset();
            diff = info.getDiff();
          }
          result = onQueryUpdated(oq, diff, lastDiff);
        }
        if (!onQueryUpdated || result === true) {
          result = oq.refetch();
        }
        if (result !== false) {
          results.set(oq, result);
        }
        if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
          _this.stopQueryNoBroadcast(queryId);
        }
      });
    }
    if (removeOptimistic) {
      this.cache.removeOptimistic(removeOptimistic);
    }
    return results;
  };
  QueryManager2.prototype.fetchQueryByPolicy = function(queryInfo, _a, networkStatus) {
    var _this = this;
    var query = _a.query, variables = _a.variables, fetchPolicy = _a.fetchPolicy, refetchWritePolicy = _a.refetchWritePolicy, errorPolicy = _a.errorPolicy, returnPartialData = _a.returnPartialData, context = _a.context, notifyOnNetworkStatusChange = _a.notifyOnNetworkStatusChange;
    var oldNetworkStatus = queryInfo.networkStatus;
    queryInfo.init({
      document: this.transform(query).document,
      variables,
      networkStatus
    });
    var readCache = function() {
      return queryInfo.getDiff(variables);
    };
    var resultsFromCache = function(diff2, networkStatus2) {
      if (networkStatus2 === void 0) {
        networkStatus2 = queryInfo.networkStatus || NetworkStatus.loading;
      }
      var data = diff2.result;
      var fromData = function(data2) {
        return Observable.of(__assign({ data: data2, loading: isNetworkRequestInFlight(networkStatus2), networkStatus: networkStatus2 }, diff2.complete ? null : { partial: true }));
      };
      if (data && _this.transform(query).hasForcedResolvers) {
        return _this.localState.runResolvers({
          document: query,
          remoteResult: { data },
          context,
          variables,
          onlyRunForcedResolvers: true
        }).then(function(resolved) {
          return fromData(resolved.data || void 0);
        });
      }
      if (errorPolicy === "none" && networkStatus2 === NetworkStatus.refetch && Array.isArray(diff2.missing)) {
        return fromData(void 0);
      }
      return fromData(data);
    };
    var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 : networkStatus === NetworkStatus.refetch && refetchWritePolicy !== "merge" ? 1 : 2;
    var resultsFromLink = function() {
      return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
        variables,
        context,
        fetchPolicy,
        errorPolicy
      });
    };
    var shouldNotify = notifyOnNetworkStatusChange && typeof oldNetworkStatus === "number" && oldNetworkStatus !== networkStatus && isNetworkRequestInFlight(networkStatus);
    switch (fetchPolicy) {
      default:
      case "cache-first": {
        var diff = readCache();
        if (diff.complete) {
          return { fromLink: false, sources: [resultsFromCache(diff, queryInfo.markReady())] };
        }
        if (returnPartialData || shouldNotify) {
          return { fromLink: true, sources: [resultsFromCache(diff), resultsFromLink()] };
        }
        return { fromLink: true, sources: [resultsFromLink()] };
      }
      case "cache-and-network": {
        var diff = readCache();
        if (diff.complete || returnPartialData || shouldNotify) {
          return { fromLink: true, sources: [resultsFromCache(diff), resultsFromLink()] };
        }
        return { fromLink: true, sources: [resultsFromLink()] };
      }
      case "cache-only":
        return { fromLink: false, sources: [resultsFromCache(readCache(), queryInfo.markReady())] };
      case "network-only":
        if (shouldNotify) {
          return { fromLink: true, sources: [resultsFromCache(readCache()), resultsFromLink()] };
        }
        return { fromLink: true, sources: [resultsFromLink()] };
      case "no-cache":
        if (shouldNotify) {
          return {
            fromLink: true,
            sources: [
              resultsFromCache(queryInfo.getDiff()),
              resultsFromLink()
            ]
          };
        }
        return { fromLink: true, sources: [resultsFromLink()] };
      case "standby":
        return { fromLink: false, sources: [] };
    }
  };
  QueryManager2.prototype.getQuery = function(queryId) {
    if (queryId && !this.queries.has(queryId)) {
      this.queries.set(queryId, new QueryInfo(this, queryId));
    }
    return this.queries.get(queryId);
  };
  QueryManager2.prototype.prepareContext = function(context) {
    if (context === void 0) {
      context = {};
    }
    var newContext = this.localState.prepareContext(context);
    return __assign(__assign({}, newContext), { clientAwareness: this.clientAwareness });
  };
  return QueryManager2;
}();
var ApolloClient = function() {
  function ApolloClient2(options) {
    var _this = this;
    this.resetStoreCallbacks = [];
    this.clearStoreCallbacks = [];
    var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.connectToDevTools, connectToDevTools = _c === void 0 ? false : _c, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions2 = options.defaultOptions, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? false : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
    var link = options.link;
    if (!link) {
      link = uri ? new HttpLink({ uri, credentials, headers }) : ApolloLink.empty();
    }
    if (!cache) {
      throw new InvariantError(9);
    }
    this.link = link;
    this.cache = cache;
    this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
    this.queryDeduplication = queryDeduplication;
    this.defaultOptions = defaultOptions2 || /* @__PURE__ */ Object.create(null);
    this.typeDefs = typeDefs;
    if (ssrForceFetchDelay) {
      setTimeout(function() {
        return _this.disableNetworkFetches = false;
      }, ssrForceFetchDelay);
    }
    this.watchQuery = this.watchQuery.bind(this);
    this.query = this.query.bind(this);
    this.mutate = this.mutate.bind(this);
    this.resetStore = this.resetStore.bind(this);
    this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
    if (connectToDevTools && false) {
      window.__APOLLO_CLIENT__ = this;
    }
    this.version = version;
    this.localState = new LocalState({
      cache,
      client: this,
      resolvers,
      fragmentMatcher
    });
    this.queryManager = new QueryManager({
      cache: this.cache,
      link: this.link,
      defaultOptions: this.defaultOptions,
      queryDeduplication,
      ssrMode,
      clientAwareness: {
        name: clientAwarenessName,
        version: clientAwarenessVersion
      },
      localState: this.localState,
      assumeImmutableResults,
      onBroadcast: connectToDevTools ? function() {
        if (_this.devToolsHookCb) {
          _this.devToolsHookCb({
            action: {},
            state: {
              queries: _this.queryManager.getQueryStore(),
              mutations: _this.queryManager.mutationStore || {}
            },
            dataWithOptimisticResults: _this.cache.extract(true)
          });
        }
      } : void 0
    });
  }
  ApolloClient2.prototype.stop = function() {
    this.queryManager.stop();
  };
  ApolloClient2.prototype.watchQuery = function(options) {
    if (this.defaultOptions.watchQuery) {
      options = mergeOptions(this.defaultOptions.watchQuery, options);
    }
    if (this.disableNetworkFetches && (options.fetchPolicy === "network-only" || options.fetchPolicy === "cache-and-network")) {
      options = __assign(__assign({}, options), { fetchPolicy: "cache-first" });
    }
    return this.queryManager.watchQuery(options);
  };
  ApolloClient2.prototype.query = function(options) {
    if (this.defaultOptions.query) {
      options = mergeOptions(this.defaultOptions.query, options);
    }
    invariant$1(options.fetchPolicy !== "cache-and-network", 10);
    if (this.disableNetworkFetches && options.fetchPolicy === "network-only") {
      options = __assign(__assign({}, options), { fetchPolicy: "cache-first" });
    }
    return this.queryManager.query(options);
  };
  ApolloClient2.prototype.mutate = function(options) {
    if (this.defaultOptions.mutate) {
      options = mergeOptions(this.defaultOptions.mutate, options);
    }
    return this.queryManager.mutate(options);
  };
  ApolloClient2.prototype.subscribe = function(options) {
    return this.queryManager.startGraphQLSubscription(options);
  };
  ApolloClient2.prototype.readQuery = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return this.cache.readQuery(options, optimistic);
  };
  ApolloClient2.prototype.readFragment = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return this.cache.readFragment(options, optimistic);
  };
  ApolloClient2.prototype.writeQuery = function(options) {
    var ref2 = this.cache.writeQuery(options);
    if (options.broadcast !== false) {
      this.queryManager.broadcastQueries();
    }
    return ref2;
  };
  ApolloClient2.prototype.writeFragment = function(options) {
    var ref2 = this.cache.writeFragment(options);
    if (options.broadcast !== false) {
      this.queryManager.broadcastQueries();
    }
    return ref2;
  };
  ApolloClient2.prototype.__actionHookForDevTools = function(cb) {
    this.devToolsHookCb = cb;
  };
  ApolloClient2.prototype.__requestRaw = function(payload) {
    return execute(this.link, payload);
  };
  ApolloClient2.prototype.resetStore = function() {
    var _this = this;
    return Promise.resolve().then(function() {
      return _this.queryManager.clearStore({
        discardWatches: false
      });
    }).then(function() {
      return Promise.all(_this.resetStoreCallbacks.map(function(fn) {
        return fn();
      }));
    }).then(function() {
      return _this.reFetchObservableQueries();
    });
  };
  ApolloClient2.prototype.clearStore = function() {
    var _this = this;
    return Promise.resolve().then(function() {
      return _this.queryManager.clearStore({
        discardWatches: true
      });
    }).then(function() {
      return Promise.all(_this.clearStoreCallbacks.map(function(fn) {
        return fn();
      }));
    });
  };
  ApolloClient2.prototype.onResetStore = function(cb) {
    var _this = this;
    this.resetStoreCallbacks.push(cb);
    return function() {
      _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function(c) {
        return c !== cb;
      });
    };
  };
  ApolloClient2.prototype.onClearStore = function(cb) {
    var _this = this;
    this.clearStoreCallbacks.push(cb);
    return function() {
      _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function(c) {
        return c !== cb;
      });
    };
  };
  ApolloClient2.prototype.reFetchObservableQueries = function(includeStandby) {
    return this.queryManager.reFetchObservableQueries(includeStandby);
  };
  ApolloClient2.prototype.refetchQueries = function(options) {
    var map = this.queryManager.refetchQueries(options);
    var queries = [];
    var results = [];
    map.forEach(function(result2, obsQuery) {
      queries.push(obsQuery);
      results.push(result2);
    });
    var result = Promise.all(results);
    result.queries = queries;
    result.results = results;
    result.catch(function(error) {
    });
    return result;
  };
  ApolloClient2.prototype.getObservableQueries = function(include) {
    if (include === void 0) {
      include = "active";
    }
    return this.queryManager.getObservableQueries(include);
  };
  ApolloClient2.prototype.extract = function(optimistic) {
    return this.cache.extract(optimistic);
  };
  ApolloClient2.prototype.restore = function(serializedState) {
    return this.cache.restore(serializedState);
  };
  ApolloClient2.prototype.addResolvers = function(resolvers) {
    this.localState.addResolvers(resolvers);
  };
  ApolloClient2.prototype.setResolvers = function(resolvers) {
    this.localState.setResolvers(resolvers);
  };
  ApolloClient2.prototype.getResolvers = function() {
    return this.localState.getResolvers();
  };
  ApolloClient2.prototype.setLocalStateFragmentMatcher = function(fragmentMatcher) {
    this.localState.setFragmentMatcher(fragmentMatcher);
  };
  ApolloClient2.prototype.setLink = function(newLink) {
    this.link = this.queryManager.link = newLink;
  };
  return ApolloClient2;
}();
var docCache = /* @__PURE__ */ new Map();
var fragmentSourceMap = /* @__PURE__ */ new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;
function normalize(string) {
  return string.replace(/[\s,]+/g, " ").trim();
}
function cacheKeyFromLoc(loc) {
  return normalize(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
  var seenKeys = /* @__PURE__ */ new Set();
  var definitions = [];
  ast.definitions.forEach(function(fragmentDefinition) {
    if (fragmentDefinition.kind === "FragmentDefinition") {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
      var sourceKeySet = fragmentSourceMap.get(fragmentName);
      if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }
      } else if (!sourceKeySet) {
        fragmentSourceMap.set(fragmentName, sourceKeySet = /* @__PURE__ */ new Set());
      }
      sourceKeySet.add(sourceKey);
      if (!seenKeys.has(sourceKey)) {
        seenKeys.add(sourceKey);
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  });
  return __assign(__assign({}, ast), { definitions });
}
function stripLoc(doc) {
  var workSet = new Set(doc.definitions);
  workSet.forEach(function(node) {
    if (node.loc)
      delete node.loc;
    Object.keys(node).forEach(function(key) {
      var value = node[key];
      if (value && typeof value === "object") {
        workSet.add(value);
      }
    });
  });
  var loc = doc.loc;
  if (loc) {
    delete loc.startToken;
    delete loc.endToken;
  }
  return doc;
}
function parseDocument(source) {
  var cacheKey = normalize(source);
  if (!docCache.has(cacheKey)) {
    var parsed = parse(source, {
      experimentalFragmentVariables,
      allowLegacyFragmentVariables: experimentalFragmentVariables
    });
    if (!parsed || parsed.kind !== "Document") {
      throw new Error("Not a valid GraphQL document.");
    }
    docCache.set(cacheKey, stripLoc(processFragments(parsed)));
  }
  return docCache.get(cacheKey);
}
function gql(literals) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  if (typeof literals === "string") {
    literals = [literals];
  }
  var result = literals[0];
  args.forEach(function(arg, i) {
    if (arg && arg.kind === "Document") {
      result += arg.loc.source.body;
    } else {
      result += arg;
    }
    result += literals[i + 1];
  });
  return parseDocument(result);
}
function resetCaches() {
  docCache.clear();
  fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
  printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}
var extras = {
  gql,
  resetCaches,
  disableFragmentWarnings,
  enableExperimentalFragmentVariables,
  disableExperimentalFragmentVariables
};
(function(gql_1) {
  gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {}));
gql["default"] = gql;
const gql$1 = gql;
var DefaultApolloClient = Symbol("default-apollo-client");
var ApolloClients = Symbol("apollo-clients");
function resolveDefaultClient(providedApolloClients, providedApolloClient) {
  const resolvedClient = providedApolloClients ? providedApolloClients.default : providedApolloClient != null ? providedApolloClient : void 0;
  return resolvedClient;
}
function resolveClientWithId(providedApolloClients, clientId) {
  if (!providedApolloClients) {
    throw new Error(`No apolloClients injection found, tried to resolve '${clientId}' clientId`);
  }
  return providedApolloClients[clientId];
}
function useApolloClient(clientId) {
  let resolveImpl;
  const savedCurrentClients = currentApolloClients;
  if (!getCurrentInstance()) {
    resolveImpl = (id) => {
      if (id) {
        return resolveClientWithId(savedCurrentClients, id);
      }
      return resolveDefaultClient(savedCurrentClients, savedCurrentClients.default);
    };
  } else {
    const providedApolloClients = inject(ApolloClients, null);
    const providedApolloClient = inject(DefaultApolloClient, null);
    resolveImpl = (id) => {
      if (id) {
        const client2 = resolveClientWithId(providedApolloClients, id);
        if (client2) {
          return client2;
        }
        return resolveClientWithId(savedCurrentClients, id);
      }
      const client = resolveDefaultClient(providedApolloClients, providedApolloClient);
      if (client) {
        return client;
      }
      return resolveDefaultClient(savedCurrentClients, savedCurrentClients.default);
    };
  }
  function resolveClient(id = clientId) {
    const client = resolveImpl(id);
    if (!client) {
      throw new Error(`Apollo client with id ${id != null ? id : "default"} not found. Use provideApolloClient() if you are outside of a component setup.`);
    }
    return client;
  }
  return {
    resolveClient,
    get client() {
      return resolveClient();
    }
  };
}
var currentApolloClients = {};
function provideApolloClients(clients) {
  currentApolloClients = clients;
  return function(fn) {
    const result = fn();
    currentApolloClients = {};
    return result;
  };
}
function paramToRef(param) {
  if (isRef(param)) {
    return param;
  } else if (typeof param === "function") {
    return computed(param);
  } else {
    return ref(param);
  }
}
function paramToReactive(param) {
  if (isRef(param)) {
    return param;
  } else if (typeof param === "function") {
    return computed(param);
  } else if (param) {
    return reactive(param);
  } else {
    return param;
  }
}
function useEventHook() {
  const fns = [];
  function on(fn) {
    fns.push(fn);
    return {
      off: () => off(fn)
    };
  }
  function off(fn) {
    const index = fns.indexOf(fn);
    if (index !== -1) {
      fns.splice(index, 1);
    }
  }
  function trigger(param) {
    for (const fn of fns) {
      fn(param);
    }
  }
  function getCount() {
    return fns.length;
  }
  return {
    on,
    off,
    trigger,
    getCount
  };
}
function getAppTracking() {
  var _a, _b, _c;
  const vm = getCurrentInstance();
  const root = (_c = (_a = vm == null ? void 0 : vm.$root) != null ? _a : vm == null ? void 0 : vm.root) != null ? _c : (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$root;
  if (!root) {
    throw new Error("Instance $root not found");
  }
  let appTracking;
  if (!root._apolloAppTracking) {
    appTracking = root._apolloAppTracking = {
      queries: ref(0),
      mutations: ref(0),
      subscriptions: ref(0),
      components: /* @__PURE__ */ new Map()
    };
  } else {
    appTracking = root._apolloAppTracking;
  }
  return {
    appTracking
  };
}
function getCurrentTracking() {
  const vm = getCurrentInstance();
  if (!vm) {
    throw new Error("getCurrentTracking must be used during a component setup");
  }
  const { appTracking } = getAppTracking();
  let tracking;
  if (!appTracking.components.has(vm)) {
    appTracking.components.set(vm, tracking = {
      queries: ref(0),
      mutations: ref(0),
      subscriptions: ref(0)
    });
    onUnmounted(() => {
      appTracking.components.delete(vm);
    });
  } else {
    tracking = appTracking.components.get(vm);
  }
  return {
    appTracking,
    tracking
  };
}
function track(loading, type) {
  const { appTracking, tracking } = getCurrentTracking();
  watch(loading, (value, oldValue) => {
    if (oldValue != null && value !== oldValue) {
      const mod = value ? 1 : -1;
      tracking[type].value += mod;
      appTracking[type].value += mod;
    }
  }, {
    immediate: true
  });
}
function trackQuery(loading) {
  track(loading, "queries");
}
function trackMutation(loading) {
  track(loading, "mutations");
}
function toApolloError(error) {
  if (!(error instanceof Error)) {
    return new ApolloError({
      networkError: Object.assign(new Error(), { originalError: error }),
      errorMessage: String(error)
    });
  }
  if (isApolloError(error)) {
    return error;
  }
  return new ApolloError({ networkError: error, errorMessage: error.message });
}
function resultErrorsToApolloError(errors) {
  return new ApolloError({
    graphQLErrors: errors,
    errorMessage: `GraphQL response contains errors: ${errors.map((e) => e.message).join(" | ")}`
  });
}
function useQuery(document2, variables, options) {
  return useQueryImpl(document2, variables, options);
}
function useQueryImpl(document2, variables, options = {}, lazy = false) {
  var _a;
  const vm = getCurrentInstance();
  const currentOptions = ref();
  const documentRef = paramToRef(document2);
  const variablesRef = paramToRef(variables);
  const optionsRef = paramToReactive(options);
  const result = ref();
  const resultEvent = useEventHook();
  const error = ref(null);
  const errorEvent = useEventHook();
  const loading = ref(false);
  vm && trackQuery(loading);
  const networkStatus = ref();
  let firstResolve;
  let firstReject;
  vm && ((_a = onServerPrefetch) == null ? void 0 : _a(() => {
    var _a2;
    if (!isEnabled.value || ((_a2 = currentOptions.value) == null ? void 0 : _a2.prefetch) === false)
      return;
    return new Promise((resolve, reject) => {
      firstResolve = () => {
        resolve();
        firstResolve = void 0;
        firstReject = void 0;
      };
      firstReject = (apolloError) => {
        reject(apolloError);
        firstResolve = void 0;
        firstReject = void 0;
      };
    }).finally(stop);
  }));
  const { resolveClient } = useApolloClient();
  const query = ref();
  let observer;
  let started = false;
  let ignoreNextResult = false;
  function start() {
    var _a2, _b, _c;
    if (started || !isEnabled.value || ((_a2 = currentOptions.value) == null ? void 0 : _a2.prefetch) === false) {
      if (firstResolve)
        firstResolve();
      return;
    }
    started = true;
    error.value = null;
    loading.value = true;
    const client = resolveClient((_b = currentOptions.value) == null ? void 0 : _b.clientId);
    query.value = client.watchQuery({
      query: currentDocument,
      variables: currentVariables,
      ...currentOptions.value,
      ...((_c = currentOptions.value) == null ? void 0 : _c.fetchPolicy) !== "no-cache" ? {
        fetchPolicy: "network-only"
      } : {}
    });
    startQuerySubscription();
  }
  function startQuerySubscription() {
    if (observer && !observer.closed)
      return;
    if (!query.value)
      return;
    ignoreNextResult = false;
    observer = query.value.subscribe({
      next: onNextResult,
      error: onError2
    });
  }
  function onNextResult(queryResult) {
    var _a2;
    if (ignoreNextResult) {
      ignoreNextResult = false;
      return;
    }
    error.value = null;
    processNextResult(queryResult);
    if (!queryResult.error && ((_a2 = queryResult.errors) == null ? void 0 : _a2.length)) {
      processError(resultErrorsToApolloError(queryResult.errors));
    }
    if (firstResolve) {
      firstResolve();
      stop();
    }
  }
  function processNextResult(queryResult) {
    result.value = queryResult.data && Object.keys(queryResult.data).length === 0 ? void 0 : queryResult.data;
    loading.value = queryResult.loading;
    networkStatus.value = queryResult.networkStatus;
    resultEvent.trigger(queryResult);
  }
  function onError2(queryError) {
    var _a2, _b, _c, _d;
    if (ignoreNextResult) {
      ignoreNextResult = false;
      return;
    }
    const apolloError = toApolloError(queryError);
    const client = resolveClient((_a2 = currentOptions.value) == null ? void 0 : _a2.clientId);
    const errorPolicy = ((_b = currentOptions.value) == null ? void 0 : _b.errorPolicy) || ((_d = (_c = client.defaultOptions) == null ? void 0 : _c.watchQuery) == null ? void 0 : _d.errorPolicy);
    if (errorPolicy && errorPolicy !== "none") {
      processNextResult(query.value.getCurrentResult());
    }
    processError(apolloError);
    if (firstReject) {
      firstReject(apolloError);
      stop();
    }
    resubscribeToQuery();
  }
  function processError(apolloError) {
    error.value = apolloError;
    loading.value = false;
    networkStatus.value = 8;
    errorEvent.trigger(apolloError);
  }
  function resubscribeToQuery() {
    if (!query.value)
      return;
    const lastError = query.value.getLastError();
    const lastResult = query.value.getLastResult();
    query.value.resetLastResults();
    startQuerySubscription();
    Object.assign(query.value, { lastError, lastResult });
  }
  let onStopHandlers = [];
  function stop() {
    if (firstResolve)
      firstResolve();
    if (!started)
      return;
    started = false;
    loading.value = false;
    onStopHandlers.forEach((handler2) => handler2());
    onStopHandlers = [];
    if (query.value) {
      query.value.stopPolling();
      query.value = null;
    }
    if (observer) {
      observer.unsubscribe();
      observer = void 0;
    }
  }
  let restarting = false;
  function baseRestart() {
    if (!started || restarting)
      return;
    restarting = true;
    nextTick(() => {
      if (started) {
        stop();
        start();
      }
      restarting = false;
    });
  }
  let debouncedRestart;
  let isRestartDebounceSetup = false;
  function updateRestartFn() {
    var _a2, _b;
    if (!currentOptions.value) {
      debouncedRestart = baseRestart;
    } else {
      if ((_a2 = currentOptions.value) == null ? void 0 : _a2.throttle) {
        debouncedRestart = throttle(currentOptions.value.throttle, baseRestart);
      } else if ((_b = currentOptions.value) == null ? void 0 : _b.debounce) {
        debouncedRestart = debounce(currentOptions.value.debounce, baseRestart);
      } else {
        debouncedRestart = baseRestart;
      }
      isRestartDebounceSetup = true;
    }
  }
  function restart() {
    if (!isRestartDebounceSetup)
      updateRestartFn();
    debouncedRestart();
  }
  let currentDocument;
  watch(documentRef, (value) => {
    currentDocument = value;
    restart();
  }, {
    immediate: true
  });
  let currentVariables;
  let currentVariablesSerialized;
  watch(variablesRef, (value, oldValue) => {
    const serialized = JSON.stringify(value);
    if (serialized !== currentVariablesSerialized) {
      currentVariables = value;
      restart();
    }
    currentVariablesSerialized = serialized;
  }, {
    deep: true,
    immediate: true
  });
  watch(() => unref(optionsRef), (value) => {
    if (currentOptions.value && (currentOptions.value.throttle !== value.throttle || currentOptions.value.debounce !== value.debounce)) {
      updateRestartFn();
    }
    currentOptions.value = value;
    restart();
  }, {
    deep: true,
    immediate: true
  });
  function refetch(variables2 = void 0) {
    if (query.value) {
      if (variables2) {
        currentVariables = variables2;
      }
      error.value = null;
      loading.value = true;
      return query.value.refetch(variables2).then((refetchResult) => {
        var _a2;
        const currentResult = (_a2 = query.value) == null ? void 0 : _a2.getCurrentResult();
        currentResult && processNextResult(currentResult);
        return refetchResult;
      });
    }
  }
  function fetchMore(options2) {
    if (query.value) {
      error.value = null;
      loading.value = true;
      return query.value.fetchMore(options2).then((fetchMoreResult) => {
        var _a2;
        const currentResult = (_a2 = query.value) == null ? void 0 : _a2.getCurrentResult();
        currentResult && processNextResult(currentResult);
        return fetchMoreResult;
      });
    }
  }
  function subscribeToMore(options2) {
    return;
  }
  const forceDisabled = ref(lazy);
  const enabledOption = computed(() => !currentOptions.value || currentOptions.value.enabled == null || currentOptions.value.enabled);
  const isEnabled = computed(() => enabledOption.value && !forceDisabled.value);
  watch(isEnabled, (value) => {
    if (value) {
      start();
    } else {
      stop();
    }
  }, {
    immediate: true
  });
  vm && onBeforeUnmount(() => {
    stop();
  });
  return {
    result,
    loading,
    networkStatus,
    error,
    start,
    stop,
    restart,
    forceDisabled,
    document: documentRef,
    variables: variablesRef,
    options: optionsRef,
    query,
    refetch,
    fetchMore,
    subscribeToMore,
    onResult: resultEvent.on,
    onError: errorEvent.on
  };
}
function useMutation(document2, options = {}) {
  const vm = getCurrentInstance();
  const loading = ref(false);
  vm && trackMutation(loading);
  const error = ref(null);
  const called = ref(false);
  const doneEvent = useEventHook();
  const errorEvent = useEventHook();
  const { resolveClient } = useApolloClient();
  async function mutate(variables, overrideOptions = {}) {
    let currentDocument;
    if (isRef(document2)) {
      currentDocument = document2.value;
    } else {
      currentDocument = document2;
    }
    let currentOptions;
    if (typeof options === "function") {
      currentOptions = options();
    } else if (isRef(options)) {
      currentOptions = options.value;
    } else {
      currentOptions = options;
    }
    const client = resolveClient(currentOptions.clientId);
    error.value = null;
    loading.value = true;
    called.value = true;
    try {
      const result = await client.mutate({
        mutation: currentDocument,
        ...currentOptions,
        ...overrideOptions,
        variables: (variables != null ? variables : currentOptions.variables) ? {
          ...currentOptions.variables,
          ...variables
        } : void 0
      });
      loading.value = false;
      doneEvent.trigger(result);
      return result;
    } catch (e) {
      const apolloError = toApolloError(e);
      error.value = apolloError;
      loading.value = false;
      errorEvent.trigger(apolloError);
      if (currentOptions.throws === "always" || currentOptions.throws !== "never" && !errorEvent.getCount()) {
        throw apolloError;
      }
    }
    return null;
  }
  vm && onBeforeUnmount(() => {
    loading.value = false;
  });
  return {
    mutate,
    loading,
    error,
    called,
    onDone: doneEvent.on,
    onError: errorEvent.on
  };
}
function setContext(setter) {
  return new ApolloLink(function(operation, forward) {
    var request = __rest(operation, []);
    return new Observable(function(observer) {
      var handle;
      var closed = false;
      Promise.resolve(request).then(function(req) {
        return setter(req, operation.getContext());
      }).then(operation.setContext).then(function() {
        if (closed)
          return;
        handle = forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer)
        });
      }).catch(observer.error.bind(observer));
      return function() {
        closed = true;
        if (handle)
          handle.unsubscribe();
      };
    });
  });
}
const NuxtApollo = {
  proxyCookies: true,
  clientAwareness: false,
  cookieAttributes: { "maxAge": 604800, "secure": true },
  clients: { "default": { "httpEndpoint": "/api/graphql", "authType": "Bearer", "authHeader": "Authorization", "tokenName": "apollo:default.token", "tokenStorage": "cookie" } }
};
function useAsyncQuery(...args) {
  const { key, fn } = prep(...args);
  return useAsyncData(key, fn, "$WvHsgSk08j");
}
const prep = (...args) => {
  var _a, _b, _c, _d, _e;
  const { clients } = useApollo();
  const query = ((_a = args == null ? void 0 : args[0]) == null ? void 0 : _a.query) || (args == null ? void 0 : args[0]);
  ((_b = args == null ? void 0 : args[0]) == null ? void 0 : _b.cache) ?? true;
  const variables = ((_c = args == null ? void 0 : args[0]) == null ? void 0 : _c.variables) || typeof (args == null ? void 0 : args[1]) !== "string" && (args == null ? void 0 : args[1]) || void 0;
  let clientId = ((_d = args == null ? void 0 : args[0]) == null ? void 0 : _d.clientId) || typeof (args == null ? void 0 : args[1]) === "string" && (args == null ? void 0 : args[1]) || void 0;
  if (!clientId || !(clients == null ? void 0 : clients[clientId])) {
    clientId = (clients == null ? void 0 : clients.default) ? "default" : Object.keys(clients)[0];
  }
  const key = ((_e = args == null ? void 0 : args[0]) == null ? void 0 : _e.key) || hash$1({ query: print(query), variables, clientId });
  const fn = () => {
    var _a2;
    return (_a2 = clients[clientId]) == null ? void 0 : _a2.query({ query, variables, fetchPolicy: "no-cache" }).then((r) => r.data);
  };
  return { key, query, clientId, variables, fn };
};
const useApollo = () => {
  const nuxtApp = useNuxtApp();
  const getToken = async (client) => {
    var _a;
    client = client || "default";
    const conf = (_a = NuxtApollo == null ? void 0 : NuxtApollo.clients) == null ? void 0 : _a[client];
    const token = ref(null);
    await nuxtApp.callHook("apollo:auth", { token, client });
    if (token.value) {
      return token.value;
    }
    const tokenName = conf.tokenName;
    return (conf == null ? void 0 : conf.tokenStorage) === "cookie" ? useCookie(tokenName).value : null;
  };
  const updateAuth = async ({ token, client, mode, skipResetStore }) => {
    var _a, _b, _c;
    client = client || "default";
    const conf = (_a = NuxtApollo == null ? void 0 : NuxtApollo.clients) == null ? void 0 : _a[client];
    const tokenName = client && conf.tokenName;
    if ((conf == null ? void 0 : conf.tokenStorage) === "cookie") {
      const cookieOpts = client && (conf == null ? void 0 : conf.cookieAttributes) || (NuxtApollo == null ? void 0 : NuxtApollo.cookieAttributes);
      const cookie = useCookie(tokenName, cookieOpts);
      if (!cookie.value && mode === "logout") {
        return;
      }
      cookie.value = mode === "login" && token || null;
    }
    if ((_b = nuxtApp == null ? void 0 : nuxtApp._apolloWsClients) == null ? void 0 : _b[client]) {
      nuxtApp._apolloWsClients[client].restart();
    }
    if (skipResetStore) {
      return;
    }
    await ((_c = nuxtApp == null ? void 0 : nuxtApp._apolloClients) == null ? void 0 : _c[client].resetStore().catch((e) => console.log("%cError on cache reset", "color: orange;", e.message)));
  };
  return {
    /**
     * Retrieve the auth token for the specified client. Adheres to the `apollo:auth` hook.
     *
     * @param {string} client The client who's token to retrieve. Defaults to `default`.
     */
    getToken,
    /**
     * Access the configured apollo clients.
     */
    clients: nuxtApp == null ? void 0 : nuxtApp._apolloClients,
    /**
     * Apply auth token to the specified Apollo client, and optionally reset it's cache.
     *
     * @param {string} token The token to be applied.
     * @param {string} client - Name of the Apollo client. Defaults to `default`.
     * @param {boolean} skipResetStore - If `true`, the cache will not be reset.
     * */
    onLogin: (token, client, skipResetStore) => updateAuth({ token, client, skipResetStore, mode: "login" }),
    /**
     * Remove the auth token from the Apollo client, and optionally reset it's cache.
     *
     * @param {string} client - Name of the Apollo client. Defaults to `default`.
     * @param {boolean} skipResetStore - If `true`, the cache will not be reset.
     * */
    onLogout: (client, skipResetStore) => updateAuth({ client, skipResetStore, mode: "logout" })
  };
};
const plugin_eTVJQYlCmx = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  var _a, _b;
  const requestCookies = useRequestHeaders(["cookie"]) || void 0;
  const clients = {};
  for (const [key, clientConfig] of Object.entries(NuxtApollo.clients)) {
    const getAuth = async () => {
      var _a2, _b2, _c, _d;
      const token = ref();
      await nuxtApp.callHook("apollo:auth", { token, client: key });
      if (!token.value) {
        if (clientConfig.tokenStorage === "cookie") {
          if (requestCookies == null ? void 0 : requestCookies.cookie) {
            token.value = (_b2 = (_a2 = requestCookies.cookie.split(";").find((c) => c.trim().startsWith(`${clientConfig.tokenName}=`))) == null ? void 0 : _a2.split("=")) == null ? void 0 : _b2[1];
          }
        }
        if (!token.value) {
          return;
        }
      }
      const authScheme = !!((_d = (_c = token.value) == null ? void 0 : _c.match(/^[a-zA-Z]+\s/)) == null ? void 0 : _d[0]);
      if (authScheme || (clientConfig == null ? void 0 : clientConfig.authType) === null) {
        return token.value;
      }
      return `${clientConfig == null ? void 0 : clientConfig.authType} ${token.value}`;
    };
    const authLink = setContext(async (_, { headers }) => {
      const auth = await getAuth();
      if (!auth) {
        return;
      }
      return {
        headers: {
          ...headers,
          ...requestCookies && requestCookies,
          [clientConfig.authHeader]: auth
        }
      };
    });
    const httpLink = authLink.concat(createHttpLink({
      ...(clientConfig == null ? void 0 : clientConfig.httpLinkOptions) && clientConfig.httpLinkOptions,
      uri: clientConfig.httpEndpoint,
      headers: { ...((_a = clientConfig == null ? void 0 : clientConfig.httpLinkOptions) == null ? void 0 : _a.headers) || {} }
    }));
    const errorLink = onError((err) => {
      nuxtApp.callHook("apollo:error", err);
    });
    const link = ApolloLink.from([
      errorLink,
      ...[httpLink]
    ]);
    const cache = new InMemoryCache(clientConfig.inMemoryCacheOptions);
    clients[key] = new ApolloClient({
      link,
      cache,
      ...NuxtApollo.clientAwareness,
      ...{ ssrMode: true },
      connectToDevTools: clientConfig.connectToDevTools || false,
      defaultOptions: clientConfig == null ? void 0 : clientConfig.defaultOptions
    });
    if (!(clients == null ? void 0 : clients.default) && !((_b = NuxtApollo == null ? void 0 : NuxtApollo.clients) == null ? void 0 : _b.default) && key === Object.keys(NuxtApollo.clients)[0]) {
      clients.default = clients[key];
    }
    const cacheKey = `_apollo:${key}`;
    nuxtApp.hook("app:rendered", () => {
      nuxtApp.payload.data[cacheKey] = cache.extract();
    });
  }
  provideApolloClients(clients);
  nuxtApp.vueApp.provide(ApolloClients, clients);
  nuxtApp._apolloClients = clients;
  const defaultClient = clients == null ? void 0 : clients.default;
  return {
    provide: {
      apolloHelpers: useApollo(),
      apollo: { clients, defaultClient }
    }
  };
});
const masonry_UUne9oxs8w = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(MasonryWall);
});
var DomHandler = {
  innerWidth(el) {
    if (el) {
      let width = el.offsetWidth;
      let style2 = getComputedStyle(el);
      width += parseFloat(style2.paddingLeft) + parseFloat(style2.paddingRight);
      return width;
    }
    return 0;
  },
  width(el) {
    if (el) {
      let width = el.offsetWidth;
      let style2 = getComputedStyle(el);
      width -= parseFloat(style2.paddingLeft) + parseFloat(style2.paddingRight);
      return width;
    }
    return 0;
  },
  getWindowScrollTop() {
    let doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  },
  getWindowScrollLeft() {
    let doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  },
  getOuterWidth(el, margin) {
    if (el) {
      let width = el.offsetWidth;
      if (margin) {
        let style2 = getComputedStyle(el);
        width += parseFloat(style2.marginLeft) + parseFloat(style2.marginRight);
      }
      return width;
    }
    return 0;
  },
  getOuterHeight(el, margin) {
    if (el) {
      let height = el.offsetHeight;
      if (margin) {
        let style2 = getComputedStyle(el);
        height += parseFloat(style2.marginTop) + parseFloat(style2.marginBottom);
      }
      return height;
    }
    return 0;
  },
  getClientHeight(el, margin) {
    if (el) {
      let height = el.clientHeight;
      if (margin) {
        let style2 = getComputedStyle(el);
        height += parseFloat(style2.marginTop) + parseFloat(style2.marginBottom);
      }
      return height;
    }
    return 0;
  },
  getViewport() {
    let win = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h2 = win.innerHeight || e.clientHeight || g.clientHeight;
    return { width: w, height: h2 };
  },
  getOffset(el) {
    if (el) {
      let rect = el.getBoundingClientRect();
      return {
        top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
        left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
      };
    }
    return {
      top: "auto",
      left: "auto"
    };
  },
  index(element) {
    if (element) {
      let children = element.parentNode.childNodes;
      let num = 0;
      for (let i = 0; i < children.length; i++) {
        if (children[i] === element)
          return num;
        if (children[i].nodeType === 1)
          num++;
      }
    }
    return -1;
  },
  addMultipleClasses(element, className) {
    if (element && className) {
      if (element.classList) {
        let styles = className.split(" ");
        for (let i = 0; i < styles.length; i++) {
          element.classList.add(styles[i]);
        }
      } else {
        let styles = className.split(" ");
        for (let i = 0; i < styles.length; i++) {
          element.className += " " + styles[i];
        }
      }
    }
  },
  addClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.add(className);
      else
        element.className += " " + className;
    }
  },
  removeClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.remove(className);
      else
        element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  },
  hasClass(element, className) {
    if (element) {
      if (element.classList)
        return element.classList.contains(className);
      else
        return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
    }
    return false;
  },
  find(element, selector) {
    return this.isElement(element) ? element.querySelectorAll(selector) : [];
  },
  findSingle(element, selector) {
    return this.isElement(element) ? element.querySelector(selector) : null;
  },
  getHeight(el) {
    if (el) {
      let height = el.offsetHeight;
      let style2 = getComputedStyle(el);
      height -= parseFloat(style2.paddingTop) + parseFloat(style2.paddingBottom) + parseFloat(style2.borderTopWidth) + parseFloat(style2.borderBottomWidth);
      return height;
    }
    return 0;
  },
  getWidth(el) {
    if (el) {
      let width = el.offsetWidth;
      let style2 = getComputedStyle(el);
      width -= parseFloat(style2.paddingLeft) + parseFloat(style2.paddingRight) + parseFloat(style2.borderLeftWidth) + parseFloat(style2.borderRightWidth);
      return width;
    }
    return 0;
  },
  absolutePosition(element, target) {
    if (element) {
      let elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
      let elementOuterHeight = elementDimensions.height;
      let elementOuterWidth = elementDimensions.width;
      let targetOuterHeight = target.offsetHeight;
      let targetOuterWidth = target.offsetWidth;
      let targetOffset = target.getBoundingClientRect();
      let windowScrollTop = this.getWindowScrollTop();
      let windowScrollLeft = this.getWindowScrollLeft();
      let viewport = this.getViewport();
      let top, left;
      if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
        top = targetOffset.top + windowScrollTop - elementOuterHeight;
        element.style.transformOrigin = "bottom";
        if (top < 0) {
          top = windowScrollTop;
        }
      } else {
        top = targetOuterHeight + targetOffset.top + windowScrollTop;
        element.style.transformOrigin = "top";
      }
      if (targetOffset.left + elementOuterWidth > viewport.width)
        left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
      else
        left = targetOffset.left + windowScrollLeft;
      element.style.top = top + "px";
      element.style.left = left + "px";
    }
  },
  relativePosition(element, target) {
    if (element) {
      let elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
      const targetHeight = target.offsetHeight;
      const targetOffset = target.getBoundingClientRect();
      const viewport = this.getViewport();
      let top, left;
      if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
        top = -1 * elementDimensions.height;
        element.style.transformOrigin = "bottom";
        if (targetOffset.top + top < 0) {
          top = -1 * targetOffset.top;
        }
      } else {
        top = targetHeight;
        element.style.transformOrigin = "top";
      }
      if (elementDimensions.width > viewport.width) {
        left = targetOffset.left * -1;
      } else if (targetOffset.left + elementDimensions.width > viewport.width) {
        left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
      } else {
        left = 0;
      }
      element.style.top = top + "px";
      element.style.left = left + "px";
    }
  },
  getParents(element, parents = []) {
    return element["parentNode"] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
  },
  getScrollableParents(element) {
    let scrollableParents = [];
    if (element) {
      let parents = this.getParents(element);
      const overflowRegex = /(auto|scroll)/;
      const overflowCheck = (node) => {
        let styleDeclaration = window["getComputedStyle"](node, null);
        return overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowX")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowY"));
      };
      for (let parent of parents) {
        let scrollSelectors = parent.nodeType === 1 && parent.dataset["scrollselectors"];
        if (scrollSelectors) {
          let selectors = scrollSelectors.split(",");
          for (let selector of selectors) {
            let el = this.findSingle(parent, selector);
            if (el && overflowCheck(el)) {
              scrollableParents.push(el);
            }
          }
        }
        if (parent.nodeType !== 9 && overflowCheck(parent)) {
          scrollableParents.push(parent);
        }
      }
    }
    return scrollableParents;
  },
  getHiddenElementOuterHeight(element) {
    if (element) {
      element.style.visibility = "hidden";
      element.style.display = "block";
      let elementHeight = element.offsetHeight;
      element.style.display = "none";
      element.style.visibility = "visible";
      return elementHeight;
    }
    return 0;
  },
  getHiddenElementOuterWidth(element) {
    if (element) {
      element.style.visibility = "hidden";
      element.style.display = "block";
      let elementWidth = element.offsetWidth;
      element.style.display = "none";
      element.style.visibility = "visible";
      return elementWidth;
    }
    return 0;
  },
  getHiddenElementDimensions(element) {
    if (element) {
      let dimensions = {};
      element.style.visibility = "hidden";
      element.style.display = "block";
      dimensions.width = element.offsetWidth;
      dimensions.height = element.offsetHeight;
      element.style.display = "none";
      element.style.visibility = "visible";
      return dimensions;
    }
    return 0;
  },
  fadeIn(element, duration) {
    if (element) {
      element.style.opacity = 0;
      let last = +/* @__PURE__ */ new Date();
      let opacity = 0;
      let tick = function() {
        opacity = +element.style.opacity + ((/* @__PURE__ */ new Date()).getTime() - last) / duration;
        element.style.opacity = opacity;
        last = +/* @__PURE__ */ new Date();
        if (+opacity < 1) {
          window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
        }
      };
      tick();
    }
  },
  fadeOut(element, ms) {
    if (element) {
      let opacity = 1, interval = 50, duration = ms, gap = interval / duration;
      let fading = setInterval(() => {
        opacity -= gap;
        if (opacity <= 0) {
          opacity = 0;
          clearInterval(fading);
        }
        element.style.opacity = opacity;
      }, interval);
    }
  },
  getUserAgent() {
    return navigator.userAgent;
  },
  appendChild(element, target) {
    if (this.isElement(target))
      target.appendChild(element);
    else if (target.el && target.elElement)
      target.elElement.appendChild(element);
    else
      throw new Error("Cannot append " + target + " to " + element);
  },
  isElement(obj) {
    return typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
  },
  scrollInView(container, item) {
    let borderTopValue = getComputedStyle(container).getPropertyValue("borderTopWidth");
    let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    let paddingTopValue = getComputedStyle(container).getPropertyValue("paddingTop");
    let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    let scroll = container.scrollTop;
    let elementHeight = container.clientHeight;
    let itemHeight = this.getOuterHeight(item);
    if (offset < 0) {
      container.scrollTop = scroll + offset;
    } else if (offset + itemHeight > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
  },
  clearSelection() {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
        window.getSelection().removeAllRanges();
      }
    } else if (document["selection"] && document["selection"].empty) {
      try {
        document["selection"].empty();
      } catch (error) {
      }
    }
  },
  getSelection() {
    if (window.getSelection)
      return window.getSelection().toString();
    else if (document.getSelection)
      return document.getSelection().toString();
    else if (document["selection"])
      return document["selection"].createRange().text;
    return null;
  },
  calculateScrollbarWidth() {
    if (this.calculatedScrollbarWidth != null)
      return this.calculatedScrollbarWidth;
    let scrollDiv = document.createElement("div");
    scrollDiv.className = "p-scrollbar-measure";
    document.body.appendChild(scrollDiv);
    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    this.calculatedScrollbarWidth = scrollbarWidth;
    return scrollbarWidth;
  },
  getBrowser() {
    if (!this.browser) {
      let matched = this.resolveUserAgent();
      this.browser = {};
      if (matched.browser) {
        this.browser[matched.browser] = true;
        this.browser["version"] = matched.version;
      }
      if (this.browser["chrome"]) {
        this.browser["webkit"] = true;
      } else if (this.browser["webkit"]) {
        this.browser["safari"] = true;
      }
    }
    return this.browser;
  },
  resolveUserAgent() {
    let ua = navigator.userAgent.toLowerCase();
    let match = /(chrome)[ ]([\w.]+)/.exec(ua) || /(webkit)[ ]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
      browser: match[1] || "",
      version: match[2] || "0"
    };
  },
  isVisible(element) {
    return element && element.offsetParent != null;
  },
  invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args);
  },
  isExist(element) {
    return !!(element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode);
  },
  isClient() {
    return false;
  },
  focus(el, options) {
    el && document.activeElement !== el && el.focus(options);
  },
  isFocusableElement(element, selector = "") {
    return this.isElement(element) ? element.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`) : false;
  },
  getFocusableElements(element, selector = "") {
    let focusableElements = this.find(
      element,
      `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`
    );
    let visibleFocusableElements = [];
    for (let focusableElement of focusableElements) {
      if (getComputedStyle(focusableElement).display != "none" && getComputedStyle(focusableElement).visibility != "hidden")
        visibleFocusableElements.push(focusableElement);
    }
    return visibleFocusableElements;
  },
  getFirstFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[0] : null;
  },
  getLastFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
  },
  getNextFocusableElement(container, element, selector) {
    const focusableElements = this.getFocusableElements(container, selector);
    const index = focusableElements.length > 0 ? focusableElements.findIndex((el) => el === element) : -1;
    const nextIndex = index > -1 && focusableElements.length >= index + 1 ? index + 1 : -1;
    return nextIndex > -1 ? focusableElements[nextIndex] : null;
  },
  isClickable(element) {
    if (element) {
      const targetNode = element.nodeName;
      const parentNode = element.parentElement && element.parentElement.nodeName;
      return targetNode === "INPUT" || targetNode === "TEXTAREA" || targetNode === "BUTTON" || targetNode === "A" || parentNode === "INPUT" || parentNode === "TEXTAREA" || parentNode === "BUTTON" || parentNode === "A" || !!element.closest(".p-button, .p-checkbox, .p-radiobutton");
    }
    return false;
  },
  applyStyle(element, style2) {
    if (typeof style2 === "string") {
      element.style.cssText = style2;
    } else {
      for (let prop in style2) {
        element.style[prop] = style2[prop];
      }
    }
  },
  isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
  },
  isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  },
  isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  },
  exportCSV(csv, filename) {
    let blob = new Blob([csv], {
      type: "application/csv;charset=utf-8;"
    });
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename + ".csv");
    } else {
      let link = document.createElement("a");
      if (link.download !== void 0) {
        link.setAttribute("href", URL.createObjectURL(blob));
        link.setAttribute("download", filename + ".csv");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        csv = "data:text/csv;charset=utf-8," + csv;
        window.open(encodeURI(csv));
      }
    }
  }
};
class ConnectedOverlayScrollHandler {
  constructor(element, listener = () => {
  }) {
    this.element = element;
    this.listener = listener;
  }
  bindScrollListener() {
    this.scrollableParents = DomHandler.getScrollableParents(this.element);
    for (let i = 0; i < this.scrollableParents.length; i++) {
      this.scrollableParents[i].addEventListener("scroll", this.listener);
    }
  }
  unbindScrollListener() {
    if (this.scrollableParents) {
      for (let i = 0; i < this.scrollableParents.length; i++) {
        this.scrollableParents[i].removeEventListener("scroll", this.listener);
      }
    }
  }
  destroy() {
    this.unbindScrollListener();
    this.element = null;
    this.listener = null;
    this.scrollableParents = null;
  }
}
function primebus() {
  const allHandlers = /* @__PURE__ */ new Map();
  return {
    on(type, handler2) {
      let handlers = allHandlers.get(type);
      if (!handlers)
        handlers = [handler2];
      else
        handlers.push(handler2);
      allHandlers.set(type, handlers);
    },
    off(type, handler2) {
      let handlers = allHandlers.get(type);
      if (handlers) {
        handlers.splice(handlers.indexOf(handler2) >>> 0, 1);
      }
    },
    emit(type, evt) {
      let handlers = allHandlers.get(type);
      if (handlers) {
        handlers.slice().map((handler2) => {
          handler2(evt);
        });
      }
    }
  };
}
var ObjectUtils = {
  equals(obj1, obj2, field) {
    if (field)
      return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);
    else
      return this.deepEquals(obj1, obj2);
  },
  deepEquals(a, b) {
    if (a === b)
      return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
      var arrA = Array.isArray(a), arrB = Array.isArray(b), i, length, key;
      if (arrA && arrB) {
        length = a.length;
        if (length != b.length)
          return false;
        for (i = length; i-- !== 0; )
          if (!this.deepEquals(a[i], b[i]))
            return false;
        return true;
      }
      if (arrA != arrB)
        return false;
      var dateA = a instanceof Date, dateB = b instanceof Date;
      if (dateA != dateB)
        return false;
      if (dateA && dateB)
        return a.getTime() == b.getTime();
      var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
      if (regexpA != regexpB)
        return false;
      if (regexpA && regexpB)
        return a.toString() == b.toString();
      var keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length)
        return false;
      for (i = length; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
          return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.deepEquals(a[key], b[key]))
          return false;
      }
      return true;
    }
    return a !== a && b !== b;
  },
  resolveFieldData(data, field) {
    if (data && Object.keys(data).length && field) {
      if (this.isFunction(field)) {
        return field(data);
      } else if (field.indexOf(".") === -1) {
        return data[field];
      } else {
        let fields = field.split(".");
        let value = data;
        for (var i = 0, len = fields.length; i < len; ++i) {
          if (value == null) {
            return null;
          }
          value = value[fields[i]];
        }
        return value;
      }
    } else {
      return null;
    }
  },
  isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  },
  getItemValue(obj, ...params) {
    return this.isFunction(obj) ? obj(...params) : obj;
  },
  filter(value, fields, filterValue) {
    var filteredItems = [];
    if (value) {
      for (let item of value) {
        for (let field of fields) {
          if (String(this.resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
            filteredItems.push(item);
            break;
          }
        }
      }
    }
    return filteredItems;
  },
  reorderArray(value, from, to) {
    if (value && from !== to) {
      if (to >= value.length) {
        to %= value.length;
        from %= value.length;
      }
      value.splice(to, 0, value.splice(from, 1)[0]);
    }
  },
  findIndexInList(value, list) {
    let index = -1;
    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
          index = i;
          break;
        }
      }
    }
    return index;
  },
  contains(value, list) {
    if (value != null && list && list.length) {
      for (let val of list) {
        if (this.equals(value, val))
          return true;
      }
    }
    return false;
  },
  insertIntoOrderedArray(item, index, arr, sourceArr) {
    if (arr.length > 0) {
      let injected = false;
      for (let i = 0; i < arr.length; i++) {
        let currentItemIndex = this.findIndexInList(arr[i], sourceArr);
        if (currentItemIndex > index) {
          arr.splice(i, 0, item);
          injected = true;
          break;
        }
      }
      if (!injected) {
        arr.push(item);
      }
    } else {
      arr.push(item);
    }
  },
  removeAccents(str) {
    if (str && str.search(/[\xC0-\xFF]/g) > -1) {
      str = str.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y");
    }
    return str;
  },
  getVNodeProp(vnode, prop) {
    let props = vnode.props;
    if (props) {
      let kebapProp = prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      let propName = Object.prototype.hasOwnProperty.call(props, kebapProp) ? kebapProp : prop;
      return vnode.type.props[prop].type === Boolean && props[propName] === "" ? true : props[propName];
    }
    return null;
  },
  convertToFlatCase(str) {
    return this.isNotEmpty(str) ? str.replace(/(-|_)/g, "").toLowerCase() : str;
  },
  isEmpty(value) {
    return value === null || value === void 0 || value === "" || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && typeof value === "object" && Object.keys(value).length === 0;
  },
  isNotEmpty(value) {
    return !this.isEmpty(value);
  },
  isPrintableCharacter(char = "") {
    return this.isNotEmpty(char) && char.length === 1 && char.match(/\S| /);
  },
  /**
   * Firefox-v103 does not currently support the "findLast" method. It is stated that this method will be supported with Firefox-v104.
   * https://caniuse.com/mdn-javascript_builtins_array_findlast
   */
  findLast(arr, callback) {
    let item;
    if (this.isNotEmpty(arr)) {
      try {
        item = arr.findLast(callback);
      } catch {
        item = [...arr].reverse().find(callback);
      }
    }
    return item;
  },
  /**
   * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
   * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
   */
  findLastIndex(arr, callback) {
    let index = -1;
    if (this.isNotEmpty(arr)) {
      try {
        index = arr.findLastIndex(callback);
      } catch {
        index = arr.lastIndexOf([...arr].reverse().find(callback));
      }
    }
    return index;
  }
};
var lastId = 0;
function UniqueComponentId(prefix = "pv_id_") {
  lastId++;
  return `${prefix}${lastId}`;
}
function handler() {
  let zIndexes = [];
  const generateZIndex = (key, autoZIndex, baseZIndex = 999) => {
    const lastZIndex = getLastZIndex(key, autoZIndex, baseZIndex);
    const newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;
    zIndexes.push({ key, value: newZIndex });
    return newZIndex;
  };
  const revertZIndex = (zIndex) => {
    zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
  };
  const getCurrentZIndex = (key, autoZIndex) => {
    return getLastZIndex(key, autoZIndex).value;
  };
  const getLastZIndex = (key, autoZIndex, baseZIndex = 0) => {
    return [...zIndexes].reverse().find((obj) => autoZIndex ? true : obj.key === key) || { key, value: baseZIndex };
  };
  const getZIndex = (el) => {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: (key, el, baseZIndex) => {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, true, baseZIndex));
      }
    },
    clear: (el) => {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = "";
      }
    },
    getCurrent: (key) => getCurrentZIndex(key, true)
  };
}
var ZIndexUtils = handler();
const FilterMatchMode = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  IN: "in",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  BETWEEN: "between",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
};
const FilterService = {
  filter(value, fields, filterValue, filterMatchMode, filterLocale) {
    let filteredItems = [];
    if (value) {
      for (let item of value) {
        for (let field of fields) {
          let fieldValue = ObjectUtils.resolveFieldData(item, field);
          if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
            filteredItems.push(item);
            break;
          }
        }
      }
    }
    return filteredItems;
  },
  filters: {
    startsWith(value, filter, filterLocale) {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.slice(0, filterValue.length) === filterValue;
    },
    contains(value, filter, filterLocale) {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) !== -1;
    },
    notContains(value, filter, filterLocale) {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) === -1;
    },
    endsWith(value, filter, filterLocale) {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    },
    equals(value, filter, filterLocale) {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() === filter.getTime();
      else
        return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    notEquals(value, filter, filterLocale) {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return false;
      }
      if (value === void 0 || value === null) {
        return true;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() !== filter.getTime();
      else
        return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    in(value, filter) {
      if (filter === void 0 || filter === null || filter.length === 0) {
        return true;
      }
      for (let i = 0; i < filter.length; i++) {
        if (ObjectUtils.equals(value, filter[i])) {
          return true;
        }
      }
      return false;
    },
    between(value, filter) {
      if (filter == null || filter[0] == null || filter[1] == null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime)
        return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
      else
        return filter[0] <= value && value <= filter[1];
    },
    lt(value, filter) {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() < filter.getTime();
      else
        return value < filter;
    },
    lte(value, filter) {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() <= filter.getTime();
      else
        return value <= filter;
    },
    gt(value, filter) {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() > filter.getTime();
      else
        return value > filter;
    },
    gte(value, filter) {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() >= filter.getTime();
      else
        return value >= filter;
    },
    dateIs(value, filter) {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() === filter.toDateString();
    },
    dateIsNot(value, filter) {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() !== filter.toDateString();
    },
    dateBefore(value, filter) {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() < filter.getTime();
    },
    dateAfter(value, filter) {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() > filter.getTime();
    }
  },
  register(rule, fn) {
    this.filters[rule] = fn;
  }
};
const defaultOptions = {
  ripple: false,
  inputStyle: "outlined",
  locale: {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    completed: "Completed",
    pending: "Pending",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Today",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    dateFormat: "mm/dd/yy",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No results found",
    // @deprecated Use 'emptySearchMessage' option instead.
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    emptyMessage: "No available options",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "{page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left"
    }
  },
  filterMatchModeOptions: {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  },
  pt: void 0
};
const PrimeVueSymbol = Symbol();
function switchTheme(currentTheme, newTheme, linkElementId, callback) {
  const linkElement = document.getElementById(linkElementId);
  const cloneLinkElement = linkElement.cloneNode(true);
  const newThemeUrl = linkElement.getAttribute("href").replace(currentTheme, newTheme);
  cloneLinkElement.setAttribute("id", linkElementId + "-clone");
  cloneLinkElement.setAttribute("href", newThemeUrl);
  cloneLinkElement.addEventListener("load", () => {
    linkElement.remove();
    cloneLinkElement.setAttribute("id", linkElementId);
    if (callback) {
      callback();
    }
  });
  linkElement.parentNode && linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
}
var PrimeVue = {
  install: (app, options) => {
    let configOptions = options ? { ...defaultOptions, ...options } : { ...defaultOptions };
    const PrimeVue2 = {
      config: reactive(configOptions),
      changeTheme: switchTheme
    };
    app.config.globalProperties.$primevue = PrimeVue2;
    app.provide(PrimeVueSymbol, PrimeVue2);
  }
};
var script$A = {
  name: "BaseComponent",
  props: {
    pt: {
      type: Object,
      default: void 0
    }
  },
  methods: {
    getOption(obj = {}, key = "") {
      const fKey = ObjectUtils.convertToFlatCase(key);
      return obj[Object.keys(obj).find((k) => ObjectUtils.convertToFlatCase(k) === fKey) || ""];
    },
    getPTValue(obj = {}, key = "", params = {}) {
      const self2 = ObjectUtils.getItemValue(this.getOption(obj, key), params);
      const globalPT = ObjectUtils.getItemValue(this.getOption(this.defaultPT, key), params);
      const merged = mergeProps(self2, globalPT);
      return merged;
    },
    ptm(key = "", params = {}) {
      return this.getPTValue(this.pt, key, { props: this.$props, state: this.$data, ...params });
    },
    ptmo(obj = {}, key = "", params = {}) {
      return this.getPTValue(obj, key, params);
    }
  },
  computed: {
    defaultPT() {
      return ObjectUtils.getItemValue(this.getOption(this.$primevue.config.pt, this.$.type.name), this.defaultsParams);
    },
    defaultsParams() {
      return { instance: this.$ };
    }
  }
};
var script$z = {
  name: "BaseIcon",
  props: {
    label: {
      type: String,
      default: void 0
    },
    spin: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    pti() {
      const isLabelEmpty = ObjectUtils.isEmpty(this.label);
      return {
        class: [
          "p-icon",
          {
            "p-icon-spin": this.spin
          }
        ],
        role: !isLabelEmpty ? "img" : void 0,
        "aria-label": !isLabelEmpty ? this.label : void 0,
        "aria-hidden": isLabelEmpty
      };
    }
  }
};
function styleInject$d(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style2 = document.createElement("style");
  style2.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style2, head.firstChild);
    } else {
      head.appendChild(style2);
    }
  } else {
    head.appendChild(style2);
  }
  if (style2.styleSheet) {
    style2.styleSheet.cssText = css;
  } else {
    style2.appendChild(document.createTextNode(css));
  }
}
var css_248z$d = "\n.p-icon {\n    display: inline-block;\n}\n.p-icon-spin {\n    -webkit-animation: p-icon-spin 2s infinite linear;\n    animation: p-icon-spin 2s infinite linear;\n}\n@-webkit-keyframes p-icon-spin {\n0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n}\n}\n@keyframes p-icon-spin {\n0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n}\n}\n";
styleInject$d(css_248z$d);
var script$y = {
  name: "SpinnerIcon",
  extends: script$z
};
const _hoisted_1$t = /* @__PURE__ */ createElementVNode("g", { "clip-path": "url(#clip0_417_21408)" }, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  })
], -1);
const _hoisted_2$m = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("clipPath", { id: "clip0_417_21408" }, [
    /* @__PURE__ */ createElementVNode("rect", {
      width: "14",
      height: "14",
      fill: "white"
    })
  ])
], -1);
const _hoisted_3$e = [
  _hoisted_1$t,
  _hoisted_2$m
];
function render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_3$e, 16);
}
script$y.render = render$y;
let timeout;
function bindEvents(el) {
  el.addEventListener("mousedown", onMouseDown);
}
function unbindEvents(el) {
  el.removeEventListener("mousedown", onMouseDown);
}
function create(el) {
  let ink = document.createElement("span");
  ink.className = "p-ink";
  ink.setAttribute("role", "presentation");
  ink.setAttribute("aria-hidden", "true");
  el.appendChild(ink);
  ink.addEventListener("animationend", onAnimationEnd);
}
function remove(el) {
  let ink = getInk(el);
  if (ink) {
    unbindEvents(el);
    ink.removeEventListener("animationend", onAnimationEnd);
    ink.remove();
  }
}
function onMouseDown(event) {
  let target = event.currentTarget;
  let ink = getInk(target);
  if (!ink || getComputedStyle(ink, null).display === "none") {
    return;
  }
  DomHandler.removeClass(ink, "p-ink-active");
  if (!DomHandler.getHeight(ink) && !DomHandler.getWidth(ink)) {
    let d = Math.max(DomHandler.getOuterWidth(target), DomHandler.getOuterHeight(target));
    ink.style.height = d + "px";
    ink.style.width = d + "px";
  }
  let offset = DomHandler.getOffset(target);
  let x = event.pageX - offset.left + document.body.scrollTop - DomHandler.getWidth(ink) / 2;
  let y = event.pageY - offset.top + document.body.scrollLeft - DomHandler.getHeight(ink) / 2;
  ink.style.top = y + "px";
  ink.style.left = x + "px";
  DomHandler.addClass(ink, "p-ink-active");
  timeout = setTimeout(() => {
    if (ink) {
      DomHandler.removeClass(ink, "p-ink-active");
    }
  }, 401);
}
function onAnimationEnd(event) {
  if (timeout) {
    clearTimeout(timeout);
  }
  DomHandler.removeClass(event.currentTarget, "p-ink-active");
}
function getInk(el) {
  for (let i = 0; i < el.children.length; i++) {
    if (typeof el.children[i].className === "string" && el.children[i].className.indexOf("p-ink") !== -1) {
      return el.children[i];
    }
  }
  return null;
}
const Ripple = {
  mounted(el, binding) {
    if (binding.instance.$primevue && binding.instance.$primevue.config && binding.instance.$primevue.config.ripple) {
      create(el);
      bindEvents(el);
    }
  },
  unmounted(el) {
    remove(el);
  }
};
var script$x = {
  name: "Button",
  extends: script$A,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPos: {
      type: String,
      default: "left"
    },
    iconClass: {
      type: String,
      default: null
    },
    badge: {
      type: String,
      default: null
    },
    badgeClass: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingIcon: {
      type: String,
      default: void 0
    },
    link: {
      type: Boolean,
      default: false
    },
    severity: {
      type: String,
      default: null
    },
    raised: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: null
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClass() {
      return [
        "p-button p-component",
        {
          "p-button-icon-only": this.hasIcon && !this.label,
          "p-button-vertical": (this.iconPos === "top" || this.iconPos === "bottom") && this.label,
          "p-disabled": this.$attrs.disabled || this.loading,
          "p-button-loading": this.loading,
          "p-button-loading-label-only": this.loading && !this.hasIcon && this.label,
          "p-button-link": this.link,
          [`p-button-${this.severity}`]: this.severity,
          "p-button-raised": this.raised,
          "p-button-rounded": this.rounded,
          "p-button-text": this.text,
          "p-button-outlined": this.outlined,
          "p-button-sm": this.size === "small",
          "p-button-lg": this.size === "large",
          "p-button-plain": this.plain
        }
      ];
    },
    iconStyleClass() {
      return [
        "p-button-icon",
        this.iconClass,
        {
          "p-button-icon-left": this.iconPos === "left" && this.label,
          "p-button-icon-right": this.iconPos === "right" && this.label,
          "p-button-icon-top": this.iconPos === "top" && this.label,
          "p-button-icon-bottom": this.iconPos === "bottom" && this.label
        }
      ];
    },
    loadingIconStyleClass() {
      return ["p-button-loading-icon pi-spin", this.iconStyleClass];
    },
    badgeStyleClass() {
      return [
        "p-badge p-component",
        this.badgeClass,
        {
          "p-badge-no-gutter": this.badge && String(this.badge).length === 1
        }
      ];
    },
    disabled() {
      return this.$attrs.disabled || this.loading;
    },
    defaultAriaLabel() {
      return this.label ? this.label + (this.badge ? " " + this.badge : "") : this.$attrs["aria-label"];
    },
    hasIcon() {
      return this.icon || this.$slots.icon;
    }
  },
  components: {
    SpinnerIcon: script$y
  },
  directives: {
    ripple: Ripple
  }
};
const _hoisted_1$s = ["aria-label", "disabled"];
function render$x(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  const _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("button", mergeProps({
    class: $options.buttonClass,
    type: "button",
    "aria-label": $options.defaultAriaLabel,
    disabled: $options.disabled
  }, _ctx.ptm("root")), [
    renderSlot(_ctx.$slots, "default", {}, () => [
      $props.loading ? renderSlot(_ctx.$slots, "loadingicon", {
        key: 0,
        class: normalizeClass($options.loadingIconStyleClass)
      }, () => [
        $props.loadingIcon ? (openBlock(), createElementBlock("span", mergeProps({
          key: 0,
          class: [$options.loadingIconStyleClass, $props.loadingIcon]
        }, _ctx.ptm("loadingIcon")), null, 16)) : (openBlock(), createBlock(_component_SpinnerIcon, mergeProps({
          key: 1,
          class: $options.loadingIconStyleClass,
          spin: ""
        }, _ctx.ptm("loadingIcon")), null, 16, ["class"]))
      ]) : renderSlot(_ctx.$slots, "icon", {
        key: 1,
        class: normalizeClass($options.iconStyleClass)
      }, () => [
        $props.icon ? (openBlock(), createElementBlock("span", mergeProps({
          key: 0,
          class: [$options.iconStyleClass, $props.icon]
        }, _ctx.ptm("icon")), null, 16)) : createCommentVNode("", true)
      ]),
      createElementVNode("span", mergeProps({ class: "p-button-label" }, _ctx.ptm("label")), toDisplayString($props.label || " "), 17),
      $props.badge ? (openBlock(), createElementBlock("span", mergeProps({
        key: 2,
        class: $options.badgeStyleClass
      }, _ctx.ptm("badge")), toDisplayString($props.badge), 17)) : createCommentVNode("", true)
    ])
  ], 16, _hoisted_1$s)), [
    [_directive_ripple]
  ]);
}
script$x.render = render$x;
var script$w = {
  name: "BarsIcon",
  extends: script$z
};
const _hoisted_1$r = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z",
  fill: "currentColor"
}, null, -1);
const _hoisted_2$l = [
  _hoisted_1$r
];
function render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$l, 16);
}
script$w.render = render$w;
var script$v = {
  name: "AngleDownIcon",
  extends: script$z
};
const _hoisted_1$q = /* @__PURE__ */ createElementVNode("path", {
  d: "M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",
  fill: "currentColor"
}, null, -1);
const _hoisted_2$k = [
  _hoisted_1$q
];
function render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$k, 16);
}
script$v.render = render$v;
var script$u = {
  name: "AngleRightIcon",
  extends: script$z
};
const _hoisted_1$p = /* @__PURE__ */ createElementVNode("path", {
  d: "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",
  fill: "currentColor"
}, null, -1);
const _hoisted_2$j = [
  _hoisted_1$p
];
function render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$j, 16);
}
script$u.render = render$u;
var script$1$3 = {
  name: "MenubarSub",
  extends: script$A,
  emits: ["item-mouseenter", "item-click"],
  props: {
    items: {
      type: Array,
      default: null
    },
    root: {
      type: Boolean,
      default: false
    },
    popup: {
      type: Boolean,
      default: false
    },
    mobileActive: {
      type: Boolean,
      default: false
    },
    templates: {
      type: Object,
      default: null
    },
    exact: {
      type: Boolean,
      default: true
    },
    level: {
      type: Number,
      default: 0
    },
    menuId: {
      type: String,
      default: null
    },
    focusedItemId: {
      type: String,
      default: null
    },
    activeItemPath: {
      type: Object,
      default: null
    }
  },
  list: null,
  methods: {
    getItemId(processedItem) {
      return `${this.menuId}_${processedItem.key}`;
    },
    getItemKey(processedItem) {
      return this.getItemId(processedItem);
    },
    getItemProp(processedItem, name, params) {
      return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name], params) : void 0;
    },
    getItemLabel(processedItem) {
      return this.getItemProp(processedItem, "label");
    },
    getPTOptions(processedItem, key) {
      return this.ptm(key, {
        context: {
          active: this.isItemActive(processedItem),
          focused: this.isItemFocused(processedItem)
        }
      });
    },
    isItemActive(processedItem) {
      return this.activeItemPath.some((path) => path.key === processedItem.key);
    },
    isItemVisible(processedItem) {
      return this.getItemProp(processedItem, "visible") !== false;
    },
    isItemDisabled(processedItem) {
      return this.getItemProp(processedItem, "disabled");
    },
    isItemFocused(processedItem) {
      return this.focusedItemId === this.getItemId(processedItem);
    },
    isItemGroup(processedItem) {
      return ObjectUtils.isNotEmpty(processedItem.items);
    },
    onItemClick(event, processedItem) {
      this.getItemProp(processedItem, "command", { originalEvent: event, item: processedItem.item });
      this.$emit("item-click", { originalEvent: event, processedItem, isFocus: true });
    },
    onItemMouseEnter(event, processedItem) {
      this.$emit("item-mouseenter", { originalEvent: event, processedItem });
    },
    onItemActionClick(event, navigate) {
      navigate && navigate(event);
    },
    getAriaSetSize() {
      return this.items.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, "separator")).length;
    },
    getAriaPosInset(index) {
      return index - this.items.slice(0, index).filter((processedItem) => this.isItemVisible(processedItem) && this.getItemProp(processedItem, "separator")).length + 1;
    },
    getItemClass(processedItem) {
      return [
        "p-menuitem",
        this.getItemProp(processedItem, "class"),
        {
          "p-menuitem-active p-highlight": this.isItemActive(processedItem),
          "p-focus": this.isItemFocused(processedItem),
          "p-disabled": this.isItemDisabled(processedItem)
        }
      ];
    },
    getItemActionClass(processedItem, routerProps) {
      return [
        "p-menuitem-link",
        {
          "router-link-active": routerProps && routerProps.isActive,
          "router-link-active-exact": this.exact && routerProps && routerProps.isExactActive
        }
      ];
    },
    getItemIconClass(processedItem) {
      return ["p-menuitem-icon", this.getItemProp(processedItem, "icon")];
    },
    getSeparatorItemClass(processedItem) {
      return ["p-menuitem-separator", this.getItemProp(processedItem, "class")];
    }
  },
  computed: {
    containerClass() {
      return { "p-submenu-list": !this.root, "p-menubar-root-list": this.root };
    }
  },
  components: {
    AngleRightIcon: script$u,
    AngleDownIcon: script$v
  },
  directives: {
    ripple: Ripple
  }
};
const _hoisted_1$1$2 = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset"];
const _hoisted_2$i = ["onClick", "onMouseenter"];
const _hoisted_3$d = ["href", "onClick"];
const _hoisted_4$4 = ["href", "target"];
const _hoisted_5$3 = ["id"];
function render$1$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_MenubarSub = resolveComponent("MenubarSub", true);
  const _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("ul", normalizeProps(guardReactiveProps(_ctx.ptm("menu"))), [
    (openBlock(true), createElementBlock(Fragment$1, null, renderList($props.items, (processedItem, index) => {
      return openBlock(), createElementBlock(Fragment$1, {
        key: $options.getItemKey(processedItem)
      }, [
        $options.isItemVisible(processedItem) && !$options.getItemProp(processedItem, "separator") ? (openBlock(), createElementBlock("li", mergeProps({
          key: 0,
          id: $options.getItemId(processedItem),
          style: $options.getItemProp(processedItem, "style"),
          class: $options.getItemClass(processedItem),
          role: "menuitem",
          "aria-label": $options.getItemLabel(processedItem),
          "aria-disabled": $options.isItemDisabled(processedItem) || void 0,
          "aria-expanded": $options.isItemGroup(processedItem) ? $options.isItemActive(processedItem) : void 0,
          "aria-haspopup": $options.isItemGroup(processedItem) && !$options.getItemProp(processedItem, "to") ? "menu" : void 0,
          "aria-level": $props.level + 1,
          "aria-setsize": $options.getAriaSetSize(),
          "aria-posinset": $options.getAriaPosInset(index)
        }, $options.getPTOptions(processedItem, "menuitem")), [
          createElementVNode("div", mergeProps({
            class: "p-menuitem-content",
            onClick: ($event) => $options.onItemClick($event, processedItem),
            onMouseenter: ($event) => $options.onItemMouseEnter($event, processedItem)
          }, $options.getPTOptions(processedItem, "content")), [
            !$props.templates.item ? (openBlock(), createElementBlock(Fragment$1, { key: 0 }, [
              $options.getItemProp(processedItem, "to") && !$options.isItemDisabled(processedItem) ? (openBlock(), createBlock(_component_router_link, {
                key: 0,
                to: $options.getItemProp(processedItem, "to"),
                custom: ""
              }, {
                default: withCtx(({ navigate, href, isActive, isExactActive }) => [
                  withDirectives((openBlock(), createElementBlock("a", mergeProps({
                    href,
                    class: $options.getItemActionClass(processedItem, { isActive, isExactActive }),
                    tabindex: "-1",
                    "aria-hidden": "true",
                    onClick: ($event) => $options.onItemActionClick($event, navigate)
                  }, $options.getPTOptions(processedItem, "action")), [
                    $props.templates.itemicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.itemicon), {
                      key: 0,
                      item: processedItem.item,
                      class: normalizeClass($options.getItemIconClass(processedItem))
                    }, null, 8, ["item", "class"])) : $options.getItemProp(processedItem, "icon") ? (openBlock(), createElementBlock("span", mergeProps({
                      key: 1,
                      class: $options.getItemIconClass(processedItem)
                    }, $options.getPTOptions(processedItem, "icon")), null, 16)) : createCommentVNode("", true),
                    createElementVNode("span", mergeProps({ class: "p-menuitem-text" }, $options.getPTOptions(processedItem, "label")), toDisplayString($options.getItemLabel(processedItem)), 17)
                  ], 16, _hoisted_3$d)), [
                    [_directive_ripple]
                  ])
                ]),
                _: 2
              }, 1032, ["to"])) : withDirectives((openBlock(), createElementBlock("a", mergeProps({
                key: 1,
                href: $options.getItemProp(processedItem, "url"),
                class: $options.getItemActionClass(processedItem),
                target: $options.getItemProp(processedItem, "target"),
                tabindex: "-1",
                "aria-hidden": "true"
              }, $options.getPTOptions(processedItem, "action")), [
                $props.templates.itemicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.itemicon), {
                  key: 0,
                  item: processedItem.item,
                  class: normalizeClass($options.getItemIconClass(processedItem))
                }, null, 8, ["item", "class"])) : $options.getItemProp(processedItem, "icon") ? (openBlock(), createElementBlock("span", mergeProps({
                  key: 1,
                  class: $options.getItemIconClass(processedItem)
                }, $options.getPTOptions(processedItem, "icon")), null, 16)) : createCommentVNode("", true),
                createElementVNode("span", mergeProps({ class: "p-menuitem-text" }, $options.getPTOptions(processedItem, "label")), toDisplayString($options.getItemLabel(processedItem)), 17),
                $options.getItemProp(processedItem, "items") ? (openBlock(), createElementBlock(Fragment$1, { key: 2 }, [
                  $props.templates.submenuicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.submenuicon), {
                    key: 0,
                    root: $props.root,
                    active: $options.isItemActive(processedItem),
                    class: "p-submenu-icon"
                  }, null, 8, ["root", "active"])) : (openBlock(), createBlock(resolveDynamicComponent($props.root ? "AngleDownIcon" : "AngleRightIcon"), mergeProps({
                    key: 1,
                    class: "p-submenu-icon"
                  }, $options.getPTOptions(processedItem, "submenuIcon")), null, 16))
                ], 64)) : createCommentVNode("", true)
              ], 16, _hoisted_4$4)), [
                [_directive_ripple]
              ])
            ], 64)) : (openBlock(), createBlock(resolveDynamicComponent($props.templates.item), {
              key: 1,
              item: processedItem.item
            }, null, 8, ["item"]))
          ], 16, _hoisted_2$i),
          $options.isItemVisible(processedItem) && $options.isItemGroup(processedItem) ? (openBlock(), createBlock(_component_MenubarSub, {
            key: 0,
            menuId: $props.menuId,
            role: "menu",
            class: "p-submenu-list",
            focusedItemId: $props.focusedItemId,
            items: processedItem.items,
            mobileActive: $props.mobileActive,
            activeItemPath: $props.activeItemPath,
            templates: $props.templates,
            exact: $props.exact,
            level: $props.level + 1,
            pt: _ctx.pt,
            onItemClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("item-click", $event)),
            onItemMouseenter: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("item-mouseenter", $event))
          }, null, 8, ["menuId", "focusedItemId", "items", "mobileActive", "activeItemPath", "templates", "exact", "level", "pt"])) : createCommentVNode("", true)
        ], 16, _hoisted_1$1$2)) : createCommentVNode("", true),
        $options.isItemVisible(processedItem) && $options.getItemProp(processedItem, "separator") ? (openBlock(), createElementBlock("li", mergeProps({
          key: 1,
          id: $options.getItemId(processedItem),
          style: $options.getItemProp(processedItem, "style"),
          class: $options.getSeparatorItemClass(processedItem),
          role: "separator"
        }, _ctx.ptm("separator")), null, 16, _hoisted_5$3)) : createCommentVNode("", true)
      ], 64);
    }), 128))
  ], 16);
}
script$1$3.render = render$1$3;
var script$t = {
  name: "Menubar",
  extends: script$A,
  emits: ["focus", "blur"],
  props: {
    model: {
      type: Array,
      default: null
    },
    exact: {
      type: Boolean,
      default: true
    },
    buttonProps: {
      type: null,
      default: null
    },
    "aria-labelledby": {
      type: String,
      default: null
    },
    "aria-label": {
      type: String,
      default: null
    }
  },
  data() {
    return {
      id: this.$attrs.id,
      mobileActive: false,
      focused: false,
      focusedItemInfo: { index: -1, level: 0, parentKey: "" },
      activeItemPath: [],
      dirty: false
    };
  },
  watch: {
    "$attrs.id": function(newValue) {
      this.id = newValue || UniqueComponentId();
    },
    activeItemPath(newPath) {
      if (ObjectUtils.isNotEmpty(newPath)) {
        this.bindOutsideClickListener();
        this.bindResizeListener();
      } else {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
      }
    }
  },
  outsideClickListener: null,
  container: null,
  menubar: null,
  mounted() {
    this.id = this.id || UniqueComponentId();
  },
  beforeUnmount() {
    this.mobileActive = false;
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    if (this.container) {
      ZIndexUtils.clear(this.container);
    }
    this.container = null;
  },
  methods: {
    getItemProp(item, name) {
      return item ? ObjectUtils.getItemValue(item[name]) : void 0;
    },
    getItemLabel(item) {
      return this.getItemProp(item, "label");
    },
    isItemDisabled(item) {
      return this.getItemProp(item, "disabled");
    },
    isItemGroup(item) {
      return ObjectUtils.isNotEmpty(this.getItemProp(item, "items"));
    },
    isItemSeparator(item) {
      return this.getItemProp(item, "separator");
    },
    getProccessedItemLabel(processedItem) {
      return processedItem ? this.getItemLabel(processedItem.item) : void 0;
    },
    isProccessedItemGroup(processedItem) {
      return processedItem && ObjectUtils.isNotEmpty(processedItem.items);
    },
    toggle(event) {
      if (this.mobileActive) {
        this.mobileActive = false;
        ZIndexUtils.clear(this.menubar);
        this.hide();
      } else {
        this.mobileActive = true;
        ZIndexUtils.set("menu", this.menubar, this.$primevue.config.zIndex.menu);
        setTimeout(() => {
          this.show();
        }, 0);
      }
      this.bindOutsideClickListener();
      event.preventDefault();
    },
    show() {
      this.focusedItemInfo = { index: this.findFirstFocusedItemIndex(), level: 0, parentKey: "" };
      DomHandler.focus(this.menubar);
    },
    hide(event, isFocus) {
      if (this.mobileActive) {
        setTimeout(() => {
          DomHandler.focus(this.$refs.menubutton);
        }, 0);
      }
      this.activeItemPath = [];
      this.focusedItemInfo = { index: -1, level: 0, parentKey: "" };
      isFocus && DomHandler.focus(this.menubar);
      this.dirty = false;
    },
    onFocus(event) {
      this.focused = true;
      this.focusedItemInfo = this.focusedItemInfo.index !== -1 ? this.focusedItemInfo : { index: this.findFirstFocusedItemIndex(), level: 0, parentKey: "" };
      this.$emit("focus", event);
    },
    onBlur(event) {
      this.focused = false;
      this.focusedItemInfo = { index: -1, level: 0, parentKey: "" };
      this.searchValue = "";
      this.dirty = false;
      this.$emit("blur", event);
    },
    onKeyDown(event) {
      const metaKey = event.metaKey || event.ctrlKey;
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(event);
          break;
        case "ArrowRight":
          this.onArrowRightKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
        case "Space":
          this.onSpaceKey(event);
          break;
        case "Enter":
          this.onEnterKey(event);
          break;
        case "Escape":
          this.onEscapeKey(event);
          break;
        case "Tab":
          this.onTabKey(event);
          break;
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
            this.searchItems(event, event.key);
          }
          break;
      }
    },
    onItemChange(event) {
      const { processedItem, isFocus } = event;
      if (ObjectUtils.isEmpty(processedItem))
        return;
      const { index, key, level, parentKey, items } = processedItem;
      const grouped = ObjectUtils.isNotEmpty(items);
      const activeItemPath = this.activeItemPath.filter((p) => p.parentKey !== parentKey && p.parentKey !== key);
      grouped && activeItemPath.push(processedItem);
      this.focusedItemInfo = { index, level, parentKey };
      this.activeItemPath = activeItemPath;
      grouped && (this.dirty = true);
      isFocus && DomHandler.focus(this.menubar);
    },
    onItemClick(event) {
      const { originalEvent, processedItem } = event;
      const grouped = this.isProccessedItemGroup(processedItem);
      const root = ObjectUtils.isEmpty(processedItem.parent);
      const selected = this.isSelected(processedItem);
      if (selected) {
        const { index, key, level, parentKey } = processedItem;
        this.activeItemPath = this.activeItemPath.filter((p) => key !== p.key && key.startsWith(p.key));
        this.focusedItemInfo = { index, level, parentKey };
        this.dirty = !root;
        DomHandler.focus(this.menubar);
      } else {
        if (grouped) {
          this.onItemChange(event);
        } else {
          const rootProcessedItem = root ? processedItem : this.activeItemPath.find((p) => p.parentKey === "");
          this.hide(originalEvent);
          this.changeFocusedItemIndex(originalEvent, rootProcessedItem ? rootProcessedItem.index : -1);
          this.mobileActive = false;
          DomHandler.focus(this.menubar);
        }
      }
    },
    onItemMouseEnter(event) {
      if (!this.mobileActive && this.dirty) {
        this.onItemChange(event);
      }
    },
    menuButtonClick(event) {
      this.toggle(event);
    },
    menuButtonKeydown(event) {
      (event.code === "Enter" || event.code === "Space") && this.menuButtonClick(event);
    },
    onArrowDownKey(event) {
      const processedItem = this.visibleItems[this.focusedItemInfo.index];
      const root = processedItem ? ObjectUtils.isEmpty(processedItem.parent) : null;
      if (root) {
        const grouped = this.isProccessedItemGroup(processedItem);
        if (grouped) {
          this.onItemChange({ originalEvent: event, processedItem });
          this.focusedItemInfo = { index: -1, parentKey: processedItem.key };
          this.onArrowRightKey(event);
        }
      } else {
        const itemIndex = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemIndex(event, itemIndex);
        event.preventDefault();
      }
    },
    onArrowUpKey(event) {
      const processedItem = this.visibleItems[this.focusedItemInfo.index];
      const root = ObjectUtils.isEmpty(processedItem.parent);
      if (root) {
        const grouped = this.isProccessedItemGroup(processedItem);
        if (grouped) {
          this.onItemChange({ originalEvent: event, processedItem });
          this.focusedItemInfo = { index: -1, parentKey: processedItem.key };
          const itemIndex = this.findLastItemIndex();
          this.changeFocusedItemIndex(event, itemIndex);
        }
      } else {
        const parentItem = this.activeItemPath.find((p) => p.key === processedItem.parentKey);
        if (this.focusedItemInfo.index === 0) {
          this.focusedItemInfo = { index: -1, parentKey: parentItem ? parentItem.parentKey : "" };
          this.searchValue = "";
          this.onArrowLeftKey(event);
          this.activeItemPath = this.activeItemPath.filter((p) => p.parentKey !== this.focusedItemInfo.parentKey);
        } else {
          const itemIndex = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
          this.changeFocusedItemIndex(event, itemIndex);
        }
      }
      event.preventDefault();
    },
    onArrowLeftKey(event) {
      const processedItem = this.visibleItems[this.focusedItemInfo.index];
      const parentItem = processedItem ? this.activeItemPath.find((p) => p.key === processedItem.parentKey) : null;
      if (parentItem) {
        this.onItemChange({ originalEvent: event, processedItem: parentItem });
        this.activeItemPath = this.activeItemPath.filter((p) => p.parentKey !== this.focusedItemInfo.parentKey);
        event.preventDefault();
      } else {
        const itemIndex = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(event, itemIndex);
        event.preventDefault();
      }
    },
    onArrowRightKey(event) {
      const processedItem = this.visibleItems[this.focusedItemInfo.index];
      const parentItem = processedItem ? this.activeItemPath.find((p) => p.key === processedItem.parentKey) : null;
      if (parentItem) {
        const grouped = this.isProccessedItemGroup(processedItem);
        if (grouped) {
          this.onItemChange({ originalEvent: event, processedItem });
          this.focusedItemInfo = { index: -1, parentKey: processedItem.key };
          this.onArrowDownKey(event);
        }
      } else {
        const itemIndex = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemIndex(event, itemIndex);
        event.preventDefault();
      }
    },
    onHomeKey(event) {
      this.changeFocusedItemIndex(event, this.findFirstItemIndex());
      event.preventDefault();
    },
    onEndKey(event) {
      this.changeFocusedItemIndex(event, this.findLastItemIndex());
      event.preventDefault();
    },
    onEnterKey(event) {
      if (this.focusedItemInfo.index !== -1) {
        const element = DomHandler.findSingle(this.menubar, `li[id="${`${this.focusedItemId}`}"]`);
        const anchorElement = element && DomHandler.findSingle(element, ".p-menuitem-link");
        anchorElement ? anchorElement.click() : element && element.click();
        const processedItem = this.visibleItems[this.focusedItemInfo.index];
        const grouped = this.isProccessedItemGroup(processedItem);
        !grouped && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());
      }
      event.preventDefault();
    },
    onSpaceKey(event) {
      this.onEnterKey(event);
    },
    onEscapeKey(event) {
      this.hide(event, true);
      this.focusedItemInfo.index = this.findFirstFocusedItemIndex();
      event.preventDefault();
    },
    onTabKey(event) {
      if (this.focusedItemInfo.index !== -1) {
        const processedItem = this.visibleItems[this.focusedItemInfo.index];
        const grouped = this.isProccessedItemGroup(processedItem);
        !grouped && this.onItemChange({ originalEvent: event, processedItem });
      }
      this.hide();
    },
    bindOutsideClickListener() {
      if (!this.outsideClickListener) {
        this.outsideClickListener = (event) => {
          const isOutsideContainer = this.menubar !== event.target && !this.menubar.contains(event.target);
          const isOutsideMenuButton = this.mobileActive && this.$refs.menubutton !== event.target && !this.$refs.menubutton.contains(event.target);
          if (isOutsideContainer) {
            isOutsideMenuButton ? this.mobileActive = false : this.hide();
          }
        };
        document.addEventListener("click", this.outsideClickListener);
      }
    },
    unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    bindResizeListener() {
      if (!this.resizeListener) {
        this.resizeListener = (event) => {
          if (!DomHandler.isTouchDevice()) {
            this.hide(event, true);
          }
          this.mobileActive = false;
        };
        window.addEventListener("resize", this.resizeListener);
      }
    },
    unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    },
    isItemMatched(processedItem) {
      return this.isValidItem(processedItem) && this.getProccessedItemLabel(processedItem).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase());
    },
    isValidItem(processedItem) {
      return !!processedItem && !this.isItemDisabled(processedItem.item) && !this.isItemSeparator(processedItem.item);
    },
    isValidSelectedItem(processedItem) {
      return this.isValidItem(processedItem) && this.isSelected(processedItem);
    },
    isSelected(processedItem) {
      return this.activeItemPath.some((p) => p.key === processedItem.key);
    },
    findFirstItemIndex() {
      return this.visibleItems.findIndex((processedItem) => this.isValidItem(processedItem));
    },
    findLastItemIndex() {
      return ObjectUtils.findLastIndex(this.visibleItems, (processedItem) => this.isValidItem(processedItem));
    },
    findNextItemIndex(index) {
      const matchedItemIndex = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).findIndex((processedItem) => this.isValidItem(processedItem)) : -1;
      return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
    },
    findPrevItemIndex(index) {
      const matchedItemIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleItems.slice(0, index), (processedItem) => this.isValidItem(processedItem)) : -1;
      return matchedItemIndex > -1 ? matchedItemIndex : index;
    },
    findSelectedItemIndex() {
      return this.visibleItems.findIndex((processedItem) => this.isValidSelectedItem(processedItem));
    },
    findFirstFocusedItemIndex() {
      const selectedIndex = this.findSelectedItemIndex();
      return selectedIndex < 0 ? this.findFirstItemIndex() : selectedIndex;
    },
    findLastFocusedItemIndex() {
      const selectedIndex = this.findSelectedItemIndex();
      return selectedIndex < 0 ? this.findLastItemIndex() : selectedIndex;
    },
    searchItems(event, char) {
      this.searchValue = (this.searchValue || "") + char;
      let itemIndex = -1;
      let matched = false;
      if (this.focusedItemInfo.index !== -1) {
        itemIndex = this.visibleItems.slice(this.focusedItemInfo.index).findIndex((processedItem) => this.isItemMatched(processedItem));
        itemIndex = itemIndex === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex((processedItem) => this.isItemMatched(processedItem)) : itemIndex + this.focusedItemInfo.index;
      } else {
        itemIndex = this.visibleItems.findIndex((processedItem) => this.isItemMatched(processedItem));
      }
      if (itemIndex !== -1) {
        matched = true;
      }
      if (itemIndex === -1 && this.focusedItemInfo.index === -1) {
        itemIndex = this.findFirstFocusedItemIndex();
      }
      if (itemIndex !== -1) {
        this.changeFocusedItemIndex(event, itemIndex);
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(() => {
        this.searchValue = "";
        this.searchTimeout = null;
      }, 500);
      return matched;
    },
    changeFocusedItemIndex(event, index) {
      if (this.focusedItemInfo.index !== index) {
        this.focusedItemInfo.index = index;
        this.scrollInView();
      }
    },
    scrollInView(index = -1) {
      const id = index !== -1 ? `${this.id}_${index}` : this.focusedItemId;
      const element = DomHandler.findSingle(this.menubar, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({ block: "nearest", inline: "start" });
      }
    },
    createProcessedItems(items, level = 0, parent = {}, parentKey = "") {
      const processedItems = [];
      items && items.forEach((item, index) => {
        const key = (parentKey !== "" ? parentKey + "_" : "") + index;
        const newItem = {
          item,
          index,
          level,
          key,
          parent,
          parentKey
        };
        newItem["items"] = this.createProcessedItems(item.items, level + 1, newItem, key);
        processedItems.push(newItem);
      });
      return processedItems;
    },
    containerRef(el) {
      this.container = el;
    },
    menubarRef(el) {
      this.menubar = el ? el.$el : void 0;
    }
  },
  computed: {
    containerClass() {
      return ["p-menubar p-component", { "p-menubar-mobile-active": this.mobileActive }];
    },
    processedItems() {
      return this.createProcessedItems(this.model || []);
    },
    visibleItems() {
      const processedItem = this.activeItemPath.find((p) => p.key === this.focusedItemInfo.parentKey);
      return processedItem ? processedItem.items : this.processedItems;
    },
    focusedItemId() {
      return this.focusedItemInfo.index !== -1 ? `${this.id}${ObjectUtils.isNotEmpty(this.focusedItemInfo.parentKey) ? "_" + this.focusedItemInfo.parentKey : ""}_${this.focusedItemInfo.index}` : null;
    }
  },
  components: {
    MenubarSub: script$1$3,
    BarsIcon: script$w
  }
};
const _hoisted_1$o = ["aria-haspopup", "aria-expanded", "aria-controls", "aria-label"];
function render$t(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BarsIcon = resolveComponent("BarsIcon");
  const _component_MenubarSub = resolveComponent("MenubarSub");
  return openBlock(), createElementBlock("div", mergeProps({
    ref: $options.containerRef,
    class: $options.containerClass
  }, _ctx.ptm("root")), [
    _ctx.$slots.start ? (openBlock(), createElementBlock("div", mergeProps({
      key: 0,
      class: "p-menubar-start"
    }, _ctx.ptm("start")), [
      renderSlot(_ctx.$slots, "start")
    ], 16)) : createCommentVNode("", true),
    $props.model && $props.model.length > 0 ? (openBlock(), createElementBlock("a", mergeProps({
      key: 1,
      ref: "menubutton",
      role: "button",
      tabindex: "0",
      class: "p-menubar-button",
      "aria-haspopup": $props.model.length && $props.model.length > 0 ? true : false,
      "aria-expanded": $data.mobileActive,
      "aria-controls": $data.id,
      "aria-label": _ctx.$primevue.config.locale.aria.navigation,
      onClick: _cache[0] || (_cache[0] = ($event) => $options.menuButtonClick($event)),
      onKeydown: _cache[1] || (_cache[1] = ($event) => $options.menuButtonKeydown($event))
    }, { ...$props.buttonProps, ..._ctx.ptm("button") }), [
      renderSlot(_ctx.$slots, "popupicon", {}, () => [
        createVNode(_component_BarsIcon, normalizeProps(guardReactiveProps(_ctx.ptm("popupIcon"))), null, 16)
      ])
    ], 16, _hoisted_1$o)) : createCommentVNode("", true),
    createVNode(_component_MenubarSub, {
      ref: $options.menubarRef,
      id: $data.id,
      class: "p-menubar-root-list",
      role: "menubar",
      items: $options.processedItems,
      templates: _ctx.$slots,
      root: true,
      mobileActive: $data.mobileActive,
      tabindex: "0",
      "aria-activedescendant": $data.focused ? $options.focusedItemId : void 0,
      menuId: $data.id,
      focusedItemId: $data.focused ? $options.focusedItemId : void 0,
      activeItemPath: $data.activeItemPath,
      exact: $props.exact,
      level: 0,
      "aria-labelledby": _ctx.ariaLabelledby,
      "aria-label": _ctx.ariaLabel,
      pt: _ctx.pt,
      onFocus: $options.onFocus,
      onBlur: $options.onBlur,
      onKeydown: $options.onKeyDown,
      onItemClick: $options.onItemClick,
      onItemMouseenter: $options.onItemMouseEnter
    }, null, 8, ["id", "items", "templates", "mobileActive", "aria-activedescendant", "menuId", "focusedItemId", "activeItemPath", "exact", "aria-labelledby", "aria-label", "pt", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter"]),
    _ctx.$slots.end ? (openBlock(), createElementBlock("div", mergeProps({
      key: 2,
      class: "p-menubar-end"
    }, _ctx.ptm("end")), [
      renderSlot(_ctx.$slots, "end")
    ], 16)) : createCommentVNode("", true)
  ], 16);
}
function styleInject$c(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style2 = document.createElement("style");
  style2.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style2, head.firstChild);
    } else {
      head.appendChild(style2);
    }
  } else {
    head.appendChild(style2);
  }
  if (style2.styleSheet) {
    style2.styleSheet.cssText = css;
  } else {
    style2.appendChild(document.createTextNode(css));
  }
}
var css_248z$c = "\n.p-menubar {\n    display: flex;\n    align-items: center;\n}\n.p-menubar ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.p-menubar .p-menuitem-link {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n}\n.p-menubar .p-menuitem-text {\n    line-height: 1;\n}\n.p-menubar .p-menuitem {\n    position: relative;\n}\n.p-menubar-root-list {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.p-menubar-root-list > li ul {\n    display: none;\n    z-index: 1;\n}\n.p-menubar-root-list > .p-menuitem-active > .p-submenu-list {\n    display: block;\n}\n.p-menubar .p-submenu-list {\n    display: none;\n    position: absolute;\n    z-index: 1;\n}\n.p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list {\n    display: block;\n    left: 100%;\n    top: 0;\n}\n.p-menubar .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {\n    margin-left: auto;\n}\n.p-menubar .p-menubar-end {\n    margin-left: auto;\n    align-self: center;\n}\n.p-menubar-button {\n    display: none;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n}\n";
styleInject$c(css_248z$c);
script$t.render = render$t;
var script$s = {
  name: "Timeline",
  extends: script$A,
  props: {
    value: null,
    align: {
      mode: String,
      default: "left"
    },
    layout: {
      mode: String,
      default: "vertical"
    },
    dataKey: null
  },
  methods: {
    getKey(item, index) {
      return this.dataKey ? ObjectUtils.resolveFieldData(item, this.dataKey) : index;
    }
  },
  computed: {
    containerClass() {
      return ["p-timeline p-component", "p-timeline-" + this.align, "p-timeline-" + this.layout];
    }
  }
};
function render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({ class: $options.containerClass }, _ctx.ptm("root")), [
    (openBlock(true), createElementBlock(Fragment$1, null, renderList($props.value, (item, index) => {
      return openBlock(), createElementBlock("div", mergeProps({
        key: $options.getKey(item, index),
        class: "p-timeline-event"
      }, _ctx.ptm("event")), [
        createElementVNode("div", mergeProps({ class: "p-timeline-event-opposite" }, _ctx.ptm("opposite")), [
          renderSlot(_ctx.$slots, "opposite", {
            item,
            index
          })
        ], 16),
        createElementVNode("div", mergeProps({ class: "p-timeline-event-separator" }, _ctx.ptm("separator")), [
          renderSlot(_ctx.$slots, "marker", {
            item,
            index
          }, () => [
            createElementVNode("div", mergeProps({ class: "p-timeline-event-marker" }, _ctx.ptm("marker")), null, 16)
          ]),
          index !== $props.value.length - 1 ? renderSlot(_ctx.$slots, "connector", {
            key: 0,
            item,
            index
          }, () => [
            createElementVNode("div", mergeProps({ class: "p-timeline-event-connector" }, _ctx.ptm("connector")), null, 16)
          ]) : createCommentVNode("", true)
        ], 16),
        createElementVNode("div", mergeProps({ class: "p-timeline-event-content" }, _ctx.ptm("content")), [
          renderSlot(_ctx.$slots, "content", {
            item,
            index
          })
        ], 16)
      ], 16);
    }), 128))
  ], 16);
}
function styleInject$b(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style2 = document.createElement("style");
  style2.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style2, head.firstChild);
    } else {
      head.appendChild(style2);
    }
  } else {
    head.appendChild(style2);
  }
  if (style2.styleSheet) {
    style2.styleSheet.cssText = css;
  } else {
    style2.appendChild(document.createTextNode(css));
  }
}
var css_248z$b = "\n.p-timeline {\n    display: flex;\n    flex-grow: 1;\n    flex-direction: column;\n}\n.p-timeline-left .p-timeline-event-opposite {\n    text-align: right;\n}\n.p-timeline-left .p-timeline-event-content {\n    text-align: left;\n}\n.p-timeline-right .p-timeline-event {\n    flex-direction: row-reverse;\n}\n.p-timeline-right .p-timeline-event-opposite {\n    text-align: left;\n}\n.p-timeline-right .p-timeline-event-content {\n    text-align: right;\n}\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {\n    flex-direction: row-reverse;\n}\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {\n    text-align: right;\n}\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {\n    text-align: left;\n}\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {\n    text-align: left;\n}\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {\n    text-align: right;\n}\n.p-timeline-event {\n    display: flex;\n    position: relative;\n    min-height: 70px;\n}\n.p-timeline-event:last-child {\n    min-height: 0;\n}\n.p-timeline-event-opposite {\n    flex: 1;\n    padding: 0 1rem;\n}\n.p-timeline-event-content {\n    flex: 1;\n    padding: 0 1rem;\n}\n.p-timeline-event-separator {\n    flex: 0;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n.p-timeline-event-marker {\n    display: flex;\n    align-self: baseline;\n}\n.p-timeline-event-connector {\n    flex-grow: 1;\n}\n.p-timeline-horizontal {\n    flex-direction: row;\n}\n.p-timeline-horizontal .p-timeline-event {\n    flex-direction: column;\n    flex: 1;\n}\n.p-timeline-horizontal .p-timeline-event:last-child {\n    flex: 0;\n}\n.p-timeline-horizontal .p-timeline-event-separator {\n    flex-direction: row;\n}\n.p-timeline-horizontal .p-timeline-event-connector {\n    width: 100%;\n}\n.p-timeline-bottom .p-timeline-event {\n    flex-direction: column-reverse;\n}\n.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {\n    flex-direction: column-reverse;\n}\n";
styleInject$b(css_248z$b);
script$s.render = render$s;
var script$r = {
  name: "ChevronLeftIcon",
  extends: script$z
};
const _hoisted_1$n = /* @__PURE__ */ createElementVNode("path", {
  d: "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",
  fill: "currentColor"
}, null, -1);
const _hoisted_2$h = [
  _hoisted_1$n
];
function render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$h, 16);
}
script$r.render = render$r;
var script$q = {
  name: "ChevronRightIcon",
  extends: script$z
};
const _hoisted_1$m = /* @__PURE__ */ createElementVNode("path", {
  d: "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",
  fill: "currentColor"
}, null, -1);
const _hoisted_2$g = [
  _hoisted_1$m
];
function render$q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$g, 16);
}
script$q.render = render$q;
var script$p = {
  name: "TabView",
  extends: script$A,
  emits: ["update:activeIndex", "tab-change", "tab-click"],
  props: {
    activeIndex: {
      type: Number,
      default: 0
    },
    lazy: {
      type: Boolean,
      default: false
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: Number,
      default: 0
    },
    selectOnFocus: {
      type: Boolean,
      default: false
    },
    previousButtonProps: {
      type: null,
      default: null
    },
    nextButtonProps: {
      type: null,
      default: null
    },
    prevIcon: {
      type: String,
      default: void 0
    },
    nextIcon: {
      type: String,
      default: void 0
    }
  },
  data() {
    return {
      id: this.$attrs.id,
      d_activeIndex: this.activeIndex,
      isPrevButtonDisabled: true,
      isNextButtonDisabled: false
    };
  },
  watch: {
    "$attrs.id": function(newValue) {
      this.id = newValue || UniqueComponentId();
    },
    activeIndex(newValue) {
      this.d_activeIndex = newValue;
      this.scrollInView({ index: newValue });
    }
  },
  mounted() {
    this.id = this.id || UniqueComponentId();
    this.updateInkBar();
    this.scrollable && this.updateButtonState();
  },
  updated() {
    this.updateInkBar();
  },
  methods: {
    isTabPanel(child) {
      return child.type.name === "TabPanel";
    },
    isTabActive(index) {
      return this.d_activeIndex === index;
    },
    getTabProp(tab, name) {
      return tab.props ? tab.props[name] : void 0;
    },
    getKey(tab, index) {
      return this.getTabProp(tab, "header") || index;
    },
    getTabHeaderActionId(index) {
      return `${this.id}_${index}_header_action`;
    },
    getTabContentId(index) {
      return `${this.id}_${index}_content`;
    },
    getTabPT(tab, key) {
      return this.ptmo(this.getTabProp(tab, "pt"), key, {
        props: tab.props,
        parent: {
          props: this.$props,
          state: this.$data
        }
      });
    },
    onScroll(event) {
      this.scrollable && this.updateButtonState();
      event.preventDefault();
    },
    onPrevButtonClick() {
      const content = this.$refs.content;
      const width = DomHandler.getWidth(content);
      const pos = content.scrollLeft - width;
      content.scrollLeft = pos <= 0 ? 0 : pos;
    },
    onNextButtonClick() {
      const content = this.$refs.content;
      const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
      const pos = content.scrollLeft + width;
      const lastPos = content.scrollWidth - width;
      content.scrollLeft = pos >= lastPos ? lastPos : pos;
    },
    onTabClick(event, tab, index) {
      this.changeActiveIndex(event, tab, index);
      this.$emit("tab-click", { originalEvent: event, index });
    },
    onTabKeyDown(event, tab, index) {
      switch (event.code) {
        case "ArrowLeft":
          this.onTabArrowLeftKey(event);
          break;
        case "ArrowRight":
          this.onTabArrowRightKey(event);
          break;
        case "Home":
          this.onTabHomeKey(event);
          break;
        case "End":
          this.onTabEndKey(event);
          break;
        case "PageDown":
          this.onPageDownKey(event);
          break;
        case "PageUp":
          this.onPageUpKey(event);
          break;
        case "Enter":
        case "Space":
          this.onTabEnterKey(event, tab, index);
          break;
      }
    },
    onTabArrowRightKey(event) {
      const nextHeaderAction = this.findNextHeaderAction(event.target.parentElement);
      nextHeaderAction ? this.changeFocusedTab(event, nextHeaderAction) : this.onTabHomeKey(event);
      event.preventDefault();
    },
    onTabArrowLeftKey(event) {
      const prevHeaderAction = this.findPrevHeaderAction(event.target.parentElement);
      prevHeaderAction ? this.changeFocusedTab(event, prevHeaderAction) : this.onTabEndKey(event);
      event.preventDefault();
    },
    onTabHomeKey(event) {
      const firstHeaderAction = this.findFirstHeaderAction();
      this.changeFocusedTab(event, firstHeaderAction);
      event.preventDefault();
    },
    onTabEndKey(event) {
      const lastHeaderAction = this.findLastHeaderAction();
      this.changeFocusedTab(event, lastHeaderAction);
      event.preventDefault();
    },
    onPageDownKey(event) {
      this.scrollInView({ index: this.$refs.nav.children.length - 2 });
      event.preventDefault();
    },
    onPageUpKey(event) {
      this.scrollInView({ index: 0 });
      event.preventDefault();
    },
    onTabEnterKey(event, tab, index) {
      this.changeActiveIndex(event, tab, index);
      event.preventDefault();
    },
    findNextHeaderAction(tabElement, selfCheck = false) {
      const headerElement = selfCheck ? tabElement : tabElement.nextElementSibling;
      return headerElement ? DomHandler.hasClass(headerElement, "p-disabled") || DomHandler.hasClass(headerElement, "p-tabview-ink-bar") ? this.findNextHeaderAction(headerElement) : DomHandler.findSingle(headerElement, ".p-tabview-header-action") : null;
    },
    findPrevHeaderAction(tabElement, selfCheck = false) {
      const headerElement = selfCheck ? tabElement : tabElement.previousElementSibling;
      return headerElement ? DomHandler.hasClass(headerElement, "p-disabled") || DomHandler.hasClass(headerElement, "p-tabview-ink-bar") ? this.findPrevHeaderAction(headerElement) : DomHandler.findSingle(headerElement, ".p-tabview-header-action") : null;
    },
    findFirstHeaderAction() {
      return this.findNextHeaderAction(this.$refs.nav.firstElementChild, true);
    },
    findLastHeaderAction() {
      return this.findPrevHeaderAction(this.$refs.nav.lastElementChild, true);
    },
    changeActiveIndex(event, tab, index) {
      if (!this.getTabProp(tab, "disabled") && this.d_activeIndex !== index) {
        this.d_activeIndex = index;
        this.$emit("update:activeIndex", index);
        this.$emit("tab-change", { originalEvent: event, index });
        this.scrollInView({ index });
      }
    },
    changeFocusedTab(event, element) {
      if (element) {
        DomHandler.focus(element);
        this.scrollInView({ element });
        if (this.selectOnFocus) {
          const index = parseInt(element.parentElement.dataset.index, 10);
          const tab = this.tabs[index];
          this.changeActiveIndex(event, tab, index);
        }
      }
    },
    scrollInView({ element, index = -1 }) {
      const currentElement = element || this.$refs.nav.children[index];
      if (currentElement) {
        currentElement.scrollIntoView && currentElement.scrollIntoView({ block: "nearest" });
      }
    },
    updateInkBar() {
      let tabHeader = this.$refs.nav.children[this.d_activeIndex];
      this.$refs.inkbar.style.width = DomHandler.getWidth(tabHeader) + "px";
      this.$refs.inkbar.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.$refs.nav).left + "px";
    },
    updateButtonState() {
      const content = this.$refs.content;
      const { scrollLeft, scrollWidth } = content;
      const width = DomHandler.getWidth(content);
      this.isPrevButtonDisabled = scrollLeft === 0;
      this.isNextButtonDisabled = parseInt(scrollLeft) === scrollWidth - width;
    },
    getVisibleButtonWidths() {
      const { prevBtn, nextBtn } = this.$refs;
      return [prevBtn, nextBtn].reduce((acc, el) => el ? acc + DomHandler.getWidth(el) : acc, 0);
    },
    getTabHeaderClass(tab, i) {
      return [
        "p-tabview-header",
        this.getTabProp(tab, "headerClass"),
        {
          "p-highlight": this.d_activeIndex === i,
          "p-disabled": this.getTabProp(tab, "disabled")
        }
      ];
    },
    getTabContentClass(tab) {
      return ["p-tabview-panel", this.getTabProp(tab, "contentClass")];
    }
  },
  computed: {
    contentClasses() {
      return [
        "p-tabview p-component",
        {
          "p-tabview-scrollable": this.scrollable
        }
      ];
    },
    tabs() {
      return this.$slots.default().reduce((tabs, child) => {
        if (this.isTabPanel(child)) {
          tabs.push(child);
        } else if (child.children && child.children instanceof Array) {
          child.children.forEach((nestedChild) => {
            if (this.isTabPanel(nestedChild)) {
              tabs.push(nestedChild);
            }
          });
        }
        return tabs;
      }, []);
    },
    prevButtonAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.previous : void 0;
    },
    nextButtonAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.next : void 0;
    }
  },
  directives: {
    ripple: Ripple
  },
  components: {
    ChevronLeftIcon: script$r,
    ChevronRightIcon: script$q
  }
};
const _hoisted_1$l = ["tabindex", "aria-label"];
const _hoisted_2$f = ["data-index"];
const _hoisted_3$c = ["id", "tabindex", "aria-disabled", "aria-selected", "aria-controls", "onClick", "onKeydown"];
const _hoisted_4$3 = ["tabindex", "aria-label"];
const _hoisted_5$2 = ["aria-labelledby"];
function render$p(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({ class: $options.contentClasses }, _ctx.ptm("root")), [
    createElementVNode("div", mergeProps({ class: "p-tabview-nav-container" }, _ctx.ptm("navcontainer")), [
      $props.scrollable && !$data.isPrevButtonDisabled ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
        key: 0,
        ref: "prevBtn",
        type: "button",
        class: "p-tabview-nav-prev p-tabview-nav-btn p-link",
        tabindex: $props.tabindex,
        "aria-label": $options.prevButtonAriaLabel,
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onPrevButtonClick && $options.onPrevButtonClick(...args))
      }, { ...$props.previousButtonProps, ..._ctx.ptm("prevbutton") }), [
        renderSlot(_ctx.$slots, "previcon", {}, () => [
          (openBlock(), createBlock(resolveDynamicComponent($props.prevIcon ? "span" : "ChevronLeftIcon"), mergeProps({
            "aria-hidden": "true",
            class: $props.prevIcon
          }, _ctx.ptm("previcon")), null, 16, ["class"]))
        ])
      ], 16, _hoisted_1$l)), [
        [_directive_ripple]
      ]) : createCommentVNode("", true),
      createElementVNode("div", mergeProps({
        ref: "content",
        class: "p-tabview-nav-content",
        onScroll: _cache[1] || (_cache[1] = (...args) => $options.onScroll && $options.onScroll(...args))
      }, _ctx.ptm("navcontent")), [
        createElementVNode("ul", mergeProps({
          ref: "nav",
          class: "p-tabview-nav",
          role: "tablist"
        }, _ctx.ptm("nav")), [
          (openBlock(true), createElementBlock(Fragment$1, null, renderList($options.tabs, (tab, i) => {
            return openBlock(), createElementBlock("li", mergeProps({
              key: $options.getKey(tab, i),
              style: $options.getTabProp(tab, "headerStyle"),
              class: $options.getTabHeaderClass(tab, i),
              role: "presentation",
              "data-index": i
            }, { ...$options.getTabProp(tab, "headerProps"), ...$options.getTabPT(tab, "root"), ...$options.getTabPT(tab, "header") }), [
              withDirectives((openBlock(), createElementBlock("a", mergeProps({
                id: $options.getTabHeaderActionId(i),
                class: "p-tabview-nav-link p-tabview-header-action",
                tabindex: $options.getTabProp(tab, "disabled") || !$options.isTabActive(i) ? -1 : $props.tabindex,
                role: "tab",
                "aria-disabled": $options.getTabProp(tab, "disabled"),
                "aria-selected": $options.isTabActive(i),
                "aria-controls": $options.getTabContentId(i),
                onClick: ($event) => $options.onTabClick($event, tab, i),
                onKeydown: ($event) => $options.onTabKeyDown($event, tab, i)
              }, { ...$options.getTabProp(tab, "headerActionProps"), ...$options.getTabPT(tab, "headeraction") }), [
                tab.props && tab.props.header ? (openBlock(), createElementBlock("span", mergeProps({
                  key: 0,
                  class: "p-tabview-title"
                }, $options.getTabPT(tab, "headertitle")), toDisplayString(tab.props.header), 17)) : createCommentVNode("", true),
                tab.children && tab.children.header ? (openBlock(), createBlock(resolveDynamicComponent(tab.children.header), { key: 1 })) : createCommentVNode("", true)
              ], 16, _hoisted_3$c)), [
                [_directive_ripple]
              ])
            ], 16, _hoisted_2$f);
          }), 128)),
          createElementVNode("li", mergeProps({
            ref: "inkbar",
            class: "p-tabview-ink-bar",
            role: "presentation",
            "aria-hidden": "true"
          }, _ctx.ptm("inkbar")), null, 16)
        ], 16)
      ], 16),
      $props.scrollable && !$data.isNextButtonDisabled ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
        key: 1,
        ref: "nextBtn",
        type: "button",
        class: "p-tabview-nav-next p-tabview-nav-btn p-link",
        tabindex: $props.tabindex,
        "aria-label": $options.nextButtonAriaLabel,
        onClick: _cache[2] || (_cache[2] = (...args) => $options.onNextButtonClick && $options.onNextButtonClick(...args))
      }, { ...$props.nextButtonProps, ..._ctx.ptm("nextbutton") }), [
        renderSlot(_ctx.$slots, "nexticon", {}, () => [
          (openBlock(), createBlock(resolveDynamicComponent($props.nextIcon ? "span" : "ChevronRightIcon"), mergeProps({
            "aria-hidden": "true",
            class: $props.nextIcon
          }, _ctx.ptm("nexticon")), null, 16, ["class"]))
        ])
      ], 16, _hoisted_4$3)), [
        [_directive_ripple]
      ]) : createCommentVNode("", true)
    ], 16),
    createElementVNode("div", mergeProps({ class: "p-tabview-panels" }, _ctx.ptm("panelcontainer")), [
      (openBlock(true), createElementBlock(Fragment$1, null, renderList($options.tabs, (tab, i) => {
        return openBlock(), createElementBlock(Fragment$1, {
          key: $options.getKey(tab, i)
        }, [
          ($props.lazy ? $options.isTabActive(i) : true) ? withDirectives((openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            style: $options.getTabProp(tab, "contentStyle"),
            class: $options.getTabContentClass(tab),
            role: "tabpanel",
            "aria-labelledby": $options.getTabHeaderActionId(i)
          }, { ...$options.getTabProp(tab, "contentProps"), ...$options.getTabPT(tab, "root"), ...$options.getTabPT(tab, "content") }), [
            (openBlock(), createBlock(resolveDynamicComponent(tab)))
          ], 16, _hoisted_5$2)), [
            [vShow, $props.lazy ? true : $options.isTabActive(i)]
          ]) : createCommentVNode("", true)
        ], 64);
      }), 128))
    ], 16)
  ], 16);
}
function styleInject$a(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style2 = document.createElement("style");
  style2.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style2, head.firstChild);
    } else {
      head.appendChild(style2);
    }
  } else {
    head.appendChild(style2);
  }
  if (style2.styleSheet) {
    style2.styleSheet.cssText = css;
  } else {
    style2.appendChild(document.createTextNode(css));
  }
}
var css_248z$a = "\n.p-tabview-nav-container {\n    position: relative;\n}\n.p-tabview-scrollable .p-tabview-nav-container {\n    overflow: hidden;\n}\n.p-tabview-nav-content {\n    overflow-x: auto;\n    overflow-y: hidden;\n    scroll-behavior: smooth;\n    scrollbar-width: none;\n    overscroll-behavior: contain auto;\n}\n.p-tabview-nav {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    flex: 1 1 auto;\n}\n.p-tabview-header-action {\n    cursor: pointer;\n    user-select: none;\n    display: flex;\n    align-items: center;\n    position: relative;\n    text-decoration: none;\n    overflow: hidden;\n}\n.p-tabview-ink-bar {\n    display: none;\n    z-index: 1;\n}\n.p-tabview-header-action:focus {\n    z-index: 1;\n}\n.p-tabview-title {\n    line-height: 1;\n    white-space: nowrap;\n}\n.p-tabview-nav-btn {\n    position: absolute;\n    top: 0;\n    z-index: 2;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.p-tabview-nav-prev {\n    left: 0;\n}\n.p-tabview-nav-next {\n    right: 0;\n}\n.p-tabview-nav-content::-webkit-scrollbar {\n    display: none;\n}\n";
styleInject$a(css_248z$a);
script$p.render = render$p;
var script$o = {
  name: "TabPanel",
  extends: script$A,
  props: {
    header: null,
    headerStyle: null,
    headerClass: null,
    headerProps: null,
    headerActionProps: null,
    contentStyle: null,
    contentClass: null,
    contentProps: null,
    disabled: Boolean
  }
};
function render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
script$o.render = render$o;
var script$n = {
  name: "ScrollPanel",
  extends: script$A,
  props: {
    step: {
      type: Number,
      default: 5
    }
  },
  initialized: false,
  documentResizeListener: null,
  documentMouseMoveListener: null,
  documentMouseUpListener: null,
  frame: null,
  scrollXRatio: null,
  scrollYRatio: null,
  isXBarClicked: false,
  isYBarClicked: false,
  lastPageX: null,
  lastPageY: null,
  timer: null,
  outsideClickListener: null,
  data() {
    return {
      id: UniqueComponentId(),
      orientation: "vertical",
      lastScrollTop: 0,
      lastScrollLeft: 0
    };
  },
  mounted() {
    if (this.$el.offsetParent) {
      this.initialize();
    }
  },
  updated() {
    if (!this.initialized && this.$el.offsetParent) {
      this.initialize();
    }
  },
  beforeUnmount() {
    this.unbindDocumentResizeListener();
    if (this.frame) {
      window.cancelAnimationFrame(this.frame);
    }
  },
  methods: {
    initialize() {
      this.moveBar();
      this.bindDocumentResizeListener();
      this.calculateContainerHeight();
    },
    calculateContainerHeight() {
      let containerStyles = getComputedStyle(this.$el), xBarStyles = getComputedStyle(this.$refs.xBar), pureContainerHeight = DomHandler.getHeight(this.$el) - parseInt(xBarStyles["height"], 10);
      if (containerStyles["max-height"] !== "none" && pureContainerHeight === 0) {
        if (this.$refs.content.offsetHeight + parseInt(xBarStyles["height"], 10) > parseInt(containerStyles["max-height"], 10)) {
          this.$el.style.height = containerStyles["max-height"];
        } else {
          this.$el.style.height = this.$refs.content.offsetHeight + parseFloat(containerStyles.paddingTop) + parseFloat(containerStyles.paddingBottom) + parseFloat(containerStyles.borderTopWidth) + parseFloat(containerStyles.borderBottomWidth) + "px";
        }
      }
    },
    moveBar() {
      let totalWidth = this.$refs.content.scrollWidth;
      let ownWidth = this.$refs.content.clientWidth;
      let bottom = (this.$el.clientHeight - this.$refs.xBar.clientHeight) * -1;
      this.scrollXRatio = ownWidth / totalWidth;
      let totalHeight = this.$refs.content.scrollHeight;
      let ownHeight = this.$refs.content.clientHeight;
      let right = (this.$el.clientWidth - this.$refs.yBar.clientWidth) * -1;
      this.scrollYRatio = ownHeight / totalHeight;
      this.frame = this.requestAnimationFrame(() => {
        if (this.scrollXRatio >= 1) {
          DomHandler.addClass(this.$refs.xBar, "p-scrollpanel-hidden");
        } else {
          DomHandler.removeClass(this.$refs.xBar, "p-scrollpanel-hidden");
          this.$refs.xBar.style.cssText = "width:" + Math.max(this.scrollXRatio * 100, 10) + "%; left:" + this.$refs.content.scrollLeft / totalWidth * 100 + "%;bottom:" + bottom + "px;";
        }
        if (this.scrollYRatio >= 1) {
          DomHandler.addClass(this.$refs.yBar, "p-scrollpanel-hidden");
        } else {
          DomHandler.removeClass(this.$refs.yBar, "p-scrollpanel-hidden");
          this.$refs.yBar.style.cssText = "height:" + Math.max(this.scrollYRatio * 100, 10) + "%; top: calc(" + this.$refs.content.scrollTop / totalHeight * 100 + "% - " + this.$refs.xBar.clientHeight + "px);right:" + right + "px;";
        }
      });
    },
    onYBarMouseDown(e) {
      this.isYBarClicked = true;
      this.$refs.yBar.focus();
      this.lastPageY = e.pageY;
      DomHandler.addClass(this.$refs.yBar, "p-scrollpanel-grabbed");
      DomHandler.addClass(document.body, "p-scrollpanel-grabbed");
      this.bindDocumentMouseListeners();
      e.preventDefault();
    },
    onXBarMouseDown(e) {
      this.isXBarClicked = true;
      this.$refs.xBar.focus();
      this.lastPageX = e.pageX;
      DomHandler.addClass(this.$refs.xBar, "p-scrollpanel-grabbed");
      DomHandler.addClass(document.body, "p-scrollpanel-grabbed");
      this.bindDocumentMouseListeners();
      e.preventDefault();
    },
    onScroll(event) {
      if (this.lastScrollLeft !== event.target.scrollLeft) {
        this.lastScrollLeft = event.target.scrollLeft;
        this.orientation = "horizontal";
      } else if (this.lastScrollTop !== event.target.scrollTop) {
        this.lastScrollTop = event.target.scrollTop;
        this.orientation = "vertical";
      }
      this.moveBar();
    },
    onKeyDown(event) {
      if (this.orientation === "vertical") {
        switch (event.code) {
          case "ArrowDown": {
            this.setTimer("scrollTop", this.step);
            event.preventDefault();
            break;
          }
          case "ArrowUp": {
            this.setTimer("scrollTop", this.step * -1);
            event.preventDefault();
            break;
          }
          case "ArrowLeft":
          case "ArrowRight": {
            event.preventDefault();
            break;
          }
        }
      } else if (this.orientation === "horizontal") {
        switch (event.code) {
          case "ArrowRight": {
            this.setTimer("scrollLeft", this.step);
            event.preventDefault();
            break;
          }
          case "ArrowLeft": {
            this.setTimer("scrollLeft", this.step * -1);
            event.preventDefault();
            break;
          }
          case "ArrowDown":
          case "ArrowUp": {
            event.preventDefault();
            break;
          }
        }
      }
    },
    onKeyUp() {
      this.clearTimer();
    },
    repeat(bar, step) {
      this.$refs.content[bar] += step;
      this.moveBar();
    },
    setTimer(bar, step) {
      this.clearTimer();
      this.timer = setTimeout(() => {
        this.repeat(bar, step);
      }, 40);
    },
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    },
    onDocumentMouseMove(e) {
      if (this.isXBarClicked) {
        this.onMouseMoveForXBar(e);
      } else if (this.isYBarClicked) {
        this.onMouseMoveForYBar(e);
      } else {
        this.onMouseMoveForXBar(e);
        this.onMouseMoveForYBar(e);
      }
    },
    onMouseMoveForXBar(e) {
      let deltaX = e.pageX - this.lastPageX;
      this.lastPageX = e.pageX;
      this.frame = this.requestAnimationFrame(() => {
        this.$refs.content.scrollLeft += deltaX / this.scrollXRatio;
      });
    },
    onMouseMoveForYBar(e) {
      let deltaY = e.pageY - this.lastPageY;
      this.lastPageY = e.pageY;
      this.frame = this.requestAnimationFrame(() => {
        this.$refs.content.scrollTop += deltaY / this.scrollYRatio;
      });
    },
    onFocus(event) {
      if (this.$refs.xBar.isSameNode(event.target)) {
        this.orientation = "horizontal";
      } else if (this.$refs.yBar.isSameNode(event.target)) {
        this.orientation = "vertical";
      }
    },
    onBlur() {
      if (this.orientation === "horizontal") {
        this.orientation = "vertical";
      }
    },
    onDocumentMouseUp() {
      DomHandler.removeClass(this.$refs.yBar, "p-scrollpanel-grabbed");
      DomHandler.removeClass(this.$refs.xBar, "p-scrollpanel-grabbed");
      DomHandler.removeClass(document.body, "p-scrollpanel-grabbed");
      this.unbindDocumentMouseListeners();
      this.isXBarClicked = false;
      this.isYBarClicked = false;
    },
    requestAnimationFrame(f) {
      let frame = window.requestAnimationFrame || this.timeoutFrame;
      return frame(f);
    },
    refresh() {
      this.moveBar();
    },
    scrollTop(scrollTop) {
      let scrollableHeight = this.$refs.content.scrollHeight - this.$refs.content.clientHeight;
      scrollTop = scrollTop > scrollableHeight ? scrollableHeight : scrollTop > 0 ? scrollTop : 0;
      this.$refs.content.scrollTop = scrollTop;
    },
    timeoutFrame(fn) {
      setTimeout(fn, 0);
    },
    bindDocumentMouseListeners() {
      if (!this.documentMouseMoveListener) {
        this.documentMouseMoveListener = (e) => {
          this.onDocumentMouseMove(e);
        };
        document.addEventListener("mousemove", this.documentMouseMoveListener);
      }
      if (!this.documentMouseUpListener) {
        this.documentMouseUpListener = (e) => {
          this.onDocumentMouseUp(e);
        };
        document.addEventListener("mouseup", this.documentMouseUpListener);
      }
    },
    unbindDocumentMouseListeners() {
      if (this.documentMouseMoveListener) {
        document.removeEventListener("mousemove", this.documentMouseMoveListener);
        this.documentMouseMoveListener = null;
      }
      if (this.documentMouseUpListener) {
        document.removeEventListener("mouseup", this.documentMouseUpListener);
        this.documentMouseUpListener = null;
      }
    },
    bindDocumentResizeListener() {
      if (!this.documentResizeListener) {
        this.documentResizeListener = () => {
          this.moveBar();
        };
        window.addEventListener("resize", this.documentResizeListener);
      }
    },
    unbindDocumentResizeListener() {
      if (this.documentResizeListener) {
        window.removeEventListener("resize", this.documentResizeListener);
        this.documentResizeListener = null;
      }
    }
  }
};
const _hoisted_1$k = ["aria-valuenow"];
const _hoisted_2$e = ["aria-valuenow"];
function render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({ class: "p-scrollpanel p-component" }, _ctx.ptm("root")), [
    createElementVNode("div", mergeProps({ class: "p-scrollpanel-wrapper" }, _ctx.ptm("wrapper")), [
      createElementVNode("div", mergeProps({
        ref: "content",
        class: "p-scrollpanel-content",
        onScroll: _cache[0] || (_cache[0] = (...args) => $options.onScroll && $options.onScroll(...args)),
        onMouseenter: _cache[1] || (_cache[1] = (...args) => $options.moveBar && $options.moveBar(...args))
      }, _ctx.ptm("content")), [
        renderSlot(_ctx.$slots, "default")
      ], 16)
    ], 16),
    createElementVNode("div", mergeProps({
      ref: "xBar",
      class: "p-scrollpanel-bar p-scrollpanel-bar-x",
      tabindex: "0",
      role: "scrollbar",
      "aria-orientation": "horizontal",
      "aria-valuenow": $data.lastScrollLeft,
      onMousedown: _cache[2] || (_cache[2] = (...args) => $options.onXBarMouseDown && $options.onXBarMouseDown(...args)),
      onKeydown: _cache[3] || (_cache[3] = ($event) => $options.onKeyDown($event)),
      onKeyup: _cache[4] || (_cache[4] = (...args) => $options.onKeyUp && $options.onKeyUp(...args)),
      onFocus: _cache[5] || (_cache[5] = (...args) => $options.onFocus && $options.onFocus(...args)),
      onBlur: _cache[6] || (_cache[6] = (...args) => $options.onBlur && $options.onBlur(...args))
    }, _ctx.ptm("barx")), null, 16, _hoisted_1$k),
    createElementVNode("div", mergeProps({
      ref: "yBar",
      class: "p-scrollpanel-bar p-scrollpanel-bar-y",
      tabindex: "0",
      role: "scrollbar",
      "aria-orientation": "vertical",
      "aria-valuenow": $data.lastScrollTop,
      onMousedown: _cache[7] || (_cache[7] = (...args) => $options.onYBarMouseDown && $options.onYBarMouseDown(...args)),
      onKeydown: _cache[8] || (_cache[8] = ($event) => $options.onKeyDown($event)),
      onKeyup: _cache[9] || (_cache[9] = (...args) => $options.onKeyUp && $options.onKeyUp(...args)),
      onFocus: _cache[10] || (_cache[10] = (...args) => $options.onFocus && $options.onFocus(...args))
    }, _ctx.ptm("bary")), null, 16, _hoisted_2$e)
  ], 16);
}
function styleInject$9(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style2 = document.createElement("style");
  style2.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style2, head.firstChild);
    } else {
      head.appendChild(style2);
    }
  } else {
    head.appendChild(style2);
  }
  if (style2.styleSheet) {
    style2.styleSheet.cssText = css;
  } else {
    style2.appendChild(document.createTextNode(css));
  }
}
var css_248z$9 = "\n.p-scrollpanel-wrapper {\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    position: relative;\n    z-index: 1;\n    float: left;\n}\n.p-scrollpanel-content {\n    height: calc(100% + 18px);\n    width: calc(100% + 18px);\n    padding: 0 18px 18px 0;\n    position: relative;\n    overflow: scroll;\n    box-sizing: border-box;\n    scrollbar-width: none;\n}\n.p-scrollpanel-content::-webkit-scrollbar {\n    display: none;\n}\n.p-scrollpanel-bar {\n    position: relative;\n    background: #c1c1c1;\n    border-radius: 3px;\n    z-index: 2;\n    cursor: pointer;\n    opacity: 0;\n    transition: opacity 0.25s linear;\n}\n.p-scrollpanel-bar-y {\n    width: 9px;\n    top: 0;\n}\n.p-scrollpanel-bar-x {\n    height: 9px;\n    bottom: 0;\n}\n.p-scrollpanel-hidden {\n    visibility: hidden;\n}\n.p-scrollpanel:hover .p-scrollpanel-bar,\n.p-scrollpanel:active .p-scrollpanel-bar {\n    opacity: 1;\n}\n.p-scrollpanel-grabbed {\n    user-select: none;\n}\n";
styleInject$9(css_248z$9);
script$n.render = render$n;
var script$m = {
  name: "Card",
  extends: script$A
};
function render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({ class: "p-card p-component" }, _ctx.ptm("root")), [
    _ctx.$slots.header ? (openBlock(), createElementBlock("div", mergeProps({
      key: 0,
      class: "p-card-header"
    }, _ctx.ptm("header")), [
      renderSlot(_ctx.$slots, "header")
    ], 16)) : createCommentVNode("", true),
    createElementVNode("div", mergeProps({ class: "p-card-body" }, _ctx.ptm("body")), [
      _ctx.$slots.title ? (openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        class: "p-card-title"
      }, _ctx.ptm("title")), [
        renderSlot(_ctx.$slots, "title")
      ], 16)) : createCommentVNode("", true),
      _ctx.$slots.subtitle ? (openBlock(), createElementBlock("div", mergeProps({
        key: 1,
        class: "p-card-subtitle"
      }, _ctx.ptm("subtitle")), [
        renderSlot(_ctx.$slots, "subtitle")
      ], 16)) : createCommentVNode("", true),
      createElementVNode("div", mergeProps({ class: "p-card-content" }, _ctx.ptm("content")), [
        renderSlot(_ctx.$slots, "content")
      ], 16),
      _ctx.$slots.footer ? (openBlock(), createElementBlock("div", mergeProps({
        key: 2,
        class: "p-card-footer"
      }, _ctx.ptm("footer")), [
        renderSlot(_ctx.$slots, "footer")
      ], 16)) : createCommentVNode("", true)
    ], 16)
  ], 16);
}
script$m.render = render$m;
function bind(el, binding) {
  const { onFocusIn, onFocusOut } = binding.value || {};
  el.$_pfocustrap_mutationobserver = new MutationObserver((mutationList) => {
    mutationList.forEach((mutation) => {
      if (mutation.type === "childList" && !el.contains(document.activeElement)) {
        const findNextFocusableElement = (el2) => {
          const focusableElement = DomHandler.isFocusableElement(el2) ? el2 : DomHandler.getFirstFocusableElement(el2);
          return ObjectUtils.isNotEmpty(focusableElement) ? focusableElement : findNextFocusableElement(el2.nextSibling);
        };
        DomHandler.focus(findNextFocusableElement(mutation.nextSibling));
      }
    });
  });
  el.$_pfocustrap_mutationobserver.disconnect();
  el.$_pfocustrap_mutationobserver.observe(el, {
    childList: true
  });
  el.$_pfocustrap_focusinlistener = (event) => onFocusIn && onFocusIn(event);
  el.$_pfocustrap_focusoutlistener = (event) => onFocusOut && onFocusOut(event);
  el.addEventListener("focusin", el.$_pfocustrap_focusinlistener);
  el.addEventListener("focusout", el.$_pfocustrap_focusoutlistener);
}
function unbind(el) {
  el.$_pfocustrap_mutationobserver && el.$_pfocustrap_mutationobserver.disconnect();
  el.$_pfocustrap_focusinlistener && el.removeEventListener("focusin", el.$_pfocustrap_focusinlistener) && (el.$_pfocustrap_focusinlistener = null);
  el.$_pfocustrap_focusoutlistener && el.removeEventListener("focusout", el.$_pfocustrap_focusoutlistener) && (el.$_pfocustrap_focusoutlistener = null);
}
function autoFocus(el, binding) {
  const { autoFocusSelector = "", firstFocusableSelector = "", autoFocus: autoFocus2 = false } = binding.value || {};
  let focusableElement = DomHandler.getFirstFocusableElement(el, `[autofocus]:not(.p-hidden-focusable)${autoFocusSelector}`);
  autoFocus2 && !focusableElement && (focusableElement = DomHandler.getFirstFocusableElement(el, `:not(.p-hidden-focusable)${firstFocusableSelector}`));
  DomHandler.focus(focusableElement);
}
function onFirstHiddenElementFocus(event) {
  const { currentTarget, relatedTarget } = event;
  const focusableElement = relatedTarget === currentTarget.$_pfocustrap_lasthiddenfocusableelement ? DomHandler.getFirstFocusableElement(currentTarget.parentElement, `:not(.p-hidden-focusable)${currentTarget.$_pfocustrap_focusableselector}`) : currentTarget.$_pfocustrap_lasthiddenfocusableelement;
  DomHandler.focus(focusableElement);
}
function onLastHiddenElementFocus(event) {
  const { currentTarget, relatedTarget } = event;
  const focusableElement = relatedTarget === currentTarget.$_pfocustrap_firsthiddenfocusableelement ? DomHandler.getLastFocusableElement(currentTarget.parentElement, `:not(.p-hidden-focusable)${currentTarget.$_pfocustrap_focusableselector}`) : currentTarget.$_pfocustrap_firsthiddenfocusableelement;
  DomHandler.focus(focusableElement);
}
function createHiddenFocusableElements(el, binding) {
  const { tabIndex = 0, firstFocusableSelector = "", lastFocusableSelector = "" } = binding.value || {};
  const createFocusableElement = (onFocus) => {
    const element = document.createElement("span");
    element.classList = "p-hidden-accessible p-hidden-focusable";
    element.tabIndex = tabIndex;
    element.setAttribute("aria-hidden", "true");
    element.setAttribute("role", "presentation");
    element.addEventListener("focus", onFocus);
    return element;
  };
  const firstFocusableElement = createFocusableElement(onFirstHiddenElementFocus);
  const lastFocusableElement = createFocusableElement(onLastHiddenElementFocus);
  firstFocusableElement.$_pfocustrap_lasthiddenfocusableelement = lastFocusableElement;
  firstFocusableElement.$_pfocustrap_focusableselector = firstFocusableSelector;
  lastFocusableElement.$_pfocustrap_firsthiddenfocusableelement = firstFocusableElement;
  lastFocusableElement.$_pfocustrap_focusableselector = lastFocusableSelector;
  el.prepend(firstFocusableElement);
  el.append(lastFocusableElement);
}
const FocusTrap = {
  mounted(el, binding) {
    const { disabled } = binding.value || {};
    if (!disabled) {
      createHiddenFocusableElements(el, binding);
      bind(el, binding);
      autoFocus(el, binding);
    }
  },
  updated(el, binding) {
    const { disabled } = binding.value || {};
    disabled && unbind(el);
  },
  unmounted(el) {
    unbind(el);
  }
};
var script$l = {
  name: "TimesIcon",
  extends: script$z
};
const _hoisted_1$j = /* @__PURE__ */ createElementVNode("path", {
  d: "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",
  fill: "currentColor"
}, null, -1);
const _hoisted_2$d = [
  _hoisted_1$j
];
function render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$d, 16);
}
script$l.render = render$l;
var script$k = {
  name: "WindowMaximizeIcon",
  extends: script$z
};
const _hoisted_1$i = /* @__PURE__ */ createElementVNode("g", { "clip-path": "url(#clip0_414_20927)" }, [
  /* @__PURE__ */ createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",
    fill: "currentColor"
  })
], -1);
const _hoisted_2$c = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("clipPath", { id: "clip0_414_20927" }, [
    /* @__PURE__ */ createElementVNode("rect", {
      width: "14",
      height: "14",
      fill: "white"
    })
  ])
], -1);
const _hoisted_3$b = [
  _hoisted_1$i,
  _hoisted_2$c
];
function render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_3$b, 16);
}
script$k.render = render$k;
var script$j = {
  name: "WindowMinimizeIcon",
  extends: script$z
};
const _hoisted_1$h = /* @__PURE__ */ createElementVNode("g", { "clip-path": "url(#clip0_414_20939)" }, [
  /* @__PURE__ */ createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",
    fill: "currentColor"
  })
], -1);
const _hoisted_2$b = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("clipPath", { id: "clip0_414_20939" }, [
    /* @__PURE__ */ createElementVNode("rect", {
      width: "14",
      height: "14",
      fill: "white"
    })
  ])
], -1);
const _hoisted_3$a = [
  _hoisted_1$h,
  _hoisted_2$b
];
function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_3$a, 16);
}
script$j.render = render$j;
var script$i = {
  name: "Portal",
  props: {
    appendTo: {
      type: String,
      default: "body"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mounted: false
    };
  },
  mounted() {
    this.mounted = DomHandler.isClient();
  },
  computed: {
    inline() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.inline ? renderSlot(_ctx.$slots, "default", { key: 0 }) : $data.mounted ? (openBlock(), createBlock(Teleport, {
    key: 1,
    to: $props.appendTo
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 8, ["to"])) : createCommentVNode("", true);
}
script$i.render = render$i;
var script$h = {
  name: "Dialog",
  extends: script$A,
  inheritAttrs: false,
  emits: ["update:visible", "show", "hide", "after-hide", "maximize", "unmaximize", "dragend"],
  props: {
    header: {
      type: null,
      default: null
    },
    footer: {
      type: null,
      default: null
    },
    visible: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: null
    },
    contentStyle: {
      type: null,
      default: null
    },
    contentClass: {
      type: String,
      default: null
    },
    contentProps: {
      type: null,
      default: null
    },
    rtl: {
      type: Boolean,
      default: null
    },
    maximizable: {
      type: Boolean,
      default: false
    },
    dismissableMask: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeOnEscape: {
      type: Boolean,
      default: true
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    autoZIndex: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: "center"
    },
    breakpoints: {
      type: Object,
      default: null
    },
    draggable: {
      type: Boolean,
      default: true
    },
    keepInViewport: {
      type: Boolean,
      default: true
    },
    minX: {
      type: Number,
      default: 0
    },
    minY: {
      type: Number,
      default: 0
    },
    appendTo: {
      type: String,
      default: "body"
    },
    closeIcon: {
      type: String,
      default: void 0
    },
    maximizeIcon: {
      type: String,
      default: void 0
    },
    minimizeIcon: {
      type: String,
      default: void 0
    },
    closeButtonProps: {
      type: null,
      default: null
    },
    _instance: null
  },
  provide() {
    return {
      dialogRef: computed(() => this._instance)
    };
  },
  data() {
    return {
      containerVisible: this.visible,
      maximized: false,
      focusableMax: null,
      focusableClose: null
    };
  },
  documentKeydownListener: null,
  container: null,
  mask: null,
  content: null,
  headerContainer: null,
  footerContainer: null,
  maximizableButton: null,
  closeButton: null,
  styleElement: null,
  dragging: null,
  documentDragListener: null,
  documentDragEndListener: null,
  lastPageX: null,
  lastPageY: null,
  updated() {
    if (this.visible) {
      this.containerVisible = this.visible;
    }
  },
  beforeUnmount() {
    this.unbindDocumentState();
    this.unbindGlobalListeners();
    this.destroyStyle();
    if (this.mask && this.autoZIndex) {
      ZIndexUtils.clear(this.mask);
    }
    this.container = null;
    this.mask = null;
  },
  mounted() {
    if (this.breakpoints) {
      this.createStyle();
    }
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
    },
    onBeforeEnter(el) {
      el.setAttribute(this.attributeSelector, "");
    },
    onEnter() {
      this.$emit("show");
      this.focus();
      this.enableDocumentSettings();
      this.bindGlobalListeners();
      if (this.autoZIndex) {
        ZIndexUtils.set("modal", this.mask, this.baseZIndex + this.$primevue.config.zIndex.modal);
      }
    },
    onBeforeLeave() {
      if (this.modal) {
        DomHandler.addClass(this.mask, "p-component-overlay-leave");
      }
    },
    onLeave() {
      this.$emit("hide");
      this.focusableClose = null;
      this.focusableMax = null;
    },
    onAfterLeave() {
      if (this.autoZIndex) {
        ZIndexUtils.clear(this.mask);
      }
      this.containerVisible = false;
      this.unbindDocumentState();
      this.unbindGlobalListeners();
      this.$emit("after-hide");
    },
    onMaskClick(event) {
      if (this.dismissableMask && this.modal && this.mask === event.target) {
        this.close();
      }
    },
    focus() {
      const findFocusableElement = (container) => {
        return container.querySelector("[autofocus]");
      };
      let focusTarget = this.$slots.footer && findFocusableElement(this.footerContainer);
      if (!focusTarget) {
        focusTarget = this.$slots.header && findFocusableElement(this.headerContainer);
        if (!focusTarget) {
          focusTarget = this.$slots.default && findFocusableElement(this.content);
          if (!focusTarget) {
            if (this.maximizable) {
              this.focusableMax = true;
              focusTarget = this.maximizableButton;
            } else {
              this.focusableClose = true;
              focusTarget = this.closeButton;
            }
          }
        }
      }
      if (focusTarget) {
        DomHandler.focus(focusTarget);
      }
    },
    maximize(event) {
      if (this.maximized) {
        this.maximized = false;
        this.$emit("unmaximize", event);
      } else {
        this.maximized = true;
        this.$emit("maximize", event);
      }
      if (!this.modal) {
        if (this.maximized)
          DomHandler.addClass(document.body, "p-overflow-hidden");
        else
          DomHandler.removeClass(document.body, "p-overflow-hidden");
      }
    },
    enableDocumentSettings() {
      if (this.modal || this.maximizable && this.maximized) {
        DomHandler.addClass(document.body, "p-overflow-hidden");
      }
    },
    unbindDocumentState() {
      if (this.modal || this.maximizable && this.maximized) {
        DomHandler.removeClass(document.body, "p-overflow-hidden");
      }
    },
    onKeyDown(event) {
      if (event.code === "Escape" && this.closeOnEscape) {
        this.close();
      }
    },
    bindDocumentKeyDownListener() {
      if (!this.documentKeydownListener) {
        this.documentKeydownListener = this.onKeyDown.bind(this);
        window.document.addEventListener("keydown", this.documentKeydownListener);
      }
    },
    unbindDocumentKeyDownListener() {
      if (this.documentKeydownListener) {
        window.document.removeEventListener("keydown", this.documentKeydownListener);
        this.documentKeydownListener = null;
      }
    },
    getPositionClass() {
      const positions = ["left", "right", "top", "topleft", "topright", "bottom", "bottomleft", "bottomright"];
      const pos = positions.find((item) => item === this.position);
      return pos ? `p-dialog-${pos}` : "";
    },
    containerRef(el) {
      this.container = el;
    },
    maskRef(el) {
      this.mask = el;
    },
    contentRef(el) {
      this.content = el;
    },
    headerContainerRef(el) {
      this.headerContainer = el;
    },
    footerContainerRef(el) {
      this.footerContainer = el;
    },
    maximizableRef(el) {
      this.maximizableButton = el;
    },
    closeButtonRef(el) {
      this.closeButton = el;
    },
    createStyle() {
      if (!this.styleElement) {
        this.styleElement = document.createElement("style");
        this.styleElement.type = "text/css";
        document.head.appendChild(this.styleElement);
        let innerHTML = "";
        for (let breakpoint in this.breakpoints) {
          innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[breakpoint]} !important;
                            }
                        }
                    `;
        }
        this.styleElement.innerHTML = innerHTML;
      }
    },
    destroyStyle() {
      if (this.styleElement) {
        document.head.removeChild(this.styleElement);
        this.styleElement = null;
      }
    },
    initDrag(event) {
      if (DomHandler.hasClass(event.target, "p-dialog-header-icon") || DomHandler.hasClass(event.target.parentElement, "p-dialog-header-icon")) {
        return;
      }
      if (this.draggable) {
        this.dragging = true;
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
        this.container.style.margin = "0";
        DomHandler.addClass(document.body, "p-unselectable-text");
      }
    },
    bindGlobalListeners() {
      if (this.draggable) {
        this.bindDocumentDragListener();
        this.bindDocumentDragEndListener();
      }
      if (this.closeOnEscape && this.closable) {
        this.bindDocumentKeyDownListener();
      }
    },
    unbindGlobalListeners() {
      this.unbindDocumentDragListener();
      this.unbindDocumentDragEndListener();
      this.unbindDocumentKeyDownListener();
    },
    bindDocumentDragListener() {
      this.documentDragListener = (event) => {
        if (this.dragging) {
          let width = DomHandler.getOuterWidth(this.container);
          let height = DomHandler.getOuterHeight(this.container);
          let deltaX = event.pageX - this.lastPageX;
          let deltaY = event.pageY - this.lastPageY;
          let offset = this.container.getBoundingClientRect();
          let leftPos = offset.left + deltaX;
          let topPos = offset.top + deltaY;
          let viewport = DomHandler.getViewport();
          this.container.style.position = "fixed";
          if (this.keepInViewport) {
            if (leftPos >= this.minX && leftPos + width < viewport.width) {
              this.lastPageX = event.pageX;
              this.container.style.left = leftPos + "px";
            }
            if (topPos >= this.minY && topPos + height < viewport.height) {
              this.lastPageY = event.pageY;
              this.container.style.top = topPos + "px";
            }
          } else {
            this.lastPageX = event.pageX;
            this.container.style.left = leftPos + "px";
            this.lastPageY = event.pageY;
            this.container.style.top = topPos + "px";
          }
        }
      };
      window.document.addEventListener("mousemove", this.documentDragListener);
    },
    unbindDocumentDragListener() {
      if (this.documentDragListener) {
        window.document.removeEventListener("mousemove", this.documentDragListener);
        this.documentDragListener = null;
      }
    },
    bindDocumentDragEndListener() {
      this.documentDragEndListener = (event) => {
        if (this.dragging) {
          this.dragging = false;
          DomHandler.removeClass(document.body, "p-unselectable-text");
          this.$emit("dragend", event);
        }
      };
      window.document.addEventListener("mouseup", this.documentDragEndListener);
    },
    unbindDocumentDragEndListener() {
      if (this.documentDragEndListener) {
        window.document.removeEventListener("mouseup", this.documentDragEndListener);
        this.documentDragEndListener = null;
      }
    }
  },
  computed: {
    maskClass() {
      return ["p-dialog-mask", { "p-component-overlay p-component-overlay-enter": this.modal }, this.getPositionClass()];
    },
    dialogClass() {
      return [
        "p-dialog p-component",
        {
          "p-dialog-rtl": this.rtl,
          "p-dialog-maximized": this.maximizable && this.maximized,
          "p-input-filled": this.$primevue.config.inputStyle === "filled",
          "p-ripple-disabled": this.$primevue.config.ripple === false
        }
      ];
    },
    maximizeIconComponent() {
      return this.maximized ? this.minimizeIcon ? "span" : "WindowMinimizeIcon" : this.maximizeIcon ? "span" : "WindowMaximizeIcon";
    },
    maximizeIconClass() {
      const maximizeClasses = this.maximized ? this.minimizeIcon : this.maximizeIcon;
      return `p-dialog-header-maximize-icon ${maximizeClasses}`;
    },
    ariaId() {
      return UniqueComponentId();
    },
    ariaLabelledById() {
      return this.header != null || this.$attrs["aria-labelledby"] !== null ? this.ariaId + "_header" : null;
    },
    closeAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    },
    attributeSelector() {
      return UniqueComponentId();
    },
    contentStyleClass() {
      return ["p-dialog-content", this.contentClass];
    }
  },
  directives: {
    ripple: Ripple,
    focustrap: FocusTrap
  },
  components: {
    Portal: script$i,
    WindowMinimizeIcon: script$j,
    WindowMaximizeIcon: script$k,
    TimesIcon: script$l
  }
};
const _hoisted_1$g = ["aria-labelledby", "aria-modal"];
const _hoisted_2$a = ["id"];
const _hoisted_3$9 = ["autofocus", "tabindex"];
const _hoisted_4$2 = ["autofocus", "aria-label"];
function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Portal = resolveComponent("Portal");
  const _directive_ripple = resolveDirective("ripple");
  const _directive_focustrap = resolveDirective("focustrap");
  return openBlock(), createBlock(_component_Portal, { appendTo: $props.appendTo }, {
    default: withCtx(() => [
      $data.containerVisible ? (openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        ref: $options.maskRef,
        class: $options.maskClass,
        onClick: _cache[3] || (_cache[3] = (...args) => $options.onMaskClick && $options.onMaskClick(...args))
      }, _ctx.ptm("mask")), [
        createVNode(Transition, {
          name: "p-dialog",
          onBeforeEnter: $options.onBeforeEnter,
          onEnter: $options.onEnter,
          onBeforeLeave: $options.onBeforeLeave,
          onLeave: $options.onLeave,
          onAfterLeave: $options.onAfterLeave,
          appear: ""
        }, {
          default: withCtx(() => [
            $props.visible ? withDirectives((openBlock(), createElementBlock("div", mergeProps({
              key: 0,
              ref: $options.containerRef,
              class: $options.dialogClass,
              role: "dialog",
              "aria-labelledby": $options.ariaLabelledById,
              "aria-modal": $props.modal
            }, { ..._ctx.$attrs, ..._ctx.ptm("root") }), [
              $props.showHeader ? (openBlock(), createElementBlock("div", mergeProps({
                key: 0,
                ref: $options.headerContainerRef,
                class: "p-dialog-header",
                onMousedown: _cache[2] || (_cache[2] = (...args) => $options.initDrag && $options.initDrag(...args))
              }, _ctx.ptm("header")), [
                renderSlot(_ctx.$slots, "header", {}, () => [
                  $props.header ? (openBlock(), createElementBlock("span", mergeProps({
                    key: 0,
                    id: $options.ariaLabelledById,
                    class: "p-dialog-title"
                  }, _ctx.ptm("headerTitle")), toDisplayString($props.header), 17, _hoisted_2$a)) : createCommentVNode("", true)
                ]),
                createElementVNode("div", mergeProps({ class: "p-dialog-header-icons" }, _ctx.ptm("headerIcons")), [
                  $props.maximizable ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
                    key: 0,
                    ref: $options.maximizableRef,
                    autofocus: $data.focusableMax,
                    class: "p-dialog-header-icon p-dialog-header-maximize p-link",
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.maximize && $options.maximize(...args)),
                    type: "button",
                    tabindex: $props.maximizable ? "0" : "-1"
                  }, _ctx.ptm("maximizableButton")), [
                    renderSlot(_ctx.$slots, "maximizeicon", { maximized: $data.maximized }, () => [
                      (openBlock(), createBlock(resolveDynamicComponent($options.maximizeIconComponent), mergeProps({ class: $options.maximizeIconClass }, _ctx.ptm("maximizableIcon")), null, 16, ["class"]))
                    ])
                  ], 16, _hoisted_3$9)), [
                    [_directive_ripple]
                  ]) : createCommentVNode("", true),
                  $props.closable ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
                    key: 1,
                    ref: $options.closeButtonRef,
                    autofocus: $data.focusableClose,
                    class: "p-dialog-header-icon p-dialog-header-close p-link",
                    onClick: _cache[1] || (_cache[1] = (...args) => $options.close && $options.close(...args)),
                    "aria-label": $options.closeAriaLabel,
                    type: "button"
                  }, { ...$props.closeButtonProps, ..._ctx.ptm("closeButton") }), [
                    renderSlot(_ctx.$slots, "closeicon", {}, () => [
                      (openBlock(), createBlock(resolveDynamicComponent($props.closeIcon ? "span" : "TimesIcon"), mergeProps({
                        class: ["p-dialog-header-close-icon", $props.closeIcon]
                      }, _ctx.ptm("closeButtonIcon")), null, 16, ["class"]))
                    ])
                  ], 16, _hoisted_4$2)), [
                    [_directive_ripple]
                  ]) : createCommentVNode("", true)
                ], 16)
              ], 16)) : createCommentVNode("", true),
              createElementVNode("div", mergeProps({
                ref: $options.contentRef,
                class: $options.contentStyleClass,
                style: $props.contentStyle
              }, { ...$props.contentProps, ..._ctx.ptm("content") }), [
                renderSlot(_ctx.$slots, "default")
              ], 16),
              $props.footer || _ctx.$slots.footer ? (openBlock(), createElementBlock("div", mergeProps({
                key: 1,
                ref: $options.footerContainerRef,
                class: "p-dialog-footer"
              }, _ctx.ptm("footer")), [
                renderSlot(_ctx.$slots, "footer", {}, () => [
                  createTextVNode(toDisplayString($props.footer), 1)
                ])
              ], 16)) : createCommentVNode("", true)
            ], 16, _hoisted_1$g)), [
              [_directive_focustrap, { disabled: !$props.modal }]
            ]) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["onBeforeEnter", "onEnter", "onBeforeLeave", "onLeave", "onAfterLeave"])
      ], 16)) : createCommentVNode("", true)
    ]),
    _: 3
  }, 8, ["appendTo"]);
}
function styleInject$8(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style2 = document.createElement("style");
  style2.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style2, head.firstChild);
    } else {
      head.appendChild(style2);
    }
  } else {
    head.appendChild(style2);
  }
  if (style2.styleSheet) {
    style2.styleSheet.cssText = css;
  } else {
    style2.appendChild(document.createTextNode(css));
  }
}
var css_248z$8 = "\n.p-dialog-mask {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    pointer-events: none;\n}\n.p-dialog-mask.p-component-overlay {\n    pointer-events: auto;\n}\n.p-dialog {\n    display: flex;\n    flex-direction: column;\n    pointer-events: auto;\n    max-height: 90%;\n    transform: scale(1);\n}\n.p-dialog-content {\n    overflow-y: auto;\n}\n.p-dialog-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-shrink: 0;\n}\n.p-dialog-footer {\n    flex-shrink: 0;\n}\n.p-dialog .p-dialog-header-icons {\n    display: flex;\n    align-items: center;\n}\n.p-dialog .p-dialog-header-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n}\n\n/* Fluid */\n.p-fluid .p-dialog-footer .p-button {\n    width: auto;\n}\n\n/* Animation */\n/* Center */\n.p-dialog-enter-active {\n    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n.p-dialog-leave-active {\n    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.p-dialog-enter-from,\n.p-dialog-leave-to {\n    opacity: 0;\n    transform: scale(0.7);\n}\n\n/* Top, Bottom, Left, Right, Top* and Bottom* */\n.p-dialog-top .p-dialog,\n.p-dialog-bottom .p-dialog,\n.p-dialog-left .p-dialog,\n.p-dialog-right .p-dialog,\n.p-dialog-topleft .p-dialog,\n.p-dialog-topright .p-dialog,\n.p-dialog-bottomleft .p-dialog,\n.p-dialog-bottomright .p-dialog {\n    margin: 0.75rem;\n    transform: translate3d(0px, 0px, 0px);\n}\n.p-dialog-top .p-dialog-enter-active,\n.p-dialog-top .p-dialog-leave-active,\n.p-dialog-bottom .p-dialog-enter-active,\n.p-dialog-bottom .p-dialog-leave-active,\n.p-dialog-left .p-dialog-enter-active,\n.p-dialog-left .p-dialog-leave-active,\n.p-dialog-right .p-dialog-enter-active,\n.p-dialog-right .p-dialog-leave-active,\n.p-dialog-topleft .p-dialog-enter-active,\n.p-dialog-topleft .p-dialog-leave-active,\n.p-dialog-topright .p-dialog-enter-active,\n.p-dialog-topright .p-dialog-leave-active,\n.p-dialog-bottomleft .p-dialog-enter-active,\n.p-dialog-bottomleft .p-dialog-leave-active,\n.p-dialog-bottomright .p-dialog-enter-active,\n.p-dialog-bottomright .p-dialog-leave-active {\n    transition: all 0.3s ease-out;\n}\n.p-dialog-top .p-dialog-enter-from,\n.p-dialog-top .p-dialog-leave-to {\n    transform: translate3d(0px, -100%, 0px);\n}\n.p-dialog-bottom .p-dialog-enter-from,\n.p-dialog-bottom .p-dialog-leave-to {\n    transform: translate3d(0px, 100%, 0px);\n}\n.p-dialog-left .p-dialog-enter-from,\n.p-dialog-left .p-dialog-leave-to,\n.p-dialog-topleft .p-dialog-enter-from,\n.p-dialog-topleft .p-dialog-leave-to,\n.p-dialog-bottomleft .p-dialog-enter-from,\n.p-dialog-bottomleft .p-dialog-leave-to {\n    transform: translate3d(-100%, 0px, 0px);\n}\n.p-dialog-right .p-dialog-enter-from,\n.p-dialog-right .p-dialog-leave-to,\n.p-dialog-topright .p-dialog-enter-from,\n.p-dialog-topright .p-dialog-leave-to,\n.p-dialog-bottomright .p-dialog-enter-from,\n.p-dialog-bottomright .p-dialog-leave-to {\n    transform: translate3d(100%, 0px, 0px);\n}\n\n/* Maximize */\n.p-dialog-maximized {\n    -webkit-transition: none;\n    transition: none;\n    transform: none;\n    width: 100vw !important;\n    height: 100vh !important;\n    top: 0px !important;\n    left: 0px !important;\n    max-height: 100%;\n    height: 100%;\n}\n.p-dialog-maximized .p-dialog-content {\n    flex-grow: 1;\n}\n\n/* Position */\n.p-dialog-left {\n    justify-content: flex-start;\n}\n.p-dialog-right {\n    justify-content: flex-end;\n}\n.p-dialog-top {\n    align-items: flex-start;\n}\n.p-dialog-topleft {\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n.p-dialog-topright {\n    justify-content: flex-end;\n    align-items: flex-start;\n}\n.p-dialog-bottom {\n    align-items: flex-end;\n}\n.p-dialog-bottomleft {\n    justify-content: flex-start;\n    align-items: flex-end;\n}\n.p-dialog-bottomright {\n    justify-content: flex-end;\n    align-items: flex-end;\n}\n.p-confirm-dialog .p-dialog-content {\n    display: flex;\n    align-items: center;\n}\n";
styleInject$8(css_248z$8);
script$h.render = render$h;
var script$g = {
  name: "ChevronDownIcon",
  extends: script$z
};
const _hoisted_1$f = /* @__PURE__ */ createElementVNode("path", {
  d: "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",
  fill: "currentColor"
}, null, -1);
const _hoisted_2$9 = [
  _hoisted_1$f
];
function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$9, 16);
}
script$g.render = render$g;
var script$f = {
  name: "FilterIcon",
  extends: script$z
};
const _hoisted_1$e = /* @__PURE__ */ createElementVNode("g", { "clip-path": "url(#clip0_390_17708)" }, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M8.64708 14H5.35296C5.18981 13.9979 5.03395 13.9321 4.91858 13.8167C4.8032 13.7014 4.73745 13.5455 4.73531 13.3824V7L0.329431 0.98C0.259794 0.889466 0.217389 0.780968 0.20718 0.667208C0.19697 0.553448 0.219379 0.439133 0.271783 0.337647C0.324282 0.236453 0.403423 0.151519 0.500663 0.0920138C0.597903 0.0325088 0.709548 0.000692754 0.823548 0H13.1765C13.2905 0.000692754 13.4021 0.0325088 13.4994 0.0920138C13.5966 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7826 0.780968 13.7402 0.889466 13.6706 0.98L9.26472 7V13.3824C9.26259 13.5455 9.19683 13.7014 9.08146 13.8167C8.96609 13.9321 8.81022 13.9979 8.64708 14ZM5.97061 12.7647H8.02943V6.79412C8.02878 6.66289 8.07229 6.53527 8.15296 6.43177L11.9412 1.23529H2.05884L5.86355 6.43177C5.94422 6.53527 5.98773 6.66289 5.98708 6.79412L5.97061 12.7647Z",
    fill: "currentColor"
  })
], -1);
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("clipPath", { id: "clip0_390_17708" }, [
    /* @__PURE__ */ createElementVNode("rect", {
      width: "14",
      height: "14",
      fill: "white"
    })
  ])
], -1);
const _hoisted_3$8 = [
  _hoisted_1$e,
  _hoisted_2$8
];
function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_3$8, 16);
}
script$f.render = render$f;
var OverlayEventBus = primebus();
var script$e = {
  name: "VirtualScroller",
  extends: script$A,
  emits: ["update:numToleratedItems", "scroll", "scroll-index-change", "lazy-load"],
  props: {
    id: {
      type: String,
      default: null
    },
    style: null,
    class: null,
    items: {
      type: Array,
      default: null
    },
    itemSize: {
      type: [Number, Array],
      default: 0
    },
    scrollHeight: null,
    scrollWidth: null,
    orientation: {
      type: String,
      default: "vertical"
    },
    numToleratedItems: {
      type: Number,
      default: null
    },
    delay: {
      type: Number,
      default: 0
    },
    resizeDelay: {
      type: Number,
      default: 10
    },
    lazy: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loaderDisabled: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    showSpacer: {
      type: Boolean,
      default: true
    },
    showLoader: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: Number,
      default: 0
    },
    inline: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 0
    },
    appendOnly: {
      type: Boolean,
      default: false
    },
    autoSize: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      first: this.isBoth() ? { rows: 0, cols: 0 } : 0,
      last: this.isBoth() ? { rows: 0, cols: 0 } : 0,
      page: this.isBoth() ? { rows: 0, cols: 0 } : 0,
      numItemsInViewport: this.isBoth() ? { rows: 0, cols: 0 } : 0,
      lastScrollPos: this.isBoth() ? { top: 0, left: 0 } : 0,
      d_numToleratedItems: this.numToleratedItems,
      d_loading: this.loading,
      loaderArr: [],
      spacerStyle: {},
      contentStyle: {}
    };
  },
  element: null,
  content: null,
  lastScrollPos: null,
  scrollTimeout: null,
  resizeTimeout: null,
  defaultWidth: 0,
  defaultHeight: 0,
  defaultContentWidth: 0,
  defaultContentHeight: 0,
  isRangeChanged: false,
  lazyLoadState: {},
  resizeListener: null,
  initialized: false,
  watch: {
    numToleratedItems(newValue) {
      this.d_numToleratedItems = newValue;
    },
    loading(newValue) {
      this.d_loading = newValue;
    },
    items(newValue, oldValue) {
      if (!oldValue || oldValue.length !== (newValue || []).length) {
        this.init();
        this.calculateAutoSize();
      }
    },
    itemSize() {
      this.init();
      this.calculateAutoSize();
    },
    orientation() {
      this.lastScrollPos = this.isBoth() ? { top: 0, left: 0 } : 0;
    },
    scrollHeight() {
      this.init();
      this.calculateAutoSize();
    },
    scrollWidth() {
      this.init();
      this.calculateAutoSize();
    }
  },
  mounted() {
    this.viewInit();
    this.lastScrollPos = this.isBoth() ? { top: 0, left: 0 } : 0;
    this.lazyLoadState = this.lazyLoadState || {};
  },
  updated() {
    !this.initialized && this.viewInit();
  },
  unmounted() {
    this.unbindResizeListener();
    this.initialized = false;
  },
  methods: {
    viewInit() {
      if (DomHandler.isVisible(this.element)) {
        this.setContentEl(this.content);
        this.init();
        this.bindResizeListener();
        this.defaultWidth = DomHandler.getWidth(this.element);
        this.defaultHeight = DomHandler.getHeight(this.element);
        this.defaultContentWidth = DomHandler.getWidth(this.content);
        this.defaultContentHeight = DomHandler.getHeight(this.content);
        this.initialized = true;
      }
    },
    init() {
      if (!this.disabled) {
        this.setSize();
        this.calculateOptions();
        this.setSpacerSize();
      }
    },
    isVertical() {
      return this.orientation === "vertical";
    },
    isHorizontal() {
      return this.orientation === "horizontal";
    },
    isBoth() {
      return this.orientation === "both";
    },
    scrollTo(options) {
      this.lastScrollPos = this.both ? { top: 0, left: 0 } : 0;
      this.element && this.element.scrollTo(options);
    },
    scrollToIndex(index, behavior = "auto") {
      const both = this.isBoth();
      const horizontal = this.isHorizontal();
      const first = this.first;
      const { numToleratedItems } = this.calculateNumItems();
      const contentPos = this.getContentPosition();
      const itemSize = this.itemSize;
      const calculateFirst = (_index = 0, _numT) => _index <= _numT ? 0 : _index;
      const calculateCoord = (_first, _size, _cpos) => _first * _size + _cpos;
      const scrollTo = (left = 0, top = 0) => this.scrollTo({ left, top, behavior });
      let newFirst = both ? { rows: 0, cols: 0 } : 0;
      let isRangeChanged = false;
      if (both) {
        newFirst = { rows: calculateFirst(index[0], numToleratedItems[0]), cols: calculateFirst(index[1], numToleratedItems[1]) };
        scrollTo(calculateCoord(newFirst.cols, itemSize[1], contentPos.left), calculateCoord(newFirst.rows, itemSize[0], contentPos.top));
        isRangeChanged = newFirst.rows !== first.rows || newFirst.cols !== first.cols;
      } else {
        newFirst = calculateFirst(index, numToleratedItems);
        horizontal ? scrollTo(calculateCoord(newFirst, itemSize, contentPos.left), 0) : scrollTo(0, calculateCoord(newFirst, itemSize, contentPos.top));
        isRangeChanged = newFirst !== first;
      }
      this.isRangeChanged = isRangeChanged;
      this.first = newFirst;
    },
    scrollInView(index, to, behavior = "auto") {
      if (to) {
        const both = this.isBoth();
        const horizontal = this.isHorizontal();
        const { first, viewport } = this.getRenderedRange();
        const scrollTo = (left = 0, top = 0) => this.scrollTo({ left, top, behavior });
        const isToStart = to === "to-start";
        const isToEnd = to === "to-end";
        if (isToStart) {
          if (both) {
            if (viewport.first.rows - first.rows > index[0]) {
              scrollTo(viewport.first.cols * this.itemSize[1], (viewport.first.rows - 1) * this.itemSize[0]);
            } else if (viewport.first.cols - first.cols > index[1]) {
              scrollTo((viewport.first.cols - 1) * this.itemSize[1], viewport.first.rows * this.itemSize[0]);
            }
          } else {
            if (viewport.first - first > index) {
              const pos = (viewport.first - 1) * this.itemSize;
              horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
            }
          }
        } else if (isToEnd) {
          if (both) {
            if (viewport.last.rows - first.rows <= index[0] + 1) {
              scrollTo(viewport.first.cols * this.itemSize[1], (viewport.first.rows + 1) * this.itemSize[0]);
            } else if (viewport.last.cols - first.cols <= index[1] + 1) {
              scrollTo((viewport.first.cols + 1) * this.itemSize[1], viewport.first.rows * this.itemSize[0]);
            }
          } else {
            if (viewport.last - first <= index + 1) {
              const pos = (viewport.first + 1) * this.itemSize;
              horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
            }
          }
        }
      } else {
        this.scrollToIndex(index, behavior);
      }
    },
    getRenderedRange() {
      const calculateFirstInViewport = (_pos, _size) => Math.floor(_pos / (_size || _pos));
      let firstInViewport = this.first;
      let lastInViewport = 0;
      if (this.element) {
        const both = this.isBoth();
        const horizontal = this.isHorizontal();
        const { scrollTop, scrollLeft } = this.element.scrollTop;
        if (both) {
          firstInViewport = { rows: calculateFirstInViewport(scrollTop, this.itemSize[0]), cols: calculateFirstInViewport(scrollLeft, this.itemSize[1]) };
          lastInViewport = { rows: firstInViewport.rows + this.numItemsInViewport.rows, cols: firstInViewport.cols + this.numItemsInViewport.cols };
        } else {
          const scrollPos = horizontal ? scrollLeft : scrollTop;
          firstInViewport = calculateFirstInViewport(scrollPos, this.itemSize);
          lastInViewport = firstInViewport + this.numItemsInViewport;
        }
      }
      return {
        first: this.first,
        last: this.last,
        viewport: {
          first: firstInViewport,
          last: lastInViewport
        }
      };
    },
    calculateNumItems() {
      const both = this.isBoth();
      const horizontal = this.isHorizontal();
      const itemSize = this.itemSize;
      const contentPos = this.getContentPosition();
      const contentWidth = this.element ? this.element.offsetWidth - contentPos.left : 0;
      const contentHeight = this.element ? this.element.offsetHeight - contentPos.top : 0;
      const calculateNumItemsInViewport = (_contentSize, _itemSize) => Math.ceil(_contentSize / (_itemSize || _contentSize));
      const calculateNumToleratedItems = (_numItems) => Math.ceil(_numItems / 2);
      const numItemsInViewport = both ? { rows: calculateNumItemsInViewport(contentHeight, itemSize[0]), cols: calculateNumItemsInViewport(contentWidth, itemSize[1]) } : calculateNumItemsInViewport(horizontal ? contentWidth : contentHeight, itemSize);
      const numToleratedItems = this.d_numToleratedItems || (both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
      return { numItemsInViewport, numToleratedItems };
    },
    calculateOptions() {
      const both = this.isBoth();
      const first = this.first;
      const { numItemsInViewport, numToleratedItems } = this.calculateNumItems();
      const calculateLast = (_first, _num, _numT, _isCols = false) => this.getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
      const last = both ? { rows: calculateLast(first.rows, numItemsInViewport.rows, numToleratedItems[0]), cols: calculateLast(first.cols, numItemsInViewport.cols, numToleratedItems[1], true) } : calculateLast(first, numItemsInViewport, numToleratedItems);
      this.last = last;
      this.numItemsInViewport = numItemsInViewport;
      this.d_numToleratedItems = numToleratedItems;
      this.$emit("update:numToleratedItems", this.d_numToleratedItems);
      if (this.showLoader) {
        this.loaderArr = both ? Array.from({ length: numItemsInViewport.rows }).map(() => Array.from({ length: numItemsInViewport.cols })) : Array.from({ length: numItemsInViewport });
      }
      if (this.lazy) {
        Promise.resolve().then(() => {
          this.lazyLoadState = {
            first: this.step ? both ? { rows: 0, cols: first.cols } : 0 : first,
            last: Math.min(this.step ? this.step : last, this.items.length)
          };
          this.$emit("lazy-load", this.lazyLoadState);
        });
      }
    },
    calculateAutoSize() {
      if (this.autoSize && !this.d_loading) {
        Promise.resolve().then(() => {
          if (this.content) {
            const both = this.isBoth();
            const horizontal = this.isHorizontal();
            const vertical = this.isVertical();
            this.content.style.minHeight = this.content.style.minWidth = "auto";
            this.content.style.position = "relative";
            this.element.style.contain = "none";
            const [contentWidth, contentHeight] = [DomHandler.getWidth(this.content), DomHandler.getHeight(this.content)];
            contentWidth !== this.defaultContentWidth && (this.element.style.width = "");
            contentHeight !== this.defaultContentHeight && (this.element.style.height = "");
            const [width, height] = [DomHandler.getWidth(this.element), DomHandler.getHeight(this.element)];
            (both || horizontal) && (this.element.style.width = width < this.defaultWidth ? width + "px" : this.scrollWidth || this.defaultWidth + "px");
            (both || vertical) && (this.element.style.height = height < this.defaultHeight ? height + "px" : this.scrollHeight || this.defaultHeight + "px");
            this.content.style.minHeight = this.content.style.minWidth = "";
            this.content.style.position = "";
            this.element.style.contain = "";
          }
        });
      }
    },
    getLast(last = 0, isCols) {
      return this.items ? Math.min(isCols ? (this.columns || this.items[0]).length : this.items.length, last) : 0;
    },
    getContentPosition() {
      if (this.content) {
        const style2 = getComputedStyle(this.content);
        const left = parseFloat(style2.paddingLeft) + Math.max(parseFloat(style2.left) || 0, 0);
        const right = parseFloat(style2.paddingRight) + Math.max(parseFloat(style2.right) || 0, 0);
        const top = parseFloat(style2.paddingTop) + Math.max(parseFloat(style2.top) || 0, 0);
        const bottom = parseFloat(style2.paddingBottom) + Math.max(parseFloat(style2.bottom) || 0, 0);
        return { left, right, top, bottom, x: left + right, y: top + bottom };
      }
      return { left: 0, right: 0, top: 0, bottom: 0, x: 0, y: 0 };
    },
    setSize() {
      if (this.element) {
        const both = this.isBoth();
        const horizontal = this.isHorizontal();
        const parentElement = this.element.parentElement;
        const width = this.scrollWidth || `${this.element.offsetWidth || parentElement.offsetWidth}px`;
        const height = this.scrollHeight || `${this.element.offsetHeight || parentElement.offsetHeight}px`;
        const setProp = (_name, _value) => this.element.style[_name] = _value;
        if (both || horizontal) {
          setProp("height", height);
          setProp("width", width);
        } else {
          setProp("height", height);
        }
      }
    },
    setSpacerSize() {
      const items = this.items;
      if (items) {
        const both = this.isBoth();
        const horizontal = this.isHorizontal();
        const contentPos = this.getContentPosition();
        const setProp = (_name, _value, _size, _cpos = 0) => this.spacerStyle = { ...this.spacerStyle, ...{ [`${_name}`]: (_value || []).length * _size + _cpos + "px" } };
        if (both) {
          setProp("height", items, this.itemSize[0], contentPos.y);
          setProp("width", this.columns || items[1], this.itemSize[1], contentPos.x);
        } else {
          horizontal ? setProp("width", this.columns || items, this.itemSize, contentPos.x) : setProp("height", items, this.itemSize, contentPos.y);
        }
      }
    },
    setContentPosition(pos) {
      if (this.content && !this.appendOnly) {
        const both = this.isBoth();
        const horizontal = this.isHorizontal();
        const first = pos ? pos.first : this.first;
        const calculateTranslateVal = (_first, _size) => _first * _size;
        const setTransform = (_x = 0, _y = 0) => this.contentStyle = { ...this.contentStyle, ...{ transform: `translate3d(${_x}px, ${_y}px, 0)` } };
        if (both) {
          setTransform(calculateTranslateVal(first.cols, this.itemSize[1]), calculateTranslateVal(first.rows, this.itemSize[0]));
        } else {
          const translateVal = calculateTranslateVal(first, this.itemSize);
          horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
        }
      }
    },
    onScrollPositionChange(event) {
      const target = event.target;
      const both = this.isBoth();
      const horizontal = this.isHorizontal();
      const contentPos = this.getContentPosition();
      const calculateScrollPos = (_pos, _cpos) => _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
      const calculateCurrentIndex = (_pos, _size) => Math.floor(_pos / (_size || _pos));
      const calculateTriggerIndex = (_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
        return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
      };
      const calculateFirst = (_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
        if (_currentIndex <= _numT)
          return 0;
        else
          return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
      };
      const calculateLast = (_currentIndex, _first, _last, _num, _numT, _isCols) => {
        let lastValue = _first + _num + 2 * _numT;
        if (_currentIndex >= _numT) {
          lastValue += _numT + 1;
        }
        return this.getLast(lastValue, _isCols);
      };
      const scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
      const scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
      let newFirst = both ? { rows: 0, cols: 0 } : 0;
      let newLast = this.last;
      let isRangeChanged = false;
      let newScrollPos = this.lastScrollPos;
      if (both) {
        const isScrollDown = this.lastScrollPos.top <= scrollTop;
        const isScrollRight = this.lastScrollPos.left <= scrollLeft;
        if (!this.appendOnly || this.appendOnly && (isScrollDown || isScrollRight)) {
          const currentIndex = { rows: calculateCurrentIndex(scrollTop, this.itemSize[0]), cols: calculateCurrentIndex(scrollLeft, this.itemSize[1]) };
          const triggerIndex = {
            rows: calculateTriggerIndex(currentIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
            cols: calculateTriggerIndex(currentIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
          };
          newFirst = {
            rows: calculateFirst(currentIndex.rows, triggerIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
            cols: calculateFirst(currentIndex.cols, triggerIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
          };
          newLast = {
            rows: calculateLast(currentIndex.rows, newFirst.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
            cols: calculateLast(currentIndex.cols, newFirst.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], true)
          };
          isRangeChanged = newFirst.rows !== this.first.rows || newLast.rows !== this.last.rows || newFirst.cols !== this.first.cols || newLast.cols !== this.last.cols || this.isRangeChanged;
          newScrollPos = { top: scrollTop, left: scrollLeft };
        }
      } else {
        const scrollPos = horizontal ? scrollLeft : scrollTop;
        const isScrollDownOrRight = this.lastScrollPos <= scrollPos;
        if (!this.appendOnly || this.appendOnly && isScrollDownOrRight) {
          const currentIndex = calculateCurrentIndex(scrollPos, this.itemSize);
          const triggerIndex = calculateTriggerIndex(currentIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
          newFirst = calculateFirst(currentIndex, triggerIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
          newLast = calculateLast(currentIndex, newFirst, this.last, this.numItemsInViewport, this.d_numToleratedItems);
          isRangeChanged = newFirst !== this.first || newLast !== this.last || this.isRangeChanged;
          newScrollPos = scrollPos;
        }
      }
      return {
        first: newFirst,
        last: newLast,
        isRangeChanged,
        scrollPos: newScrollPos
      };
    },
    onScrollChange(event) {
      const { first, last, isRangeChanged, scrollPos } = this.onScrollPositionChange(event);
      if (isRangeChanged) {
        const newState = { first, last };
        this.setContentPosition(newState);
        this.first = first;
        this.last = last;
        this.lastScrollPos = scrollPos;
        this.$emit("scroll-index-change", newState);
        if (this.lazy && this.isPageChanged(first)) {
          const lazyLoadState = {
            first: this.step ? Math.min(this.getPageByFirst(first) * this.step, this.items.length - this.step) : first,
            last: Math.min(this.step ? (this.getPageByFirst(first) + 1) * this.step : last, this.items.length)
          };
          const isLazyStateChanged = this.lazyLoadState.first !== lazyLoadState.first || this.lazyLoadState.last !== lazyLoadState.last;
          isLazyStateChanged && this.$emit("lazy-load", lazyLoadState);
          this.lazyLoadState = lazyLoadState;
        }
      }
    },
    onScroll(event) {
      this.$emit("scroll", event);
      if (this.delay && this.isPageChanged()) {
        if (this.scrollTimeout) {
          clearTimeout(this.scrollTimeout);
        }
        if (!this.d_loading && this.showLoader) {
          const { isRangeChanged } = this.onScrollPositionChange(event);
          const changed = isRangeChanged || (this.step ? this.isPageChanged() : false);
          changed && (this.d_loading = true);
        }
        this.scrollTimeout = setTimeout(() => {
          this.onScrollChange(event);
          if (this.d_loading && this.showLoader && (!this.lazy || this.loading === void 0)) {
            this.d_loading = false;
            this.page = this.getPageByFirst();
          }
        }, this.delay);
      } else {
        this.onScrollChange(event);
      }
    },
    onResize() {
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }
      this.resizeTimeout = setTimeout(() => {
        if (DomHandler.isVisible(this.element)) {
          const both = this.isBoth();
          const vertical = this.isVertical();
          const horizontal = this.isHorizontal();
          const [width, height] = [DomHandler.getWidth(this.element), DomHandler.getHeight(this.element)];
          const [isDiffWidth, isDiffHeight] = [width !== this.defaultWidth, height !== this.defaultHeight];
          const reinit = both ? isDiffWidth || isDiffHeight : horizontal ? isDiffWidth : vertical ? isDiffHeight : false;
          if (reinit) {
            this.d_numToleratedItems = this.numToleratedItems;
            this.defaultWidth = width;
            this.defaultHeight = height;
            this.defaultContentWidth = DomHandler.getWidth(this.content);
            this.defaultContentHeight = DomHandler.getHeight(this.content);
            this.init();
          }
        }
      }, this.resizeDelay);
    },
    bindResizeListener() {
      if (!this.resizeListener) {
        this.resizeListener = this.onResize.bind(this);
        window.addEventListener("resize", this.resizeListener);
        window.addEventListener("orientationchange", this.resizeListener);
      }
    },
    unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener("resize", this.resizeListener);
        window.removeEventListener("orientationchange", this.resizeListener);
        this.resizeListener = null;
      }
    },
    getOptions(renderedIndex) {
      const count = (this.items || []).length;
      const index = this.isBoth() ? this.first.rows + renderedIndex : this.first + renderedIndex;
      return {
        index,
        count,
        first: index === 0,
        last: index === count - 1,
        even: index % 2 === 0,
        odd: index % 2 !== 0
      };
    },
    getLoaderOptions(index, extOptions) {
      let count = this.loaderArr.length;
      return {
        index,
        count,
        first: index === 0,
        last: index === count - 1,
        even: index % 2 === 0,
        odd: index % 2 !== 0,
        ...extOptions
      };
    },
    getPageByFirst(first) {
      return Math.floor(((first ?? this.first) + this.d_numToleratedItems * 4) / (this.step || 1));
    },
    isPageChanged(first) {
      return this.step ? this.page !== this.getPageByFirst(first ?? this.first) : true;
    },
    setContentEl(el) {
      this.content = el || this.content || DomHandler.findSingle(this.element, ".p-virtualscroller-content");
    },
    elementRef(el) {
      this.element = el;
    },
    contentRef(el) {
      this.content = el;
    }
  },
  computed: {
    containerClass() {
      return [
        "p-virtualscroller",
        {
          "p-virtualscroller-inline": this.inline,
          "p-virtualscroller-both p-both-scroll": this.isBoth(),
          "p-virtualscroller-horizontal p-horizontal-scroll": this.isHorizontal()
        },
        this.class
      ];
    },
    contentClass() {
      return [
        "p-virtualscroller-content",
        {
          "p-virtualscroller-loading": this.d_loading
        }
      ];
    },
    loaderClass() {
      return [
        "p-virtualscroller-loader",
        {
          "p-component-overlay": !this.$slots.loader
        }
      ];
    },
    loadedItems() {
      if (this.items && !this.d_loading) {
        if (this.isBoth())
          return this.items.slice(this.appendOnly ? 0 : this.first.rows, this.last.rows).map((item) => this.columns ? item : item.slice(this.appendOnly ? 0 : this.first.cols, this.last.cols));
        else if (this.isHorizontal() && this.columns)
          return this.items;
        else
          return this.items.slice(this.appendOnly ? 0 : this.first, this.last);
      }
      return [];
    },
    loadedRows() {
      return this.d_loading ? this.loaderDisabled ? this.loaderArr : [] : this.loadedItems;
    },
    loadedColumns() {
      if (this.columns) {
        const both = this.isBoth();
        const horizontal = this.isHorizontal();
        if (both || horizontal) {
          return this.d_loading && this.loaderDisabled ? both ? this.loaderArr[0] : this.loaderArr : this.columns.slice(both ? this.first.cols : this.first, both ? this.last.cols : this.last);
        }
      }
      return this.columns;
    }
  },
  components: {
    SpinnerIcon: script$y
  }
};
const _hoisted_1$d = ["tabindex"];
function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  return !$props.disabled ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    ref: $options.elementRef,
    class: $options.containerClass,
    tabindex: $props.tabindex,
    style: $props.style,
    onScroll: _cache[0] || (_cache[0] = (...args) => $options.onScroll && $options.onScroll(...args))
  }, _ctx.ptm("root")), [
    renderSlot(_ctx.$slots, "content", {
      styleClass: $options.contentClass,
      items: $options.loadedItems,
      getItemOptions: $options.getOptions,
      loading: $data.d_loading,
      getLoaderOptions: $options.getLoaderOptions,
      itemSize: $props.itemSize,
      rows: $options.loadedRows,
      columns: $options.loadedColumns,
      contentRef: $options.contentRef,
      spacerStyle: $data.spacerStyle,
      contentStyle: $data.contentStyle,
      vertical: $options.isVertical(),
      horizontal: $options.isHorizontal(),
      both: $options.isBoth()
    }, () => [
      createElementVNode("div", mergeProps({
        ref: $options.contentRef,
        class: $options.contentClass,
        style: $data.contentStyle
      }, _ctx.ptm("content")), [
        (openBlock(true), createElementBlock(Fragment$1, null, renderList($options.loadedItems, (item, index) => {
          return renderSlot(_ctx.$slots, "item", {
            key: index,
            item,
            options: $options.getOptions(index)
          });
        }), 128))
      ], 16)
    ]),
    $props.showSpacer ? (openBlock(), createElementBlock("div", mergeProps({
      key: 0,
      class: "p-virtualscroller-spacer",
      style: $data.spacerStyle
    }, _ctx.ptm("spacer")), null, 16)) : createCommentVNode("", true),
    !$props.loaderDisabled && $props.showLoader && $data.d_loading ? (openBlock(), createElementBlock("div", mergeProps({
      key: 1,
      class: $options.loaderClass
    }, _ctx.ptm("loader")), [
      _ctx.$slots && _ctx.$slots.loader ? (openBlock(true), createElementBlock(Fragment$1, { key: 0 }, renderList($data.loaderArr, (_, index) => {
        return renderSlot(_ctx.$slots, "loader", {
          key: index,
          options: $options.getLoaderOptions(index, $options.isBoth() && { numCols: _ctx.d_numItemsInViewport.cols })
        });
      }), 128)) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "loadingicon", {}, () => [
        createVNode(_component_SpinnerIcon, mergeProps({
          spin: "",
          class: "p-virtualscroller-loading-icon"
        }, _ctx.ptm("loadingIcon")), null, 16)
      ])
    ], 16)) : createCommentVNode("", true)
  ], 16, _hoisted_1$d)) : (openBlock(), createElementBlock(Fragment$1, { key: 1 }, [
    renderSlot(_ctx.$slots, "default"),
    renderSlot(_ctx.$slots, "content", {
      items: $props.items,
      rows: $props.items,
      columns: $options.loadedColumns
    })
  ], 64));
}
function styleInject$7(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style2 = document.createElement("style");
  style2.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style2, head.firstChild);
    } else {
      head.appendChild(style2);
    }
  } else {
    head.appendChild(style2);
  }
  if (style2.styleSheet) {
    style2.styleSheet.cssText = css;
  } else {
    style2.appendChild(document.createTextNode(css));
  }
}
var css_248z$7 = "\n.p-virtualscroller {\n    position: relative;\n    overflow: auto;\n    contain: strict;\n    transform: translateZ(0);\n    will-change: scroll-position;\n    outline: 0 none;\n}\n.p-virtualscroller-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    /* contain: content; */\n    min-height: 100%;\n    min-width: 100%;\n    will-change: transform;\n}\n.p-virtualscroller-spacer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1px;\n    width: 1px;\n    transform-origin: 0 0;\n    pointer-events: none;\n}\n.p-virtualscroller .p-virtualscroller-loader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n.p-virtualscroller-loader.p-component-overlay {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.p-virtualscroller-loading-icon {\n    font-size: 2rem;\n}\n.p-virtualscroller-loading-icon.p-icon {\n    width: 2rem;\n    height: 2rem;\n}\n.p-virtualscroller-horizontal > .p-virtualscroller-content {\n    display: flex;\n}\n\n/* Inline */\n.p-virtualscroller-inline .p-virtualscroller-content {\n    position: static;\n}\n";
styleInject$7(css_248z$7);
script$e.render = render$e;
var script$d = {
  name: "Dropdown",
  extends: script$A,
  emits: ["update:modelValue", "change", "focus", "blur", "before-show", "before-hide", "show", "hide", "filter"],
  props: {
    modelValue: null,
    options: Array,
    optionLabel: null,
    optionValue: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    scrollHeight: {
      type: String,
      default: "200px"
    },
    filter: Boolean,
    filterPlaceholder: String,
    filterLocale: String,
    filterMatchMode: {
      type: String,
      default: "contains"
    },
    filterFields: {
      type: Array,
      default: null
    },
    editable: Boolean,
    placeholder: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dataKey: null,
    showClear: {
      type: Boolean,
      default: false
    },
    inputId: {
      type: String,
      default: null
    },
    inputClass: {
      type: [String, Object],
      default: null
    },
    inputStyle: {
      type: Object,
      default: null
    },
    inputProps: {
      type: null,
      default: null
    },
    panelClass: {
      type: [String, Object],
      default: null
    },
    panelStyle: {
      type: Object,
      default: null
    },
    panelProps: {
      type: null,
      default: null
    },
    filterInputProps: {
      type: null,
      default: null
    },
    clearIconProps: {
      type: null,
      default: null
    },
    appendTo: {
      type: String,
      default: "body"
    },
    loading: {
      type: Boolean,
      default: false
    },
    clearIcon: {
      type: String,
      default: void 0
    },
    dropdownIcon: {
      type: String,
      default: void 0
    },
    filterIcon: {
      type: String,
      default: void 0
    },
    loadingIcon: {
      type: String,
      default: void 0
    },
    resetFilterOnHide: {
      type: Boolean,
      default: false
    },
    virtualScrollerOptions: {
      type: Object,
      default: null
    },
    autoOptionFocus: {
      type: Boolean,
      default: true
    },
    autoFilterFocus: {
      type: Boolean,
      default: false
    },
    selectOnFocus: {
      type: Boolean,
      default: false
    },
    filterMessage: {
      type: String,
      default: null
    },
    selectionMessage: {
      type: String,
      default: null
    },
    emptySelectionMessage: {
      type: String,
      default: null
    },
    emptyFilterMessage: {
      type: String,
      default: null
    },
    emptyMessage: {
      type: String,
      default: null
    },
    tabindex: {
      type: Number,
      default: 0
    },
    "aria-label": {
      type: String,
      default: null
    },
    "aria-labelledby": {
      type: String,
      default: null
    }
  },
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  overlay: null,
  list: null,
  virtualScroller: null,
  searchTimeout: null,
  searchValue: null,
  isModelValueChanged: false,
  focusOnHover: false,
  data() {
    return {
      id: this.$attrs.id,
      focused: false,
      focusedOptionIndex: -1,
      filterValue: null,
      overlayVisible: false
    };
  },
  watch: {
    "$attrs.id": function(newValue) {
      this.id = newValue || UniqueComponentId();
    },
    modelValue() {
      this.isModelValueChanged = true;
    },
    options() {
      this.autoUpdateModel();
    }
  },
  mounted() {
    this.id = this.id || UniqueComponentId();
    this.autoUpdateModel();
  },
  updated() {
    if (this.overlayVisible && this.isModelValueChanged) {
      this.scrollInView(this.findSelectedOptionIndex());
    }
    this.isModelValueChanged = false;
  },
  beforeUnmount() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.overlay) {
      ZIndexUtils.clear(this.overlay);
      this.overlay = null;
    }
  },
  methods: {
    getOptionIndex(index, fn) {
      return this.virtualScrollerDisabled ? index : fn && fn(index)["index"];
    },
    getOptionLabel(option) {
      return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
    },
    getOptionValue(option) {
      return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
    },
    getOptionRenderKey(option, index) {
      return (this.dataKey ? ObjectUtils.resolveFieldData(option, this.dataKey) : this.getOptionLabel(option)) + "_" + index;
    },
    getPTOptions(option, itemOptions, index, key) {
      return this.ptm(key, {
        context: {
          selected: this.isSelected(option),
          focused: this.focusedOptionIndex === this.getOptionIndex(index, itemOptions),
          disabled: this.isOptionDisabled(option)
        }
      });
    },
    isOptionDisabled(option) {
      return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
    },
    isOptionGroup(option) {
      return this.optionGroupLabel && option.optionGroup && option.group;
    },
    getOptionGroupLabel(optionGroup) {
      return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel);
    },
    getOptionGroupChildren(optionGroup) {
      return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren);
    },
    getAriaPosInset(index) {
      return (this.optionGroupLabel ? index - this.visibleOptions.slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
    },
    show(isFocus) {
      this.$emit("before-show");
      this.overlayVisible = true;
      this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      isFocus && DomHandler.focus(this.$refs.focusInput);
    },
    hide(isFocus) {
      const _hide = () => {
        this.$emit("before-hide");
        this.overlayVisible = false;
        this.focusedOptionIndex = -1;
        this.searchValue = "";
        this.resetFilterOnHide && (this.filterValue = null);
        isFocus && DomHandler.focus(this.$refs.focusInput);
      };
      setTimeout(() => {
        _hide();
      }, 0);
    },
    onFocus(event) {
      if (this.disabled) {
        return;
      }
      this.focused = true;
      this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      this.overlayVisible && this.scrollInView(this.focusedOptionIndex);
      this.$emit("focus", event);
    },
    onBlur(event) {
      this.focused = false;
      this.focusedOptionIndex = -1;
      this.searchValue = "";
      this.$emit("blur", event);
    },
    onKeyDown(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      const metaKey = event.metaKey || event.ctrlKey;
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event, this.editable);
          break;
        case "ArrowLeft":
        case "ArrowRight":
          this.onArrowLeftKey(event, this.editable);
          break;
        case "Home":
          this.onHomeKey(event, this.editable);
          break;
        case "End":
          this.onEndKey(event, this.editable);
          break;
        case "PageDown":
          this.onPageDownKey(event);
          break;
        case "PageUp":
          this.onPageUpKey(event);
          break;
        case "Space":
          this.onSpaceKey(event, this.editable);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(event);
          break;
        case "Escape":
          this.onEscapeKey(event);
          break;
        case "Tab":
          this.onTabKey(event);
          break;
        case "Backspace":
          this.onBackspaceKey(event, this.editable);
          break;
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
            !this.overlayVisible && this.show();
            !this.editable && this.searchOptions(event, event.key);
          }
          break;
      }
    },
    onEditableInput(event) {
      const value = event.target.value;
      this.searchValue = "";
      const matched = this.searchOptions(event, value);
      !matched && (this.focusedOptionIndex = -1);
      this.updateModel(event, value);
    },
    onContainerClick(event) {
      if (this.disabled || this.loading) {
        return;
      }
      if (DomHandler.hasClass(event.target, "p-dropdown-clear-icon") || event.target.tagName === "INPUT") {
        return;
      } else if (!this.overlay || !this.overlay.contains(event.target)) {
        this.overlayVisible ? this.hide(true) : this.show(true);
      }
    },
    onClearClick(event) {
      this.updateModel(event, null);
    },
    onFirstHiddenFocus(event) {
      const focusableEl = event.relatedTarget === this.$refs.focusInput ? DomHandler.getFirstFocusableElement(this.overlay, ":not(.p-hidden-focusable)") : this.$refs.focusInput;
      DomHandler.focus(focusableEl);
    },
    onLastHiddenFocus(event) {
      const focusableEl = event.relatedTarget === this.$refs.focusInput ? DomHandler.getLastFocusableElement(this.overlay, ":not(.p-hidden-focusable)") : this.$refs.focusInput;
      DomHandler.focus(focusableEl);
    },
    onOptionSelect(event, option, isHide = true) {
      const value = this.getOptionValue(option);
      this.updateModel(event, value);
      isHide && this.hide(true);
    },
    onOptionMouseMove(event, index) {
      if (this.focusOnHover) {
        this.changeFocusedOptionIndex(event, index);
      }
    },
    onFilterChange(event) {
      const value = event.target.value;
      this.filterValue = value;
      this.focusedOptionIndex = -1;
      this.$emit("filter", { originalEvent: event, value });
      !this.virtualScrollerDisabled && this.virtualScroller.scrollToIndex(0);
    },
    onFilterKeyDown(event) {
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event, true);
          break;
        case "ArrowLeft":
        case "ArrowRight":
          this.onArrowLeftKey(event, true);
          break;
        case "Home":
          this.onHomeKey(event, true);
          break;
        case "End":
          this.onEndKey(event, true);
          break;
        case "Enter":
          this.onEnterKey(event);
          break;
        case "Escape":
          this.onEscapeKey(event);
          break;
        case "Tab":
          this.onTabKey(event, true);
          break;
      }
    },
    onFilterBlur() {
      this.focusedOptionIndex = -1;
    },
    onFilterUpdated() {
      if (this.overlayVisible) {
        this.alignOverlay();
      }
    },
    onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.$el
      });
    },
    onOverlayKeyDown(event) {
      switch (event.code) {
        case "Escape":
          this.onEscapeKey(event);
          break;
      }
    },
    onArrowDownKey(event) {
      const optionIndex = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.findFirstFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
      event.preventDefault();
    },
    onArrowUpKey(event, pressedInInputText = false) {
      if (event.altKey && !pressedInInputText) {
        if (this.focusedOptionIndex !== -1) {
          this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
        }
        this.overlayVisible && this.hide();
        event.preventDefault();
      } else {
        const optionIndex = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.findLastFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
        event.preventDefault();
      }
    },
    onArrowLeftKey(event, pressedInInputText = false) {
      pressedInInputText && (this.focusedOptionIndex = -1);
    },
    onHomeKey(event, pressedInInputText = false) {
      if (pressedInInputText) {
        event.currentTarget.setSelectionRange(0, 0);
        this.focusedOptionIndex = -1;
      } else {
        this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
        !this.overlayVisible && this.show();
      }
      event.preventDefault();
    },
    onEndKey(event, pressedInInputText = false) {
      if (pressedInInputText) {
        const target = event.currentTarget;
        const len = target.value.length;
        target.setSelectionRange(len, len);
        this.focusedOptionIndex = -1;
      } else {
        this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
        !this.overlayVisible && this.show();
      }
      event.preventDefault();
    },
    onPageUpKey(event) {
      this.scrollInView(0);
      event.preventDefault();
    },
    onPageDownKey(event) {
      this.scrollInView(this.visibleOptions.length - 1);
      event.preventDefault();
    },
    onEnterKey(event) {
      if (!this.overlayVisible) {
        this.onArrowDownKey(event);
      } else {
        if (this.focusedOptionIndex !== -1) {
          this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
        }
        this.hide();
      }
      event.preventDefault();
    },
    onSpaceKey(event, pressedInInputText = false) {
      !pressedInInputText && this.onEnterKey(event);
    },
    onEscapeKey(event) {
      this.overlayVisible && this.hide(true);
      event.preventDefault();
    },
    onTabKey(event, pressedInInputText = false) {
      if (!pressedInInputText) {
        if (this.overlayVisible && this.hasFocusableElements()) {
          DomHandler.focus(this.$refs.firstHiddenFocusableElementOnOverlay);
          event.preventDefault();
        } else {
          if (this.focusedOptionIndex !== -1) {
            this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
          }
          this.overlayVisible && this.hide(this.filter);
        }
      }
    },
    onBackspaceKey(event, pressedInInputText = false) {
      if (pressedInInputText) {
        !this.overlayVisible && this.show();
      }
    },
    onOverlayEnter(el) {
      ZIndexUtils.set("overlay", el, this.$primevue.config.zIndex.overlay);
      this.alignOverlay();
      this.scrollInView();
      this.autoFilterFocus && DomHandler.focus(this.$refs.filterInput);
    },
    onOverlayAfterEnter() {
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.$emit("show");
    },
    onOverlayLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.$emit("hide");
      this.overlay = null;
    },
    onOverlayAfterLeave(el) {
      ZIndexUtils.clear(el);
    },
    alignOverlay() {
      if (this.appendTo === "self") {
        DomHandler.relativePosition(this.overlay, this.$el);
      } else {
        this.overlay.style.minWidth = DomHandler.getOuterWidth(this.$el) + "px";
        DomHandler.absolutePosition(this.overlay, this.$el);
      }
    },
    bindOutsideClickListener() {
      if (!this.outsideClickListener) {
        this.outsideClickListener = (event) => {
          if (this.overlayVisible && this.overlay && !this.$el.contains(event.target) && !this.overlay.contains(event.target)) {
            this.hide();
          }
        };
        document.addEventListener("click", this.outsideClickListener);
      }
    },
    unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    bindScrollListener() {
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, () => {
          if (this.overlayVisible) {
            this.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener() {
      if (!this.resizeListener) {
        this.resizeListener = () => {
          if (this.overlayVisible && !DomHandler.isTouchDevice()) {
            this.hide();
          }
        };
        window.addEventListener("resize", this.resizeListener);
      }
    },
    unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    },
    hasFocusableElements() {
      return DomHandler.getFocusableElements(this.overlay, ":not(.p-hidden-focusable)").length > 0;
    },
    isOptionMatched(option) {
      return this.isValidOption(option) && this.getOptionLabel(option).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
    },
    isValidOption(option) {
      return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
    },
    isValidSelectedOption(option) {
      return this.isValidOption(option) && this.isSelected(option);
    },
    isSelected(option) {
      return this.isValidOption(option) && ObjectUtils.equals(this.modelValue, this.getOptionValue(option), this.equalityKey);
    },
    findFirstOptionIndex() {
      return this.visibleOptions.findIndex((option) => this.isValidOption(option));
    },
    findLastOptionIndex() {
      return ObjectUtils.findLastIndex(this.visibleOptions, (option) => this.isValidOption(option));
    },
    findNextOptionIndex(index) {
      const matchedOptionIndex = index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    },
    findPrevOptionIndex(index) {
      const matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions.slice(0, index), (option) => this.isValidOption(option)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    },
    findSelectedOptionIndex() {
      return this.hasSelectedOption ? this.visibleOptions.findIndex((option) => this.isValidSelectedOption(option)) : -1;
    },
    findFirstFocusedOptionIndex() {
      const selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    },
    findLastFocusedOptionIndex() {
      const selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    },
    searchOptions(event, char) {
      this.searchValue = (this.searchValue || "") + char;
      let optionIndex = -1;
      let matched = false;
      if (this.focusedOptionIndex !== -1) {
        optionIndex = this.visibleOptions.slice(this.focusedOptionIndex).findIndex((option) => this.isOptionMatched(option));
        optionIndex = optionIndex === -1 ? this.visibleOptions.slice(0, this.focusedOptionIndex).findIndex((option) => this.isOptionMatched(option)) : optionIndex + this.focusedOptionIndex;
      } else {
        optionIndex = this.visibleOptions.findIndex((option) => this.isOptionMatched(option));
      }
      if (optionIndex !== -1) {
        matched = true;
      }
      if (optionIndex === -1 && this.focusedOptionIndex === -1) {
        optionIndex = this.findFirstFocusedOptionIndex();
      }
      if (optionIndex !== -1) {
        this.changeFocusedOptionIndex(event, optionIndex);
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(() => {
        this.searchValue = "";
        this.searchTimeout = null;
      }, 500);
      return matched;
    },
    changeFocusedOptionIndex(event, index) {
      if (this.focusedOptionIndex !== index) {
        this.focusedOptionIndex = index;
        this.scrollInView();
        if (this.selectOnFocus) {
          this.onOptionSelect(event, this.visibleOptions[index], false);
        }
      }
    },
    scrollInView(index = -1) {
      const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
      const element = DomHandler.findSingle(this.list, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({ block: "nearest", inline: "start" });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(() => {
          this.virtualScroller && this.virtualScroller.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex);
        }, 0);
      }
    },
    autoUpdateModel() {
      if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption) {
        this.focusedOptionIndex = this.findFirstFocusedOptionIndex();
        this.onOptionSelect(null, this.visibleOptions[this.focusedOptionIndex], false);
      }
    },
    updateModel(event, value) {
      this.$emit("update:modelValue", value);
      this.$emit("change", { originalEvent: event, value });
    },
    flatOptions(options) {
      return (options || []).reduce((result, option, index) => {
        result.push({ optionGroup: option, group: true, index });
        const optionGroupChildren = this.getOptionGroupChildren(option);
        optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
        return result;
      }, []);
    },
    overlayRef(el) {
      this.overlay = el;
    },
    listRef(el, contentRef) {
      this.list = el;
      contentRef && contentRef(el);
    },
    virtualScrollerRef(el) {
      this.virtualScroller = el;
    }
  },
  computed: {
    containerClass() {
      return [
        "p-dropdown p-component p-inputwrapper",
        {
          "p-disabled": this.disabled,
          "p-dropdown-clearable": this.showClear && !this.disabled,
          "p-focus": this.focused,
          "p-inputwrapper-filled": this.hasSelectedOption,
          "p-inputwrapper-focus": this.focused || this.overlayVisible,
          "p-overlay-open": this.overlayVisible
        }
      ];
    },
    inputStyleClass() {
      return [
        "p-dropdown-label p-inputtext",
        this.inputClass,
        {
          "p-placeholder": !this.editable && this.label === this.placeholder,
          "p-dropdown-label-empty": !this.editable && !this.$slots["value"] && (this.label === "p-emptylabel" || this.label.length === 0)
        }
      ];
    },
    panelStyleClass() {
      return [
        "p-dropdown-panel p-component",
        this.panelClass,
        {
          "p-input-filled": this.$primevue.config.inputStyle === "filled",
          "p-ripple-disabled": this.$primevue.config.ripple === false
        }
      ];
    },
    visibleOptions() {
      const options = this.optionGroupLabel ? this.flatOptions(this.options) : this.options || [];
      if (this.filterValue) {
        const filteredOptions = FilterService.filter(options, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
        if (this.optionGroupLabel) {
          const optionGroups = this.options || [];
          const filtered = [];
          optionGroups.forEach((group) => {
            const groupChildren = this.getOptionGroupChildren(group);
            const filteredItems = groupChildren.filter((item) => filteredOptions.includes(item));
            if (filteredItems.length > 0)
              filtered.push({ ...group, [typeof this.optionGroupChildren === "string" ? this.optionGroupChildren : "items"]: [...filteredItems] });
          });
          return this.flatOptions(filtered);
        }
        return filteredOptions;
      }
      return options;
    },
    hasSelectedOption() {
      return ObjectUtils.isNotEmpty(this.modelValue);
    },
    label() {
      const selectedOptionIndex = this.findSelectedOptionIndex();
      return selectedOptionIndex !== -1 ? this.getOptionLabel(this.visibleOptions[selectedOptionIndex]) : this.placeholder || "p-emptylabel";
    },
    editableInputValue() {
      const selectedOptionIndex = this.findSelectedOptionIndex();
      return selectedOptionIndex !== -1 ? this.getOptionLabel(this.visibleOptions[selectedOptionIndex]) : this.modelValue || "";
    },
    equalityKey() {
      return this.optionValue ? null : this.dataKey;
    },
    searchFields() {
      return this.filterFields || [this.optionLabel];
    },
    filterResultMessageText() {
      return ObjectUtils.isNotEmpty(this.visibleOptions) ? this.filterMessageText.replaceAll("{0}", this.visibleOptions.length) : this.emptyFilterMessageText;
    },
    filterMessageText() {
      return this.filterMessage || this.$primevue.config.locale.searchMessage || "";
    },
    emptyFilterMessageText() {
      return this.emptyFilterMessage || this.$primevue.config.locale.emptySearchMessage || this.$primevue.config.locale.emptyFilterMessage || "";
    },
    emptyMessageText() {
      return this.emptyMessage || this.$primevue.config.locale.emptyMessage || "";
    },
    selectionMessageText() {
      return this.selectionMessage || this.$primevue.config.locale.selectionMessage || "";
    },
    emptySelectionMessageText() {
      return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || "";
    },
    selectedMessageText() {
      return this.hasSelectedOption ? this.selectionMessageText.replaceAll("{0}", "1") : this.emptySelectionMessageText;
    },
    focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? `${this.id}_${this.focusedOptionIndex}` : null;
    },
    ariaSetSize() {
      return this.visibleOptions.filter((option) => !this.isOptionGroup(option)).length;
    },
    virtualScrollerDisabled() {
      return !this.virtualScrollerOptions;
    }
  },
  directives: {
    ripple: Ripple
  },
  components: {
    VirtualScroller: script$e,
    Portal: script$i,
    TimesIcon: script$l,
    ChevronDownIcon: script$g,
    SpinnerIcon: script$y,
    FilterIcon: script$f
  }
};
const _hoisted_1$c = ["id"];
const _hoisted_2$7 = ["id", "value", "placeholder", "tabindex", "disabled", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant"];
const _hoisted_3$7 = ["id", "tabindex", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-disabled"];
const _hoisted_4$1 = ["value", "placeholder", "aria-owns", "aria-activedescendant"];
const _hoisted_5$1 = ["id"];
const _hoisted_6 = ["id"];
const _hoisted_7 = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove"];
function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  const _component_VirtualScroller = resolveComponent("VirtualScroller");
  const _component_Portal = resolveComponent("Portal");
  const _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    id: $data.id,
    class: $options.containerClass,
    onClick: _cache[15] || (_cache[15] = (...args) => $options.onContainerClick && $options.onContainerClick(...args))
  }, _ctx.ptm("root")), [
    $props.editable ? (openBlock(), createElementBlock("input", mergeProps({
      key: 0,
      ref: "focusInput",
      id: $props.inputId,
      type: "text",
      style: $props.inputStyle,
      class: $options.inputStyleClass,
      value: $options.editableInputValue,
      placeholder: $props.placeholder,
      tabindex: !$props.disabled ? $props.tabindex : -1,
      disabled: $props.disabled,
      autocomplete: "off",
      role: "combobox",
      "aria-label": _ctx.ariaLabel,
      "aria-labelledby": _ctx.ariaLabelledby,
      "aria-haspopup": "listbox",
      "aria-expanded": $data.overlayVisible,
      "aria-controls": $data.id + "_list",
      "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
      onFocus: _cache[0] || (_cache[0] = (...args) => $options.onFocus && $options.onFocus(...args)),
      onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
      onKeydown: _cache[2] || (_cache[2] = (...args) => $options.onKeyDown && $options.onKeyDown(...args)),
      onInput: _cache[3] || (_cache[3] = (...args) => $options.onEditableInput && $options.onEditableInput(...args))
    }, { ...$props.inputProps, ..._ctx.ptm("input") }), null, 16, _hoisted_2$7)) : (openBlock(), createElementBlock("span", mergeProps({
      key: 1,
      ref: "focusInput",
      id: $props.inputId,
      style: $props.inputStyle,
      class: $options.inputStyleClass,
      tabindex: !$props.disabled ? $props.tabindex : -1,
      role: "combobox",
      "aria-label": _ctx.ariaLabel || ($options.label === "p-emptylabel" ? void 0 : $options.label),
      "aria-labelledby": _ctx.ariaLabelledby,
      "aria-haspopup": "listbox",
      "aria-expanded": $data.overlayVisible,
      "aria-controls": $data.id + "_list",
      "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
      "aria-disabled": $props.disabled,
      onFocus: _cache[4] || (_cache[4] = (...args) => $options.onFocus && $options.onFocus(...args)),
      onBlur: _cache[5] || (_cache[5] = (...args) => $options.onBlur && $options.onBlur(...args)),
      onKeydown: _cache[6] || (_cache[6] = (...args) => $options.onKeyDown && $options.onKeyDown(...args))
    }, { ...$props.inputProps, ..._ctx.ptm("input") }), [
      renderSlot(_ctx.$slots, "value", {
        value: $props.modelValue,
        placeholder: $props.placeholder
      }, () => [
        createTextVNode(toDisplayString($options.label === "p-emptylabel" ? " " : $options.label || "empty"), 1)
      ])
    ], 16, _hoisted_3$7)),
    $props.showClear && $props.modelValue != null ? renderSlot(_ctx.$slots, "clearicon", {
      key: 2,
      onClick: $options.onClearClick
    }, () => [
      (openBlock(), createBlock(resolveDynamicComponent($props.clearIcon ? "i" : "TimesIcon"), mergeProps({
        class: ["p-dropdown-clear-icon", $props.clearIcon],
        onClick: $options.onClearClick
      }, { ...$props.clearIconProps, ..._ctx.ptm("clearIcon") }), null, 16, ["class", "onClick"]))
    ]) : createCommentVNode("", true),
    createElementVNode("div", mergeProps({ class: "p-dropdown-trigger" }, _ctx.ptm("trigger")), [
      $props.loading ? renderSlot(_ctx.$slots, "loadingicon", {
        key: 0,
        class: "p-dropdown-trigger-icon"
      }, () => [
        $props.loadingIcon ? (openBlock(), createElementBlock("span", mergeProps({
          key: 0,
          class: ["p-dropdown-trigger-icon pi-spin", $props.loadingIcon],
          "aria-hidden": "true"
        }, _ctx.ptm("loadingIcon")), null, 16)) : (openBlock(), createBlock(_component_SpinnerIcon, mergeProps({
          key: 1,
          class: "p-dropdown-trigger-icon",
          spin: "",
          "aria-hidden": "true"
        }, _ctx.ptm("loadingIcon")), null, 16))
      ]) : renderSlot(_ctx.$slots, "dropdownicon", {
        key: 1,
        class: "p-dropdown-trigger-icon"
      }, () => [
        (openBlock(), createBlock(resolveDynamicComponent($props.dropdownIcon ? "span" : "ChevronDownIcon"), mergeProps({
          class: ["p-dropdown-trigger-icon", $props.dropdownIcon],
          "aria-hidden": "true"
        }, _ctx.ptm("dropdownIcon")), null, 16, ["class"]))
      ])
    ], 16),
    createVNode(_component_Portal, { appendTo: $props.appendTo }, {
      default: withCtx(() => [
        createVNode(Transition, {
          name: "p-connected-overlay",
          onEnter: $options.onOverlayEnter,
          onAfterEnter: $options.onOverlayAfterEnter,
          onLeave: $options.onOverlayLeave,
          onAfterLeave: $options.onOverlayAfterLeave
        }, {
          default: withCtx(() => [
            $data.overlayVisible ? (openBlock(), createElementBlock("div", mergeProps({
              key: 0,
              ref: $options.overlayRef,
              style: $props.panelStyle,
              class: $options.panelStyleClass,
              onClick: _cache[13] || (_cache[13] = (...args) => $options.onOverlayClick && $options.onOverlayClick(...args)),
              onKeydown: _cache[14] || (_cache[14] = (...args) => $options.onOverlayKeyDown && $options.onOverlayKeyDown(...args))
            }, { ...$props.panelProps, ..._ctx.ptm("panel") }), [
              createElementVNode("span", mergeProps({
                ref: "firstHiddenFocusableElementOnOverlay",
                role: "presentation",
                "aria-hidden": "true",
                class: "p-hidden-accessible p-hidden-focusable",
                tabindex: 0,
                onFocus: _cache[7] || (_cache[7] = (...args) => $options.onFirstHiddenFocus && $options.onFirstHiddenFocus(...args))
              }, _ctx.ptm("hiddenFirstFocusableEl")), null, 16),
              renderSlot(_ctx.$slots, "header", {
                value: $props.modelValue,
                options: $options.visibleOptions
              }),
              $props.filter ? (openBlock(), createElementBlock("div", mergeProps({
                key: 0,
                class: "p-dropdown-header"
              }, _ctx.ptm("header")), [
                createElementVNode("div", mergeProps({ class: "p-dropdown-filter-container" }, _ctx.ptm("filterContainer")), [
                  createElementVNode("input", mergeProps({
                    ref: "filterInput",
                    type: "text",
                    value: $data.filterValue,
                    onVnodeMounted: _cache[8] || (_cache[8] = (...args) => $options.onFilterUpdated && $options.onFilterUpdated(...args)),
                    class: "p-dropdown-filter p-inputtext p-component",
                    placeholder: $props.filterPlaceholder,
                    role: "searchbox",
                    autocomplete: "off",
                    "aria-owns": $data.id + "_list",
                    "aria-activedescendant": $options.focusedOptionId,
                    onKeydown: _cache[9] || (_cache[9] = (...args) => $options.onFilterKeyDown && $options.onFilterKeyDown(...args)),
                    onBlur: _cache[10] || (_cache[10] = (...args) => $options.onFilterBlur && $options.onFilterBlur(...args)),
                    onInput: _cache[11] || (_cache[11] = (...args) => $options.onFilterChange && $options.onFilterChange(...args))
                  }, { ...$props.filterInputProps, ..._ctx.ptm("filterInput") }), null, 16, _hoisted_4$1),
                  renderSlot(_ctx.$slots, "filtericon", {}, () => [
                    (openBlock(), createBlock(resolveDynamicComponent($props.filterIcon ? "span" : "FilterIcon"), mergeProps({
                      class: ["p-dropdown-filter-icon", $props.filterIcon]
                    }, _ctx.ptm("filterIcon")), null, 16, ["class"]))
                  ])
                ], 16),
                createElementVNode("span", mergeProps({
                  role: "status",
                  "aria-live": "polite",
                  class: "p-hidden-accessible"
                }, _ctx.ptm("hiddenFilterResult")), toDisplayString($options.filterResultMessageText), 17)
              ], 16)) : createCommentVNode("", true),
              createElementVNode("div", mergeProps({
                class: "p-dropdown-items-wrapper",
                style: { "max-height": $options.virtualScrollerDisabled ? $props.scrollHeight : "" }
              }, _ctx.ptm("wrapper")), [
                createVNode(_component_VirtualScroller, mergeProps({ ref: $options.virtualScrollerRef }, { ...$props.virtualScrollerOptions, ..._ctx.ptm("virtualScroller") }, {
                  items: $options.visibleOptions,
                  style: { height: $props.scrollHeight },
                  tabindex: -1,
                  disabled: $options.virtualScrollerDisabled
                }), createSlots({
                  content: withCtx(({ styleClass, contentRef, items, getItemOptions, contentStyle, itemSize }) => [
                    createElementVNode("ul", mergeProps({
                      ref: (el) => $options.listRef(el, contentRef),
                      id: $data.id + "_list",
                      class: ["p-dropdown-items", styleClass],
                      style: contentStyle,
                      role: "listbox"
                    }, _ctx.ptm("list")), [
                      (openBlock(true), createElementBlock(Fragment$1, null, renderList(items, (option, i) => {
                        return openBlock(), createElementBlock(Fragment$1, {
                          key: $options.getOptionRenderKey(option, $options.getOptionIndex(i, getItemOptions))
                        }, [
                          $options.isOptionGroup(option) ? (openBlock(), createElementBlock("li", mergeProps({
                            key: 0,
                            id: $data.id + "_" + $options.getOptionIndex(i, getItemOptions),
                            style: { height: itemSize ? itemSize + "px" : void 0 },
                            class: "p-dropdown-item-group",
                            role: "option"
                          }, _ctx.ptm("itemGroup")), [
                            renderSlot(_ctx.$slots, "optiongroup", {
                              option: option.optionGroup,
                              index: $options.getOptionIndex(i, getItemOptions)
                            }, () => [
                              createTextVNode(toDisplayString($options.getOptionGroupLabel(option.optionGroup)), 1)
                            ])
                          ], 16, _hoisted_6)) : withDirectives((openBlock(), createElementBlock("li", mergeProps({
                            key: 1,
                            id: $data.id + "_" + $options.getOptionIndex(i, getItemOptions),
                            style: { height: itemSize ? itemSize + "px" : void 0 },
                            class: ["p-dropdown-item", { "p-highlight": $options.isSelected(option), "p-focus": $data.focusedOptionIndex === $options.getOptionIndex(i, getItemOptions), "p-disabled": $options.isOptionDisabled(option) }],
                            role: "option",
                            "aria-label": $options.getOptionLabel(option),
                            "aria-selected": $options.isSelected(option),
                            "aria-disabled": $options.isOptionDisabled(option),
                            "aria-setsize": $options.ariaSetSize,
                            "aria-posinset": $options.getAriaPosInset($options.getOptionIndex(i, getItemOptions)),
                            onClick: ($event) => $options.onOptionSelect($event, option),
                            onMousemove: ($event) => $options.onOptionMouseMove($event, $options.getOptionIndex(i, getItemOptions))
                          }, $options.getPTOptions(option, getItemOptions, i, "item")), [
                            renderSlot(_ctx.$slots, "option", {
                              option,
                              index: $options.getOptionIndex(i, getItemOptions)
                            }, () => [
                              createTextVNode(toDisplayString($options.getOptionLabel(option)), 1)
                            ])
                          ], 16, _hoisted_7)), [
                            [_directive_ripple]
                          ])
                        ], 64);
                      }), 128)),
                      $data.filterValue && (!items || items && items.length === 0) ? (openBlock(), createElementBlock("li", mergeProps({
                        key: 0,
                        class: "p-dropdown-empty-message",
                        role: "option"
                      }, _ctx.ptm("emptyMessage")), [
                        renderSlot(_ctx.$slots, "emptyfilter", {}, () => [
                          createTextVNode(toDisplayString($options.emptyFilterMessageText), 1)
                        ])
                      ], 16)) : !$props.options || $props.options && $props.options.length === 0 ? (openBlock(), createElementBlock("li", mergeProps({
                        key: 1,
                        class: "p-dropdown-empty-message",
                        role: "option"
                      }, _ctx.ptm("emptyMessage")), [
                        renderSlot(_ctx.$slots, "empty", {}, () => [
                          createTextVNode(toDisplayString($options.emptyMessageText), 1)
                        ])
                      ], 16)) : createCommentVNode("", true)
                    ], 16, _hoisted_5$1)
                  ]),
                  _: 2
                }, [
                  _ctx.$slots.loader ? {
                    name: "loader",
                    fn: withCtx(({ options }) => [
                      renderSlot(_ctx.$slots, "loader", { options })
                    ]),
                    key: "0"
                  } : void 0
                ]), 1040, ["items", "style", "disabled"])
              ], 16),
              renderSlot(_ctx.$slots, "footer", {
                value: $props.modelValue,
                options: $options.visibleOptions
              }),
              !$props.options || $props.options && $props.options.length === 0 ? (openBlock(), createElementBlock("span", mergeProps({
                key: 1,
                role: "status",
                "aria-live": "polite",
                class: "p-hidden-accessible"
              }, _ctx.ptm("emptyMessage")), toDisplayString($options.emptyMessageText), 17)) : createCommentVNode("", true),
              createElementVNode("span", mergeProps({
                role: "status",
                "aria-live": "polite",
                class: "p-hidden-accessible"
              }, _ctx.ptm("hiddenSelectedMessage")), toDisplayString($options.selectedMessageText), 17),
              createElementVNode("span", mergeProps({
                ref: "lastHiddenFocusableElementOnOverlay",
                role: "presentation",
                "aria-hidden": "true",
                class: "p-hidden-accessible p-hidden-focusable",
                tabindex: 0,
                onFocus: _cache[12] || (_cache[12] = (...args) => $options.onLastHiddenFocus && $options.onLastHiddenFocus(...args))
              }, _ctx.ptm("hiddenLastFocusableEl")), null, 16)
            ], 16)) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])
      ]),
      _: 3
    }, 8, ["appendTo"])
  ], 16, _hoisted_1$c);
}
function styleInject$6(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style2 = document.createElement("style");
  style2.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style2, head.firstChild);
    } else {
      head.appendChild(style2);
    }
  } else {
    head.appendChild(style2);
  }
  if (style2.styleSheet) {
    style2.styleSheet.cssText = css;
  } else {
    style2.appendChild(document.createTextNode(css));
  }
}
var css_248z$6 = "\n.p-dropdown {\n    display: inline-flex;\n    cursor: pointer;\n    position: relative;\n    user-select: none;\n}\n.p-dropdown-clear-icon {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n}\n.p-dropdown-trigger {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n}\n.p-dropdown-label {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    flex: 1 1 auto;\n    width: 1%;\n    text-overflow: ellipsis;\n    cursor: pointer;\n}\n.p-dropdown-label-empty {\n    overflow: hidden;\n    opacity: 0;\n}\ninput.p-dropdown-label {\n    cursor: default;\n}\n.p-dropdown .p-dropdown-panel {\n    min-width: 100%;\n}\n.p-dropdown-panel {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.p-dropdown-items-wrapper {\n    overflow: auto;\n}\n.p-dropdown-item {\n    cursor: pointer;\n    font-weight: normal;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n}\n.p-dropdown-item-group {\n    cursor: auto;\n}\n.p-dropdown-items {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n.p-dropdown-filter {\n    width: 100%;\n}\n.p-dropdown-filter-container {\n    position: relative;\n}\n.p-dropdown-filter-icon {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n}\n.p-fluid .p-dropdown {\n    display: flex;\n}\n.p-fluid .p-dropdown .p-dropdown-label {\n    width: 1%;\n}\n";
styleInject$6(css_248z$6);
script$d.render = render$d;
var script$c = {
  name: "DeferredContent",
  extends: script$A,
  emits: ["load"],
  data() {
    return {
      loaded: false
    };
  },
  mounted() {
    if (!this.loaded) {
      if (this.shouldLoad())
        this.load();
      else
        this.bindScrollListener();
    }
  },
  beforeUnmount() {
    this.unbindScrollListener();
  },
  methods: {
    bindScrollListener() {
      this.documentScrollListener = () => {
        if (this.shouldLoad()) {
          this.load();
          this.unbindScrollListener();
        }
      };
      window.addEventListener("scroll", this.documentScrollListener);
    },
    unbindScrollListener() {
      if (this.documentScrollListener) {
        window.removeEventListener("scroll", this.documentScrollListener);
        this.documentScrollListener = null;
      }
    },
    shouldLoad() {
      if (this.loaded) {
        return false;
      } else {
        const rect = this.$refs.container.getBoundingClientRect();
        const docElement = document.documentElement;
        const winHeight = docElement.clientHeight;
        return winHeight >= rect.top;
      }
    },
    load(event) {
      this.loaded = true;
      this.$emit("load", event);
    }
  }
};
function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({ ref: "container" }, _ctx.ptm("root")), [
    $data.loaded ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("", true)
  ], 16);
}
script$c.render = render$c;
var script$b = {
  name: "TimesCircleIcon",
  extends: script$z
};
const _hoisted_1$b = /* @__PURE__ */ createElementVNode("g", { "clip-path": "url(#clip0_334_13179)" }, [
  /* @__PURE__ */ createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",
    fill: "currentColor"
  })
], -1);
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("clipPath", { id: "clip0_334_13179" }, [
    /* @__PURE__ */ createElementVNode("rect", {
      width: "14",
      height: "14",
      fill: "white"
    })
  ])
], -1);
const _hoisted_3$6 = [
  _hoisted_1$b,
  _hoisted_2$6
];
function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_3$6, 16);
}
script$b.render = render$b;
var script$a = {
  name: "Chips",
  extends: script$A,
  emits: ["update:modelValue", "add", "remove", "focus", "blur"],
  props: {
    modelValue: {
      type: Array,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    separator: {
      type: [String, Object],
      default: null
    },
    addOnBlur: {
      type: Boolean,
      default: null
    },
    allowDuplicate: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inputId: {
      type: String,
      default: null
    },
    inputClass: {
      type: [String, Object],
      default: null
    },
    inputStyle: {
      type: Object,
      default: null
    },
    inputProps: {
      type: null,
      default: null
    },
    removeTokenIcon: {
      type: String,
      default: void 0
    },
    "aria-labelledby": {
      type: String,
      default: null
    },
    "aria-label": {
      type: String,
      default: null
    }
  },
  data() {
    return {
      id: UniqueComponentId(),
      inputValue: null,
      focused: false,
      focusedIndex: null
    };
  },
  methods: {
    onWrapperClick() {
      this.$refs.input.focus();
    },
    onInput(event) {
      this.inputValue = event.target.value;
      this.focusedIndex = null;
    },
    onFocus(event) {
      this.focused = true;
      this.focusedIndex = null;
      this.$emit("focus", event);
    },
    onBlur(event) {
      this.focused = false;
      this.focusedIndex = null;
      if (this.addOnBlur) {
        this.addItem(event, event.target.value, false);
      }
      this.$emit("blur", event);
    },
    onKeyDown(event) {
      const inputValue = event.target.value;
      switch (event.code) {
        case "Backspace":
          if (inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
            if (this.focusedIndex !== null) {
              this.removeItem(event, this.focusedIndex);
            } else
              this.removeItem(event, this.modelValue.length - 1);
          }
          break;
        case "Enter":
          if (inputValue && inputValue.trim().length && !this.maxedOut) {
            this.addItem(event, inputValue, true);
          }
          break;
        case "ArrowLeft":
          if (inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
            this.$refs.container.focus();
          }
          break;
        case "ArrowRight":
          event.stopPropagation();
          break;
        default:
          if (this.separator) {
            if (this.separator === event.key || event.key.match(this.separator)) {
              this.addItem(event, inputValue, true);
            }
          }
          break;
      }
    },
    onPaste(event) {
      if (this.separator) {
        let pastedData = (event.clipboardData || window["clipboardData"]).getData("Text");
        if (pastedData) {
          let value = this.modelValue || [];
          let pastedValues = pastedData.split(this.separator);
          pastedValues = pastedValues.filter((val) => this.allowDuplicate || value.indexOf(val) === -1);
          value = [...value, ...pastedValues];
          this.updateModel(event, value, true);
        }
      }
    },
    onContainerFocus() {
      this.focused = true;
    },
    onContainerBlur() {
      this.focusedIndex = -1;
      this.focused = false;
    },
    onContainerKeyDown(event) {
      switch (event.code) {
        case "ArrowLeft":
          this.onArrowLeftKeyOn(event);
          break;
        case "ArrowRight":
          this.onArrowRightKeyOn(event);
          break;
        case "Backspace":
          this.onBackspaceKeyOn(event);
          break;
      }
    },
    onArrowLeftKeyOn() {
      if (this.inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
        this.focusedIndex = this.focusedIndex === null ? this.modelValue.length - 1 : this.focusedIndex - 1;
        if (this.focusedIndex < 0)
          this.focusedIndex = 0;
      }
    },
    onArrowRightKeyOn() {
      if (this.inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
        if (this.focusedIndex === this.modelValue.length - 1) {
          this.focusedIndex = null;
          this.$refs.input.focus();
        } else {
          this.focusedIndex++;
        }
      }
    },
    onBackspaceKeyOn(event) {
      if (this.focusedIndex !== null) {
        this.removeItem(event, this.focusedIndex);
      }
    },
    updateModel(event, value, preventDefault) {
      this.$emit("update:modelValue", value);
      this.$emit("add", {
        originalEvent: event,
        value
      });
      this.$refs.input.value = "";
      this.inputValue = "";
      setTimeout(() => {
        this.maxedOut && (this.focused = false);
      }, 0);
      if (preventDefault) {
        event.preventDefault();
      }
    },
    addItem(event, item, preventDefault) {
      if (item && item.trim().length) {
        let value = this.modelValue ? [...this.modelValue] : [];
        if (this.allowDuplicate || value.indexOf(item) === -1) {
          value.push(item);
          this.updateModel(event, value, preventDefault);
        }
      }
    },
    removeItem(event, index) {
      if (this.disabled) {
        return;
      }
      let values = [...this.modelValue];
      const removedItem = values.splice(index, 1);
      this.focusedIndex = null;
      this.$refs.input.focus();
      this.$emit("update:modelValue", values);
      this.$emit("remove", {
        originalEvent: event,
        value: removedItem
      });
    }
  },
  computed: {
    maxedOut() {
      return this.max && this.modelValue && this.max === this.modelValue.length;
    },
    containerClass() {
      return [
        "p-chips p-component p-inputwrapper",
        {
          "p-disabled": this.disabled,
          "p-focus": this.focused,
          "p-inputwrapper-filled": this.modelValue && this.modelValue.length || this.inputValue && this.inputValue.length,
          "p-inputwrapper-focus": this.focused
        }
      ];
    },
    focusedOptionId() {
      return this.focusedIndex !== null ? `${this.id}_chips_item_${this.focusedIndex}` : null;
    }
  },
  components: {
    TimesCircleIcon: script$b
  }
};
const _hoisted_1$a = ["aria-labelledby", "aria-label", "aria-activedescendant"];
const _hoisted_2$5 = ["id", "aria-label", "aria-setsize", "aria-posinset"];
const _hoisted_3$5 = ["id", "disabled", "placeholder"];
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({ class: $options.containerClass }, _ctx.ptm("root")), [
    createElementVNode("ul", mergeProps({
      ref: "container",
      class: "p-inputtext p-chips-multiple-container",
      tabindex: "-1",
      role: "listbox",
      "aria-orientation": "horizontal",
      "aria-labelledby": _ctx.ariaLabelledby,
      "aria-label": _ctx.ariaLabel,
      "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
      onClick: _cache[5] || (_cache[5] = ($event) => $options.onWrapperClick()),
      onFocus: _cache[6] || (_cache[6] = (...args) => $options.onContainerFocus && $options.onContainerFocus(...args)),
      onBlur: _cache[7] || (_cache[7] = (...args) => $options.onContainerBlur && $options.onContainerBlur(...args)),
      onKeydown: _cache[8] || (_cache[8] = (...args) => $options.onContainerKeyDown && $options.onContainerKeyDown(...args))
    }, _ctx.ptm("container")), [
      (openBlock(true), createElementBlock(Fragment$1, null, renderList($props.modelValue, (val, i) => {
        return openBlock(), createElementBlock("li", mergeProps({
          key: `${i}_${val}`,
          id: $data.id + "_chips_item_" + i,
          role: "option",
          class: ["p-chips-token", { "p-focus": $data.focusedIndex === i }],
          "aria-label": val,
          "aria-selected": true,
          "aria-setsize": $props.modelValue.length,
          "aria-posinset": i + 1
        }, _ctx.ptm("token")), [
          renderSlot(_ctx.$slots, "chip", { value: val }, () => [
            createElementVNode("span", mergeProps({ class: "p-chips-token-label" }, _ctx.ptm("label")), toDisplayString(val), 17)
          ]),
          renderSlot(_ctx.$slots, "removetokenicon", {
            onClick: (event) => $options.removeItem(event, i)
          }, () => [
            (openBlock(), createBlock(resolveDynamicComponent($props.removeTokenIcon ? "span" : "TimesCircleIcon"), mergeProps({
              class: ["p-chips-token-icon", $props.removeTokenIcon],
              onClick: ($event) => $options.removeItem($event, i),
              "aria-hidden": "true"
            }, _ctx.ptm("removeTokenIcon")), null, 16, ["class", "onClick"]))
          ])
        ], 16, _hoisted_2$5);
      }), 128)),
      createElementVNode("li", mergeProps({
        class: "p-chips-input-token",
        role: "option"
      }, _ctx.ptm("inputToken")), [
        createElementVNode("input", mergeProps({
          ref: "input",
          id: $props.inputId,
          type: "text",
          class: $props.inputClass,
          style: $props.inputStyle,
          disabled: $props.disabled || $options.maxedOut,
          placeholder: $props.placeholder,
          onFocus: _cache[0] || (_cache[0] = ($event) => $options.onFocus($event)),
          onBlur: _cache[1] || (_cache[1] = ($event) => $options.onBlur($event)),
          onInput: _cache[2] || (_cache[2] = (...args) => $options.onInput && $options.onInput(...args)),
          onKeydown: _cache[3] || (_cache[3] = ($event) => $options.onKeyDown($event)),
          onPaste: _cache[4] || (_cache[4] = ($event) => $options.onPaste($event))
        }, { ...$props.inputProps, ..._ctx.ptm("input") }), null, 16, _hoisted_3$5)
      ], 16)
    ], 16, _hoisted_1$a)
  ], 16);
}
function styleInject$5(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style2 = document.createElement("style");
  style2.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style2, head.firstChild);
    } else {
      head.appendChild(style2);
    }
  } else {
    head.appendChild(style2);
  }
  if (style2.styleSheet) {
    style2.styleSheet.cssText = css;
  } else {
    style2.appendChild(document.createTextNode(css));
  }
}
var css_248z$5 = "\n.p-chips {\n    display: inline-flex;\n}\n.p-chips-multiple-container {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    cursor: text;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.p-chips-token {\n    cursor: default;\n    display: inline-flex;\n    align-items: center;\n    flex: 0 0 auto;\n}\n.p-chips-input-token {\n    flex: 1 1 auto;\n    display: inline-flex;\n}\n.p-chips-token-icon {\n    cursor: pointer;\n}\n.p-chips-input-token input {\n    border: 0 none;\n    outline: 0 none;\n    background-color: transparent;\n    margin: 0;\n    padding: 0;\n    box-shadow: none;\n    border-radius: 0;\n    width: 100%;\n}\n.p-fluid .p-chips {\n    display: flex;\n}\n";
styleInject$5(css_248z$5);
script$a.render = render$a;
var ConfirmationEventBus = primebus();
var script$9 = {
  name: "ConfirmPopup",
  extends: script$A,
  inheritAttrs: false,
  props: {
    group: String
  },
  data() {
    return {
      visible: false,
      confirmation: null,
      autoFocusAccept: null,
      autoFocusReject: null
    };
  },
  target: null,
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  container: null,
  confirmListener: null,
  closeListener: null,
  mounted() {
    this.confirmListener = (options) => {
      if (!options) {
        return;
      }
      if (options.group === this.group) {
        this.confirmation = options;
        this.target = options.target;
        if (this.confirmation.onShow) {
          this.confirmation.onShow();
        }
        this.visible = true;
      }
    };
    this.closeListener = () => {
      this.visible = false;
      this.confirmation = null;
    };
    ConfirmationEventBus.on("confirm", this.confirmListener);
    ConfirmationEventBus.on("close", this.closeListener);
  },
  beforeUnmount() {
    ConfirmationEventBus.off("confirm", this.confirmListener);
    ConfirmationEventBus.off("close", this.closeListener);
    this.unbindOutsideClickListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    this.unbindResizeListener();
    if (this.container) {
      ZIndexUtils.clear(this.container);
      this.container = null;
    }
    this.target = null;
    this.confirmation = null;
  },
  methods: {
    accept() {
      if (this.confirmation.accept) {
        this.confirmation.accept();
      }
      this.visible = false;
    },
    reject() {
      if (this.confirmation.reject) {
        this.confirmation.reject();
      }
      this.visible = false;
    },
    onHide() {
      if (this.confirmation.onHide) {
        this.confirmation.onHide();
      }
      this.visible = false;
    },
    onAcceptKeydown(event) {
      if (event.code === "Space" || event.code === "Enter") {
        this.accept();
        DomHandler.focus(this.target);
        event.preventDefault();
      }
    },
    onRejectKeydown(event) {
      if (event.code === "Space" || event.code === "Enter") {
        this.reject();
        DomHandler.focus(this.target);
        event.preventDefault();
      }
    },
    onEnter(el) {
      this.autoFocusAccept = this.confirmation.defaultFocus === void 0 || this.confirmation.defaultFocus === "accept" ? true : false;
      this.autoFocusReject = this.confirmation.defaultFocus === "reject" ? true : false;
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      ZIndexUtils.set("overlay", el, this.$primevue.config.zIndex.overlay);
    },
    onAfterEnter() {
      this.focus();
    },
    onLeave() {
      this.autoFocusAccept = null;
      this.autoFocusReject = null;
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
    },
    onAfterLeave(el) {
      ZIndexUtils.clear(el);
    },
    alignOverlay() {
      DomHandler.absolutePosition(this.container, this.target);
      const containerOffset = DomHandler.getOffset(this.container);
      const targetOffset = DomHandler.getOffset(this.target);
      let arrowLeft = 0;
      if (containerOffset.left < targetOffset.left) {
        arrowLeft = targetOffset.left - containerOffset.left;
      }
      this.container.style.setProperty("--overlayArrowLeft", `${arrowLeft}px`);
      if (containerOffset.top < targetOffset.top) {
        DomHandler.addClass(this.container, "p-confirm-popup-flipped");
      }
    },
    bindOutsideClickListener() {
      if (!this.outsideClickListener) {
        this.outsideClickListener = (event) => {
          if (this.visible && this.container && !this.container.contains(event.target) && !this.isTargetClicked(event)) {
            if (this.confirmation.onHide) {
              this.confirmation.onHide();
            }
            this.visible = false;
          } else {
            this.alignOverlay();
          }
        };
        document.addEventListener("click", this.outsideClickListener);
      }
    },
    unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    bindScrollListener() {
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
          if (this.visible) {
            this.visible = false;
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener() {
      if (!this.resizeListener) {
        this.resizeListener = () => {
          if (this.visible && !DomHandler.isTouchDevice()) {
            this.visible = false;
          }
        };
        window.addEventListener("resize", this.resizeListener);
      }
    },
    unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    },
    focus() {
      let focusTarget = this.container.querySelector("[autofocus]");
      if (focusTarget) {
        focusTarget.focus({ preventScroll: true });
      }
    },
    isTargetClicked(event) {
      return this.target && (this.target === event.target || this.target.contains(event.target));
    },
    containerRef(el) {
      this.container = el;
    },
    onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.target
      });
    },
    onOverlayKeydown(event) {
      if (event.code === "Escape") {
        ConfirmationEventBus.emit("close", this.closeListener);
        DomHandler.focus(this.target);
      }
    }
  },
  computed: {
    containerClass() {
      return [
        "p-confirm-popup p-component",
        {
          "p-input-filled": this.$primevue.config.inputStyle === "filled",
          "p-ripple-disabled": this.$primevue.config.ripple === false
        }
      ];
    },
    message() {
      return this.confirmation ? this.confirmation.message : null;
    },
    iconClass() {
      return ["p-confirm-popup-icon", this.confirmation ? this.confirmation.icon : null];
    },
    acceptLabel() {
      return this.confirmation ? this.confirmation.acceptLabel || this.$primevue.config.locale.accept : null;
    },
    rejectLabel() {
      return this.confirmation ? this.confirmation.rejectLabel || this.$primevue.config.locale.reject : null;
    },
    acceptIcon() {
      return this.confirmation ? this.confirmation.acceptIcon : null;
    },
    rejectIcon() {
      return this.confirmation ? this.confirmation.rejectIcon : null;
    },
    acceptClass() {
      return ["p-confirm-popup-accept p-button-sm", this.confirmation ? this.confirmation.acceptClass : null];
    },
    rejectClass() {
      return ["p-confirm-popup-reject p-button-sm", this.confirmation ? this.confirmation.rejectClass || "p-button-text" : null];
    }
  },
  components: {
    CPButton: script$x,
    Portal: script$i
  },
  directives: {
    focustrap: FocusTrap
  }
};
const _hoisted_1$9 = ["aria-modal"];
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CPButton = resolveComponent("CPButton");
  const _component_Portal = resolveComponent("Portal");
  const _directive_focustrap = resolveDirective("focustrap");
  return openBlock(), createBlock(_component_Portal, null, {
    default: withCtx(() => [
      createVNode(Transition, {
        name: "p-confirm-popup",
        onEnter: $options.onEnter,
        onAfterEnter: $options.onAfterEnter,
        onLeave: $options.onLeave,
        onAfterLeave: $options.onAfterLeave
      }, {
        default: withCtx(() => [
          $data.visible ? withDirectives((openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.containerRef,
            role: "alertdialog",
            class: $options.containerClass,
            "aria-modal": $data.visible,
            onClick: _cache[2] || (_cache[2] = (...args) => $options.onOverlayClick && $options.onOverlayClick(...args)),
            onKeydown: _cache[3] || (_cache[3] = (...args) => $options.onOverlayKeydown && $options.onOverlayKeydown(...args))
          }, { ..._ctx.$attrs, ..._ctx.ptm("root") }), [
            !_ctx.$slots.message ? (openBlock(), createElementBlock("div", mergeProps({
              key: 0,
              class: "p-confirm-popup-content"
            }, _ctx.ptm("content")), [
              renderSlot(_ctx.$slots, "icon", { class: "p-confirm-popup-icon" }, () => [
                _ctx.$slots.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.icon), {
                  key: 0,
                  class: "p-confirm-popup-icon"
                })) : $data.confirmation.icon ? (openBlock(), createElementBlock("span", mergeProps({
                  key: 1,
                  class: $options.iconClass
                }, _ctx.ptm("icon")), null, 16)) : createCommentVNode("", true)
              ]),
              createElementVNode("span", mergeProps({ class: "p-confirm-popup-message" }, _ctx.ptm("message")), toDisplayString($data.confirmation.message), 17)
            ], 16)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.message), {
              key: 1,
              message: $data.confirmation
            }, null, 8, ["message"])),
            createElementVNode("div", mergeProps({ class: "p-confirm-popup-footer" }, _ctx.ptm("footer")), [
              createVNode(_component_CPButton, {
                label: $options.rejectLabel,
                class: normalizeClass($options.rejectClass),
                onClick: _cache[0] || (_cache[0] = ($event) => $options.reject()),
                onKeydown: $options.onRejectKeydown,
                autofocus: $data.autoFocusReject,
                pt: _ctx.ptm("rejectButton")
              }, {
                icon: withCtx((iconProps) => [
                  renderSlot(_ctx.$slots, "rejecticon", {}, () => [
                    createElementVNode("span", mergeProps({
                      class: [$options.rejectIcon, iconProps.class]
                    }, _ctx.ptm("rejectButton")["icon"]), null, 16)
                  ])
                ]),
                _: 3
              }, 8, ["label", "class", "onKeydown", "autofocus", "pt"]),
              createVNode(_component_CPButton, {
                label: $options.acceptLabel,
                class: normalizeClass($options.acceptClass),
                onClick: _cache[1] || (_cache[1] = ($event) => $options.accept()),
                onKeydown: $options.onAcceptKeydown,
                autofocus: $data.autoFocusAccept,
                pt: _ctx.ptm("acceptButton")
              }, {
                icon: withCtx((iconProps) => [
                  renderSlot(_ctx.$slots, "accepticon", {}, () => [
                    createElementVNode("span", mergeProps({
                      class: [$options.acceptIcon, iconProps.class]
                    }, _ctx.ptm("acceptButton")["icon"]), null, 16)
                  ])
                ]),
                _: 3
              }, 8, ["label", "class", "onKeydown", "autofocus", "pt"])
            ], 16)
          ], 16, _hoisted_1$9)), [
            [_directive_focustrap]
          ]) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])
    ]),
    _: 3
  });
}
function styleInject$4(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style2 = document.createElement("style");
  style2.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style2, head.firstChild);
    } else {
      head.appendChild(style2);
    }
  } else {
    head.appendChild(style2);
  }
  if (style2.styleSheet) {
    style2.styleSheet.cssText = css;
  } else {
    style2.appendChild(document.createTextNode(css));
  }
}
var css_248z$4 = "\n.p-confirm-popup {\n    position: absolute;\n    margin-top: 10px;\n    top: 0;\n    left: 0;\n}\n.p-confirm-popup-flipped {\n    margin-top: 0;\n    margin-bottom: 10px;\n}\n\n/* Animation */\n.p-confirm-popup-enter-from {\n    opacity: 0;\n    transform: scaleY(0.8);\n}\n.p-confirm-popup-leave-to {\n    opacity: 0;\n}\n.p-confirm-popup-enter-active {\n    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n}\n.p-confirm-popup-leave-active {\n    transition: opacity 0.1s linear;\n}\n.p-confirm-popup:after,\n.p-confirm-popup:before {\n    bottom: 100%;\n    left: calc(var(--overlayArrowLeft, 0) + 1.25rem);\n    content: ' ';\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n}\n.p-confirm-popup:after {\n    border-width: 8px;\n    margin-left: -8px;\n}\n.p-confirm-popup:before {\n    border-width: 10px;\n    margin-left: -10px;\n}\n.p-confirm-popup-flipped:after,\n.p-confirm-popup-flipped:before {\n    bottom: auto;\n    top: 100%;\n}\n.p-confirm-popup.p-confirm-popup-flipped:after {\n    border-bottom-color: transparent;\n}\n.p-confirm-popup.p-confirm-popup-flipped:before {\n    border-bottom-color: transparent;\n}\n.p-confirm-popup .p-confirm-popup-content {\n    display: flex;\n    align-items: center;\n}\n";
styleInject$4(css_248z$4);
script$9.render = render$9;
var ToastEventBus = primebus();
var script$8 = {
  name: "CheckIcon",
  extends: script$z
};
const _hoisted_1$8 = /* @__PURE__ */ createElementVNode("path", {
  d: "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",
  fill: "currentColor"
}, null, -1);
const _hoisted_2$4 = [
  _hoisted_1$8
];
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$4, 16);
}
script$8.render = render$8;
var script$7 = {
  name: "ExclamationTriangleIcon",
  extends: script$z
};
const _hoisted_1$7 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_323_12417)"><path d="M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z" fill="currentColor"></path><path d="M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z" fill="currentColor"></path><path d="M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z" fill="currentColor"></path></g><defs><clipPath id="clip0_323_12417"><rect width="14" height="14" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_3$4 = [
  _hoisted_1$7
];
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_3$4, 16);
}
script$7.render = render$7;
var script$6 = {
  name: "InfoCircleIcon",
  extends: script$z
};
const _hoisted_1$6 = /* @__PURE__ */ createElementVNode("g", { "clip-path": "url(#clip0_408_21102)" }, [
  /* @__PURE__ */ createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",
    fill: "currentColor"
  })
], -1);
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("clipPath", { id: "clip0_408_21102" }, [
    /* @__PURE__ */ createElementVNode("rect", {
      width: "14",
      height: "14",
      fill: "white"
    })
  ])
], -1);
const _hoisted_3$3 = [
  _hoisted_1$6,
  _hoisted_2$3
];
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_3$3, 16);
}
script$6.render = render$6;
var script$1$2 = {
  name: "ToastMessage",
  extends: script$A,
  emits: ["close"],
  props: {
    message: {
      type: null,
      default: null
    },
    templates: {
      type: Object,
      default: null
    },
    closeIcon: {
      type: String,
      default: null
    },
    infoIcon: {
      type: String,
      default: null
    },
    warnIcon: {
      type: String,
      default: null
    },
    errorIcon: {
      type: String,
      default: null
    },
    successIcon: {
      type: String,
      default: null
    },
    closeButtonProps: {
      type: null,
      default: null
    }
  },
  closeTimeout: null,
  mounted() {
    if (this.message.life) {
      this.closeTimeout = setTimeout(() => {
        this.close({ message: this.message, type: "life-end" });
      }, this.message.life);
    }
  },
  beforeUnmount() {
    this.clearCloseTimeout();
  },
  methods: {
    close(params) {
      this.$emit("close", params);
    },
    onCloseClick() {
      this.clearCloseTimeout();
      this.close({ message: this.message, type: "close" });
    },
    clearCloseTimeout() {
      if (this.closeTimeout) {
        clearTimeout(this.closeTimeout);
        this.closeTimeout = null;
      }
    }
  },
  computed: {
    containerClass() {
      return [
        "p-toast-message",
        this.message.styleClass,
        {
          "p-toast-message-info": this.message.severity === "info",
          "p-toast-message-warn": this.message.severity === "warn",
          "p-toast-message-error": this.message.severity === "error",
          "p-toast-message-success": this.message.severity === "success"
        }
      ];
    },
    iconComponent() {
      return {
        info: !this.infoIcon && script$6,
        success: !this.successIcon && script$8,
        warn: !this.warnIcon && script$7,
        error: !this.errorIcon && script$b
      }[this.message.severity];
    },
    iconClass() {
      return [
        {
          [this.infoIcon]: this.message.severity === "info",
          [this.warnIcon]: this.message.severity === "warn",
          [this.errorIcon]: this.message.severity === "error",
          [this.successIcon]: this.message.severity === "success"
        }
      ];
    },
    closeAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    }
  },
  components: {
    TimesIcon: script$l,
    InfoCircleIcon: script$6,
    CheckIcon: script$8,
    ExclamationTriangleIcon: script$7,
    TimesCircleIcon: script$b
  },
  directives: {
    ripple: Ripple
  }
};
const _hoisted_1$5 = ["aria-label"];
function render$1$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    class: $options.containerClass,
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  }, _ctx.ptm("container")), [
    createElementVNode("div", mergeProps({
      class: ["p-toast-message-content", $props.message.contentStyleClass]
    }, _ctx.ptm("content")), [
      !$props.templates.message ? (openBlock(), createElementBlock(Fragment$1, { key: 0 }, [
        (openBlock(), createBlock(resolveDynamicComponent($props.templates.icon ? $props.templates.icon : $options.iconComponent.name ? $options.iconComponent : "span"), mergeProps({
          class: [$options.iconClass, "p-toast-message-icon"]
        }, _ctx.ptm("icon")), null, 16, ["class"])),
        createElementVNode("div", mergeProps({ class: "p-toast-message-text" }, _ctx.ptm("text")), [
          createElementVNode("span", mergeProps({ class: "p-toast-summary" }, _ctx.ptm("summary")), toDisplayString($props.message.summary), 17),
          createElementVNode("div", mergeProps({ class: "p-toast-detail" }, _ctx.ptm("detail")), toDisplayString($props.message.detail), 17)
        ], 16)
      ], 64)) : (openBlock(), createBlock(resolveDynamicComponent($props.templates.message), {
        key: 1,
        message: $props.message
      }, null, 8, ["message"])),
      $props.message.closable !== false ? (openBlock(), createElementBlock("div", normalizeProps(mergeProps({ key: 2 }, _ctx.ptm("buttonContainer"))), [
        withDirectives((openBlock(), createElementBlock("button", mergeProps({
          class: "p-toast-icon-close p-link",
          type: "button",
          "aria-label": $options.closeAriaLabel,
          onClick: _cache[0] || (_cache[0] = (...args) => $options.onCloseClick && $options.onCloseClick(...args)),
          autofocus: ""
        }, { ...$props.closeButtonProps, ..._ctx.ptm("button") }), [
          (openBlock(), createBlock(resolveDynamicComponent($props.templates.closeicon || "TimesIcon"), mergeProps({
            class: ["p-toast-icon-close-icon", $props.closeIcon]
          }, _ctx.ptm("buttonIcon")), null, 16, ["class"]))
        ], 16, _hoisted_1$5)), [
          [_directive_ripple]
        ])
      ], 16)) : createCommentVNode("", true)
    ], 16)
  ], 16);
}
script$1$2.render = render$1$2;
var messageIdx = 0;
var script$5 = {
  name: "Toast",
  extends: script$A,
  inheritAttrs: false,
  emits: ["close", "life-end"],
  props: {
    group: {
      type: String,
      default: null
    },
    position: {
      type: String,
      default: "top-right"
    },
    autoZIndex: {
      type: Boolean,
      default: true
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    breakpoints: {
      type: Object,
      default: null
    },
    closeIcon: {
      type: String,
      default: void 0
    },
    infoIcon: {
      type: String,
      default: void 0
    },
    warnIcon: {
      type: String,
      default: void 0
    },
    errorIcon: {
      type: String,
      default: void 0
    },
    successIcon: {
      type: String,
      default: void 0
    },
    closeButtonProps: {
      type: null,
      default: null
    }
  },
  data() {
    return {
      messages: []
    };
  },
  styleElement: null,
  mounted() {
    ToastEventBus.on("add", this.onAdd);
    ToastEventBus.on("remove-group", this.onRemoveGroup);
    ToastEventBus.on("remove-all-groups", this.onRemoveAllGroups);
    if (this.breakpoints) {
      this.createStyle();
    }
  },
  beforeUnmount() {
    this.destroyStyle();
    if (this.$refs.container && this.autoZIndex) {
      ZIndexUtils.clear(this.$refs.container);
    }
    ToastEventBus.off("add", this.onAdd);
    ToastEventBus.off("remove-group", this.onRemoveGroup);
    ToastEventBus.off("remove-all-groups", this.onRemoveAllGroups);
  },
  methods: {
    add(message) {
      if (message.id == null) {
        message.id = messageIdx++;
      }
      this.messages = [...this.messages, message];
    },
    remove(params) {
      let index = -1;
      for (let i = 0; i < this.messages.length; i++) {
        if (this.messages[i] === params.message) {
          index = i;
          break;
        }
      }
      this.messages.splice(index, 1);
      this.$emit(params.type, { message: params.message });
    },
    onAdd(message) {
      if (this.group == message.group) {
        this.add(message);
      }
    },
    onRemoveGroup(group) {
      if (this.group === group) {
        this.messages = [];
      }
    },
    onRemoveAllGroups() {
      this.messages = [];
    },
    onEnter() {
      this.$refs.container.setAttribute(this.attributeSelector, "");
      if (this.autoZIndex) {
        ZIndexUtils.set("modal", this.$refs.container, this.baseZIndex || this.$primevue.config.zIndex.modal);
      }
    },
    onLeave() {
      if (this.$refs.container && this.autoZIndex && ObjectUtils.isEmpty(this.messages)) {
        setTimeout(() => {
          ZIndexUtils.clear(this.$refs.container);
        }, 200);
      }
    },
    createStyle() {
      if (!this.styleElement) {
        this.styleElement = document.createElement("style");
        this.styleElement.type = "text/css";
        document.head.appendChild(this.styleElement);
        let innerHTML = "";
        for (let breakpoint in this.breakpoints) {
          let breakpointStyle = "";
          for (let styleProp in this.breakpoints[breakpoint]) {
            breakpointStyle += styleProp + ":" + this.breakpoints[breakpoint][styleProp] + "!important;";
          }
          innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-toast[${this.attributeSelector}] {
                                ${breakpointStyle}
                            }
                        }
                    `;
        }
        this.styleElement.innerHTML = innerHTML;
      }
    },
    destroyStyle() {
      if (this.styleElement) {
        document.head.removeChild(this.styleElement);
        this.styleElement = null;
      }
    }
  },
  computed: {
    containerClass() {
      return [
        "p-toast p-component p-toast-" + this.position,
        {
          "p-input-filled": this.$primevue.config.inputStyle === "filled",
          "p-ripple-disabled": this.$primevue.config.ripple === false
        }
      ];
    },
    attributeSelector() {
      return UniqueComponentId();
    }
  },
  components: {
    ToastMessage: script$1$2,
    Portal: script$i
  }
};
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ToastMessage = resolveComponent("ToastMessage");
  const _component_Portal = resolveComponent("Portal");
  return openBlock(), createBlock(_component_Portal, null, {
    default: withCtx(() => [
      createElementVNode("div", mergeProps({
        ref: "container",
        class: $options.containerClass
      }, { ..._ctx.$attrs, ..._ctx.ptm("root") }), [
        createVNode(TransitionGroup, mergeProps({
          name: "p-toast-message",
          tag: "div",
          onEnter: $options.onEnter,
          onLeave: $options.onLeave
        }, _ctx.ptm("message")), {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment$1, null, renderList($data.messages, (msg) => {
              return openBlock(), createBlock(_component_ToastMessage, {
                key: msg.id,
                message: msg,
                templates: _ctx.$slots,
                closeIcon: $props.closeIcon,
                infoIcon: $props.infoIcon,
                warnIcon: $props.warnIcon,
                errorIcon: $props.errorIcon,
                successIcon: $props.successIcon,
                closeButtonProps: $props.closeButtonProps,
                onClose: _cache[0] || (_cache[0] = ($event) => $options.remove($event)),
                pt: _ctx.pt
              }, null, 8, ["message", "templates", "closeIcon", "infoIcon", "warnIcon", "errorIcon", "successIcon", "closeButtonProps", "pt"]);
            }), 128))
          ]),
          _: 1
        }, 16, ["onEnter", "onLeave"])
      ], 16)
    ]),
    _: 1
  });
}
function styleInject$3(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style2 = document.createElement("style");
  style2.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style2, head.firstChild);
    } else {
      head.appendChild(style2);
    }
  } else {
    head.appendChild(style2);
  }
  if (style2.styleSheet) {
    style2.styleSheet.cssText = css;
  } else {
    style2.appendChild(document.createTextNode(css));
  }
}
var css_248z$3 = "\n.p-toast {\n    position: fixed;\n    width: 25rem;\n}\n.p-toast-message-content {\n    display: flex;\n    align-items: flex-start;\n}\n.p-toast-message-text {\n    flex: 1 1 auto;\n}\n.p-toast-top-right {\n    top: 20px;\n    right: 20px;\n}\n.p-toast-top-left {\n    top: 20px;\n    left: 20px;\n}\n.p-toast-bottom-left {\n    bottom: 20px;\n    left: 20px;\n}\n.p-toast-bottom-right {\n    bottom: 20px;\n    right: 20px;\n}\n.p-toast-top-center {\n    top: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n}\n.p-toast-bottom-center {\n    bottom: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n}\n.p-toast-center {\n    left: 50%;\n    top: 50%;\n    min-width: 20vw;\n    transform: translate(-50%, -50%);\n}\n.p-toast-icon-close {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n}\n.p-toast-icon-close.p-link {\n    cursor: pointer;\n}\n\n/* Animations */\n.p-toast-message-enter-from {\n    opacity: 0;\n    -webkit-transform: translateY(50%);\n    -ms-transform: translateY(50%);\n    transform: translateY(50%);\n}\n.p-toast-message-leave-from {\n    max-height: 1000px;\n}\n.p-toast .p-toast-message.p-toast-message-leave-to {\n    max-height: 0;\n    opacity: 0;\n    margin-bottom: 0;\n    overflow: hidden;\n}\n.p-toast-message-enter-active {\n    -webkit-transition: transform 0.3s, opacity 0.3s;\n    transition: transform 0.3s, opacity 0.3s;\n}\n.p-toast-message-leave-active {\n    -webkit-transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;\n    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;\n}\n";
styleInject$3(css_248z$3);
script$5.render = render$5;
var script$4 = {
  name: "Textarea",
  extends: script$A,
  emits: ["update:modelValue"],
  props: {
    modelValue: null,
    autoResize: Boolean
  },
  mounted() {
    if (this.$el.offsetParent && this.autoResize) {
      this.resize();
    }
  },
  updated() {
    if (this.$el.offsetParent && this.autoResize) {
      this.resize();
    }
  },
  methods: {
    resize() {
      const style2 = window.getComputedStyle(this.$el);
      this.$el.style.height = "auto";
      this.$el.style.height = `calc(${style2.borderTopWidth} + ${style2.borderBottomWidth} + ${this.$el.scrollHeight}px)`;
      if (parseFloat(this.$el.style.height) >= parseFloat(this.$el.style.maxHeight)) {
        this.$el.style.overflowY = "scroll";
        this.$el.style.height = this.$el.style.maxHeight;
      } else {
        this.$el.style.overflow = "hidden";
      }
    },
    onInput(event) {
      if (this.autoResize) {
        this.resize();
      }
      this.$emit("update:modelValue", event.target.value);
    }
  },
  computed: {
    filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    }
  }
};
const _hoisted_1$4 = ["value"];
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("textarea", mergeProps({
    class: ["p-inputtextarea p-inputtext p-component", { "p-filled": $options.filled, "p-inputtextarea-resizable ": $props.autoResize }],
    value: $props.modelValue,
    onInput: _cache[0] || (_cache[0] = (...args) => $options.onInput && $options.onInput(...args))
  }, _ctx.ptm("root")), null, 16, _hoisted_1$4);
}
function styleInject$2(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style2 = document.createElement("style");
  style2.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style2, head.firstChild);
    } else {
      head.appendChild(style2);
    }
  } else {
    head.appendChild(style2);
  }
  if (style2.styleSheet) {
    style2.styleSheet.cssText = css;
  } else {
    style2.appendChild(document.createTextNode(css));
  }
}
var css_248z$2 = "\n.p-inputtextarea-resizable {\n    overflow: hidden;\n    resize: none;\n}\n.p-fluid .p-inputtextarea {\n    width: 100%;\n}\n";
styleInject$2(css_248z$2);
script$4.render = render$4;
var script$3 = {
  name: "InputText",
  extends: script$A,
  emits: ["update:modelValue"],
  props: {
    modelValue: null
  },
  methods: {
    onInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  },
  computed: {
    filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    }
  }
};
const _hoisted_1$3 = ["value"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", mergeProps({
    class: ["p-inputtext p-component", { "p-filled": $options.filled }],
    value: $props.modelValue,
    onInput: _cache[0] || (_cache[0] = (...args) => $options.onInput && $options.onInput(...args))
  }, _ctx.ptm("root")), null, 16, _hoisted_1$3);
}
script$3.render = render$3;
const PrimeVueConfirmSymbol = Symbol();
var ConfirmationService = {
  install: (app) => {
    const ConfirmationService2 = {
      require: (options) => {
        ConfirmationEventBus.emit("confirm", options);
      },
      close: () => {
        ConfirmationEventBus.emit("close");
      }
    };
    app.config.globalProperties.$confirm = ConfirmationService2;
    app.provide(PrimeVueConfirmSymbol, ConfirmationService2);
  }
};
const PrimeVueToastSymbol = Symbol();
var ToastService = {
  install: (app) => {
    const ToastService2 = {
      add: (message) => {
        ToastEventBus.emit("add", message);
      },
      removeGroup: (group) => {
        ToastEventBus.emit("remove-group", group);
      },
      removeAllGroups: () => {
        ToastEventBus.emit("remove-all-groups");
      }
    };
    app.config.globalProperties.$toast = ToastService2;
    app.provide(PrimeVueToastSymbol, ToastService2);
  }
};
var script$1$1 = {
  name: "Menuitem",
  extends: script$A,
  inheritAttrs: false,
  emits: ["item-click"],
  props: {
    item: null,
    templates: null,
    exact: null,
    id: null,
    focusedOptionId: null
  },
  methods: {
    getItemProp(processedItem, name) {
      return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name]) : void 0;
    },
    getPTOptions(key) {
      return this.ptm(key, {
        context: {
          focused: this.isItemFocused()
        }
      });
    },
    isItemFocused() {
      return this.focusedOptionId === this.id;
    },
    onItemActionClick(event, navigate) {
      navigate && navigate(event);
    },
    onItemClick(event) {
      const command = this.getItemProp(this.item, "command");
      command && command({ originalEvent: event, item: this.item.item });
      this.$emit("item-click", { originalEvent: event, item: this.item, id: this.id });
    },
    containerClass() {
      return ["p-menuitem", this.item.class, { "p-focus": this.id === this.focusedOptionId, "p-disabled": this.disabled() }];
    },
    linkClass(routerProps) {
      return [
        "p-menuitem-link",
        {
          "router-link-active": routerProps && routerProps.isActive,
          "router-link-active-exact": this.exact && routerProps && routerProps.isExactActive
        }
      ];
    },
    visible() {
      return typeof this.item.visible === "function" ? this.item.visible() : this.item.visible !== false;
    },
    disabled() {
      return typeof this.item.disabled === "function" ? this.item.disabled() : this.item.disabled;
    },
    label() {
      return typeof this.item.label === "function" ? this.item.label() : this.item.label;
    }
  },
  computed: {
    iconClass() {
      return ["p-menuitem-icon", this.item.icon];
    }
  },
  directives: {
    ripple: Ripple
  }
};
const _hoisted_1$1$1 = ["id", "aria-label", "aria-disabled"];
const _hoisted_2$1$1 = ["href", "onClick"];
const _hoisted_3$1 = ["href", "target"];
function render$1$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _directive_ripple = resolveDirective("ripple");
  return $options.visible() ? (openBlock(), createElementBlock("li", mergeProps({
    key: 0,
    id: $props.id,
    class: $options.containerClass(),
    role: "menuitem",
    style: $props.item.style,
    "aria-label": $options.label(),
    "aria-disabled": $options.disabled()
  }, $options.getPTOptions("menuitem")), [
    createElementVNode("div", mergeProps({
      class: "p-menuitem-content",
      onClick: _cache[0] || (_cache[0] = ($event) => $options.onItemClick($event))
    }, $options.getPTOptions("content")), [
      !$props.templates.item ? (openBlock(), createElementBlock(Fragment$1, { key: 0 }, [
        $props.item.to && !$options.disabled() ? (openBlock(), createBlock(_component_router_link, {
          key: 0,
          to: $props.item.to,
          custom: ""
        }, {
          default: withCtx(({ navigate, href, isActive, isExactActive }) => [
            withDirectives((openBlock(), createElementBlock("a", mergeProps({
              href,
              class: $options.linkClass({ isActive, isExactActive }),
              tabindex: "-1",
              "aria-hidden": "true",
              onClick: ($event) => $options.onItemActionClick($event, navigate)
            }, $options.getPTOptions("action")), [
              $props.templates.itemicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.itemicon), {
                key: 0,
                item: $props.item,
                class: normalizeClass($options.iconClass)
              }, null, 8, ["item", "class"])) : $props.item.icon ? (openBlock(), createElementBlock("span", mergeProps({
                key: 1,
                class: $options.iconClass
              }, $options.getPTOptions("icon")), null, 16)) : createCommentVNode("", true),
              createElementVNode("span", mergeProps({ class: "p-menuitem-text" }, $options.getPTOptions("label")), toDisplayString($options.label()), 17)
            ], 16, _hoisted_2$1$1)), [
              [_directive_ripple]
            ])
          ]),
          _: 1
        }, 8, ["to"])) : withDirectives((openBlock(), createElementBlock("a", mergeProps({
          key: 1,
          href: $props.item.url,
          class: $options.linkClass(),
          target: $props.item.target,
          tabindex: "-1",
          "aria-hidden": "true"
        }, $options.getPTOptions("action")), [
          $props.templates.itemicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.itemicon), {
            key: 0,
            item: $props.item,
            class: normalizeClass($options.iconClass)
          }, null, 8, ["item", "class"])) : $props.item.icon ? (openBlock(), createElementBlock("span", mergeProps({
            key: 1,
            class: $options.iconClass
          }, $options.getPTOptions("icon")), null, 16)) : createCommentVNode("", true),
          createElementVNode("span", mergeProps({ class: "p-menuitem-text" }, $options.getPTOptions("label")), toDisplayString($options.label()), 17)
        ], 16, _hoisted_3$1)), [
          [_directive_ripple]
        ])
      ], 64)) : (openBlock(), createBlock(resolveDynamicComponent($props.templates.item), {
        key: 1,
        item: $props.item
      }, null, 8, ["item"]))
    ], 16)
  ], 16, _hoisted_1$1$1)) : createCommentVNode("", true);
}
script$1$1.render = render$1$1;
var script$2 = {
  name: "Menu",
  extends: script$A,
  inheritAttrs: false,
  emits: ["show", "hide", "focus", "blur"],
  props: {
    popup: {
      type: Boolean,
      default: false
    },
    model: {
      type: Array,
      default: null
    },
    appendTo: {
      type: String,
      default: "body"
    },
    autoZIndex: {
      type: Boolean,
      default: true
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    exact: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: Number,
      default: 0
    },
    "aria-label": {
      type: String,
      default: null
    },
    "aria-labelledby": {
      type: String,
      default: null
    }
  },
  data() {
    return {
      id: this.$attrs.id,
      overlayVisible: false,
      focused: false,
      focusedOptionIndex: -1,
      selectedOptionIndex: -1
    };
  },
  watch: {
    "$attrs.id": function(newValue) {
      this.id = newValue || UniqueComponentId();
    }
  },
  target: null,
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  container: null,
  list: null,
  mounted() {
    this.id = this.id || UniqueComponentId();
    if (!this.popup) {
      this.bindResizeListener();
      this.bindOutsideClickListener();
    }
  },
  beforeUnmount() {
    this.unbindResizeListener();
    this.unbindOutsideClickListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    this.target = null;
    if (this.container && this.autoZIndex) {
      ZIndexUtils.clear(this.container);
    }
    this.container = null;
  },
  methods: {
    itemClick(event) {
      const item = event.item;
      if (this.disabled(item)) {
        return;
      }
      if (item.command) {
        item.command(event);
      }
      if (item.to && event.navigate) {
        event.navigate(event.originalEvent);
      }
      if (this.overlayVisible)
        this.hide();
      if (!this.popup && this.focusedOptionIndex !== event.id) {
        this.focusedOptionIndex = event.id;
      }
    },
    onListFocus(event) {
      this.focused = true;
      if (!this.popup) {
        if (this.selectedOptionIndex !== -1) {
          this.changeFocusedOptionIndex(this.selectedOptionIndex);
          this.selectedOptionIndex = -1;
        } else
          this.changeFocusedOptionIndex(0);
      }
      this.$emit("focus", event);
    },
    onListBlur(event) {
      this.focused = false;
      this.focusedOptionIndex = -1;
      this.$emit("blur", event);
    },
    onListKeyDown(event) {
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
        case "Enter":
          this.onEnterKey(event);
          break;
        case "Space":
          this.onSpaceKey(event);
          break;
        case "Escape":
          if (this.popup) {
            DomHandler.focus(this.target);
            this.hide();
          }
        case "Tab":
          this.overlayVisible && this.hide();
          break;
      }
    },
    onArrowDownKey(event) {
      const optionIndex = this.findNextOptionIndex(this.focusedOptionIndex);
      this.changeFocusedOptionIndex(optionIndex);
      event.preventDefault();
    },
    onArrowUpKey(event) {
      if (event.altKey && this.popup) {
        DomHandler.focus(this.target);
        this.hide();
        event.preventDefault();
      } else {
        const optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex);
        this.changeFocusedOptionIndex(optionIndex);
        event.preventDefault();
      }
    },
    onHomeKey(event) {
      this.changeFocusedOptionIndex(0);
      event.preventDefault();
    },
    onEndKey(event) {
      this.changeFocusedOptionIndex(DomHandler.find(this.container, "li.p-menuitem:not(.p-disabled)").length - 1);
      event.preventDefault();
    },
    onEnterKey(event) {
      const element = DomHandler.findSingle(this.list, `li[id="${`${this.focusedOptionIndex}`}"]`);
      const anchorElement = element && DomHandler.findSingle(element, ".p-menuitem-link");
      this.popup && DomHandler.focus(this.target);
      anchorElement ? anchorElement.click() : element && element.click();
      event.preventDefault();
    },
    onSpaceKey(event) {
      this.onEnterKey(event);
    },
    findNextOptionIndex(index) {
      const links = DomHandler.find(this.container, "li.p-menuitem:not(.p-disabled)");
      const matchedOptionIndex = [...links].findIndex((link) => link.id === index);
      return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
    },
    findPrevOptionIndex(index) {
      const links = DomHandler.find(this.container, "li.p-menuitem:not(.p-disabled)");
      const matchedOptionIndex = [...links].findIndex((link) => link.id === index);
      return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
    },
    changeFocusedOptionIndex(index) {
      const links = DomHandler.find(this.container, "li.p-menuitem:not(.p-disabled)");
      let order = index >= links.length ? links.length - 1 : index < 0 ? 0 : index;
      order > -1 && (this.focusedOptionIndex = links[order].getAttribute("id"));
    },
    toggle(event) {
      if (this.overlayVisible)
        this.hide();
      else
        this.show(event);
    },
    show(event) {
      this.overlayVisible = true;
      this.target = event.currentTarget;
    },
    hide() {
      this.overlayVisible = false;
      this.target = null;
    },
    onEnter(el) {
      this.alignOverlay();
      this.bindOutsideClickListener();
      this.bindResizeListener();
      this.bindScrollListener();
      if (this.autoZIndex) {
        ZIndexUtils.set("menu", el, this.baseZIndex + this.$primevue.config.zIndex.menu);
      }
      if (this.popup) {
        DomHandler.focus(this.list);
        this.changeFocusedOptionIndex(0);
      }
      this.$emit("show");
    },
    onLeave() {
      this.unbindOutsideClickListener();
      this.unbindResizeListener();
      this.unbindScrollListener();
      this.$emit("hide");
    },
    onAfterLeave(el) {
      if (this.autoZIndex) {
        ZIndexUtils.clear(el);
      }
    },
    alignOverlay() {
      DomHandler.absolutePosition(this.container, this.target);
      this.container.style.minWidth = DomHandler.getOuterWidth(this.target) + "px";
    },
    bindOutsideClickListener() {
      if (!this.outsideClickListener) {
        this.outsideClickListener = (event) => {
          const isOutsideContainer = this.container && !this.container.contains(event.target);
          const isOutsideTarget = !(this.target && (this.target === event.target || this.target.contains(event.target)));
          if (this.overlayVisible && isOutsideContainer && isOutsideTarget) {
            this.hide();
          } else if (!this.popup && isOutsideContainer && isOutsideTarget) {
            this.focusedOptionIndex = -1;
          }
        };
        document.addEventListener("click", this.outsideClickListener);
      }
    },
    unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    bindScrollListener() {
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
          if (this.overlayVisible) {
            this.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener() {
      if (!this.resizeListener) {
        this.resizeListener = () => {
          if (this.overlayVisible && !DomHandler.isTouchDevice()) {
            this.hide();
          }
        };
        window.addEventListener("resize", this.resizeListener);
      }
    },
    unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    },
    visible(item) {
      return typeof item.visible === "function" ? item.visible() : item.visible !== false;
    },
    disabled(item) {
      return typeof item.disabled === "function" ? item.disabled() : item.disabled;
    },
    label(item) {
      return typeof item.label === "function" ? item.label() : item.label;
    },
    separatorClass(item) {
      return ["p-menuitem-separator", item.class];
    },
    onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.target
      });
    },
    containerRef(el) {
      this.container = el;
    },
    listRef(el) {
      this.list = el;
    }
  },
  computed: {
    containerClass() {
      return [
        "p-menu p-component",
        {
          "p-menu-overlay": this.popup,
          "p-input-filled": this.$primevue.config.inputStyle === "filled",
          "p-ripple-disabled": this.$primevue.config.ripple === false
        }
      ];
    },
    focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : null;
    }
  },
  components: {
    PVMenuitem: script$1$1,
    Portal: script$i
  }
};
const _hoisted_1$2 = ["id"];
const _hoisted_2$2 = ["id", "tabindex", "aria-activedescendant", "aria-label", "aria-labelledby"];
const _hoisted_3$2 = ["id"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PVMenuitem = resolveComponent("PVMenuitem");
  const _component_Portal = resolveComponent("Portal");
  return openBlock(), createBlock(_component_Portal, {
    appendTo: $props.appendTo,
    disabled: !$props.popup
  }, {
    default: withCtx(() => [
      createVNode(Transition, {
        name: "p-connected-overlay",
        onEnter: $options.onEnter,
        onLeave: $options.onLeave,
        onAfterLeave: $options.onAfterLeave
      }, {
        default: withCtx(() => [
          ($props.popup ? $data.overlayVisible : true) ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.containerRef,
            id: $data.id,
            class: $options.containerClass,
            onClick: _cache[3] || (_cache[3] = (...args) => $options.onOverlayClick && $options.onOverlayClick(...args))
          }, { ..._ctx.$attrs, ..._ctx.ptm("root") }), [
            _ctx.$slots.start ? (openBlock(), createElementBlock("div", mergeProps({
              key: 0,
              class: "p-menu-start"
            }, _ctx.ptm("start")), [
              renderSlot(_ctx.$slots, "start")
            ], 16)) : createCommentVNode("", true),
            createElementVNode("ul", mergeProps({
              ref: $options.listRef,
              id: $data.id + "_list",
              class: "p-menu-list p-reset",
              role: "menu",
              tabindex: $props.tabindex,
              "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
              "aria-label": _ctx.ariaLabel,
              "aria-labelledby": _ctx.ariaLabelledby,
              onFocus: _cache[0] || (_cache[0] = (...args) => $options.onListFocus && $options.onListFocus(...args)),
              onBlur: _cache[1] || (_cache[1] = (...args) => $options.onListBlur && $options.onListBlur(...args)),
              onKeydown: _cache[2] || (_cache[2] = (...args) => $options.onListKeyDown && $options.onListKeyDown(...args))
            }, _ctx.ptm("menu")), [
              (openBlock(true), createElementBlock(Fragment$1, null, renderList($props.model, (item, i) => {
                return openBlock(), createElementBlock(Fragment$1, {
                  key: $options.label(item) + i.toString()
                }, [
                  item.items && $options.visible(item) && !item.separator ? (openBlock(), createElementBlock(Fragment$1, { key: 0 }, [
                    item.items ? (openBlock(), createElementBlock("li", mergeProps({
                      key: 0,
                      id: $data.id + "_" + i,
                      class: "p-submenu-header",
                      role: "none"
                    }, _ctx.ptm("submenuHeader")), [
                      renderSlot(_ctx.$slots, "item", { item }, () => [
                        createTextVNode(toDisplayString($options.label(item)), 1)
                      ])
                    ], 16, _hoisted_3$2)) : createCommentVNode("", true),
                    (openBlock(true), createElementBlock(Fragment$1, null, renderList(item.items, (child, j) => {
                      return openBlock(), createElementBlock(Fragment$1, {
                        key: child.label + i + "_" + j
                      }, [
                        $options.visible(child) && !child.separator ? (openBlock(), createBlock(_component_PVMenuitem, {
                          key: 0,
                          id: $data.id + "_" + i + "_" + j,
                          item: child,
                          templates: _ctx.$slots,
                          exact: $props.exact,
                          focusedOptionId: $options.focusedOptionId,
                          onItemClick: $options.itemClick,
                          pt: _ctx.pt
                        }, null, 8, ["id", "item", "templates", "exact", "focusedOptionId", "onItemClick", "pt"])) : $options.visible(child) && child.separator ? (openBlock(), createElementBlock("li", mergeProps({
                          key: "separator" + i + j,
                          class: $options.separatorClass(item),
                          style: child.style,
                          role: "separator"
                        }, _ctx.ptm("separator")), null, 16)) : createCommentVNode("", true)
                      ], 64);
                    }), 128))
                  ], 64)) : $options.visible(item) && item.separator ? (openBlock(), createElementBlock("li", mergeProps({
                    key: "separator" + i.toString(),
                    class: $options.separatorClass(item),
                    style: item.style,
                    role: "separator"
                  }, _ctx.ptm("separator")), null, 16)) : (openBlock(), createBlock(_component_PVMenuitem, {
                    key: $options.label(item) + i.toString(),
                    id: $data.id + "_" + i,
                    item,
                    templates: _ctx.$slots,
                    exact: $props.exact,
                    focusedOptionId: $options.focusedOptionId,
                    onItemClick: $options.itemClick,
                    pt: _ctx.pt
                  }, null, 8, ["id", "item", "templates", "exact", "focusedOptionId", "onItemClick", "pt"]))
                ], 64);
              }), 128))
            ], 16, _hoisted_2$2),
            _ctx.$slots.end ? (openBlock(), createElementBlock("div", mergeProps({
              key: 1,
              class: "p-menu-end"
            }, _ctx.ptm("end")), [
              renderSlot(_ctx.$slots, "end")
            ], 16)) : createCommentVNode("", true)
          ], 16, _hoisted_1$2)) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["onEnter", "onLeave", "onAfterLeave"])
    ]),
    _: 3
  }, 8, ["appendTo", "disabled"]);
}
function styleInject$1(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style2 = document.createElement("style");
  style2.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style2, head.firstChild);
    } else {
      head.appendChild(style2);
    }
  } else {
    head.appendChild(style2);
  }
  if (style2.styleSheet) {
    style2.styleSheet.cssText = css;
  } else {
    style2.appendChild(document.createTextNode(css));
  }
}
var css_248z$1 = "\n.p-menu-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.p-menu ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.p-menu .p-menuitem-link {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n}\n.p-menu .p-menuitem-text {\n    line-height: 1;\n}\n";
styleInject$1(css_248z$1);
script$2.render = render$2;
var script$1 = {
  name: "ChevronUpIcon",
  extends: script$z
};
const _hoisted_1$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",
  fill: "currentColor"
}, null, -1);
const _hoisted_2$1 = [
  _hoisted_1$1
];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$1, 16);
}
script$1.render = render$1;
var script = {
  name: "Carousel",
  extends: script$A,
  emits: ["update:page"],
  props: {
    value: null,
    page: {
      type: Number,
      default: 0
    },
    numVisible: {
      type: Number,
      default: 1
    },
    numScroll: {
      type: Number,
      default: 1
    },
    responsiveOptions: Array,
    orientation: {
      type: String,
      default: "horizontal"
    },
    verticalViewPortHeight: {
      type: String,
      default: "300px"
    },
    contentClass: String,
    containerClass: String,
    indicatorsContentClass: String,
    circular: {
      type: Boolean,
      default: false
    },
    autoplayInterval: {
      type: Number,
      default: 0
    },
    showNavigators: {
      type: Boolean,
      default: true
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    prevButtonProps: {
      type: null,
      default: null
    },
    nextButtonProps: {
      type: null,
      default: null
    }
  },
  isRemainingItemsAdded: false,
  data() {
    return {
      remainingItems: 0,
      d_numVisible: this.numVisible,
      d_numScroll: this.numScroll,
      d_oldNumScroll: 0,
      d_oldNumVisible: 0,
      d_oldValue: null,
      d_page: this.page,
      totalShiftedItems: this.page * this.numScroll * -1,
      allowAutoplay: !!this.autoplayInterval,
      d_circular: this.circular || this.allowAutoplay,
      swipeThreshold: 20
    };
  },
  watch: {
    page(newValue) {
      this.d_page = newValue;
    },
    circular(newValue) {
      this.d_circular = newValue;
    },
    numVisible(newValue, oldValue) {
      this.d_numVisible = newValue;
      this.d_oldNumVisible = oldValue;
    },
    numScroll(newValue, oldValue) {
      this.d_oldNumScroll = oldValue;
      this.d_numScroll = newValue;
    },
    value(oldValue) {
      this.d_oldValue = oldValue;
    }
  },
  mounted() {
    let stateChanged = false;
    this.$el.setAttribute(this.attributeSelector, "");
    this.createStyle();
    this.calculatePosition();
    if (this.responsiveOptions) {
      this.bindDocumentListeners();
    }
    if (this.isCircular()) {
      let totalShiftedItems = this.totalShiftedItems;
      if (this.d_page === 0) {
        totalShiftedItems = -1 * this.d_numVisible;
      } else if (totalShiftedItems === 0) {
        totalShiftedItems = -1 * this.value.length;
        if (this.remainingItems > 0) {
          this.isRemainingItemsAdded = true;
        }
      }
      if (totalShiftedItems !== this.totalShiftedItems) {
        this.totalShiftedItems = totalShiftedItems;
        stateChanged = true;
      }
    }
    if (!stateChanged && this.isAutoplay()) {
      this.startAutoplay();
    }
  },
  updated() {
    const isCircular = this.isCircular();
    let stateChanged = false;
    let totalShiftedItems = this.totalShiftedItems;
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
    if (this.d_oldNumScroll !== this.d_numScroll || this.d_oldNumVisible !== this.d_numVisible || this.d_oldValue.length !== this.value.length) {
      this.remainingItems = (this.value.length - this.d_numVisible) % this.d_numScroll;
      let page = this.d_page;
      if (this.totalIndicators !== 0 && page >= this.totalIndicators) {
        page = this.totalIndicators - 1;
        this.$emit("update:page", page);
        this.d_page = page;
        stateChanged = true;
      }
      totalShiftedItems = page * this.d_numScroll * -1;
      if (isCircular) {
        totalShiftedItems -= this.d_numVisible;
      }
      if (page === this.totalIndicators - 1 && this.remainingItems > 0) {
        totalShiftedItems += -1 * this.remainingItems + this.d_numScroll;
        this.isRemainingItemsAdded = true;
      } else {
        this.isRemainingItemsAdded = false;
      }
      if (totalShiftedItems !== this.totalShiftedItems) {
        this.totalShiftedItems = totalShiftedItems;
        stateChanged = true;
      }
      this.d_oldNumScroll = this.d_numScroll;
      this.d_oldNumVisible = this.d_numVisible;
      this.d_oldValue = this.value;
      this.$refs.itemsContainer.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
    }
    if (isCircular) {
      if (this.d_page === 0) {
        totalShiftedItems = -1 * this.d_numVisible;
      } else if (totalShiftedItems === 0) {
        totalShiftedItems = -1 * this.value.length;
        if (this.remainingItems > 0) {
          this.isRemainingItemsAdded = true;
        }
      }
      if (totalShiftedItems !== this.totalShiftedItems) {
        this.totalShiftedItems = totalShiftedItems;
        stateChanged = true;
      }
    }
    if (!stateChanged && this.isAutoplay()) {
      this.startAutoplay();
    }
  },
  beforeUnmount() {
    if (this.responsiveOptions) {
      this.unbindDocumentListeners();
    }
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
  },
  methods: {
    step(dir, page) {
      let totalShiftedItems = this.totalShiftedItems;
      const isCircular = this.isCircular();
      if (page != null) {
        totalShiftedItems = this.d_numScroll * page * -1;
        if (isCircular) {
          totalShiftedItems -= this.d_numVisible;
        }
        this.isRemainingItemsAdded = false;
      } else {
        totalShiftedItems += this.d_numScroll * dir;
        if (this.isRemainingItemsAdded) {
          totalShiftedItems += this.remainingItems - this.d_numScroll * dir;
          this.isRemainingItemsAdded = false;
        }
        let originalShiftedItems = isCircular ? totalShiftedItems + this.d_numVisible : totalShiftedItems;
        page = Math.abs(Math.floor(originalShiftedItems / this.d_numScroll));
      }
      if (isCircular && this.d_page === this.totalIndicators - 1 && dir === -1) {
        totalShiftedItems = -1 * (this.value.length + this.d_numVisible);
        page = 0;
      } else if (isCircular && this.d_page === 0 && dir === 1) {
        totalShiftedItems = 0;
        page = this.totalIndicators - 1;
      } else if (page === this.totalIndicators - 1 && this.remainingItems > 0) {
        totalShiftedItems += this.remainingItems * -1 - this.d_numScroll * dir;
        this.isRemainingItemsAdded = true;
      }
      if (this.$refs.itemsContainer) {
        DomHandler.removeClass(this.$refs.itemsContainer, "p-items-hidden");
        this.$refs.itemsContainer.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
        this.$refs.itemsContainer.style.transition = "transform 500ms ease 0s";
      }
      this.totalShiftedItems = totalShiftedItems;
      this.$emit("update:page", page);
      this.d_page = page;
    },
    calculatePosition() {
      if (this.$refs.itemsContainer && this.responsiveOptions) {
        let windowWidth = window.innerWidth;
        let matchedResponsiveOptionsData = {
          numVisible: this.numVisible,
          numScroll: this.numScroll
        };
        for (let i = 0; i < this.responsiveOptions.length; i++) {
          let res = this.responsiveOptions[i];
          if (parseInt(res.breakpoint, 10) >= windowWidth) {
            matchedResponsiveOptionsData = res;
          }
        }
        if (this.d_numScroll !== matchedResponsiveOptionsData.numScroll) {
          let page = this.d_page;
          page = parseInt(page * this.d_numScroll / matchedResponsiveOptionsData.numScroll);
          this.totalShiftedItems = matchedResponsiveOptionsData.numScroll * page * -1;
          if (this.isCircular()) {
            this.totalShiftedItems -= matchedResponsiveOptionsData.numVisible;
          }
          this.d_numScroll = matchedResponsiveOptionsData.numScroll;
          this.$emit("update:page", page);
          this.d_page = page;
        }
        if (this.d_numVisible !== matchedResponsiveOptionsData.numVisible) {
          this.d_numVisible = matchedResponsiveOptionsData.numVisible;
        }
      }
    },
    navBackward(e, index) {
      if (this.d_circular || this.d_page !== 0) {
        this.step(1, index);
      }
      this.allowAutoplay = false;
      if (e.cancelable) {
        e.preventDefault();
      }
    },
    navForward(e, index) {
      if (this.d_circular || this.d_page < this.totalIndicators - 1) {
        this.step(-1, index);
      }
      this.allowAutoplay = false;
      if (e.cancelable) {
        e.preventDefault();
      }
    },
    onIndicatorClick(e, index) {
      let page = this.d_page;
      if (index > page) {
        this.navForward(e, index);
      } else if (index < page) {
        this.navBackward(e, index);
      }
    },
    onTransitionEnd() {
      if (this.$refs.itemsContainer) {
        DomHandler.addClass(this.$refs.itemsContainer, "p-items-hidden");
        this.$refs.itemsContainer.style.transition = "";
        if ((this.d_page === 0 || this.d_page === this.totalIndicators - 1) && this.isCircular()) {
          this.$refs.itemsContainer.style.transform = this.isVertical() ? `translate3d(0, ${this.totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${this.totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
        }
      }
    },
    onTouchStart(e) {
      let touchobj = e.changedTouches[0];
      this.startPos = {
        x: touchobj.pageX,
        y: touchobj.pageY
      };
    },
    onTouchMove(e) {
      if (e.cancelable) {
        e.preventDefault();
      }
    },
    onTouchEnd(e) {
      let touchobj = e.changedTouches[0];
      if (this.isVertical()) {
        this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
      } else {
        this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
      }
    },
    changePageOnTouch(e, diff) {
      if (Math.abs(diff) > this.swipeThreshold) {
        if (diff < 0) {
          this.navForward(e);
        } else {
          this.navBackward(e);
        }
      }
    },
    onIndicatorKeydown(event) {
      switch (event.code) {
        case "ArrowRight":
          this.onRightKey();
          break;
        case "ArrowLeft":
          this.onLeftKey();
          break;
        case "Home":
          this.onHomeKey();
          event.preventDefault();
          break;
        case "End":
          this.onEndKey();
          event.preventDefault();
          break;
        case "ArrowUp":
        case "ArrowDown":
          event.preventDefault();
          break;
        case "Tab":
          this.onTabKey();
          break;
      }
    },
    onRightKey() {
      const indicators = [...DomHandler.find(this.$refs.indicatorContent, ".p-carousel-indicator")];
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, activeIndex + 1 === indicators.length ? indicators.length - 1 : activeIndex + 1);
    },
    onLeftKey() {
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, activeIndex - 1 <= 0 ? 0 : activeIndex - 1);
    },
    onHomeKey() {
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, 0);
    },
    onEndKey() {
      const indicators = [...DomHandler.find(this.$refs.indicatorContent, ".p-carousel-indicator")];
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, indicators.length - 1);
    },
    onTabKey() {
      const indicators = [...DomHandler.find(this.$refs.indicatorContent, ".p-carousel-indicator")];
      const highlightedIndex = indicators.findIndex((ind) => DomHandler.hasClass(ind, "p-highlight"));
      const activeIndicator = DomHandler.findSingle(this.$refs.indicatorContent, '.p-carousel-indicator > button[tabindex="0"]');
      const activeIndex = indicators.findIndex((ind) => ind === activeIndicator.parentElement);
      indicators[activeIndex].children[0].tabIndex = "-1";
      indicators[highlightedIndex].children[0].tabIndex = "0";
    },
    findFocusedIndicatorIndex() {
      const indicators = [...DomHandler.find(this.$refs.indicatorContent, ".p-carousel-indicator")];
      const activeIndicator = DomHandler.findSingle(this.$refs.indicatorContent, '.p-carousel-indicator > button[tabindex="0"]');
      return indicators.findIndex((ind) => ind === activeIndicator.parentElement);
    },
    changedFocusedIndicator(prevInd, nextInd) {
      const indicators = [...DomHandler.find(this.$refs.indicatorContent, ".p-carousel-indicator")];
      indicators[prevInd].children[0].tabIndex = "-1";
      indicators[nextInd].children[0].tabIndex = "0";
      indicators[nextInd].children[0].focus();
    },
    bindDocumentListeners() {
      if (!this.documentResizeListener) {
        this.documentResizeListener = (e) => {
          this.calculatePosition(e);
        };
        window.addEventListener("resize", this.documentResizeListener);
      }
    },
    unbindDocumentListeners() {
      if (this.documentResizeListener) {
        window.removeEventListener("resize", this.documentResizeListener);
        this.documentResizeListener = null;
      }
    },
    startAutoplay() {
      this.interval = setInterval(() => {
        if (this.d_page === this.totalIndicators - 1) {
          this.step(-1, 0);
        } else {
          this.step(-1, this.d_page + 1);
        }
      }, this.autoplayInterval);
    },
    stopAutoplay() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    },
    createStyle() {
      if (!this.carouselStyle) {
        this.carouselStyle = document.createElement("style");
        this.carouselStyle.type = "text/css";
        document.body.appendChild(this.carouselStyle);
      }
      let innerHTML = `
                .p-carousel[${this.attributeSelector}] .p-carousel-item {
                    flex: 1 0 ${100 / this.d_numVisible}%
                }
            `;
      if (this.responsiveOptions) {
        let _responsiveOptions = [...this.responsiveOptions];
        _responsiveOptions.sort((data1, data2) => {
          const value1 = data1.breakpoint;
          const value2 = data2.breakpoint;
          let result = null;
          if (value1 == null && value2 != null)
            result = -1;
          else if (value1 != null && value2 == null)
            result = 1;
          else if (value1 == null && value2 == null)
            result = 0;
          else if (typeof value1 === "string" && typeof value2 === "string")
            result = value1.localeCompare(value2, void 0, { numeric: true });
          else
            result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
          return -1 * result;
        });
        for (let i = 0; i < _responsiveOptions.length; i++) {
          let res = _responsiveOptions[i];
          innerHTML += `
                        @media screen and (max-width: ${res.breakpoint}) {
                            .p-carousel[${this.attributeSelector}] .p-carousel-item {
                                flex: 1 0 ${100 / res.numVisible}%
                            }
                        }
                    `;
        }
      }
      this.carouselStyle.innerHTML = innerHTML;
    },
    isVertical() {
      return this.orientation === "vertical";
    },
    isCircular() {
      return this.value && this.d_circular && this.value.length >= this.d_numVisible;
    },
    isAutoplay() {
      return this.autoplayInterval && this.allowAutoplay;
    },
    firstIndex() {
      return this.isCircular() ? -1 * (this.totalShiftedItems + this.d_numVisible) : this.totalShiftedItems * -1;
    },
    lastIndex() {
      return this.firstIndex() + this.d_numVisible - 1;
    },
    ariaSlideNumber(value) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g, value) : void 0;
    },
    ariaPageLabel(value) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, value) : void 0;
    }
  },
  computed: {
    totalIndicators() {
      return this.value ? Math.max(Math.ceil((this.value.length - this.d_numVisible) / this.d_numScroll) + 1, 0) : 0;
    },
    backwardIsDisabled() {
      return this.value && (!this.circular || this.value.length < this.d_numVisible) && this.d_page === 0;
    },
    forwardIsDisabled() {
      return this.value && (!this.circular || this.value.length < this.d_numVisible) && (this.d_page === this.totalIndicators - 1 || this.totalIndicators === 0);
    },
    containerClasses() {
      return ["p-carousel-container", this.containerClass];
    },
    contentClasses() {
      return ["p-carousel-content ", this.contentClass];
    },
    indicatorsContentClasses() {
      return ["p-carousel-indicators p-reset", this.indicatorsContentClass];
    },
    ariaSlideLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slide : void 0;
    },
    ariaPrevButtonLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.prevPageLabel : void 0;
    },
    ariaNextButtonLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.nextPageLabel : void 0;
    },
    attributeSelector() {
      return UniqueComponentId();
    }
  },
  components: {
    ChevronRightIcon: script$q,
    ChevronDownIcon: script$g,
    ChevronLeftIcon: script$r,
    ChevronUpIcon: script$1
  },
  directives: {
    ripple: Ripple
  }
};
const _hoisted_1 = ["aria-live"];
const _hoisted_2 = ["disabled", "aria-label"];
const _hoisted_3 = ["aria-hidden", "aria-label", "aria-roledescription"];
const _hoisted_4 = ["disabled", "aria-label"];
const _hoisted_5 = ["tabindex", "aria-label", "aria-current", "onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    class: ["p-carousel p-component", { "p-carousel-vertical": $options.isVertical(), "p-carousel-horizontal": !$options.isVertical() }],
    role: "region"
  }, _ctx.ptm("root")), [
    _ctx.$slots.header ? (openBlock(), createElementBlock("div", mergeProps({
      key: 0,
      class: "p-carousel-header"
    }, _ctx.ptm("header")), [
      renderSlot(_ctx.$slots, "header")
    ], 16)) : createCommentVNode("", true),
    createElementVNode("div", mergeProps({ class: $options.contentClasses }, _ctx.ptm("content")), [
      createElementVNode("div", mergeProps({
        class: $options.containerClasses,
        "aria-live": $data.allowAutoplay ? "polite" : "off"
      }, _ctx.ptm("container")), [
        $props.showNavigators ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
          key: 0,
          type: "button",
          class: ["p-carousel-prev p-link", { "p-disabled": $options.backwardIsDisabled }],
          disabled: $options.backwardIsDisabled,
          "aria-label": $options.ariaPrevButtonLabel,
          onClick: _cache[0] || (_cache[0] = (...args) => $options.navBackward && $options.navBackward(...args))
        }, { ...$props.prevButtonProps, ..._ctx.ptm("previousButton") }), [
          renderSlot(_ctx.$slots, "previousicon", {}, () => [
            (openBlock(), createBlock(resolveDynamicComponent($options.isVertical() ? "ChevronUpIcon" : "ChevronLeftIcon"), mergeProps({ class: "p-carousel-next-icon" }, _ctx.ptm("previousButtonIcon")), null, 16))
          ])
        ], 16, _hoisted_2)), [
          [_directive_ripple]
        ]) : createCommentVNode("", true),
        createElementVNode("div", mergeProps({
          class: "p-carousel-items-content",
          style: [{ height: $options.isVertical() ? $props.verticalViewPortHeight : "auto" }],
          onTouchend: _cache[2] || (_cache[2] = (...args) => $options.onTouchEnd && $options.onTouchEnd(...args)),
          onTouchstart: _cache[3] || (_cache[3] = (...args) => $options.onTouchStart && $options.onTouchStart(...args)),
          onTouchmove: _cache[4] || (_cache[4] = (...args) => $options.onTouchMove && $options.onTouchMove(...args))
        }, _ctx.ptm("itemsContent")), [
          createElementVNode("div", mergeProps({
            ref: "itemsContainer",
            class: "p-carousel-items-container",
            onTransitionend: _cache[1] || (_cache[1] = (...args) => $options.onTransitionEnd && $options.onTransitionEnd(...args))
          }, _ctx.ptm("itemsContainer")), [
            $options.isCircular() ? (openBlock(true), createElementBlock(Fragment$1, { key: 0 }, renderList($props.value.slice(-1 * $data.d_numVisible), (item, index) => {
              return openBlock(), createElementBlock("div", mergeProps({
                key: index + "_scloned",
                class: [
                  "p-carousel-item p-carousel-item-cloned",
                  { "p-carousel-item-active": $data.totalShiftedItems * -1 === $props.value.length + $data.d_numVisible, "p-carousel-item-start": 0 === index, "p-carousel-item-end": $props.value.slice(-1 * $data.d_numVisible).length - 1 === index }
                ]
              }, _ctx.ptm("itemCloned")), [
                renderSlot(_ctx.$slots, "item", {
                  data: item,
                  index
                })
              ], 16);
            }), 128)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment$1, null, renderList($props.value, (item, index) => {
              return openBlock(), createElementBlock("div", mergeProps({
                key: index,
                class: ["p-carousel-item", { "p-carousel-item-active": $options.firstIndex() <= index && $options.lastIndex() >= index, "p-carousel-item-start": $options.firstIndex() === index, "p-carousel-item-end": $options.lastIndex() === index }],
                role: "group",
                "aria-hidden": $options.firstIndex() > index || $options.lastIndex() < index ? true : void 0,
                "aria-label": $options.ariaSlideNumber(index),
                "aria-roledescription": $options.ariaSlideLabel
              }, _ctx.ptm("item")), [
                renderSlot(_ctx.$slots, "item", {
                  data: item,
                  index
                })
              ], 16, _hoisted_3);
            }), 128)),
            $options.isCircular() ? (openBlock(true), createElementBlock(Fragment$1, { key: 1 }, renderList($props.value.slice(0, $data.d_numVisible), (item, index) => {
              return openBlock(), createElementBlock("div", mergeProps({
                key: index + "_fcloned",
                class: ["p-carousel-item p-carousel-item-cloned", { "p-carousel-item-active": $data.totalShiftedItems === 0, "p-carousel-item-start": 0 === index, "p-carousel-item-end": $props.value.slice(0, $data.d_numVisible).length - 1 === index }]
              }, _ctx.ptm("itemCloned")), [
                renderSlot(_ctx.$slots, "item", {
                  data: item,
                  index
                })
              ], 16);
            }), 128)) : createCommentVNode("", true)
          ], 16)
        ], 16),
        $props.showNavigators ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
          key: 1,
          type: "button",
          class: ["p-carousel-next p-link", { "p-disabled": $options.forwardIsDisabled }],
          disabled: $options.forwardIsDisabled,
          "aria-label": $options.ariaNextButtonLabel,
          onClick: _cache[5] || (_cache[5] = (...args) => $options.navForward && $options.navForward(...args))
        }, { ...$props.nextButtonProps, ..._ctx.ptm("nextButton") }), [
          renderSlot(_ctx.$slots, "nexticon", {}, () => [
            (openBlock(), createBlock(resolveDynamicComponent($options.isVertical() ? "ChevronDownIcon" : "ChevronRightIcon"), mergeProps({ class: "p-carousel-prev-icon" }, _ctx.ptm("nextButtonIcon")), null, 16))
          ])
        ], 16, _hoisted_4)), [
          [_directive_ripple]
        ]) : createCommentVNode("", true)
      ], 16, _hoisted_1),
      $options.totalIndicators >= 0 && $props.showIndicators ? (openBlock(), createElementBlock("ul", mergeProps({
        key: 0,
        ref: "indicatorContent",
        class: $options.indicatorsContentClasses,
        onKeydown: _cache[6] || (_cache[6] = (...args) => $options.onIndicatorKeydown && $options.onIndicatorKeydown(...args))
      }, _ctx.ptm("indicators")), [
        (openBlock(true), createElementBlock(Fragment$1, null, renderList($options.totalIndicators, (indicator, i) => {
          return openBlock(), createElementBlock("li", mergeProps({
            key: "p-carousel-indicator-" + i.toString(),
            class: ["p-carousel-indicator", { "p-highlight": $data.d_page === i }]
          }, _ctx.ptm("indicator")), [
            createElementVNode("button", mergeProps({
              class: "p-link",
              type: "button",
              tabindex: $data.d_page === i ? "0" : "-1",
              "aria-label": $options.ariaPageLabel(i + 1),
              "aria-current": $data.d_page === i ? "page" : void 0,
              onClick: ($event) => $options.onIndicatorClick($event, i)
            }, _ctx.ptm("indicatorButton")), null, 16, _hoisted_5)
          ], 16);
        }), 128))
      ], 16)) : createCommentVNode("", true)
    ], 16),
    _ctx.$slots.footer ? (openBlock(), createElementBlock("div", mergeProps({
      key: 1,
      class: "p-carousel-footer"
    }, _ctx.ptm("footer")), [
      renderSlot(_ctx.$slots, "footer")
    ], 16)) : createCommentVNode("", true)
  ], 16);
}
function styleInject(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style2 = document.createElement("style");
  style2.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style2, head.firstChild);
    } else {
      head.appendChild(style2);
    }
  } else {
    head.appendChild(style2);
  }
  if (style2.styleSheet) {
    style2.styleSheet.cssText = css;
  } else {
    style2.appendChild(document.createTextNode(css));
  }
}
var css_248z = "\n.p-carousel {\n    display: flex;\n    flex-direction: column;\n}\n.p-carousel-content {\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n}\n.p-carousel-prev,\n.p-carousel-next {\n    align-self: center;\n    flex-grow: 0;\n    flex-shrink: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    position: relative;\n}\n.p-carousel-container {\n    display: flex;\n    flex-direction: row;\n}\n.p-carousel-items-content {\n    overflow: hidden;\n    width: 100%;\n}\n.p-carousel-items-container {\n    display: flex;\n    flex-direction: row;\n}\n.p-carousel-indicators {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n.p-carousel-indicator > button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n/* Vertical */\n.p-carousel-vertical .p-carousel-container {\n    flex-direction: column;\n}\n.p-carousel-vertical .p-carousel-items-container {\n    flex-direction: column;\n    height: 100%;\n}\n\n/* Keyboard Support */\n.p-items-hidden .p-carousel-item {\n    visibility: hidden;\n}\n.p-items-hidden .p-carousel-item.p-carousel-item-active {\n    visibility: visible;\n}\n";
styleInject(css_248z);
script.render = render;
const primevue_7rYYRZQLyx = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Button", script$x);
  nuxtApp.vueApp.component("Menubar", script$t);
  nuxtApp.vueApp.component("Timeline", script$s);
  nuxtApp.vueApp.component("TabView", script$p);
  nuxtApp.vueApp.component("TabPanel", script$o);
  nuxtApp.vueApp.component("ScrollPanel", script$n);
  nuxtApp.vueApp.component("Card", script$m);
  nuxtApp.vueApp.component("Dropdown", script$d);
  nuxtApp.vueApp.component("Dialog", script$h);
  nuxtApp.vueApp.component("DeferredContent", script$c);
  nuxtApp.vueApp.component("Chips", script$a);
  nuxtApp.vueApp.component("ConfirmPopup", script$9);
  nuxtApp.vueApp.component("Toast", script$5);
  nuxtApp.vueApp.component("Textarea", script$4);
  nuxtApp.vueApp.component("InputText", script$3);
  nuxtApp.vueApp.component("Carousel", script);
  nuxtApp.vueApp.component("Menu", script$2);
  nuxtApp.vueApp.use(ConfirmationService);
  nuxtApp.vueApp.use(ToastService);
});
const vue_social_chat_7mJ2euWnuS = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSocialChat);
});
const _plugins = [
  plugin,
  components_plugin_KR1HBZs4kY,
  unhead_KgADcZ0jPj,
  router_jmwsqit4Rs,
  plugin_BEnDUEy4ze,
  plugin_hk8DoX26Pk,
  plugin_OrkQhMqHci,
  plugin_eTVJQYlCmx,
  masonry_UUne9oxs8w,
  primevue_7rYYRZQLyx,
  vue_social_chat_7mJ2euWnuS
];
function titleCase(s) {
  s = s.replaceAll("-", " ");
  return s.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase());
}
const siteUrl = "https://hksanda.netlify.app";
function resolveTrailingSlash(path) {
  return withoutTrailingSlash$1(path);
}
function resolveAbsoluteInternalLink(path) {
  return withBase$1(resolveTrailingSlash(path), siteUrl);
}
function createInternalLinkResolver() {
  return (path) => {
    return withBase$1(withoutTrailingSlash$1(path), siteUrl);
  };
}
function getBreadcrumbs(input) {
  const startNode = parseURL(input);
  const appendsTrailingSlash = hasTrailingSlash$1(startNode.pathname);
  const stepNode = (node, nodes = []) => {
    const fullPath = stringifyParsedURL(node);
    const currentPathName = node.pathname;
    nodes.push(fullPath || "/");
    node.pathname = currentPathName.substring(0, currentPathName.lastIndexOf("/"));
    if (appendsTrailingSlash)
      node.pathname = withTrailingSlash$1(node.pathname.substring(0, node.pathname.lastIndexOf("/")));
    if (node.pathname !== currentPathName)
      stepNode(node, nodes);
    return nodes;
  };
  return stepNode(startNode);
}
function useBreadcrumbs() {
  const router = useRouter();
  return computed(() => {
    const routes2 = router.getRoutes();
    const route = router.currentRoute.value;
    return getBreadcrumbs(route.path).reverse().map((path) => {
      var _a;
      return {
        path,
        meta: (_a = routes2.find((route2) => route2.path === path)) == null ? void 0 : _a.meta
      };
    }).map(({ path, meta }) => {
      let title = (meta == null ? void 0 : meta.breadcrumbTitle) || (meta == null ? void 0 : meta.title);
      if (!title) {
        if (path === "/")
          title = "Home";
        else
          title = titleCase(path.split("/").pop() || "");
      }
      return {
        schema: {
          name: title,
          item: resolveAbsoluteInternalLink(path)
        },
        to: resolveTrailingSlash(path),
        title
      };
    });
  });
}
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  props: {
    showAtRoot: { type: Boolean }
  },
  setup(__props) {
    const breadcrumbs = useBreadcrumbs();
    const schemaBreadcrumbs = computed(() => breadcrumbs.value.map((breadcrumb) => breadcrumb.schema));
    useSchemaOrg([
      defineBreadcrumb({
        itemListElement: schemaBreadcrumbs
      })
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<nav${ssrRenderAttrs(mergeProps({ "aria-label": "Breadcrumb" }, _attrs))}>`);
      if (_ctx.showAtRoot || unref(breadcrumbs).length > 1) {
        _push(`<ul><!--[-->`);
        ssrRenderList(unref(breadcrumbs), (item, key) => {
          _push(`<li>`);
          ssrRenderSlot(_ctx.$slots, "breadcrumb", {
            to: item.to,
            title: item.title,
            last: key === unref(breadcrumbs).length - 1,
            first: key === 0
          }, () => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: item.to
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(item.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          }, _push, _parent);
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-seo-kit/components/Breadcrumbs.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const robotsEnabledValue = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
const robotsDisabledValue = "noindex, nofollow";
function defineRobotMeta() {
  {
    const nuxtApp = useNuxtApp();
    useHead({
      meta: [
        {
          name: "robots",
          content: () => {
            var _a, _b, _c, _d;
            const routeRules = (_d = (_c = (_b = (_a = nuxtApp == null ? void 0 : nuxtApp.ssrContext) == null ? void 0 : _a.event) == null ? void 0 : _b.context) == null ? void 0 : _c._nitro) == null ? void 0 : _d.routeRules;
            if (typeof routeRules.robots === "string")
              return routeRules.robots;
            return (routeRules == null ? void 0 : routeRules.index) === false ? robotsDisabledValue : robotsEnabledValue;
          }
        }
      ]
    }, { mode: "server" });
  }
}
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SeoKit",
  __ssrInlineRender: true,
  props: {
    siteUrl: {},
    siteName: {},
    siteDescription: {},
    siteImage: {},
    titleSeparator: {},
    language: {}
  },
  setup(__props) {
    const props = __props;
    const runtimeConfig = useRuntimeConfig().public;
    const appConfig2 = useAppConfig();
    const SeoKitPublicRuntimeConfigKeys = [
      "siteName",
      "siteDescription",
      "siteImage",
      "siteUrl",
      "titleSeparator",
      "trailingSlash",
      "language"
    ];
    const siteMeta = computed(() => {
      const runtimeConfigExtract = {};
      for (const k of SeoKitPublicRuntimeConfigKeys) {
        if (runtimeConfig[k])
          runtimeConfigExtract[k] = runtimeConfig[k];
      }
      const propExtract = {};
      for (const k of SeoKitPublicRuntimeConfigKeys) {
        if (props[k])
          propExtract[k] = props[k];
      }
      return {
        ...runtimeConfigExtract,
        // app config has the highest priority
        // @ts-expect-error untyped
        ...appConfig2.site,
        ...propExtract
      };
    });
    const router = useRouter();
    const route = router.currentRoute;
    const resolveUrl = createInternalLinkResolver();
    function computeMeta() {
      var _a, _b, _c, _d, _e;
      const meta = [
        {
          property: "og:url",
          content: resolveUrl(((_a = route.value) == null ? void 0 : _a.path) || "/")
        },
        {
          property: "og:locale",
          content: siteMeta.value.language
        }
      ];
      if (siteMeta.value.siteName) {
        meta.push({
          property: "og:site_name",
          content: siteMeta.value.siteName
        });
      }
      let ogImage = ((_c = (_b = route.value) == null ? void 0 : _b.meta) == null ? void 0 : _c.image) || siteMeta.value.siteImage;
      if (typeof ogImage === "string") {
        if (ogImage.startsWith("/"))
          ogImage = resolveAbsoluteInternalLink(ogImage);
        meta.push({
          property: "og:image",
          content: ogImage
        });
      }
      const description = ((_e = (_d = route.value) == null ? void 0 : _d.meta) == null ? void 0 : _e.description) || siteMeta.value.siteDescription;
      if (description) {
        meta.push({
          name: "description",
          content: description
        });
      }
      return meta;
    }
    useHead({
      templateParams: {
        // @ts-expect-error untyped
        siteName: () => siteMeta.value.siteName,
        // @ts-expect-error untyped
        siteDescription: () => siteMeta.value.siteDescription,
        // @ts-expect-error untyped
        siteImage: () => siteMeta.value.siteImage,
        // @ts-expect-error untyped
        siteUrl: () => siteMeta.value.siteUrl,
        // @ts-expect-error untyped
        titleSeparator: () => siteMeta.value.titleSeparator,
        // @ts-expect-error untyped
        trailingSlash: () => siteMeta.value.trailingSlash,
        // @ts-expect-error untyped
        language: () => siteMeta.value.language
      },
      htmlAttrs: {
        lang: () => siteMeta.value.language
      },
      title: () => {
        var _a, _b, _c, _d, _e;
        if (typeof ((_b = (_a = route.value) == null ? void 0 : _a.meta) == null ? void 0 : _b.title) === "string")
          return (_d = (_c = route.value) == null ? void 0 : _c.meta) == null ? void 0 : _d.title;
        const path = ((_e = route.value) == null ? void 0 : _e.path) || "/";
        const lastSegment = path.split("/").pop();
        return lastSegment ? titleCase(lastSegment) : null;
      },
      link: [
        {
          rel: "canonical",
          href: () => {
            var _a;
            return resolveUrl(((_a = route.value) == null ? void 0 : _a.path) || "/");
          }
        }
      ],
      meta: computeMeta
    });
    useServerHead({
      meta: [
        {
          property: "og:type",
          content: "website"
        }
      ],
      link: [
        {
          rel: "profile",
          href: "https://gmpg.org/xfn/11"
        }
      ]
    });
    defineRobotMeta();
    useSchemaOrg([
      defineWebSite({
        name: () => {
          var _a;
          return ((_a = siteMeta.value) == null ? void 0 : _a.siteName) || "";
        },
        inLanguage: () => {
          var _a;
          return ((_a = siteMeta.value) == null ? void 0 : _a.language) || "";
        },
        description: () => {
          var _a;
          return ((_a = siteMeta.value) == null ? void 0 : _a.siteDescription) || "";
        }
      }),
      defineWebPage()
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-seo-kit/components/SeoKit.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const host = "https://hksanda.netlify.app";
const defaults = { "component": "OgImageBasic", "width": 1200, "height": 630 };
function defineOgImageScreenshot(options = {}) {
  var _a, _b;
  const router = useRouter();
  const route = ((_b = (_a = router == null ? void 0 : router.currentRoute) == null ? void 0 : _a.value) == null ? void 0 : _b.path) || "";
  defineOgImage({
    alt: `Web page screenshot${route ? ` of ${route}` : ""}.`,
    provider: "browser",
    component: null,
    static: true,
    ...options
  });
}
function defineOgImageStatic(options = {}) {
  defineOgImage({
    provider: "satori",
    static: true,
    ...options
  });
}
function defineOgImage(options = {}) {
  var _a, _b;
  {
    const router = useRouter();
    const route = ((_b = (_a = router == null ? void 0 : router.currentRoute) == null ? void 0 : _a.value) == null ? void 0 : _b.path) || "";
    const e = useRequestEvent();
    if (options.static && options.provider === "satori")
      e.res.setHeader("x-nitro-prerender", `${route === "/" ? "" : route}/__og_image__/og.png`);
    const meta = [
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:image:src",
        content: () => withBase$1(`${route === "/" ? "" : route}/__og_image__/og.png`, host)
      },
      {
        property: "og:image",
        content: () => withBase$1(`${route === "/" ? "" : route}/__og_image__/og.png`, host)
      },
      {
        property: "og:image:width",
        content: options.width || defaults.width
      },
      {
        property: "og:image:height",
        content: options.height || defaults.height
      }
    ];
    if (options.alt) {
      meta.push({
        property: "og:image:alt",
        content: options.alt
      });
    }
    useServerHead({
      meta,
      script: [
        {
          id: "nuxt-og-image-options",
          type: "application/json",
          innerHTML: () => {
            const payload = {
              title: "%s"
            };
            Object.entries(options).forEach(([key, val]) => {
              payload[key.replace(/-([a-z])/g, (g) => g[1].toUpperCase())] = val;
            });
            return payload;
          }
        }
      ]
    });
  }
}
const __nuxt_component_3 = /* @__PURE__ */ defineComponent({
  name: "OgImageScreenshot",
  setup(_, { attrs }) {
    defineOgImageScreenshot(attrs);
    return () => null;
  }
});
const __nuxt_component_4 = /* @__PURE__ */ defineComponent({
  name: "OgImageStatic",
  setup(_, { attrs }) {
    defineOgImageStatic(attrs);
    return () => null;
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = /* @__PURE__ */ defineComponent({
  name: "FragmentWrapper",
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? h(component, props === true ? {} : props, slots) : h(Fragment, {}, slots) };
};
const __nuxt_component_0$2 = /* @__PURE__ */ defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const done = nuxtApp.deferHydration();
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          return _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, { default: () => h(RouteProvider, { key, routeProps, pageKey: key, hasTransition }) })
            )
          ).default();
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const RouteProvider = /* @__PURE__ */ defineComponent({
  name: "RouteProvider",
  // TODO: Type props
  // eslint-disable-next-line vue/require-prop-types
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props.routeProps.Component);
    };
  }
});
const useImage = () => {
  return useNuxtApp().$img;
};
const baseImageProps = {
  src: { type: String, required: true },
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  preload: { type: Boolean, default: void 0 },
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: { type: String, default: void 0 },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding
    };
  });
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 }
};
const __nuxt_component_0$1 = /* @__PURE__ */ defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (props.sizes) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          }
        }]
      });
    }
    const imgEl = ref();
    return () => h("img", {
      ref: imgEl,
      key: src.value,
      src: src.value,
      ...attrs.value,
      ...ctx.attrs
    });
  }
});
const _sfc_main$5 = {
  __name: "WhatsappChat",
  __ssrInlineRender: true,
  setup(__props) {
    const attendants = [
      {
        app: "whatsapp",
        label: "總教練",
        name: "傅潤車",
        number: "85297322082",
        avatar: {
          // src: "/src/assets/images/avatar/wymanfu.png",
          src: "https://upload.cc/i1/2022/01/15/2QaciX.png",
          alt: "傅潤車"
        }
      }
      // ...
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DeferredContent = resolveComponent("DeferredContent");
      const _component_nuxt_img = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_DeferredContent, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SocialChat), {
              attendants,
              icon: ""
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}>立即致電或whatsApp查詢有關開班詳情及確認上課時間</p>`);
                } else {
                  return [
                    createVNode("p", null, "立即致電或whatsApp查詢有關開班詳情及確認上課時間")
                  ];
                }
              }),
              button: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_nuxt_img, {
                    format: "webp",
                    alt: "icon whatsapp",
                    "aria-hidden": "true",
                    src: "https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_nuxt_img, {
                      format: "webp",
                      alt: "icon whatsapp",
                      "aria-hidden": "true",
                      src: "https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SocialChat), {
                attendants,
                icon: ""
              }, {
                header: withCtx(() => [
                  createVNode("p", null, "立即致電或whatsApp查詢有關開班詳情及確認上課時間")
                ]),
                button: withCtx(() => [
                  createVNode(_component_nuxt_img, {
                    format: "webp",
                    alt: "icon whatsapp",
                    "aria-hidden": "true",
                    src: "https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WhatsappChat.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$5;
gql$1`
    mutation addViewMutation($details: ViewInput) {
        addView(details: $details) {
            title
            content
            route
        }
    }
`;
const GET_VIEW_BY_ROUTE = gql$1`
    query getViewByRouteQuery($route: String) {
        getViewByRoute(route: $route) {
            id
            title
            content
            route
        }
    }
`;
gql$1`
    query getViewQuery {
        getView {
            id
            title
            route
            content
        }
    }
`;
const UPDATE_VIEW = gql$1`
    mutation updateViewMutation($details: ViewInput) {
        updateView(details: $details) {
            id
            title
            content
            route
        }
    }
`;
gql$1`
    mutation addMasonryMutation($masonry: MasonryInput) {
        addMasonry(masonry: $masonry) {
            id
            title
            route
            order
            images {
                imageUrl
                alt
                title
                paragraph
            }
        }
    }
`;
const GET_MASONRY_BY_ID = gql$1`
    query GetMasonryByIdQuery($id: ID) {
        getMasonryById(id: $id) {
            id
            route
            title
            order
            images {
                imageUrl
                alt
                title
                paragraph
            }
        }
    }
`;
const GET_MASONRY_BY_ROUTE = gql$1`
    query GetMasonryByRouteQuery($route: String) {
        getMasonryByRoute(route: $route) {
            id
            route
            title
            order
            images {
                imageUrl
                alt
                title
                paragraph
            }
        }
    }
`;
gql$1`
    mutation updateMasonryMutation($masonry: MasonryInput) {
        updateMasonry(masonry: $masonry) {
            id
            route
            order
            title
            images {
                imageUrl
                alt
                title
                paragraph
            }
        }
    }
`;
const md = new MarkdownIt().set({
  html: true,
  linkify: true,
  typographer: true,
  xhtmlOut: true
});
const parseMarkdown = (content) => {
  const markdown = md.render(content);
  return markdown.replace(/(li>\n)/gm, "li>").replace(/(ul>\n)/gm, "ul>");
};
const useMainStore = defineStore("main", {
  state: () => ({
    lang: "zh-HK",
    isAdmin: "production" === "development",
    openModel: false,
    editModel: {
      type: "",
      content: "",
      submitFunction: () => {
        return null;
      }
    },
    views: [],
    masonries: [],
    route: ""
  }),
  getters: {
    getLang: (state) => {
      return state.lang;
    },
    getViewByRoute: (state) => (route) => {
      console.log("state.views", state.views);
      return state.views && state.views.find((view) => view.route === route);
    },
    getMasonries: (state) => {
      return state.masonries;
    },
    getIsAdmin: (state) => {
      return state.isAdmin;
    },
    getModelIsOpen: (state) => {
      return state.openModel;
    },
    getModelDetails: (state) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
      let modelDetails = Object.assign({}, state.editModel);
      switch (state.editModel.type) {
        case "carousel": {
          break;
        }
        case "course": {
          modelDetails.content = {
            name: (_a = modelDetails.content) == null ? void 0 : _a.name,
            content: ((_b = modelDetails.content) == null ? void 0 : _b.content.length) > 0 ? parseMarkdown((_c = modelDetails.content) == null ? void 0 : _c.content) : ""
          };
          break;
        }
        case "class": {
          modelDetails.content = {
            classId: (_d = modelDetails.content) == null ? void 0 : _d.id,
            title: (_e = modelDetails.content) == null ? void 0 : _e.title,
            type: (_f = modelDetails.content) == null ? void 0 : _f.type,
            time: (_g = modelDetails.content) == null ? void 0 : _g.time,
            students: (_h = modelDetails.content) == null ? void 0 : _h.students,
            location: (_i = modelDetails.content) == null ? void 0 : _i.location,
            mapQuery: (_j = modelDetails.content) == null ? void 0 : _j.mapQuery,
            classroom: (_k = modelDetails.content) == null ? void 0 : _k.classroom
          };
          break;
        }
        case "instructor": {
          modelDetails.content = {
            instructorId: (_l = modelDetails.content) == null ? void 0 : _l.id,
            name: (_m = modelDetails.content) == null ? void 0 : _m.name,
            strengths: (_n = modelDetails.content) == null ? void 0 : _n.strengths,
            certificates: (_o = modelDetails.content) == null ? void 0 : _o.certificates,
            experiences: (_p = modelDetails.content) == null ? void 0 : _p.experiences
          };
          break;
        }
        case "rank": {
          modelDetails.content = {
            rankId: (_q = modelDetails.content) == null ? void 0 : _q.id,
            name: (_r = modelDetails.content) == null ? void 0 : _r.name,
            awardees: (_s = modelDetails.content) == null ? void 0 : _s.awardees
          };
          break;
        }
        default: {
          modelDetails.type = "text";
          break;
        }
      }
      return modelDetails;
    }
  },
  actions: {
    setLang(lang) {
      this.lang = lang;
      return this.lang;
    },
    localizePage() {
    },
    // async getView() {
    //     const { data } = await useAsyncQuery(GET_VIEW);
    //     console.log("getView", data)
    //     this.views = data.value?.getView;
    // },
    getMasonry(masonryId) {
      const { result } = useQuery(GET_MASONRY_BY_ID, { id: masonryId });
      this.masonries = result.value.getMasonry;
    },
    toggleModel(editDetails = {}) {
      this.editModel = Object.assign({}, editDetails);
      this.openModel = !this.openModel;
      if (!this.openModel) {
        const defaultModel = {
          type: "",
          submitFunction: () => {
          },
          content: ""
        };
        this.editModel = defaultModel;
      }
    },
    async updateView(newView) {
      const { mutate } = useMutation(UPDATE_VIEW, { details: newView });
      console.log(mutate);
    },
    setIsAdmin() {
      this.isAdmin = true;
    }
    // setCourseContent(courseContent) {
    //     this.courseContent = courseContent;
    // },
    // setContacts(contacts) {
    //     this.contacts = contacts;
    // },
    // setInterviews(interviews) {
    //     this.interviews = interviews;
    // },
  }
});
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$4 = {
  __name: "Localize",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useMainStore();
    const { getLang } = storeToRefs(store);
    const lang = computed({
      get() {
        return store.getLang;
      },
      set(lang2) {
        return store.setLang(lang2);
      }
    });
    const { localizePage } = store;
    watch(
      () => lang,
      () => {
        console.log(getLang);
        localizePage();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Localize.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Localize = _sfc_main$4;
const _imports_0 = "" + __buildAssetsURL("logo-71.945ca50d.png");
const _imports_1 = "" + __buildAssetsURL("logo-58.159d8038.png");
const _sfc_main$3 = {
  __name: "Navigation",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const menuItems = routes.filter(
      (route2) => !("meta" in route2) || !("hidden" in route2.meta)
    ).map((route2) => ({
      label: route2.name,
      to: route2.path,
      items: "children" in route2 ? route2.children.map((child) => ({
        label: child.name,
        to: route2.path + "/" + child.path
      })) : null,
      icon: route2.meta ? route2.meta.icon : null
    }));
    const childrenRoutes = computed(() => {
      const currentTopLevelRoute = route.matched[0].path;
      const currentChildrenRoutes = menuItems.filter((route2) => route2.to == currentTopLevelRoute);
      if (currentChildrenRoutes.length > 0) {
        return currentChildrenRoutes[0].items;
      }
      return null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Menubar = resolveComponent("Menubar");
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_Menu = resolveComponent("Menu");
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Menubar, {
        model: unref(menuItems),
        class: "hidden lg:flex"
      }, {
        start: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img alt="logo" class="mr-2" height="72"${ssrRenderAttr("src", _imports_0)}${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      alt: "logo",
                      class: "mr-2",
                      height: "72",
                      src: _imports_0
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, { to: "/" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    alt: "logo",
                    class: "mr-2",
                    height: "72",
                    src: _imports_0
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        end: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Localize), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Localize))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="block lg:hidden"><header class="flex m-1 justify-content-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img format="webp" alt="logo" class="m-auto mr-2" height="58"${ssrRenderAttr("src", _imports_1)}${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                format: "webp",
                alt: "logo",
                class: "m-auto mr-2",
                height: "58",
                src: _imports_1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Localize), { class: "right-0 mr-1 my-auto h-3rem" }, null, _parent));
      _push(`</header>`);
      _push(ssrRenderComponent(_component_Menubar, {
        model: unref(menuItems),
        class: "flex flex-wrap"
      }, null, _parent));
      if (unref(childrenRoutes) != null) {
        _push(ssrRenderComponent(_component_Menu, { model: unref(childrenRoutes) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Navigation = _sfc_main$3;
const _sfc_main$2 = {
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  setup(__props) {
    const routes2 = computed(() => {
      const route = useRoute();
      const path = route.matched;
      return path;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      if (unref(routes2).length > 1 && unref(routes2)[0].name != unref(routes2)[1].name) {
        _push(`<nav${ssrRenderAttrs(mergeProps({ "aria-label": "breadcrumb" }, _attrs))}><ol class="breadcrumb"><!--[-->`);
        ssrRenderList(unref(routes2), (route) => {
          _push(`<li class="breadcrumb-item">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: route.path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(route.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(route.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ol></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Breadcrumb.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Breadcrumb = _sfc_main$2;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    useMainStore();
    const currentYear = moment().format("YYYY");
    useSchemaOrg([
      defineOrganization({
        name: "香港極拳道武術協會 | 中國武術散打、功夫、自衛術",
        logo: "/logo.png",
        sameAs: ["https://www.facebook.com/people/%E6%95%A3%E6%89%93%E8%87%AA%E8%A1%9B%E8%A1%93%E8%A8%93%E7%B7%B4%E7%8F%AD/100057130702824/", "https://www.hksanda.com"]
      }),
      defineWebSite({
        name: "中國武術散打、功夫、自衛術（香港）"
      }),
      defineWebPage()
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Breadcrumbs = _sfc_main$7;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_ScrollPanel = resolveComponent("ScrollPanel");
      const _component_SeoKit = _sfc_main$6;
      const _component_OgImageScreenshot = __nuxt_component_3;
      const _component_OgImageStatic = __nuxt_component_4;
      const _component_nuxt_page = __nuxt_component_0$2;
      const _component_whatsapp_chat = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "app-user" }, _attrs))}><div aria-hidden="true" class="bg__text-outer d-none d-sm-block"><div id="bg__text-1" class="bg__text noselect"> 勇敢 </div><div id="bg__text-2" class="bg__text noselect"> 頑強 </div><div id="bg__text-3" class="bg__text noselect"> 不怕苦 </div><div id="bg__text-4" class="bg__text noselect"> 敢於拼搏 </div><div class="keywords noselect"><ul><li>武術</li><li>散打</li><li>自衛術</li><li>女子自衛術</li><li>兒童武術班</li><li>幼兒武術班</li><li>中國武術班</li><li>泰拳課程</li><li>太極班</li><li>武術班</li><li>散打班</li><li>自衛術課程</li><li>私人自衛術課程</li><li>泰拳班</li><li>功夫</li><li>兒童功夫班</li><li>泰拳</li><li>女子拳擊課程</li></ul></div></div><div>`);
      _push(ssrRenderComponent(unref(Navigation), null, null, _parent));
      _push(ssrRenderComponent(unref(Breadcrumb), { class: "d-lg-none" }, null, _parent));
      _push(`<div class="main" role="main">`);
      _push(ssrRenderComponent(unref(Breadcrumb), { class: "d-none d-lg-block" }, null, _parent));
      _push(`<template>`);
      _push(ssrRenderComponent(_component_Breadcrumbs, null, {
        breadcrumb: withCtx(({ to, title }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, { to }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, { to }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(title), 1)
                ]),
                _: 2
              }, 1032, ["to"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</template>`);
      _push(ssrRenderComponent(_component_ScrollPanel, { style: { "height": "100%", "width": "100%" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container__outer container"${_scopeId}><div class="container__inner"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SeoKit, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_OgImageScreenshot, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_OgImageStatic, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_nuxt_page, null, null, _parent2, _scopeId));
            _push2(`</div></div><small${_scopeId}>© 2021-${ssrInterpolate(unref(currentYear))} Jasmine Yeung &amp; Bryan Yeung</small>`);
          } else {
            return [
              createVNode("div", { class: "container__outer container" }, [
                createVNode("div", { class: "container__inner" }, [
                  createVNode(_component_SeoKit),
                  createVNode(_component_OgImageScreenshot),
                  createVNode(_component_OgImageStatic),
                  createVNode(_component_nuxt_page)
                ])
              ]),
              createVNode("small", null, "© 2021-" + toDisplayString(unref(currentYear)) + " Jasmine Yeung & Bryan Yeung", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_whatsapp_chat, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/error-component-957b681e.mjs').then((r) => r.default || r));
    const IslandRenderer = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/island-renderer-7a002850.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = callWithNuxt(nuxtApp, showError, [err]);
        onServerPrefetch(() => p);
        return false;
      }
    });
    const { islandContext } = nuxtApp.ssrContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = _sfc_main;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { GET_VIEW_BY_ROUTE as G, __nuxt_component_0$3 as _, useAsyncQuery as a, __nuxt_component_0$1 as b, createError as c, useMainStore as d, entry$1 as default, useMutation as e, __nuxt_component_0$2 as f, gql$1 as g, __nuxt_component_0 as h, GET_MASONRY_BY_ROUTE as i, storeToRefs as s, useHead as u };
//# sourceMappingURL=server.mjs.map
