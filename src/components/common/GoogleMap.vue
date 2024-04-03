
<script setup>
import { GoogleMap, Polyline } from 'vue3-google-map'

const center = { lat: 33.678, lng: -116.243 }
const hikingTrail = {
  path: [
    { lat: 33.678, lng: -116.243 },
    { lat: 33.679, lng: -116.244 },
    { lat: 33.680, lng: -116.245 },
    { lat: 33.681, lng: -116.246 },
    { lat: 33.682, lng: -116.247 },
    // Puedes continuar agregando más puntos siguiendo este patrón
  ],
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
}
</script>

<template>
  <GoogleMap
    api-key="AIzaSyAd9UGOF21EFsSHh0UwsqYPL22Mm5KPb6k"
    style="width: 100%; height: 70vh"
    mapTypeId="terrain"
    :center="center"
    :zoom="7"
  >
    <Polyline :options="hikingTrail" />
  </GoogleMap>
</template>
