<script setup>
import { Product } from "../constant/Menu";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Navbar from "../components/Navbar.vue";
import Case from "case";
import ShopeeImg from "../assets/images/shopee.svg";
import LazadaImg from "../assets/images/lazada.svg";

const route = useRoute();

const menu = Product.find((prod) => {
  return prod.product === route.params.product;
});
</script>

<template>
  <Navbar />
  <div class="h-screen flex bg-whiter">
    <div class="w-1/2 flex justify-center items-center" :style="{ backgroundColor: menu.hex }">
      <img :src="menu.img" alt="" class="w-1/2" />
    </div>
    <div class="w-1/2 text-darker flex flex-col justify-center pl-10">
      <div class="font-extrabold text-5xl">{{ Case.upper(menu.product) }}</div>
      <div class="divider"></div>
      <div class="gap-y-3 flex flex-col">
        <div class="font-extrabold text-2xl">SIZE</div>
        <div>{{ menu.size }}</div>
        <div class="font-extrabold text-2xl">COLOR</div>
        <div>{{ menu.color }}</div>
        <div class="font-extrabold text-2xl">FEATURE</div>
        <div>{{ menu.feature }}</div>
      </div>
      <div class="divider"></div>
      <div class="font-extrabold text-2xl">ORDER NOW AT</div>
      <div class="flex gap-x-2 mt-3">
        <button class="btn bg-darker rounded-none"><img :src="LazadaImg" alt="" /></button>
        <button class="btn bg-darker rounded-none"><img :src="ShopeeImg" alt="" /></button>
      </div>
    </div>
  </div>
</template>
