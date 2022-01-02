import { createApp } from "vue";
import App from "./App.vue";

import { router } from "./router/index";
import PrimeVue from "primevue/config";

import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import Panel from "primevue/panel";
import Fieldset from "primevue/fieldset";

import "primeflex/primeflex.min.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primevue/resources/themes/mdc-dark-deeppurple/theme.css";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });

app.component("InputText", InputText);
app.component("Button", Button);
app.component("Menubar", Menubar);
app.component("Panel", Panel);
app.component("Fieldset", Fieldset);

app.mount("#app");
