<template>
  <div class="weatherWrap">
    <div class="weather-info">
      <div>
        <img
          :src="`https://openweathermap.org/img/wn/${$store.state.weatherData.icon}@4x.png`"
          alt=""
        />
      </div>
      <div class="temp">
        {{ ($store.state.weatherData.temp - 273.15).toFixed(1) }}&deg
      </div>
      <div class="text">{{ $store.state.weatherData.text }}</div>
      <div class="location">
        {{ $store.state.weatherData.location }} /
        {{ $store.state.weatherData.city }}
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.weatherWrap {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  .weather-info {
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
}
</style>
