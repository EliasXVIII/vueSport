<template>
  <h1 class="text-4xl font-bold text-center text-custom-green mt-12" style="font-family: 'Ubuntu', sans-serif;">Most Rated Routes</h1>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <Card
      v-for="route in routes"
      :key="route.id"
      :title="route.name"
      :imagePath="route.image"
      :duration="route.duration"
      :distance="route.distance"
      :routeUrl="route.url"
      class="h-auto max-w-full rounded-lg"
    />
  </div>
</template>

<script setup>
import Card from '../ui/Card.vue';
import useRoutes from '../../assets/composable/fetchHiker';
const { routes } = useRoutes(); // Destructure routes from useRoutes
</script>
