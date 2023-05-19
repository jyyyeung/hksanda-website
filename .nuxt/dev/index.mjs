globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/node-fetch-native/dist/polyfill.mjs';
import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join as join$1 } from 'node:path';
import { statSync, existsSync, promises, mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { provider, isWindows } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/std-env/dist/index.mjs';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, getRequestHeader, setResponseHeader, getRequestHeaders, setHeader, getRequestHost, getRequestProtocol, getHeaders, getQuery as getQuery$1, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler, createError as createError$1, readBody } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/h3/dist/index.mjs';
import mongoose from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/mongoose/index.js';
import cors from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/cors/lib/index.js';
import express from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/express/index.js';
import { mkdir, createWriteStream } from 'fs';
import moment from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/moment/moment.js';
import smms from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/smms-cli/lib/smms.js';
import { createServer } from 'http';
import busboy from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/busboy/lib/index.js';
import { WriteStream } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/fs-capacitor/dist/index.js';
import createError from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/http-errors/index.js';
import objectPath from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/object-path/index.js';
import compression from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/compression/index.js';
import path from 'path';
import { schema as schema$6 } from '/Users/yyymx/Dev/Projects/Current/hksanda-website/.nuxt/graphql-schema.mjs';
import { ApolloServer } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/@apollo/server/dist/esm/index.js';
import { startServerAndCreateH3Handler } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/@as-integrations/h3/dist/index.mjs';
import { createRenderer } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import devalue from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/@nuxt/devalue/dist/devalue.mjs';
import destr from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/destr/dist/index.mjs';
import { renderToString } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/vue/server-renderer/index.mjs';
import { hash } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/ohash/dist/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/hookable/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, encodePath, withBase, withoutTrailingSlash, withTrailingSlash } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/ufo/dist/index.mjs';
import defu, { defuFn, defu as defu$1 } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/defu/dist/defu.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/radix3/dist/index.mjs';
import { relative, extname, join } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/pathe/dist/index.mjs';
import { resolveFiles } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/@nuxt/kit/dist/index.mjs';
import escapeRE from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/escape-string-regexp/index.js';
import { renderSSRHead } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/@unhead/ssr/dist/index.mjs';
import { defineHeadPlugin, resolveTitleTemplate, hashTag, hashCode, tagDedupeKey, HasElementTags, ValidHeadTags, asArray as asArray$1, TagConfigKeys, TagsWithInnerContent } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/@unhead/shared/dist/index.mjs';
import { snakeCase } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/scule/dist/index.mjs';
import { klona } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/klona/dist/index.mjs';
import { html as html$2 } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/satori-html/dist/index.js';
import twemoji from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/twemoji/dist/twemoji.npm.js';
import { initialize, svg2png as svg2png$1 } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/svg2png-wasm/dist/index.mjs';
import satori$2 from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/satori/dist/index.js';
import playwrightCore from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/playwright-core/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/unstorage/drivers/fs.mjs';

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
      "/admin/**": {
        "index": false
      }
    }
  },
  "public": {
    "trailingSlash": false,
    "titleSeparator": "|",
    "siteName": "中國武術散打、功夫、自衛術（香港）",
    "siteUrl": "https://hksanda.netlify.app",
    "siteDescription": "「香港極拳道武術協會」是香港政府及體育協會暨奧林匹克委員會認可及資助的體育總會「香港武術聯會」及「香港泰拳理事會」認可之屬會會員。本會由一批具專業資格的武術教練於二零零五年成立，為香港政府註冊認可武術團體。以推廣中國武術散打自衛術為宗旨，不定期開辦不同年齡、水平的訓練班，為個人、會所、學校、公司或團體設計不同的課程(包括私人及小組教授)，本會教練持有國家認可之防身自衛術專業資格證書和政府認可註冊持牌武術散打教練及裁判的專業資格。我們的教練除了為學生提供專業的指導和訓練外，亦對學生貫徹實施全面性的培訓。了解不同學員要求，制定貼身有效的訓練計劃。為了提高學員在武術技能方面的認受性，本會亦推薦合資格學員考取國家認可防身自衛術段位證書，政府認可之武術散打教練及裁判專業證書課程和青少年武術散打章別計劃全港公開考核試，考取認可武術章別資格及證書。 ",
    "language": "zh-HK",
    "nuxt-unhead": {
      "seoOptimise": true,
      "resolveAliases": false
    }
  },
  "indexable": false,
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
        "lastmod": "2023-05-19T09:33:29.933Z"
      },
      {
        "loc": "/about",
        "lastmod": "2023-05-19T10:41:43.790Z"
      },
      {
        "loc": "/about/bylaws",
        "lastmod": "2023-05-19T10:41:43.789Z"
      },
      {
        "loc": "/about/media-interviews",
        "lastmod": "2023-05-19T10:41:43.790Z"
      },
      {
        "loc": "/about/our-team",
        "lastmod": "2023-05-19T10:41:43.790Z"
      },
      {
        "loc": "/admin",
        "lastmod": "2023-05-19T09:33:29.934Z"
      },
      {
        "loc": "/assessments",
        "lastmod": "2023-05-19T10:41:43.790Z"
      },
      {
        "loc": "/assessments/hk-badge",
        "lastmod": "2023-05-19T10:41:43.791Z"
      },
      {
        "loc": "/assessments/syllabus",
        "lastmod": "2023-05-19T10:41:43.791Z"
      },
      {
        "loc": "/contact",
        "lastmod": "2023-05-19T10:41:43.792Z"
      },
      {
        "loc": "/course",
        "lastmod": "2023-05-19T10:41:43.792Z"
      },
      {
        "loc": "/course/class",
        "lastmod": "2023-05-19T10:41:43.792Z"
      },
      {
        "loc": "/course/content",
        "lastmod": "2023-05-19T10:41:43.792Z"
      },
      {
        "loc": "/course/cooperation",
        "lastmod": "2023-05-19T10:41:43.792Z"
      },
      {
        "loc": "/course/features",
        "lastmod": "2023-05-19T10:41:43.793Z"
      },
      {
        "loc": "/course/session",
        "lastmod": "2023-05-19T10:41:43.793Z"
      },
      {
        "loc": "/gallery",
        "lastmod": "2023-05-19T10:41:43.793Z"
      },
      {
        "loc": "/gallery/training",
        "lastmod": "2023-05-19T10:41:43.793Z"
      },
      {
        "loc": "/gallery/videos",
        "lastmod": "2023-05-19T10:41:43.794Z"
      },
      {
        "loc": "/",
        "lastmod": "2023-05-19T09:33:29.937Z"
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
    "hasPrerenderedRoutesPayload": false,
    "extensions": [
      ".js",
      ".jsx",
      ".mjs",
      ".ts",
      ".tsx",
      ".vue"
    ]
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

const serverAssets = [{"baseName":"server","dir":"/Users/yyymx/Dev/Projects/Current/hksanda-website/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/yyymx/Dev/Projects/Current/hksanda-website","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/yyymx/Dev/Projects/Current/hksanda-website/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/yyymx/Dev/Projects/Current/hksanda-website/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/yyymx/Dev/Projects/Current/hksanda-website/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

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

const plugins = [
  
];

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.node.req.url.endsWith("/favicon.ico")) {
      event.node.res.setHeader("Content-Type", "image/x-icon");
      event.node.res.end(
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
      return;
    }
    const response = await handler(event);
    if (!response) {
      if (!event.node.res.writableEnded) {
        event.node.res.statusCode = event.node.res.statusCode === 200 ? 500 : event.node.res.statusCode;
        event.node.res.end(
          "No response returned from render handler: " + event.node.req.url
        );
      }
      return;
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (!event.node.res.headersSent && response.headers) {
      for (const header in response.headers) {
        event.node.res.setHeader(header, response.headers[header]);
      }
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return typeof response.body === "string" ? response.body : JSON.stringify(response.body);
  });
}

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
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
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
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
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

const sitemap = ["https://hksanda.netlify.app/sitemap.xml"];
const indexable = false;
const robotsDisabledValue = "noindex, nofollow";

const asArray = (v) => Array.isArray(v) ? v : [v];
const _PRDGYO = defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "text/plain");
  const debug = `# Dev Mode: Generated by nuxt-simple-robots. Indexing is ${"disabled"}
` ;
  const sitemapLink = (sitemap && indexable ? asArray(sitemap || []) : []).map((path) => `Sitemap: ${path}`).join("\n");
  const disallowedPaths = (["/"]).map((path) => `Disallow: ${path}`).join("\n");
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
async function resolvePagesRoutes(pagesDirs, extensions) {
  const allRoutes = await Promise.all(
    pagesDirs.map(async (dir) => {
      const files = await resolveFiles(dir, `**/*{${extensions.join(",")}}`);
      files.sort();
      return generateRoutesFromFiles(files, dir);
    })
  );
  return normalisePagesForSitemap(allRoutes.flat());
}
function unpackChildren(page) {
  if (!page.children)
    return [];
  return page.children.map((child) => {
    child.path = withBase(child.path, page.path);
    return [child, ...unpackChildren(child)];
  }).flat();
}
function normalisePagesForSitemap(allRoutes) {
  const pages = allRoutes.map((page) => {
    const pages2 = [page];
    pages2.push(...unpackChildren(page));
    return pages2;
  }).flat().filter((page) => !page.path.includes(":") && !page.path.includes("["));
  return mergeOnKey(pages, "path");
}
function generateRoutesFromFiles(files, pagesDir) {
  const routes = [];
  for (const file of files) {
    const segments = relative(pagesDir, file).replace(new RegExp(`${escapeRE(extname(file))}$`), "").split("/");
    const route = {
      name: "",
      path: "",
      file,
      children: []
    };
    let parent = routes;
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      const tokens = parseSegment(segment);
      const segmentName = tokens.map(({ value }) => value).join("");
      route.name += (route.name && "-") + segmentName;
      const child = parent.find((parentRoute) => parentRoute.name === route.name && !parentRoute.path.endsWith("(.*)*"));
      if (child && child.children) {
        parent = child.children;
        route.path = "";
      } else if (segmentName === "index" && !route.path) {
        route.path += "/";
      } else if (segmentName !== "index") {
        route.path += getRoutePath(tokens);
      }
    }
    parent.push(route);
  }
  return prepareRoutes(routes);
}
function getRoutePath(tokens) {
  return tokens.reduce((path, token) => {
    return path + (token.type === 2 /* optional */ ? `:${token.value}?` : token.type === 1 /* dynamic */ ? `:${token.value}` : token.type === 3 /* catchall */ ? `:${token.value}(.*)*` : encodePath(token.value));
  }, "/");
}
const PARAM_CHAR_RE = /[\w\d_.]/;
function parseSegment(segment) {
  let state = 0 /* initial */;
  let i = 0;
  let buffer = "";
  const tokens = [];
  function consumeBuffer() {
    if (!buffer)
      return;
    if (state === 0 /* initial */)
      throw new Error("wrong state");
    tokens.push({
      type: state === 1 /* static */ ? 0 /* static */ : state === 2 /* dynamic */ ? 1 /* dynamic */ : state === 3 /* optional */ ? 2 /* optional */ : 3 /* catchall */,
      value: buffer
    });
    buffer = "";
  }
  while (i < segment.length) {
    const c = segment[i];
    switch (state) {
      case 0 /* initial */:
        buffer = "";
        if (c === "[") {
          state = 2 /* dynamic */;
        } else {
          i--;
          state = 1 /* static */;
        }
        break;
      case 1 /* static */:
        if (c === "[") {
          consumeBuffer();
          state = 2 /* dynamic */;
        } else {
          buffer += c;
        }
        break;
      case 4 /* catchall */:
      case 2 /* dynamic */:
      case 3 /* optional */:
        if (buffer === "...") {
          buffer = "";
          state = 4 /* catchall */;
        }
        if (c === "[" && state === 2 /* dynamic */)
          state = 3 /* optional */;
        if (c === "]" && (state !== 3 /* optional */ || buffer[buffer.length - 1] === "]")) {
          if (!buffer)
            throw new Error("Empty param");
          else
            consumeBuffer();
          state = 0 /* initial */;
        } else if (PARAM_CHAR_RE.test(c)) {
          buffer += c;
        } else ;
        break;
    }
    i++;
  }
  if (state === 2 /* dynamic */)
    throw new Error(`Unfinished param "${buffer}"`);
  consumeBuffer();
  return tokens;
}
function prepareRoutes(routes, parent) {
  for (const route of routes) {
    if (route.name)
      route.name = route.name.replace(/-index$/, "");
    if (parent && route.path.startsWith("/"))
      route.path = route.path.slice(1);
    if (route.children?.length)
      route.children = prepareRoutes(route.children, route);
    if (route.children?.find((childRoute) => childRoute.path === ""))
      delete route.name;
  }
  return routes;
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
  {
    if (options.sitemapConfig.pagesDirs && options.sitemapConfig.extensions) {
      const { pagesDirs, extensions } = options.sitemapConfig;
      pageUrls = inferStaticPagesAsRoutes ? (await resolvePagesRoutes(pagesDirs, extensions)).map((page) => {
        const entry = { loc: page.path };
        if (autoLastmod && page.file) {
          const stats = statSync(page.file);
          entry.lastmod = stats.mtime;
        }
        return entry;
      }) : [];
    }
  }
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
          ${'<div class="expl warn"><p><strong>Development preview</strong></p><p>In development, prerendered routes and data can not be displayed.</p><p>Make sure you test your production sitemap using <code>nuxi generate</code> or <code>nuxi build</code>.</p></div>' }
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
  return generateXslStylesheet();
});

