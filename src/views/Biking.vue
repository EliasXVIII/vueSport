<template>
  <div class="relative">
    <!-- Contenedor de la imagen fija -->
    <div class=" w-full h-50vh z-0">
      <img class="w-full h-60 object-cover" src="/src/assets/Card-Image/prueba img.png" alt="" />
    </div>

    <!-- Contenedor del texto que se superpone a la imagen -->
    <div class="absolute inset-0 flex items-center justify-center z-10">
      <figcaption class="text-6xl font-bold text-white" style="font-family: 'Ubuntu', sans-serif;">
        <p>BIKING</p>
      </figcaption>
    </div>
  </div>
  
   <!-- Espacio para el contenido que se desplazará sobre la imagen -->
   <div class="pt-50vh"></div>

  <!-- Formulario y contenido que se desplaza sobre la imagen -->
  <form class="max-w-sm mx-auto relative z-20">
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

<Search
 />
</template>

<script setup>
  import Search from '../components/common/Search.vue';
</script>