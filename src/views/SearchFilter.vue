<template>
    <div>
      <input type="number" v-model="filters.distance" placeholder="Distancia máxima (km)" />
      <select v-model="filters.terrain">
        <option value="">Todos los terrenos</option>
        <option value="montaña">Montaña</option>
        <option value="urbano">Urbano</option>
        <option value="rural">Rural</option>
      </select>
  
      <ul>
        <li v-for="route in filteredRoutes" :key="route.id">
          {{ route.name }} - {{ route.distance }} km - {{ route.terrain }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      const routes = ref([
        { id: 1, name: 'Ruta 1', distance: 10, terrain: 'montaña' },
        { id: 2, name: 'Ruta 2', distance: 5, terrain: 'urbano' },
        // ... más rutas
      ]);
  
      const filters = ref({
        distance: 0,
        terrain: ''
      });
  
      const filteredRoutes = computed(() => {
        return routes.value.filter(route => {
          return (
            (filters.value.distance === 0 || route.distance <= filters.value.distance) &&
            (filters.value.terrain === '' || route.terrain === filters.value.terrain)
          );
        });
      });
  
      return {
        routes,
        filters,
        filteredRoutes
      };
    }
  };
  </script>
  