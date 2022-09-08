import {s2t_HTMLConvertHandler, t2s_HTMLConvertHandler} from "@/helpers/i18n";

import {createStore} from "vuex";
import {apolloProvider} from "@/apollo/index.js";
import {GET_VIEW, UPDATE_VIEW} from "@/apollo/view";
import {GET_MASONRY_BY_ID} from "@/apollo/masonry";

import MarkdownIt from "markdown-it";

const md = new MarkdownIt().set({
    html: true,
    linkify: true,
    typographer: true,
    xhtmlOut: true,
});

const apollo = apolloProvider.defaultClient;

const parseMarkdown = (content) => {
    const markdown = md.render(content);
    return markdown.replace(/(li>\n)/gm, "li>").replace(/(ul>\n)/gm, "ul>");
};

// Create a new store instance.
export const store = createStore({
    state: {
        lang: "zh-HK",
        isAdmin: process.env.NODE_ENV === 'development',
        openModel: false,
        editModel: {},
    },

    getters: {
        getLang: (state) => {
            return state.lang;
        },
        getViewByRoute: (state) => (route) => {
            return (
                state.views && state.views.find((view) => view.route === route)
            );
        },
        getMasonries: (state) => {
            return state.masonries;
        },
        isAdmin: (state) => {
            return state.isAdmin;
        },
        modelIsOpen: (state) => {
            return state.openModel;
        },
        getModelDetails: (state) => {
            let modelDetails = Object.assign({}, state.editModel);
            switch (state.editModel.type) {
            case "carousel": {
                break;
            }
            case "course": {
                modelDetails.content = {
                    name: modelDetails.content.name,
                    content: parseMarkdown(modelDetails.content.content),
                };
                break;
            }
            case "class": {
                modelDetails.content = {
                    classId: modelDetails.content.id,
                    title: modelDetails.content.title,
                    type: modelDetails.content.type,
                    time: modelDetails.content.time,
                    students: modelDetails.content.students,
                    location: modelDetails.content.location,
                    mapQuery: modelDetails.content.mapQuery,
                    classroom: modelDetails.content.classroom,
                };
                break;
            }
            case "instructor": {
                modelDetails.content = {
                    instructorId: modelDetails.content.id,
                    name: modelDetails.content.name,
                    strengths: modelDetails.content.strengths,
                    certificates: modelDetails.content.certificates,
                    experiences: modelDetails.content.experiences,
                };
                break;
            }
            case "rank": {
                modelDetails.content = {
                    rankId: modelDetails.content.id,
                    name: modelDetails.content.name,
                    awardees: modelDetails.content.awardees,
                };
                break;
            }
            default: {
                modelDetails.type = "text";
                modelDetails.content = parseMarkdown(modelDetails.content);
                break;
            }
            }
            return modelDetails;
        },
    },
    mutations: {
        SET_LANG: (state, lang) => {
            state.lang = lang;
        },
        SET_COURSE_CONTENT: (state, courseContent) => {
            state.courseContent = courseContent;
        },
        SET_VIEW: (state, view) => {
            state.views = view;
        },
        SET_CONTACTS: (state, contacts) => {
            state.contacts = contacts;
        },
        SET_INTERVIEWS: (state, interviews) => {
            state.interviews = interviews;
        },
        SET_MASONRIES: (state, masonries) => {
            state.masonries = masonries;
        },
        TOGGLE_MODEL_STATE: (state) => {
            state.openModel = !state.openModel;
            if (!state.openModel) {
                const defaultModel = {
                    submitFunction: () => {
                    },
                    content: "",
                };
                state.editModel = defaultModel;
            }
        },
        SET_EDIT_MODEL: (state, editDetails) => {
            state.editModel = Object.assign({}, editDetails);
        },
        SET_IS_ADMIN: (state) => {
            state.isAdmin = true;
        },
    },
    actions: {
        setLang: ({commit, state}, lang) => {
            commit("SET_LANG", lang);
            return state.lang;
        },
        localizePage: ({state}) => {
            state.lang === "zh-CN"
                ? t2s_HTMLConvertHandler.convert()
                : s2t_HTMLConvertHandler.convert();
        },
        getView: async ({commit}) => {
            const view = await apollo.query({
                query: GET_VIEW,
            });

            commit("SET_VIEW", view.data.getView);
        },
        getMasonry: async ({commit}, masonryId) => {
            const masonries = await apollo.query({
                query: GET_MASONRY_BY_ID,
                variables: {id: masonryId},
            });
            commit("SET_MASONRIES", masonries.data.getMasonry);
        },
        toggleModel: ({commit}, editDetails = {}) => {
            commit("SET_EDIT_MODEL", editDetails);
            commit("TOGGLE_MODEL_STATE");
        },
        updateView: async (_, newView) => {
            await apollo.mutate({
                mutation: UPDATE_VIEW,
                variables: {details: newView},
            });
        },
        setIsAdmin: ({commit}) => {
            commit("SET_IS_ADMIN");
        },
    },
});
