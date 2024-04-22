<template>
  <div ref="mapElement" style="width: 60vh; height: 60vh;"></div>
</template>

<script setup>
import { onMounted, ref, provide, watch, defineProps } from 'vue';
import { useEventBus } from '/src/assets/composable/useEventBus.js';

const mapElement = ref(null);
const map = ref(null);

// Function to add markers for filtered routes
const addMarkersForRoutes = (routes) => {
  console.log('Adding markers for routes:', routes);
  routes.forEach(route => {
    console.log('Adding marker for route:', route);
    new google.maps.Marker({
      position: { lat: route.latitude, lng: route.longitude },
      map: map.value,
      title: route['IZENA/NOMBRE']
    });
  });
};




// Function to load the Google Maps API script
const loadGoogleMapsScript = () => {
  return new Promise((resolve, reject) => {
    const existingScript = document.getElementById('googleMapsScript');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'googleMapsScript';
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAd9UGOF21EFsSHh0UwsqYPL22Mm5KPb6k&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        console.log('Google Maps script loaded successfully'); // Log script load success
        resolve();
      };
      script.onerror = () => {
        console.error('Failed to load Google Maps script'); // Log script load failure
        reject(new Error('Failed to load Google Maps script'));
      };
      document.head.appendChild(script);
    } else {
      console.log('Google Maps script already exists'); // Log existing script
      resolve();
    }
  });
};

// Initialize the map and marker after loading the script
window.initMap = async () => {
  console.log('Initializing map'); // Log map initialization
  await loadGoogleMapsScript();
  const { Map, Marker } = google.maps;
  map.value = new Map(mapElement.value, {
    zoom: 5,
    center: { lat: 42.507095, lng: -2.361620 }, // Default center
    mapId: 'DEMO_MAP_ID'
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

const { eventBus } = useEventBus();
provide('eventBus', eventBus);

onMounted(async () => {
  try {
    await loadGoogleMapsScript();
    window.initMap = () => {
      const { Map } = google.maps;
      map.value = new Map(mapElement.value, {
        zoom: 12,
        center: { lat: 42.507095, lng: -2.361620 },
        mapId: 'DEMO_MAP_ID'
      });
    };
    window.initMap(); // Call initMap after the script is loaded and the component is mounted
  } catch (error) {
    console.error('Error initializing the map:', error);
  }

  eventBus.on('filteredRoutes', (positions) => {
    addMarkersForRoutes(positions);
  });
});
// Define filteredPositions prop with default value
const { filteredPositions } = defineProps({
  filteredPositions: {
    type: Array,
    default: () => []
  }
});

// Watch for changes in filtered positions
watch(filteredPositions, (newPositions) => {
  addMarkersForRoutes(newPositions);
});
</script>