function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), useRuntimeConfig().app.buildAssetsDir, ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

function useHostname$1(e) {
  const base = useRuntimeConfig().app.baseURL;
  const host = getRequestHost(e) || process.env.NITRO_HOST || process.env.HOST || "localhost";
  getRequestProtocol(e);
  let port = host.includes(":") ? host.split(":").pop() : false;
  if (!port)
    port = process.env.NITRO_PORT || process.env.PORT;
  return withBase(base, `http${"" }://${host.includes(":") ? host.split(":")[0] : host}${port ? `:${port}` : ""}`);
}

const _u44sQ7 = defineEventHandler(async (e) => {
  const sitemapConfig = useRuntimeConfig()["nuxt-simple-sitemap"];
  if (sitemapConfig.sitemaps) {
    return sendRedirect(e, withBase("/sitemap_index.xml", useRuntimeConfig().app.baseURL), 302 );
  }
  setHeader(e, "Content-Type", "text/xml; charset=UTF-8");
  const callHook = async (ctx) => {
    const nitro = useNitroApp();
    await nitro.hooks.callHook("sitemap:sitemap-xml", ctx);
  };
  return await buildSitemap({
    sitemapName: "sitemap",
    sitemapConfig: { ...sitemapConfig, host: useHostname$1(e) },
    baseURL: useRuntimeConfig().app.baseURL,
    getRouteRulesForPath,
    callHook
  });
});

const defaults = {"component":"OgImageBasic","width":1200,"height":630};
const fonts = ["Inter:400","Inter:700"];
const satoriOptions = {};
const assetDirs = ["/Users/yyymx/Dev/Projects/Current/hksanda-website/public","/Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/nuxt-og-image/dist/runtime/public-assets"];

function decodeHtmlEntities(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "string") {
      obj[key] = value.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#x2F;/g, "/");
    }
  });
  return obj;
}
function extractOgImageOptions(html) {
  const htmlPayload = html.match(/<script id="nuxt-og-image-options" type="application\/json">(.+?)<\/script>/)?.[1];
  if (!htmlPayload)
    return false;
  let options;
  try {
    options = JSON.parse(htmlPayload);
  } catch (e) {
    options = false;
    console.warn("Failed to parse #nuxt-og-image-options", e, options);
  }
  if (options) {
    const description = html.match(/<meta property="og:description" content="(.*?)">/)?.[1];
    if (description)
      options.description = description;
    else
      options.description = html.match(/<meta name="description" content="(.*?)">/)?.[1];
    return decodeHtmlEntities(options);
  }
  return false;
}

function wasmLoader(key, fallback, baseUrl) {
  let promise;
  let loaded = false;
  return {
    loaded() {
      if (loaded)
        return true;
      if (typeof promise !== "undefined")
        return promise;
      return false;
    },
    async load() {
      promise = promise || new Promise(async (resolve) => {
        let wasm;
        try {
          wasm = await key;
          if (typeof wasm === "string")
            wasm = void 0;
        } catch (e) {
        }
        if (!wasm)
          wasm = await readPublicAsset(fallback);
        if (!wasm) {
          const url = new URL(baseUrl);
          wasm = await (await fetch(`${url.origin}${fallback}`)).arrayBuffer();
        }
        loaded = true;
        resolve(wasm);
      });
      return promise;
    }
  };
}
function fetchOptions(e, path) {
  const fetchOptions2 = {
    headers: getHeaders(e)
  } ;
  return globalThis.$fetch("/api/og-image-options", {
    query: {
      ...getQuery$1(e),
      path
    },
    ...fetchOptions2
  });
}
function base64ToArrayBuffer(base64) {
  const buffer = Buffer.from(base64, "base64");
  return new Uint8Array(buffer).buffer;
}
function renderIsland(payload) {
  return globalThis.$fetch(`/__nuxt_island/${payload.component}`, {
    query: { props: JSON.stringify(payload) }
  });
}
function useHostname(e) {
  const host = getRequestHeader(e, "host") || process.env.NITRO_HOST || process.env.HOST || "localhost";
  getRequestHeader(e, "x-forwarded-proto") || "http";
  const port = host.includes(":") ? host.split(":").pop() : process.env.NITRO_PORT || process.env.PORT;
  const base = useRuntimeConfig().app.baseURL;
  return `http${"" }://${host.includes(":") ? host.split(":")[0] : host}${port ? `:${port}` : ""}${base}`;
}
const r = (base, key) => {
  return join(base, key.replace(/:/g, "/"));
};
async function readPublicAsset(file, encoding) {
  for (const assetDir of assetDirs) {
    const path = r(assetDir, file);
    if (existsSync(path))
      return await promises.readFile(path, { encoding });
  }
}
async function readPublicAssetBase64(file) {
  const base64 = await readPublicAsset(file, "base64");
  if (base64) {
    let type = "image/jpeg";
    const ext = file.split(".").pop();
    if (ext === "svg")
      type = "image/svg+xml";
    else if (ext === "png")
      type = "image/png";
    return `data:${type};base64,${base64}`;
  }
}

const _a5wRjt = defineEventHandler(async (e) => {
  const path = withoutTrailingSlash(parseURL(e.path).pathname);
  if (!path.endsWith("/__og_image__"))
    return;
  const basePath = path.replace("/__og_image__", "");
  const options = await fetchOptions(e, basePath === "" ? "/" : basePath);
  if (!options)
    return `The route ${basePath} has not been set up for og:image generation.`;
  return `
<style>
  body {
    margin: 0;
    padding: 0;
  }
  iframe {
    border: none;
    width: 100%;
    height: 100%;
  }
</style>
<title>OG Image Playground</title>
<iframe src="/__nuxt_og_image__/client/?&path=${basePath}"></iframe>`;
});

const _lazy_ROjMX1 = () => Promise.resolve().then(function () { return graphql$1; });
const _lazy_GUN1e0 = () => Promise.resolve().then(function () { return renderer$1; });
const _lazy_ftSLoM = () => Promise.resolve().then(function () { return og_png$1; });
const _lazy_cPPlb8 = () => Promise.resolve().then(function () { return html$1; });
const _lazy_7zwBdo = () => Promise.resolve().then(function () { return options$1; });
const _lazy_c0QLyK = () => Promise.resolve().then(function () { return svg$1; });
const _lazy_J3s5s0 = () => Promise.resolve().then(function () { return vnode$1; });
const _lazy_Flkbs8 = () => Promise.resolve().then(function () { return font$1; });

const handlers = [
  { route: '/api/graphql', handler: _lazy_ROjMX1, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_GUN1e0, lazy: true, middleware: false, method: undefined },
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
  { route: '', handler: _a5wRjt, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_GUN1e0, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(true),
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

const server$1 = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (provider === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET) {
    return "0";
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (isWindows) {
    return join$1("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join$1(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join$1(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server$1.listen(listenAddress, () => {
  const _address = server$1.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection]", err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException]", err)
  );
}

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0px}.right-0{right:0px}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template = _template;

const errorDev = /*#__PURE__*/Object.freeze({
      __proto__: null,
      template: template
});

const url = "mongodb+srv://admin:c2pthQMtDkADQVi@cluster0.olxpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongooseConnect = () => {
  mongoose.connect(url).then(
    () => {
      console.log("Connected correctly to server!");
    },
    (err) => {
      console.log(err);
    }
  );
};

const assessmentSyllabusSchema = new mongoose.Schema(
  {
    level: {
      type: String,
      required: true
    },
    index: {
      type: Number
    },
    syllabus: [String]
  },
  {
    timestamps: true
  }
);
const AssessmentSyllabus = mongoose.model("assessment-syllabus", assessmentSyllabusSchema);

const getAssessmentSyllabus = async () => {
  return AssessmentSyllabus.find().sort("index");
};
const updateAssessmentSyllabus = (_, args) => {
  console.log(args.level);
  AssessmentSyllabus.findByIdAndUpdate(
    args.level.levelId,
    {
      $set: { syllabus: args.level.syllabus, name: args.level.level }
    },
    { safe: true, upsert: true },
    function(err, model) {
      console.log(err, model);
    }
  );
};

const instructorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    strengths: {
      type: String,
      required: true
    },
    certificates: [String],
    experiences: [String]
  },
  {
    timestamps: true
  }
);
const Instructor = mongoose.model("Instructor", instructorSchema);

const getInstructors = async () => {
  return Instructor.find();
};
const updateInstructor = (_, { instructor }) => {
  console.log(instructor);
  Instructor.findByIdAndUpdate(
    instructor.instructorId,
    {
      $set: {
        name: instructor.name,
        strengths: instructor.strengths,
        certificates: instructor.certificates,
        experiences: instructor.experiences
      }
    },
    (err, model) => {
      console.log(err, model);
    }
  );
};
const addInstructor = (_, args) => {
  const instructor = new Instructor({
    ...args.instructor
  });
  return instructor.save();
};
const removeInstructor = (_, { instructorId }) => {
  Instructor.findByIdAndDelete(instructorId).then(() => console.log(`Successfully Removed ${instructorId}`)).catch((error) => console.error(`Failed to Removed ${instructorId}, ${error}`));
};

const rankSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    awardees: [String]
  },
  {
    timestamps: true
  }
);
const Rank = mongoose.model("Rank", rankSchema);

const getRankings = async () => {
  return Rank.find();
};
const updateRanking = (_, { details }) => {
  console.log(details);
  Rank.findByIdAndUpdate(
    details.rankId,
    {
      $set: {
        awardees: details.awardees,
        name: details.name
      }
    },
    (err, model) => {
      console.log(err, model);
    }
  );
};

