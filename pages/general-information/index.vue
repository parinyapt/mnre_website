<template>
  <div class="bg-gray-50 py-14">
    <h3 class="text-2xl font-bold tracking-widest text-center text-blue-900">{{ $t( 'page.generalinformation.index.title' ) }}</h3>

    <div class="flex-wrap items-stretch mt-10 ml-3 mr-3 md:flex md:justify-center md:space-x-8 md:px-14">

      <nuxt-link :to="localePath('/general-information/history')">
        <div class="flex items-center justify-start px-3 py-4 mx-auto mt-5 space-x-2 transition duration-500 transform bg-white shadow-lg w-70 hover:shadow-xl hover:scale-110 md:mx-0 rounded-xl">
          <div class="flex-shrink pr-4">
              <div class="p-2 bg-blue-900 rounded">
                <i class="fa fa-history fa-2x fa-fw fa-inverse"></i>
              </div>
          </div>
          <div>
            <h2 class="text-lg font-bold text-center">{{ $t( 'page.generalinformation.index.subtitle.1' ) }}</h2>
          </div>
        </div>
      </nuxt-link>

      <nuxt-link :to="localePath('/general-information/organizational-structure')">
        <div class="flex items-center justify-start px-3 py-4 mx-auto mt-5 space-x-2 transition duration-500 transform bg-white shadow-lg w-70 hover:shadow-xl hover:scale-110 md:mx-0 rounded-xl">
          <div class="flex-shrink pr-4">
              <div class="p-2 bg-blue-900 rounded">
                <i class="fa fa-network-wired fa-2x fa-fw fa-inverse"></i>
              </div>
          </div>
          <div>
            <h2 class="text-lg font-bold">{{ $t( 'page.generalinformation.index.subtitle.2' ) }}</h2>
          </div>
        </div>
      </nuxt-link>

      <nuxt-link :to="localePath('/general-information/manpower')">
        <div class="flex items-center justify-start px-3 py-4 mx-auto mt-5 space-x-2 transition duration-500 transform bg-white shadow-lg w-70 hover:shadow-xl hover:scale-110 md:mx-0 rounded-xl">
          <div class="flex-shrink pr-4">
              <div class="p-2 bg-blue-900 rounded">
                <i class="fa fa-users fa-2x fa-fw fa-inverse"></i>
              </div>
          </div>
          <div>
            <h2 class="text-lg font-bold">{{ $t( 'page.generalinformation.index.subtitle.3' ) }}</h2>
          </div>
        </div>
      </nuxt-link>

      <nuxt-link :to="localePath('/general-information/affiliated-agencies')">
        <div class="flex items-center justify-start px-3 py-4 mx-auto mt-5 space-x-2 transition duration-500 transform bg-white shadow-lg w-70 hover:shadow-xl hover:scale-110 md:mx-0 rounded-xl">
          <div class="flex-shrink pr-4">
              <div class="p-2 bg-blue-900 rounded">
                <i class="fa fa-globe fa-2x fa-fw fa-inverse"></i>
              </div>
          </div>
          <div>
            <h2 class="text-lg font-bold">{{ $t( 'page.generalinformation.index.subtitle.4' ) }}</h2>
          </div>
        </div>
      </nuxt-link>

      <nuxt-link :to="localePath('/general-information/information-service-center')">
        <div class="flex items-center justify-start px-3 py-4 mx-auto mt-5 space-x-2 transition duration-500 transform bg-white shadow-lg w-70 hover:shadow-xl hover:scale-110 md:mx-0 rounded-xl">
          <div class="flex-shrink pr-4">
              <div class="p-2 bg-blue-900 rounded">
                <i class="fa fa-building fa-2x fa-fw fa-inverse"></i>
              </div>
          </div>
          <div>
            <h2 class="text-lg font-bold">{{ $t( 'page.generalinformation.index.subtitle.5' ) }}</h2>
          </div>
        </div>
      </nuxt-link>

    </div>

  </div>
</template>
