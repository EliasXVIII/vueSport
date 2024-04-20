
<template>
  <div class="flex flex-col min-h-screen">
    
    <Navbar class="z-50" />

    
    <div class="flex-grow">
     
      <router-view></router-view>
    </div>

    
    <Footer class="z-50" />
  </div>
</template>

<script setup>
import Navbar from './components/ui/Navbar.vue';
import Footer from './components/ui/Footer.vue';

</script>


