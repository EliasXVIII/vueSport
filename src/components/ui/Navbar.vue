<template>
    <nav class="bg-custom-green border-gray-200 dark:bg-gray-900 h-32">
      <div class="flex justify-between items-center mx-auto p-4 h-full lg:max-w-screen-2xl">
        <!-- Logo -->
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/src/assets/logo-removebg-preview.png" alt="VueSport Logo" class="w-20 h-30 object-cover ml-28">
        </a>
  
        <!-- Mobile menu button -->
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-lg text-white rounded-lg md:hidden hover:bg-custom-gray focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
  
        <!-- Navigation Links -->
        <div class="hidden w-full md:flex md:items-center md:justify-center" id="navbar-default">
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
        <font-awesome-icon :icon="['far', 'star']" class="text-white mr-28 fa-2x"/>


      </div>
    </nav>
  </template>
  
  <script setup>
  
  </script>
  