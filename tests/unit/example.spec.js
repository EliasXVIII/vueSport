/* import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue' */
import { ref, onMounted } from 'vue';
import useRoutes from 'vue-router'; // Asegúrate de ajustar la ruta del módulo según la estructura de tu proyecto

describe('useRoutes', () => {
  // Mock para fetch
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([{ id: 1, name: 'Route 1' }, { id: 2, name: 'Route 2' }])
    })
  );

  it('fetches data on mount', async () => {
    // Montar el hook
    const { routes } = useRoutes();

    // Esperar a que fetchDataBiker se ejecute
    await routes.value;

    // Verificar si se ha llamado a fetch con la URL correcta
    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/records_bici');

    // Verificar si las rutas se han cargado correctamente
    expect(routes.value).toEqual([{ id: 1, name: 'Route 1' }, { id: 2, name: 'Route 2' }]);
  });

  it('handles fetch error', async () => {
    // Mock para fetch que devuelve una respuesta no exitosa
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Not Found'
      })
    );

    // Montar el hook
    const { routes } = useRoutes();

    // Esperar a que fetchDataBiker se ejecute
    await routes.value;

    // Verificar si se ha manejado correctamente el error
    expect(console.error).toHaveBeenCalledWith('There has been a problem with your fetch operation:', expect.any(Error));
  });
});