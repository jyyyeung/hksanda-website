// import { s2t_HTMLConvertHandler, t2s_HTMLConvertHandler } from "@/helpers/i18n";

// import { apolloProvider } from "@/apollo/index.js";
import {GET_VIEW, UPDATE_VIEW} from "@/apollo/view";
import {GET_MASONRY_BY_ID} from "@/apollo/masonry";

import MarkdownIt from "markdown-it";
import {StoreDefinition} from "pinia";

const md = new MarkdownIt().set({
    html: true,
    linkify: true,
    typographer: true,
    xhtmlOut: true,
});

// const apollo = apolloProvider.defaultClient;

const parseMarkdown = (content) => {
    const markdown = md.render(content);
    return markdown.replace(/(li>\n)/gm, "li>").replace(/(ul>\n)/gm, "ul>");
};

// Create a new store instance.
export const useMainStore: StoreDefinition = defineStore("main", {
    state: () => ({
        lang: "zh-HK",
        isAdmin: process.env.NODE_ENV === 'development',
        openModel: false,
        editModel: {type: "",},
        views: [],
        masonries: [],
        route: "",
    }),
    getters: {
        getLang: (state) => {
            return state.lang;
        },
        getViewByRoute: (state) => (route: string) => {
            return (
                state.views && state.views.find((view) => view.route === route)
            );
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
    actions: {
        setLang(lang: string) {
            this.lang = lang;
            return this.lang;
        },
        localizePage() {
            // this.lang === "zh-CN"
            //     ? t2s_HTMLConvertHandler.convert()
            //     : s2t_HTMLConvertHandler.convert();
        },
        async getView() {
            const {data} = await useAsyncQuery(GET_VIEW);

            console.log("getView", data)
            this.views = data.value?.getView;
        },
        getMasonry(masonryId: number) {

            const {result} = useQuery(GET_MASONRY_BY_ID, {id: masonryId});
            // console.log("getMasonry", data);


            this.masonries = result.value.getMasonry;
        },
        toggleModel(editDetails = {}) {
            this.editModel = Object.assign({}, editDetails);

            this.openModel = !this.openModel;
            if (!this.openModel) {
                const defaultModel = {
                    submitFunction: () => {
                    },
                    content: "",
                };
                this.editModel = defaultModel;
            }

        },
        async updateView(newView) {
            // await apollo.mutate({
            //     mutation: UPDATE_VIEW,
            //     variables: { details: newView },
            // });
            const {mutate} = useMutation(UPDATE_VIEW, {details: newView});
            console.log(mutate);
        },
        setIsAdmin() {
            this.isAdmin = true;
        },
        // setCourseContent(courseContent) {
        //     this.courseContent = courseContent;
        // },
        // setContacts(contacts) {
        //     this.contacts = contacts;
        // },
        // setInterviews(interviews) {
        //     this.interviews = interviews;
        // },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
}
