let env = require("dotenv").config();

export default {
  mode: "universal",
  env: {
    apiUrl: process.env.API_URL || process.env.APP_URL + "/api",
    appName: process.env.APP_NAME || "Skeleton Nuxt",
    appLocale: process.env.APP_LOCALE || "en"
  },

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.APP_NAME || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    script: [
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
        type: "text/javascript"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Rubik:400,500&display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Fira+Sans&display=swap"
      }
    ]
  },
  router: {
    middleware: ["locale"]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#00E3AE" },
  /*
   ** Global CSS
   */
  css: [
    "@/assets/css/app.css"
  ],
  /**
   * Toast Configuration
   ** https://www.npmjs.com/package/@nuxtjs/toast
   */
  toast: {
    position: "top-center"
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    /** Injections for the app */
    { src: "~injections/is-mobile.js", mode: "client" },
    { src: "~injections/notify.js", mode: "client" },
    { src: "~injections/random-string.js", mode: "client" },

    /** Application filters */
    "~filters/capitalize",
    "~filters/slugify",
    "~filters/trim",

    "~plugins/axios",
    "~plugins/i18n",
    "~plugins/vform",
    "~plugins/index.js"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/tailwindcss"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "@nuxtjs/toast",
    "@nuxtjs/router"
  ],
  /**
   * Authentification Module Config
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/auth/login",
            method: "post",
            propertyName: "meta.token"
          },
          user: {
            url: "/auth/me",
            method: "get",
            propertyName: "data"
          },
          logout: {
            url: "/auth/signout",
            method: "post"
          }
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        "postcss-custom-properties": false,
        tailwindcss: "./tailwind.config.js"
      }
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      chainWebpack: config => {
        config.optimization.minimize(true);
      };
    }
  }
};
