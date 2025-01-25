import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from "unplugin-auto-import/vite";
import { fileURLToPath, URL } from "node:url";
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
      dts: 'src/auto-import.d.ts',  // ⚠️ 特别注意：生成的文件放于src目录下，默认放在根目录可能会导致不生效
    }),

    dts({
      // ⚠️ 特别注意：指定 tsconfig 文件. 原因：https://blog.csdn.net/Wrysmile0308/article/details/134318030
      tsconfigPath: 'tsconfig.app.json',

      // ⚠️ 特别注意：在写入文件之前修改文件名。来移除 .vue 后缀
      // beforeWriteFile: (filePath: string, content: string) => {
      //   // 移除文件名中的 .vue 后缀
      //   if (filePath.endsWith('.vue.d.ts')) {
      //     const newFilePath = filePath.replace('.vue.d.ts', '.d.ts');
      //     return {
      //       filePath: newFilePath,
      //       content,
      //     };
      //   }
      //   return { filePath, content };
      // },

      rollupTypes: true, // ⚠️特别提醒：如果启用了类型合并，请不要使用 beforeWriteFile 来修改文件名，否则会因找不到文件而合并为空结果
    }),
  ],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./", import.meta.url)),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@data": fileURLToPath(new URL("./src/data", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/HCopyLabel.vue'),
      name: 'HCopyLabel',
      fileName: (format) => `h-copy-label.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'vuetify'],
      output: {
        globals: {
          vue: 'Vue',
          vuetify: 'Vuetify'
        }
      }
    }
  }
})
