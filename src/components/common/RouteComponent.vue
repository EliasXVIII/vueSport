<template>
    <div class="route">
      <h2>Ruta de Dificultad: {{ difficulty }}</h2>
      <!-- Aquí puedes agregar más contenido relacionado con la ruta, como descripciones o imágenes -->
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'RouteComponent',
    props: {
      difficulty: String
    },
    setup(props) {
      // Aquí puedes agregar lógica reactiva o computada si es necesario
      const message = ref('¡Bienvenido a la ruta!');
  
      // Retorna los elementos que quieras usar en tu plantilla
      return { message };
    }
  });
  </script>
  
  <style scoped>
  .route {
    padding: 20px;
    border: 1px solid #ccc;
    margin: 10px;
    border-radius: 8px;
  }
  </style>
  