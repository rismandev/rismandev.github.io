import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/image'],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  image: {
    // Local images dari public/ tidak perlu provider khusus
    // Unsplash images (portfolio) pakai provider ipx default
    quality: 85,
    formats: ['webp', 'jpeg'],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'author', content: 'RISMANDEV - Risman Abdilah <rismandev@gmail.com>' },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { name: 'theme-color', content: '#0b1320' },
      ],
      link: [
        { rel: 'canonical', href: 'https://rismandev.site/' },
        { rel: 'shortcut icon', href: '/assets/icons/favicon.png', type: 'image/x-icon' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap',
        },
      ],
    },
  },

  nitro: {
    preset: 'static',
  },

  experimental: {
    payloadExtraction: true,
  },
})
