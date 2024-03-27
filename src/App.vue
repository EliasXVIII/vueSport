<template>
  <div  class="bg-green">
    <Navbar />
    <card />

     <!-- Router View -->
     <router-view/>
  </div>
</template>

<script setup>
import Navbar from './components/ui/Navbar.vue'
import card from './components/ui/card.vue'

</script>

