/**
 * Vite配置文件
 */

import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { normalizePath } from "vite";
import path from "node:path";

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
          src: normalizePath(path.resolve(__dirname, "./src/icon/logo/waddle2mini.png")),
          dest: "./",
        },
        {
          src: normalizePath(path.resolve(__dirname, "./src/icon/logo/favicon.ico")),
          dest: "./",
        },
        {
          src: normalizePath(path.resolve(__dirname, "./node_modules/blockly/media/*")),
          dest: "media",
        },
        {
          src: normalizePath(path.resolve(__dirname, "./src/tutorials/*")),
          dest: "tutorials",
        },
        {
          src: normalizePath(path.resolve(__dirname, "./src/codespace/react.development.js")),
          dest: "react",
        },
        {
          src: normalizePath(path.resolve(__dirname, "./src/codespace/react-dom.development.js")),
          dest: "react",
        },
        {
          src: normalizePath(path.resolve(__dirname, "./src/codespace/preview.html")),
          dest: "react",
        },
        {
          src: normalizePath(path.resolve(__dirname, "./src/icon/logo/waddle2.svg")),
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
          },
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
