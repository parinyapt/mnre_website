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
    var publicrelation = ''
    try {
      publicrelation = await $axios.$get('https://sheetdb.io/api/v1/w89np2de398ri');
    } catch (error) {
      alert(error);
    }

    return { publicrelation };
  }
}
</script>
