globalThis._importMeta_ = { url: import.meta.url, env: process.env };
import "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/node-fetch-native/dist/polyfill.mjs";
import { Server } from "node:http";
import { tmpdir } from "node:os";
import { join as join$1 } from "node:path";
import { statSync, existsSync, promises, mkdirSync } from "node:fs";
import { parentPort, threadId } from "node:worker_threads";
import {
  defineEventHandler,
  handleCacheHeaders,
  createEvent,
  eventHandler,
  setHeaders,
  sendRedirect,
  proxyRequest,
  setResponseStatus,
  getRequestHeader,
  setResponseHeader,
  getRequestHeaders,
  setHeader,
  getRequestHost,
  getRequestProtocol,
  createError,
  getQuery as getQuery$1,
  readBody,
  handleCors,
  getHeaders,
  createApp,
  createRouter as createRouter$1,
  toNodeListener,
  fetchWithEvent,
  lazyEventHandler,
} from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/h3/dist/index.mjs";
import { createRenderer } from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/vue-bundle-renderer/dist/runtime.mjs";
import {
  stringify,
  uneval,
} from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/devalue/index.js";
import destr from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/destr/dist/index.mjs";
import { renderToString } from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/vue/server-renderer/index.mjs";
import { hash } from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/ohash/dist/index.mjs";
import {
  createFetch as createFetch$1,
  Headers,
} from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/ofetch/dist/node.mjs";
import {
  createCall,
  createFetch,
} from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/unenv/runtime/fetch/index.mjs";
import { createHooks } from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/hookable/dist/index.mjs";
import {
  toRouteMatcher,
  createRouter,
} from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/radix3/dist/index.mjs";
import {
  parseURL,
  withoutBase,
  joinURL,
  getQuery,
  withQuery,
  encodePath,
  withBase,
  withoutTrailingSlash,
  withTrailingSlash,
} from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/ufo/dist/index.mjs";
import robots from "/Users/jyyyeung/Projects/hksanda-website/.nuxt/robots.mjs";
import defu, {
  defuFn,
  defu as defu$1,
} from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/defu/dist/defu.mjs";
import {
  relative,
  extname,
  join,
} from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/pathe/dist/index.mjs";
import { resolveFiles } from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/@nuxt/kit/dist/index.mjs";
import escapeRE from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/escape-string-regexp/index.js";
import cache from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/memory-cache/index.js";
import { performance } from "perf_hooks";
import { FilterXSS } from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/xss/lib/index.js";
import { renderSSRHead } from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/@unhead/ssr/dist/index.mjs";
import {
  defineHeadPlugin,
  resolveTitleTemplate,
  hashTag,
  hashCode,
  tagDedupeKey,
  HasElementTags,
  ValidHeadTags,
  asArray as asArray$1,
  TagConfigKeys,
  TagsWithInnerContent,
} from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/@unhead/shared/dist/index.mjs";
import { snakeCase } from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/scule/dist/index.mjs";
import { klona } from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/klona/dist/index.mjs";
import { html as html$2 } from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/satori-html/dist/index.js";
import twemoji from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/twemoji/dist/twemoji.npm.js";
import {
  initialize,
  svg2png as svg2png$1,
} from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/svg2png-wasm/dist/index.mjs";
import satori$2 from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/satori/dist/index.js";
import playwrightCore from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/playwright-core/index.mjs";
import {
  createStorage,
  prefixStorage,
} from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/unstorage/dist/index.mjs";
import unstorage_47drivers_47fs from "file:///Users/jyyyeung/Projects/hksanda-website/node_modules/unstorage/drivers/fs.mjs";

const providers = [
  ["APPVEYOR"],
  ["AZURE_PIPELINES", "SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],
  ["AZURE_STATIC", "INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],
  ["APPCIRCLE", "AC_APPCIRCLE"],
  ["BAMBOO", "bamboo_planKey"],
  ["BITBUCKET", "BITBUCKET_COMMIT"],
  ["BITRISE", "BITRISE_IO"],
  ["BUDDY", "BUDDY_WORKSPACE_ID"],
  ["BUILDKITE"],
  ["CIRCLE", "CIRCLECI"],
  ["CIRRUS", "CIRRUS_CI"],
  ["CLOUDFLARE_PAGES", "CF_PAGES", { ci: true }],
  ["CODEBUILD", "CODEBUILD_BUILD_ARN"],
  ["CODEFRESH", "CF_BUILD_ID"],
  ["DRONE"],
  ["DRONE", "DRONE_BUILD_EVENT"],
  ["DSARI"],
  ["GITHUB_ACTIONS"],
  ["GITLAB", "GITLAB_CI"],
  ["GITLAB", "CI_MERGE_REQUEST_ID"],
  ["GOCD", "GO_PIPELINE_LABEL"],
  ["LAYERCI"],
  ["HUDSON", "HUDSON_URL"],
  ["JENKINS", "JENKINS_URL"],
  ["MAGNUM"],
  ["NETLIFY"],
  ["NETLIFY", "NETLIFY_LOCAL", { ci: false }],
  ["NEVERCODE"],
  ["RENDER"],
  ["SAIL", "SAILCI"],
  ["SEMAPHORE"],
  ["SCREWDRIVER"],
  ["SHIPPABLE"],
  ["SOLANO", "TDDIUM"],
  ["STRIDER"],
  ["TEAMCITY", "TEAMCITY_VERSION"],
  ["TRAVIS"],
  ["VERCEL", "NOW_BUILDER"],
  ["APPCENTER", "APPCENTER_BUILD_ID"],
  ["CODESANDBOX", "CODESANDBOX_SSE", { ci: false }],
  ["STACKBLITZ"],
  ["STORMKIT"],
  ["CLEAVR"],
];
function detectProvider(env) {
  for (const provider of providers) {
    const envName = provider[1] || provider[0];
    if (env[envName]) {
      return {
        name: provider[0].toLowerCase(),
        ...provider[2],
      };
    }
  }
  if (env.SHELL && env.SHELL === "/bin/jsh") {
    return {
      name: "stackblitz",
      ci: false,
    };
  }
  return {
    name: "",
    ci: false,
  };
}

const processShim = typeof process !== "undefined" ? process : {};
const envShim = processShim.env || {};
const providerInfo = detectProvider(envShim);
const nodeENV =
  (typeof process !== "undefined" && process.env && "development") || "";
const platform = processShim.platform;
const provider = providerInfo.name;
const isCI = toBoolean(envShim.CI) || providerInfo.ci !== false;
const hasTTY = toBoolean(processShim.stdout && processShim.stdout.isTTY);
toBoolean(envShim.DEBUG);
const isTest = nodeENV === "test" || toBoolean(envShim.TEST);
toBoolean(envShim.MINIMAL) || isCI || isTest || !hasTTY;
const isWindows = /^win/i.test(platform);
function toBoolean(val) {
  return val ? val !== "false" : false;
}

const inlineAppConfig = {};

const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  app: {
    baseURL: "/",
    buildAssetsDir: "/_nuxt/",
    cdnURL: "",
  },
  nitro: {
    envPrefix: "NUXT_",
    routeRules: {
      "/__nuxt_error": {
        cache: false,
      },
      "/**": {
        headers: {
          "Cross-Origin-Resource-Policy": "same-origin",
          "Cross-Origin-Opener-Policy": "same-origin",
          "Cross-Origin-Embedder-Policy": "same-origin",
          "Content-Security-Policy":
            "base-uri 'self'; font-src 'self' https: data:; form-action 'self'; frame-ancestors 'self'; img-src 'self' data: https://cdn.sanity.io/images/3ttfpt22/production/ https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/close.svg https://i.ytimg.com/vi_webp/; object-src 'none'; script-src-attr 'none'; style-src 'self' https: 'unsafe-inline'; upgrade-insecure-requests",
          "Origin-Agent-Cluster": "?1",
          "Referrer-Policy": "no-referrer",
          "Strict-Transport-Security": "max-age=15552000; includeSubDomains",
          "X-Content-Type-Options": "nosniff",
          "X-DNS-Prefetch-Control": "off",
          "X-Download-Options": "noopen",
          "X-Frame-Options": "SAMEORIGIN",
          "X-Permitted-Cross-Domain-Policies": "none",
          "X-XSS-Protection": "0",
          "Permissions-Policy":
            "camera=(), display-capture=(), fullscreen=(), geolocation=(), microphone=()",
        },
        security: {
          requestSizeLimiter: {
            maxRequestSizeInBytes: 2000000,
            maxUploadFileRequestInBytes: 8000000,
            throwError: true,
          },
          rateLimiter: {
            tokensPerInterval: 150,
            interval: "hour",
            fireImmediately: true,
            throwError: true,
          },
          xssValidator: {
            throwError: true,
          },
          corsHandler: {
            origin: "http://localhost:3000",
            methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
            preflight: {
              statusCode: 204,
            },
            throwError: true,
          },
          allowedMethodsRestricter: {
            0: "*",
          },
          undefined: {},
        },
      },
    },
  },
  public: {
    trailingSlash: false,
    titleSeparator: "|",
    siteName: "中國武術散打、功夫、自衛術（香港）",
    siteUrl: "https://hksanda.vercel.app",
    siteDescription:
      "「香港極拳道武術協會」是香港政府及體育協會暨奧林匹克委員會認可及資助的體育總會「香港武術聯會」及「香港泰拳理事會」認可之屬會會員。本會推廣『散打自衛術』是香港政府認可及資助的武術運動項目之一。",
    language: "zh-HK",
    index: true,
    gtag: {
      id: "",
      config: {},
      initialConsent: true,
      loadingStrategy: "defer",
    },
    sanity: {
      useCdn: false,
      projectId: "3ttfpt22",
      dataset: "production",
      apiVersion: "2021-10-18",
      withCredentials: false,
      token: "",
      additionalClients: {},
    },
    device: {
      enabled: true,
      defaultUserAgent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36",
      refreshOnResize: false,
    },
    "nuxt-unhead": {
      seoOptimise: true,
      resolveAliases: false,
    },
  },
  indexable: false,
  sanity: {},
  private: {
    basicAuth: false,
  },
  security: {
    headers: {
      crossOriginResourcePolicy: "same-origin",
      crossOriginOpenerPolicy: "same-origin",
      crossOriginEmbedderPolicy: "same-origin",
      contentSecurityPolicy: {
        "base-uri": ["'self'"],
        "font-src": ["'self'", "https:", "data:"],
        "form-action": ["'self'"],
        "frame-ancestors": ["'self'"],
        "img-src": [
          "'self'",
          "data:",
          "https://cdn.sanity.io/images/3ttfpt22/production/",
          "https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/close.svg",
          "https://i.ytimg.com/vi_webp/",
        ],
        "object-src": ["'none'"],
        "script-src-attr": ["'none'"],
        "style-src": ["'self'", "https:", "'unsafe-inline'"],
        "upgrade-insecure-requests": true,
      },
      originAgentCluster: "?1",
      referrerPolicy: "no-referrer",
      strictTransportSecurity: {
        maxAge: 15552000,
        includeSubdomains: true,
      },
      xContentTypeOptions: "nosniff",
      xDNSPrefetchControl: "off",
      xDownloadOptions: "noopen",
      xFrameOptions: "SAMEORIGIN",
      xPermittedCrossDomainPolicies: "none",
      xXSSProtection: "0",
      permissionsPolicy: {
        camera: ["()"],
        "display-capture": ["()"],
        fullscreen: ["()"],
        geolocation: ["()"],
        microphone: ["()"],
      },
    },
    requestSizeLimiter: {
      maxRequestSizeInBytes: 2000000,
      maxUploadFileRequestInBytes: 8000000,
      throwError: true,
    },
    rateLimiter: {
      tokensPerInterval: 150,
      interval: "hour",
      fireImmediately: true,
      throwError: true,
    },
    xssValidator: {
      throwError: true,
    },
    corsHandler: {
      origin: "http://localhost:3000",
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      preflight: {
        statusCode: 204,
      },
      throwError: true,
    },
    allowedMethodsRestricter: "*",
    hidePoweredBy: true,
    enabled: true,
    csrf: false,
  },
  "nuxt-simple-sitemap": {
    enabled: true,
    autoLastmod: true,
    siteUrl: "https://hksanda.vercel.app",
    trailingSlash: false,
    inferStaticPagesAsRoutes: true,
    discoverImages: true,
    dynamicUrlsApiEndpoint: "/api/_sitemap-urls",
    include: [],
    exclude: [],
    urls: [
      {
        loc: "/class",
        lastmod: "2024-02-19T14:16:39.966Z",
      },
      {
        loc: "/contact",
        lastmod: "2024-02-19T14:16:43.852Z",
      },
      {
        loc: "/course",
        lastmod: "2024-02-19T14:16:15.642Z",
      },
      {
        loc: "/hk-badge",
        lastmod: "2024-02-19T14:16:46.326Z",
      },
      {
        loc: "/media-interviews",
        lastmod: "2024-02-19T14:16:49.548Z",
      },
      {
        loc: "/news",
        lastmod: "2024-02-19T14:16:28.139Z",
      },
      {
        loc: "/our-team",
        lastmod: "2024-02-19T14:16:52.463Z",
      },
      {
        loc: "/syllabus",
        lastmod: "2024-02-19T14:16:55.427Z",
      },
    ],
    sitemaps: false,
    xsl: "/__sitemap__/style.xsl",
    sitemapName: "sitemap.xml",
    defaults: {},
    isNuxtContentDocumentDriven: false,
    hasApiRoutesUrl: false,
    pagesDirs: [
      "/Users/jyyyeung/Projects/hksanda-website/pages",
      "/Users/jyyyeung/Projects/hksanda-website/node_modules/nuxt-seo-kit/pages",
    ],
    hasPrerenderedRoutesPayload: false,
    extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT =
  _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig)),
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
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey],
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
      "Please use `useRuntimeConfig()` instead of accessing config directly.",
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  },
});

