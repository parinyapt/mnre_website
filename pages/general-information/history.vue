<template>
  <!-- This is an example component -->
<div class="container mx-auto my-5">

    <div class="relative flex flex-col items-center mx-2 rounded-lg md:flex-row md:shadow-xl md:h-72">

        <div class="relative z-0 order-1 w-full overflow-hidden rounded-lg md:order-2 md:w-2/5 h-80 md:h-full md:rounded-none md:rounded-r-lg">
            <div class="absolute inset-0 object-fill object-center w-full h-full bg-blue-400 bg-bottom bg-cover bg-opacity-30" :style="`background-image: url( '${ $config.baseURL}/img2.jpg' ); background-blend-mode: multiply;`"></div>
            <div class="absolute inset-0 flex flex-col-reverse items-start justify-start h-full p-6 pb-6 md:hidden bg-gradient-to-b from-transparent via-transparent to-gray-900">
                <h3 class="w-full mb-2 text-2xl font-bold leading-tight text-white">{{ $t( 'page.generalinformation.history.title' ) }}</h3>
            </div>
            <svg class="absolute inset-y-0 hidden w-24 h-full -ml-12 text-white fill-current md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
        </div>

        <div class="z-10 flex items-center order-2 w-full h-full -mt-6 md:order-1 md:w-3/5 md:mt-0">
            <div class="h-full p-8 mx-2 bg-white rounded-lg shadow-xl md:pr-18 md:pl-14 md:py-12 md:mx-0 md:rounded-none md:rounded-l-lg md:shadow-none">

                <h3 class="hidden text-2xl font-bold text-gray-700 md:block">{{ $t( 'page.generalinformation.history.title' ) }}</h3>
                <p class="mt-3 text-justify text-gray-600">{{ $t( 'page.generalinformation.history.text1' ) }}</p>

            </div>
        </div>

    </div>
</div>
</template>
