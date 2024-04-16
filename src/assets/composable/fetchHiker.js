import { ref, computed, onMounted } from 'vue';

export default function useRoutes() {
  const routes = ref([]);
  const filterDistance = ref('');
  const filterDifficulty = ref('');
  const duraciones_Hiker = ref([]);
  const distancias_Hiker = ref([])


  // Método para obtener los datos de rutas de senderismo del servidor
  const fetchDataHiker = async () => {
    try {
      const response = await fetch('http://localhost:3000/records_senderos');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const datosCompletos_Hiker = await response.json();
      routes.value = datosCompletos_Hiker; // Assign the fetched data to the routes reactive reference
      console.log(datosCompletos_Hiker)
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  onMounted(fetchDataHiker);

  return {
    routes,
    filterDifficulty,
    filterDistance,
    duraciones_Hiker,
    distancias_Hiker
  }};