const serverAssets = [
  {
    baseName: "server",
    dir: "/Users/jyyyeung/Projects/hksanda-website/server/assets",
  },
];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount("/assets", assets);

storage.mount(
  "root",
  unstorage_47drivers_47fs({
    driver: "fs",
    readOnly: true,
    base: "/Users/jyyyeung/Projects/hksanda-website",
    ignore: ["**/node_modules/**", "**/.git/**"],
  }),
);
storage.mount(
  "src",
  unstorage_47drivers_47fs({
    driver: "fs",
    readOnly: true,
    base: "/Users/jyyyeung/Projects/hksanda-website/server",
    ignore: ["**/node_modules/**", "**/.git/**"],
  }),
);
storage.mount(
  "build",
  unstorage_47drivers_47fs({
    driver: "fs",
    readOnly: false,
    base: "/Users/jyyyeung/Projects/hksanda-website/.nuxt",
    ignore: ["**/node_modules/**", "**/.git/**"],
  }),
);
storage.mount(
  "cache",
  unstorage_47drivers_47fs({
    driver: "fs",
    readOnly: false,
    base: "/Users/jyyyeung/Projects/hksanda-website/.nuxt/cache",
    ignore: ["**/node_modules/**", "**/.git/**"],
  }),
);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1,
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"]
      .filter(Boolean)
      .join(":")
      .replace(/:\/$/, ":index");
    const entry = (await useStorage().getItem(cacheKey)) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired =
      shouldInvalidateCache ||
      entry.integrity !== integrity ||
      (ttl && Date.now() - (entry.mtime || 0) > ttl) ||
      !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (
          entry.value !== void 0 &&
          (opts.staleMaxAge || 0) >= 0 &&
          opts.swr === false
        ) {
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
          useStorage()
            .setItem(cacheKey, entry)
            .catch((error) => console.error("[nitro] [cache]", error));
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
      value = (await opts.transform(entry, ...args)) || value;
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
        16,
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
    integrity: [opts.integrity, handler],
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.node.res, {
      statusCode: 200,
      writableEnded: false,
      writableFinished: false,
      headersSent: false,
      closed: false,
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
      },
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = (await handler(event)) || _resSendBody;
    const headers = event.node.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] =
      headers["Last-Modified"] ||
      headers["last-modified"] ||
      /* @__PURE__ */ new Date().toUTCString();
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
      body,
    };
    return cacheEntry;
  }, _opts);
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
    if (
      handleCacheHeaders(event, {
        modifiedTime: new Date(response.headers["last-modified"]),
        etag: response.headers.etag,
        maxAge: opts.maxAge,
      })
    ) {
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
    },
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules }),
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
        routeRules.redirect.statusCode,
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
        ...routeRules.proxy,
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL),
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.node.req.url.endsWith("/favicon.ico")) {
      if (!event.handled) {
        event.node.res.setHeader("Content-Type", "image/x-icon");
        event.node.res.end(
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        );
      }
      return;
    }
    const response = await handler(event);
    if (!response) {
      if (!event.handled) {
        event.node.res.statusCode =
          event.node.res.statusCode === 200 ? 500 : event.node.res.statusCode;
        event.node.res.end(
          "No response returned from render handler: " + event.node.req.url,
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
    return typeof response.body === "string"
      ? response.body
      : JSON.stringify(response.body);
  });
}

function buildAssetsURL(...path) {
  return joinURL(
    publicAssetsURL(),
    useRuntimeConfig().app.buildAssetsDir,
    ...path,
  );
}
function publicAssetsURL(...path) {
  const publicBase =
    useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

const script =
  'if (!("requestIdleCallback" in w) || !("requestAnimationFrame" in w))\n  return new Promise((resolve) => resolve("not supported"));\nfunction eventListeners() {\n  const c = new AbortController();\n  const p = new Promise((resolve) => {\n    const hydrateOnEvents = "mousemove,scroll,keydown,click,touchstart,wheel".split(",");\n    function handler(e) {\n      hydrateOnEvents.forEach((e2) => w.removeEventListener(e2, handler));\n      requestAnimationFrame(() => resolve(e));\n    }\n    hydrateOnEvents.forEach((e) => {\n      w.addEventListener(e, handler, {\n        capture: true,\n        once: true,\n        passive: true,\n        signal: c.signal\n      });\n    });\n  });\n  return { c: () => c.abort(), p };\n}\nfunction idleListener() {\n  let id;\n  const p = new Promise((resolve) => {\n    const isMobile = w.innerWidth < 640;\n    const timeout = isMobile ? Number.parseInt("5000") : Number.parseInt("4000");\n    const timeoutDelay = () => setTimeout(\n      () => requestAnimationFrame(() => resolve("timeout")),\n      timeout\n    );\n    id = w.requestIdleCallback(timeoutDelay, { timeout: Number.parseInt("7000") });\n  });\n  return { c: () => window.cancelIdleCallback(id), p };\n}\nconst triggers = [idleListener(), eventListeners()];\nconst hydrationPromise = Promise.race(\n  triggers.map((t) => t.p)\n).finally(() => {\n  triggers.forEach((t) => t.c());\n});\nreturn hydrationPromise;\n';
const replayScript =
  '(() => {\n  w._$delayHydration.then((e) => {\n    if (!(e instanceof PointerEvent) && !(e instanceof MouseEvent) && !(e instanceof TouchEvent))\n      return;\n    if (e instanceof MouseEvent && e.type !== "click")\n      return;\n    setTimeout(\n      () => w.requestIdleCallback(\n        () => setTimeout(() => e.target?.click(), 500)\n      ),\n      50\n    );\n  });\n})();\n';
const include = [];
const exclude = [];

function createFilter$1(options = {}) {
  const include2 = options.include || [];
  const exclude2 = options.exclude || [];
  return function (path) {
    for (const v of [
      { rules: exclude2, result: false },
      { rules: include2, result: true },
    ]) {
      const regexRules = v.rules.filter((r) => r instanceof RegExp);
      if (regexRules.some((r) => r.test(path))) return v.result;
      const stringRules = v.rules.filter((r) => typeof r === "string");
      if (stringRules.length > 0) {
        const routes = {};
        for (const r of stringRules) {
          if (r === path) return v.result;
          routes[r] = true;
        }
        const routeRulesMatcher = toRouteMatcher(
          createRouter({ routes, ...options }),
        );
        if (routeRulesMatcher.matchAll(path).length > 0)
          return Boolean(v.result);
      }
    }
    return include2.length === 0;
  };
}
const _sfaFZXAAWY = function (nitro) {
  nitro.hooks.hook("render:html", (htmlContext, { event }) => {
    if (include.length || exclude.length) {
      const filter = createFilter$1({ include, exclude });
      if (!filter(event.req.url)) return;
    }
    let extraScripts = "";
    extraScripts += `;${replayScript}`;
    htmlContext.bodyAppend.push(`<script>
(function() {
  const w = window;
  w._$delayHydration = (() => {
    ${script}}
  )();
  ${"w._$delayHydration.then((e) => { console.log('[nuxt-delay-hydration] Hydration event', e) })"}
  ${extraScripts}
})();
<\/script>`);
  });
};

const _TJKb2is01a = function (nitro) {
  nitro.hooks.hook("render:response", (response) => {
    if (response.headers["x-powered-by"]) {
      delete response.headers["x-powered-by"];
    } else if (response.headers["X-Powered-By"]) {
      delete response.headers["X-Powered-By"];
    }
  });
};

const plugins = [_sfaFZXAAWY, _TJKb2is01a];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return (
    value && typeof value === "string" && value.toLowerCase().includes(includes)
  );
}
function isJsonRequest(event) {
  return (
    hasReqHeader(event, "accept", "application/json") ||
    hasReqHeader(event, "user-agent", "curl/") ||
    hasReqHeader(event, "user-agent", "httpie/") ||
    hasReqHeader(event, "sec-fetch-mode", "cors") ||
    event.path.startsWith("/api/") ||
    event.path.endsWith(".json")
  );
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "")
    .split("\n")
    .splice(1)
    .filter((line) => line.includes("at "))
    .map((line) => {
      const text = line
        .replace(cwd + "/", "./")
        .replace("webpack:/", "")
        .replace("file://", "")
        .trim();
      return {
        text,
        internal:
          (line.includes("node_modules") && !line.includes(".cache")) ||
          line.includes("internal") ||
          line.includes("new Promise"),
      };
    });
  const statusCode = error.statusCode || 500;
  const statusMessage =
    error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message,
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on("unhandledRejection", (err) =>
      console.error("[nitro] [unhandledRejection]", err),
    );
    process.on("uncaughtException", (err) =>
      console.error("[nitro] [uncaughtException]", err),
    );
  }
}

