<template>
  <NavBarView />
  <router-view :data="init" />
  <!-- <HomeView />
  <AboutView />
  <PortfolioView /> -->
</template>

<script setup>
import NavBarView from "./components/NavBarView.vue";
import { ref } from "vue";

const init = ref([
  { id: 1, title: "title1" },
  { id: 2, title: "title2" },
  { id: 3, title: "title3" },
  { id: 4, title: "title4" },
  { id: 5, title: "title5" },
  { id: 6, title: "title6" },
  { id: 7, title: "title7" },
  { id: 8, title: "title8" },
]);
</script>

<style lang="scss" scoped></style>
