<template>
  <div class="grid grid-cols-1 lg:px-40 bg-gray-50 py-14">
    <h3 class="p-2 text-2xl font-bold tracking-widest text-center text-blue-900">{{ $t( 'page.servicetravel.index.menu.2' ) }}</h3>

    <div class="mt-10">
      <div class="flex items-center justify-center">
        <div class="w-full px-6 mx-auto containter">
          <div class="relative flex flex-row items-center justify-between p-5 transition duration-500 bg-white rounded-lg shadow-lg hover:shadow-2xl" @click="btn1 = !btn1">
              <div class="flex-shrink pr-4">
                <div class="p-2 bg-blue-900 rounded">
                  <i class="fa fa-car fa-2x fa-fw fa-inverse"></i>
                </div>
              </div>
            <h1 class="text-lg font-semibold text-gray-800">{{ $t( 'page.servicetravel.transportationaccessibility.1.title' ) }}</h1>
            <i :class="{'fa-minus-circle': btn1, 'fa-plus-circle': !btn1}" class="text-dark fa fa-2x"></i>
          </div>
          <div v-if="btn1" class="overflow-hidden leading-normal bg-gray-100 border-l-2 border-blue-900 rounded-lg tab-content">
            <ul class="p-5 list-disc">
              <li>{{ $t( 'page.servicetravel.transportationaccessibility.1.detail.1' ) }}</li>
              <li>{{ $t( 'page.servicetravel.transportationaccessibility.1.detail.2' ) }}</li>
            </ul>
            <!-- <p class="p-5">{{ $t( 'page.servicetravel.transportationaccessibility.2.detail.1' ) }}</p> -->
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10">
      <div class="flex items-center justify-center">
        <div class="w-full px-6 mx-auto containter">
          <div class="relative flex flex-row items-center justify-between p-5 transition duration-500 bg-white rounded-lg shadow-lg hover:shadow-2xl" @click="btn2 = !btn2">
              <div class="flex-shrink pr-4">
                <div class="p-2 bg-blue-900 rounded">
                  <i class="fa fa-plane-departure fa-2x fa-fw fa-inverse"></i>
                </div>
              </div>
            <h1 class="text-lg font-semibold text-gray-800">{{ $t( 'page.servicetravel.transportationaccessibility.2.title' ) }}</h1>
            <i :class="{'fa-minus-circle': btn2, 'fa-plus-circle': !btn2}" class="text-dark fa fa-2x"></i>
          </div>
          <div v-if="btn2" class="overflow-hidden leading-normal bg-gray-100 border-l-2 border-blue-900 rounded-lg tab-content">
            <p class="p-5">{{ $t( 'page.servicetravel.transportationaccessibility.2.detail.1' ) }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10">
      <div class="flex items-center justify-center">
        <div class="w-full px-6 mx-auto containter">
          <div class="relative flex flex-row items-center justify-between p-5 transition duration-500 bg-white rounded-lg shadow-lg hover:shadow-2xl" @click="btn3 = !btn3">
              <div class="flex-shrink pr-4">
                <div class="p-2 bg-blue-900 rounded">
                  <i class="fa fa-ship fa-2x fa-fw fa-inverse"></i>
                </div>
              </div>
            <h1 class="text-lg font-semibold text-gray-800">{{ $t( 'page.servicetravel.transportationaccessibility.3.title' ) }}</h1>
            <i :class="{'fa-minus-circle': btn3, 'fa-plus-circle': !btn3}" class="text-dark fa fa-2x"></i>
          </div>
          <div v-if="btn3" class="overflow-hidden leading-normal bg-gray-100 border-l-2 border-blue-900 rounded-lg tab-content">
            <p class="p-5">{{ $t( 'page.servicetravel.transportationaccessibility.3.detail.1' ) }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10">
      <div class="flex items-center justify-center">
        <div class="w-full px-6 mx-auto containter">
          <div class="relative flex flex-row items-center justify-between p-5 transition duration-500 bg-white rounded-lg shadow-lg hover:shadow-2xl" @click="btn4 = !btn4">
              <div class="flex-shrink pr-4">
                <div class="p-2 bg-blue-900 rounded">
                  <i class="fa fa-subway fa-2x fa-fw fa-inverse"></i>
                </div>
              </div>
            <h1 class="text-lg font-semibold text-gray-800">{{ $t( 'page.servicetravel.transportationaccessibility.4.title' ) }}</h1>
            <i :class="{'fa-minus-circle': btn4, 'fa-plus-circle': !btn4}" class="text-dark fa fa-2x"></i>
          </div>
          <div v-if="btn4" class="overflow-hidden leading-normal bg-gray-100 border-l-2 border-blue-900 rounded-lg tab-content">
            <p class="p-5">{{ $t( 'page.servicetravel.transportationaccessibility.4.detail.1' ) }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10">
      <div class="flex items-center justify-center">
        <div class="w-full px-6 mx-auto containter">
          <div class="relative flex flex-row items-center justify-between p-5 transition duration-500 bg-white rounded-lg shadow-lg hover:shadow-2xl" @click="btn5 = !btn5">
              <div class="flex-shrink pr-4">
                <div class="p-2 bg-blue-900 rounded">
                  <i class="fa fa-bus-alt fa-2x fa-fw fa-inverse"></i>
                </div>
              </div>
            <h1 class="text-lg font-semibold text-gray-800">{{ $t( 'page.servicetravel.transportationaccessibility.5.title' ) }}</h1>
            <i :class="{'fa-minus-circle': btn5, 'fa-plus-circle': !btn5}" class="text-dark fa fa-2x"></i>
          </div>
          <div v-if="btn5" class="overflow-hidden leading-normal bg-gray-100 border-l-2 border-blue-900 rounded-lg tab-content">
            <p class="p-5">{{ $t( 'page.servicetravel.transportationaccessibility.5.detail.1' ) }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10">
      <div class="flex items-center justify-center">
        <div class="w-full px-6 mx-auto containter">
          <div class="relative flex flex-row items-center justify-between p-5 transition duration-500 bg-white rounded-lg shadow-lg hover:shadow-2xl" @click="btn6 = !btn6">
              <div class="flex-shrink pr-4">
                <div class="p-2 bg-blue-900 rounded">
                  <i class="fa fa-ship fa-2x fa-fw fa-inverse"></i>
                </div>
              </div>
            <h1 class="text-lg font-semibold text-gray-800">{{ $t( 'page.servicetravel.transportationaccessibility.6.title' ) }}</h1>
            <i :class="{'fa-minus-circle': btn6, 'fa-plus-circle': !btn6}" class="text-dark fa fa-2x"></i>
          </div>
          <div v-if="btn6" class="overflow-hidden leading-normal bg-gray-100 border-l-2 border-blue-900 rounded-lg tab-content">
            <ul class="p-5 list-decimal">
              <li>{{ $t( 'page.servicetravel.transportationaccessibility.6.detail.1.title' ) }}</li>
              <ul class="p-5 list-disc">
                <li>{{ $t( 'page.servicetravel.transportationaccessibility.6.detail.1.detail.1' ) }}</li>
                <li>{{ $t( 'page.servicetravel.transportationaccessibility.6.detail.1.detail.2' ) }}</li>
                <li>{{ $t( 'page.servicetravel.transportationaccessibility.6.detail.1.detail.3' ) }}</li>
                <li>{{ $t( 'page.servicetravel.transportationaccessibility.6.detail.1.detail.4' ) }}</li>
                <li>{{ $t( 'page.servicetravel.transportationaccessibility.6.detail.1.detail.5' ) }}</li>
              </ul>
              <li>{{ $t( 'page.servicetravel.transportationaccessibility.6.detail.2' ) }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      btn1: false,
      btn2: false,
      btn3: false,
      btn4: false,
      btn5: false,
      btn6: false,
    }
  }
}
</script>
