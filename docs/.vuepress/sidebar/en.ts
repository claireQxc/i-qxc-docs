import { sidebar } from "vuepress-theme-hope";

export const en = sidebar({
  "/en/": [
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
      text: "Posts",
      icon: "note",
      prefix: "posts/",
      children: [
        {
          text: "Microfrontends",
          icon: "note",
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
          text: "Nginx",
          icon: "note",
          prefix: "nginx/",
          children: ["start"],
        },
      ],
    },
  ],
});