const errorHandler = async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack:
      statusCode !== 404
        ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>`
        : "",
    data: error.data,
  };
  setResponseStatus(
    event,
    (errorObject.statusCode !== 200 && errorObject.statusCode) || 500,
    errorObject.statusMessage,
  );
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`,
    ]
      .filter(Boolean)
      .join(" ");
    console.error(
      tags,
      errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"),
    );
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage
    ? await useNitroApp()
        .localFetch(
          withQuery(
            joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"),
            errorObject,
          ),
          {
            headers: getRequestHeaders(event),
            redirect: "manual",
          },
        )
        .catch(() => null)
    : null;
  if (!res) {
    const { template } = await Promise.resolve().then(function () {
      return errorDev;
    });
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
  setResponseStatus(
    event,
    res.status && res.status !== 200 ? res.status : void 0,
    res.statusText,
  );
  event.node.res.end(await res.text());
};

const _1qgsqz = defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "text/plain");
  return render(await getRules(robots, event.req));
});
var Correspondence = /* @__PURE__ */ ((Correspondence2) => {
  Correspondence2[(Correspondence2["User-agent"] = 0)] = "User-agent";
  Correspondence2[(Correspondence2["Crawl-delay"] = 1)] = "Crawl-delay";
  Correspondence2[(Correspondence2["Disallow"] = 2)] = "Disallow";
  Correspondence2[(Correspondence2["Allow"] = 3)] = "Allow";
  Correspondence2[(Correspondence2["Host"] = 4)] = "Host";
  Correspondence2[(Correspondence2["Sitemap"] = 5)] = "Sitemap";
  Correspondence2[(Correspondence2["Clean-param"] = 6)] = "Clean-param";
  Correspondence2[(Correspondence2["Comment"] = 7)] = "Comment";
  Correspondence2[(Correspondence2["BlankLine"] = 8)] = "BlankLine";
  return Correspondence2;
})(Correspondence || {});
function render(rules) {
  return rules
    .map((rule) => {
      const value = String(rule.value).trim();
      switch (rule.key.toString()) {
        case Correspondence[7 /* Comment */]:
          return `# ${value}`;
        case Correspondence[8 /* BlankLine */]:
          return "";
        default:
          return `${rule.key}: ${value}`;
      }
    })
    .join("\n");
}
async function getRules(options, req) {
  const correspondences = {
    useragent: "User-agent",
    crawldelay: "Crawl-delay",
    disallow: "Disallow",
    allow: "Allow",
    host: "Host",
    sitemap: "Sitemap",
    cleanparam: "Clean-param",
    comment: "Comment",
    blankline: "BlankLine",
  };
  const rules = [];
  const parseRule = (rule) => {
    const parsed = {};
    for (const [key, value] of Object.entries(rule)) {
      parsed[
        String(key)
          .toLowerCase()
          .replace(/[\W_]+/g, "")
      ] = value;
    }
    return parsed;
  };
  for (const rule of Array.isArray(options) ? options : [options]) {
    const parsed = parseRule(rule);
    const keys = Object.keys(correspondences).filter(
      (key) => typeof parsed[key] !== "undefined",
    );
    for (const key of keys) {
      const parsedKey = parsed[key];
      let values;
      values =
        typeof parsedKey === "function" ? await parsedKey(req) : parsedKey;
      values = Array.isArray(values) ? values : [values];
      for (const value of values) {
        const v = typeof value === "function" ? await value(req) : value;
        if (v === false) {
          continue;
        }
        rules.push({
          key: correspondences[key],
          value: v,
        });
      }
    }
  }
  return rules;
}

function createFilter(options = {}) {
  const include = options.include || [];
  const exclude = options.exclude || [];
  if (include.length === 0 && exclude.length === 0) return () => true;
  return function (path) {
    for (const v of [
      { rules: exclude, result: false },
      { rules: include, result: true },
    ]) {
      const regexRules = v.rules.filter((r) => r instanceof RegExp);
      if (regexRules.some((r) => r.test(path))) return v.result;
      const stringRules = v.rules.filter((r) => typeof r === "string");
      if (stringRules.length > 0) {
        const routes = {};
        for (const r of stringRules) {
          if (r === path) return v.result;
          routes[r] = true;
        }
        const routeRulesMatcher = toRouteMatcher(
          createRouter({ routes, ...options }),
        );
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
    }),
  );
  return normalisePagesForSitemap(allRoutes.flat());
}
function unpackChildren(page) {
  if (!page.children) return [];
  return page.children
    .map((child) => {
      child.path = withBase(child.path, page.path);
      return [child, ...unpackChildren(child)];
    })
    .flat();
}
function normalisePagesForSitemap(allRoutes) {
  const pages = allRoutes
    .map((page) => {
      const pages2 = [page];
      pages2.push(...unpackChildren(page));
      return pages2;
    })
    .flat()
    .filter((page) => !page.path.includes(":") && !page.path.includes("["));
  return mergeOnKey(pages, "path");
}
function generateRoutesFromFiles(files, pagesDir) {
  const routes = [];
  for (const file of files) {
    const segments = relative(pagesDir, file)
      .replace(new RegExp(`${escapeRE(extname(file))}$`), "")
      .split("/");
    const route = {
      name: "",
      path: "",
      file,
      children: [],
    };
    let parent = routes;
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      const tokens = parseSegment(segment);
      const segmentName = tokens.map(({ value }) => value).join("");
      route.name += (route.name && "-") + segmentName;
      const child = parent.find(
        (parentRoute) =>
          parentRoute.name === route.name &&
          !parentRoute.path.endsWith("(.*)*"),
      );
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
    return (
      path +
      (token.type === 2 /* optional */
        ? `:${token.value}?`
        : token.type === 1 /* dynamic */
          ? `:${token.value}`
          : token.type === 3 /* catchall */
            ? `:${token.value}(.*)*`
            : encodePath(token.value))
    );
  }, "/");
}
const PARAM_CHAR_RE = /[\w\d_.]/;
function parseSegment(segment) {
  let state = 0; /* initial */
  let i = 0;
  let buffer = "";
  const tokens = [];
  function consumeBuffer() {
    if (!buffer) return;
    if (state === 0 /* initial */) throw new Error("wrong state");
    tokens.push({
      type:
        state === 1 /* static */
          ? 0 /* static */
          : state === 2 /* dynamic */
            ? 1 /* dynamic */
            : state === 3 /* optional */
              ? 2 /* optional */
              : 3 /* catchall */,
      value: buffer,
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
        if (c === "[" && state === 2 /* dynamic */) state = 3 /* optional */;
        if (
          c === "]" &&
          (state !== 3 /* optional */ || buffer[buffer.length - 1] === "]")
        ) {
          if (!buffer) throw new Error("Empty param");
          else consumeBuffer();
          state = 0 /* initial */;
        } else if (PARAM_CHAR_RE.test(c)) {
          buffer += c;
        } else;
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
    if (route.name) route.name = route.name.replace(/-index$/, "");
    if (parent && route.path.startsWith("/")) route.path = route.path.slice(1);
    if (route.children?.length)
      route.children = prepareRoutes(route.children, route);
    if (route.children?.find((childRoute) => childRoute.path === ""))
      delete route.name;
  }
  return routes;
}

function normaliseDate(date) {
  const d = typeof date === "string" ? new Date(date) : date;
  if (!(d instanceof Date)) return false;
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
    dynamicUrlsApiEndpoint,
  } = options.sitemapConfig;
  const baseURL = options.baseURL;
  const includeWithBase = include?.map((i) => withBase(i, baseURL));
  const excludeWithBase = exclude?.map((i) => withBase(i, baseURL));
  const urlFilter = createFilter({
    include: includeWithBase,
    exclude: excludeWithBase,
  });
  ({ ...defaults });
  const fixLoc = (url) => {
    url = encodeURI(
      trailingSlash ? withTrailingSlash(url) : withoutTrailingSlash(url),
    );
    return url.startsWith(baseURL) ? url : withBase(url, baseURL);
  };
  function preNormalise(entries) {
    return mergeOnKey(
      entries
        .map((e) => (typeof e === "string" ? { loc: e } : e))
        .map((e) => ({ ...defaults, ...e }))
        .map((e) => ({ ...e, loc: fixLoc(e.loc || e.url) })),
      "loc",
    )
      .filter((e) => urlFilter(e.loc))
      .sort((a, b) => a.loc.length - b.loc.length)
      .map((e) => {
        delete e.url;
        if (e.lastmod) e.lastmod = normaliseDate(e.lastmod);
        if (!e.lastmod) delete e.lastmod;
        if (Array.isArray(autoAlternativeLangPrefixes)) {
          if (
            autoAlternativeLangPrefixes.some((prefix) => {
              return e.loc.startsWith(withBase(`/${prefix}`, options.baseURL));
            })
          )
            return false;
          const loc = e.loc?.replace(options.baseURL, "") || "";
          e.alternatives = autoAlternativeLangPrefixes.map((prefix) => ({
            hreflang: prefix,
            href: fixLoc(joinURL(prefix, loc)),
          }));
        }
        return e;
      })
      .filter(Boolean);
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
      pageUrls = inferStaticPagesAsRoutes
        ? (await resolvePagesRoutes(pagesDirs, extensions)).map((page) => {
            const entry = { loc: page.path };
            if (autoLastmod && page.file) {
              const stats = statSync(page.file);
              entry.lastmod = stats.mtime;
            }
            return entry;
          })
        : [];
    }
  }
  let lazyApiUrls = [];
  if (hasApiRoutesUrl) {
    lazyApiUrls = await globalThis.$fetch(dynamicUrlsApiEndpoint, {
      responseType: "json",
      baseURL: options.baseURL,
    });
  }
  let prerenderedRoutesPayload = [];
  if (hasPrerenderedRoutesPayload) {
    let isHtmlResponse = false;
    const routes = await globalThis.$fetch("/__sitemap__/routes.json", {
      responseType: "json",
      headers: {
        Accept: "application/json",
      },
      // host is the actual web server being used
      baseURL: withBase(options.baseURL, options.sitemapConfig.host || siteUrl),
      onResponse({ response }) {
        if (
          typeof response._data === "string" &&
          response._data.startsWith("<!DOCTYPE html>")
        )
          isHtmlResponse = true;
      },
    });
    if (!isHtmlResponse) prerenderedRoutesPayload = routes;
  }
  let nuxtContentUrls = [];
  if (isNuxtContentDocumentDriven) {
    nuxtContentUrls = await globalThis.$fetch(
      "/api/__sitemap__/document-driven-urls",
      {
        responseType: "json",
        baseURL: options.baseURL,
      },
    );
  }
  const urls = [
    "/",
    ...prerenderedRoutesPayload,
    ...lazyApiUrls,
    ...configUrls,
    ...pageUrls,
    ...nuxtContentUrls,
  ];
  return mergeOnKey(
    preNormalise(urls)
      .map((entry) => {
        const routeRules = options.getRouteRulesForPath(
          withoutTrailingSlash(entry.loc),
        );
        if (routeRules.index === false) return false;
        return defu$1(routeRules.sitemap, entry);
      })
      .filter(Boolean)
      .map(postNormalise),
    "loc",
  );
}

function urlWithBase(url, base, siteUrl) {
  return joinURL(
    siteUrl.replace(new RegExp(`${base}$`), ""),
    base,
    url.replace(new RegExp(`^${base}`), ""),
  );
}

