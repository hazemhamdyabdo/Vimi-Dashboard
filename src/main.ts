import { createApp } from 'vue';
import { createPinia } from 'pinia';
import vuetify from '@/plugins/vuetify/index';
import i18n from './plugins/i18n';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { useUserStore } from '@/stores/user.state.js';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.component('Editor', QuillEditor);
app.use(router).use(vuetify).use(i18n);

router.beforeEach((to, _from, next) => {
  const userStore = useUserStore();
  if (to.name !== 'login' && !userStore.isLoggedIn) next({ name: 'login' });
  else if (to.name === 'login' && userStore.isLoggedIn) {
    next('/dashboard');
  } else next();
});

app.mount('#app');
