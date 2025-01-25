# Component Name
  HCopyLabel

# Features

- First, this is a text label.
- Then, when being clicked, the text is copied to the clipboard and the text shows a heartbeat animation effect.

# Dependencies
  `"vuetify": "^3.7.7"`

# Usage Notes 🚨
You must do the following steps to get full functionality of this component:
1. Install and config `vuetify` in the host project
   - install `vuetify`

     ```shell
     npm install vuetify -S
     npm install scss -D
     ```

   - config `Vuetify`
     create the file `vuetify.ts` under the directory `src/plugins`
     ```typescript
     import { createVuetify } from 'vuetify'
     import * as components from 'vuetify/components'
     import * as directives from 'vuetify/directives'
     
     export default createVuetify({
       components,
       directives,
     })
     ```

   - import `vuetify` in `main.ts`

     ```typescript
     import { createApp } from 'vue';
     import './style.css';
     import App from './App.vue';
     import vuetify from './plugins/vuetify';
     
     createApp(App)
       .use(vuetify)
       .mount('#app')
     ```

2. Install and config `h-copy-label` in the host project
   - install `h-copy-label`
     ```shell
     npm install h-copy-label -S
     ```

   - use the component `h-copy-label` in the parent component
     ```vue
     <script setup lang="ts">
     import HCopyLabel from 'h-copy-label';
     </script>
     
     <template>
       <HCopyLabel text="Hill debug - this is my label text"></HCopyLabel>
     </template>
     ```

