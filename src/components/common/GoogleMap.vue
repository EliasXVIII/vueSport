
<script setup>
import { ref, reactive, watch } from 'vue';
import { Loader } from '@googlemaps/js-api-loader';
import { GoogleMap, Polyline } from 'vue3-google-map';

const apiKey = 'AIzaSyAd9UGOF21EFsSHh0UwsqYPL22Mm5KPb6k';
const loader = new Loader({
  apiKey,
  version: 'weekly',
  libraries: ['places']
});

// Reactive property to track if Google Maps API has been loaded
const googleMapsLoaded = ref(false);

const center = ref({ lat: 40.416775, lng: -3.703790 });
const mapOptions = reactive({
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeId: 'terrain'
});

const allMarkers = reactive([
  { position: { lat: 40.417080, lng: -3.703612 }, title: 'Marker 1', distance: 5, difficulty: 'easy' },
  { position: { lat: 40.415392, lng: -3.707433 }, title: 'Marker 2', distance: 8, difficulty: 'medium' },
  // ... more markers
]);

const filters = reactive({
  distance: 10,
  difficulty: 'easy'
});

const displayedMarkers = ref([]);

const applyFilters = () => {
  displayedMarkers.value = allMarkers.filter(marker => {
    return marker.distance <= filters.distance && marker.difficulty === filters.difficulty;
  });
};

watch(filters, (newFilters) => {
  applyFilters();
});


loader.importLibrary().then(() => {
  // Google Maps API is ready to use
  applyFilters(); // Apply filters once the map is loaded
  googleMapsLoaded.value = true; // Set the loading status to true
});
</script>


<template>
  <div class="mt-24 ml-24 sticky top-0">
    <GoogleMap
        api-key="AIzaSyAd9UGOF21EFsSHh0UwsqYPL22Mm5KPb6k"
        style="width: 80%; height: 80vh "
        mapTypeId="terrain"
        :center="center"
        :zoom="7"
        class=""
      >
        <Polyline :options="hikingTrail" />
      </GoogleMap>

     <!-- Filters -->
      <div>
        <label for="distance">Distance (km):</label>
        <input type="number" id="distance" v-model.number="filters.distance" />
        <label for="difficulty">Difficulty:</label>
        <select id="difficulty" v-model="filters.difficulty">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button @click="applyFilters">Apply Filters</button>
      </div>
    
  </div>
  
    
  
    
</template>


