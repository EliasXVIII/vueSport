
<template>
  <div class="max-w-sm bg-custom-oscuro border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mt-12 mr-10%  shadow-lg shadow-rose-950 ">
    <div class="relative w-full h-0" style="padding-bottom: 100%;">
      <a target="_blank" :href="routeUrl">      
        <img :src="imagePath" alt="Hiking route" class="absolute inset-0 w-full h-full object-cover rounded-t-lg">
      </a>
    </div>
    <div class="p-5">
      <h5 class="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">{{ title }}</h5>
      <p class="text-sm font-semibold text-rose-500">Duration approximate: {{ duration }} Hs</p>
      <p class="text-sm font-semibold text-rose-500">Distance: {{ distance }} Km</p>
    </div>
  </div>
</template>



  <script setup>
  import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  imagePath: String,
  duration: String,
  distance: String,
  routeUrl: String
});


</script>



 