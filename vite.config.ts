import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
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
