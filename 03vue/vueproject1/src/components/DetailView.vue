<template>
  <div class="container mt-5">
    <h1>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non error
      veniam, voluptatem eligendi soluta aspernatur ipsum, unde architecto vel
      fugit sapiente fuga dignissimos vero libero deleniti. Officiis nihil at
      illum?
    </h1>
  </div>
  <p>{{ $route }}</p>
  <p>{{ $route.params }}</p>
  <p>{{ props.data[0] }}</p>
</template>

<script setup>
const props = defineProps({
  data: Array,
});
</script>

<style lang="scss" scoped></style>
