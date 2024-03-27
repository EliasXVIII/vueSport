<!-- App.vue -->
<template>
  <div class="bg-green">
   
    <Navbar/>
     <!-- Router View -->
     <router-view></router-view>
    <Footer/>
   
  </div>
</template>

<script setup>
import Navbar from './components/ui/Navbar.vue';

import Footer from './components/ui/Footer.vue'

</script>
