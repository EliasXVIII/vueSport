<script setup>
import { ref, onMounted } from 'vue';

// Estado reactivo para almacenar los datos específicos que deseas
const duraciones_Biker = ref([]);
const distancias_Biker = ref([]);
const longitudes_Biker = ref([]);
const latitudes_Biker = ref([]);

const duraciones_Hiker = ref([]);
const distancias_Hiker = ref([]);


// Método para obtener los datos de rutas de bici del servidor
const fetchDataBiker = async () => {
  try {
    const response = await fetch('http://localhost:3000/records_bici');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const datosCompletos_Biker = await response.json();
    // Extraer solo los datos que necesitas
    datosCompletos_Biker.forEach(dato => {
      duraciones_Biker.value.push(dato['DENBORA (OO:MM)/DURACION (HH:MM)']);
      distancias_Biker.value.push(dato['LUZERA (KM)/LONGITUD (KM)']);
      longitudes_Biker.value.push(dato['longitude GEO']);
      latitudes_Biker.value.push(dato['latitude GEO']);
    });
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};
// Método para obtener los datos de rutas de senderismo del servidor
const fetchDataHiker=async () =>{
  try{
    const response=await fetch('http://localhost:3000/records_senderos');
    if(!response.ok){
      throw new Error ('Network response was not ok');
    }
    const datosCompletos_Hiker=await response.json();
    datosCompletos_Hiker.forEach(dato=>{
      duraciones_Hiker.value.push(dato['DENBORA (OO:MM)/DURACION (HH:MM)']);
      distancias_Hiker.value.push(dato['LUZERA (KM)/LONGITUD (KM)']);
    })
  } catch (error){
    console.error('There has been a problem with your fetch operation:', error);
  }
  
    

}

// Ejecutar fetchData cuando el componente se monte
onMounted(()=>{
  fetchDataHiker();
  fetchDataBiker();
})
</script>

<template>
  <div>
    <h2>duraciones_Biker</h2>
    <ul>
      <li v-for="(duracion, index) in duraciones_Biker" :key="'duracion-' + index">
        {{ duracion }}
      </li>
    </ul>
    <h2>distancias_Biker</h2>
    <ul>
      <li v-for="(distancia, index) in distancias_Biker" :key="'distancia-' + index">
        {{ distancia }}
      </li>
    </ul>
    <h2>longitudes_Biker</h2>
    <ul>
      <li v-for="(longitud, index) in longitudes_Biker" :key="'longitud-' + index">
        {{ longitud }}
      </li>
    </ul>
    <h2>latitudes_Biker</h2>
    <ul>
      <li v-for="(latitud, index) in latitudes_Biker" :key="'latitud-' + index">
        {{ latitud }}
      </li>
    </ul>
  </div>

  <div>
    <h2>duraciones_Hiker</h2>
    <ul>
      <li v-for="(duracion, index) in duraciones_Hiker" :key="'duracion-' + index">
        {{ duracion }}
      </li>
    </ul>
    <h2>distancias_Hiker</h2>
    <ul>
      <li v-for="(distancia, index) in distancias_Hiker" :key="'distancia-' + index">
        {{ distancia }}
      </li>
    </ul>
  
  </div>
</template>
