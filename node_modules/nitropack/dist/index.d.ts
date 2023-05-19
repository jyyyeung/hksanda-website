import { N as Nitro, a as NitroConfig, b as NitroOptions, c as NitroEventHandler, d as NitroPreset } from './nitro-169e6e27.js';
export { $ as $Fetch, j as AppConfig, A as AvailableRouterMethod, r as CacheEntry, s as CacheOptions, t as CachedEventHandlerOptions, C as CompressOptions, D as DevServerOptions, E as ExtractedRouteMethod, I as InternalApi, K as KebabCase, q as MatchedRoutes, M as MiddlewareOf, o as NitroDevEventHandler, g as NitroDynamicConfig, p as NitroErrorHandler, f as NitroFetchOptions, e as NitroFetchRequest, i as NitroHooks, m as NitroRouteConfig, n as NitroRouteRules, h as PrerenderGenerateRoute, P as PrerenderRoute, k as PublicAssetDir, R as ResponseCacheEntry, l as ServerAssetDir, S as StorageMounts, T as TypedInternalResponse } from './nitro-169e6e27.js';
import { WatchConfigOptions } from 'c12';
import { Worker } from 'node:worker_threads';
import { App, Router, H3Event } from 'h3';
import { ListenOptions, Listener } from 'listhen';
import { FSWatcher } from 'chokidar';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { Hookable } from 'hookable';
import 'unenv';
import 'unimport';
import 'unimport/unplugin';
import 'rollup-plugin-visualizer';
import 'consola';
import '@rollup/plugin-commonjs';
import '@rollup/plugin-wasm';
import 'unstorage';
import 'http-proxy';
import '@vercel/nft';
import 'rollup';
import 'ofetch';
import 'esbuild';
import '@rollup/pluginutils';

/**
 * @link https://github.com/remix-run/remix/blob/2248669ed59fd716e267ea41df5d665d4781f4a9/packages/remix-server-runtime/serialize.ts
 */
type JsonPrimitive = string | number | boolean | String | Number | Boolean | null;
type NonJsonPrimitive = undefined | Function | symbol;
type IsAny<T> = 0 extends 1 & T ? true : false;
type FilterKeys<TObj extends object, TFilter> = {
    [TKey in keyof TObj]: TObj[TKey] extends TFilter ? TKey : never;
}[keyof TObj];
type Serialize<T> = IsAny<T> extends true ? any : T extends JsonPrimitive ? T : T extends Map<any, any> | Set<any> ? Record<string, never> : T extends NonJsonPrimitive ? never : T extends {
    toJSON(): infer U;
} ? U : T extends [] ? [] : T extends [unknown, ...unknown[]] ? SerializeTuple<T> : T extends ReadonlyArray<infer U> ? (U extends NonJsonPrimitive ? null : Serialize<U>)[] : T extends object ? SerializeObject<T> : never;
/** JSON serialize [tuples](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types) */
type SerializeTuple<T extends [unknown, ...unknown[]]> = {
    [k in keyof T]: T[k] extends NonJsonPrimitive ? null : Serialize<T[k]>;
};
/** JSON serialize objects (not including arrays) and classes */
type SerializeObject<T extends object> = {
    [k in keyof Omit<T, FilterKeys<T, NonJsonPrimitive>>]: Serialize<T[k]>;
};
/**
 * @see https://github.com/ianstormtaylor/superstruct/blob/7973400cd04d8ad92bbdc2b6f35acbfb3c934079/src/utils.ts#L323-L325
 */
type Simplify<TType> = TType extends any[] | Date ? TType : {
    [K in keyof TType]: TType[K];
};

interface NitroApp {
    h3App: App;
    router: Router;
    hooks: Hookable;
    localCall: ReturnType<typeof createCall>;
    localFetch: ReturnType<typeof createFetch>;
}

interface NitroAppPlugin {
    (nitro: NitroApp): void;
}

interface RenderResponse {
    body: string;
    statusCode: number;
    statusMessage: string;
    headers: Record<string, string>;
}
type RenderHandler = (event: H3Event) => Partial<RenderResponse> | Promise<Partial<RenderResponse>>;

declare function prepare(nitro: Nitro): Promise<void>;
declare function copyPublicAssets(nitro: Nitro): Promise<void>;
declare function build(nitro: Nitro): Promise<void>;
declare function writeTypes(nitro: Nitro): Promise<void>;

interface LoadConfigOptions {
    watch?: boolean;
    c12?: WatchConfigOptions;
}
declare function loadOptions(configOverrides?: NitroConfig, opts?: LoadConfigOptions): Promise<NitroOptions>;

declare function createNitro(config?: NitroConfig, opts?: LoadConfigOptions): Promise<Nitro>;

declare const GLOB_SCAN_PATTERN = "**/*.{ts,mjs,js,cjs}";
type FileInfo = {
    dir: string;
    path: string;
    fullPath: string;
};
declare function scanHandlers(nitro: Nitro): Promise<{
    dirs: string[];
    files: FileInfo[];
    handlers: NitroEventHandler[];
}[]>;
declare function scanMiddleware(nitro: Nitro): Promise<{
    dirs: string[];
    files: FileInfo[];
    handlers: NitroEventHandler[];
}>;
declare function scanRoutes(nitro: Nitro, dir: string, prefix?: string): Promise<{
    dirs: string[];
    files: FileInfo[];
    handlers: NitroEventHandler[];
}>;
declare function scanPlugins(nitro: Nitro): Promise<any[]>;

interface NitroWorker {
    worker: Worker;
    address: {
        host: string;
        port: number;
        socketPath?: string;
    };
}
interface NitroDevServer {
    reload: () => void;
    listen: (port: ListenOptions["port"], opts?: Partial<ListenOptions>) => Promise<Listener>;
    app: App;
    close: () => Promise<void>;
    watcher?: FSWatcher;
}
declare function createDevServer(nitro: Nitro): NitroDevServer;

declare function prerender(nitro: Nitro): Promise<void>;

declare function defineNitroPreset(preset: NitroPreset): NitroPreset;

export { GLOB_SCAN_PATTERN, LoadConfigOptions, Nitro, NitroApp, NitroAppPlugin, NitroConfig, NitroDevServer, NitroEventHandler, NitroOptions, NitroPreset, NitroWorker, RenderHandler, RenderResponse, Serialize, Simplify, build, copyPublicAssets, createDevServer, createNitro, defineNitroPreset, loadOptions, prepare, prerender, scanHandlers, scanMiddleware, scanPlugins, scanRoutes, writeTypes };
