import { mount } from '@vue/test-utils';
import MyComponent from './MyComponent.vue'; // Ajusta la ruta según la ubicación real de tu componente

describe('MyComponent', () => {
  it('se monta correctamente', () => {
    const wrapper = mount(MyComponent);

    // Verifica que el componente se haya montado
    expect(wrapper.exists()).toBe(true);
  });

  it('renderiza el Navbar y el Footer', () => {
    const wrapper = mount(MyComponent);

    // Verifica que los componentes Navbar y Footer estén presentes
    expect(wrapper.findComponent(Navbar).exists()).toBe(true);
    expect(wrapper.findComponent(Footer).exists()).toBe(true);
  });
});