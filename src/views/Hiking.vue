<template>
  <figure class="relative flex flex-col items-center">
    <img class="rounded-t-lg" src="/src/assets/Card-Image/prueba img.png" alt="" style="width: 100%;height: 20rem;" />
    <figcaption class="absolute text-6xl font-bold text-white top-0 left-0 right-0 flex items-center justify-center h-full" style="font-family: 'Ubuntu', sans-serif;">
      <p>HIKING</p>
    </figcaption>
  </figure>


  <form class="max-w-sm mt-4 mx-auto ">
  <div class="mb-5">
    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Where?</label>
    <input type="text" id="text" class="shadow-sm bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  required />
  </div>
  <div class="mb-5">
    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Distance</label>
    <input type="text" id="text" class="shadow-sm bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div style="margin-bottom: 20px;display: flex; justify-content: center;">
  <button type="submit" class="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-9 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800  " >Search</button>
</div>
</form>


</template>


