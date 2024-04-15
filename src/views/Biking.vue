<template>
  <div class="relative">
    <!-- Fixed image container -->
    <div class="w-full h-50vh z-0">
      <img class="w-full h-60 object-cover" src="/src/assets/Card-Image/prueba img.png" alt="Biking Image" />
    </div>

    <!-- Text container overlapping the image -->
    <div class="absolute inset-0 flex items-center justify-center z-10">
      <figcaption class="text-6xl font-bold text-white" style="font-family: 'Ubuntu', sans-serif;">
        BIKING
      </figcaption>
    </div>
  </div>


<div class="grid grid-cols-2 gap-4">
  <div class="p-4">
    <!-- Filters for distance and difficulty -->
  <div class="max-w-sm mx-auto relative z-20">
    <div class="mb-5">
      <label for="distance" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Max Distance (km):</label>
      <input type="number" id="distance" v-model.number="filterDistance" class="shadow-sm bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter max distance" />
    </div>
    <div class="mb-5">
      <label for="difficulty" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Difficulty:</label>
      <select id="difficulty" v-model="filterDifficulty" class="shadow-sm bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
        <option value="">All Difficulties</option>
        <option value="BAJA">Easy</option>
        <option value="MEDIA-BAJA">Medium-Low</option>
        <option value="MEDIUM-ALTA">Medium-High</option>
        <option value="HARD">Hard</option>
      </select>
    </div>
  </div>
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
