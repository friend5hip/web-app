<template>
  <div>ViewComp</div>
  {{ myprops.text }}
  <button @click="emits('update')">변경</button>
</template>

<script setup>
const myprops = defineProps({
  text: String,
});

const emits = defineEmits();
</script>

<style lang="scss" scoped></style>
