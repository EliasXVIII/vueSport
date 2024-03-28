<template>
  <nav class="bg-custom-green border-gray-200 dark:bg-gray-900 h-32">
    <div class="flex items-center justify-between mx-auto p-4 h-full lg:max-w-screen-2xl">
      <!-- Mobile menu button -->
      <button  @click="toggleMenu" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-lg text-white rounded-lg md:hidden hover:bg-custom-gray focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>

      <div v-if="isMenuOpen" id="navbar-default" class="fixed inset-x-0 top-0 p-4 bg-white dark:bg-gray-700 shadow-md h-70vh w-60vw overflow-y-auto z-20" >
         <!-- Close button -->
        <button @click="isMenuOpen = false" class="absolute top-4 right-4">
          <span class="sr-only">Close menu</span>
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <!-- Mobile menu content -->
        <div id="dropdownNavbar" class="z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 w-full h-full">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <router-link to="/" @click="isMenuOpen = false" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</router-link>
                  </li>
                  <li>
                    <router-link to="/hiking" @click="isMenuOpen = false" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hiking</router-link>
                  </li>
                  <li>
                    <router-link to="biking" @click="isMenuOpen = false" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Biking</router-link>
                  </li>
                </ul>
          </div> 
      </div>

      <!-- Logo centered with flex-grow and justify-self-center -->
      <div class="flex-grow flex justify-center md:justify-between">
        <a href="/" class="flex items-center space-x-3">
          <img src="/src/assets/Captura_de_pantalla_-2024-03-26_10-26-56-removebg-preview.webp" alt="VueSport Logo" class="w-20 h-30 object-cover">
        </a>

        <!-- Navigation Links -->
        <div class="hidden md:flex md:items-center md:w-auto" id="navbar-default">
          <ul class="flex justify-between items-center space-x-32 p-0">
            <li>
              <router-link to="/" class="block py-2 px-3 font-ubuntu text-white text-xl hover:bg-custom-gray hover:text-white rounded transition duration-300"><font-awesome-icon icon="home" /> Home</router-link>
            </li>
            <li>
              <router-link to="/hiking" class="block py-2 px-3 text-white text-xl hover:bg-custom-gray hover:text-white rounded transition duration-300"> <font-awesome-icon icon="hiking" /> Hiking</router-link>
            </li>
            <li>
              <router-link to="/biking" class="block py-2 px-3 text-white text-xl hover:bg-custom-gray hover:text-white rounded transition duration-300"><font-awesome-icon icon="biking" /> Biking</router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Star icon always visible -->
      <font-awesome-icon :icon="['far', 'star']" class="text-white fa-2x md:block mx-24"/>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

// This ref holds the state of the menu's visibility
const isMenuOpen = ref(false);

// This function toggles the state of the menu's visibility
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.w-60vw {
  width: 60vw;
}

.h-70vh {
  height: 70vh;
}
</style>
