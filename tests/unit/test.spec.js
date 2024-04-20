// App.spec.js
import { mount } from '@vue/test-utils';
import App from './App.vue'; // Ajusta la ruta según la ubicación real de tu componente

describe('App', () => {
  it('se monta correctamente', () => {
    const wrapper = mount(App);

    // Verifica que el componente se haya montado
    expect(wrapper.exists()).toBe(true);
  });

  it('incrementa el contador cuando se hace clic en el botón', async () => {
    const wrapper = mount(App);

    // Verifica que el contador inicial sea 0
    expect(wrapper.find('p').text()).toContain('Contador: 0');

    // Haz clic en el botón
    await wrapper.find('button').trigger('click');

    // Verifica que el contador se haya incrementado a 1
    expect(wrapper.find('p').text()).toContain('Contador: 1');
  });
});