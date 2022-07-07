import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/": [
    "",
    "home",
    "slide",
    {
      icon: "creative",
      text: "Guide",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "Microfrontends",
      icon: "note",
      prefix: "microfrontends/",
      children: ["prepare", "singlespa", "qiankun", "slefqiankun"]
    },
  ],
});
