<script setup>
import Navbar from "../components/Navbar.vue";
import Carousel from "../components/Carousel.vue";
</script>

<template>
  <!-- Hero -->
  <section class="h-screen">
    <Navbar />
    <div class="flex justify-center items-center h-full">
      <div class="text-6xl font-extrabold title">Great To See You Fellas!</div>
    </div>
  </section>
  <!-- About Us -->
  <section class="h-screen bg-tomato">
    <div class="text-5xl font-extrabold text-darker">About Us</div>
  </section>
  <!-- Catalogue -->
  <section class="h-screen">
    <Carousel />
  </section>
</template>

<style scoped>
.title {
}
</style>