const MaxSitemapSize = 1e3;
async function buildSitemap(options) {
  const sitemapsConfig = options.sitemapConfig.sitemaps;
  let urls = await generateSitemapEntries(options);
  if (sitemapsConfig === true)
    urls = urls.slice(
      Number(options.sitemapName) * MaxSitemapSize,
      (Number(options.sitemapName) + 1) * MaxSitemapSize,
    );
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
    if (arr.length === 0) return false;
    key = resolveKey(key);
    if (key === "alternatives") {
      return arr
        .map((obj) =>
          [
            `        <xhtml:link rel="alternate" ${Object.entries(obj)
              .map(([sk, sv]) => `${sk}="${normaliseValue(sk, sv, options)}"`)
              .join(" ")} />`,
          ].join("\n"),
        )
        .join("\n");
    }
    return arr
      .map((obj) =>
        [
          `        <${key}:${key}>`,
          ...Object.entries(obj).map(
            ([sk, sv]) =>
              `            <${key}:${sk}>${normaliseValue(sk, sv, options)}</${key}:${sk}>`,
          ),
          `        </${key}:${key}>`,
        ].join("\n"),
      )
      .join("\n");
  };
  return wrapSitemapXml(
    [
      '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...(ctx.urls?.map(
        (e) => `    <url>
${Object.keys(e)
  .map((k) =>
    Array.isArray(e[k])
      ? handleArray(k, e[k])
      : `        <${k}>${normaliseValue(k, e[k], options)}</${k}>`,
  )
  .filter((l) => l !== false)
  .join("\n")}
    </url>`,
      ) ?? []),
      "</urlset>",
    ],
    options.sitemapConfig.xsl,
  );
}
function normaliseValue(key, value, options) {
  if (["loc", "href"].includes(key) && typeof value === "string") {
    if (value.startsWith("http://") || value.startsWith("https://"))
      return value;
    const url = urlWithBase(
      value,
      options.baseURL,
      options.sitemapConfig.siteUrl,
    );
    if (url.includes(".")) return url;
    return options.sitemapConfig.trailingSlash
      ? withTrailingSlash(url)
      : withoutTrailingSlash(url);
  }
  if (value instanceof Date) return normaliseDate(value);
  if (typeof value === "boolean") return value ? "yes" : "no";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
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
          ${`<div class="expl warn"><p><strong>Development preview</strong></p><p>URLs may be missing in development because there's no prerendering discovery. Make sure you test using <code>nuxi generate</code> or <code>nuxi build</code>.</p><p>Tip: You are looking at a XML stylesheet, if you want to see the raw sitemap as robots see it, please view the page source. You can disable the stylesheet using <code>xsl: false</code>. This alert is only displayed in development.</p></div>`}
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
  input.unshift(
    `<?xml version="1.0" encoding="UTF-8"?>${xsl ? `<?xml-stylesheet type="text/xsl" href="${xsl}"?>` : ""}`,
  );
  input.push("<!-- XML Sitemap generated by Nuxt Simple Sitemap -->");
  return input.join("\n");
}

const _KFnEHd = defineEventHandler(async (e) => {
  setHeader(e, "Content-Type", "application/xslt+xml");
  return generateXslStylesheet();
});

function useHostname$1(e) {
  const base = useRuntimeConfig().app.baseURL;
  const host =
    getRequestHost(e, { xForwardedHost: true }) ||
    process.env.NITRO_HOST ||
    process.env.HOST ||
    "localhost";
  getRequestProtocol(e, { xForwardedProto: true });
  let port = host.includes(":") ? host.split(":").pop() : false;
  if (!port) port = process.env.NITRO_PORT || process.env.PORT;
  return withBase(
    base,
    `http${""}://${host.includes(":") ? host.split(":")[0] : host}${port ? `:${port}` : ""}`,
  );
}

const _dnDaLZ = defineEventHandler(async (e) => {
  const sitemapConfig = useRuntimeConfig()["nuxt-simple-sitemap"];
  if (sitemapConfig.sitemaps) {
    return sendRedirect(
      e,
      withBase("/sitemap_index.xml", useRuntimeConfig().app.baseURL),
      302,
    );
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
    callHook,
  });
});

const FILE_UPLOAD_HEADER = "multipart/form-data";
const _HZHUrp = defineEventHandler(async (event) => {
  const routeRules = getRouteRules(event);
  if (routeRules.security.requestSizeLimiter !== false) {
    if (["POST", "PUT", "DELETE"].includes(event.node.req.method)) {
      const contentLengthValue = getRequestHeader(event, "content-length");
      const contentTypeValue = getRequestHeader(event, "content-type");
      const isFileUpload = contentTypeValue?.includes(FILE_UPLOAD_HEADER);
      const requestLimit = isFileUpload
        ? routeRules.security.requestSizeLimiter.maxUploadFileRequestInBytes
        : routeRules.security.requestSizeLimiter.maxRequestSizeInBytes;
      if (parseInt(contentLengthValue) >= requestLimit) {
        const payloadTooLargeError = {
          statusCode: 413,
          statusMessage: "Payload Too Large",
        };
        if (routeRules.security.requestSizeLimiter.throwError === false) {
          return payloadTooLargeError;
        }
        throw createError(payloadTooLargeError);
      }
    }
  }
});

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp) {
  const clocktime = performance.now() * 1e-3;
  let seconds = Math.floor(clocktime);
  let nanoseconds = Math.floor((clocktime % 1) * 1e9);
  if (previousTimestamp != undefined) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds, nanoseconds];
}
// The current timestamp in whole milliseconds
function getMilliseconds() {
  const [seconds, nanoseconds] = hrtime();
  return seconds * 1e3 + Math.floor(nanoseconds / 1e6);
}
// Wait for a specified number of milliseconds before fulfilling the returned promise.
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * A hierarchical token bucket for rate limiting. See
 * http://en.wikipedia.org/wiki/Token_bucket for more information.
 *
 * @param options
 * @param options.bucketSize Maximum number of tokens to hold in the bucket.
 *  Also known as the burst rate.
 * @param options.tokensPerInterval Number of tokens to drip into the bucket
 *  over the course of one interval.
 * @param options.interval The interval length in milliseconds, or as
 *  one of the following strings: 'second', 'minute', 'hour', day'.
 * @param options.parentBucket Optional. A token bucket that will act as
 *  the parent of this bucket.
 */
class TokenBucket {
  constructor({ bucketSize, tokensPerInterval, interval, parentBucket }) {
    this.bucketSize = bucketSize;
    this.tokensPerInterval = tokensPerInterval;
    if (typeof interval === "string") {
      switch (interval) {
        case "sec":
        case "second":
          this.interval = 1000;
          break;
        case "min":
        case "minute":
          this.interval = 1000 * 60;
          break;
        case "hr":
        case "hour":
          this.interval = 1000 * 60 * 60;
          break;
        case "day":
          this.interval = 1000 * 60 * 60 * 24;
          break;
        default:
          throw new Error("Invalid interval " + interval);
      }
    } else {
      this.interval = interval;
    }
    this.parentBucket = parentBucket;
    this.content = 0;
    this.lastDrip = getMilliseconds();
  }
  /**
   * Remove the requested number of tokens. If the bucket (and any parent
   * buckets) contains enough tokens this will happen immediately. Otherwise,
   * the removal will happen when enough tokens become available.
   * @param count The number of tokens to remove.
   * @returns A promise for the remainingTokens count.
   */
  async removeTokens(count) {
    // Is this an infinite size bucket?
    if (this.bucketSize === 0) {
      return Number.POSITIVE_INFINITY;
    }
    // Make sure the bucket can hold the requested number of tokens
    if (count > this.bucketSize) {
      throw new Error(
        `Requested tokens ${count} exceeds bucket size ${this.bucketSize}`,
      );
    }
    // Drip new tokens into this bucket
    this.drip();
    const comeBackLater = async () => {
      // How long do we need to wait to make up the difference in tokens?
      const waitMs = Math.ceil(
        (count - this.content) * (this.interval / this.tokensPerInterval),
      );
      await wait(waitMs);
      return this.removeTokens(count);
    };
    // If we don't have enough tokens in this bucket, come back later
    if (count > this.content) return comeBackLater();
    if (this.parentBucket != undefined) {
      // Remove the requested from the parent bucket first
      const remainingTokens = await this.parentBucket.removeTokens(count);
      // Check that we still have enough tokens in this bucket
      if (count > this.content) return comeBackLater();
      // Tokens were removed from the parent bucket, now remove them from
      // this bucket. Note that we look at the current bucket and parent
      // bucket's remaining tokens and return the smaller of the two values
      this.content -= count;
      return Math.min(remainingTokens, this.content);
    } else {
      // Remove the requested tokens from this bucket
      this.content -= count;
      return this.content;
    }
  }
  /**
   * Attempt to remove the requested number of tokens and return immediately.
   * If the bucket (and any parent buckets) contains enough tokens this will
   * return true, otherwise false is returned.
   * @param {Number} count The number of tokens to remove.
   * @param {Boolean} True if the tokens were successfully removed, otherwise
   *  false.
   */
  tryRemoveTokens(count) {
    // Is this an infinite size bucket?
    if (!this.bucketSize) return true;
    // Make sure the bucket can hold the requested number of tokens
    if (count > this.bucketSize) return false;
    // Drip new tokens into this bucket
    this.drip();
    // If we don't have enough tokens in this bucket, return false
    if (count > this.content) return false;
    // Try to remove the requested tokens from the parent bucket
    if (this.parentBucket && !this.parentBucket.tryRemoveTokens(count))
      return false;
    // Remove the requested tokens from this bucket and return
    this.content -= count;
    return true;
  }
  /**
   * Add any new tokens to the bucket since the last drip.
   * @returns {Boolean} True if new tokens were added, otherwise false.
   */
  drip() {
    if (this.tokensPerInterval === 0) {
      const prevContent = this.content;
      this.content = this.bucketSize;
      return this.content > prevContent;
    }
    const now = getMilliseconds();
    const deltaMS = Math.max(now - this.lastDrip, 0);
    this.lastDrip = now;
    const dripAmount = deltaMS * (this.tokensPerInterval / this.interval);
    const prevContent = this.content;
    this.content = Math.min(this.content + dripAmount, this.bucketSize);
    return Math.floor(this.content) > Math.floor(prevContent);
  }
}

/**
 * A generic rate limiter. Underneath the hood, this uses a token bucket plus
 * an additional check to limit how many tokens we can remove each interval.
 *
 * @param options
 * @param options.tokensPerInterval Maximum number of tokens that can be
 *  removed at any given moment and over the course of one interval.
 * @param options.interval The interval length in milliseconds, or as
 *  one of the following strings: 'second', 'minute', 'hour', day'.
 * @param options.fireImmediately Whether or not the promise will resolve
 *  immediately when rate limiting is in effect (default is false).
 */
