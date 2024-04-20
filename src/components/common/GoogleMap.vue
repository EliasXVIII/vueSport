<template>
  <div ref="mapElement" class="map-container"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const mapElement = ref(null);
const map = ref(null);

// Función para cargar el script de Google Maps API
const loadGoogleMapsScript = () => {
  return new Promise((resolve, reject) => {
    const existingScript = document.getElementById('googleMapsScript');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'googleMapsScript';
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAd9UGOF21EFsSHh0UwsqYPL22Mm5KPb6k&callback=initMap`;
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

// Inicializa el mapa y el marcador después de cargar el script
window.initMap = async () => {
  await loadGoogleMapsScript();
  const { Map } = google.maps;
  map.value = new Map(mapElement.value, {
    zoom: 10,
    center: { lat: 42.507095, lng: -2.361620 },
    mapId: 'DEMO_MAP_ID'
  });

  // Crear un marcador en el mapa
  const marker = new google.maps.Marker({
    position: { lat: 42.507095, lng: -2.361620 },
    map: map.value,
    title: 'Hello World!'
  });
};

onMounted(() => {
  initMap();
});
</script>

<style>
.map-container {
  width: 100%;
  height: 500px;
}
</style>
