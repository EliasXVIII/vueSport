<template>
  <div  class="bg-green">
    <Navbar />
    <Footer />

     <!-- Router View -->
     <router-view/>
  </div>
</template>

<script setup>
import Navbar from './components/ui/Navbar.vue'
import Footer from './components/ui/Footer.vue'
</script>

