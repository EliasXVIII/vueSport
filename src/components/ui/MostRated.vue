<template>
  <h1 class="text-4xl font-bold text-center text-custom-green mt-12" style="font-family: 'Ubuntu', sans-serif;">Most Rated Routes</h1>
<!--   <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <Card
      v-for="route in routes.slice(0,6)"
      :key="route._id"
      :title="route['IZENA/NOMBRE']"
      :imagePath="route['imagePath']"
      :duration="route['DENBORA (OO:MM)/DURACION (HH:MM)']"
      :distance="route['LUZERA (KM)/LONGITUD (KM)']"
      :difficulty="route['ZAILTASUNA/DIFICULTAD']"
      :routeUrl="route['URLA/URL']"
      class="h-auto max-w-full rounded-lg"
    />
  </div>
</template> -->

  <div class="flex justify-center">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
      <Card
        v-for="route in routes"
        :key="route._id"
        :title="route['IZENA/NOMBRE']"
        :imagePath="route['imagePath']"
        :duration="route['DENBORA (OO:MM)/DURACION (HH:MM)']"
        :distance="route['LUZERA (KM)/LONGITUD (KM)']"
        :difficulty="route['ZAILTASUNA/DIFICULTAD']"
        :routeUrl="route['URLA/URL']"
        class="h-auto max-w-full rounded-lg"
      />
    </div>
  </div>
</template>


<script setup>
import Card from '../ui/Card.vue';
import useRoutes from '../../assets/composable/fetchHiker';
const { routes } = useRoutes();
</script>
