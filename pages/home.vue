<template>

  <div class="container text-center justify-center mt-16">
    <div class="bg-cover bg-center inline-block h-48 w-64" style="background-image: url('/logo.png')"></div>

    <h1 class="text-gray-700 text-6xl">
      {{ $t('hello') }}
    </h1>

    <p>
      <code class="bg-primary text-black py-1 px-2 rounded">> nuxt-skeleton</code>
    </p>

    <a
      href="https://nuxtjs.org/"
      target="_blank"
      class="font-bold text-sm text-gray-500 hover:bg-orange-200 hover:text-orange-600 py-2 px-4 rounded"
    >
      Documentation
    </a>
    <a
      href="https://github.com/nuxt/nuxt.js"
      target="_blank"
      class="font-bold text-sm text-gray-500 hover:bg-blue-200 hover:text-blue-500 py-2 px-4 rounded"
    >
      GitHub
    </a>

    <a
      href="https://github.com/nuxt/nuxt.js"
      target="_blank"
      class="font-bold text-sm text-gray-500 hover:bg-pink-200 hover:text-pink-500 py-2 px-4 rounded"
    >
      Skeleton
    </a>

    <span title='@nuxtjs/auth,
    @nuxtjs/axios,
    @nuxtjs/router,
    @nuxtjs/tailwindcss,
    @nuxtjs/toast,
    dotenv,
    js-cookie,
    lodash,
    lozad,
    mobile-device-detect,
    moment,
    nuxt,
    nuxt-i18n,
    postcss-sass,
    tailwindcss-bg-alpha,
    tailwindcss-gradients,
    tailwindcss-textshadow,
    tailwindcss-transforms,
    tinycolor2,
    vform'
    class="font-bold text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-600 py-2 px-4 rounded" style="cursor: help">
      Packages
    </span>


  </div>

</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
