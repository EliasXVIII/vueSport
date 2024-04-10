<template>
    <div class="max-w-sm bg-custom-oscuro border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-12 mr-10%">
      <a href="#">
        <img class="rounded-t-lg" :src="imagePath" alt="" @error="handleImageError" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{{ Rutas__sendero }}</h5>
        </a>
        <button type="button" @click="handleButtonClick" class="text-white hover:text-black border border-white hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-black dark:hover:bg-gray-600 dark:focus:ring-gray-800">
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
  