
<script setup>
import { ref, reactive, watch } from 'vue';
import { Loader } from '@googlemaps/js-api-loader';

// Replace with your Google Maps API key
const apiKey = 'AIzaSyAd9UGOF21EFsSHh0UwsqYPL22Mm5KPb6k';
const loader = new Loader({
  apiKey,
  version: 'weekly',
  libraries: ['places']
});

const mapCenter = ref({ lat: 40.416775, lng: -3.703790 });
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

loader.load().then(() => {
  // Google Maps API is ready to use
  applyFilters(); // Apply filters once the map is loaded
});
</script>
<template>
  <div id="app">
    <google-map
      :center="mapCenter"
      :zoom="10"
      style="width: 100%; height: 500px;"
      :options="mapOptions"
    >
      <google-map-marker
        v-for="(marker, index) in displayedMarkers"
        :key="index"
        :position="marker.position"
        :clickable="true"
        :draggable="false"
        @click="mapCenter = marker.position"
      ></google-map-marker>
    </google-map>
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
