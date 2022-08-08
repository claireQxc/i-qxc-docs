import { navbar } from "vuepress-theme-hope";

export const en = navbar([
  "/en/",
  "/en/home",
  { text: "Guide", icon: "creative", link: "/en/guide/" },
  {
    text: "Posts",
    icon: "edit",
    prefix: "/en/posts/",
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
    text: "Theme Docs",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/",
  },
]);
