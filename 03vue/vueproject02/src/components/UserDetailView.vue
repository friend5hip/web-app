<template>
  <div class="detailWrap d-flex justify-content-center align-items-center">
    <div
      class="inner d-flex justify-content-center align-items-center flex-column mb-3"
    >
      <img :src="$store.state.selectedUser?.img" alt="" class="innerImg mb-2" />
      <div class="innerText text-center fw-bold">
        <h1 class="mb-3">{{ $store.state.selectedUser?.userid }}</h1>
        <h5>비밀번호: {{ $store.state.selectedUser?.password }}</h5>
        <h5>이름: {{ $store.state.selectedUser?.username }}</h5>
        <h5>주소: {{ $store.state.selectedUser?.addr }}</h5>
      </div>
    </div>
    <div class="btn btn-danger" @click="$store.commit('closeDetailModal')">
      닫기
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.detailWrap {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3); // (r, g, b, opacity)
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .inner {
    background-color: #fff;
    width: 400px;
    height: 500px;
    border-radius: 7px;
    .innerImg {
      border: 5px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 200px;
      height: 200px;
    }
  }
}
</style>
