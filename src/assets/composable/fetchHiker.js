import { ref, onMounted } from 'vue';

export default function useRoutes() {
  const routes = ref([]);

  onMounted(async () => {
    try {
      const response = await fetch('http://localhost:3000/records_senderos'); // Replace with your actual API endpoint
      const data = await response.json();
      routes.value = data;
    } catch (error) {
      console.error('Failed to fetch routes:', error);
    }
  });

  return {
    routes
  };
}
