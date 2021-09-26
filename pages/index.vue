<template>
  <section>
    <PageIndexIntroVideo />
    <PageIndexSection2 />

    <section class="px-4 mx-auto mt-12 mb-12 max-w-7xl sm:px-6 lg:px-4">
      <article>
          <h2 class="text-2xl font-extrabold text-gray-900">{{ $t( 'page.index.section3.title' ) }}</h2>
          <div class="w-20 h-1 bg-blue-900 rounded"></div>
          <section class="grid mt-6 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">

              <article v-for="data in publicrelation" :key="data.id" class="relative overflow-hidden duration-200 transform bg-white rounded-lg shadow-lg group hover:shadow-2xl">
                  <div class="relative w-full h-80 md:h-64 lg:h-44">
                      <img :src="data.imgurl" :alt="data.title"
                          class="object-cover object-center w-full h-full">
                  </div>
                  <div class="px-3 py-4">
                      <h3 class="pb-2 text-sm text-gray-500">
                          <a class="px-2 py-1 text-white bg-blue-900 rounded-lg" :href="data.linkhref" target="_blank">
                            <span class="absolute inset-0"></span>
                            {{ data.date }}
                          </a>
                      </h3>
                      <p class="text-base font-semibold text-gray-900 group-hover:text-blue-700">
                        {{ data.title }}
                      </p>

                  </div>
              </article>

          </section>
      </article>
    </section>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    var publicrelation = await $axios.$get('https://script.googleusercontent.com/macros/echo?user_content_key=Fe9m6eFzpcJNUU_cwlVtTM1De2Q3jj20Cnlwbu4aFbIfxEkSHg2aelW-4gctU-DD0dT5HJ_Jje5MasEwUmM00hrJr7UkoOkGm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEYTIrNCHeqVvLGjzBibfk9lPNWZzUhEKPefszOdXt-zH1p5f5Xz__J4QhZm_1jikI7_TP8LLLpLLgANXR6ofjDuHeaqLj634UHiAV0enlLZDZPCCRSotOQ&lib=MM9ToiOdvUEcRa3bB0bncGoeEWWEh7reG');

    return { publicrelation };
  }
}
</script>
