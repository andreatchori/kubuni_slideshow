export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    generate: {
        fallback: true
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Kubuni',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-png', href: '/logo--kubuni.png' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/scss/style.scss'
    ],

    router: {
        linkExactActiveClass: 'active-link',
    },
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/vuejs-paginate.js',
        '~/plugins/vue-masonry-css.js',
        '~/plugins/Mixitup.client.js',
        '~/plugins/silentbox.js',
        { src: '~/plugins/vue-masonry', ssr: false }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        '@nuxtjs/style-resources'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',
    ],

    styleResources: {
        scss: [
            '~/assets/scss/default/_variables.scss'
        ]
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extractCSS: true,
    }
}