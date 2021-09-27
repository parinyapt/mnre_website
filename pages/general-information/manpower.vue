<template>
<div class="px-3 py-14 bg-gray-50">
    <h3 class="p-2 text-2xl font-bold tracking-widest text-center text-blue-900">{{ $t( 'page.generalinformation.index.subtitle.3' ) }}</h3>

    <div class='w-full mt-10 overflow-x-auto'>
        <table class='w-full max-w-xl mx-auto overflow-hidden bg-white divide-y divide-gray-300 rounded-lg whitespace-nowrap'>

            <tbody class="divide-y divide-gray-200">
                <tr>
                    <td class="px-6 py-4">
                        <div class="flex items-center space-x-3">
                          <p> 1) {{ $t( 'page.generalinformation.manpower.1.title' ) }} </p>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-center"> <span class="w-1/3 px-2 pb-1 font-semibold text-white bg-blue-900 rounded-xl text-md"> {{ $t( 'page.generalinformation.manpower.1.amount' ) }} {{ $t( 'page.generalinformation.manpower.positions' ) }} </span> </td>
                </tr>
                <tr>
                    <td class="px-6 py-4">
                        <div class="flex items-center pl-5 space-x-3">
                          <p> {{ $t( 'page.generalinformation.manpower.1.sub.1.title' ) }} </p>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-center"> <span class="w-1/3 px-2 pb-1 font-semibold text-white bg-blue-900 text-md rounded-xl"> {{ $t( 'page.generalinformation.manpower.1.sub.1.amount' ) }} {{ $t( 'page.generalinformation.manpower.positions' ) }} </span> </td>
                </tr>
                <tr>
                    <td class="px-6 py-4">
                        <div class="flex items-center pl-5 space-x-3">
                          <p> {{ $t( 'page.generalinformation.manpower.1.sub.2.title' ) }} </p>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-center"> <span class="w-1/3 px-2 pb-1 font-semibold text-white bg-blue-900 text-md rounded-xl"> {{ $t( 'page.generalinformation.manpower.1.sub.2.amount' ) }} {{ $t( 'page.generalinformation.manpower.positions' ) }} </span> </td>
                </tr>

                <tr>
                    <td class="px-6 py-4">
                        <div class="flex items-center space-x-3">
                          <p> 2) {{ $t( 'page.generalinformation.manpower.2.title' ) }} </p>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-center"> <span class="w-1/3 px-2 pb-1 font-semibold text-white bg-blue-900 rounded-xl text-md"> {{ $t( 'page.generalinformation.manpower.2.amount' ) }} {{ $t( 'page.generalinformation.manpower.positions' ) }} </span> </td>
                </tr>
                <tr>
                    <td class="px-6 py-4">
                        <div class="flex items-center pl-5 space-x-3">
                          <p> {{ $t( 'page.generalinformation.manpower.2.sub.1.title' ) }} </p>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-center"> <span class="w-1/3 px-2 pb-1 font-semibold text-white bg-blue-900 text-md rounded-xl"> {{ $t( 'page.generalinformation.manpower.2.sub.1.amount' ) }} {{ $t( 'page.generalinformation.manpower.positions' ) }} </span> </td>
                </tr>
                <tr>
                    <td class="px-6 py-4">
                        <div class="flex items-center pl-5 space-x-3">
                          <p> {{ $t( 'page.generalinformation.manpower.2.sub.2.title' ) }} </p>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-center"> <span class="w-1/3 px-2 pb-1 font-semibold text-white bg-blue-900 text-md rounded-xl"> {{ $t( 'page.generalinformation.manpower.2.sub.2.amount' ) }} {{ $t( 'page.generalinformation.manpower.positions' ) }} </span> </td>
                </tr>
                <tr>
                    <td class="px-6 py-4">
                        <div class="flex items-center pl-5 space-x-3">
                          <p> {{ $t( 'page.generalinformation.manpower.2.sub.3.title' ) }} </p>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-center"> <span class="w-1/3 px-2 pb-1 font-semibold text-white bg-blue-900 text-md rounded-xl"> {{ $t( 'page.generalinformation.manpower.2.sub.3.amount' ) }} {{ $t( 'page.generalinformation.manpower.positions' ) }} </span> </td>
                </tr>
                <tr>
                    <td class="px-6 py-4">
                        <div class="flex items-center pl-5 space-x-3">
                          <p> {{ $t( 'page.generalinformation.manpower.2.sub.4.title' ) }} </p>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-center"> <span class="w-1/3 px-2 pb-1 font-semibold text-white bg-blue-900 text-md rounded-xl"> {{ $t( 'page.generalinformation.manpower.2.sub.4.amount' ) }} {{ $t( 'page.generalinformation.manpower.positions' ) }} </span> </td>
                </tr>

                <tr>
                    <td class="px-6 py-4">
                        <div class="flex items-center space-x-3">
                          <p> 3) {{ $t( 'page.generalinformation.manpower.3.title' ) }} </p>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-center"> <span class="w-1/3 px-2 pb-1 font-semibold text-white bg-blue-900 rounded-xl text-md"> {{ $t( 'page.generalinformation.manpower.3.amount' ) }} {{ $t( 'page.generalinformation.manpower.positions' ) }} </span> </td>
                </tr>
                <tr>
                    <td class="px-6 py-4">
                        <div class="flex items-center pl-5 space-x-3">
                          <p> {{ $t( 'page.generalinformation.manpower.3.sub.1.title' ) }} </p>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-center"> <span class="w-1/3 px-2 pb-1 font-semibold text-white bg-blue-900 text-md rounded-xl"> {{ $t( 'page.generalinformation.manpower.3.sub.1.amount' ) }} {{ $t( 'page.generalinformation.manpower.positions' ) }} </span> </td>
                </tr>
                <tr>
                    <td class="px-6 py-4">
                        <div class="flex items-center pl-5 space-x-3">
                          <p> {{ $t( 'page.generalinformation.manpower.3.sub.2.title' ) }} </p>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-center"> <span class="w-1/3 px-2 pb-1 font-semibold text-white bg-blue-900 text-md rounded-xl"> {{ $t( 'page.generalinformation.manpower.3.sub.2.amount' ) }} {{ $t( 'page.generalinformation.manpower.positions' ) }} </span> </td>
                </tr>
                <tr>
                    <td class="px-6 py-4">
                        <div class="flex items-center pl-5 space-x-3">
                          <p> {{ $t( 'page.generalinformation.manpower.3.sub.3.title' ) }} </p>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-center"> <span class="w-1/3 px-2 pb-1 font-semibold text-white bg-blue-900 text-md rounded-xl"> {{ $t( 'page.generalinformation.manpower.3.sub.3.amount' ) }} {{ $t( 'page.generalinformation.manpower.positions' ) }} </span> </td>
                </tr>
                <tr>
                    <td class="px-6 py-4">
                        <div class="flex items-center pl-5 space-x-3">
                          <p> {{ $t( 'page.generalinformation.manpower.3.sub.4.title' ) }} </p>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-center"> <span class="w-1/3 px-2 pb-1 font-semibold text-white bg-blue-900 text-md rounded-xl"> {{ $t( 'page.generalinformation.manpower.3.sub.4.amount' ) }} {{ $t( 'page.generalinformation.manpower.positions' ) }} </span> </td>
                </tr>

                <tr>
                    <td class="px-6 py-4">
                        <div class="flex items-center space-x-3">
                          <p> 4) {{ $t( 'page.generalinformation.manpower.4.title' ) }} </p>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-center"> <span class="w-1/3 px-2 pb-1 font-semibold text-white bg-blue-900 rounded-xl text-md"> {{ $t( 'page.generalinformation.manpower.4.amount' ) }} {{ $t( 'page.generalinformation.manpower.positions' ) }} </span> </td>
                </tr>

                <tr>
                    <td class="px-6 py-4">
                        <div class="flex items-center space-x-3">
                          <p> 5) {{ $t( 'page.generalinformation.manpower.5.title' ) }} </p>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-center"> <span class="w-1/3 px-2 pb-1 font-semibold text-white bg-blue-900 rounded-xl text-md"> {{ $t( 'page.generalinformation.manpower.5.amount' ) }} {{ $t( 'page.generalinformation.manpower.positions' ) }} </span> </td>
                </tr>

                <tr>
                    <td class="px-6 py-4">
                        <div class="flex items-center space-x-3">
                          <p> 6) {{ $t( 'page.generalinformation.manpower.6.title' ) }} </p>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-center"> <span class="w-1/3 px-2 pb-1 font-semibold text-white bg-blue-900 rounded-xl text-md"> {{ $t( 'page.generalinformation.manpower.6.amount' ) }} {{ $t( 'page.generalinformation.manpower.positions' ) }} </span> </td>
                </tr>

                <tr>
                    <td class="px-6 py-4">
                        <div class="flex items-center space-x-3">
                          <p> {{ $t( 'page.generalinformation.manpower.7.title' ) }} </p>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-center"> <span class="w-1/3 px-2 pb-1 font-semibold text-white bg-blue-900 rounded-xl text-md"> {{ $t( 'page.generalinformation.manpower.7.amount' ) }} {{ $t( 'page.generalinformation.manpower.positions' ) }} </span> </td>
                </tr>

            </tbody>
        </table>
    </div>
</div>

</template>


