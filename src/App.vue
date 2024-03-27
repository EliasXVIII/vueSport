<template>
  <div  class="bg-green">
    <Navbar />
    <Hero />

     <!-- Router View -->
     <router-view/>
  </div>
</template>

<script setup>
import Navbar from './components/ui/Navbar.vue'
import Hero from './components/ui/Hero.vue'
</script>