const classSchema = new mongoose.Schema(
  {
    title: String,
    type: String,
    classroom: String,
    time: String,
    students: String,
    location: String,
    mapQuery: String
  },
  {
    timestamps: true
  }
);
const Class = mongoose.model("Class", classSchema);

const getClasses = async () => {
  return Class.find();
};
const updateClass = (_, { details }) => {
  console.log(details);
  Class.findByIdAndUpdate(
    details.classId,
    {
      $set: {
        title: details.title,
        type: details.type,
        time: details.time,
        students: details.students,
        location: details.location,
        classroom: details.classroom,
        mapQuery: details.mapQuery
      }
    },
    (err, model) => {
      console.log(err, model);
    }
  );
};
const addClass = (_, args) => {
  let details = new Class({
    ...args.details
  });
  return details.save();
};
const removeClass = (_, { classId }) => {
  Class.findByIdAndDelete(classId).then(() => console.log(`Successfully Removed ${classId}`)).catch((error) => console.error(`Failed to Removed ${classId}, ${error}`));
};

function devAssert(condition, message) {
  const booleanCondition = Boolean(condition);

  if (!booleanCondition) {
    throw new Error(message);
  }
}

/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return typeof value == 'object' && value !== null;
}

function invariant(condition, message) {
  const booleanCondition = Boolean(condition);

  if (!booleanCondition) {
    throw new Error(
      message != null ? message : 'Unexpected invariant triggered.',
    );
  }
}

const LineRegExp = /\r\n|[\n\r]/g;
/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  let lastLineStart = 0;
  let line = 1;

  for (const match of source.body.matchAll(LineRegExp)) {
    typeof match.index === 'number' || invariant(false);

    if (match.index >= position) {
      break;
    }

    lastLineStart = match.index + match[0].length;
    line += 1;
  }

  return {
    line,
    column: position + 1 - lastLineStart,
  };
}

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */
function printLocation(location) {
  return printSourceLocation(
    location.source,
    getLocation(location.source, location.start),
  );
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  const firstLineColumnOffset = source.locationOffset.column - 1;
  const body = ''.padStart(firstLineColumnOffset) + source.body;
  const lineIndex = sourceLocation.line - 1;
  const lineOffset = source.locationOffset.line - 1;
  const lineNum = sourceLocation.line + lineOffset;
  const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  const columnNum = sourceLocation.column + columnOffset;
  const locationStr = `${source.name}:${lineNum}:${columnNum}\n`;
  const lines = body.split(/\r\n|[\n\r]/g);
  const locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    const subLineIndex = Math.floor(columnNum / 80);
    const subLineColumnNum = columnNum % 80;
    const subLines = [];

    for (let i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }

    return (
      locationStr +
      printPrefixedLines([
        [`${lineNum} |`, subLines[0]],
        ...subLines.slice(1, subLineIndex + 1).map((subLine) => ['|', subLine]),
        ['|', '^'.padStart(subLineColumnNum)],
        ['|', subLines[subLineIndex + 1]],
      ])
    );
  }

  return (
    locationStr +
    printPrefixedLines([
      // Lines specified like this: ["prefix", "string"],
      [`${lineNum - 1} |`, lines[lineIndex - 1]],
      [`${lineNum} |`, locationLine],
      ['|', '^'.padStart(columnNum)],
      [`${lineNum + 1} |`, lines[lineIndex + 1]],
    ])
  );
}

function printPrefixedLines(lines) {
  const existingLines = lines.filter(([_, line]) => line !== undefined);
  const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
  return existingLines
    .map(([prefix, line]) => prefix.padStart(padLen) + (line ? ' ' + line : ''))
    .join('\n');
}

