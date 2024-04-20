<template>
  <div>
    <!-- Text container overlapping the image -->
    <div class="absolute inset-0 flex items-center justify-center z-10">
      <figcaption class="text-6xl font-bold text-white" style="font-family: 'Ubuntu', sans-serif;">
      </figcaption>
    </div>
  </div>

  <figure class="relative flex flex-col items-center">
    <img class="img_hiking" src="/src/assets/images/hiking6.jpg" style="width: 100%; height: 35rem; object-fit: cover; object-position: center;">
    <figcaption class="absolute text-3xl font-bold text-white top-0 left-0 right-0 flex items-center justify-center h-full" style="font-family: 'Ubuntu', sans-serif;">
      <p>HIKING</p>
    </figcaption>
  </figure>

 
  <div class="grid grid-cols-2 gap-4">
  <div class="p-4">
    <!-- Filters for distance and difficulty -->
    <SearchFilterHiking/>
  </div>
  <div class="p-4">
    <GoogleMap />
  </div>
</div>
  
</template>

<script setup>
import GoogleMap from '../components/common/GoogleMap.vue';
import SearchFilterHiking from './SearchFilterHiking.vue';

</script>
