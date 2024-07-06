// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import AutoImport from "file:///C:/Users/hazem/Desktop/Techiffy/Vimi-Dashboard/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/hazem/Desktop/Techiffy/Vimi-Dashboard/node_modules/unplugin-vue-components/dist/vite.js";
import { defineConfig } from "file:///C:/Users/hazem/Desktop/Techiffy/Vimi-Dashboard/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/hazem/Desktop/Techiffy/Vimi-Dashboard/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/hazem/Desktop/Techiffy/Vimi-Dashboard/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "./auto-imports.d.ts",
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json"
      },
      dirs: [
        "./composables",
        "src/components",
        "./components/**",
        "./composables/**",
        "./constants",
        "./constants/**"
      ]
    }),
    Components({
      dts: true,
      dirs: [
        "./src/components",
        "./components/**",
        "./composables/**",
        "./constants",
        "./constants/**"
      ]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxoYXplbVxcXFxEZXNrdG9wXFxcXFRlY2hpZmZ5XFxcXFZpbWktRGFzaGJvYXJkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxoYXplbVxcXFxEZXNrdG9wXFxcXFRlY2hpZmZ5XFxcXFZpbWktRGFzaGJvYXJkXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9oYXplbS9EZXNrdG9wL1RlY2hpZmZ5L1ZpbWktRGFzaGJvYXJkL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlXCI7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSxcclxuICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICBpbXBvcnRzOiBbJ3Z1ZScsICd2dWUtcm91dGVyJ10sXHJcbiAgICAgIGR0czogJy4vYXV0by1pbXBvcnRzLmQudHMnLFxyXG4gICAgICBlc2xpbnRyYzoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgZmlsZXBhdGg6IFwiLi8uZXNsaW50cmMtYXV0by1pbXBvcnQuanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBkaXJzOiBbXHJcbiAgICAgICAgJy4vY29tcG9zYWJsZXMnLFxyXG4gICAgICAgICdzcmMvY29tcG9uZW50cycsXHJcbiAgICAgICAgJy4vY29tcG9uZW50cy8qKicsXHJcbiAgICAgICAgJy4vY29tcG9zYWJsZXMvKionLFxyXG4gICAgICAgICcuL2NvbnN0YW50cycsXHJcbiAgICAgICAgJy4vY29uc3RhbnRzLyoqJyxcclxuICAgICAgXSxcclxuICAgIH0pLFxyXG4gICAgQ29tcG9uZW50cyh7XHJcbiAgICAgIGR0czogdHJ1ZSxcclxuICAgICAgZGlyczogW1xyXG4gICAgICAgICcuL3NyYy9jb21wb25lbnRzJyxcclxuICAgICAgICAnLi9jb21wb25lbnRzLyoqJyxcclxuICAgICAgICAnLi9jb21wb3NhYmxlcy8qKicsXHJcbiAgICAgICAgJy4vY29uc3RhbnRzJyxcclxuICAgICAgICAnLi9jb25zdGFudHMvKionLFxyXG4gICAgICBdLFxyXG4gICAgfSlcclxuXHJcblxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1UsU0FBUyxlQUFlLFdBQVc7QUFDM1csT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBSitMLElBQU0sMkNBQTJDO0FBT2hRLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFdBQVc7QUFBQSxNQUNULFNBQVMsQ0FBQyxPQUFPLFlBQVk7QUFBQSxNQUM3QixLQUFLO0FBQUEsTUFDTCxVQUFVO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsTUFDWjtBQUFBLE1BQ0EsTUFBTTtBQUFBLFFBQ0o7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxRQUNKO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUdIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