class RateLimiter {
  constructor({ tokensPerInterval, interval, fireImmediately }) {
    this.tokenBucket = new TokenBucket({
      bucketSize: tokensPerInterval,
      tokensPerInterval,
      interval,
    });
    // Fill the token bucket to start
    this.tokenBucket.content = tokensPerInterval;
    this.curIntervalStart = getMilliseconds();
    this.tokensThisInterval = 0;
    this.fireImmediately =
      fireImmediately !== null && fireImmediately !== void 0
        ? fireImmediately
        : false;
  }
  /**
   * Remove the requested number of tokens. If the rate limiter contains enough
   * tokens and we haven't spent too many tokens in this interval already, this
   * will happen immediately. Otherwise, the removal will happen when enough
   * tokens become available.
   * @param count The number of tokens to remove.
   * @returns A promise for the remainingTokens count.
   */
  async removeTokens(count) {
    // Make sure the request isn't for more than we can handle
    if (count > this.tokenBucket.bucketSize) {
      throw new Error(
        `Requested tokens ${count} exceeds maximum tokens per interval ${this.tokenBucket.bucketSize}`,
      );
    }
    const now = getMilliseconds();
    // Advance the current interval and reset the current interval token count
    // if needed
    if (
      now < this.curIntervalStart ||
      now - this.curIntervalStart >= this.tokenBucket.interval
    ) {
      this.curIntervalStart = now;
      this.tokensThisInterval = 0;
    }
    // If we don't have enough tokens left in this interval, wait until the
    // next interval
    if (count > this.tokenBucket.tokensPerInterval - this.tokensThisInterval) {
      if (this.fireImmediately) {
        return -1;
      } else {
        const waitMs = Math.ceil(
          this.curIntervalStart + this.tokenBucket.interval - now,
        );
        await wait(waitMs);
        const remainingTokens = await this.tokenBucket.removeTokens(count);
        this.tokensThisInterval += count;
        return remainingTokens;
      }
    }
    // Remove the requested number of tokens from the token bucket
    const remainingTokens = await this.tokenBucket.removeTokens(count);
    this.tokensThisInterval += count;
    return remainingTokens;
  }
  /**
   * Attempt to remove the requested number of tokens and return immediately.
   * If the bucket (and any parent buckets) contains enough tokens and we
   * haven't spent too many tokens in this interval already, this will return
   * true. Otherwise, false is returned.
   * @param {Number} count The number of tokens to remove.
   * @param {Boolean} True if the tokens were successfully removed, otherwise
   *  false.
   */
  tryRemoveTokens(count) {
    // Make sure the request isn't for more than we can handle
    if (count > this.tokenBucket.bucketSize) return false;
    const now = getMilliseconds();
    // Advance the current interval and reset the current interval token count
    // if needed
    if (
      now < this.curIntervalStart ||
      now - this.curIntervalStart >= this.tokenBucket.interval
    ) {
      this.curIntervalStart = now;
      this.tokensThisInterval = 0;
    }
    // If we don't have enough tokens left in this interval, return false
    if (count > this.tokenBucket.tokensPerInterval - this.tokensThisInterval)
      return false;
    // Try to remove the requested number of tokens from the token bucket
    const removed = this.tokenBucket.tryRemoveTokens(count);
    if (removed) {
      this.tokensThisInterval += count;
    }
    return removed;
  }
  /**
   * Returns the number of tokens remaining in the TokenBucket.
   * @returns {Number} The number of tokens remaining.
   */
  getTokensRemaining() {
    this.tokenBucket.drip();
    return this.tokenBucket.content;
  }
}

const _eFAa02 = defineEventHandler(async (event) => {
  const ip = getRequestHeader(event, "x-forwarded-for");
  const routeRules = getRouteRules(event);
  if (routeRules.security.rateLimiter !== false) {
    if (!cache.get(ip)) {
      const cachedLimiter = new RateLimiter(routeRules.security.rateLimiter);
      cache.put(ip, cachedLimiter, 1e4);
    } else {
      const cachedLimiter = cache.get(ip);
      if (cachedLimiter.getTokensRemaining() > 1) {
        await cachedLimiter.removeTokens(1);
        cache.put(ip, cachedLimiter, 1e4);
      } else {
        const tooManyRequestsError = {
          statusCode: 429,
          statusMessage: "Too Many Requests",
        };
        if (routeRules.security.rateLimiter.throwError === false) {
          return tooManyRequestsError;
        }
        throw createError(tooManyRequestsError);
      }
    }
  }
});

const _fJWZ42 = defineEventHandler(async (event) => {
  const routeRules = getRouteRules(event);
  const xssValidator = new FilterXSS(routeRules.security.xssValidator);
  if (routeRules.security.xssValidator !== false) {
    if (["POST", "GET"].includes(event.node.req.method)) {
      const valueToFilter =
        event.node.req.method === "GET"
          ? getQuery$1(event)
          : await readBody(event);
      if (valueToFilter && Object.keys(valueToFilter).length) {
        if (
          valueToFilter.statusMessage &&
          valueToFilter.statusMessage !== "Bad Request"
        )
          return;
        const stringifiedValue = JSON.stringify(valueToFilter);
        const processedValue = xssValidator.process(
          JSON.stringify(valueToFilter),
        );
        if (processedValue !== stringifiedValue) {
          const badRequestError = {
            statusCode: 400,
            statusMessage: "Bad Request",
          };
          if (routeRules.security.requestSizeLimiter.throwError === false) {
            return badRequestError;
          }
          throw createError(badRequestError);
        }
      }
    }
  }
});

const _pUFr74 = defineEventHandler((event) => {
  const routeRules = getRouteRules(event);
  handleCors(event, routeRules.security.corsHandler);
});

const sitemap = ["https://hksanda.vercel.app/sitemap.xml"];
const indexable = false;
const robotsDisabledValue = "noindex, nofollow";

const asArray = (v) => (Array.isArray(v) ? v : [v]);
const _dNZDIh = defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "text/plain");
  const debug = `# Dev Mode: Generated by nuxt-simple-robots. Indexing is ${"disabled"}
`;
  const sitemapLink = (sitemap && indexable ? asArray(sitemap || []) : [])
    .map((path) => `Sitemap: ${path}`)
    .join("\n");
  const disallowedPaths = ["/"].map((path) => `Disallow: ${path}`).join("\n");
  return `${debug}User-agent: *
${disallowedPaths}
${sitemapLink}`;
});

const _o7mv45 = defineEventHandler((event) => {
  if (event.path === "/robots.txt") return;
  const routeRules = getRouteRules(event);
  if (typeof routeRules.robots === "string")
    setHeader(event, "X-Robots-Tag", routeRules.robots);
  else if (routeRules.index === false || indexable === false)
    setHeader(event, "X-Robots-Tag", robotsDisabledValue);
});

const defaults = { component: "OgImageBasic", width: 1200, height: 630 };
const fonts = ["Inter:400", "Inter:700"];
const satoriOptions = {};
const assetDirs = [
  "/Users/jyyyeung/Projects/hksanda-website/public",
  "/Users/jyyyeung/Projects/hksanda-website/node_modules/nuxt-og-image/dist/runtime/public-assets",
];

function decodeHtmlEntities(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "string") {
      obj[key] = value
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'")
        .replace(/&#x2F;/g, "/");
    }
  });
  return obj;
}
function extractOgImageOptions(html) {
  const htmlPayload = html.match(
    /<script id="nuxt-og-image-options" type="application\/json">(.+?)<\/script>/,
  )?.[1];
  if (!htmlPayload) return false;
  let options;
  try {
    options = JSON.parse(htmlPayload);
  } catch (e) {
    options = false;
    console.warn("Failed to parse #nuxt-og-image-options", e, options);
  }
  if (options) {
    const description = html.match(
      /<meta property="og:description" content="(.*?)">/,
    )?.[1];
    if (description) options.description = description;
    else
      options.description = html.match(
        /<meta name="description" content="(.*?)">/,
      )?.[1];
    return decodeHtmlEntities(options);
  }
  return false;
}

function wasmLoader(key, fallback, baseUrl) {
  let promise;
  let loaded = false;
  return {
    loaded() {
      if (loaded) return true;
      if (typeof promise !== "undefined") return promise;
      return false;
    },
    async load() {
      promise =
        promise ||
        new Promise(async (resolve) => {
          let wasm;
          try {
            wasm = await key;
            if (typeof wasm === "string") wasm = void 0;
          } catch (e) {}
          if (!wasm) wasm = await readPublicAsset(fallback);
          if (!wasm) {
            const url = new URL(baseUrl);
            wasm = await (
              await fetch(`${url.origin}${fallback}`)
            ).arrayBuffer();
          }
          loaded = true;
          resolve(wasm);
        });
      return promise;
    },
  };
}
function fetchOptions(e, path) {
  const fetchOptions2 = {
    headers: getHeaders(e),
  };
  return globalThis.$fetch("/api/og-image-options", {
    query: {
      ...getQuery$1(e),
      path,
    },
    ...fetchOptions2,
  });
}
function base64ToArrayBuffer(base64) {
  const buffer = Buffer.from(base64, "base64");
  return new Uint8Array(buffer).buffer;
}
function renderIsland(payload) {
  return globalThis.$fetch(`/__nuxt_island/${payload.component}`, {
    query: { props: JSON.stringify(payload) },
  });
}
function useHostname(e) {
  const host =
    getRequestHeader(e, "host") ||
    process.env.NITRO_HOST ||
    process.env.HOST ||
    "localhost";
  getRequestHeader(e, "x-forwarded-proto") || "http";
  const port = host.includes(":")
    ? host.split(":").pop()
    : process.env.NITRO_PORT || process.env.PORT;
  const base = useRuntimeConfig().app.baseURL;
  return `http${""}://${host.includes(":") ? host.split(":")[0] : host}${port ? `:${port}` : ""}${base}`;
}
const r = (base, key) => {
  return join(base, key.replace(/:/g, "/"));
};
async function readPublicAsset(file, encoding) {
  for (const assetDir of assetDirs) {
    const path = r(assetDir, file);
    if (existsSync(path)) return await promises.readFile(path, { encoding });
  }
}
async function readPublicAssetBase64(file) {
  const base64 = await readPublicAsset(file, "base64");
  if (base64) {
    let type = "image/jpeg";
    const ext = file.split(".").pop();
    if (ext === "svg") type = "image/svg+xml";
    else if (ext === "png") type = "image/png";
    return `data:${type};base64,${base64}`;
  }
}

