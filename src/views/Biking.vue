<template>
<figure class="relative flex flex-col items-center">
    <img class="img_hiking" src="/src/assets/images/biking2.jpg" style="width: 100%; height: 35rem; object-fit: cover; object-position: center;">
    <figcaption class="absolute text-3xl font-bold text-white top-0 left-0 right-0 flex items-center justify-center h-full" style="font-family: 'Ubuntu', sans-serif;">
      <p>BIKING</p>
    </figcaption>
</figure>


<div class="grid grid-cols-2 gap-4">
  <div class="p-4">
    <!-- Filters for distance and difficulty -->
    <SearchFilter/>
  </div>
  <div class="p-4">
    <GoogleMap/>
  </div>
</div>


  

  <!-- Displaying filtered routes -->
  <div class="routes container mx-auto mt-10">
    <div v-for="route in filteredRoutes" :key="route._id" class="route mb-5 p-4 shadow-lg rounded-lg">
      <h3 class="text-xl font-semibold">{{ route['IZENA/NOMBRE'] }}</h3>
      <p>Distance: {{ route['LUZERA (KM)/LONGITUD (KM)'] }} km</p>
      <p>Duration: {{ route['DENBORA (OO:MM)/DURACION (HH:MM)'] }}</p>
      <p>Difficulty: {{ route['ZAILTASUNA/DIFICULTAD'] }}</p>
      <p>Zone: {{ route['GUNEA/ZONA'] }}</p>
      <a :href="route['URLA/URL']" target="_blank" class="text-blue-500 hover:text-blue-700">View Route</a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import GoogleMap from '../components/common/GoogleMap.vue';
import SearchFilter from './SearchFilter.vue';

// Reactive state for storing the complete route data
const routes = ref([]);

// Reactive states for filters
const filterDistance = ref('');
const filterDifficulty = ref('');

// Fetching route data from the server
const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3000/records_bici');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    routes.value = await response.json();
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

// Computed property to filter routes based on selected criteria
const filteredRoutes = computed(() => {
  return routes.value.filter(route => {
    const matchesDistance = filterDistance.value ? route['LUZERA (KM)/LONGITUD (KM)'] <= filterDistance.value : true;
    const matchesDifficulty = filterDifficulty.value ? route['ZAILTASUNA/DIFICULTAD'].includes(filterDifficulty.value) : true;
    //filterDifficulty.value no es null, undefined, 0, false, o una cadena vacía
    return matchesDistance && matchesDifficulty;
  });
});

// Execute fetchData when the component is mounted
onMounted(fetchData);
</script>

<style scoped>
/* Add your styles here */
</style>
