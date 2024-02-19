import { NuxtModule, RuntimeConfig } from "nuxt/schema";
declare module "nuxt/schema" {
  interface NuxtConfig {
    ["gtag"]?: typeof import("nuxt-gtag").default extends NuxtModule<infer O>
      ? Partial<O>
      : Record<string, any>;
    ["sanity"]?: typeof import("@nuxtjs/sanity").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O>
      ? Partial<O>
      : Record<string, any>;
    ["device"]?: typeof import("@nuxtjs/device").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    ["image"]?: typeof import("@nuxt/image-edge").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    ["lazyLoad"]?: typeof import("nuxt-lazy-load").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    ["delayHydration"]?: typeof import("nuxt-delay-hydration").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    ["pwa"]?: typeof import("@vite-pwa/nuxt").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    ["sitemap"]?: typeof import("nuxt-simple-sitemap").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    ["security"]?: typeof import("nuxt-security").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    ["site"]?: typeof import("/Users/jyyyeung/Projects/hksanda-website/node_modules/nuxt-seo-kit/modules/nuxt-seo-kit/module").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    ["schemaOrg"]?: typeof import("nuxt-schema-org").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    ["unhead"]?: typeof import("nuxt-unhead").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    ["robots"]?: typeof import("nuxt-simple-robots").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    ["linkChecker"]?: typeof import("nuxt-link-checker").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    modules?: (
      | undefined
      | null
      | false
      | NuxtModule
      | string
      | [NuxtModule | string, Record<string, any>]
      | ["nuxt-gtag", Exclude<NuxtConfig["gtag"], boolean>]
      | ["@nuxtjs/sanity", Exclude<NuxtConfig["sanity"], boolean>]
      | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>]
      | ["@nuxtjs/device", Exclude<NuxtConfig["device"], boolean>]
      | ["@nuxt/image-edge", Exclude<NuxtConfig["image"], boolean>]
      | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>]
      | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>]
      | ["nuxt-lazy-load", Exclude<NuxtConfig["lazyLoad"], boolean>]
      | ["nuxt-delay-hydration", Exclude<NuxtConfig["delayHydration"], boolean>]
      | ["@vite-pwa/nuxt", Exclude<NuxtConfig["pwa"], boolean>]
      | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>]
      | ["nuxt-simple-sitemap", Exclude<NuxtConfig["sitemap"], boolean>]
      | ["nuxt-security", Exclude<NuxtConfig["security"], boolean>]
      | [
          "/Users/jyyyeung/Projects/hksanda-website/node_modules/nuxt-seo-kit/modules/nuxt-seo-kit/module",
          Exclude<NuxtConfig["site"], boolean>,
        ]
      | ["nuxt-schema-org", Exclude<NuxtConfig["schemaOrg"], boolean>]
      | ["nuxt-unhead", Exclude<NuxtConfig["unhead"], boolean>]
      | ["nuxt-simple-robots", Exclude<NuxtConfig["robots"], boolean>]
      | ["nuxt-link-checker", Exclude<NuxtConfig["linkChecker"], boolean>]
      | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>]
      | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>]
    )[];
  }
  interface RuntimeConfig {
    app: {
      baseURL: string;

      buildAssetsDir: string;

      cdnURL: string;
    };

    indexable: boolean;

    sanity: any;

    private: {
      basicAuth: boolean;
    };

    security: {
      headers: {
        crossOriginResourcePolicy: string;

        crossOriginOpenerPolicy: string;

        crossOriginEmbedderPolicy: string;

        contentSecurityPolicy: {
          "base-uri": Array<string>;

          "font-src": Array<string>;

          "form-action": Array<string>;

          "frame-ancestors": Array<string>;

          "img-src": Array<string>;

          "object-src": Array<string>;

          "script-src-attr": Array<string>;

          "style-src": Array<string>;

          "upgrade-insecure-requests": boolean;
        };

        originAgentCluster: string;

        referrerPolicy: string;

        strictTransportSecurity: {
          maxAge: number;

          includeSubdomains: boolean;
        };

        xContentTypeOptions: string;

        xDNSPrefetchControl: string;

        xDownloadOptions: string;

        xFrameOptions: string;

        xPermittedCrossDomainPolicies: string;

        xXSSProtection: string;

        permissionsPolicy: {
          camera: Array<string>;

          "display-capture": Array<string>;

          fullscreen: Array<string>;

          geolocation: Array<string>;

          microphone: Array<string>;
        };
      };

      requestSizeLimiter: {
        maxRequestSizeInBytes: number;

        maxUploadFileRequestInBytes: number;

        throwError: boolean;
      };

      rateLimiter: {
        tokensPerInterval: number;

        interval: string;

        fireImmediately: boolean;

        throwError: boolean;
      };

      xssValidator: {
        throwError: boolean;
      };

      corsHandler: {
        origin: string;

        methods: Array<string>;

        preflight: {
          statusCode: number;
        };

        throwError: boolean;
      };

      allowedMethodsRestricter: string;

      hidePoweredBy: boolean;

      enabled: boolean;

      csrf: boolean;
    };

    "nuxt-simple-sitemap": {
      enabled: boolean;

      autoLastmod: boolean;

      siteUrl: string;

      trailingSlash: boolean;

      inferStaticPagesAsRoutes: boolean;

      discoverImages: boolean;

      dynamicUrlsApiEndpoint: string;

      include: Array<any>;

      exclude: Array<any>;

      urls: Array<{}>;

      sitemaps: boolean;

      xsl: string;

      sitemapName: string;

      defaults: any;

      isNuxtContentDocumentDriven: boolean;

      hasApiRoutesUrl: boolean;

      pagesDirs: Array<string>;

      hasPrerenderedRoutesPayload: boolean;

      extensions: Array<string>;
    };
  }
  interface PublicRuntimeConfig {
    trailingSlash: boolean;

    titleSeparator: string;

    siteName: string;

    siteUrl: string;

    siteDescription: string;

    language: string;

    index: boolean;

    gtag: {
      id: string;

      config: any;

      initialConsent: boolean;

      loadingStrategy: string;
    };

    sanity: {
      useCdn: boolean;

      projectId: string;

      dataset: string;

      apiVersion: string;

      withCredentials: boolean;

      token: any;

      additionalClients: any;
    };

    device: {
      enabled: boolean;

      defaultUserAgent: string;

      refreshOnResize: boolean;
    };

    "nuxt-unhead": {
      seoOptimise: boolean;

      resolveAliases: boolean;
    };
  }
}
declare module "vue" {
  interface ComponentCustomProperties {
    $config: RuntimeConfig;
  }
}
