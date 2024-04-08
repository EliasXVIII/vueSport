<!-- App.vue -->
<template>
  <div>
   
    <Navbar/>
    <GoogleMap/>
     <!-- Router View -->
     <router-view></router-view>
    <Footer/>
   
  </div>
</template>

<script setup>
import Navbar from './components/ui/Navbar.vue';

import GoogleMap from './components/common/GoogleMap.vue'

import Footer from './components/ui/Footer.vue'

</script>
