import { ref, onMounted } from 'vue';

export default function useRoutes() {
  const routes = ref([]);
  const filterDistance = ref('');
  const filterDifficulty = ref('');
  const duraciones_Biker = ref([]);
  const distancias_Biker = ref([]);

  // Método para obtener los datos de rutas de senderismo del servidor
  const fetchDataBiker = async () => {
    try {
      const response = await fetch('http://localhost:3000/records_bici');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const datosCompletos_Biker = await response.json();
      routes.value = datosCompletos_Biker; // Corregido el nombre de la variable
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  onMounted(fetchDataBiker);

  return {
    routes,
    filterDifficulty,
    filterDistance,
    duraciones_Biker,
    distancias_Biker
  };
}
