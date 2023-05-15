import {createApp} from "vue";
import App from "./App.vue";

import Button from "primevue/button";
import Menubar from "primevue/menubar";
import Timeline from "primevue/timeline";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import ScrollPanel from "primevue/scrollpanel";
import Card from "primevue/card";
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown";
import DeferredContent from "primevue/deferredcontent";
import Chips from "primevue/chips";
import ConfirmPopup from 'primevue/confirmpopup';
import Toast from 'primevue/toast';
import Textarea from "primevue/textarea";
import InputText from "primevue/inputtext";
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-teal/theme.css";
import "primeflex/primeflex.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

import {router} from "./router/index.js";
import PrimeVue from "primevue/config";
import {apolloProvider} from "./apollo/index.js";
import MasonryWall from "@yeger/vue-masonry-wall";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";
import {QuillEditor} from "@vueup/vue-quill";

import {createMetaManager, plugin} from "vue-meta";
import {store} from "./store";
import "./scss/style.scss";


const metaManager = createMetaManager();

const app = createApp(App);

app.use(store);
app.use(router);
app.use(metaManager);
app.use(plugin);
app.use(PrimeVue, {ripple: true});
app.use(apolloProvider);
app.use(MasonryWall);
app.use(VueSidebarMenu);
app.use(mdiVue, {
    icons: mdijs,
});
app.use(ConfirmationService);
app.use(ToastService);

const globalOptions = {
    // debug: "info",
    toolbar: "minimal",
    theme: "snow",
};
// set default globalOptions prop
QuillEditor.props.globalOptions.default = () => globalOptions;

app.component("QuillEditor", QuillEditor);

app.component("Button", Button);
app.component("Menubar", Menubar);
app.component("Timeline", Timeline);
app.component("Image", Image);
app.component("TabView", TabView);
app.component("TabPanel", TabPanel);
app.component("ScrollPanel", ScrollPanel);
app.component("Card", Card);
app.component("Dropdown", Dropdown);
app.component("Dialog", Dialog);
app.component("DeferredContent", DeferredContent);
app.component("Chips", Chips);
app.component("ConfirmPopup", ConfirmPopup);
app.component("Toast", Toast);
app.component("Textarea", Textarea);
app.component("InputText", InputText)

app.mount("#app");
