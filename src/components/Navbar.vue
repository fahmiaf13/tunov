<script setup>
import Logo from "../assets/images/logo-red.svg";
</script>
<template>
  <div class="w-full justify-center flex fixed mt-5 z-[99]">
    <div class="flex w-1/2 bg-transparent items-center justify-around text-pome py-4 rounded-full text-sm">
      <router-link to="/">
        <div>HOME</div>
      </router-link>
      <router-link to="/">
        <div>ABOUT</div>
      </router-link>
      <router-link to="/">
        <img :src="Logo" alt="logo-red" />
      </router-link>
      <router-link to="/">
        <div>CATALOGUE</div>
      </router-link>
      <router-link to="/">
        <div>FIND US</div>
      </router-link>
    </div>
  </div>
</template>
