# 组件名
HCopyLabel

# 功能

- 首先, 这是一个文本标签。
- 其次, 当它被点击时，文本被复制到剪贴板，并且展现一个心跳动画效果

# 依赖
`"vuetify": "^3.7.7"`

# 构建
`npm run build`

# 发布
```shell
npm login
npm publish
```

# 用法 🚨
你必须执行以下步骤来获得这个组件的完全功能
1. 宿主项目必须安装和配置vuetify
   - 安装 vuetify
     
     ```shell
     npm install vuetify -S
     npm install @mdi/font -S
     npm install scss -D
     ```

   - 配置 Vuetify
     在`src/plugins`目录下创建一个`vuetify.ts`文件
     ```typescript
     import "@mdi/font/css/materialdesignicons.css";
     import 'vuetify/dist/vuetify.min.css';
     import { createVuetify } from 'vuetify';
     import * as components from 'vuetify/components';
     import * as directives from 'vuetify/directives';
     
     export default createVuetify({
       components,
       directives,
     })
     ```
   
   - 在main.ts中引入vuetify

     ```typescript
     import { createApp } from 'vue';
     import './style.css';
     import App from './App.vue';
     import vuetify from './plugins/vuetify';
     
     createApp(App)
       .use(vuetify)
       .mount('#app')
     ```

2. 在宿主项目中安装和配置h-copy-label组件
   - 安装 h-copy-label 组件
     ```shell
     npm install h-copy-label -S
     ```

   - 在父组件中使用h-copy-label组件
     ```vue
     <script setup lang="ts">
     import HCopyLabel from 'h-copy-label';
     </script>
     
     <template>
       <HCopyLabel text="Hello HCopyLabel A"/><br>
       <HCopyLabel text="Hello HCopyLabel B"/><br>
       <HCopyLabel text="Hello HCopyLabel C"/>
     </template>
     ```
