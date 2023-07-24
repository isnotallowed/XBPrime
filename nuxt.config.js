// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  build: {
    vite: false,
  },
};
