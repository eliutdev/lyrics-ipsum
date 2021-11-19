import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      },
      {
        name: "description",
        content: "The Lorem Ipsum Generator for Lyrics",
      },
      {
        name: "keywords",
        content: "lyrics, generator, ipsum, lorem, text, generator",
      },
      {
        name: "author",
        content: "Lyrics Ipsum",
      },
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-3XS4570LMR",
        async: true,
      },
    ],
  },
});
