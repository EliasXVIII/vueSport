<!-- App.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar con z-index alto -->
    <Navbar class="z-50" />

    <!-- Contenido principal con padding para el navbar y footer -->
    <div class="flex-grow">
      <!-- Router View -->
      <router-view></router-view>
    </div>

    <!-- Footer con z-index alto -->
    <Footer class="z-50" />
  </div>
</template>

<script setup>
import Navbar from './components/ui/Navbar.vue';
import Footer from './components/ui/Footer.vue';

</script>

