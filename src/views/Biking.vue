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
    <SearchFilterBiking/>
  </div>
  <div class="p-4">
    <GoogleMap/>
  </div>
</div>


</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import GoogleMap from '../components/common/GoogleMap.vue';
import SearchFilterBiking from './SearchFilterBiking.vue';

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
