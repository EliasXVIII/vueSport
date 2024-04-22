// useEventBus.js
import { reactive, readonly, onUnmounted, inject } from 'vue';

export const useEventBus = () => {
  const listeners = reactive({});

  const on = (event, callback) => {
    if (!listeners[event]) {
      listeners[event] = new Set();
    }
    listeners[event].add(callback);
  };

  const off = (event, callback) => {
    listeners[event]?.delete(callback);
  };

  const emit = (event, ...args) => {
    if (listeners[event]) {
      listeners[event].forEach(callback => {
        callback(...args);
      });
    }
  };

  onUnmounted(() => {
    Object.keys(listeners).forEach(event => {
      listeners[event].clear();
    });
  });

  return {
    eventBus: readonly({ on, off, emit })
  };
};
