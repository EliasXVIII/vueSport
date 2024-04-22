<template>
<figure class="relative flex flex-col items-center">
    <img class="img_hiking" src="/src/assets/images/biking2.jpg" style="width: 100%; height: 35rem; object-fit: cover; object-position: center;">
    <figcaption class="absolute text-3xl font-bold text-white top-0 left-0 right-0 flex items-center justify-center h-full" style="font-family: 'Ubuntu', sans-serif;">
      <p>BIKING</p>
    </figcaption>
</figure>


<div class="grid grid-cols-2 gap-4">
  <div class="p-4">
    <!-- Filters for distance and difficulty -->
    <SearchFilterBiking/>
  </div>
  <div class="p-4">
    <GoogleMap/>
  </div>
</div>


</template>

<script setup>
import GoogleMap from '../components/common/GoogleMap.vue';
import SearchFilterBiking from './SearchFilterBiking.vue';

</script>
