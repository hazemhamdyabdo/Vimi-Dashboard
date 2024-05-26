import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: './auto-imports.d.ts',
       eslintrc: {       
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
      },
        dirs: [
    './composables' ,
    './composables/**', 
  ],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
