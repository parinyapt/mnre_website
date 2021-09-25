<template>
  <div class="bg-gray-50 py-14">
    <h3 class="text-2xl font-bold tracking-widest text-center text-blue-900">{{ $t( 'page.servicetravel.index.title' ) }}</h3>

    <!-- Box -->
    <div class="items-stretch mt-10 ml-3 mr-3 md:flex md:justify-center md:space-x-8 md:px-14">


    <nuxt-link :to="localePath('/service-travel/national-park-facilities')">
      <div class="flex items-center justify-start px-3 py-4 mx-auto mt-10 space-x-2 transition duration-500 transform bg-white shadow-lg w-70 hover:shadow-xl hover:scale-110 md:mx-0 rounded-xl">
        <div class="flex-shrink pr-4">
            <div class="p-2 bg-blue-900 rounded">
              <i class="fa fa-wallet fa-2x fa-fw fa-inverse"></i>
            </div>
        </div>
        <div>
          <h2 class="text-lg font-bold ">{{ $t( 'page.servicetravel.index.menu.1' ) }}</h2>
        </div>
      </div>
    </nuxt-link>

    <nuxt-link :to="localePath('/service-travel/transportation-accessibility')">
      <div class="flex items-center justify-start px-3 py-4 mx-auto mt-10 space-x-2 transition duration-500 transform bg-white shadow-lg w-70 hover:shadow-xl hover:scale-110 md:mx-0 rounded-xl">
        <div class="flex-shrink pr-4">
            <div class="p-2 bg-blue-900 rounded">
              <i class="fa fa-wallet fa-2x fa-fw fa-inverse"></i>
            </div>
        </div>
        <div>
          <h2 class="text-lg font-bold">{{ $t( 'page.servicetravel.index.menu.2' ) }}</h2>
        </div>
      </div>
    </nuxt-link>

    </div>
  </div>
</template>