function toNormalizedOptions(args) {
  const firstArg = args[0];

  if (firstArg == null || 'kind' in firstArg || 'length' in firstArg) {
    return {
      nodes: firstArg,
      source: args[1],
      positions: args[2],
      path: args[3],
      originalError: args[4],
      extensions: args[5],
    };
  }

  return firstArg;
}
/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

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

    const { nodes, source, positions, path, originalError, extensions } =
      toNormalizedOptions(rawArgs);
    super(message);
    this.name = 'GraphQLError';
    this.path = path !== null && path !== void 0 ? path : undefined;
    this.originalError =
      originalError !== null && originalError !== void 0
        ? originalError
        : undefined; // Compute list of blame nodes.

    this.nodes = undefinedIfEmpty(
      Array.isArray(nodes) ? nodes : nodes ? [nodes] : undefined,
    );
    const nodeLocations = undefinedIfEmpty(
      (_this$nodes = this.nodes) === null || _this$nodes === void 0
        ? void 0
        : _this$nodes.map((node) => node.loc).filter((loc) => loc != null),
    ); // Compute locations in the source for the given nodes/positions.

    this.source =
      source !== null && source !== void 0
        ? source
        : nodeLocations === null || nodeLocations === void 0
        ? void 0
        : (_nodeLocations$ = nodeLocations[0]) === null ||
          _nodeLocations$ === void 0
        ? void 0
        : _nodeLocations$.source;
    this.positions =
      positions !== null && positions !== void 0
        ? positions
        : nodeLocations === null || nodeLocations === void 0
        ? void 0
        : nodeLocations.map((loc) => loc.start);
    this.locations =
      positions && source
        ? positions.map((pos) => getLocation(source, pos))
        : nodeLocations === null || nodeLocations === void 0
        ? void 0
        : nodeLocations.map((loc) => getLocation(loc.source, loc.start));
    const originalExtensions = isObjectLike(
      originalError === null || originalError === void 0
        ? void 0
        : originalError.extensions,
    )
      ? originalError === null || originalError === void 0
        ? void 0
        : originalError.extensions
      : undefined;
    this.extensions =
      (_ref =
        extensions !== null && extensions !== void 0
          ? extensions
          : originalExtensions) !== null && _ref !== void 0
        ? _ref
        : Object.create(null); // Only properties prescribed by the spec should be enumerable.
    // Keep the rest as non-enumerable.

    Object.defineProperties(this, {
      message: {
        writable: true,
        enumerable: true,
      },
      name: {
        enumerable: false,
      },
      nodes: {
        enumerable: false,
      },
      source: {
        enumerable: false,
      },
      positions: {
        enumerable: false,
      },
      originalError: {
        enumerable: false,
      },
    }); // Include (non-enumerable) stack trace.

    /* c8 ignore start */
    // FIXME: https://github.com/graphql/graphql-js/issues/2317

    if (
      originalError !== null &&
      originalError !== void 0 &&
      originalError.stack
    ) {
      Object.defineProperty(this, 'stack', {
        value: originalError.stack,
        writable: true,
        configurable: true,
      });
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GraphQLError);
    } else {
      Object.defineProperty(this, 'stack', {
        value: Error().stack,
        writable: true,
        configurable: true,
      });
    }
    /* c8 ignore stop */
  }

  get [Symbol.toStringTag]() {
    return 'GraphQLError';
  }

  toString() {
    let output = this.message;

    if (this.nodes) {
      for (const node of this.nodes) {
        if (node.loc) {
          output += '\n\n' + printLocation(node.loc);
        }
      }
    } else if (this.source && this.locations) {
      for (const location of this.locations) {
        output += '\n\n' + printSourceLocation(this.source, location);
      }
    }

    return output;
  }

  toJSON() {
    const formattedError = {
      message: this.message,
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
  return array === undefined || array.length === 0 ? undefined : array;
}

/**
 * The set of allowed kind values for AST nodes.
 */
var Kind;

(function (Kind) {
  Kind['NAME'] = 'Name';
  Kind['DOCUMENT'] = 'Document';
  Kind['OPERATION_DEFINITION'] = 'OperationDefinition';
  Kind['VARIABLE_DEFINITION'] = 'VariableDefinition';
  Kind['SELECTION_SET'] = 'SelectionSet';
  Kind['FIELD'] = 'Field';
  Kind['ARGUMENT'] = 'Argument';
  Kind['FRAGMENT_SPREAD'] = 'FragmentSpread';
  Kind['INLINE_FRAGMENT'] = 'InlineFragment';
  Kind['FRAGMENT_DEFINITION'] = 'FragmentDefinition';
  Kind['VARIABLE'] = 'Variable';
  Kind['INT'] = 'IntValue';
  Kind['FLOAT'] = 'FloatValue';
  Kind['STRING'] = 'StringValue';
  Kind['BOOLEAN'] = 'BooleanValue';
  Kind['NULL'] = 'NullValue';
  Kind['ENUM'] = 'EnumValue';
  Kind['LIST'] = 'ListValue';
  Kind['OBJECT'] = 'ObjectValue';
  Kind['OBJECT_FIELD'] = 'ObjectField';
  Kind['DIRECTIVE'] = 'Directive';
  Kind['NAMED_TYPE'] = 'NamedType';
  Kind['LIST_TYPE'] = 'ListType';
  Kind['NON_NULL_TYPE'] = 'NonNullType';
  Kind['SCHEMA_DEFINITION'] = 'SchemaDefinition';
  Kind['OPERATION_TYPE_DEFINITION'] = 'OperationTypeDefinition';
  Kind['SCALAR_TYPE_DEFINITION'] = 'ScalarTypeDefinition';
  Kind['OBJECT_TYPE_DEFINITION'] = 'ObjectTypeDefinition';
  Kind['FIELD_DEFINITION'] = 'FieldDefinition';
  Kind['INPUT_VALUE_DEFINITION'] = 'InputValueDefinition';
  Kind['INTERFACE_TYPE_DEFINITION'] = 'InterfaceTypeDefinition';
  Kind['UNION_TYPE_DEFINITION'] = 'UnionTypeDefinition';
  Kind['ENUM_TYPE_DEFINITION'] = 'EnumTypeDefinition';
  Kind['ENUM_VALUE_DEFINITION'] = 'EnumValueDefinition';
  Kind['INPUT_OBJECT_TYPE_DEFINITION'] = 'InputObjectTypeDefinition';
  Kind['DIRECTIVE_DEFINITION'] = 'DirectiveDefinition';
  Kind['SCHEMA_EXTENSION'] = 'SchemaExtension';
  Kind['SCALAR_TYPE_EXTENSION'] = 'ScalarTypeExtension';
  Kind['OBJECT_TYPE_EXTENSION'] = 'ObjectTypeExtension';
  Kind['INTERFACE_TYPE_EXTENSION'] = 'InterfaceTypeExtension';
  Kind['UNION_TYPE_EXTENSION'] = 'UnionTypeExtension';
  Kind['ENUM_TYPE_EXTENSION'] = 'EnumTypeExtension';
  Kind['INPUT_OBJECT_TYPE_EXTENSION'] = 'InputObjectTypeExtension';
})(Kind || (Kind = {}));
/**
 * The enum type representing the possible kind values of AST nodes.
 *
 * @deprecated Please use `Kind`. Will be remove in v17.
 */

/**
 * ```
 * WhiteSpace ::
 *   - "Horizontal Tab (U+0009)"
 *   - "Space (U+0020)"
 * ```
 * @internal
 */
/**
 * ```
 * Digit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 * ```
 * @internal
 */

function isDigit(code) {
  return code >= 0x0030 && code <= 0x0039;
}
/**
 * ```
 * Letter :: one of
 *   - `A` `B` `C` `D` `E` `F` `G` `H` `I` `J` `K` `L` `M`
 *   - `N` `O` `P` `Q` `R` `S` `T` `U` `V` `W` `X` `Y` `Z`
 *   - `a` `b` `c` `d` `e` `f` `g` `h` `i` `j` `k` `l` `m`
 *   - `n` `o` `p` `q` `r` `s` `t` `u` `v` `w` `x` `y` `z`
 * ```
 * @internal
 */

function isLetter(code) {
  return (
    (code >= 0x0061 && code <= 0x007a) || // A-Z
    (code >= 0x0041 && code <= 0x005a) // a-z
  );
}
/**
 * ```
 * NameStart ::
 *   - Letter
 *   - `_`
 * ```
 * @internal
 */

function isNameStart(code) {
  return isLetter(code) || code === 0x005f;
}
/**
 * ```
 * NameContinue ::
 *   - Letter
 *   - Digit
 *   - `_`
 * ```
 * @internal
 */

function isNameContinue(code) {
  return isLetter(code) || isDigit(code) || code === 0x005f;
}

const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (typeof value) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? `[function ${value.name}]` : '[function]';

    case 'object':
      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (value === null) {
    return 'null';
  }

  if (previouslySeenValues.includes(value)) {
    return '[Circular]';
  }

  const seenValues = [...previouslySeenValues, value];

  if (isJSONable(value)) {
    const jsonValue = value.toJSON(); // check for infinite recursion

    if (jsonValue !== value) {
      return typeof jsonValue === 'string'
        ? jsonValue
        : formatValue(jsonValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function isJSONable(value) {
  return typeof value.toJSON === 'function';
}

function formatObject(object, seenValues) {
  const entries = Object.entries(object);

  if (entries.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  const properties = entries.map(
    ([key, value]) => key + ': ' + formatValue(value, seenValues),
  );
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  const len = Math.min(MAX_ARRAY_LENGTH, array.length);
  const remaining = array.length - len;
  const items = [];

  for (let i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push(`... ${remaining} more items`);
  }

  return '[' + items.join(', ') + ']';
}

function getObjectTag(object) {
  const tag = Object.prototype.toString
    .call(object)
    .replace(/^\[object /, '')
    .replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    const name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}

/**
 * Returns the first argument it receives.
 */
function identityFunc(x) {
  return x;
}

/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * and a function to produce the values from each item in the array.
 * ```ts
 * const phoneBook = [
 *   { name: 'Jon', num: '555-1234' },
 *   { name: 'Jenny', num: '867-5309' }
 * ]
 *
 * // { Jon: '555-1234', Jenny: '867-5309' }
 * const phonesByName = keyValMap(
 *   phoneBook,
 *   entry => entry.name,
 *   entry => entry.num
 * )
 * ```
 */
function keyValMap(list, keyFn, valFn) {
  const result = Object.create(null);

  for (const item of list) {
    result[keyFn(item)] = valFn(item);
  }

  return result;
}

function toObjMap(obj) {
  if (obj == null) {
    return Object.create(null);
  }

  if (Object.getPrototypeOf(obj) === null) {
    return obj;
  }

  const map = Object.create(null);

  for (const [key, value] of Object.entries(obj)) {
    map[key] = value;
  }

  return map;
}

/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * Unlike `valueFromAST()`, no type is provided. The resulting JavaScript value
 * will reflect the provided GraphQL value AST.
 *
 * | GraphQL Value        | JavaScript Value |
 * | -------------------- | ---------------- |
 * | Input Object         | Object           |
 * | List                 | Array            |
 * | Boolean              | Boolean          |
 * | String / Enum        | String           |
 * | Int / Float          | Number           |
 * | Null                 | null             |
 *
 */

function valueFromASTUntyped(valueNode, variables) {
  switch (valueNode.kind) {
    case Kind.NULL:
      return null;

    case Kind.INT:
      return parseInt(valueNode.value, 10);

    case Kind.FLOAT:
      return parseFloat(valueNode.value);

    case Kind.STRING:
    case Kind.ENUM:
    case Kind.BOOLEAN:
      return valueNode.value;

    case Kind.LIST:
      return valueNode.values.map((node) =>
        valueFromASTUntyped(node, variables),
      );

    case Kind.OBJECT:
      return keyValMap(
        valueNode.fields,
        (field) => field.name.value,
        (field) => valueFromASTUntyped(field.value, variables),
      );

    case Kind.VARIABLE:
      return variables === null || variables === void 0
        ? void 0
        : variables[valueNode.name.value];
  }
}

/**
 * Upholds the spec rules about naming.
 */

function assertName(name) {
  name != null || devAssert(false, 'Must provide name.');
  typeof name === 'string' || devAssert(false, 'Expected name to be a string.');

  if (name.length === 0) {
    throw new GraphQLError('Expected name to be a non-empty string.');
  }

  for (let i = 1; i < name.length; ++i) {
    if (!isNameContinue(name.charCodeAt(i))) {
      throw new GraphQLError(
        `Names must only contain [_a-zA-Z0-9] but "${name}" does not.`,
      );
    }
  }

  if (!isNameStart(name.charCodeAt(0))) {
    throw new GraphQLError(
      `Names must start with [_a-zA-Z] but "${name}" does not.`,
    );
  }

  return name;
}

/**
 * Custom extensions
 *
 * @remarks
 * Use a unique identifier name for your extension, for example the name of
 * your library or project. Do not use a shortened identifier as this increases
 * the risk of conflicts. We recommend you add at most one extension field,
 * an object which can contain all the values you need.
 */

/**
 * Scalar Type Definition
 *
 * The leaf values of any request and input values to arguments are
 * Scalars (or Enums) and are defined with a name and a series of functions
 * used to parse input from ast or variables and to ensure validity.
 *
 * If a type's serialize function returns `null` or does not return a value
 * (i.e. it returns `undefined`) then an error will be raised and a `null`
 * value will be returned in the response. It is always better to validate
 *
 * Example:
 *
 * ```ts
 * const OddType = new GraphQLScalarType({
 *   name: 'Odd',
 *   serialize(value) {
 *     if (!Number.isFinite(value)) {
 *       throw new Error(
 *         `Scalar "Odd" cannot represent "${value}" since it is not a finite number.`,
 *       );
 *     }
 *
 *     if (value % 2 === 0) {
 *       throw new Error(`Scalar "Odd" cannot represent "${value}" since it is even.`);
 *     }
 *     return value;
 *   }
 * });
 * ```
 */
class GraphQLScalarType {
  constructor(config) {
    var _config$parseValue,
      _config$serialize,
      _config$parseLiteral,
      _config$extensionASTN;

    const parseValue =
      (_config$parseValue = config.parseValue) !== null &&
      _config$parseValue !== void 0
        ? _config$parseValue
        : identityFunc;
    this.name = assertName(config.name);
    this.description = config.description;
    this.specifiedByURL = config.specifiedByURL;
    this.serialize =
      (_config$serialize = config.serialize) !== null &&
      _config$serialize !== void 0
        ? _config$serialize
        : identityFunc;
    this.parseValue = parseValue;
    this.parseLiteral =
      (_config$parseLiteral = config.parseLiteral) !== null &&
      _config$parseLiteral !== void 0
        ? _config$parseLiteral
        : (node, variables) => parseValue(valueFromASTUntyped(node, variables));
    this.extensions = toObjMap(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes =
      (_config$extensionASTN = config.extensionASTNodes) !== null &&
      _config$extensionASTN !== void 0
        ? _config$extensionASTN
        : [];
    config.specifiedByURL == null ||
      typeof config.specifiedByURL === 'string' ||
      devAssert(
        false,
        `${this.name} must provide "specifiedByURL" as a string, ` +
          `but got: ${inspect(config.specifiedByURL)}.`,
      );
    config.serialize == null ||
      typeof config.serialize === 'function' ||
      devAssert(
        false,
        `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`,
      );

    if (config.parseLiteral) {
      (typeof config.parseValue === 'function' &&
        typeof config.parseLiteral === 'function') ||
        devAssert(
          false,
          `${this.name} must provide both "parseValue" and "parseLiteral" functions.`,
        );
    }
  }

  get [Symbol.toStringTag]() {
    return 'GraphQLScalarType';
  }

  toConfig() {
    return {
      name: this.name,
      description: this.description,
      specifiedByURL: this.specifiedByURL,
      serialize: this.serialize,
      parseValue: this.parseValue,
      parseLiteral: this.parseLiteral,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes,
    };
  }

  toString() {
    return this.name;
  }

  toJSON() {
    return this.toString();
  }
}

// @ts-check

/** @typedef {import("./GraphQLUpload.mjs").default} GraphQLUpload */
/** @typedef {import("./processRequest.mjs").default} processRequest */

/**
 * A file expected to be uploaded as it was declared in the `map` field of a
 * [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec).
 * The {@linkcode processRequest} function places references to an instance of
 * this class wherever the file is expected in the GraphQL operation. The scalar
 * {@linkcode GraphQLUpload} derives it’s value from {@linkcode Upload.promise}.
 */
class Upload {
  constructor() {
    /**
     * Promise that resolves file upload details. This should only be utilized
     * by {@linkcode GraphQLUpload}.
     * @type {Promise<import("./processRequest.mjs").FileUpload>}
     */
    this.promise = new Promise((resolve, reject) => {
      /**
       * Resolves the upload promise with the file upload details. This should
       * only be utilized by {@linkcode processRequest}.
       * @param {import("./processRequest.mjs").FileUpload} file File upload
       *   details.
       */
      this.resolve = (file) => {
        /**
         * The file upload details, available when the
         * {@linkcode Upload.promise} resolves. This should only be utilized by
         * {@linkcode processRequest}.
         * @type {import("./processRequest.mjs").FileUpload | undefined}
         */
        this.file = file;

        resolve(file);
      };

      /**
       * Rejects the upload promise with an error. This should only be
       * utilized by {@linkcode processRequest}.
       * @param {Error} error Error instance.
       */
      this.reject = reject;
    });

    // Prevent errors crashing Node.js, see:
    // https://github.com/nodejs/node/issues/20392
    this.promise.catch(() => {});
  }
}

// @ts-check


/** @typedef {import("./processRequest.mjs").FileUpload} FileUpload */

/**
 * A GraphQL `Upload` scalar that can be used in a
 * [`GraphQLSchema`](https://graphql.org/graphql-js/type/#graphqlschema). It’s
 * value in resolvers is a promise that resolves
 * {@link FileUpload file upload details} for processing and storage.
 * @example
 * A schema built using the function
 * [`makeExecutableSchema`](https://www.graphql-tools.com/docs/api/modules/schema_src#makeexecutableschema)
 * from [`@graphql-tools/schema`](https://npm.im/@graphql-tools/schema):
 *
 * ```js
 * import { makeExecutableSchema } from "@graphql-tools/schema/makeExecutableSchema";
 * import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
 *
 * const schema = makeExecutableSchema({
 *   typeDefs: `
 *     scalar Upload
 *   `,
 *   resolvers: {
 *     Upload: GraphQLUpload,
 *   },
 * });
 * ```
 * @example
 * A manually constructed schema with an image upload mutation:
 *
 * ```js
 * import { GraphQLBoolean, GraphQLObjectType, GraphQLSchema } from "graphql";
 * import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
 *
 * const schema = new GraphQLSchema({
 *   mutation: new GraphQLObjectType({
 *     name: "Mutation",
 *     fields: {
 *       uploadImage: {
 *         description: "Uploads an image.",
 *         type: GraphQLBoolean,
 *         args: {
 *           image: {
 *             description: "Image file.",
 *             type: GraphQLUpload,
 *           },
 *         },
 *         async resolve(parent, { image }) {
 *           const { filename, mimetype, createReadStream } = await image;
 *           const stream = createReadStream();
 *           // Promisify the stream and store the file, then…
 *           return true;
 *         },
 *       },
 *     },
 *   }),
 * });
 * ```
 * @example
 * In a [TypeScript](https://typescriptlang.org) module, how to import the type
 * for the {@link FileUpload file upload details} that the
 * {@linkcode GraphQLUpload} scalar resolver value promise resolves:
 *
 * ```ts
 * import type { FileUpload } from "graphql-upload/processRequest.mjs";
 * ```
 */
const GraphQLUpload = new GraphQLScalarType({
  name: "Upload",
  description: "The `Upload` scalar type represents a file upload.",
  parseValue(value) {
    if (value instanceof Upload) return value.promise;
    throw new GraphQLError("Upload value invalid.");
  },
  parseLiteral(node) {
    throw new GraphQLError("Upload literal unsupported.", { nodes: node });
  },
  serialize() {
    throw new GraphQLError("Upload serialization unsupported.");
  },
});

const GraphQLUpload$1 = GraphQLUpload;

const uploadSMMS = async (path) => {
  const res = await smms.upload(path);
  return res.data;
};

const storeUpload = async ({ stream, filename }) => {
  const newFileName = `${moment().format("YYYYMMDDHHmmss")}-${encodeURI(
    filename
  )}`;
  const rawPath = `/tmp/images/${newFileName}`;
  return new Promise(
    (resolve, reject) => stream.pipe(createWriteStream(rawPath)).on("finish", async () => {
      resolve(await uploadSMMS(rawPath));
    }).on("error", reject)
  );
};
const processUpload = async (upload) => {
  const { createReadStream, filename } = await upload;
  const stream = createReadStream();
  const path = await storeUpload({
    stream,
    filename
  });
  console.log("\u{1F680} ~ file: image.js ~ line 68 ~ processUpload ~ path", path);
  return path;
};
const singleUpload = async (_, { file }) => {
  mkdir("/tmp/images", { recursive: true }, (err) => {
    if (err)
      throw err;
  });
  const upload = await processUpload(file);
  return upload;
};

const schema$5 = new mongoose.Schema(
  {
    name: String,
    content: String
  },
  {
    timestamp: true
  }
);
const CourseContent = mongoose.model("CourseContent", schema$5);

const getCourseContents = async () => {
  return CourseContent.find();
};
const updateCourseContent = (_, { course }) => {
  console.log(course);
  CourseContent.findByIdAndUpdate(
    course.courseId,
    {
      $set: { content: course.content, name: course.name }
    },
    (err, model) => {
      console.log(err, model);
    }
  );
};
const addCourseContent = (_, { course }) => {
  console.log(course);
  const courseContent = new CourseContent(course);
  return courseContent.save();
};

const schema$4 = new mongoose.Schema({
  title: String,
  content: String,
  masonries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Masonry"
    }
  ],
  route: String
});
const View = mongoose.model("View", schema$4);

const getView = async () => {
  return View.find();
};
const getViewByRoute = async (_, { route }) => {
  return View.findOne({ route });
};
const addView = (_, { details }) => {
  let view = new View(details);
  return view.save();
};
const updateView = (_, { details }) => {
  View.findByIdAndUpdate(
    details.viewId,
    {
      $set: { ...details }
    },
    (err, model) => {
      console.log(err, model);
    }
  );
};

const schema$3 = new mongoose.Schema(
  {
    field: String,
    to: String,
    icon: String,
    content: String
  },
  { timestamps: true }
);
const Contact = mongoose.model("Contact", schema$3);

const getContacts = async () => {
  return Contact.find();
};
const updateContact = (_, { contact }) => {
  const id = contact.contactId;
  delete contact.id;
  Contact.findByIdAndUpdate(id, {
    $set: { ...contact }
  });
};
const addContact = (_, { contact }) => {
  const newContact = new Contact(contact);
  return newContact.save();
};

const schema$2 = mongoose.Schema(
  {
    company: String,
    title: String,
    images: [
      {
        imageUrl: String,
        alt: String
      }
    ],
    url: String,
    publishedDate: Date
  },
  { timestamp: true }
);
const Interview = mongoose.model("Interview", schema$2);

const getInterviews = async () => {
  return Interview.find();
};
const formatInterview = (interview) => {
  let formatted = {
    ...interview,
    publishedDate: Date.parse(interview.publishedDate)
  };
  console.log(formatted);
  return formatted;
};
const addInterview = async (_, { interview }) => {
  const newInterview = new Interview(formatInterview(interview));
  const result = await newInterview.save();
  return result;
};
const updateInterview = async (_, { interview }) => {
  const id = interview.interviewId;
  delete interview.interviewId;
  Interview.findByIdAndUpdate(id, { $set: formatInterview(interview) });
};

const schema$1 = new mongoose.Schema(
  {
    title: String,
    route: String,
    order: Number,
    images: [
      {
        imageUrl: String,
        title: String,
        paragraph: String,
        alt: String
      }
    ]
  },
  { timestamp: true }
);
const Masonry = mongoose.model("Masonry", schema$1);

const getMasonryById = async (_, { id }) => {
  return Masonry.findById(id);
};
const getMasonryByRoute = async (_, { route }) => {
  return Masonry.find({ route }).sort([["order", "asc"]]);
};
const addMasonry = async (_, { masonry }) => {
  const newMasonry = new Masonry(masonry);
  const result = newMasonry.save();
  return result;
};
const updateMasonry = async (_, { masonry }) => {
  const id = masonry.masonryId;
  delete masonry.masonryId;
  Masonry.findByIdAndUpdate(id, { $set: masonry });
};

const schema = new mongoose.Schema(
  {
    route: String,
    order: Number,
    images: [
      {
        imageUrl: String,
        alt: String,
        title: String,
        paragraph: String
      }
    ]
  },
  {
    timestamp: true
  }
);
const Carousel = mongoose.model("Carousel", schema);

const getCarouselById = async (_, { id }) => {
  return Carousel.findById(id);
};
const getCarouselByRoute = async (_, { route }) => {
  return Carousel.find({ route });
};
const addCarousel = async (_, { carousel }) => {
  const newCarousel = new Carousel(carousel);
  const result = newCarousel.save();
  return result;
};
const updateCarousel = async (_, { carousel }) => {
  const id = carousel.carouselId;
  delete carousel.carouselId;
  Carousel.findByIdAndUpdate(id, { $set: carousel });
};

const resolvers = {
  Upload: GraphQLUpload$1,
  Query: {
    getInstructors,
    getRankings,
    getAssessmentSyllabus,
    getClasses,
    getCourseContents,
    getView,
    getViewByRoute,
    getContacts,
    getInterviews,
    getMasonryById,
    getCarouselById,
    getMasonryByRoute,
    getCarouselByRoute
  },
  Mutation: {
    addInstructor,
    updateInstructor,
    removeInstructor,
    // addPersonToRank,
    updateRanking,
    updateAssessmentSyllabus,
    singleUpload,
    addClass,
    updateClass,
    removeClass,
    updateCourseContent,
    addCourseContent,
    addView,
    updateView,
    addContact,
    updateContact,
    addInterview,
    updateInterview,
    updateMasonry,
    addMasonry,
    addCarousel,
    updateCarousel
  }
};
const resolvers$1 = resolvers;

// @ts-check

/**
 * [GraphQL multipart request spec](https://github.com/jaydenseric/graphql-multipart-request-spec)
 * URL. Useful for error messages, etc.
 */
const GRAPHQL_MULTIPART_REQUEST_SPEC_URL =
  "https://github.com/jaydenseric/graphql-multipart-request-spec";

const GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1 = GRAPHQL_MULTIPART_REQUEST_SPEC_URL;

// @ts-check

/**
 * Safely ignores a Node.js readable stream.
 * @param {import("node:stream").Readable} stream Node.js readable stream.
 */
function ignoreStream(stream) {
  // Prevent an unhandled error from crashing the process.
  stream.on("error", () => {});

  // Waste the stream.
  stream.resume();
}

// @ts-check


/** @typedef {import("./GraphQLUpload.mjs").default} GraphQLUpload */

/**
 * Processes an incoming
 * [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec).
 * It parses the `operations` and `map` fields to create an {@linkcode Upload}
 * instance for each expected file upload, placing references wherever the file
 * is expected in the GraphQL operation for the {@linkcode GraphQLUpload} scalar
 * to derive it’s value. Errors are created with
 * [`http-errors`](https://npm.im/http-errors) to assist in sending responses
 * with appropriate HTTP status codes. Used to create custom middleware.
 * @type {ProcessRequestFunction}
 */
function processRequest(
  request,
  response,
  {
    maxFieldSize = 1000000, // 1 MB
    maxFileSize = Infinity,
    maxFiles = Infinity,
  } = {}
) {
  return new Promise((resolve, reject) => {
    /** @type {boolean} */
    let released;

    /** @type {Error} */
    let exitError;

    /**
     * @type {{ [key: string]: unknown } | Array<
     *   { [key: string]: unknown }
     * >}
     */
    let operations;

    /**
     * @type {import("object-path").ObjectPathBound<
     *   { [key: string]: unknown } | Array<{ [key: string]: unknown }>
     * >}
     */
    let operationsPath;

    /** @type {Map<string, Upload>} */
    let map;

    const parser = busboy({
      headers: request.headers,
      defParamCharset: "utf8",
      limits: {
        fieldSize: maxFieldSize,
        fields: 2, // Only operations and map.
        fileSize: maxFileSize,
        files: maxFiles,
      },
    });

    /**
     * Exits request processing with an error. Successive calls have no effect.
     * @param {Error} error Error instance.
     * @param {boolean} [isParserError] Is the error from the parser.
     */
    function exit(error, isParserError = false) {
      if (exitError) return;

      exitError = error;

      if (map)
        for (const upload of map.values())
          if (!upload.file) upload.reject(exitError);

      // If the error came from the parser, don’t cause it to be emitted again.
      isParserError ? parser.destroy() : parser.destroy(exitError);

      request.unpipe(parser);

      // With a sufficiently large request body, subsequent events in the same
      // event frame cause the stream to pause after the parser is destroyed. To
      // ensure that the request resumes, the call to .resume() is scheduled for
      // later in the event loop.
      setImmediate(() => {
        request.resume();
      });

      reject(exitError);
    }

    parser.on("field", (fieldName, value, { valueTruncated }) => {
      if (valueTruncated)
        return exit(
          createError(
            413,
            `The ‘${fieldName}’ multipart field value exceeds the ${maxFieldSize} byte size limit.`
          )
        );

      switch (fieldName) {
        case "operations":
          try {
            operations = JSON.parse(value);
          } catch (error) {
            return exit(
              createError(
                400,
                `Invalid JSON in the ‘operations’ multipart field (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
              )
            );
          }

          // `operations` should be an object or an array. Note that arrays
          // and `null` have an `object` type.
          if (typeof operations !== "object" || !operations)
            return exit(
              createError(
                400,
                `Invalid type for the ‘operations’ multipart field (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
              )
            );

          operationsPath = objectPath(operations);

          break;
        case "map": {
          if (!operations)
            return exit(
              createError(
                400,
                `Misordered multipart fields; ‘map’ should follow ‘operations’ (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
              )
            );

          let parsedMap;
          try {
            parsedMap = JSON.parse(value);
          } catch (error) {
            return exit(
              createError(
                400,
                `Invalid JSON in the ‘map’ multipart field (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
              )
            );
          }

          // `map` should be an object.
          if (
            typeof parsedMap !== "object" ||
            !parsedMap ||
            Array.isArray(parsedMap)
          )
            return exit(
              createError(
                400,
                `Invalid type for the ‘map’ multipart field (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
              )
            );

          const mapEntries = Object.entries(parsedMap);

          // Check max files is not exceeded, even though the number of files
          // to parse might not match the map provided by the client.
          if (mapEntries.length > maxFiles)
            return exit(
              createError(413, `${maxFiles} max file uploads exceeded.`)
            );

          map = new Map();
          for (const [fieldName, paths] of mapEntries) {
            if (!Array.isArray(paths))
              return exit(
                createError(
                  400,
                  `Invalid type for the ‘map’ multipart field entry key ‘${fieldName}’ array (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
                )
              );

            map.set(fieldName, new Upload());

            for (const [index, path] of paths.entries()) {
              if (typeof path !== "string")
                return exit(
                  createError(
                    400,
                    `Invalid type for the ‘map’ multipart field entry key ‘${fieldName}’ array index ‘${index}’ value (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
                  )
                );

              try {
                operationsPath.set(path, map.get(fieldName));
              } catch (error) {
                return exit(
                  createError(
                    400,
                    `Invalid object path for the ‘map’ multipart field entry key ‘${fieldName}’ array index ‘${index}’ value ‘${path}’ (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
                  )
                );
              }
            }
          }

          resolve(operations);
        }
      }
    });

    parser.on(
      "file",
      (fieldName, stream, { filename, encoding, mimeType: mimetype }) => {
        if (!map) {
          ignoreStream(stream);
          return exit(
            createError(
              400,
              `Misordered multipart fields; files should follow ‘map’ (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
            )
          );
        }

        const upload = map.get(fieldName);

        if (!upload) {
          // The file is extraneous. As the rest can still be processed, just
          // ignore it and don’t exit with an error.
          ignoreStream(stream);
          return;
        }

        /** @type {Error} */
        let fileError;

        const capacitor = new WriteStream();

        capacitor.on("error", () => {
          stream.unpipe();
          stream.resume();
        });

        stream.on("limit", () => {
          fileError = createError(
            413,
            `File truncated as it exceeds the ${maxFileSize} byte size limit.`
          );
          stream.unpipe();
          capacitor.destroy(fileError);
        });

        stream.on("error", (error) => {
          fileError = error;
          stream.unpipe();
          capacitor.destroy(fileError);
        });

        /** @type {FileUpload} */
        const file = {
          filename,
          mimetype,
          encoding,
          createReadStream(options) {
            const error = fileError || (released ? exitError : null);
            if (error) throw error;
            return capacitor.createReadStream(options);
          },
          capacitor,
        };

        Object.defineProperty(file, "capacitor", {
          enumerable: false,
          configurable: false,
          writable: false,
        });

        stream.pipe(capacitor);
        upload.resolve(file);
      }
    );

    parser.once("filesLimit", () =>
      exit(createError(413, `${maxFiles} max file uploads exceeded.`))
    );

    parser.once("finish", () => {
      request.unpipe(parser);
      request.resume();

      if (!operations)
        return exit(
          createError(
            400,
            `Missing multipart field ‘operations’ (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
          )
        );

      if (!map)
        return exit(
          createError(
            400,
            `Missing multipart field ‘map’ (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL$1}).`
          )
        );

      for (const upload of map.values())
        if (!upload.file)
          upload.reject(createError(400, "File missing in the request."));
    });

    // Use the `on` method instead of `once` as in edge cases the same parser
    // could have multiple `error` events and all must be handled to prevent the
    // Node.js process exiting with an error. One edge case is if there is a
    // malformed part header as well as an unexpected end of the form.
    parser.on("error", (/** @type {Error} */ error) => {
      exit(error, true);
    });

    response.once("close", () => {
      released = true;

      if (map)
        for (const upload of map.values())
          if (upload.file)
            // Release resources and clean up temporary files.
            upload.file.capacitor.release();
    });

    request.once("close", () => {
      if (!request.readableEnded)
        exit(
          createError(
            499,
            "Request disconnected during file upload stream parsing."
          )
        );
    });

    request.pipe(parser);
  });
}

/**
 * File upload details that are only available after the file’s field in the
 * [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec)
 * has begun streaming in.
 * @typedef {object} FileUpload
 * @prop {string} filename File name.
 * @prop {string} mimetype File MIME type. Provided by the client and can’t be
 *   trusted.
 * @prop {string} encoding File stream transfer encoding.
 * @prop {import("fs-capacitor").WriteStream} capacitor A private implementation
 *   detail that shouldn’t be used outside
 *   [`graphql-upload`](https://npm.im/graphql-upload).
 * @prop {FileUploadCreateReadStream} createReadStream Creates a
 *   [Node.js readable stream](https://nodejs.org/api/stream.html#readable-streams)
 *   of the file’s contents, for processing and storage.
 */

/**
 * Creates a
 * [Node.js readable stream](https://nodejs.org/api/stream.html#readable-streams)
 * of an {@link FileUpload uploading file’s} contents, for processing and
 * storage. Multiple calls create independent streams. Throws if called after
 * all resolvers have resolved, or after an error has interrupted the request.
 * @callback FileUploadCreateReadStream
 * @param {FileUploadCreateReadStreamOptions} [options] Options.
 * @returns {import("node:stream").Readable}
 *   [Node.js readable stream](https://nodejs.org/api/stream.html#readable-streams)
 *   of the file’s contents.
 * @see [Node.js `Readable` stream constructor docs](https://nodejs.org/api/stream.html#new-streamreadableoptions).
 * @see [Node.js stream backpressure guide](https://nodejs.org/en/docs/guides/backpressuring-in-streams).
 */

/**
 * {@linkcode FileUploadCreateReadStream} options.
 * @typedef {object} FileUploadCreateReadStreamOptions
 * @prop {import("fs-capacitor")
 *   .ReadStreamOptions["encoding"]} [options.encoding] Specify an encoding for
 *   the [`data`](https://nodejs.org/api/stream.html#event-data) chunks to be
 *   strings (without splitting multi-byte characters across chunks) instead of
 *   Node.js [`Buffer`](https://nodejs.org/api/buffer.html#buffer) instances.
 *   Supported values depend on the
 *   [`Buffer` implementation](https://github.com/nodejs/node/blob/v18.1.0/lib/buffer.js#L590-L680)
 *   and include `utf8`, `ucs2`, `utf16le`, `latin1`, `ascii`, `base64`,
 *   `base64url`, or `hex`. Defaults to `utf8`.
 * @prop {import("fs-capacitor")
 *   .ReadStreamOptions["highWaterMark"]} [options.highWaterMark] Maximum number
 *   of bytes to store in the internal buffer before ceasing to read from the
 *   underlying resource. Defaults to `16384`.
 */

/**
 * Processes an incoming
 * [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec).
 * @callback ProcessRequestFunction
 * @param {import("node:http").IncomingMessage} request
 *   [Node.js HTTP server request instance](https://nodejs.org/api/http.html#http_class_http_incomingmessage).
 * @param {import("node:http").ServerResponse} response
 *   [Node.js HTTP server response instance](https://nodejs.org/api/http.html#http_class_http_serverresponse).
 * @param {ProcessRequestOptions} [options] Options.
 * @returns {Promise<
 *   { [key: string]: unknown } | Array<{ [key: string]: unknown }>
 * >} GraphQL operation or batch of operations for a GraphQL server to consume
 *   (usually as the request body). A GraphQL operation typically has the
 *   properties `query` and `variables`.
 */

/**
 * {@linkcode ProcessRequestFunction} options.
 * @typedef {object} ProcessRequestOptions
 * @prop {number} [maxFieldSize] Maximum allowed non file multipart form field
 *   size in bytes; enough for your queries. Defaults to `1000000` (1 MB).
 * @prop {number} [maxFileSize] Maximum allowed file size in bytes. Defaults to
 *   `Infinity`.
 * @prop {number} [maxFiles] Maximum allowed number of files. Defaults to
 *   `Infinity`.
 */

// @ts-check


/**
 * Creates [Express](https://expressjs.com) middleware that processes incoming
 * [GraphQL multipart requests](https://github.com/jaydenseric/graphql-multipart-request-spec)
 * using {@linkcode processRequest}, ignoring non multipart requests. It sets
 * the request `body` to be similar to a conventional GraphQL POST request for
 * following GraphQL middleware to consume.
 * @param {import("./processRequest.mjs").ProcessRequestOptions & {
 *   processRequest?: import("./processRequest.mjs").ProcessRequestFunction
 * }} options Options.
 * @returns Express middleware.
 * @example
 * Basic [`express-graphql`](https://npm.im/express-graphql) setup:
 *
 * ```js
 * import express from "express";
 * import expressGraphQL from "express-graphql";
 * import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";
 *
 * import schema from "./schema.mjs";
 *
 * express()
 *   .use(
 *     "/graphql",
 *     graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
 *     expressGraphQL.graphqlHTTP({ schema })
 *   )
 *   .listen(3000);
 * ```
 */
function graphqlUploadExpress({
  processRequest: processRequest$1 = processRequest,
  ...processRequestOptions
} = {}) {
  /**
   * [Express](https://expressjs.com) middleware that processes incoming
   * [GraphQL multipart requests](https://github.com/jaydenseric/graphql-multipart-request-spec)
   * using {@linkcode processRequest}, ignoring non multipart requests. It sets
   * the request `body` to be similar to a conventional GraphQL POST request for
   * following GraphQL middleware to consume.
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  function graphqlUploadExpressMiddleware(request, response, next) {
    if (!request.is("multipart/form-data")) return next();

    const requestEnd = new Promise((resolve) => request.on("end", resolve));
    const { send } = response;

    // @ts-ignore Todo: Find a less hacky way to prevent sending a response
    // before the request has ended.
    response.send =
      /** @param {Array<unknown>} args */
      (...args) => {
        requestEnd.then(() => {
          response.send = send;
          response.send(...args);
        });
      };

    processRequest$1(request, response, processRequestOptions)
      .then((body) => {
        request.body = body;
        next();
      })
      .catch((error) => {
        if (error.status && error.expose) response.status(error.status);
        next(error);
      });
  }

  return graphqlUploadExpressMiddleware;
}

const app = express();
mongooseConnect();
const httpServer = createServer(app);
const server = new ApolloServer({
  typeDefs: schema$6,
  resolvers: resolvers$1,
  // plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
  uploads: false
  // introspection: true,
  // playground: true,
});
app.use("*", cors());
app.use(graphqlUploadExpress({ maxFileSize: 1e7, maxFiles: 10 }));
app.use(compression());
app.use(express.static(path.dirname("/"), { dotfiles: "allow" }));
const staticFileMiddleware = express.static(path.dirname("/"), { dotfiles: "allow" });
app.use(staticFileMiddleware);
app.use(staticFileMiddleware);
const graphql = startServerAndCreateH3Handler(server, {});

const graphql$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: graphql,
      httpServer: httpServer
});

const appRootId = "__nuxt";

const appRootTag = "div";

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('/Users/yyymx/Dev/Projects/Current/hksanda-website/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getStaticRenderedHead = () => Promise.resolve().then(function () { return _virtual__headStatic$1; }).then((r) => r.default || r);
const getServerEntry = () => import('/Users/yyymx/Dev/Projects/Current/hksanda-website/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag} id="${appRootId}">${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const options = {
    manifest,
    renderToString: () => `<${appRootTag} id="${appRootId}"></${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.payload = {
      _errors: {},
      serverRendered: false,
      data: {},
      state: {}
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    ssrContext.renderMeta = ssrContext.renderMeta ?? getStaticRenderedHead;
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
async function getIslandContext(event) {
  const url = event.node.req.url?.substring("/__nuxt_island".length + 1) || "";
  const [componentName, hashId] = url.split("?")[0].split(":");
  const context = event.node.req.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr(context.props) || {}
  };
  return ctx;
}
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.js(\?.*)?$/;
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag} id="${appRootId}">([\\s\\S]*)</${appRootTag}>$`);
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.node.req.url?.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && event.node.req.socket.readyState !== "readOnly") {
    throw createError$1({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const islandContext = event.node.req.url?.startsWith("/__nuxt_island") ? await getIslandContext(event) : void 0;
  let url = ssrError?.url || islandContext?.url || event.node.req.url;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url);
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false || (false),
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (event.node.res.headersSent || event.node.res.writableEnded) {
    return;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const renderedMeta = await ssrContext.renderMeta?.() ?? {};
  const inlinedStyles = "";
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const htmlContext = {
    island: Boolean(islandContext),
    htmlAttrs: normalizeChunks([renderedMeta.htmlAttrs]),
    head: normalizeChunks([
      renderedMeta.headTags,
      null,
      NO_SCRIPTS ? null : _rendered.renderResourceHints(),
      _rendered.renderStyles(),
      inlinedStyles,
      ssrContext.styles
    ]),
    bodyAttrs: normalizeChunks([renderedMeta.bodyAttrs]),
    bodyPrepend: normalizeChunks([
      renderedMeta.bodyScriptsPrepend,
      ssrContext.teleports?.body
    ]),
    body: [_rendered.html],
    bodyAppend: normalizeChunks([
      NO_SCRIPTS ? void 0 : renderPayloadScript({ ssrContext, data: ssrContext.payload }),
      routeOptions.experimentalNoScripts ? void 0 : _rendered.renderScripts(),
      // Note: bodyScripts may contain tags other than <script>
      renderedMeta.bodyScripts
    ])
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  if (islandContext) {
    const _tags = htmlContext.head.flatMap((head2) => extractHTMLTags(head2));
    const head = {
      link: _tags.filter((tag) => tag.tagName === "link" && tag.attrs.rel === "stylesheet" && tag.attrs.href.includes("scoped") && !tag.attrs.href.includes("pages/")).map((tag) => ({
        key: "island-link-" + hash(tag.attrs.href),
        ...tag.attrs
      })),
      style: _tags.filter((tag) => tag.tagName === "style" && tag.innerHTML).map((tag) => ({
        key: "island-style-" + hash(tag.innerHTML),
        innerHTML: tag.innerHTML
      }))
    };
    const islandResponse = {
      id: islandContext.id,
      head,
      html: getServerComponentHTML(htmlContext.body),
      state: ssrContext.payload.state
    };
    await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
    const response2 = {
      body: JSON.stringify(islandResponse, null, 2),
      statusCode: event.node.res.statusCode,
      statusMessage: event.node.res.statusMessage,
      headers: {
        "content-type": "application/json;charset=utf-8",
        "x-powered-by": "Nuxt"
      }
    };
    return response2;
  }
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: event.node.res.statusCode,
    statusMessage: event.node.res.statusMessage,
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
const HTML_TAG_RE = /<(?<tag>[a-z]+)(?<rawAttrs> [^>]*)?>(?:(?<innerHTML>[\s\S]*?)<\/\k<tag>)?/g;
const HTML_TAG_ATTR_RE = /(?<name>[a-z]+)="(?<value>[^"]*)"/g;
function extractHTMLTags(html) {
  const tags = [];
  for (const tagMatch of html.matchAll(HTML_TAG_RE)) {
    const attrs = {};
    for (const attrMatch of tagMatch.groups.rawAttrs?.matchAll(HTML_TAG_ATTR_RE) || []) {
      attrs[attrMatch.groups.name] = attrMatch.groups.value;
    }
    const innerHTML = tagMatch.groups.innerHTML || "";
    tags.push({ tagName: tagMatch.groups.tag, attrs, innerHTML });
  }
  return tags;
}
function renderPayloadResponse(ssrContext) {
  return {
    body: `export default ${devalue(splitPayload(ssrContext).payload)}`,
    statusCode: ssrContext.event.node.res.statusCode,
    statusMessage: ssrContext.event.node.res.statusMessage,
    headers: {
      "content-type": "text/javascript;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadScript(opts) {
  opts.data.config = opts.ssrContext.config;
  return `<script>window.__NUXT__=${devalue(opts.data)}<\/script>`;
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}
function getServerComponentHTML(body) {
  const match = body[0].match(ROOT_NODE_REGEX);
  return match ? match[1] : body[0];
}

const renderer$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: renderer
});

const cachedFonts = {};
async function loadFont(font) {
  if (cachedFonts[font])
    return cachedFonts[font];
  let data;
  const storageKey = `assets:nuxt-og-imagee:font:${font}`;
  if (await useStorage().hasItem(storageKey)) {
    data = base64ToArrayBuffer(await useStorage().getItem(storageKey));
    return cachedFonts[font] = { name: font, data, style: "normal" };
  }
  const [name, weight] = font.split(":");
  if (name === "Inter" && ["400", "700"].includes(weight)) {
    const data2 = await readPublicAsset(`/inter-latin-ext-${weight}-normal.woff`);
    if (data2)
      return cachedFonts[font] = { name, weight: Number(weight), data: data2, style: "normal" };
  }
  if (!data) {
    const fontUrl = await globalThis.$fetch("/api/og-image-font", {
      query: { name, weight }
    });
    data = await globalThis.$fetch(fontUrl, {
      responseType: "arrayBuffer"
    });
  }
  await useStorage().setItem(storageKey, Buffer.from(data).toString("base64"));
  return cachedFonts[font] = { name, weight: Number(weight), data, style: "normal" };
}
async function walkSatoriTree(url, node, plugins) {
  if (!node.props?.children)
    return;
  if (Array.isArray(node.props.children) && node.props.children.length === 0) {
    delete node.props.children;
    return;
  }
  for (const child of node.props.children || []) {
    if (child) {
      for (const plugin of plugins) {
        if (plugin.filter(child))
          await plugin.transform(child);
      }
      await walkSatoriTree(url, child, plugins);
    }
  }
}
function defineSatoriTransformer(transformer) {
  return transformer;
}

const imageSrc = defineSatoriTransformer((url) => {
  return {
    filter: (node) => node.type === "img",
    transform: async (node) => {
      const src = node.props?.src;
      if (src && src.startsWith("/")) {
        const file = await readPublicAssetBase64(src);
        if (file)
          node.props.src = file;
        else
          node.props.src = withBase(src, `${url.protocol}//${url.host}`);
      }
    }
  };
});

const twClasses = defineSatoriTransformer(() => {
  return {
    filter: (node) => !!node.props?.class && !node.props?.tw,
    transform: async (node) => {
      node.props.tw = node.props.class;
    }
  };
});

const flex = defineSatoriTransformer(() => {
  return {
    filter: (node) => node.type === "div" && (Array.isArray(node.props?.children) && node.props?.children.length >= 1) && (!node.props.style?.display && !node.props?.class?.includes("hidden")),
    transform: async (node) => {
      node.props.style = node.props.style || {};
      node.props.style.display = "flex";
      if (!node.props?.class?.includes("flex-"))
        node.props.style.flexDirection = "column";
    }
  };
});

const emojis = defineSatoriTransformer(() => {
  return {
    filter: (node) => node.type === "img" && node.props?.class?.includes("emoji"),
    transform: async (node) => {
      node.props.style = node.props.style || {};
      node.props.style.height = "1em";
      node.props.style.width = "1em";
      node.props.style.margin = "0 .05em 0 .1em";
      node.props.style.verticalAlign = "0.1em";
    }
  };
});

const encoding = defineSatoriTransformer(() => {
  return {
    filter: (node) => typeof node.props?.children === "string",
    transform: async (node) => {
      node.props.children = node.props.children.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#x2F;/g, "/");
    }
  };
});

async function svg2png(svg, options) {
  const loader = wasmLoader("/* NUXT_OG_IMAGE_SVG2PNG_WASM */", "/svg2png.wasm", options.baseUrl);
  if (!await loader.loaded())
    await initialize(await loader.load()).catch(() => {
    });
  return await svg2png$1(svg, options);
}

async function loadSvg2png() {
 return svg2png
}

function satori$1(nodes, options) {
  return satori$2(nodes, options);
}

async function loadSatori() {
  return satori$1
}

const satoriFonts = [];
let fontLoadPromise = null;
function loadFonts(fonts2) {
  if (fontLoadPromise)
    return fontLoadPromise;
  return fontLoadPromise = Promise.all(fonts2.map((font) => loadFont(font)));
}
const satori = {
  name: "satori",
  createPng: async function createPng(baseUrl, options) {
    const svg = await this.createSvg(baseUrl, options);
    const svg2png = await loadSvg2png();
    return svg2png(svg, { baseUrl, ...options });
  },
  createVNode: async function createVNode(baseUrl, options) {
    const url = parseURL(baseUrl);
    const html = await globalThis.$fetch("/api/og-image-html", {
      query: { path: url.pathname, options: JSON.stringify(options) }
    });
    const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/)?.[1];
    const emojiedFont = twemoji.parse(body, {
      folder: "svg",
      ext: ".svg"
    });
    const satoriTree = html$2(emojiedFont);
    await walkSatoriTree(url, satoriTree, [
      // @todo add user land support
      emojis(url),
      twClasses(url),
      imageSrc(url),
      flex(url),
      encoding(url)
    ]);
    return satoriTree;
  },
  createSvg: async function createSvg(baseUrl, options) {
    const vnodes = await this.createVNode(baseUrl, options);
    if (!satoriFonts.length)
      satoriFonts.push(...await loadFonts(fonts));
    const satori = await loadSatori();
    return await satori(vnodes, {
      ...satoriOptions,
      baseUrl,
      fonts: satoriFonts,
      embedFont: true,
      width: options.width,
      height: options.height
    });
  }
};

async function screenshot(browser, options) {
  const page = await browser.newPage({
    colorScheme: options.colorScheme
  });
  await page.setViewportSize({
    width: options.width || 1200,
    height: options.height || 630
  });
  if (options.path.startsWith("html:")) {
    await page.evaluate((html) => {
      document.open("text/html");
      document.write(html);
      document.close();
    }, options.path.substring(5));
    await page.waitForLoadState("networkidle");
  } else {
    await page.goto(`${options.host}${options.path}`, {
      timeout: 1e4,
      waitUntil: "networkidle"
    });
  }
  if (options.delay)
    await page.waitForTimeout(options.delay);
  if (options.mask) {
    await page.evaluate((mask) => {
      for (const el of document.querySelectorAll(mask))
        el.style.display = "none";
    }, options.mask);
  }
  if (options.selector)
    return await page.locator(options.selector).screenshot();
  return await page.screenshot();
}

async function createBrowser() {
  try {
    const { Launcher } = await import(String("chrome-launcher"));
    const chromePath = Launcher.getFirstInstallation();
    return await playwrightCore.chromium.launch({
      headless: true,
      executablePath: chromePath
    });
  } catch (e) {
  }
  try {
    return await playwrightCore.chromium.launch({
      headless: true
    });
  } catch (e) {
  }
  try {
    const playwright = await import(String("playwright"));
    return await playwright.chromium.launch({
      headless: true
    });
  } catch (e) {
    {
      console.warn("Failed to load chromium instance. Ensure you have chrome installed, otherwise add the dependency: `npm add -D playwright`.");
    }
  }
}

async function loadBrowser() {
  return createBrowser
}

const browser = {
  name: "browser",
  createSvg: async function createSvg() {
    throw new Error("Browser provider can't create SVGs.");
  },
  createVNode: async function createVNode() {
    throw new Error("Browser provider can't create VNodes.");
  },
  createPng: async function createPng(basePath, options) {
    const url = new URL(basePath);
    const createBrowser = await loadBrowser();
    const browser = await createBrowser();
    if (browser) {
      return screenshot(browser, {
        ...options,
        host: url.origin,
        path: `/api/og-image-html?path=${url.pathname}`
      });
    }
    return null;
  }
};

async function useProvider(provider) {
  if (provider === 'satori')
    return satori
  if (provider === 'browser')
    return browser
}

const og_png = defineEventHandler(async (e) => {
  const path = parseURL(e.path).pathname;
  if (!path.endsWith("__og_image__/og.png"))
    return;
  const basePath = withoutTrailingSlash(
    path.replace("__og_image__/og.png", "")
  );
  setHeader(e, "Content-Type", "image/png");
  setHeader(e, "Cache-Control", "no-cache, no-store, must-revalidate");
  setHeader(e, "Pragma", "no-cache");
  setHeader(e, "Expires", "0");
  const options = await fetchOptions(e, basePath);
  const provider = await useProvider(options.provider);
  if (!provider) {
    throw createError$1({
      statusCode: 500,
      statusMessage: `Provider ${options.provider} is missing.`
    });
  }
  return provider.createPng(withBase(basePath, useHostname(e)), options);
});

const og_png$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: og_png
});

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
  return defineHeadPlugin({
    hooks: {
      "tags:resolve": (ctx) => {
        const tagPositionForKey = (key) => ctx.tags.find((tag) => tag._d === key)?._p;
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
  return defineHeadPlugin({
    hooks: {
      "tags:resolve": (ctx) => {
        const { tags } = ctx;
        let titleTemplateIdx = tags.findIndex((i) => i.tag === "titleTemplate");
        const titleIdx = tags.findIndex((i) => i.tag === "title");
        if (titleIdx !== -1 && titleTemplateIdx !== -1) {
          const newTitle = resolveTitleTemplate(
            tags[titleTemplateIdx].textContent,
            tags[titleIdx].textContent
          );
          if (newTitle !== null) {
            tags[titleIdx].textContent = newTitle || tags[titleIdx].textContent;
          } else {
            delete tags[titleIdx];
          }
        } else if (titleTemplateIdx !== -1) {
          const newTitle = resolveTitleTemplate(
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
  return defineHeadPlugin({
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
  return defineHeadPlugin({
    hooks: {
      "tag:normalise": ({ tag, resolvedOptions }) => {
        if (resolvedOptions.experimentalHashHydration === true) {
          tag._h = hashTag(tag);
        }
        if (tag.key && DupeableTags.includes(tag.tag)) {
          tag._h = hashCode(tag.key);
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
  return defineHeadPlugin({
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
        const $eventListenerTarget = ctx.tag.tag === "bodyAttrs" && "undefined" !== "undefined" ? window : $el;
        Object.entries(ctx.tag._eventHandlers).forEach(([k, value]) => {
          const sdeKey = `${ctx.tag._d || ctx.tag._p}:${k}`;
          const eventName = k.slice(2).toLowerCase();
          const eventDedupeKey = `data-h-${eventName}`;
          ctx.markSideEffect(sdeKey, () => {
          });
          if ($el.hasAttribute(eventDedupeKey))
            return;
          const handler = value;
          $el.setAttribute(eventDedupeKey, "");
          $eventListenerTarget.addEventListener(eventName, handler);
          if (ctx.entry) {
            ctx.entry._sde[sdeKey] = () => {
              $eventListenerTarget.removeEventListener(eventName, handler);
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
  return defineHeadPlugin({
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
            let strategy = tag?.tagDuplicateStrategy;
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

function processTemplateParams(s, config) {
  function sub(token) {
    if (["s", "pageTitle"].includes(token))
      return config.pageTitle;
    let val;
    if (token.includes(".")) {
      val = token.split(".").reduce((acc, key) => acc ? acc[key] || void 0 : void 0, config);
    } else {
      val = config[token];
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
  if (config.separator) {
    if (s.endsWith(config.separator))
      s = s.slice(0, -config.separator.length).trim();
    if (s.startsWith(config.separator))
      s = s.slice(config.separator.length).trim();
    s = s.replace(new RegExp(`\\${config.separator}\\s*\\${config.separator}`, "g"), config.separator);
  }
  return s;
}
function TemplateParamsPlugin() {
  return defineHeadPlugin({
    hooks: {
      "tags:resolve": (ctx) => {
        const { tags } = ctx;
        const title = tags.find((tag) => tag.tag === "title")?.textContent;
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
function createHeadCore(options = {}) {
  let entries = [];
  let _sde = {};
  let _eid = 0;
  const hooks = createHooks();
  if (options?.hooks)
    hooks.addHooks(options.hooks);
  options.plugins = [
    ...CorePlugins(),
    ...options?.plugins || []
  ];
  options.plugins.forEach((p) => p.hooks && hooks.addHooks(p.hooks));
  options.document = options.document || (void 0);
  const updated = () => hooks.callHook("entries:updated", head);
  const head = {
    resolvedOptions: options,
    headEntries() {
      return entries;
    },
    get hooks() {
      return hooks;
    },
    use(plugin) {
      if (plugin.hooks)
        hooks.addHooks(plugin.hooks);
    },
    push(input, options2) {
      const activeEntry = {
        _i: _eid++,
        input,
        _sde: {}
      };
      if (options2?.mode)
        activeEntry._m = options2?.mode;
      if (options2?.transform) {
        activeEntry._t = options2?.transform;
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
      for (const entry of resolveCtx.entries) {
        const transformer = entry._t || ((i) => i);
        entry.resolvedInput = transformer(entry.resolvedInput || entry.input);
        if (entry.resolvedInput) {
          for (const tag of await normaliseEntryTags(entry)) {
            const tagCtx = { tag, entry, resolvedOptions: head.resolvedOptions };
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

const html = defineEventHandler(async (e) => {
  const path = getQuery$1(e).path || "/";
  const scale = getQuery$1(e).scale;
  const mode = getQuery$1(e).mode || "light";
  let options;
  if (getQuery$1(e).options)
    options = JSON.parse(getQuery$1(e).options);
  if (!options)
    options = await fetchOptions(e, path);
  if (options.provider === "browser" && !options.component)
    return sendRedirect(e, withBase(path, useHostname(e)));
  const island = await renderIsland(options);
  const head = createHeadCore();
  head.push(island.head);
  head.push({
    style: [
      {
        // default font is the first font family
        innerHTML: `body { font-family: '${fonts[0].split(":")[0].replace("+", " ")}', sans-serif;  }`
      },
      scale ? {
        innerHTML: `body {
    transform: scale(${scale});
    transform-origin: top left;
    max-height: 100vh;
    position: relative;
    width: ${defaults.width}px;
    height: ${defaults.height}px;
    overflow: hidden;
    background-color: ${mode === "dark" ? "#1b1b1b" : "#fff"};
}
img.emoji {
   height: 1em;
   width: 1em;
   margin: 0 .05em 0 .1em;
   vertical-align: -0.1em;
}
`
      } : {}
    ],
    meta: [
      {
        charset: "utf-8"
      }
    ],
    script: [
      {
        src: "https://cdn.tailwindcss.com"
      },
      // @todo merge with users tailwind
      {
        innerHTML: `tailwind.config = {
  corePlugins: {
    preflight: false,
  }
}`
      }
    ],
    link: [
      {
        // reset css to match svg output
        href: "https://cdn.jsdelivr.net/npm/gardevoir",
        rel: "stylesheet"
      },
      // have to add each weight as their own stylesheet
      ...fonts.map((font) => {
        const [name, weight] = font.split(":");
        return {
          href: `https://fonts.googleapis.com/css2?family=${name}:wght@${weight}&display=swap`,
          rel: "stylesheet"
        };
      })
    ]
  });
  const headChunk = await renderSSRHead(head);
  return `<!DOCTYPE html>
<html ${headChunk.htmlAttrs}>
<head>${headChunk.headTags}</head>
<body ${headChunk.bodyAttrs}>${headChunk.bodyTagsOpen}<div style="position: relative; display: flex; margin: 0 auto; width: 1200px; height: 630px;">${island.html}</div>${headChunk.bodyTags}</body>
</html>`;
});

const html$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: html
});

const options = defineEventHandler(async (e) => {
  const query = getQuery$1(e);
  const path = query.path || "/";
  const fetchOptions = {
    headers: getHeaders(e)
  } ;
  const html = await globalThis.$fetch(path, {
    ...fetchOptions
  });
  const extractedPayload = extractOgImageOptions(html);
  if (!extractedPayload) {
    throw createError$1({
      statusCode: 500,
      statusMessage: `The path ${path} is missing the og-image payload.`
    });
  }
  e.node.req.url = path;
  e.context._nitro.routeRules = void 0;
  const routeRules = getRouteRules(e)?.ogImage;
  e.node.req.url = e.path;
  if (routeRules === false)
    return false;
  return {
    path,
    ...defaults,
    // use route rules
    ...routeRules || {},
    // use provided data
    ...extractedPayload,
    // use query data
    ...query
  };
});

const options$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: options
});

const svg = defineEventHandler(async (e) => {
  const path = getQuery$1(e).path || "/";
  const options = await fetchOptions(e, path);
  setHeader(e, "Content-Type", "image/svg+xml");
  const provider = await useProvider(options.provider);
  if (!provider) {
    throw createError$1({
      statusCode: 500,
      statusMessage: `Provider ${options.provider} is missing.`
    });
  }
  return provider.createSvg(withBase(path, useHostname(e)), options);
});

const svg$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: svg
});

const vnode = defineEventHandler(async (e) => {
  const path = getQuery$1(e).path || "/";
  const options = await fetchOptions(e, path);
  setHeader(e, "Content-Type", "application/json");
  const provider = await useProvider(options.provider);
  if (!provider) {
    throw createError$1({
      statusCode: 500,
      statusMessage: `Provider ${options.provider} is missing.`
    });
  }
  return provider.createVNode(withBase(path, useHostname(e)), options);
});

const vnode$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: vnode
});

const font = defineCachedEventHandler(async (e) => {
  const { name, weight } = getQuery$1(e);
  if (!name || !weight)
    return "Provide a font name and weight";
  const css = await await globalThis.$fetch(`https://fonts.googleapis.com/css2?family=${name}:wght@${weight}`, {
    headers: {
      // Make sure it returns TTF.
      "User-Agent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1"
    }
  });
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);
  if (!resource)
    return;
  return resource[1];
}, {
  getKey: (e) => {
    const query = getQuery$1(e);
    return `nuxt-og-image:font-url:${query.name}:${query.weight}`;
  }
});

const font$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: font
});

const _virtual__headStatic = {"headTags":"<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"icon\" type=\"image/x-icon\" href=\"/favicon.ico\">\n<title>%separator %siteName</title>","bodyTags":"","bodyTagsOpen":"","htmlAttrs":"","bodyAttrs":""};

const _virtual__headStatic$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: _virtual__headStatic
});
//# sourceMappingURL=index.mjs.map
