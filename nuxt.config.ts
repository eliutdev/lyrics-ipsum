import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-3XS4570LMR",
        async: true,
      },
    ],
  },
});
