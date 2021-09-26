export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'อุทยานแห่งชาติหาดนพรัตน์ธารา-หมู่เกาะพีพี',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'อุทยานแห่งชาติหาดนพรัตน์ธารา-หมู่เกาะพีพี สำนักบริหารพื้นที่อนุรักษ์ที่ 5 (นครศรีธรรมราช) กรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Nopparat Thara Beach - Phi Phi Islands National Park, Conservation Area Administration Office 5 (Nakhon Si Thammarat), Nopparat Thara Beach, Shell Cemetery, Aonang ,Talae Waek, Open Sea, Poda Islands, Phi Phi Islands, Mai Phai Island, Phi Phi Ley Island, Viking Cave or Phaya Nak Cave, Phi Phi Don Island, Khao Ngon Nak Nature Trail',
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        name: 'og:title',
        content:
          'อุทยานแห่งชาติหาดนพรัตน์ธารา-หมู่เกาะพีพี - Nopparat Thara Beach - Phi Phi Islands National Park',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: `${$config.baseURL}` + '/ogimage.png',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `${$config.baseURL}` + '/logo-notext.png',
      },
    ],
    script: [
      // {src: 'https://kit.fontawesome.com/4db6b32bd3.js', crossorigin: "anonymous" }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/css/tailwind.css', lang: 'css' }],

  router: {
    // linkActiveClass: '',
    // linkExactActiveClass: ''
    // text-gray-900 bg-gray-200
    base: `${$config.baseURL}`
  },

  publicRuntimeConfig: {
    baseURL: "/web/mnre"
    // baseURL: '',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/vue-video-background',
      ssr: false,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],

  //i18n
  i18n: {
    locales: [
      {
        code: 'th',
        name: 'ภาษาไทย',
      },
      {
        code: 'en',
        name: 'English',
      },
    ],
    defaultLocale: 'th',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        th: require('./assets/lang/th.json'),
        en: require('./assets/lang/en.json'),
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

}
