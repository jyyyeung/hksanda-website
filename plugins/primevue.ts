
import PrimeVue from "primevue/config";
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
import Menu from "primevue/menu";
import Carousel from "primevue/carousel";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });

  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("Menubar", Menubar);
  nuxtApp.vueApp.component("Timeline", Timeline);
  nuxtApp.vueApp.component("TabView", TabView);
  nuxtApp.vueApp.component("TabPanel", TabPanel);
  nuxtApp.vueApp.component("ScrollPanel", ScrollPanel);
  nuxtApp.vueApp.component("Card", Card);
  nuxtApp.vueApp.component("Dropdown", Dropdown);
  nuxtApp.vueApp.component("Dialog", Dialog);
  nuxtApp.vueApp.component("DeferredContent", DeferredContent);
  nuxtApp.vueApp.component("Chips", Chips);
  nuxtApp.vueApp.component("ConfirmPopup", ConfirmPopup);
  nuxtApp.vueApp.component("Toast", Toast);
  nuxtApp.vueApp.component("Textarea", Textarea);
  nuxtApp.vueApp.component("InputText", InputText)
  nuxtApp.vueApp.component("Carousel", Carousel)
  nuxtApp.vueApp.component("Menu", Menu)

  nuxtApp.vueApp.use(ConfirmationService);
  nuxtApp.vueApp.use(ToastService);
});
