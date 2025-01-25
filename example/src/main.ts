import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import 'h-copy-label/dist/h-copy-label.css';

createApp(App)
  .use(vuetify)
  .mount('#app')
