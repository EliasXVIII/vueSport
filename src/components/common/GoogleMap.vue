<template>
  <div class="mt-24 ml-24 sticky top-10">
    <div  ref="mapElement" style="width: 80%; height: 60vh;"></div>
  </div>
  
</template>

<script setup>
import { onMounted, ref, provide, watch, defineProps } from 'vue';
import { useEventBus } from '/src/assets/composable/userEventBus.js';

const mapElement = ref(null);
const map = ref(null);
const markers = ref([]);

// Define filteredPositions prop with default value
const { filteredPositions } = defineProps({
  filteredPositions: {
    type: Array,
    default: () => []
  }
});

// Function to add markers for filtered routes
const addMarkersForRoutes = (routes) => {
  // Remove previous markers
  // Assuming `markers` is a ref containing the array of previous markers
  markers.value.forEach(marker => marker.setMap(null));
  markers.value = [];

  routes.forEach(route => {
    const marker = new google.maps.Marker({
      position: { lat: route.latitude, lng: route.longitude },
      map: map.value,
      title: route['IZENA/NOMBRE']
    });
    markers.value.push(marker);
  });
};

// Function to load the Google Maps API script
const loadGoogleMapsScript = () => {
  return new Promise((resolve, reject) => {
    const existingScript = document.getElementById('googleMapsScript');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'googleMapsScript';
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAd9UGOF21EFsSHh0UwsqYPL22Mm5KPb6k&callback=initMap`; // Replace with your API key
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Google Maps script'));
      document.head.appendChild(script);
    } else {
      resolve();
    }
  });
};

// Initialize the map after loading the script
const initMap = async () => {
  await loadGoogleMapsScript();
  const { Map, Marker } = google.maps;
  map.value = new Map(mapElement.value, {
    zoom: 12,
    center: { lat: 43.263012, lng: -2.934985 } // Default center
  });

  // Check if the Geolocation API is available in the browser
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Create a marker for the current position
        new Marker({
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          map: map.value,
          title: 'Your Current Location'
        });

        // Center the map on the current position
        map.value.setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      (error) => {
        console.error('Error getting current position:', error);
      }
    );
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
};

// Provide the event bus to the component
const { eventBus } = useEventBus();
provide('eventBus', eventBus);



const applyFilters = () => {
  console.log('Routes:', routes.value); // Check the initial routes data
  console.log('Filter Distance:', filterDistance.value); // Check the filter distance value
  console.log('Filter Difficulty:', filterDifficulty.value); // Check the filter difficulty value

  const filteredPositions = filteredRoutes.value.map(route => ({
    lat: route.latitude,
    lng: route.longitude
  }));

  console.log('Filtered Positions:', filteredPositions); // Check the filtered positions
  emit('filteredRoutes', filteredPositions);
};




onMounted(async () => {
  try {
    await initMap(); // Initialize the map when the component is mounted
  } catch (error) {
    console.error('Error initializing the map:', error);
  }

  eventBus.on('filteredRoutes', (positions) => {
    addMarkersForRoutes(positions);
  });
});

// Watch for changes in filtered positions
watch(filteredPositions, (newPositions) => {
  addMarkersForRoutes(newPositions);
  applyFilters();
});
</script>