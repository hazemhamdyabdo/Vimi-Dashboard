import { createApp } from "vue";
import { createPinia } from "pinia";
import vuetify from "@/plugins/vuetify/index";
import i18n from "./plugins/i18n";
import { QuillEditor } from "@vueup/vue-quill";
import '@vueup/vue-quill/dist/vue-quill.snow.css';


import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.component("Editor", QuillEditor);
app.use(router).use(vuetify).use(i18n);

app.mount("#app");

