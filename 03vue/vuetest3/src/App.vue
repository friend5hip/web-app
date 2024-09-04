<template>
  <div>
    <NavBarView />
    <SearchBarView />
    <WeatherView />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import NavBarView from "./components/NavBarView.vue";
import SearchBarView from "./components/SearchBarView.vue";
import WeatherView from "./components/WeatherView.vue";
import axios from "axios";

const weatherData = ref({
  icon: "icon",
  temp: 0,
  text: "text",
  location: "loc",
  city: "Seoul",
});

const getWeather = async () => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=4eedfeb184dc7cb08af6c0bd529c48b9`
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  getWeather();
});
</script>

<style lang="scss" scoped></style>
