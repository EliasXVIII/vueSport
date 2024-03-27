<!-- App.vue -->
<template>
  <div class="bg-green">
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/hiking">Hiking</router-link>
    <router-link to="/biking">Biking</router-link> -->
    <Navbar/>
    <!-- Router View -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navbar from './components/ui/Navbar.vue';

import Footer from './components/ui/Footer.vue'
</script>
