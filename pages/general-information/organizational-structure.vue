<template>
<section class="relative bg-blue-50 py-14">

  <h3 class="text-2xl font-bold tracking-widest text-center text-blue-900">{{ $t( 'page.generalinformation.index.subtitle.2' ) }}</h3>

  <p class="mt-4 text-xl tracking-widest text-center text-blue-900">{{ $t( 'page.generalinformation.organizationStructure.title' ) }}</p>


  <section class="pb-10 mt-10 bg-blueGray-200">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap">
            <div class="order-2 w-full px-4 pt-6 text-center lg:order-1 md:order-1 lg:pt-12 md:w-4/12">
              <div class="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                <div class="flex-auto px-4 py-5">
                  <div class="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-blue-900 rounded-full shadow-lg">
                    <i class="fas fa-user"></i>
                  </div>
                  <h6 class="text-xl font-semibold">{{ $t( 'page.generalinformation.organizationStructure.person2.name' ) }}</h6>
                    <div class="mt-2 mb-4 text-blueGray-500">
                      <li>{{ $t( 'page.generalinformation.organizationStructure.person2.position.1' ) }}</li>
                      <li>{{ $t( 'page.generalinformation.organizationStructure.person2.position.2' ) }}</li>
                    </div>

                </div>
              </div>
            </div>
            <div class="order-1 w-full px-4 text-center md:w-4/12 md:order-2 lg:order-2">
              <div class="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                <div class="flex-auto px-4 py-5">
                  <div class="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-blue-900 rounded-full shadow-lg">
                    <i class="fas fa-user-tie"></i>
                  </div>
                  <h6 class="text-xl font-semibold">{{ $t( 'page.generalinformation.organizationStructure.person1.name' ) }}</h6>
                    <div class="mt-2 mb-4 text-blueGray-500">
                      <li>{{ $t( 'page.generalinformation.organizationStructure.person1.position.1' ) }}</li>
                    </div>
                </div>
              </div>
            </div>
            <div class="order-3 w-full px-4 pt-6 text-center lg:pt-12 md:w-4/12">
              <div class="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                <div class="flex-auto px-4 py-5">
                  <div class="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-blue-900 rounded-full shadow-lg">
                    <i class="fas fa-user"></i>
                  </div>
                  <h6 class="text-xl font-semibold">{{ $t( 'page.generalinformation.organizationStructure.person3.name' ) }}</h6>
                  <div class="mt-2 mb-4 text-blueGray-500">
                      <li>{{ $t( 'page.generalinformation.organizationStructure.person3.position.1' ) }}</li>
                      <li>{{ $t( 'page.generalinformation.organizationStructure.person3.position.2' ) }}</li>
                      <li>{{ $t( 'page.generalinformation.organizationStructure.person3.position.3' ) }}</li>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>
</template>
