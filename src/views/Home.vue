<script setup>
import Navbar from "../components/Navbar.vue";
import Carousel from "../components/Carousel.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <!-- Hero -->
  <section class="h-screen">
    <Navbar />
    <div class="flex flex-col justify-end items-center h-full">
      <div class="relative w-full flex justify-center">
        <div class="absolute text-7xl font-pacifico">
          <div class="w-full text-stroke-title">Great To See You</div>
          <div class="w-full mt-5 text-stroke-title"><span class="text-sun"> Fellas!</span></div>
          <div class="text-2xl font-montserrat font-extrabold uppercase mt-5 text-peach text-stroke-subtitle">
            <span class="text-peach flex justify-center text-center">
              Wanna see some catchy stuff <br class="text-center" />
              for your daily style ?
            </span>
          </div>
        </div>
      </div>
      <img src="../assets/images/hero-img.png" />
    </div>
  </section>
  <!-- About Us -->
  <section class="h-screen bg-peach py-5">
    <div class="container mx-auto">
      <div class="text-center text-4xl font-extrabold my-10">Every <span class="font-pacifico text-sun">Weave</span> We Think Of You</div>
      <div class="flex">
        <img src="../assets/images/about-img.png" alt="" class="drop-shadow border-4 border-darker" />
        <div class="px-5 text-lg">
          Tunov is a pioneering brand engaged in the fashion sector from Bandung specifically for women. Tunov implements a different concept, namely the concept that is carried out is that the product used can provide attention to people
          who see it or in other words can make the user appear more attractive according to thetagline that is implanted is "Too Easy To Be Catchy". <br />
          On the other hand, of course, having high hopes for the products used can provide comfort, happiness, and benefits for users, this is as stated in the Tunov logo which is represented with a smile icon.
        </div>
      </div>
    </div>
  </section>
  <!-- Catalogue -->
  <section class="h-screen">
    <div class="text-3xl font-bold text-darker">Our New Product</div>
    <Carousel />
  </section>
  <!-- Footer -->
  <section class="mt-5">
    <Footer />
  </section>
</template>

<style scoped>
.text-stroke-title {
  color: white;
  text-align: center;
  text-shadow: 5px 5px 0 #000, 1px -2px 0 #000, -2px 2px 0 #000, -2px -2px 0 #000;
}

.text-stroke-subtitle {
  text-shadow: 5px 5px 0 #000, 1px -2px 0 #000, -2px 2px 0 #000, -2px -2px 0 #000;
}

.drop-shadow {
  box-shadow: 10px 10px 0px 0px #272729;
  -webkit-box-shadow: 10px 10px 0px 0px #272729;
  -moz-box-shadow: 10px 10px 0px 0px #272729;
}
.drop-shadow:hover {
  box-shadow: 0px 0px 0px 0px #272729;
  -webkit-box-shadow: 0px 0px 0px 0px #272729;
  -moz-box-shadow: 0px 0px 0px 0px #272729;
  transform: translate(10px, 10px);
  transition: 300ms;
}
</style>
