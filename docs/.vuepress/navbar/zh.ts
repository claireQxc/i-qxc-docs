import { navbar } from "vuepress-theme-hope";

export const zh = navbar([
  "/zh/",
  "/zh/home",
  { text: "使用指南", icon: "creative", link: "/zh/guide/" },
  {
    text: "博文",
    icon: "edit",
    prefix: "/zh/posts/",
    children: [
      {
        text: "微前端",
        icon: "edit",
        prefix: "microfrontends/",
        children: [
          {
            text: "singlespa",
            icon: "edit",
            link: "singlespa/start"
          },
          "prepare"
        ],
      },
      {
        text: "nginx",
        icon: "edit",
        link: "nginx/start"
      }
    ],
  },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