const _VJsP1g = defineEventHandler(async (e) => {
  const path = withoutTrailingSlash(parseURL(e.path).pathname);
  if (!path.endsWith("/__og_image__")) return;
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

const _lazy_5B0hal = () =>
  Promise.resolve().then(function () {
    return renderer$1;
  });
const _lazy_kq6PYg = () =>
  Promise.resolve().then(function () {
    return og_png$1;
  });
const _lazy_gsblnf = () =>
  Promise.resolve().then(function () {
    return html$1;
  });
const _lazy_Spl2XP = () =>
  Promise.resolve().then(function () {
    return options$1;
  });
const _lazy_wKzCn0 = () =>
  Promise.resolve().then(function () {
    return svg$1;
  });
const _lazy_RlthJY = () =>
  Promise.resolve().then(function () {
    return vnode$1;
  });
const _lazy_2aQWSw = () =>
  Promise.resolve().then(function () {
    return font$1;
  });

const handlers = [
  {
    route: "/__nuxt_error",
    handler: _lazy_5B0hal,
    lazy: true,
    middleware: false,
    method: undefined,
  },
  {
    route: "/robots.txt",
    handler: _1qgsqz,
    lazy: false,
    middleware: false,
    method: undefined,
  },
  {
    route: "/__sitemap__/style.xsl",
    handler: _KFnEHd,
    lazy: false,
    middleware: false,
    method: undefined,
  },
  {
    route: "/sitemap.xml",
    handler: _dnDaLZ,
    lazy: false,
    middleware: false,
    method: undefined,
  },
  {
    route: "",
    handler: _HZHUrp,
    lazy: false,
    middleware: false,
    method: undefined,
  },
  {
    route: "",
    handler: _eFAa02,
    lazy: false,
    middleware: false,
    method: undefined,
  },
  {
    route: "",
    handler: _fJWZ42,
    lazy: false,
    middleware: false,
    method: undefined,
  },
  {
    route: "",
    handler: _pUFr74,
    lazy: false,
    middleware: false,
    method: undefined,
  },
  {
    route: "/robots.txt",
    handler: _dNZDIh,
    lazy: false,
    middleware: false,
    method: undefined,
  },
  {
    route: "",
    handler: _o7mv45,
    lazy: false,
    middleware: false,
    method: undefined,
  },
  {
    route: "",
    handler: _lazy_kq6PYg,
    lazy: true,
    middleware: false,
    method: undefined,
  },
  {
    route: "/api/og-image-html",
    handler: _lazy_gsblnf,
    lazy: true,
    middleware: false,
    method: undefined,
  },
  {
    route: "/api/og-image-options",
    handler: _lazy_Spl2XP,
    lazy: true,
    middleware: false,
    method: undefined,
  },
  {
    route: "/api/og-image-svg",
    handler: _lazy_wKzCn0,
    lazy: true,
    middleware: false,
    method: undefined,
  },
  {
    route: "/api/og-image-vnode",
    handler: _lazy_RlthJY,
    lazy: true,
    middleware: false,
    method: undefined,
  },
  {
    route: "/api/og-image-font",
    handler: _lazy_2aQWSw,
    lazy: true,
    middleware: false,
    method: undefined,
  },
  {
    route: "",
    handler: _VJsP1g,
    lazy: false,
    middleware: false,
    method: undefined,
  },
  {
    route: "/**",
    handler: _lazy_5B0hal,
    lazy: true,
    middleware: false,
    method: undefined,
  },
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(true),
    onError: errorHandler,
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL },
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) =>
        fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) =>
        fetchWithEvent(event, req, init, { fetch: $fetch });
    }),
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/",
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_"),
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache,
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
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
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address:
      typeof _address === "string"
        ? { socketPath: _address }
        : { host: "localhost", port: _address.port },
  });
});
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = {
  appName: "Nuxt",
  version: "",
  statusCode: 500,
  statusMessage: "Server error",
  description:
    "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.",
  stack: "",
};
const _render = function ({ messages }) {
  var __t,
    __p = "";
  __p +=
    "<!DOCTYPE html><html><head><title>" +
    ((__t = messages.statusCode) == null ? "" : __t) +
    " - " +
    ((__t = messages.statusMessage) == null ? "" : __t) +
    " | " +
    ((__t = messages.appName) == null ? "" : __t) +
    '</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0px}.right-0{right:0px}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
    ((__t = messages.statusCode) == null ? "" : __t) +
    '</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
    ((__t = messages.description) == null ? "" : __t) +
    '</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
    ((__t = messages.stack) == null ? "" : __t) +
    "</pre></div></body></html>";
  return __p;
};
const _template = (messages) =>
  _render({ messages: { ..._messages, ...messages } });
const template = _template;

const errorDev = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  template: template,
});

const appRootId = "__nuxt";

const appRootTag = "div";

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () =>
  import(
    "/Users/jyyyeung/Projects/hksanda-website/.nuxt/dist/server/client.manifest.mjs"
  )
    .then((r) => r.default || r)
    .then((r) => (typeof r === "function" ? r() : r));
const getStaticRenderedHead = () =>
  Promise.resolve()
    .then(function () {
      return _virtual__headStatic$1;
    })
    .then((r) => r.default || r);
const getServerEntry = () =>
  import(
    "/Users/jyyyeung/Projects/hksanda-website/.nuxt/dist/server/server.mjs"
  ).then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() =>
  Promise.resolve()
    .then(function () {
      return styles$1;
    })
    .then((r) => r.default || r),
);
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
    buildAssetsURL,
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
    buildAssetsURL,
  };
  const renderer = createRenderer(() => () => {}, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.payload = {
      _errors: {},
      serverRendered: false,
      data: {},
      state: {},
    };
    ssrContext.config = {
      public: config.public,
      app: config.app,
    };
    ssrContext.renderMeta = ssrContext.renderMeta ?? getStaticRenderedHead;
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString,
  };
});
async function getIslandContext(event) {
  const url = event.node.req.url?.substring("/__nuxt_island".length + 1) || "";
  const [componentName, hashId] = url.split("?")[0].split(":");
  const context =
    event.node.req.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr(context.props) || {},
    uid: destr(context.uid) || void 0,
  };
  return ctx;
}
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.json(\?.*)?$/;
const ROOT_NODE_REGEX = new RegExp(
  `^<${appRootTag} id="${appRootId}">([\\s\\S]*)</${appRootTag}>$`,
);
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.node.req.url?.startsWith("/__nuxt_error")
    ? getQuery$1(event)
    : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && event.node.req.socket.readyState !== "readOnly") {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error",
    });
  }
  const islandContext = event.node.req.url?.startsWith("/__nuxt_island")
    ? await getIslandContext(event)
    : void 0;
  let url = ssrError?.url || islandContext?.url || event.node.req.url;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !islandContext;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false || false,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    islandContext,
  };
  const renderer = ssrContext.noSSR
    ? await getSPARenderer()
    : await getSSRRenderer();
  const _rendered = await renderer
    .renderToString(ssrContext)
    .catch(async (error) => {
      const _err = (!ssrError && ssrContext.payload?.error) || error;
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
  const renderedMeta = (await ssrContext.renderMeta?.()) ?? {};
  const inlinedStyles = Boolean(islandContext)
    ? await renderInlineStyles(
        ssrContext.modules ?? ssrContext._registeredComponents ?? [],
      )
    : "";
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
      ssrContext.styles,
    ]),
    bodyAttrs: normalizeChunks([renderedMeta.bodyAttrs]),
    bodyPrepend: normalizeChunks([
      renderedMeta.bodyScriptsPrepend,
      ssrContext.teleports?.body,
    ]),
    body: [replaceServerOnlyComponentsSlots(ssrContext, _rendered.html)],
    bodyAppend: normalizeChunks([
      NO_SCRIPTS
        ? void 0
        : renderPayloadJsonScript({
            id: "__NUXT_DATA__",
            ssrContext,
            data: ssrContext.payload,
          }),
      routeOptions.experimentalNoScripts ? void 0 : _rendered.renderScripts(),
      // Note: bodyScripts may contain tags other than <script>
      renderedMeta.bodyScripts,
    ]),
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  if (islandContext) {
    const _tags = htmlContext.head.flatMap((head2) => extractHTMLTags(head2));
    const head = {
      link: _tags
        .filter(
          (tag) =>
            tag.tagName === "link" &&
            tag.attrs.rel === "stylesheet" &&
            tag.attrs.href.includes("scoped") &&
            !tag.attrs.href.includes("pages/"),
        )
        .map((tag) => ({
          key: "island-link-" + hash(tag.attrs.href),
          ...tag.attrs,
        })),
      style: _tags
        .filter((tag) => tag.tagName === "style" && tag.innerHTML)
        .map((tag) => ({
          key: "island-style-" + hash(tag.innerHTML),
          innerHTML: tag.innerHTML,
        })),
    };
    const islandResponse = {
      id: islandContext.id,
      head,
      html: getServerComponentHTML(htmlContext.body),
      state: ssrContext.payload.state,
    };
    await nitroApp.hooks.callHook("render:island", islandResponse, {
      event,
      islandContext,
    });
    const response2 = {
      body: JSON.stringify(islandResponse, null, 2),
      statusCode: event.node.res.statusCode,
      statusMessage: event.node.res.statusMessage,
      headers: {
        "content-type": "application/json;charset=utf-8",
        "x-powered-by": "Nuxt",
      },
    };
    return response2;
  }
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: event.node.res.statusCode,
    statusMessage: event.node.res.statusMessage,
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt",
    },
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
const HTML_TAG_RE =
  /<(?<tag>[a-z]+)(?<rawAttrs> [^>]*)?>(?:(?<innerHTML>[\s\S]*?)<\/\k<tag>)?/g;
const HTML_TAG_ATTR_RE = /(?<name>[a-z]+)="(?<value>[^"]*)"/g;
function extractHTMLTags(html) {
  const tags = [];
  for (const tagMatch of html.matchAll(HTML_TAG_RE)) {
    const attrs = {};
    for (const attrMatch of tagMatch.groups.rawAttrs?.matchAll(
      HTML_TAG_ATTR_RE,
    ) || []) {
      attrs[attrMatch.groups.name] = attrMatch.groups.value;
    }
    const innerHTML = tagMatch.groups.innerHTML || "";
    tags.push({ tagName: tagMatch.groups.tag, attrs, innerHTML });
  }
  return tags;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(`<style>${style}</style>`);
      }
    }
  }
  return Array.from(inlinedStyles).join("");
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(
      splitPayload(ssrContext).payload,
      ssrContext._payloadReducers,
    ),
    statusCode: ssrContext.event.node.res.statusCode,
    statusMessage: ssrContext.event.node.res.statusMessage,
    headers: {
      "content-type": "application/json;charset=utf-8",
      "x-powered-by": "Nuxt",
    },
  };
}
function renderPayloadJsonScript(opts) {
  const attrs = [
    'type="application/json"',
    `id="${opts.id}"`,
    `data-ssr="${!opts.ssrContext.noSSR}"`,
    opts.src ? `data-src="${opts.src}"` : "",
  ].filter(Boolean);
  const contents = opts.data
    ? stringify(opts.data, opts.ssrContext._payloadReducers)
    : "";
  return `<script ${attrs.join(" ")}>${contents}<\/script><script>window.__NUXT__={};window.__NUXT__.config=${uneval(opts.ssrContext.config)}<\/script>`;
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt },
  };
}
function getServerComponentHTML(body) {
  const match = body[0].match(ROOT_NODE_REGEX);
  return match ? match[1] : body[0];
}
const SSR_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
function replaceServerOnlyComponentsSlots(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const match = key.match(SSR_TELEPORT_MARKER);
    if (!match) {
      continue;
    }
    const [, uid, slot] = match;
    if (!uid || !slot) {
      continue;
    }
    html = html.replace(
      new RegExp(
        `<div nuxt-ssr-component-uid="${uid}"[^>]*>((?!nuxt-ssr-slot-name="${slot}"|nuxt-ssr-component-uid)[\\s\\S])*<div [^>]*nuxt-ssr-slot-name="${slot}"[^>]*>`,
      ),
      (full) => {
        return full + teleports[key];
      },
    );
  }
  return html;
}

const renderer$1 = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  default: renderer,
});

