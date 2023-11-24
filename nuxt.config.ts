// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
  },
  css: [
      '@/assets/css/style.css',
  ],
  modules: [
    '@pinia/nuxt',
    [
      '@nuxtjs/i18n',
      { 
        vueI18n: './i18n.config.ts',
        defaultLocale: 'en',
        locales: [
          {
            code: 'en',
            name: 'EN'
          },
          {
            code: 'it',
            name: 'IT'
          }
        ],
        detectBrowserLanguage: {
          useCookie: true,
          cookieCrossOrigin: true
        }
      }
    ]
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
})
