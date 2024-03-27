<template>

<div class="cardhero ">
    <div class="cardhero__Hiking">
        <img class="cardhero__imagen" src="/src/assets/images/hiking7.jpg" alt="">
        <h3>
            Hiking
        </h3>

    </div>
    <div class="cardhero__Biking">
        <img class="cardhero__imagen" src="/src/assets/images/biking7.jpg" alt="">
         <h3>
            Biking
         </h3>

    </div>

</div>






</template>

<style scoped>
.cardhero {
  display: flex;
}

.cardhero__Hiking,
.cardhero__Biking {
  flex: 1; /* Ambas imágenes ocuparán el mismo ancho */
  position: relative;
}

.cardhero__imagen {
  width: 100%; /* Para asegurar que las imágenes ocupen todo el ancho del contenedor */
  height: auto; /* Para mantener la proporción de la imagen */
}

.cardhero__Hiking h3,
.cardhero__Biking h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 2rem; /* Tamaño de fuente 2 rem */
  background-color: rgba(255, 255, 255, 0.5); /* Fondo semi-transparente para el texto */
  padding: 10px; /* Espacio alrededor del texto */
  border-radius: 5px; /* Bordes redondeados */
}
</style>