const cachedFonts = {};
async function loadFont(font) {
  if (cachedFonts[font]) return cachedFonts[font];
  let data;
  const storageKey = `assets:nuxt-og-imagee:font:${font}`;
  if (await useStorage().hasItem(storageKey)) {
    data = base64ToArrayBuffer(await useStorage().getItem(storageKey));
    return (cachedFonts[font] = { name: font, data, style: "normal" });
  }
  const [name, weight] = font.split(":");
  if (name === "Inter" && ["400", "700"].includes(weight)) {
    const data2 = await readPublicAsset(
      `/inter-latin-ext-${weight}-normal.woff`,
    );
    if (data2)
      return (cachedFonts[font] = {
        name,
        weight: Number(weight),
        data: data2,
        style: "normal",
      });
  }
  if (!data) {
    const fontUrl = await globalThis.$fetch("/api/og-image-font", {
      query: { name, weight },
    });
    data = await globalThis.$fetch(fontUrl, {
      responseType: "arrayBuffer",
    });
  }
  await useStorage().setItem(storageKey, Buffer.from(data).toString("base64"));
  return (cachedFonts[font] = {
    name,
    weight: Number(weight),
    data,
    style: "normal",
  });
}
async function walkSatoriTree(url, node, plugins) {
  if (!node.props?.children) return;
  if (Array.isArray(node.props.children) && node.props.children.length === 0) {
    delete node.props.children;
    return;
  }
  for (const child of node.props.children || []) {
    if (child) {
      for (const plugin of plugins) {
        if (plugin.filter(child)) await plugin.transform(child);
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
        if (file) node.props.src = file;
        else node.props.src = withBase(src, `${url.protocol}//${url.host}`);
      }
    },
  };
});

const twClasses = defineSatoriTransformer(() => {
  return {
    filter: (node) => !!node.props?.class && !node.props?.tw,
    transform: async (node) => {
      node.props.tw = node.props.class;
    },
  };
});

const flex = defineSatoriTransformer(() => {
  return {
    filter: (node) =>
      node.type === "div" &&
      Array.isArray(node.props?.children) &&
      node.props?.children.length >= 1 &&
      !node.props.style?.display &&
      !node.props?.class?.includes("hidden"),
    transform: async (node) => {
      node.props.style = node.props.style || {};
      node.props.style.display = "flex";
      if (!node.props?.class?.includes("flex-"))
        node.props.style.flexDirection = "column";
    },
  };
});

const emojis = defineSatoriTransformer(() => {
  return {
    filter: (node) =>
      node.type === "img" && node.props?.class?.includes("emoji"),
    transform: async (node) => {
      node.props.style = node.props.style || {};
      node.props.style.height = "1em";
      node.props.style.width = "1em";
      node.props.style.margin = "0 .05em 0 .1em";
      node.props.style.verticalAlign = "0.1em";
    },
  };
});

const encoding = defineSatoriTransformer(() => {
  return {
    filter: (node) => typeof node.props?.children === "string",
    transform: async (node) => {
      node.props.children = node.props.children
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'")
        .replace(/&#x2F;/g, "/");
    },
  };
});

async function svg2png(svg, options) {
  const loader = wasmLoader(
    "/* NUXT_OG_IMAGE_SVG2PNG_WASM */",
    "/svg2png.wasm",
    options.baseUrl,
  );
  if (!(await loader.loaded()))
    await initialize(await loader.load()).catch(() => {});
  return await svg2png$1(svg, options);
}

async function loadSvg2png() {
  return svg2png;
}

function satori$1(nodes, options) {
  return satori$2(nodes, options);
}

async function loadSatori() {
  return satori$1;
}

const satoriFonts = [];
let fontLoadPromise = null;
function loadFonts(fonts2) {
  if (fontLoadPromise) return fontLoadPromise;
  return (fontLoadPromise = Promise.all(fonts2.map((font) => loadFont(font))));
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
      query: { path: url.pathname, options: JSON.stringify(options) },
    });
    const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/)?.[1];
    const emojiedFont = twemoji.parse(body, {
      folder: "svg",
      ext: ".svg",
    });
    const satoriTree = html$2(emojiedFont);
    await walkSatoriTree(url, satoriTree, [
      // @todo add user land support
      emojis(url),
      twClasses(url),
      imageSrc(url),
      flex(url),
      encoding(url),
    ]);
    return satoriTree;
  },
  createSvg: async function createSvg(baseUrl, options) {
    const vnodes = await this.createVNode(baseUrl, options);
    if (!satoriFonts.length) satoriFonts.push(...(await loadFonts(fonts)));
    const satori = await loadSatori();
    return await satori(vnodes, {
      ...satoriOptions,
      baseUrl,
      fonts: satoriFonts,
      embedFont: true,
      width: options.width,
      height: options.height,
    });
  },
};

async function screenshot(browser, options) {
  const page = await browser.newPage({
    colorScheme: options.colorScheme,
  });
  await page.setViewportSize({
    width: options.width || 1200,
    height: options.height || 630,
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
      waitUntil: "networkidle",
    });
  }
  if (options.delay) await page.waitForTimeout(options.delay);
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
      executablePath: chromePath,
    });
  } catch (e) {}
  try {
    return await playwrightCore.chromium.launch({
      headless: true,
    });
  } catch (e) {}
  try {
    const playwright = await import(String("playwright"));
    return await playwright.chromium.launch({
      headless: true,
    });
  } catch (e) {
    {
      console.warn(
        "Failed to load chromium instance. Ensure you have chrome installed, otherwise add the dependency: `npm add -D playwright`.",
      );
    }
  }
}

async function loadBrowser() {
  return createBrowser;
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
        path: `/api/og-image-html?path=${url.pathname}`,
      });
    }
    return null;
  },
};

async function useProvider(provider) {
  if (provider === "satori") return satori;
  if (provider === "browser") return browser;
}

const og_png = defineEventHandler(async (e) => {
  const path = parseURL(e.path).pathname;
  if (!path.endsWith("__og_image__/og.png")) return;
  const basePath = withoutTrailingSlash(
    path.replace("__og_image__/og.png", ""),
  );
  setHeader(e, "Content-Type", "image/png");
  setHeader(e, "Cache-Control", "no-cache, no-store, must-revalidate");
  setHeader(e, "Pragma", "no-cache");
  setHeader(e, "Expires", "0");
  const options = await fetchOptions(e, basePath);
  const provider = await useProvider(options.provider);
  if (!provider) {
    throw createError({
      statusCode: 500,
      statusMessage: `Provider ${options.provider} is missing.`,
    });
  }
  return provider.createPng(withBase(basePath, useHostname(e)), options);
});

const og_png$1 = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  default: og_png,
});

const TAG_WEIGHTS = {
  // aliases
  critical: 2,
  high: 9,
  low: 12,
  // tags
  base: -1,
  title: 1,
  meta: 10,
};
function tagWeight(tag) {
  if (typeof tag.tagPriority === "number") return tag.tagPriority;
  if (tag.tag === "meta") {
    if (tag.props.charset) return -2;
    if (tag.props["http-equiv"] === "content-security-policy") return 0;
  }
  const key = tag.tagPriority || tag.tag;
  if (key in TAG_WEIGHTS) {
    return TAG_WEIGHTS[key];
  }
  return 10;
}
const SortModifiers = [
  { prefix: "before:", offset: -1 },
  { prefix: "after:", offset: 1 },
];
function SortTagsPlugin() {
  return defineHeadPlugin({
    hooks: {
      "tags:resolve": (ctx) => {
        const tagPositionForKey = (key) =>
          ctx.tags.find((tag) => tag._d === key)?._p;
        for (const { prefix, offset } of SortModifiers) {
          for (const tag of ctx.tags.filter(
            (tag2) =>
              typeof tag2.tagPriority === "string" &&
              tag2.tagPriority.startsWith(prefix),
          )) {
            const position = tagPositionForKey(
              tag.tagPriority.replace(prefix, ""),
            );
            if (typeof position !== "undefined") tag._p = position + offset;
          }
        }
        ctx.tags
          .sort((a, b) => a._p - b._p)
          .sort((a, b) => tagWeight(a) - tagWeight(b));
      },
    },
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
            tags[titleIdx].textContent,
          );
          if (newTitle !== null) {
            tags[titleIdx].textContent = newTitle || tags[titleIdx].textContent;
          } else {
            delete tags[titleIdx];
          }
        } else if (titleTemplateIdx !== -1) {
          const newTitle = resolveTitleTemplate(
            tags[titleTemplateIdx].textContent,
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
      },
    },
  });
}

function DeprecatedTagAttrPlugin() {
  return defineHeadPlugin({
    hooks: {
      "tag:normalise": function ({ tag }) {
        if (typeof tag.props.body !== "undefined") {
          tag.tagPosition = "bodyClose";
          delete tag.props.body;
        }
      },
    },
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
      },
    },
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
      else props[key] = value;
    });
    let delayedSrc;
    if (
      mode === "dom" &&
      tag.tag === "script" &&
      typeof props.src === "string" &&
      typeof eventHandlers.onload !== "undefined"
    ) {
      delayedSrc = props.src;
      delete props.src;
    }
    return { props, eventHandlers, delayedSrc };
  };
  return defineHeadPlugin({
    hooks: {
      "ssr:render": function (ctx) {
        ctx.tags = ctx.tags.map((tag) => {
          if (!ValidEventTags.includes(tag.tag)) return tag;
          if (
            !Object.entries(tag.props).find(
              ([key, value]) =>
                key.startsWith("on") && typeof value === "function",
            )
          )
            return tag;
          tag.props = stripEventHandlers("ssr", tag).props;
          return tag;
        });
      },
      "dom:beforeRenderTag": function (ctx) {
        if (!ValidEventTags.includes(ctx.tag.tag)) return;
        if (
          !Object.entries(ctx.tag.props).find(
            ([key, value]) =>
              key.startsWith("on") && typeof value === "function",
          )
        )
          return;
        const { props, eventHandlers, delayedSrc } = stripEventHandlers(
          "dom",
          ctx.tag,
        );
        if (!Object.keys(eventHandlers).length) return;
        ctx.tag.props = props;
        ctx.tag._eventHandlers = eventHandlers;
        ctx.tag._delayedSrc = delayedSrc;
      },
      "dom:renderTag": function (ctx) {
        const $el = ctx.$el;
        if (!ctx.tag._eventHandlers || !$el) return;
        const $eventListenerTarget =
          ctx.tag.tag === "bodyAttrs" && "undefined" !== "undefined"
            ? window
            : $el;
        Object.entries(ctx.tag._eventHandlers).forEach(([k, value]) => {
          const sdeKey = `${ctx.tag._d || ctx.tag._p}:${k}`;
          const eventName = k.slice(2).toLowerCase();
          const eventDedupeKey = `data-h-${eventName}`;
          ctx.markSideEffect(sdeKey, () => {});
          if ($el.hasAttribute(eventDedupeKey)) return;
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
      },
    },
  });
}

const UsesMergeStrategy = ["templateParams", "htmlAttrs", "bodyAttrs"];
function DedupesTagsPlugin() {
  return defineHeadPlugin({
    hooks: {
      "tag:normalise": function ({ tag }) {
        ["hid", "vmid", "key"].forEach((key) => {
          if (tag.props[key]) {
            tag.key = tag.props[key];
            delete tag.props[key];
          }
        });
        const generatedKey = tagDedupeKey(tag);
        const dedupe =
          generatedKey || (tag.key ? `${tag.tag}:${tag.key}` : false);
        if (dedupe) tag._d = dedupe;
      },
      "tags:resolve": function (ctx) {
        const deduping = {};
        ctx.tags.forEach((tag) => {
          const dedupeKey =
            (tag.key ? `${tag.tag}:${tag.key}` : tag._d) || tag._p;
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
                ...tag.props,
              };
              return;
            } else if (tag._e === dupedTag._e) {
              dupedTag._duped = dupedTag._duped || [];
              tag._d = `${dupedTag._d}:${dupedTag._duped.length + 1}`;
              dupedTag._duped.push(tag);
              return;
            }
          }
          const propCount =
            Object.keys(tag.props).length +
            (tag.innerHTML ? 1 : 0) +
            (tag.textContent ? 1 : 0);
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
          if (dupes) newTags.push(...dupes);
        });
        ctx.tags = newTags;
      },
    },
  });
}

