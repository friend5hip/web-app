<template>
  <NavBarView />
  <MainView />
  <!-- <button @click="$store.commit('addCount')">뮤테이션: 카운터</button>
  {{ $store.state.counter }}
  <button @click="$store.dispatch('getWeather')">데이터 비동기 처리</button>
  {{ $store.state.weatherData }} -->
</template>

<script setup>
import { onMounted } from "vue";
import NavBarView from "./components/NavBarView.vue";
import MainView from "./components/MainView.vue";
// import axios from "axios";

// const weatherData = ref({
//   icon: "icon",
//   temp: 0,
//   text: "text",
//   location: "location",
//   city: "Ansan",
// });

// const getWeather = async () => {
//   const res = await axios.get(
//     `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=4eedfeb184dc7cb08af6c0bd529c48b9`
//   );
//   console.log(res.data);

//   weatherData.value.icon = res.data.weather[0].icon;
//   weatherData.value.temp = res.data.main.temp;
//   weatherData.value.text = res.data.weather[0].description;
//   weatherData.value.location = res.data.sys.country;
//   weatherData.value.city = res.data.name;
// };

onMounted(() => {
  // getWeather();
});

// const searchCity = (city) => {
//   console.log(city);
//   weatherData.value.city = city;
//   getWeather();
// };
</script>

<style lang="scss" scoped></style>
