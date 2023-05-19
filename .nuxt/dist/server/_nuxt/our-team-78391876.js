import { g as gql, u as useAsyncQuery, a as useMainStore, s as storeToRefs, b as useMutation } from "../server.mjs";
import { withAsyncContext, resolveComponent, mergeProps, unref, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
const GET_INSTRUCTORS = gql`
    query GetInstructorsQuery {
        getInstructors {
            id
            name
            strengths
            certificates
            experiences
        }
    }
`;
const UPDATE_INSTRUCTOR = gql`
    mutation updateInstructorMutation($instructor: InstructorInput) {
        updateInstructor(instructor: $instructor) {
            id
            name
            strengths
            certificates
            experiences
        }
    }
`;
const ADD_INSTRUCTOR = gql`
    mutation addInstructorMutation($instructor: InstructorInput) {
        addInstructor(instructor: $instructor) {
            id
            name
            strengths
            certificates
            experiences
        }
    }
`;
const REMOVE_INSTRUCTOR = gql`
    mutation removeInstructorMutation($instructorId: ID) {
        removeInstructor(instructorId: $instructorId) {
            id
            name
            strengths
            certificates
            experiences
        }
    }
`;
const GET_RANKINGS = gql`
    query GetRankingsQuery {
        getRankings {
            id
            name
            awardees
        }
    }
`;
gql`
    mutation updateRankMutation($details: RankInput) {
        updateRanking(details: $details) {
            id
            name
            awardees
        }
    }
`;
const ourTeam_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "our-team",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c;
    let __temp, __restore;
    const getInstructorsResponse = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(GET_INSTRUCTORS)), __temp = await __temp, __restore(), __temp);
    const getInstructors = (_b = (_a = getInstructorsResponse.data) == null ? void 0 : _a.value) == null ? void 0 : _b.getInstructors;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(GET_RANKINGS)), __temp = await __temp, __restore(), __temp);
    const getRankings = (_c = data == null ? void 0 : data.value) == null ? void 0 : _c.getRankings;
    const store = useMainStore();
    const { getIsAdmin } = storeToRefs(store);
    const { toggleModel } = store;
    function remove(instructorDetails) {
      console.log("remove: ", instructorDetails);
      useMutation(REMOVE_INSTRUCTOR, {
        instructorId: instructorDetails.id
      });
    }
    function edit(instructorDetails) {
      console.log("edit: ", instructorDetails);
      const modelDetails = {
        content: {
          ...instructorDetails,
          certificates: instructorDetails.certificates ? instructorDetails.certificates.join("\n") : "",
          experiences: instructorDetails.experiences ? instructorDetails.experiences.join("\n") : ""
        },
        submitFunction: submitChange,
        type: "instructor"
      };
      toggleModel(modelDetails);
    }
    function newInstructor(instructorDetails) {
      console.log("new instructor", instructorDetails);
      useMutation(
        ADD_INSTRUCTOR,
        {
          instructor: {
            ...instructorDetails,
            certificates: instructorDetails.certificates != null ? instructorDetails.certificates.split("\n") : "",
            experiences: instructorDetails.experiences != null ? instructorDetails.experiences.split("\n") : ""
          }
        }
      );
    }
    function updateInstructor(instructorDetails) {
      console.log("update instructor", instructorDetails);
      useMutation(
        UPDATE_INSTRUCTOR,
        {
          instructor: {
            ...instructorDetails,
            certificates: instructorDetails.certificates != null ? instructorDetails.certificates.split("\n") : "",
            experiences: instructorDetails.experiences != null ? instructorDetails.experiences.split("\n") : ""
          }
        }
      );
    }
    function submitChange(editedInstructor) {
      console.log(editedInstructor);
      if (editedInstructor.instructorId) {
        updateInstructor(editedInstructor);
      } else {
        newInstructor(editedInstructor);
      }
    }
    function confirm(event, instructor) {
      this.$confirm.require({
        target: event.currentTarget,
        message: `你确定要删除 ${instructor.name} 吗？`,
        icon: "pi pi-info-circle",
        acceptClass: "p-button-danger",
        accept: () => {
          remove(instructor);
          this.$toast.add({
            severity: "info",
            summary: "成功",
            detail: `已成功删除 ${instructor.name}`,
            life: 3e3
          });
        },
        reject: () => {
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = resolveComponent("Button");
      const _component_ConfirmPopup = resolveComponent("ConfirmPopup");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h1>專業教練團隊</h1>`);
      if (unref(getIsAdmin)) {
        _push(`<button class="btn btn-success" type="submit"> 添加教练 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="row"><!--[-->`);
      ssrRenderList(unref(getInstructors), (instructor) => {
        _push(`<div class="col-lg-6 my-2"><div class="card"><div class="card-body"><h2 class="card-title">${ssrInterpolate(instructor.name)}</h2><h5 class="card-subtitle mb-2 text-muted">${ssrInterpolate(instructor.strengths)}</h5><!--[-->`);
        ssrRenderList(instructor.certificates, (cert, i) => {
          _push(`<p class="card-text">${ssrInterpolate(cert)}</p>`);
        });
        _push(`<!--]--></div>`);
        if (instructor.experiences || unref(getIsAdmin)) {
          _push(`<div class="card-footer"><!--[-->`);
          ssrRenderList(instructor.experiences, (experience) => {
            _push(`<p>${ssrInterpolate(experience)}</p>`);
          });
          _push(`<!--]-->`);
          if (unref(getIsAdmin)) {
            _push(ssrRenderComponent(_component_Button, {
              label: `編輯 ${instructor.name}`,
              class: "p-button-primary p-button-sm",
              type: "submit",
              onClick: ($event) => edit(instructor)
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_ConfirmPopup, null, null, _parent));
          if (unref(getIsAdmin)) {
            _push(ssrRenderComponent(_component_Button, {
              class: "p-button-danger p-button-outlined p-button-sm ml-2",
              icon: "pi pi-times",
              label: "删除",
              onClick: ($event) => confirm($event, instructor)
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><hr><h1>持有認可實用自衛散打段位證書</h1><!--[-->`);
      ssrRenderList(unref(getRankings), (rank) => {
        _push(`<div><h2>${ssrInterpolate(rank.name)}</h2>`);
        if (unref(getIsAdmin)) {
          _push(`<button class="btn btn-success" type="submit"> 编辑 ${ssrInterpolate(rank.name)} 学员 </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="row"><!--[-->`);
        ssrRenderList(rank.awardees, (awardee) => {
          _push(`<div class="tag m-2 rank_tag">${ssrInterpolate(awardee)}</div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/our-team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=our-team-78391876.js.map
