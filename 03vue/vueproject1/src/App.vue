<template>
  <NavBarView />
  <router-view />
  <!-- <HomeView />
  <AboutView />
  <PortfolioView /> -->
</template>

<script setup>
import NavBarView from "./components/NavBarView.vue";
import HomeView from "./components/HomeView.vue";
import AboutView from "./components/AboutView.vue";
import PortfolioView from "./components/PortfolioView.vue";
</script>

<style lang="scss" scoped></style>
