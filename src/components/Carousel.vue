<script>
import { Product } from "../constant/Menu";
export default {
  data() {
    return {
      active: 0,
      menus: Product,
    };
  },
  methods: {
    nextSlide() {
      if (this.active <= this.menus.length) {
        this.active = this.active += 1;
      }
    },
    prevSlide() {
      if (this.active > 0) {
        this.active = this.active + -1;
      }
    },
  },
};
</script>

<template>
  <ul>
    <li v-for="(menu, i) in menus" :style="{ backgroundImage: `url(${menu.img})`, backgroundColor: menu.hex }" role="button" :class="active === i ? 'active' : ''" @click="() => (active = i)" class="py-10 bg-origin-content">
      <h3 class="font-extrabold">{{ menu.product }}</h3>
      <div class="section-content">
        <div class="inner">
          <div class="bio">
            <h2 class="font-extrabold">{{ menu.product }}</h2>
            <p>
              {{ menu.color }}
            </p>
            <router-link :to="`/product/${menu.product}`">
              <button role="button" class="btn w-1/2 font-extrabold text-sm bg-sun text-darker border-sun hover:border-sun hover:bg-transparent hover:text-sun">MORE DETAILS</button>
            </router-link>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
body {
  font-family: "Roboto Condensed", sans-serif;
  color: #fff;
  line-height: 24px;
  font-size: 16px;
}

.bio {
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: min-content;
  grid-gap: 24px;
}

ul {
  display: flex;
  min-height: 750px;
  height: 100vh;
  margin: 0;
  padding: 1rem;
  overflow: hidden;
  list-style-type: none;
  width: 100%;
  min-width: 100%;
  flex-direction: column;

  @media only screen and (min-width: 1280px) {
    flex-direction: row;
  }
}

li {
  flex: 1;
  display: flex;
  align-items: stretch;
  cursor: pointer;
  transition: all 0.35s ease;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 15, 15, 0.75);
  }

  &.active {
    flex: 6;
    cursor: default;
    background-size: contain;

    &:before {
      background: linear-gradient(180deg, rgba(15, 15, 15, 0) 0%, #111111 100%);
    }
  }
}

h2 {
  font-size: 36px;
  line-height: 36px;
  font-weight: 700;
  text-transform: uppercase;

  @media only screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
  }

  @media only screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: 64px;
  }
}

h3 {
  font-weight: bold;
  white-space: nowrap;
  position: absolute;
  z-index: 30;
  opacity: 1;
  top: 50%;
  left: 50%;
  transition: top 0.35s, opacity 0.15s;
  transform-origin: 0 0;
  font-size: 24px;
  text-transform: uppercase;
  transform: translate(-50%, -50%) rotate(0deg);

  @media only screen and (min-width: 1280px) {
    top: 100%;
    left: 50%;
    font-size: 32px;
    transform: translate(-20px, -50%) rotate(-90deg);
  }

  .active & {
    opacity: 0;
    top: 200%;
  }
}

.section-content {
  position: relative;
  z-index: 30;
  opacity: 0;
  align-self: flex-end;
  width: 100%;
  transition: all 0.35s 0.1s ease-out;

  .active & {
    opacity: 1;
  }

  .inner {
    position: absolute;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-column-gap: 20px;
    align-items: flex-end;
    left: 0;
    bottom: 0;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.25s ease-out;

    @media only screen and (min-width: 768px) {
      grid-auto-flow: column;
      grid-template-columns: calc(100% - 340px) 300px;
      grid-column-gap: 40px;
      padding: 40px;
    }

    @media only screen and (min-width: 1280px) {
      grid-auto-flow: column;
      grid-template-columns: 460px 200px;
      grid-column-gap: 40px;
      padding: 40px;
    }

    .active & {
      opacity: 1;
    }
  }
}

.artist-profile-link {
  pointer-events: none;

  .active & {
    pointer-events: all;
  }
}
</style>
