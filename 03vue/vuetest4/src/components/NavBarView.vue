<template>
  <nav class="navbar">
    <h2>The Weather</h2>
    <button class="toggle">
      <i class="fa-solid fa-bars"></i>
    </button>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  width: 100%;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  .toggle {
    margin-left: auto;
    justify-content: center;
    align-items: center;
    // background: skyblue;
    width: 36px;
    height: 36px;
    cursor: pointer;
    border: 0 none;
  }
}
</style>
