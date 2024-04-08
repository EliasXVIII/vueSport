<template>
  <div class="cardhero">
    <div class="cardhero__Hiking" @click="showHiking">
      <img class="cardhero__imagen" src="/src/assets/images/hiking7.jpg" alt="">
      <h3>Hiking</h3>
    </div>
    <div class="cardhero__Biking" @click="showBiking">
      <img class="cardhero__imagen" src="/src/assets/images/biking7.jpg" alt="">
      <h3>Biking</h3>
    </div>
  </div>
  <div class="cardhero__linea"></div> <!-- La línea debe estar fuera del contenedor flex -->
</template>

<script setup>

</script>

<style scoped>
.cardhero {
  display: flex;
  justify-content: space-between; /* Distribuye uniformemente las tarjetas */
  background-color: #A6A485; /* Color de fondo */
}

.cardhero__Hiking,
.cardhero__Biking {
  flex: 1; /* Ambas imágenes ocuparán el mismo ancho */
  position: relative;
  margin: 1rem; /* Margen alrededor de las imágenes */
}

.cardhero__imagen {
  width: 100%; /* Para asegurar que las imágenes ocupen todo el ancho del contenedor */
  height: auto; /* Para mantener la proporción de la imagen */
  margin-bottom: 1rem; /* Margen negativo para reducir el espacio entre las tarjetas */
}

.cardhero__Hiking h3,
.cardhero__Biking h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 3rem; /* Tamaño de fuente 3rem */
  color: white; /* Color blanco para el texto */
  font-weight: bold; /* Texto más gordo */
}

.cardhero__linea {
  width: 100%;
  height: 1rem;
  background-color: #3F402B; /* Color de la línea */
}
</style>
