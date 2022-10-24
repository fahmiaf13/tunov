<script setup>
import Logo from "../assets/images/logo-red.svg";
</script>
<template>
  <div class="w-full justify-center flex fixed mt-5 z-[99]">
    <div class="flex w-1/2 bg-whiter items-center justify-around text-tomato py-4 rounded-full text-sm">
      <div>HOME</div>
      <div>ABOUT</div>
      <img :src="Logo" alt="logo-red" />
      <div>CATALOGUE</div>
      <div>FIND US</div>
    </div>
  </div>
</template>
