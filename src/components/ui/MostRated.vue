<template>
  <div class="container  px-4 bg-custom-green p-12">
    <div class="flex flex-col md:flex-row items-stretch">
      <!-- Contenido principal -->
      <div class="w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
        <principal class="container mt-12 w-full max-w-md" />
      </div>

      <!-- Video -->
      <div class="w-full md:w-1/2 flex items-center justify-center">
        <video src="/src/assets/videos/Una Bizkaia para compartirla.mp4" class="w-full max-w-md" controls></video>
      </div>
    </div>
  </div>
</template>

<script setup>
import principal from './principal.vue';
import useRoutes from '../../assets/composable/fetchHiker';

// Obtener las rutas usando el hook useRoutes
const { routes } = useRoutes();
</script>

<style scoped>
/* Estilos para controlar el tamaño del video y el principal */
video {
  width: 100%; /* Ajustar el ancho del video al contenedor */
  height: auto; /* Mantener la proporción de aspecto */
  max-width: 100%; /* Ancho máximo del video */
}

/* Estilos adicionales para el contenedor principal */
.container {
  max-width: 100%; /* Ajustar el ancho máximo del contenedor principal */
}

.principal {
  width: 100%; /* Ajustar el ancho del componente principal */
}

/* Definir el color de fondo personalizado */
.bg-custom-green {
  background-color: #78966F; /* Color de fondo personalizado */
}


</style>

