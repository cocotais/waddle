/**
 * Vite配置文件
 */

import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  // 插件引入
  plugins: [
    // 简单配置Vue当中的设置
    vue({
      template: {
        compilerOptions: {
          // 添加自定义html标签，这些标签在解析的时候不会作为Vue标签解析
          isCustomElement: (tag) =>
            ["field", "block", "category", "xml", "mutation", "value", "sep", "shadow", "iconpark-icon"].includes(tag),
        },
      },
    }),
    // 部分静态文件复制
    viteStaticCopy({
      targets: [
        {
          src: fileURLToPath(new URL("./src/icon/logo/waddle2mini.png", import.meta.url)),
          dest: "./",
        },
        {
          src: fileURLToPath(new URL("./src/icon/logo/favicon.ico", import.meta.url)),
          dest: "./",
        },
        {
          src: fileURLToPath(new URL("./node_modules/blockly/media/*", import.meta.url)),
          dest: "media",
        },
        {
          src: fileURLToPath(new URL("./src/tutorials/*", import.meta.url)),
          dest: "tutorials",
        },
        {
          src: fileURLToPath(new URL("./src/codespace/react.development.js", import.meta.url)),
          dest: "react",
        },
        {
          src: fileURLToPath(new URL("./src/codespace/react-dom.development.js", import.meta.url)),
          dest: "react",
        },
        {
          src: fileURLToPath(new URL("./src/codespace/preview.html", import.meta.url)),
          dest: "react",
        },
        {
          src: fileURLToPath(new URL("./src/icon/logo/waddle2.svg", import.meta.url)),
          dest: "./",
        },
      ],
    }),
    // vite-plugin-pwa配置，可以查看 https://vite-pwa-org.netlify.app/guide/ 获得配置详情
    VitePWA({
      mode: "production",
      base: "/",
      registerType: "prompt",
      injectRegister: "auto",
      // 配置Service Worker当中的Workbox
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "waddle-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 1.5,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      // 设置manifest.json文件，PWA简介
      manifest: {
        name: "Waddle",
        short_name: "Waddle",
        description: "让CoCo没有难做的控件",
        theme_color: "#6d50f0",
        start_url: "/",
        id: "waddle",
        icons: [
          {
            src: "favicon.ico",
            sizes: "256x256",
            type: "image/x-icon",
          },
          {
            src: "waddle2.svg",
            type: "image/svg+xml",
            sizes: "any",
            purpose: "any",
          }
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});