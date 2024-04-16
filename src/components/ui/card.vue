<template>
  <div class="max-w-sm bg-custom-oscuro border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-12 mr-10%">
    <img src="/src/assets/Card-Image/Imagen_hiking_id239.png" alt="" class="mt-2 mb-1 w-full max-w-xs h-auto mx-auto my-auto"> <!-- Centrar la imagen -->
    <div class="p-5 flex flex-col items-center">
      <a href="#">
        <h5 class="mb-4 text-2xl font-bold tracking-tight text-white dark:text-white">Muskiz-Pobeña</h5> <!-- Aumentar espacio entre título y botón -->
      </a>
      <button type="button" @click="handleButtonClick" class="text-white hover:text-black border border-white hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 mt-4 dark:border-gray-600 dark:text-black dark:hover:text-black dark:hover:bg-gray-600 dark:focus:ring-gray-800">
        Enter
      </button>
      <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    </div>
  </div>
</template>



  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      Rutas__sendero: String,
      imagePath: String,
    },
    data() {
      return {
        errorMessage: '',
      };
    },
    methods: {
      handleButtonClick() {
        // Lógica para manejar el clic en el botón
        console.log('Button clicked!');
      },
      handleImageError() {
        // Manejar errores de carga de la imagen
        this.errorMessage = 'Error al cargar la imagen';
      },
    },
  });
  </script>
  