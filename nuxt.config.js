// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  css: ["~/assets/css/main.css"],
  vite: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
};
