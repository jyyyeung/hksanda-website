globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, lazyEventHandler, setHeader, getRequestHost, getRequestProtocol, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn, defu as defu$1 } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash, withBase, withTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import { createIPX, createIPXMiddleware } from 'ipx';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/**": {
        "index": true
      },
      "/admin": {
        "index": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "trailingSlash": false,
    "titleSeparator": "|",
    "siteName": "中國武術散打、功夫、自衛術（香港）",
    "siteUrl": "https://hksanda.netlify.app",
    "siteDescription": "「香港極拳道武術協會」是香港政府及體育協會暨奧林匹克委員會認可及資助的體育總會「香港武術聯會」及「香港泰拳理事會」認可之屬會會員。本會推廣『散打自衛術』是香港政府認可及資助的武術運動項目之一。",
    "language": "zh-HK",
    "nuxt-unhead": {
      "seoOptimise": true,
      "resolveAliases": false
    }
  },
  "indexable": true,
  "nuxt-simple-sitemap": {
    "enabled": true,
    "autoLastmod": true,
    "siteUrl": "https://hksanda.netlify.app",
    "trailingSlash": false,
    "inferStaticPagesAsRoutes": true,
    "discoverImages": true,
    "dynamicUrlsApiEndpoint": "/api/_sitemap-urls",
    "include": [],
    "exclude": [],
    "urls": [
      {
        "loc": "/404",
        "lastmod": "2023-05-19T10:55:13.310Z"
      },
      {
        "loc": "/about",
        "lastmod": "2023-05-19T10:55:13.311Z"
      },
      {
        "loc": "/about/bylaws",
        "lastmod": "2023-05-19T10:55:13.311Z"
      },
      {
        "loc": "/about/media-interviews",
        "lastmod": "2023-05-19T11:23:24.979Z"
      },
      {
        "loc": "/about/our-team",
        "lastmod": "2023-05-19T10:55:13.312Z"
      },
      {
        "loc": "/admin",
        "lastmod": "2023-05-19T10:55:13.313Z"
      },
      {
        "loc": "/assessments",
        "lastmod": "2023-05-19T10:55:13.313Z"
      },
      {
        "loc": "/assessments/hk-badge",
        "lastmod": "2023-05-19T10:55:13.313Z"
      },
      {
        "loc": "/assessments/syllabus",
        "lastmod": "2023-05-19T10:55:13.314Z"
      },
      {
        "loc": "/contact",
        "lastmod": "2023-05-19T10:55:13.314Z"
      },
      {
        "loc": "/course",
        "lastmod": "2023-05-19T10:55:13.314Z"
      },
      {
        "loc": "/course/class",
        "lastmod": "2023-05-19T10:55:13.314Z"
      },
      {
        "loc": "/course/content",
        "lastmod": "2023-05-19T10:55:13.314Z"
      },
      {
        "loc": "/course/cooperation",
        "lastmod": "2023-05-19T10:55:13.314Z"
      },
      {
        "loc": "/course/features",
        "lastmod": "2023-05-19T10:55:13.315Z"
      },
      {
        "loc": "/course/session",
        "lastmod": "2023-05-19T10:55:13.315Z"
      },
      {
        "loc": "/gallery",
        "lastmod": "2023-05-19T10:55:13.315Z"
      },
      {
        "loc": "/gallery/training",
        "lastmod": "2023-05-19T11:23:37.001Z"
      },
      {
        "loc": "/gallery/videos",
        "lastmod": "2023-05-19T10:55:13.315Z"
      },
      {
        "loc": "/",
        "lastmod": "2023-05-19T11:26:38.106Z"
      }
    ],
    "sitemaps": false,
    "xsl": "/__sitemap__/style.xsl",
    "defaults": {},
    "hostname": "https://hksanda.netlify.app",
    "isNuxtContentDocumentDriven": false,
    "hasApiRoutesUrl": false,
    "pagesDirs": [
      "/Users/yyymx/Dev/Projects/Current/hksanda-website/pages",
      "/Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/nuxt-seo-kit/pages"
    ],
    "hasPrerenderedRoutesPayload": true,
    "extensions": [
      ".js",
      ".jsx",
      ".mjs",
      ".ts",
      ".tsx",
      ".vue"
    ]
  },
  "ipx": {
    "dir": "../public",
    "domains": [],
    "sharp": {},
    "alias": {}
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {
  ["server:picgo-config.json"]: {
    import: () => import('../raw/picgo-config.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"59-B6QDuJNk0fIAqfA8YxvgV2pg81w\"","mtime":"2023-05-19T10:55:13.319Z"}
  }
};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = "if (!(\"requestIdleCallback\" in w) || !(\"requestAnimationFrame\" in w))\n  return new Promise((resolve) => resolve(\"not supported\"));\nfunction eventListeners() {\n  const c = new AbortController();\n  const p = new Promise((resolve) => {\n    const hydrateOnEvents = \"mousemove,scroll,keydown,click,touchstart,wheel\".split(\",\");\n    function handler(e) {\n      hydrateOnEvents.forEach((e2) => w.removeEventListener(e2, handler));\n      requestAnimationFrame(() => resolve(e));\n    }\n    hydrateOnEvents.forEach((e) => {\n      w.addEventListener(e, handler, {\n        capture: true,\n        once: true,\n        passive: true,\n        signal: c.signal\n      });\n    });\n  });\n  return { c: () => c.abort(), p };\n}\nfunction idleListener() {\n  let id;\n  const p = new Promise((resolve) => {\n    const isMobile = w.innerWidth < 640;\n    const timeout = isMobile ? Number.parseInt(\"5000\") : Number.parseInt(\"4000\");\n    const timeoutDelay = () => setTimeout(\n      () => requestAnimationFrame(() => resolve(\"timeout\")),\n      timeout\n    );\n    id = w.requestIdleCallback(timeoutDelay, { timeout: Number.parseInt(\"7000\") });\n  });\n  return { c: () => window.cancelIdleCallback(id), p };\n}\nconst triggers = [idleListener(), eventListeners()];\nconst hydrationPromise = Promise.race(\n  triggers.map((t) => t.p)\n).finally(() => {\n  triggers.forEach((t) => t.c());\n});\nreturn hydrationPromise;\n";
const replayScript = "(() => {\n  w._$delayHydration.then((e) => {\n    if (!(e instanceof PointerEvent) && !(e instanceof MouseEvent) && !(e instanceof TouchEvent))\n      return;\n    if (e instanceof MouseEvent && e.type !== \"click\")\n      return;\n    setTimeout(\n      () => w.requestIdleCallback(\n        () => setTimeout(() => e.target?.click(), 500)\n      ),\n      50\n    );\n  });\n})();\n";
const include = [];
const exclude = [];

function createFilter$1(options = {}) {
  const include2 = options.include || [];
  const exclude2 = options.exclude || [];
  return function(path) {
    for (const v of [{ rules: exclude2, result: false }, { rules: include2, result: true }]) {
      const regexRules = v.rules.filter((r) => r instanceof RegExp);
      if (regexRules.some((r) => r.test(path)))
        return v.result;
      const stringRules = v.rules.filter((r) => typeof r === "string");
      if (stringRules.length > 0) {
        const routes = {};
        for (const r of stringRules) {
          if (r === path)
            return v.result;
          routes[r] = true;
        }
        const routeRulesMatcher = toRouteMatcher(createRouter({ routes, ...options }));
        if (routeRulesMatcher.matchAll(path).length > 0)
          return Boolean(v.result);
      }
    }
    return include2.length === 0;
  };
}
const _9hggCh1zWL = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext, { event }) => {
    if (include.length || exclude.length) {
      const filter = createFilter$1({ include, exclude });
      if (!filter(event.req.url))
        return;
    }
    let extraScripts = "";
    extraScripts += `;${replayScript}`;
    htmlContext.bodyAppend.push(`<script>
(function() {
  const w = window;
  w._$delayHydration = (() => {
    ${script}}
  )();
  ${""}
  ${extraScripts}
})();
<\/script>`);
  });
});

const plugins = [
  _9hggCh1zWL
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-05-19T12:06:24.228Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"8fa0-Rh/neyx7gewH11sHZjXJ2yC9Ymo\"",
    "mtime": "2023-05-19T12:07:19.830Z",
    "size": 36768,
    "path": "../public/index.html"
  },
  "/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"1309-/eagAsTvxZrfHxcuStu70dbAY8I\"",
    "mtime": "2023-05-19T12:07:22.041Z",
    "size": 4873,
    "path": "../public/index.html.br"
  },
  "/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"17be-Nbq+7TZDYA/k0r4PjJncuDudtys\"",
    "mtime": "2023-05-19T12:07:22.013Z",
    "size": 6078,
    "path": "../public/index.html.gz"
  },
  "/inter-latin-ext-400-normal.woff": {
    "type": "font/woff",
    "etag": "\"abcc-ScgUlgU6NMSchk9cXQMUZeQG8fc\"",
    "mtime": "2023-05-19T12:06:24.234Z",
    "size": 43980,
    "path": "../public/inter-latin-ext-400-normal.woff"
  },
  "/inter-latin-ext-700-normal.woff": {
    "type": "font/woff",
    "etag": "\"bb34-btkmYi1MS9GkMFR4+gGPWRFxwKU\"",
    "mtime": "2023-05-19T12:06:24.234Z",
    "size": 47924,
    "path": "../public/inter-latin-ext-700-normal.woff"
  },
  "/logo.png": {
    "type": "image/png",
    "etag": "\"18b70-rnt6VS99pCcxDiH8QKolM6uZ3R8\"",
    "mtime": "2023-05-19T12:06:24.228Z",
    "size": 101232,
    "path": "../public/logo.png"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3f-c+q/bw1yocM3ObWlkRLFcpRV20M\"",
    "mtime": "2023-05-19T12:07:19.835Z",
    "size": 63,
    "path": "../public/robots.txt"
  },
  "/svg2png.wasm": {
    "type": "application/wasm",
    "etag": "\"1bf667-JsF09mJVeSqlxzPPOrdAtUEgwrc\"",
    "mtime": "2023-05-19T12:06:24.233Z",
    "size": 1832551,
    "path": "../public/svg2png.wasm"
  },
  "/sw.js": {
    "type": "application/javascript",
    "etag": "\"ea8-VXEKUwGcpd8Fyuu61xrzpLAq49k\"",
    "mtime": "2023-05-19T12:07:23.935Z",
    "size": 3752,
    "path": "../public/sw.js"
  },
  "/sw.js.map": {
    "type": "application/json",
    "etag": "\"211c-HYEK3bJkvIra42DEVurJbhFgkYQ\"",
    "mtime": "2023-05-19T12:07:23.930Z",
    "size": 8476,
    "path": "../public/sw.js.map"
  },
  "/workbox-7369c0e1.js": {
    "type": "application/javascript",
    "etag": "\"3ab7-XQNX+B6xU6kLdrEYkaKmNh4j6dI\"",
    "mtime": "2023-05-19T12:07:23.938Z",
    "size": 15031,
    "path": "../public/workbox-7369c0e1.js"
  },
  "/workbox-7369c0e1.js.map": {
    "type": "application/json",
    "etag": "\"23f73-9x8zxL7WZwfQW777nzEENG0n1og\"",
    "mtime": "2023-05-19T12:07:23.937Z",
    "size": 147315,
    "path": "../public/workbox-7369c0e1.js.map"
  },
  "/yoga.wasm": {
    "type": "application/wasm",
    "etag": "\"15a52-70hm7K4ZL9h3JwZ88sDAz5+4sCA\"",
    "mtime": "2023-05-19T12:06:24.229Z",
    "size": 88658,
    "path": "../public/yoga.wasm"
  },
  "/__og_image__/og.png": {
    "type": "image/png",
    "etag": "\"2108-Ya5v9uRZ1dgQYH+eaX6o85KW7S4\"",
    "mtime": "2023-05-19T12:07:20.580Z",
    "size": 8456,
    "path": "../public/__og_image__/og.png"
  },
  "/_nuxt/404.4de5a49e.js": {
    "type": "application/javascript",
    "etag": "\"341-yaoar0uE8G5leJvn9kvXKUu81Z8\"",
    "mtime": "2023-05-19T12:06:24.224Z",
    "size": 833,
    "path": "../public/_nuxt/404.4de5a49e.js"
  },
  "/_nuxt/404.4de5a49e.js.map": {
    "type": "application/json",
    "etag": "\"44d-l3nmQnx9DHZtWv6VOEcgiYvuC4Y\"",
    "mtime": "2023-05-19T12:06:24.223Z",
    "size": 1101,
    "path": "../public/_nuxt/404.4de5a49e.js.map"
  },
  "/_nuxt/FZYanZQKSJF.57f8efa3.TTF": {
    "type": "font/ttf",
    "etag": "\"ccb268-3KrF0vdayLDygNqvoEMHe47euMU\"",
    "mtime": "2023-05-19T12:06:24.220Z",
    "size": 13415016,
    "path": "../public/_nuxt/FZYanZQKSJF.57f8efa3.TTF"
  },
  "/_nuxt/FZYanZQKSJF.57f8efa3.TTF.br": {
    "type": "font/ttf",
    "encoding": "br",
    "etag": "\"65ddab-ZvmpzyWlR3PzHr7uyVDjn+e9d2c\"",
    "mtime": "2023-05-19T12:06:54.493Z",
    "size": 6675883,
    "path": "../public/_nuxt/FZYanZQKSJF.57f8efa3.TTF.br"
  },
  "/_nuxt/FZYanZQKSJF.57f8efa3.TTF.gz": {
    "type": "font/ttf",
    "encoding": "gzip",
    "etag": "\"73c49b-thzayNlmGR9SNOyF2bNJ6UH3bjE\"",
    "mtime": "2023-05-19T12:06:26.241Z",
    "size": 7586971,
    "path": "../public/_nuxt/FZYanZQKSJF.57f8efa3.TTF.gz"
  },
  "/_nuxt/Markdown.027a41b2.js": {
    "type": "application/javascript",
    "etag": "\"1b4-JXurw/WfQ0CIcSRo8xkEBGptnxQ\"",
    "mtime": "2023-05-19T12:06:24.202Z",
    "size": 436,
    "path": "../public/_nuxt/Markdown.027a41b2.js"
  },
  "/_nuxt/Markdown.027a41b2.js.map": {
    "type": "application/json",
    "etag": "\"31f-TGOTNarvlrF699e5gCBkHNPr8jQ\"",
    "mtime": "2023-05-19T12:06:24.202Z",
    "size": 799,
    "path": "../public/_nuxt/Markdown.027a41b2.js.map"
  },
  "/_nuxt/RenderView.2b5abc9e.js": {
    "type": "application/javascript",
    "etag": "\"3e2-tsGb5bmVZCH1Gisxzyii0FuK0FU\"",
    "mtime": "2023-05-19T12:06:24.202Z",
    "size": 994,
    "path": "../public/_nuxt/RenderView.2b5abc9e.js"
  },
  "/_nuxt/RenderView.2b5abc9e.js.map": {
    "type": "application/json",
    "etag": "\"70a-/uaxvml3eH61QKTU+qQnjCC3XWs\"",
    "mtime": "2023-05-19T12:06:24.201Z",
    "size": 1802,
    "path": "../public/_nuxt/RenderView.2b5abc9e.js.map"
  },
  "/_nuxt/_plugin-vue_export-helper.c27b6911.js": {
    "type": "application/javascript",
    "etag": "\"9a-kG7mRvTbQDKNd70qE2F4Q8O0mXI\"",
    "mtime": "2023-05-19T12:06:24.201Z",
    "size": 154,
    "path": "../public/_nuxt/_plugin-vue_export-helper.c27b6911.js"
  },
  "/_nuxt/_plugin-vue_export-helper.c27b6911.js.map": {
    "type": "application/json",
    "etag": "\"76-99UfchYq27AQEhc9BjZyaDIYO30\"",
    "mtime": "2023-05-19T12:06:24.201Z",
    "size": 118,
    "path": "../public/_nuxt/_plugin-vue_export-helper.c27b6911.js.map"
  },
  "/_nuxt/about.cfa3c7cf.js": {
    "type": "application/javascript",
    "etag": "\"3cb-u7p5XyB1ZzBpqIFYdjpJhB/hoks\"",
    "mtime": "2023-05-19T12:06:24.201Z",
    "size": 971,
    "path": "../public/_nuxt/about.cfa3c7cf.js"
  },
  "/_nuxt/about.cfa3c7cf.js.map": {
    "type": "application/json",
    "etag": "\"525-V/3iLo6AIVtPm8vke758bJ2SKpM\"",
    "mtime": "2023-05-19T12:06:24.201Z",
    "size": 1317,
    "path": "../public/_nuxt/about.cfa3c7cf.js.map"
  },
  "/_nuxt/admin.ab92d42d.js": {
    "type": "application/javascript",
    "etag": "\"5a69-2UUlqhoP0BMcfKTK7WFTPFQd2po\"",
    "mtime": "2023-05-19T12:06:24.200Z",
    "size": 23145,
    "path": "../public/_nuxt/admin.ab92d42d.js"
  },
  "/_nuxt/admin.ab92d42d.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"228b-dVxVWpqZ2LWp23LZFb/rrMuwCnY\"",
    "mtime": "2023-05-19T12:06:54.519Z",
    "size": 8843,
    "path": "../public/_nuxt/admin.ab92d42d.js.br"
  },
  "/_nuxt/admin.ab92d42d.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"2a08-+SCY20KNswQqffNXZq3rng7V3bE\"",
    "mtime": "2023-05-19T12:06:54.495Z",
    "size": 10760,
    "path": "../public/_nuxt/admin.ab92d42d.js.gz"
  },
  "/_nuxt/admin.ab92d42d.js.map": {
    "type": "application/json",
    "etag": "\"14c9c-c628sGNlGmF18imhGmiW6n94q1I\"",
    "mtime": "2023-05-19T12:06:24.200Z",
    "size": 85148,
    "path": "../public/_nuxt/admin.ab92d42d.js.map"
  },
  "/_nuxt/assessment-syllabus.b87d074d.js": {
    "type": "application/javascript",
    "etag": "\"1d8-/M6LQRr6llYe1Ws3rm1hNzfEabs\"",
    "mtime": "2023-05-19T12:06:24.199Z",
    "size": 472,
    "path": "../public/_nuxt/assessment-syllabus.b87d074d.js"
  },
  "/_nuxt/assessment-syllabus.b87d074d.js.map": {
    "type": "application/json",
    "etag": "\"2fc-ikWlvHV9NzqOduIy8IKsEeVYGjA\"",
    "mtime": "2023-05-19T12:06:24.199Z",
    "size": 764,
    "path": "../public/_nuxt/assessment-syllabus.b87d074d.js.map"
  },
  "/_nuxt/assessments.8c17220e.js": {
    "type": "application/javascript",
    "etag": "\"141-us9uylpLu8wMuMSGXQxQ3S+l1oY\"",
    "mtime": "2023-05-19T12:06:24.199Z",
    "size": 321,
    "path": "../public/_nuxt/assessments.8c17220e.js"
  },
  "/_nuxt/assessments.8c17220e.js.map": {
    "type": "application/json",
    "etag": "\"265-nesH94am13eYHSz70nCGuIZo19c\"",
    "mtime": "2023-05-19T12:06:24.199Z",
    "size": 613,
    "path": "../public/_nuxt/assessments.8c17220e.js.map"
  },
  "/_nuxt/brush.9027c3da.png": {
    "type": "image/png",
    "etag": "\"8714-dWt3o4yg4xwsrtPHjUBT08g81QY\"",
    "mtime": "2023-05-19T12:06:24.199Z",
    "size": 34580,
    "path": "../public/_nuxt/brush.9027c3da.png"
  },
  "/_nuxt/bylaws.12eaa2bd.js": {
    "type": "application/javascript",
    "etag": "\"13d-gsm7O04S8EFcIRq+rIofWCUyUC8\"",
    "mtime": "2023-05-19T12:06:24.198Z",
    "size": 317,
    "path": "../public/_nuxt/bylaws.12eaa2bd.js"
  },
  "/_nuxt/bylaws.12eaa2bd.js.map": {
    "type": "application/json",
    "etag": "\"1b6-J981V3sRuQ5oOA0X8/rtM3gFw6I\"",
    "mtime": "2023-05-19T12:06:24.198Z",
    "size": 438,
    "path": "../public/_nuxt/bylaws.12eaa2bd.js.map"
  },
  "/_nuxt/class.2e9cd3a1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"42-zfRa0xtI+V6IbRa0kRtNQ9qQiWk\"",
    "mtime": "2023-05-19T12:06:24.198Z",
    "size": 66,
    "path": "../public/_nuxt/class.2e9cd3a1.css"
  },
  "/_nuxt/class.3498af02.js": {
    "type": "application/javascript",
    "etag": "\"fe2-uuAjJy3Hs0gDhb9/IAeIe5S4TFc\"",
    "mtime": "2023-05-19T12:06:24.198Z",
    "size": 4066,
    "path": "../public/_nuxt/class.3498af02.js"
  },
  "/_nuxt/class.3498af02.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"5b1-vJwZeDRy2G46fcqlRK06j0mYViU\"",
    "mtime": "2023-05-19T12:06:54.526Z",
    "size": 1457,
    "path": "../public/_nuxt/class.3498af02.js.br"
  },
  "/_nuxt/class.3498af02.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"699-WN4zQSyariCrzh3E4/di1DBCzLM\"",
    "mtime": "2023-05-19T12:06:54.520Z",
    "size": 1689,
    "path": "../public/_nuxt/class.3498af02.js.gz"
  },
  "/_nuxt/class.3498af02.js.map": {
    "type": "application/json",
    "etag": "\"2095-VoePYgC95tp/gYpCBD2jzzJBwbc\"",
    "mtime": "2023-05-19T12:06:24.198Z",
    "size": 8341,
    "path": "../public/_nuxt/class.3498af02.js.map"
  },
  "/_nuxt/color.473bc8ca.png": {
    "type": "image/png",
    "etag": "\"2873-/0xLyyIHiRspL1RO202p0t9dRc8\"",
    "mtime": "2023-05-19T12:06:24.197Z",
    "size": 10355,
    "path": "../public/_nuxt/color.473bc8ca.png"
  },
  "/_nuxt/contact.13d7d4ee.js": {
    "type": "application/javascript",
    "etag": "\"8fb-uHG8jqIotloGMnT8H2WmQ+pSFXw\"",
    "mtime": "2023-05-19T12:06:24.197Z",
    "size": 2299,
    "path": "../public/_nuxt/contact.13d7d4ee.js"
  },
  "/_nuxt/contact.13d7d4ee.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"414-e7sJn9nKKio6XUWngvkxJDRojm8\"",
    "mtime": "2023-05-19T12:06:54.530Z",
    "size": 1044,
    "path": "../public/_nuxt/contact.13d7d4ee.js.br"
  },
  "/_nuxt/contact.13d7d4ee.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"4e9-HoVZMsrJtXx8gciHnSu3OVBffu0\"",
    "mtime": "2023-05-19T12:06:54.527Z",
    "size": 1257,
    "path": "../public/_nuxt/contact.13d7d4ee.js.gz"
  },
  "/_nuxt/contact.13d7d4ee.js.map": {
    "type": "application/json",
    "etag": "\"ffc-l1tKU4RQai1Tfh/aUSERwYPA7wA\"",
    "mtime": "2023-05-19T12:06:24.196Z",
    "size": 4092,
    "path": "../public/_nuxt/contact.13d7d4ee.js.map"
  },
  "/_nuxt/content.b0edd086.js": {
    "type": "application/javascript",
    "etag": "\"861-g+qlEY0ufndyE4blyjORg9ba1/k\"",
    "mtime": "2023-05-19T12:06:24.196Z",
    "size": 2145,
    "path": "../public/_nuxt/content.b0edd086.js"
  },
  "/_nuxt/content.b0edd086.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"3be-TeKKTwxNH2oA/2HWQcUKhIZ9df0\"",
    "mtime": "2023-05-19T12:06:54.533Z",
    "size": 958,
    "path": "../public/_nuxt/content.b0edd086.js.br"
  },
  "/_nuxt/content.b0edd086.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"471-7eNHNS/loLbtKJk1/B8IPgQ58z0\"",
    "mtime": "2023-05-19T12:06:54.530Z",
    "size": 1137,
    "path": "../public/_nuxt/content.b0edd086.js.gz"
  },
  "/_nuxt/content.b0edd086.js.map": {
    "type": "application/json",
    "etag": "\"13af-tCgUGG0t6i5i+SHqpv91fj/FJSQ\"",
    "mtime": "2023-05-19T12:06:24.196Z",
    "size": 5039,
    "path": "../public/_nuxt/content.b0edd086.js.map"
  },
  "/_nuxt/cooperation.65e23dee.js": {
    "type": "application/javascript",
    "etag": "\"15c-yNQVg7/CGLm/Pmp6Uwg3gvJGl2k\"",
    "mtime": "2023-05-19T12:06:24.196Z",
    "size": 348,
    "path": "../public/_nuxt/cooperation.65e23dee.js"
  },
  "/_nuxt/cooperation.65e23dee.js.map": {
    "type": "application/json",
    "etag": "\"193-CdEQMA6cuHDlm8aYcwQv4ONqjAY\"",
    "mtime": "2023-05-19T12:06:24.195Z",
    "size": 403,
    "path": "../public/_nuxt/cooperation.65e23dee.js.map"
  },
  "/_nuxt/course.53cb3cc3.js": {
    "type": "application/javascript",
    "etag": "\"131-9Ieyhf2KxG9ykLCn/TF4ZDYWcWQ\"",
    "mtime": "2023-05-19T12:06:24.195Z",
    "size": 305,
    "path": "../public/_nuxt/course.53cb3cc3.js"
  },
  "/_nuxt/course.53cb3cc3.js.map": {
    "type": "application/json",
    "etag": "\"27f-YreuYwaFKMyqzTH4VVHrTmilAfY\"",
    "mtime": "2023-05-19T12:06:24.195Z",
    "size": 639,
    "path": "../public/_nuxt/course.53cb3cc3.js.map"
  },
  "/_nuxt/df098a8450fc65081bba1a00db798acbe8ddf696.jpg_942w_630h_progressive.455720e7.webp": {
    "type": "image/webp",
    "etag": "\"281c-bDz6H7M81CHJ7QblNmR/xVvTcjg\"",
    "mtime": "2023-05-19T12:06:24.194Z",
    "size": 10268,
    "path": "../public/_nuxt/df098a8450fc65081bba1a00db798acbe8ddf696.jpg_942w_630h_progressive.455720e7.webp"
  },
  "/_nuxt/entry.3da1a1ee.js": {
    "type": "application/javascript",
    "etag": "\"d1e7f-e3zi+D1muVwpTFtM6Mm/wpcsteE\"",
    "mtime": "2023-05-19T12:06:24.194Z",
    "size": 859775,
    "path": "../public/_nuxt/entry.3da1a1ee.js"
  },
  "/_nuxt/entry.3da1a1ee.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"386b6-+OIJXrDUWRrQGGbQmGZ0IaRFQdc\"",
    "mtime": "2023-05-19T12:06:55.844Z",
    "size": 231094,
    "path": "../public/_nuxt/entry.3da1a1ee.js.br"
  },
  "/_nuxt/entry.3da1a1ee.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"41def-wz3OHpFvb2VcaauEDgYHZ3zHwds\"",
    "mtime": "2023-05-19T12:06:54.565Z",
    "size": 269807,
    "path": "../public/_nuxt/entry.3da1a1ee.js.gz"
  },
  "/_nuxt/entry.3da1a1ee.js.map": {
    "type": "application/json",
    "etag": "\"394050-olF2WTAbH50dN06Zd92EnhMquvs\"",
    "mtime": "2023-05-19T12:06:24.185Z",
    "size": 3752016,
    "path": "../public/_nuxt/entry.3da1a1ee.js.map"
  },
  "/_nuxt/entry.4c9a9448.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a19b-WnRUnZu9CkNj5piAbXAIm6aoI+c\"",
    "mtime": "2023-05-19T12:06:24.177Z",
    "size": 41371,
    "path": "../public/_nuxt/entry.4c9a9448.css"
  },
  "/_nuxt/entry.4c9a9448.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"2085-YcoZlBvm80Tsg2uKQRYeIxHsOsI\"",
    "mtime": "2023-05-19T12:06:55.885Z",
    "size": 8325,
    "path": "../public/_nuxt/entry.4c9a9448.css.br"
  },
  "/_nuxt/entry.4c9a9448.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"255f-R+KzWSlL0ONnjL93jF1t/3tjdmo\"",
    "mtime": "2023-05-19T12:06:55.846Z",
    "size": 9567,
    "path": "../public/_nuxt/entry.4c9a9448.css.gz"
  },
  "/_nuxt/error-404.1248162e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6b-CkU+BVVAXRuVynzY7LFIdzcQRGg\"",
    "mtime": "2023-05-19T12:06:24.177Z",
    "size": 107,
    "path": "../public/_nuxt/error-404.1248162e.css"
  },
  "/_nuxt/error-404.c82e96e9.js": {
    "type": "application/javascript",
    "etag": "\"911-0cKOcX71Yq5TScxppR4aHwNTNHQ\"",
    "mtime": "2023-05-19T12:06:24.176Z",
    "size": 2321,
    "path": "../public/_nuxt/error-404.c82e96e9.js"
  },
  "/_nuxt/error-404.c82e96e9.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"405-TyuS0LA0WPnQiiv5nrDDrz3Fanw\"",
    "mtime": "2023-05-19T12:06:55.889Z",
    "size": 1029,
    "path": "../public/_nuxt/error-404.c82e96e9.js.br"
  },
  "/_nuxt/error-404.c82e96e9.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"4b8-LGbyQDDGsAhm7fqR8IASIVNOItc\"",
    "mtime": "2023-05-19T12:06:55.885Z",
    "size": 1208,
    "path": "../public/_nuxt/error-404.c82e96e9.js.gz"
  },
  "/_nuxt/error-404.c82e96e9.js.map": {
    "type": "application/json",
    "etag": "\"1667-zMCy4aO+OqW04pxDYcuOc+m9/p4\"",
    "mtime": "2023-05-19T12:06:24.176Z",
    "size": 5735,
    "path": "../public/_nuxt/error-404.c82e96e9.js.map"
  },
  "/_nuxt/error-500.694521b2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"47-Wf9KYWCpaK8agTMhSrlX8Ov/PQ8\"",
    "mtime": "2023-05-19T12:06:24.176Z",
    "size": 71,
    "path": "../public/_nuxt/error-500.694521b2.css"
  },
  "/_nuxt/error-500.a243172d.js": {
    "type": "application/javascript",
    "etag": "\"7b5-mYChby87cf5fxgbqsWH1Zsh9Ooo\"",
    "mtime": "2023-05-19T12:06:24.176Z",
    "size": 1973,
    "path": "../public/_nuxt/error-500.a243172d.js"
  },
  "/_nuxt/error-500.a243172d.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"385-GAGjswWe5PoN/0iDupx+eDk/N5c\"",
    "mtime": "2023-05-19T12:06:55.892Z",
    "size": 901,
    "path": "../public/_nuxt/error-500.a243172d.js.br"
  },
  "/_nuxt/error-500.a243172d.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"418-hEJN6tN0RbAlcN/6eRNJyePfj2Q\"",
    "mtime": "2023-05-19T12:06:55.890Z",
    "size": 1048,
    "path": "../public/_nuxt/error-500.a243172d.js.gz"
  },
  "/_nuxt/error-500.a243172d.js.map": {
    "type": "application/json",
    "etag": "\"e84-uwV+1PgleGhlO/payMzLKjXD/rY\"",
    "mtime": "2023-05-19T12:06:24.175Z",
    "size": 3716,
    "path": "../public/_nuxt/error-500.a243172d.js.map"
  },
  "/_nuxt/error-component.eb872592.js": {
    "type": "application/javascript",
    "etag": "\"4e7-uT/UggB5T4uWdEfhCTg1ZwLI3DQ\"",
    "mtime": "2023-05-19T12:06:24.175Z",
    "size": 1255,
    "path": "../public/_nuxt/error-component.eb872592.js"
  },
  "/_nuxt/error-component.eb872592.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"246-A9xkDezvQ3HjBO2OMzSPDB3vKSs\"",
    "mtime": "2023-05-19T12:06:55.895Z",
    "size": 582,
    "path": "../public/_nuxt/error-component.eb872592.js.br"
  },
  "/_nuxt/error-component.eb872592.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"2a1-Qd8aKxRprdGLpmDfe7deys0jB6c\"",
    "mtime": "2023-05-19T12:06:55.893Z",
    "size": 673,
    "path": "../public/_nuxt/error-component.eb872592.js.gz"
  },
  "/_nuxt/error-component.eb872592.js.map": {
    "type": "application/json",
    "etag": "\"a7b-S7CBG92QCTitcwo/SnuDg1Tx18c\"",
    "mtime": "2023-05-19T12:06:24.175Z",
    "size": 2683,
    "path": "../public/_nuxt/error-component.eb872592.js.map"
  },
  "/_nuxt/features.716441e8.js": {
    "type": "application/javascript",
    "etag": "\"144-wRKLjTNat73Wf/YnMg/kbYClVIQ\"",
    "mtime": "2023-05-19T12:06:24.174Z",
    "size": 324,
    "path": "../public/_nuxt/features.716441e8.js"
  },
  "/_nuxt/features.716441e8.js.map": {
    "type": "application/json",
    "etag": "\"179-6jvAFZcIsMsdQCDiDS1ckfbd66Y\"",
    "mtime": "2023-05-19T12:06:24.174Z",
    "size": 377,
    "path": "../public/_nuxt/features.716441e8.js.map"
  },
  "/_nuxt/gallery.dca9c65f.js": {
    "type": "application/javascript",
    "etag": "\"133-SqtqYfU6uDYyEUcLW9M4P0s92nk\"",
    "mtime": "2023-05-19T12:06:24.174Z",
    "size": 307,
    "path": "../public/_nuxt/gallery.dca9c65f.js"
  },
  "/_nuxt/gallery.dca9c65f.js.map": {
    "type": "application/json",
    "etag": "\"25b-f6a7WxwTZBZUU83FpxO8d4/3F2I\"",
    "mtime": "2023-05-19T12:06:24.174Z",
    "size": 603,
    "path": "../public/_nuxt/gallery.dca9c65f.js.map"
  },
  "/_nuxt/hk-badge.30d0970b.js": {
    "type": "application/javascript",
    "etag": "\"5f9-W7un3lV40sGSXQ5prKV5GDa3ASw\"",
    "mtime": "2023-05-19T12:06:24.173Z",
    "size": 1529,
    "path": "../public/_nuxt/hk-badge.30d0970b.js"
  },
  "/_nuxt/hk-badge.30d0970b.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"340-JbgXuSq4Z9d59TewZNJ+fUtSHgY\"",
    "mtime": "2023-05-19T12:06:55.898Z",
    "size": 832,
    "path": "../public/_nuxt/hk-badge.30d0970b.js.br"
  },
  "/_nuxt/hk-badge.30d0970b.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"3f3-trA+Vg+ol7xwWoe81kPqH6PhLAE\"",
    "mtime": "2023-05-19T12:06:55.896Z",
    "size": 1011,
    "path": "../public/_nuxt/hk-badge.30d0970b.js.gz"
  },
  "/_nuxt/hk-badge.30d0970b.js.map": {
    "type": "application/json",
    "etag": "\"8e7-/Oas7DkOIHgZp16j6j5vxPYfXLM\"",
    "mtime": "2023-05-19T12:06:24.172Z",
    "size": 2279,
    "path": "../public/_nuxt/hk-badge.30d0970b.js.map"
  },
  "/_nuxt/index.6bdf5fb6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"b4-acBksKX8XglspFUs5etGJe8ApQw\"",
    "mtime": "2023-05-19T12:06:24.172Z",
    "size": 180,
    "path": "../public/_nuxt/index.6bdf5fb6.css"
  },
  "/_nuxt/index.8e6ca6f3.js": {
    "type": "application/javascript",
    "etag": "\"134-v6aIXotO10SVkNOtYLPlGHSuI9g\"",
    "mtime": "2023-05-19T12:06:24.172Z",
    "size": 308,
    "path": "../public/_nuxt/index.8e6ca6f3.js"
  },
  "/_nuxt/index.8e6ca6f3.js.map": {
    "type": "application/json",
    "etag": "\"169-hDK9Fv7H7uDPpXYVfPMM82JxK30\"",
    "mtime": "2023-05-19T12:06:24.171Z",
    "size": 361,
    "path": "../public/_nuxt/index.8e6ca6f3.js.map"
  },
  "/_nuxt/index.96fda3b7.js": {
    "type": "application/javascript",
    "etag": "\"ff0-BofRqMOCYEBKEtgNiY/Awc86Ko4\"",
    "mtime": "2023-05-19T12:06:24.171Z",
    "size": 4080,
    "path": "../public/_nuxt/index.96fda3b7.js"
  },
  "/_nuxt/index.96fda3b7.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"6e3-sS7mgRyxCAgCwVYs3NMBhLjCSEM\"",
    "mtime": "2023-05-19T12:06:55.904Z",
    "size": 1763,
    "path": "../public/_nuxt/index.96fda3b7.js.br"
  },
  "/_nuxt/index.96fda3b7.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"841-IBRvk9fhN6f2jApGTTQqa9+87nI\"",
    "mtime": "2023-05-19T12:06:55.899Z",
    "size": 2113,
    "path": "../public/_nuxt/index.96fda3b7.js.gz"
  },
  "/_nuxt/index.96fda3b7.js.map": {
    "type": "application/json",
    "etag": "\"1b8c-7Z/P+On+9S/UoFceDnBBuU0rLlM\"",
    "mtime": "2023-05-19T12:06:24.171Z",
    "size": 7052,
    "path": "../public/_nuxt/index.96fda3b7.js.map"
  },
  "/_nuxt/logo-58.159d8038.png": {
    "type": "image/png",
    "etag": "\"23f5-Eb+jZ0G/C+LJM0HcPKva0I4asAE\"",
    "mtime": "2023-05-19T12:06:24.166Z",
    "size": 9205,
    "path": "../public/_nuxt/logo-58.159d8038.png"
  },
  "/_nuxt/logo-71.945ca50d.png": {
    "type": "image/png",
    "etag": "\"313d-F7fnokE1opDPjyDNeXgkSdEbqHI\"",
    "mtime": "2023-05-19T12:06:24.166Z",
    "size": 12605,
    "path": "../public/_nuxt/logo-71.945ca50d.png"
  },
  "/_nuxt/luxun.7de881ca.otf": {
    "type": "font/otf",
    "etag": "\"a4e928-IE+MX4w/Ke+lqwDDVS7plRtwDXk\"",
    "mtime": "2023-05-19T12:06:24.165Z",
    "size": 10807592,
    "path": "../public/_nuxt/luxun.7de881ca.otf"
  },
  "/_nuxt/luxun.7de881ca.otf.br": {
    "type": "font/otf",
    "encoding": "br",
    "etag": "\"54b8b8-RCjK8KkaAAlZ94Nu9H2QOZA+eOo\"",
    "mtime": "2023-05-19T12:07:16.119Z",
    "size": 5552312,
    "path": "../public/_nuxt/luxun.7de881ca.otf.br"
  },
  "/_nuxt/luxun.7de881ca.otf.gz": {
    "type": "font/otf",
    "encoding": "gzip",
    "etag": "\"70ea06-5McmeCdGrnpxIC3aANN2fPRMxdU\"",
    "mtime": "2023-05-19T12:06:56.315Z",
    "size": 7399942,
    "path": "../public/_nuxt/luxun.7de881ca.otf.gz"
  },
  "/_nuxt/media-interviews.378dd16b.js": {
    "type": "application/javascript",
    "etag": "\"67b-8JQKAdlz5kP99GXbpJeBjhX3LxA\"",
    "mtime": "2023-05-19T12:06:24.152Z",
    "size": 1659,
    "path": "../public/_nuxt/media-interviews.378dd16b.js"
  },
  "/_nuxt/media-interviews.378dd16b.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"30d-TCG+nu1yJUVK+VFn1/csSE0+nk8\"",
    "mtime": "2023-05-19T12:07:16.123Z",
    "size": 781,
    "path": "../public/_nuxt/media-interviews.378dd16b.js.br"
  },
  "/_nuxt/media-interviews.378dd16b.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"352-z1a2SGGs/LKfm42/+pc4BqzsAA4\"",
    "mtime": "2023-05-19T12:07:16.120Z",
    "size": 850,
    "path": "../public/_nuxt/media-interviews.378dd16b.js.gz"
  },
  "/_nuxt/media-interviews.378dd16b.js.map": {
    "type": "application/json",
    "etag": "\"a4a-WNxnmNqJxsFF7zyoMQJ9dtYhaDw\"",
    "mtime": "2023-05-19T12:06:24.152Z",
    "size": 2634,
    "path": "../public/_nuxt/media-interviews.378dd16b.js.map"
  },
  "/_nuxt/our-team.551beccc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a9e-wbAXN4LMOrrqI3UDMgaBv0HMSVM\"",
    "mtime": "2023-05-19T12:06:24.151Z",
    "size": 2718,
    "path": "../public/_nuxt/our-team.551beccc.css"
  },
  "/_nuxt/our-team.551beccc.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"76e-t63Wm7FikL2FE0sYjNhqOBcDzeU\"",
    "mtime": "2023-05-19T12:07:16.128Z",
    "size": 1902,
    "path": "../public/_nuxt/our-team.551beccc.css.br"
  },
  "/_nuxt/our-team.551beccc.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"7c2-ClwSc0UGLFR0ueA4Rwp9iLf33as\"",
    "mtime": "2023-05-19T12:07:16.125Z",
    "size": 1986,
    "path": "../public/_nuxt/our-team.551beccc.css.gz"
  },
  "/_nuxt/our-team.d7ec0583.js": {
    "type": "application/javascript",
    "etag": "\"118a-axf9ibk8TOohf3jyySx7GgmYiic\"",
    "mtime": "2023-05-19T12:06:24.151Z",
    "size": 4490,
    "path": "../public/_nuxt/our-team.d7ec0583.js"
  },
  "/_nuxt/our-team.d7ec0583.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"59c-Z+jaOtioBWp9b7sGK85Nm8dFEa4\"",
    "mtime": "2023-05-19T12:07:16.133Z",
    "size": 1436,
    "path": "../public/_nuxt/our-team.d7ec0583.js.br"
  },
  "/_nuxt/our-team.d7ec0583.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"67a-OOInpLCup+3vP48a9lrrIuVwQF0\"",
    "mtime": "2023-05-19T12:07:16.128Z",
    "size": 1658,
    "path": "../public/_nuxt/our-team.d7ec0583.js.gz"
  },
  "/_nuxt/our-team.d7ec0583.js.map": {
    "type": "application/json",
    "etag": "\"2b41-N4mBZLk+suAl/5A6xtj+5rhPiCk\"",
    "mtime": "2023-05-19T12:06:24.151Z",
    "size": 11073,
    "path": "../public/_nuxt/our-team.d7ec0583.js.map"
  },
  "/_nuxt/session.cf8a5ecd.js": {
    "type": "application/javascript",
    "etag": "\"14a-mdhUMwoevlQ55miZOWZgo0ho/C0\"",
    "mtime": "2023-05-19T12:06:24.150Z",
    "size": 330,
    "path": "../public/_nuxt/session.cf8a5ecd.js"
  },
  "/_nuxt/session.cf8a5ecd.js.map": {
    "type": "application/json",
    "etag": "\"17f-Rak/s47cAXbfB81FnQY9wt3Aqsk\"",
    "mtime": "2023-05-19T12:06:24.150Z",
    "size": 383,
    "path": "../public/_nuxt/session.cf8a5ecd.js.map"
  },
  "/_nuxt/syllabus.0e3b41dc.js": {
    "type": "application/javascript",
    "etag": "\"6b7-0HBeJ9JHuGdzX7H1n8GHlWsIDVs\"",
    "mtime": "2023-05-19T12:06:24.150Z",
    "size": 1719,
    "path": "../public/_nuxt/syllabus.0e3b41dc.js"
  },
  "/_nuxt/syllabus.0e3b41dc.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"371-1x5enNiP9hSWMqQWdZnb9W4luPA\"",
    "mtime": "2023-05-19T12:07:16.136Z",
    "size": 881,
    "path": "../public/_nuxt/syllabus.0e3b41dc.js.br"
  },
  "/_nuxt/syllabus.0e3b41dc.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"3f2-HYMXtMYyapgbvgvw7T1DdMuOAws\"",
    "mtime": "2023-05-19T12:07:16.134Z",
    "size": 1010,
    "path": "../public/_nuxt/syllabus.0e3b41dc.js.gz"
  },
  "/_nuxt/syllabus.0e3b41dc.js.map": {
    "type": "application/json",
    "etag": "\"f13-KLnlCdRLF38idG6LM8R1b3hMpd0\"",
    "mtime": "2023-05-19T12:06:24.149Z",
    "size": 3859,
    "path": "../public/_nuxt/syllabus.0e3b41dc.js.map"
  },
  "/_nuxt/training.5ff894a1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"107-Gj8xqd1LWp6a3Z+YfRBfMcFCgys\"",
    "mtime": "2023-05-19T12:06:24.149Z",
    "size": 263,
    "path": "../public/_nuxt/training.5ff894a1.css"
  },
  "/_nuxt/training.9650b0fd.js": {
    "type": "application/javascript",
    "etag": "\"852-J4CqE5eKyQWuGGWSL5HoRyZYn70\"",
    "mtime": "2023-05-19T12:06:24.148Z",
    "size": 2130,
    "path": "../public/_nuxt/training.9650b0fd.js"
  },
  "/_nuxt/training.9650b0fd.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"356-d/j52Ayb2RG8p3ELa67zlpWZ4Hg\"",
    "mtime": "2023-05-19T12:07:16.140Z",
    "size": 854,
    "path": "../public/_nuxt/training.9650b0fd.js.br"
  },
  "/_nuxt/training.9650b0fd.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"3b8-NHLxGQNwpWtOdSu/oecFopQBWQ0\"",
    "mtime": "2023-05-19T12:07:16.137Z",
    "size": 952,
    "path": "../public/_nuxt/training.9650b0fd.js.gz"
  },
  "/_nuxt/training.9650b0fd.js.map": {
    "type": "application/json",
    "etag": "\"1c73-BszT3jupWSHxpHzFf5BFhLTo88c\"",
    "mtime": "2023-05-19T12:06:24.148Z",
    "size": 7283,
    "path": "../public/_nuxt/training.9650b0fd.js.map"
  },
  "/_nuxt/videos.5999f952.js": {
    "type": "application/javascript",
    "etag": "\"585-REVWkWFvLFc08YypD2UYBnsrsCA\"",
    "mtime": "2023-05-19T12:06:24.148Z",
    "size": 1413,
    "path": "../public/_nuxt/videos.5999f952.js"
  },
  "/_nuxt/videos.5999f952.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"32b-kGr8niZtMRbLTlOIXgEywup8zao\"",
    "mtime": "2023-05-19T12:07:16.143Z",
    "size": 811,
    "path": "../public/_nuxt/videos.5999f952.js.br"
  },
  "/_nuxt/videos.5999f952.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"3a2-3AJp+jjj51A8LISA1ub0gcXEeDY\"",
    "mtime": "2023-05-19T12:07:16.140Z",
    "size": 930,
    "path": "../public/_nuxt/videos.5999f952.js.gz"
  },
  "/_nuxt/videos.5999f952.js.map": {
    "type": "application/json",
    "etag": "\"98f-GU7ijuexPr0ATiE4LgrTLsao/4Y\"",
    "mtime": "2023-05-19T12:06:24.147Z",
    "size": 2447,
    "path": "../public/_nuxt/videos.5999f952.js.map"
  },
  "/_nuxt/workbox-window.prod.es5.dc90f814.js": {
    "type": "application/javascript",
    "etag": "\"14e6-KzeK3XIL08BAtRUguN6GLHWLNUA\"",
    "mtime": "2023-05-19T12:06:24.147Z",
    "size": 5350,
    "path": "../public/_nuxt/workbox-window.prod.es5.dc90f814.js"
  },
  "/_nuxt/workbox-window.prod.es5.dc90f814.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"7bd-CFBh5+c+OCS3EyWb90c4G/v9sXA\"",
    "mtime": "2023-05-19T12:07:16.148Z",
    "size": 1981,
    "path": "../public/_nuxt/workbox-window.prod.es5.dc90f814.js.br"
  },
  "/_nuxt/workbox-window.prod.es5.dc90f814.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"8bf-biHEAXN1wFM0K/ibCcFX55Mi5EQ\"",
    "mtime": "2023-05-19T12:07:16.143Z",
    "size": 2239,
    "path": "../public/_nuxt/workbox-window.prod.es5.dc90f814.js.gz"
  },
  "/_nuxt/workbox-window.prod.es5.dc90f814.js.map": {
    "type": "application/json",
    "etag": "\"3152-93J6PLmbKPxQtJdFcn/mkEVEAAY\"",
    "mtime": "2023-05-19T12:06:24.146Z",
    "size": 12626,
    "path": "../public/_nuxt/workbox-window.prod.es5.dc90f814.js.map"
  },
  "/__sitemap__/routes.json": {
    "type": "application/json",
    "etag": "\"146-zXMNxBFIm8N30q7RS8SMmsVypc0\"",
    "mtime": "2023-05-19T12:07:23.940Z",
    "size": 326,
    "path": "../public/__sitemap__/routes.json"
  },
  "/contact/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"79ed-Q5aBrfMgzrpxsH7QTFilr65hvSY\"",
    "mtime": "2023-05-19T12:07:20.266Z",
    "size": 31213,
    "path": "../public/contact/index.html"
  },
  "/contact/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"1165-QIfhZVDZv2sqzgIDVO/mSxlTF8Q\"",
    "mtime": "2023-05-19T12:07:22.115Z",
    "size": 4453,
    "path": "../public/contact/index.html.br"
  },
  "/contact/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"15ef-co3m8ZoFrOOccxzx7JQ7F6LugAA\"",
    "mtime": "2023-05-19T12:07:22.083Z",
    "size": 5615,
    "path": "../public/contact/index.html.gz"
  },
  "/about/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"8165-+pjFaHVg2Qde5AXLftlm+EtsWVc\"",
    "mtime": "2023-05-19T12:07:19.909Z",
    "size": 33125,
    "path": "../public/about/index.html"
  },
  "/about/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"11d2-2dggkWUZhOmKK0xO63irUKdF8pI\"",
    "mtime": "2023-05-19T12:07:22.081Z",
    "size": 4562,
    "path": "../public/about/index.html.br"
  },
  "/about/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"167f-44yk/oiHJvHAaKRXCkJUH22BacA\"",
    "mtime": "2023-05-19T12:07:22.046Z",
    "size": 5759,
    "path": "../public/about/index.html.gz"
  },
  "/assessments/hk-badge/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"8364-PteKMB1caU+4pNZzpsMdGN+mej8\"",
    "mtime": "2023-05-19T12:07:20.083Z",
    "size": 33636,
    "path": "../public/assessments/hk-badge/index.html"
  },
  "/assessments/hk-badge/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"11f1-qsA8oznFp3j3crpW+WDhew0jZo4\"",
    "mtime": "2023-05-19T12:07:22.463Z",
    "size": 4593,
    "path": "../public/assessments/hk-badge/index.html.br"
  },
  "/assessments/hk-badge/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1690-IWDxHj0jF4/8mLFSACtv81U5NEQ\"",
    "mtime": "2023-05-19T12:07:22.404Z",
    "size": 5776,
    "path": "../public/assessments/hk-badge/index.html.gz"
  },
  "/assessments/syllabus/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"8075-Eto/WXQZYMhOi7ibSbuPuIeD4fA\"",
    "mtime": "2023-05-19T12:07:20.059Z",
    "size": 32885,
    "path": "../public/assessments/syllabus/index.html"
  },
  "/assessments/syllabus/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"10d7-ju87UXBhyBGDcTtrMqDJ8C+OH/I\"",
    "mtime": "2023-05-19T12:07:22.402Z",
    "size": 4311,
    "path": "../public/assessments/syllabus/index.html.br"
  },
  "/assessments/syllabus/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1549-ZzAevKsaSNLksqtO9TxWazeC3ds\"",
    "mtime": "2023-05-19T12:07:22.354Z",
    "size": 5449,
    "path": "../public/assessments/syllabus/index.html.gz"
  },
  "/course/content/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"84c9-832akjw9H9EF+lllfAMz69SgH10\"",
    "mtime": "2023-05-19T12:07:20.137Z",
    "size": 33993,
    "path": "../public/course/content/index.html"
  },
  "/course/content/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"1150-9HILbYe9/ZVXBTY67ufOzR7iDJg\"",
    "mtime": "2023-05-19T12:07:22.631Z",
    "size": 4432,
    "path": "../public/course/content/index.html.br"
  },
  "/course/content/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"15c4-VNDXnnWYQx3kdwXrrgirAFfQizg\"",
    "mtime": "2023-05-19T12:07:22.596Z",
    "size": 5572,
    "path": "../public/course/content/index.html.gz"
  },
  "/course/cooperation/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"83d7-Knd0HXDinviI2P2nbVq8zvIHkrg\"",
    "mtime": "2023-05-19T12:07:20.194Z",
    "size": 33751,
    "path": "../public/course/cooperation/index.html"
  },
  "/course/cooperation/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"1101-1pzvct6rYkdg8bv87wz4JB/p328\"",
    "mtime": "2023-05-19T12:07:22.708Z",
    "size": 4353,
    "path": "../public/course/cooperation/index.html.br"
  },
  "/course/cooperation/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"156d-FSfibH8lypQk6iHsYJBbqaYvfuo\"",
    "mtime": "2023-05-19T12:07:22.667Z",
    "size": 5485,
    "path": "../public/course/cooperation/index.html.gz"
  },
  "/contact/__og_image__/og.png": {
    "type": "image/png",
    "etag": "\"14fa-so7ewiISrn4STGH1mSyTWg1QSfY\"",
    "mtime": "2023-05-19T12:07:22.010Z",
    "size": 5370,
    "path": "../public/contact/__og_image__/og.png"
  },
  "/course/class/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"83c6-E0q7Y6YpYyFHNDkG6AEIcfJmFyI\"",
    "mtime": "2023-05-19T12:07:20.161Z",
    "size": 33734,
    "path": "../public/course/class/index.html"
  },
  "/course/class/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"1130-SVLu7S18+vgX7sRXCVPC+RaoGlQ\"",
    "mtime": "2023-05-19T12:07:22.665Z",
    "size": 4400,
    "path": "../public/course/class/index.html.br"
  },
  "/course/class/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1593-iECKVqTYp9m3XzrYeN7dIEFH6j0\"",
    "mtime": "2023-05-19T12:07:22.633Z",
    "size": 5523,
    "path": "../public/course/class/index.html.gz"
  },
  "/course/features/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"8355-9FoY5Bb/CahND0SEsP2vlojWow8\"",
    "mtime": "2023-05-19T12:07:20.120Z",
    "size": 33621,
    "path": "../public/course/features/index.html"
  },
  "/course/features/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"1101-YQ79St4fJ2V4BsU8LVHUZTIlLQc\"",
    "mtime": "2023-05-19T12:07:22.846Z",
    "size": 4353,
    "path": "../public/course/features/index.html.br"
  },
  "/course/features/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1569-s4caA44yJnVnRq8i/em1XXkT4vw\"",
    "mtime": "2023-05-19T12:07:22.819Z",
    "size": 5481,
    "path": "../public/course/features/index.html.gz"
  },
  "/course/session/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"8375-CzyFaiMRE02Pnbfetp9QqEo2Vtk\"",
    "mtime": "2023-05-19T12:07:20.176Z",
    "size": 33653,
    "path": "../public/course/session/index.html"
  },
  "/course/session/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"1109-8tyaaKdwBk3+FWVDnrshSDyBQcE\"",
    "mtime": "2023-05-19T12:07:22.781Z",
    "size": 4361,
    "path": "../public/course/session/index.html.br"
  },
  "/course/session/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1571-TxBhm4etKHmQOTE83hwwPcs5HHc\"",
    "mtime": "2023-05-19T12:07:22.713Z",
    "size": 5489,
    "path": "../public/course/session/index.html.gz"
  },
  "/about/bylaws/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"85e8-52i5ik7oFHV5wtlSNh08QUQ/g+g\"",
    "mtime": "2023-05-19T12:07:19.983Z",
    "size": 34280,
    "path": "../public/about/bylaws/index.html"
  },
  "/about/bylaws/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"123f-hMhtKSJ+Idhkb+4Sk2OhhOLcKfs\"",
    "mtime": "2023-05-19T12:07:22.504Z",
    "size": 4671,
    "path": "../public/about/bylaws/index.html.br"
  },
  "/about/bylaws/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"16ff-5v4XujonjpVL5JLEQ4XaVT75STg\"",
    "mtime": "2023-05-19T12:07:22.465Z",
    "size": 5887,
    "path": "../public/about/bylaws/index.html.gz"
  },
  "/about/media-interviews/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"8671-MpEpasmt8qak2Tn8qmalZdhs3BQ\"",
    "mtime": "2023-05-19T12:07:20.017Z",
    "size": 34417,
    "path": "../public/about/media-interviews/index.html"
  },
  "/about/media-interviews/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"1243-MR+BbQ4+F2lC7CBPT+1Cbh0/enw\"",
    "mtime": "2023-05-19T12:07:22.544Z",
    "size": 4675,
    "path": "../public/about/media-interviews/index.html.br"
  },
  "/about/media-interviews/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1711-+e87n7DTME2tttaNSllJevvTNsQ\"",
    "mtime": "2023-05-19T12:07:22.508Z",
    "size": 5905,
    "path": "../public/about/media-interviews/index.html.gz"
  },
  "/about/__og_image__/og.png": {
    "type": "image/png",
    "etag": "\"17c3-HK73MbsUbiKKPXe2xMRm/nBkmUM\"",
    "mtime": "2023-05-19T12:07:20.868Z",
    "size": 6083,
    "path": "../public/about/__og_image__/og.png"
  },
  "/about/our-team/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"912c-qhUv4YceRYPsU74Yn3x4t8qqlz4\"",
    "mtime": "2023-05-19T12:07:19.950Z",
    "size": 37164,
    "path": "../public/about/our-team/index.html"
  },
  "/about/our-team/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"19cf-mJfSabzEicbJxlX7NCyuch590dg\"",
    "mtime": "2023-05-19T12:07:22.593Z",
    "size": 6607,
    "path": "../public/about/our-team/index.html.br"
  },
  "/about/our-team/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1fd2-zrayI5tzQYiY+vXacRfm9D+TBgA\"",
    "mtime": "2023-05-19T12:07:22.547Z",
    "size": 8146,
    "path": "../public/about/our-team/index.html.gz"
  },
  "/assessments/hk-badge/__og_image__/og.png": {
    "type": "image/png",
    "etag": "\"188e-xJWCv6Ph13NM4RBP/65HxxzBGq4\"",
    "mtime": "2023-05-19T12:07:21.383Z",
    "size": 6286,
    "path": "../public/assessments/hk-badge/__og_image__/og.png"
  },
  "/gallery/training/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"80fb-vJrrsjts9x9EIibBxElwdOtuokY\"",
    "mtime": "2023-05-19T12:07:20.225Z",
    "size": 33019,
    "path": "../public/gallery/training/index.html"
  },
  "/gallery/training/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"1158-eHbO8UVmyZsCnNLg7buXRVTej4A\"",
    "mtime": "2023-05-19T12:07:22.818Z",
    "size": 4440,
    "path": "../public/gallery/training/index.html.br"
  },
  "/gallery/training/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"15ca-Ta9IZcEs6pcSwbJVKa8whYV3+UY\"",
    "mtime": "2023-05-19T12:07:22.782Z",
    "size": 5578,
    "path": "../public/gallery/training/index.html.gz"
  },
  "/assessments/syllabus/__og_image__/og.png": {
    "type": "image/png",
    "etag": "\"1821-VPJTYw/eYqqroMrB0QRJzhi1Xf0\"",
    "mtime": "2023-05-19T12:07:21.276Z",
    "size": 6177,
    "path": "../public/assessments/syllabus/__og_image__/og.png"
  },
  "/course/content/__og_image__/og.png": {
    "type": "image/png",
    "etag": "\"14fa-so7ewiISrn4STGH1mSyTWg1QSfY\"",
    "mtime": "2023-05-19T12:07:21.555Z",
    "size": 5370,
    "path": "../public/course/content/__og_image__/og.png"
  },
  "/course/cooperation/__og_image__/og.png": {
    "type": "image/png",
    "etag": "\"176f-7vcjJ2PpzYiCrCFr6q3XvQgH9Cg\"",
    "mtime": "2023-05-19T12:07:21.828Z",
    "size": 5999,
    "path": "../public/course/cooperation/__og_image__/og.png"
  },
  "/course/class/__og_image__/og.png": {
    "type": "image/png",
    "etag": "\"14fa-so7ewiISrn4STGH1mSyTWg1QSfY\"",
    "mtime": "2023-05-19T12:07:21.645Z",
    "size": 5370,
    "path": "../public/course/class/__og_image__/og.png"
  },
  "/course/features/__og_image__/og.png": {
    "type": "image/png",
    "etag": "\"14fa-so7ewiISrn4STGH1mSyTWg1QSfY\"",
    "mtime": "2023-05-19T12:07:21.467Z",
    "size": 5370,
    "path": "../public/course/features/__og_image__/og.png"
  },
  "/course/session/__og_image__/og.png": {
    "type": "image/png",
    "etag": "\"1648-UfUHycoLTjFVA4FiNZzktrfgBl8\"",
    "mtime": "2023-05-19T12:07:21.732Z",
    "size": 5704,
    "path": "../public/course/session/__og_image__/og.png"
  },
  "/about/bylaws/__og_image__/og.png": {
    "type": "image/png",
    "etag": "\"17c3-HK73MbsUbiKKPXe2xMRm/nBkmUM\"",
    "mtime": "2023-05-19T12:07:21.083Z",
    "size": 6083,
    "path": "../public/about/bylaws/__og_image__/og.png"
  },
  "/about/our-team/__og_image__/og.png": {
    "type": "image/png",
    "etag": "\"18cb-hOThDOAXohFLKyBPNF0EjKZRhlY\"",
    "mtime": "2023-05-19T12:07:20.984Z",
    "size": 6347,
    "path": "../public/about/our-team/__og_image__/og.png"
  },
  "/about/media-interviews/__og_image__/og.png": {
    "type": "image/png",
    "etag": "\"17c3-HK73MbsUbiKKPXe2xMRm/nBkmUM\"",
    "mtime": "2023-05-19T12:07:21.185Z",
    "size": 6083,
    "path": "../public/about/media-interviews/__og_image__/og.png"
  },
  "/gallery/training/__og_image__/og.png": {
    "type": "image/png",
    "etag": "\"15f7-qUDHlw4dko/BjPkgL2hUD4tRP8U\"",
    "mtime": "2023-05-19T12:07:21.914Z",
    "size": 5623,
    "path": "../public/gallery/training/__og_image__/og.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _bgZjO8 = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx;
  const ipxOptions = {
    ...opts || {},
    dir: fileURLToPath(new URL(opts.dir, globalThis._importMeta_.url))
  };
  const ipx = createIPX(ipxOptions);
  const middleware = createIPXMiddleware(ipx);
  return eventHandler(async (event) => {
    event.node.req.url = withLeadingSlash(event.context.params._);
    await middleware(event.node.req, event.node.res);
  });
});

const disallow = [];
const sitemap = ["https://hksanda.netlify.app/sitemap.xml"];
const indexable = true;
const robotsDisabledValue = "noindex, nofollow";

const asArray = (v) => Array.isArray(v) ? v : [v];
const _PRDGYO = defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "text/plain");
  const debug = "";
  const sitemapLink = (sitemap && indexable ? asArray(sitemap || []) : []).map((path) => `Sitemap: ${path}`).join("\n");
  const disallowedPaths = (asArray(disallow || []) ).map((path) => `Disallow: ${path}`).join("\n");
  return `${debug}User-agent: *
${disallowedPaths}
${sitemapLink}`;
});

const _ScbFZS = defineEventHandler((event) => {
  if (event.path === "/robots.txt")
    return;
  const routeRules = getRouteRules(event);
  if (typeof routeRules.robots === "string")
    setHeader(event, "X-Robots-Tag", routeRules.robots);
  else if (routeRules.index === false || indexable === false)
    setHeader(event, "X-Robots-Tag", robotsDisabledValue);
});

function createFilter(options = {}) {
  const include = options.include || [];
  const exclude = options.exclude || [];
  if (include.length === 0 && exclude.length === 0)
    return () => true;
  return function(path) {
    for (const v of [{ rules: exclude, result: false }, { rules: include, result: true }]) {
      const regexRules = v.rules.filter((r) => r instanceof RegExp);
      if (regexRules.some((r) => r.test(path)))
        return v.result;
      const stringRules = v.rules.filter((r) => typeof r === "string");
      if (stringRules.length > 0) {
        const routes = {};
        for (const r of stringRules) {
          if (r === path)
            return v.result;
          routes[r] = true;
        }
        const routeRulesMatcher = toRouteMatcher(createRouter({ routes, ...options }));
        if (routeRulesMatcher.matchAll(path).length > 0)
          return Boolean(v.result);
      }
    }
    return include.length === 0;
  };
}

function mergeOnKey(arr, key) {
  const res = {};
  arr.forEach((item) => {
    const k = item[key];
    res[k] = defu$1(item, res[k] || {});
  });
  return Object.values(res);
}

function normaliseDate(date) {
  const d = typeof date === "string" ? new Date(date) : date;
  if (!(d instanceof Date))
    return false;
  const z = (n) => `0${n}`.slice(-2);
  return `${d.getUTCFullYear()}-${z(d.getUTCMonth() + 1)}-${z(d.getUTCDate())}T${z(d.getUTCHours())}:${z(d.getUTCMinutes())}:${z(d.getUTCSeconds())}+00:00`;
}

async function generateSitemapEntries(options) {
  const {
    urls: configUrls,
    defaults,
    exclude,
    isNuxtContentDocumentDriven,
    include,
    trailingSlash,
    inferStaticPagesAsRoutes,
    hasApiRoutesUrl,
    autoLastmod,
    siteUrl,
    hasPrerenderedRoutesPayload,
    autoAlternativeLangPrefixes,
    dynamicUrlsApiEndpoint
  } = options.sitemapConfig;
  const baseURL = options.baseURL;
  const includeWithBase = include?.map((i) => withBase(i, baseURL));
  const excludeWithBase = exclude?.map((i) => withBase(i, baseURL));
  const urlFilter = createFilter({ include: includeWithBase, exclude: excludeWithBase });
  ({ ...defaults });
  const fixLoc = (url) => {
    url = encodeURI(trailingSlash ? withTrailingSlash(url) : withoutTrailingSlash(url));
    return url.startsWith(baseURL) ? url : withBase(url, baseURL);
  };
  function preNormalise(entries) {
    return mergeOnKey(
      entries.map((e) => typeof e === "string" ? { loc: e } : e).map((e) => ({ ...defaults, ...e })).map((e) => ({ ...e, loc: fixLoc(e.loc || e.url) })),
      "loc"
    ).filter((e) => urlFilter(e.loc)).sort((a, b) => a.loc.length - b.loc.length).map((e) => {
      delete e.url;
      if (e.lastmod)
        e.lastmod = normaliseDate(e.lastmod);
      if (!e.lastmod)
        delete e.lastmod;
      if (Array.isArray(autoAlternativeLangPrefixes)) {
        if (autoAlternativeLangPrefixes.some((prefix) => {
          return e.loc.startsWith(withBase(`/${prefix}`, options.baseURL));
        }))
          return false;
        const loc = e.loc?.replace(options.baseURL, "") || "";
        e.alternatives = autoAlternativeLangPrefixes.map((prefix) => ({
          hreflang: prefix,
          href: fixLoc(joinURL(prefix, loc))
        }));
      }
      return e;
    }).filter(Boolean);
  }
  function postNormalise(e) {
    const siteUrlWithoutBase = siteUrl.replace(new RegExp(`${baseURL}$`), "");
    e.loc = withBase(e.loc, siteUrlWithoutBase);
    return e;
  }
  let pageUrls = [];
  let lazyApiUrls = [];
  if (hasApiRoutesUrl) {
    lazyApiUrls = await globalThis.$fetch(dynamicUrlsApiEndpoint, {
      responseType: "json",
      baseURL: options.baseURL
    });
  }
  let prerenderedRoutesPayload = [];
  if (hasPrerenderedRoutesPayload) {
    let isHtmlResponse = false;
    const routes = await globalThis.$fetch("/__sitemap__/routes.json", {
      responseType: "json",
      headers: {
        Accept: "application/json"
      },
      // host is the actual web server being used
      baseURL: withBase(options.baseURL, options.sitemapConfig.host || siteUrl),
      onResponse({ response }) {
        if (typeof response._data === "string" && response._data.startsWith("<!DOCTYPE html>"))
          isHtmlResponse = true;
      }
    });
    if (!isHtmlResponse)
      prerenderedRoutesPayload = routes;
  }
  let nuxtContentUrls = [];
  if (isNuxtContentDocumentDriven) {
    nuxtContentUrls = await globalThis.$fetch("/api/__sitemap__/document-driven-urls", {
      responseType: "json",
      baseURL: options.baseURL
    });
  }
  const urls = [
    "/",
    ...prerenderedRoutesPayload,
    ...lazyApiUrls,
    ...configUrls,
    ...pageUrls,
    ...nuxtContentUrls
  ];
  return mergeOnKey(
    preNormalise(urls).map((entry) => {
      const routeRules = options.getRouteRulesForPath(withoutTrailingSlash(entry.loc));
      if (routeRules.index === false)
        return false;
      return defu$1(routeRules.sitemap, entry);
    }).filter(Boolean).map(postNormalise),
    "loc"
  );
}

function urlWithBase(url, base, siteUrl) {
  return joinURL(siteUrl.replace(new RegExp(`${base}$`), ""), base, url.replace(new RegExp(`^${base}`), ""));
}

const MaxSitemapSize = 1e3;
async function buildSitemap(options) {
  const sitemapsConfig = options.sitemapConfig.sitemaps;
  let urls = await generateSitemapEntries(options);
  if (sitemapsConfig === true)
    urls = urls.slice(Number(options.sitemapName) * MaxSitemapSize, (Number(options.sitemapName) + 1) * MaxSitemapSize);
  const ctx = { urls, sitemapName: options.sitemapName };
  await options.callHook?.(ctx);
  const resolveKey = (k) => {
    switch (k) {
      case "images":
        return "image";
      case "videos":
        return "video";
      default:
        return k;
    }
  };
  const handleArray = (key, arr) => {
    if (arr.length === 0)
      return false;
    key = resolveKey(key);
    if (key === "alternatives") {
      return arr.map((obj) => [
        `        <xhtml:link rel="alternate" ${Object.entries(obj).map(([sk, sv]) => `${sk}="${normaliseValue(sk, sv, options)}"`).join(" ")} />`
      ].join("\n")).join("\n");
    }
    return arr.map((obj) => [
      `        <${key}:${key}>`,
      ...Object.entries(obj).map(([sk, sv]) => `            <${key}:${sk}>${normaliseValue(sk, sv, options)}</${key}:${sk}>`),
      `        </${key}:${key}>`
    ].join("\n")).join("\n");
  };
  return wrapSitemapXml([
    '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...ctx.urls?.map((e) => `    <url>
${Object.keys(e).map((k) => Array.isArray(e[k]) ? handleArray(k, e[k]) : `        <${k}>${normaliseValue(k, e[k], options)}</${k}>`).filter((l) => l !== false).join("\n")}
    </url>`) ?? [],
    "</urlset>"
  ], options.sitemapConfig.xsl);
}
function normaliseValue(key, value, options) {
  if (["loc", "href"].includes(key) && typeof value === "string") {
    if (value.startsWith("http://") || value.startsWith("https://"))
      return value;
    const url = urlWithBase(value, options.baseURL, options.sitemapConfig.siteUrl);
    if (url.includes("."))
      return url;
    return options.sitemapConfig.trailingSlash ? withTrailingSlash(url) : withoutTrailingSlash(url);
  }
  if (value instanceof Date)
    return normaliseDate(value);
  if (typeof value === "boolean")
    return value ? "yes" : "no";
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function generateXslStylesheet() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: Inter, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #333;
          }

          table {
            border: none;
            border-collapse: collapse;
          }

          #sitemap tr:nth-child(odd) td {
            background-color: #f8f8f8 !important;
          }

          #sitemap tbody tr:hover td {
            background-color: #fff;
          }

          #sitemap tbody tr:hover td, #sitemap tbody tr:hover td a {
            color: #000;
          }

          #content {
            margin: 0 auto;
            width: 1000px;
          }

          .warn {
            padding: 10px;
            background-color: #fef9c3;
            color: #ca8a04;
            border-radius: 4px;
            margin: 10px 0 !important;
            display: inline-block;
          }

          .expl {
            margin: 18px 3px;
            line-height: 1.2em;
          }

          .expl a {
            color: #00DC82;
            font-weight: 600;
          }

          .expl a:visited {
            color: #00DC82;
          }

          a {
            color: #000;
            text-decoration: none;
          }

          a:visited {
            color: #777;
          }

          a:hover {
            text-decoration: underline;
          }

          td {
            font-size: 12px;
          }

          th {
            text-align: left;
            padding-right: 30px;
            font-size: 12px;
          }

          thead th {
            border-bottom: 1px solid #000;
          }
        </style>
      </head>
      <body>
        <div id="content">
          <h1>XML Sitemap</h1>
          <p class="expl">
            Generated by <a href="https://github.com/harlan-zw/nuxt-simple-sitemap" target="_blank" rel="noopener">Nuxt
            Simple Sitemap</a>.
          </p>
          ${""}
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <p class="expl">
              This XML Sitemap Index file contains
              <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  <th width="75%">Sitemap</th>
                  <th width="25%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <xsl:variable name="sitemapURL">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:variable>
                  <tr>
                    <td>
                      <a href="{$sitemapURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of
                        select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <p class="expl">
              This XML Sitemap contains
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  <th width="75%">URL</th>
                  <th width="5%">Images</th>
                  <th title="Last Modification Time" width="20%">Last Mod.</th>
                </tr>
              </thead>
              <tbody>
                <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
                <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of select="count(image:image)"/>
                    </td>
                    <td>
                      <xsl:value-of
                        select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;
}
function wrapSitemapXml(input, xsl) {
  input.unshift(`<?xml version="1.0" encoding="UTF-8"?>${xsl ? `<?xml-stylesheet type="text/xsl" href="${xsl}"?>` : ""}`);
  input.push("<!-- XML Sitemap generated by Nuxt Simple Sitemap -->");
  return input.join("\n");
}

const _Ffzfbc = defineEventHandler(async (e) => {
  setHeader(e, "Content-Type", "application/xslt+xml");
  setHeader(e, "Cache-Control", "max-age=600, must-revalidate");
  return generateXslStylesheet();
});

function useHostname(e) {
  const base = useRuntimeConfig().app.baseURL;
  const host = getRequestHost(e) || process.env.NITRO_HOST || process.env.HOST || "localhost";
  const protocol = getRequestProtocol(e);
  const useHttp = host.includes("127.0.0.1") || host.includes("localhost") || protocol === "http";
  let port = host.includes(":") ? host.split(":").pop() : false;
  if ((host.includes("localhost")) && !port)
    port = process.env.NITRO_PORT || process.env.PORT;
  return withBase(base, `http${useHttp ? "" : "s"}://${host.includes(":") ? host.split(":")[0] : host}${port ? `:${port}` : ""}`);
}

const _u44sQ7 = defineEventHandler(async (e) => {
  const sitemapConfig = useRuntimeConfig()["nuxt-simple-sitemap"];
  if (sitemapConfig.sitemaps) {
    return sendRedirect(e, withBase("/sitemap_index.xml", useRuntimeConfig().app.baseURL), 301);
  }
  setHeader(e, "Content-Type", "text/xml; charset=UTF-8");
  setHeader(e, "Cache-Control", "max-age=600, must-revalidate");
  const callHook = async (ctx) => {
    const nitro = useNitroApp();
    await nitro.hooks.callHook("sitemap:sitemap-xml", ctx);
  };
  return await buildSitemap({
    sitemapName: "sitemap",
    sitemapConfig: { ...sitemapConfig, host: useHostname(e) },
    baseURL: useRuntimeConfig().app.baseURL,
    getRouteRulesForPath,
    callHook
  });
});

const _lazy_ROjMX1 = () => import('../graphql.mjs');
const _lazy_GUN1e0 = () => import('../handlers/renderer.mjs');
const _lazy_ftSLoM = () => import('../handlers/og.png.mjs');
const _lazy_cPPlb8 = () => import('../handlers/html.mjs');
const _lazy_7zwBdo = () => import('../handlers/options.mjs');
const _lazy_c0QLyK = () => import('../handlers/svg.mjs');
const _lazy_J3s5s0 = () => import('../handlers/vnode.mjs');
const _lazy_Flkbs8 = () => import('../handlers/font.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/graphql', handler: _lazy_ROjMX1, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_GUN1e0, lazy: true, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _bgZjO8, lazy: false, middleware: false, method: undefined },
  { route: '/robots.txt', handler: _PRDGYO, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _ScbFZS, lazy: false, middleware: false, method: undefined },
  { route: '/__sitemap__/style.xsl', handler: _Ffzfbc, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _u44sQ7, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _lazy_ftSLoM, lazy: true, middleware: false, method: undefined },
  { route: '/api/og-image-html', handler: _lazy_cPPlb8, lazy: true, middleware: false, method: undefined },
  { route: '/api/og-image-options', handler: _lazy_7zwBdo, lazy: true, middleware: false, method: undefined },
  { route: '/api/og-image-svg', handler: _lazy_c0QLyK, lazy: true, middleware: false, method: undefined },
  { route: '/api/og-image-vnode', handler: _lazy_J3s5s0, lazy: true, middleware: false, method: undefined },
  { route: '/api/og-image-font', handler: _lazy_Flkbs8, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_GUN1e0, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, useStorage as b, defineCachedEventHandler as d, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
