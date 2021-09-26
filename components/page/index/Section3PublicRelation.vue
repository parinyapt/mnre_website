<template>
  <section class="px-4 mx-auto mt-12 mb-12 max-w-7xl sm:px-6 lg:px-4">
    <article>
        <h2 class="text-2xl font-extrabold text-gray-900">{{ $t( 'page.index.section3.title' ) }}</h2>
        <div class="w-20 h-1 bg-blue-900 rounded"></div>
        <section class="grid mt-6 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            <article class="relative overflow-hidden duration-200 transform bg-white rounded-lg shadow-lg group hover:shadow-2xl">
                <div class="relative w-full h-80 md:h-64 lg:h-44">
                    <img src="https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg"
                        alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                        class="object-cover object-center w-full h-full">
                </div>
                <div class="px-3 py-4">
                    <h3 class="pb-2 text-sm text-gray-500">
                        <a class="px-2 py-1 text-white bg-indigo-600 rounded-lg" href="#">
                            <span class="absolute inset-0"></span>
                            Basic Level
                        </a>
                    </h3>
                    <p
                        class="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </article>
            <article class="relative overflow-hidden duration-200 transform bg-white rounded-lg shadow-lg group hover:shadow-2xl">
                <div class="relative w-full h-80 md:h-64 lg:h-44">
                    <img src="https://cdn.pixabay.com/photo/2021/09/08/20/45/bird-6607863_960_720.jpg.jpg"
                        alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                        class="object-cover object-center w-full h-full">
                </div>
                <div class="px-3 py-4">
                    <h3 class="pb-2 text-sm text-gray-500">
                        <a class="px-2 py-1 text-white bg-indigo-600 rounded-lg" href="#">
                            <span class="absolute inset-0"></span>
                            Basic Level
                        </a>
                    </h3>
                    <p
                        class="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </article>
            <article class="relative overflow-hidden duration-200 transform bg-white rounded-lg shadow-lg group hover:shadow-2xl">
                <div class="relative w-full h-80 md:h-64 lg:h-44">
                    <img src="https://cdn.pixabay.com/photo/2021/08/03/11/01/stairs-6519085_960_720.jpg"
                        alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                        class="object-cover object-center w-full h-full">
                </div>
                <div class="px-3 py-4">
                    <h3 class="pb-2 text-sm text-gray-500">
                        <a class="px-2 py-1 text-white bg-indigo-600 rounded-lg" href="#">
                            <span class="absolute inset-0"></span>
                            Intermediate Level
                        </a>
                    </h3>
                    <p
                        class="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </article>
            <article class="relative overflow-hidden duration-200 transform bg-white rounded-lg shadow-lg group hover:shadow-2xl">
                <div class="relative w-full h-80 md:h-64 lg:h-44">
                    <img src="https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg"
                        alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                        class="object-cover object-center w-full h-full">
                </div>
                <div class="px-3 py-4">
                    <h3 class="pb-2 text-sm text-gray-500">
                        <a class="px-2 py-1 text-white bg-indigo-600 rounded-lg" href="#">
                            <span class="absolute inset-0"></span>
                            Advanced Level
                        </a>
                    </h3>
                    <p
                        class="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </article>
            <article class="relative overflow-hidden duration-200 transform bg-white rounded-lg shadow-lg group hover:shadow-2xl">
                <div class="relative w-full h-80 md:h-64 lg:h-44">
                    <img src="https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg"
                        alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                        class="object-cover object-center w-full h-full">
                </div>
                <div class="px-3 py-4">
                    <h3 class="pb-2 text-sm text-gray-500">
                        <a class="px-2 py-1 text-white bg-indigo-600 rounded-lg" href="#">
                            <span class="absolute inset-0"></span>
                            Advanced Level
                        </a>
                    </h3>
                    <p
                        class="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </article>
        </section>
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const photos = await $axios.$get('https://docs.google.com/spreadsheets/d/1MSkIw3FAVbmx3f96wImGomwpNS_Uixi0pRPkVAfnxbg/gviz/tq?tqx=out:json');
    console.log(photos)
    return { photos };
  }
}
</script>
