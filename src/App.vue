<!-- App.vue -->
<template>
  <div>
  
    <Navbar/>
<<<<<<< HEAD
    <Hero/>
    <GoogleMap/>
      <!-- Router View -->
      <router-view></router-view>
=======
    <!-- <GoogleMap/> -->
     <!-- Router View -->
     <router-view></router-view>
>>>>>>> abderrahmane
    <Footer/>
  
  </div>
</template>

<script setup>
import Navbar from './components/ui/Navbar.vue';
import Hero from './components/ui/Hero.vue'
import GoogleMap from './components/common/GoogleMap.vue'
import Footer from './components/ui/Footer.vue'

</script>
