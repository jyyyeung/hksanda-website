import { createApp } from "vue";
import App from "./App.vue";

import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import Panel from "primevue/panel";
import Fieldset from "primevue/fieldset";
import Card from "primevue/card";
import Tag from "primevue/tag";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Timeline from "primevue/timeline";
import Image from "primevue/image";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Message from "primevue/message";
import Divider from "primevue/divider";
import Galleria from "primevue/galleria";
import ScrollPanel from "primevue/scrollpanel";

import "primeflex/primeflex.min.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primevue/resources/themes/lara-dark-indigo/theme.css";
import "vuestic-ui/dist/vuestic-ui.css";

import "./scss/_fonts.scss";

import { router } from "./router/index";
import PrimeVue from "primevue/config";
import { apolloProvider } from "./apollo/index.js";
import { VuesticPlugin } from "vuestic-ui"; // <-

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(apolloProvider);
app.use(VuesticPlugin);

app.component("InputText", InputText);
app.component("Button", Button);
app.component("Menubar", Menubar);
app.component("Panel", Panel);
app.component("Fieldset", Fieldset);
app.component("Card", Card);
app.component("Tag", Tag);
app.component("Accordion", Accordion);
app.component("AccordionTab", AccordionTab);
app.component("Timeline", Timeline);
app.component("Image", Image);
app.component("TabView", TabView);
app.component("TabPanel", TabPanel);
app.component("Message", Message);
app.component("Divider", Divider);
app.component("Galleria", Galleria);
app.component("ScrollPanel", ScrollPanel);

app.mount("#app");
