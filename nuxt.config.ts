export default defineNuxtConfig({
  // devtools: { enabled: true },

  app: {
    head: {
      title: 'Test Store',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      script: [],
      link: [],
      style: [],
      noscript: [],
    },
  },

  css: ['@/assets/css/global.css'],

  modules: ['@pinia/nuxt'],
});
