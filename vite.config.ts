import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // NOTE: Vite で Build した際に発生する Uncaught ReferenceError: process is not defined エラーを回避するために追加。
    //       https://github.com/orgs/vuejs/discussions/8322
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
  build: {
    lib: {
      entry: ["./src/main.ts"],
      name: "MyWebComponents",
      fileName: (format) => `vue-web-components-example.${format}.js`
    },
  },
  plugins: [vue({
    customElement: true
  })],
})
