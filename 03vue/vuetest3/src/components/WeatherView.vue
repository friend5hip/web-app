<template>
  <div class="weatherWrap">
    <div class="weather-info">
      <div>
        <img
          :src="`https://openweathermap.org/img/wn/${props.data.icon}@4x.png`"
          alt=""
        />
      </div>
      <div class="temp">{{ (props.data.temp - 273.15).toFixed(1) }}&deg</div>
      <div class="text">{{ props.data.text }}</div>
      <div class="location">
        {{ props.data.location }} / {{ props.data.city }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Array,
});
</script>

<style lang="scss" scoped>
.weatherWrap {
  display: flex;
  justify-content: center;
  align-items: center;
  .weather-info {
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
}
</style>
