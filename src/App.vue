<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

:root {
  /* --primary-color: #123446;
  --secondary-color: #146684;
  --third-color: #1fa1ce;
  --dark-color: #120d14;
  --light-color: #20dad8; */
  --primary-color: #461212;
  --secondary-color: #841414;
  --third-color: #ce1f1f;
  --dark-color: #1b1616;
  --light-color: #f01e1e;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  background-color: var(--dark-color);
  color: #fff;
}

a {
  text-decoration: none;
  color: #fff;
}

ul {
  list-style: none;
}

img {
  width: 100%;
}

.line {
  width: 250px;
  height: 2px;
  background-color: var(--secondary-color);
  margin: 0.2rem auto 1rem;
}

.bottom-line {
  width: 100%;
  height: 2px;
  background-color: var(--secondary-color);
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
}

.route-enter-from {
  opacity: 0;
  transform: scale(0.9);
}

.route-leave-to {
  opacity: 0;
}

.route-enter-active {
  transition: all 0.4s ease-out;
}

.route-leave-active {
  transition: all 0.4s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>