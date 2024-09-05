<template>
  <NavBarView />
  <SearchBarView />
  <WeatherView />
  {{ $store.state.weatherData }}
</template>

<script setup>
import { onMounted } from "vue";
import NavBarView from "./components/NavBarView.vue";
import SearchBarView from "./components/SearchBarView.vue";
import WeatherView from "./components/WeatherView.vue";
import { useStore } from "vuex";

// const weatherData = ref({
//   icon: "icon",
//   temp: 0,
//   text: "text",
//   location: "location",
//   city: "Ansan",
// });

// const getWeather = async () => {
//   const res = await axios.get(
//     `https://api.openweathermap.org/data/2.5/weather?q=${$store.state.weatherData.icon}&appid=4eedfeb184dc7cb08af6c0bd529c48b9`
//   );
//   console.log(res.data);

//   weatherData.value.icon = res.data.weather[0].icon;
//   weatherData.value.temp = res.data.main.temp;
//   weatherData.value.text = res.data.weather[0].description;
//   weatherData.value.location = res.data.sys.country;
//   weatherData.value.city = res.data.name;
// };

const store = useStore();

onMounted(() => {
  // getWeather();
  store.dispatch("getWeather");
});
</script>

<style lang="scss" scoped></style>
