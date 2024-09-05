<template>
  <SearchBarView @searchCity="searchCity" />
  <WeatherView />
</template>

<script setup>
import SearchBarView from "./SearchBarView.vue";
import WeatherView from "./WeatherView.vue";
</script>

<style lang="scss" scoped></style>
