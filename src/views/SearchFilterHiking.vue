<template>
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
        <option value="MEDIA">Medium</option>
        <option value="ALTA">Hard</option>
      </select>
    </div>
  </div>

   <!-- Displaying filtered routes -->
   <div class="flex justify-center">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
      <Card
        v-for="route in filteredRoutes"
        :key="route._id"
        :title="route['IZENA/NOMBRE']"
        :imagePath="route['imagePath']"
        :duration="route['DENBORA (OO:MM)/DURACION (HH:MM)']"
        :distance="route['LUZERA (KM)/LONGITUD (KM)']"
        :difficulty="route['ZAILTASUNA/DIFICULTAD']"
        :routeUrl="route['URLA/URL']"
        class="h-auto max-w-full rounded-lg"
      />
    </div>
  </div>
</template>
<script setup>
import useRoutes from '../assets/composable/fetchHiker';
import Card from '../components/ui/Card.vue';
import { ref, computed, defineEmits,watch } from 'vue';
// Reactive state for storing the complete route data
const {routes}=useRoutes();

// Reactive states for filters
const filterDistance = ref('');
const filterDifficulty = ref('');

const emit=defineEmits(['filteredRoutes']);

// Computed property to filter routes based on selected criteria
const filteredRoutes = computed(() => {
  return routes.value.filter(route => {
    const matchesDistance = filterDistance.value ? route['LUZERA (KM)/LONGITUD (KM)'] && route['LUZERA (KM)/LONGITUD (KM)'] <= filterDistance.value : true;
    const matchesDifficulty = filterDifficulty.value ? route['ZAILTASUNA/DIFICULTAD'] && route['ZAILTASUNA/DIFICULTAD'].includes(filterDifficulty.value) : true;
    return matchesDistance && matchesDifficulty;
  });
});

// Emit filtered route positions when filters are applied
const applyFilters = () => {
  const filteredPositions = filteredRoutes.value.map(route => ({
    lat: route.latitude,
    lng: route.longitude
  }));
  emit('filteredRoutes', filteredPositions);
  console.log(filteredPositions)
};

// Watch for changes in filterDistance and filterDifficulty and apply filters
watch([filterDistance, filterDifficulty], () => {
  applyFilters();
});

// Call applyFilters initially to emit the event when the component is first rendered
applyFilters();

</script>

<style scoped>
.container {
    position: relative;
    z-index: 10; /* Higher z-index to place components above the video */
    /* Add any other styling for your components */
  }
</style>