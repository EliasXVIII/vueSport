<template>
  <div class="relative">
    <!-- Fixed image container -->
    <div class="w-full h-50vh z-0">
      <img class="w-full h-60 object-cover" src="../assets/images/hiking6.jpg" alt="Hiking Image" />
    </div>

    <!-- Text container overlapping the image -->
    <div class="absolute inset-0 flex items-center justify-center z-10">
      <figcaption class="text-6xl font-bold text-white" style="font-family: 'Ubuntu', sans-serif;">
        HIKING
      </figcaption>
    </div>
  </div>


<div class="grid grid-cols-2 gap-4">
  <div class="p-4">
    <SearchFilter/>
  </div>
  <div class="p-4">
    <GoogleMap/>
  </div>
</div>


 
</template>

<script setup>
import GoogleMap from '../components/common/GoogleMap.vue';
import SearchFilter from './SearchFilter.vue';

</script>

<style scoped>
/* Add your styles here */
</style>
