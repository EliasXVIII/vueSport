<template>
  <div class="max-w-sm bg-custom-oscuro border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-12 mr-10%">
    <img :src="imagePath" alt="Hiking route" class="mt-2 mb-1 w-full max-w-xs h-auto mx-auto my-auto">
    <div class="p-5 flex flex-col items-center">
      <a :href="routeUrl">
        <h5 class="mb-4 text-2xl font-bold tracking-tight text-white dark:text-white">{{ title }}</h5>
      </a>
      <p class="mb-6 text-sm font-semibold text-white-900 uppercase text-white">Duration {{ duration }} Hs</p>
      <p class="mb-6 text-sm font-semibold text-white-900 uppercase text-white">Distance {{ distance }} Km</p>
      <!-- ... -->
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


