<template>
  <NavBarView />
  <SearchBarView />
  <WeatherView />
</template>

<script setup>
import { onMounted } from "vue";
import NavBarView from "./components/NavBarView.vue";
import SearchBarView from "./components/SearchBarView.vue";
import WeatherView from "./components/WeatherView.vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  store.dispatch("getWeather");
});
</script>

<style lang="scss" scoped></style>
