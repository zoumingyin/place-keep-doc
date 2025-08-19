import { defineConfig } from "vitepress";

export default defineConfig({
  title: "我的文档站",
  description: "功能齐全的 VitePress 文档",
  base: "/place-keep-doc/",
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "指南",
        items: [
          { text: "基础指南", link: "/docs/guide/" },
          { text: "进阶指南", link: "/docs/guide/advanced" },
        ],
      },
    ],
    sidebar: {
      "/docs/guide/": [
        { text: "基础指南", link: "/docs/guide/" },
        { text: "进阶指南", link: "/docs/guide/advanced" },
      ],
    },
    search: {
      provider: "local", // 可替换为 algolia 配置
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/zoumingyin/place-keep-doc" },
    ],
    darkModeSwitchLabel: "Appearance",
    // --- 页面底部的 "在 GitHub 上编辑此页" ---
    editLink: {
      pattern:
        "https://github.com/zoumingyin/place-keep-doc/edit/main/docs/:path", // 请替换
      text: "在 GitHub 上编辑此页面",
    },

    // --- 最后更新时间 ---
    lastUpdated: { text: "Last updated" }, // 启用
    lastUpdatedText: "最后更新于", // 显示的文本

    // --- 页脚 ---
    footer: {
      message: "基于 MIT 许可发布",
      copyright: "Copyright © 2024-present zoumingyin",
    },
  },
});
