<template>
  <NavBarView />
  <SearchBarView />
  <div class="wrap">
    <MapView />
    <WeatherView />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import NavBarView from "./components/NavBarView.vue";
import SearchBarView from "./components/SearchBarView.vue";
import MapView from "./components/MapView.vue";
import WeatherView from "./components/WeatherView.vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  store.dispatch("getWeather");
});
</script>

<style lang="scss" scoped>
.wrap {
  padding: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
