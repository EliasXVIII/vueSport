<template>
  <div  class="bg-green">
    <Navbar />
    <HikingCard />

     <!-- Router View -->
     <router-view/>
  </div>
</template>

<script setup>
import Navbar from './components/ui/Navbar.vue'
import HikingCard from './components/ui/HikingCard.vue'
</script>

