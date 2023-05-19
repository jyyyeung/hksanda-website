import { g as gql, a as useMainStore, s as storeToRefs, u as useAsyncQuery, b as useMutation } from "../server.mjs";
import { resolveComponent, mergeProps, useSSRContext, withAsyncContext, unref } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
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
const ClassInfoCard_vue_vue_type_style_index_0_scoped_4f1db7dc_lang = "";
const _sfc_main$1 = {
  __name: "ClassInfoCard",
  __ssrInlineRender: true,
  props: {
    session: {
      type: Object,
      default: () => ({
        title: "",
        type: "",
        students: null,
        location: null,
        mapQuery: null,
        classroom: null
      })
    },
    edit: {
      type: Function,
      required: true
    },
    remove: {
      type: Function,
      required: true
    },
    isAdmin: Boolean
  },
  setup(__props) {
    const props = __props;
    function confirm(event, session) {
      this.$confirm.require({
        target: event.currentTarget,
        message: "你确定要删除吗？",
        icon: "pi pi-info-circle",
        acceptClass: "p-button-danger",
        accept: () => {
          props.remove(session);
          this.$toast.add({ severity: "info", summary: "成功", detail: "已成功删除", life: 3e3 });
        },
        reject: () => {
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = resolveComponent("Button");
      const _component_ConfirmPopup = resolveComponent("ConfirmPopup");
      _push(`<span${ssrRenderAttrs(mergeProps({ class: "class my-4 col-12 col-lg-6 class__info" }, _attrs))} data-v-4f1db7dc><h3 class="h3" data-v-4f1db7dc>${ssrInterpolate(__props.session.title)} （${ssrInterpolate(__props.session.type)}）</h3><dl class="row h5" data-v-4f1db7dc>`);
      if (__props.session.classroom) {
        _push(`<!--[--><dt class="col-3" data-v-4f1db7dc>教室</dt><dd class="col-9" data-v-4f1db7dc>（${ssrInterpolate(__props.session.classroom)}）上课</dd><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<dt class="col-3" data-v-4f1db7dc>时间：</dt><dd class="col-9" data-v-4f1db7dc>逢${ssrInterpolate(__props.session.time)}</dd><dt class="col-3" data-v-4f1db7dc>對象</dt><dd class="col-9" data-v-4f1db7dc>${ssrInterpolate(__props.session.students)}</dd>`);
      if (__props.session.location) {
        _push(`<!--[--><dt class="col-3" data-v-4f1db7dc>地点</dt><dd class="col-9" data-v-4f1db7dc>${ssrInterpolate(__props.session.location)}</dd><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</dl>`);
      if (__props.isAdmin) {
        _push(ssrRenderComponent(_component_Button, {
          label: `編輯 ${__props.session.type}`,
          class: "p-button-primary p-button-sm",
          type: "submit",
          onClick: ($event) => __props.edit(__props.session)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ConfirmPopup, null, null, _parent));
      if (__props.isAdmin) {
        _push(ssrRenderComponent(_component_Button, {
          class: "p-button-danger p-button-outlined p-button-sm ml-2",
          icon: "pi pi-times",
          label: "删除",
          onClick: ($event) => confirm($event, __props.session)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</span>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ClassInfoCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ClassInfoCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4f1db7dc"]]);
const GET_CLASSES = gql`
    query GetClassesQuery {
        getClasses {
            id
            title
            type
            classroom
            time
            students
            location
            mapQuery
        }
    }
`;
const UPDATE_CLASS = gql`
    mutation updateClassMutation($details: ClassInput) {
        updateClass(details: $details) {
            id
            title
            type
            classroom
            time
            students
            location
            mapQuery
        }
    }
`;
const ADD_CLASS = gql`
    mutation addClassMutation($details: ClassInput) {
        addClass(details: $details) {
            id
            title
            type
            classroom
            time
            students
            location
            mapQuery
        }
    }
`;
const REMOVE_CLASS = gql`
    mutation removeClassMutation($classId: ID) {
        removeClass(classId: $classId) {
            id
            title
            type
            classroom
            time
            students
            location
            mapQuery
        }
    }
`;
const _sfc_main = {
  __name: "class",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const store = useMainStore();
    const { getIsAdmin } = storeToRefs(store);
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(GET_CLASSES)), __temp = await __temp, __restore(), __temp);
    const getClasses = (_a = data.value) == null ? void 0 : _a.getClasses;
    const { toggleModel } = store;
    function remove(sessionDetails) {
      console.log("remove: ", sessionDetails);
      useMutation(REMOVE_CLASS, {
        classId: sessionDetails.id
      });
    }
    function edit(sessionDetails) {
      console.log("edit: ", sessionDetails);
      const modelDetails = {
        content: sessionDetails,
        submitFunction: submitChange,
        type: "class"
      };
      toggleModel(modelDetails);
    }
    function newClassSession(classDetails) {
      useMutation(ADD_CLASS, {
        details: classDetails
      });
    }
    function updateClassSession(classDetails) {
      console.log(classDetails);
      useMutation(UPDATE_CLASS, {
        details: classDetails
      });
    }
    function submitChange(newContent) {
      console.log(newContent);
      if (newContent.classId) {
        updateClassSession(newContent);
      } else {
        newClassSession(newContent);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>常規課程及地點</h1>`);
      if (unref(getIsAdmin)) {
        _push(`<button class="btn btn-success" type="submit"> 添加課堂 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container"><div class="row"><!--[-->`);
      ssrRenderList(unref(getClasses), (session) => {
        _push(ssrRenderComponent(unref(ClassInfoCard), {
          key: session.id,
          edit,
          "is-admin": unref(getIsAdmin),
          remove,
          session
        }, null, _parent));
      });
      _push(`<!--]--></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/course/class.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=class-d47cf5ea.js.map
