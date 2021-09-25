<template>
  <div class="flex bg-white" style="height:400px;">
      <div class="flex items-center px-8 text-center lg:text-center md:px-12 lg:w-3/5">
          <div>
              <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">{{ $t( 'page.index.section2.text1' ) }}</h2>
              <p class="mt-2 text-sm text-gray-500 md:text-base">{{ $t( 'page.index.section2.text2') }}</p>
              <p class="mt-2 text-sm text-gray-500 md:text-base">{{ $t( 'page.index.section2.text3' ) }}</p>
              <p class="mt-2 text-sm text-gray-500 md:text-base">{{ $t( 'page.index.section2.text4') }}</p>
              <div class="flex justify-center mt-6">
                  <!-- <a class="px-4 py-3 text-xs font-semibold text-gray-200 bg-gray-900 rounded hover:bg-gray-800" href="#">Get Started</a>
                  <a class="px-4 py-3 mx-4 text-xs font-semibold text-gray-900 bg-gray-300 rounded hover:bg-gray-400" href="#">Learn More</a> -->


                <div class="bg-white shadow-lg rounded-2xl">
                  <div class="flex">
                      <div class="flex-1 group">
                          <nuxt-link :to="localePath('general-information')" class="flex items-end justify-center w-full px-4 pt-2 mx-auto text-center text-gray-400 group-hover:text-blue-900">
                              <span class="block px-1 pt-1 pb-1">
                                  <i class="block pt-1 mb-1 text-2xl far fa-info-circle"></i>
                                  <span class="block pb-2 text-xs">{{ $t('config.menu.2') }}</span>
                                  <span class="block w-5 h-1 mx-auto rounded-full group-hover:bg-blue-900"></span>
                              </span>
                          </nuxt-link>
                      </div>
                      <div class="flex-1 group">
                          <nuxt-link :to="localePath('tourist-attraction')" class="flex items-end justify-center w-full px-4 pt-2 mx-auto text-center text-gray-400 group-hover:text-blue-900">
                              <span class="block px-1 pt-1 pb-1">
                                  <i class="block pt-1 mb-1 text-2xl far fa-compass"></i>
                                  <span class="block pb-2 text-xs">{{ $t('config.menu.3') }}</span>
                                  <span class="block w-5 h-1 mx-auto rounded-full group-hover:bg-blue-900"></span>
                              </span>
                          </nuxt-link>
                      </div>
                      <div class="flex-1 group">
                          <nuxt-link :to="localePath('service-travel')" class="flex items-end justify-center w-full px-4 pt-2 mx-auto text-center text-gray-400 group-hover:text-blue-900">
                              <span class="block px-1 pt-1 pb-1">
                                  <i class="block pt-1 mb-1 text-2xl far fa-route"></i>
                                  <span class="block pb-2 text-xs ">{{ $t('config.menu.4') }}</span>
                                  <span class="block w-5 h-1 mx-auto rounded-full group-hover:bg-blue-900"></span>
                              </span>
                          </nuxt-link>
                      </div>
                  </div>
                </div>

              </div>
          </div>
      </div>
      <div class="hidden md:block lg:block lg:w-2/5" style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)">
          <div class="object-cover h-full" style="background-image: url('img1.jpg');background-size: 1100px;">
              <div class="h-full bg-black opacity-10"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.hover\:w-full:hover {
    width: 100%;
}
.group:hover .group-hover\:w-full {
    width: 100%;
}
.group:hover .group-hover\:inline-block {
    display: inline-block;
}
.group:hover .group-hover\:flex-grow {
    flex-grow: 1;
}
</style>