function processTemplateParams(s, config) {
  function sub(token) {
    if (["s", "pageTitle"].includes(token)) return config.pageTitle;
    let val;
    if (token.includes(".")) {
      val = token
        .split(".")
        .reduce((acc, key) => (acc ? acc[key] || void 0 : void 0), config);
    } else {
      val = config[token];
    }
    return typeof val !== "undefined" ? val || "" : false;
  }
  let decoded = s;
  try {
    decoded = decodeURI(s);
  } catch {}
  const tokens = (decoded.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse();
  tokens.forEach((token) => {
    const re = sub(token.slice(1));
    if (typeof re === "string") {
      s = s.replace(new RegExp(`\\${token}(\\W|$)`, "g"), `${re}$1`).trim();
    }
  });
  if (config.separator) {
    if (s.endsWith(config.separator))
      s = s.slice(0, -config.separator.length).trim();
    if (s.startsWith(config.separator))
      s = s.slice(config.separator.length).trim();
    s = s.replace(
      new RegExp(`\\${config.separator}\\s*\\${config.separator}`, "g"),
      config.separator,
    );
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
          if (
            ["titleTemplate", "title"].includes(tag.tag) &&
            typeof tag.textContent === "string"
          ) {
            tag.textContent = processTemplateParams(tag.textContent, params);
          } else if (
            tag.tag === "meta" &&
            typeof tag.props.content === "string"
          ) {
            tag.props.content = processTemplateParams(
              tag.props.content,
              params,
            );
          } else if (tag.tag === "link" && typeof tag.props.href === "string") {
            tag.props.href = processTemplateParams(tag.props.href, params);
          } else if (
            tag.tag === "script" &&
            ["application/json", "application/ld+json"].includes(
              tag.props.type,
            ) &&
            typeof tag.innerHTML === "string"
          ) {
            try {
              tag.innerHTML = JSON.stringify(
                JSON.parse(tag.innerHTML),
                (key, val) => {
                  if (typeof val === "string")
                    return processTemplateParams(val, params);
                  return val;
                },
              );
            } catch {}
          }
        }
        ctx.tags = tags.filter((tag) => tag.tag !== "templateParams");
      },
    },
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
    if (!["script", "noscript", "style"].includes(tagName)) return false;
    if (
      tagName === "script" &&
      (/^(https?:)?\/\//.test(input) || input.startsWith("/"))
    )
      tag.props.src = input;
    else tag.innerHTML = input;
    return tag;
  }
  tag.props = await normaliseProps(tagName, { ...input });
  if (tag.props.children) {
    tag.props.innerHTML = tag.props.children;
  }
  delete tag.props.children;
  Object.keys(tag.props)
    .filter((k) => TagConfigKeys.includes(k))
    .forEach((k) => {
      if (
        !["innerHTML", "textContent"].includes(k) ||
        TagsWithInnerContent.includes(tag.tag)
      ) {
        tag[k] = tag.props[k];
      }
      delete tag.props[k];
    });
  ["innerHTML", "textContent"].forEach((k) => {
    if (
      tag.tag === "script" &&
      typeof tag[k] === "string" &&
      ["application/ld+json", "application/json"].includes(tag.props.type)
    ) {
      try {
        tag[k] = JSON.parse(tag[k]);
      } catch (e) {
        tag[k] = "";
      }
    }
    if (typeof tag[k] === "object") tag[k] = JSON.stringify(tag[k]);
  });
  if (tag.props.class) tag.props.class = normaliseClassProp(tag.props.class);
  if (tag.props.content && Array.isArray(tag.props.content))
    return tag.props.content.map((v) => ({
      ...tag,
      props: { ...tag.props, content: v },
    }));
  return tag;
}
function normaliseClassProp(v) {
  if (typeof v === "object" && !Array.isArray(v)) {
    v = Object.keys(v).filter((k) => v[k]);
  }
  return (Array.isArray(v) ? v.join(" ") : v)
    .split(" ")
    .filter((c) => c.trim())
    .filter(Boolean)
    .join(" ");
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
  Object.entries(e.resolvedInput)
    .filter(([k, v]) => typeof v !== "undefined" && ValidHeadTags.includes(k))
    .forEach(([k, value]) => {
      const v = asArray$1(value);
      tagPromises.push(...v.map((props) => normaliseTag(k, props)).flat());
    });
  return (await Promise.all(tagPromises))
    .flat()
    .filter(Boolean)
    .map((t, i) => {
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
    DeprecatedTagAttrPlugin(),
  ];
}
function createHeadCore(options = {}) {
  let entries = [];
  let _sde = {};
  let _eid = 0;
  const hooks = createHooks();
  if (options?.hooks) hooks.addHooks(options.hooks);
  options.plugins = [...CorePlugins(), ...(options?.plugins || [])];
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
    use(plugin) {
      if (plugin.hooks) hooks.addHooks(plugin.hooks);
    },
    push(input, options2) {
      const activeEntry = {
        _i: _eid++,
        input,
        _sde: {},
      };
      if (options2?.mode) activeEntry._m = options2?.mode;
      if (options2?.transform) {
        activeEntry._t = options2?.transform;
      }
      entries.push(activeEntry);
      updated();
      return {
        dispose() {
          entries = entries.filter((e) => {
            if (e._i !== activeEntry._i) return true;
            _sde = { ..._sde, ...(e._sde || {}) };
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
        },
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
            const tagCtx = {
              tag,
              entry,
              resolvedOptions: head.resolvedOptions,
            };
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
    _elMap: {},
  };
  head.hooks.callHook("init", head);
  return head;
}

const html = defineEventHandler(async (e) => {
  const path = getQuery$1(e).path || "/";
  const scale = getQuery$1(e).scale;
  const mode = getQuery$1(e).mode || "light";
  let options;
  if (getQuery$1(e).options) options = JSON.parse(getQuery$1(e).options);
  if (!options) options = await fetchOptions(e, path);
  if (options.provider === "browser" && !options.component)
    return sendRedirect(e, withBase(path, useHostname(e)));
  const island = await renderIsland(options);
  const head = createHeadCore();
  head.push(island.head);
  head.push({
    style: [
      {
        // default font is the first font family
        innerHTML: `body { font-family: '${fonts[0].split(":")[0].replace("+", " ")}', sans-serif;  }`,
      },
      scale
        ? {
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
`,
          }
        : {},
    ],
    meta: [
      {
        charset: "utf-8",
      },
    ],
    script: [
      {
        src: "https://cdn.tailwindcss.com",
      },
      // @todo merge with users tailwind
      {
        innerHTML: `tailwind.config = {
  corePlugins: {
    preflight: false,
  }
}`,
      },
    ],
    link: [
      {
        // reset css to match svg output
        href: "https://cdn.jsdelivr.net/npm/gardevoir",
        rel: "stylesheet",
      },
      // have to add each weight as their own stylesheet
      ...fonts.map((font) => {
        const [name, weight] = font.split(":");
        return {
          href: `https://fonts.googleapis.com/css2?family=${name}:wght@${weight}&display=swap`,
          rel: "stylesheet",
        };
      }),
    ],
  });
  const headChunk = await renderSSRHead(head);
  return `<!DOCTYPE html>
<html ${headChunk.htmlAttrs}>
<head>${headChunk.headTags}</head>
<body ${headChunk.bodyAttrs}>${headChunk.bodyTagsOpen}<div style="position: relative; display: flex; margin: 0 auto; width: 1200px; height: 630px;">${island.html}</div>${headChunk.bodyTags}</body>
</html>`;
});

const html$1 = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  default: html,
});

const options = defineEventHandler(async (e) => {
  const query = getQuery$1(e);
  const path = query.path || "/";
  const fetchOptions = {
    headers: getHeaders(e),
  };
  const html = await globalThis.$fetch(path, {
    ...fetchOptions,
  });
  const extractedPayload = extractOgImageOptions(html);
  if (!extractedPayload) {
    throw createError({
      statusCode: 500,
      statusMessage: `The path ${path} is missing the og-image payload.`,
    });
  }
  e.node.req.url = path;
  e.context._nitro.routeRules = void 0;
  const routeRules = getRouteRules(e)?.ogImage;
  e.node.req.url = e.path;
  if (routeRules === false) return false;
  return {
    path,
    ...defaults,
    // use route rules
    ...(routeRules || {}),
    // use provided data
    ...extractedPayload,
    // use query data
    ...query,
  };
});

const options$1 = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  default: options,
});

const svg = defineEventHandler(async (e) => {
  const path = getQuery$1(e).path || "/";
  const options = await fetchOptions(e, path);
  setHeader(e, "Content-Type", "image/svg+xml");
  const provider = await useProvider(options.provider);
  if (!provider) {
    throw createError({
      statusCode: 500,
      statusMessage: `Provider ${options.provider} is missing.`,
    });
  }
  return provider.createSvg(withBase(path, useHostname(e)), options);
});

const svg$1 = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  default: svg,
});

const vnode = defineEventHandler(async (e) => {
  const path = getQuery$1(e).path || "/";
  const options = await fetchOptions(e, path);
  setHeader(e, "Content-Type", "application/json");
  const provider = await useProvider(options.provider);
  if (!provider) {
    throw createError({
      statusCode: 500,
      statusMessage: `Provider ${options.provider} is missing.`,
    });
  }
  return provider.createVNode(withBase(path, useHostname(e)), options);
});

const vnode$1 = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  default: vnode,
});

const font = defineCachedEventHandler(
  async (e) => {
    const { name, weight } = getQuery$1(e);
    if (!name || !weight) return "Provide a font name and weight";
    const css = await await globalThis.$fetch(
      `https://fonts.googleapis.com/css2?family=${name}:wght@${weight}`,
      {
        headers: {
          // Make sure it returns TTF.
          "User-Agent":
            "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
        },
      },
    );
    const resource = css.match(
      /src: url\((.+)\) format\('(opentype|truetype)'\)/,
    );
    if (!resource) return;
    return resource[1];
  },
  {
    getKey: (e) => {
      const query = getQuery$1(e);
      return `nuxt-og-image:font-url:${query.name}:${query.weight}`;
    },
  },
);

const font$1 = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  default: font,
});

const _virtual__headStatic = {
  headTags:
    '<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<link rel="icon" type="image/x-icon" href="/favicon.ico">\n<title>%separator %siteName</title>',
  bodyTags: "",
  bodyTagsOpen: "",
  htmlAttrs: "",
  bodyAttrs: "",
};

const _virtual__headStatic$1 = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  default: _virtual__headStatic,
});

const styles = {};

const styles$1 = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  default: styles,
});
//# sourceMappingURL=index.mjs.map
