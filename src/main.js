import { createApp } from "vue";
import App from "./App.vue";

import Button from "primevue/button";
import Menubar from "primevue/menubar";
import Timeline from "primevue/timeline";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import ScrollPanel from "primevue/scrollpanel";
import Breadcrumb from "primevue/breadcrumb";
import Card from "primevue/card";

import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-teal/theme.css";

import "bootstrap/scss/bootstrap.scss";

// import "./scss/app.scss";
import "./scss/style.scss";
// import "./scss/_fonts.scss";

import { router } from "./router/index";
import PrimeVue from "primevue/config";
import { apolloProvider } from "./apollo/index.js";
import SvgIcon from "@jamescoyle/vue-icon";
import MasonryWall from "@yeger/vue-masonry-wall";
import Markdown from "vue3-markdown-it";
import "bootstrap";

import { createMetaManager, plugin as metaPlugin } from "vue-meta";
const metaManager = createMetaManager();

const app = createApp(App);

app.use(router);
app.use(metaManager);
app.use(metaPlugin);
app.use(PrimeVue, { ripple: true });
app.use(apolloProvider);
app.use(MasonryWall);
app.use(VueSidebarMenu);

app.component("MarkdownBase", Markdown);

app.component("Button", Button);
app.component("Menubar", Menubar);
app.component("Timeline", Timeline);
app.component("Image", Image);
app.component("TabView", TabView);
app.component("TabPanel", TabPanel);
app.component("ScrollPanel", ScrollPanel);
app.component("Breadcrumb", Breadcrumb);
app.component("Card", Card);

app.component("SvgIcon", SvgIcon);

app.mount("#app");
