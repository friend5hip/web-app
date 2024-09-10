<template>
  <div
    v-for="(item, i) in $store.state.userData"
    :key="i"
    class="d-flex gap-2 border rounded p-3 mb-3 mt-3"
  >
    <div class="avatar"><img :src="item.img" alt="" /></div>
    <div>
      <h5 class="mb-0">{{ item.userid }}</h5>
      <p class="mb-0">{{ item.username }}</p>
    </div>
    <div class="d-flex align-items-center ms-auto gap-2">
      <div
        class="btn btn-dark d-flex justify-content-cetner p-2"
        @click="selectUser(item)"
      >
        상세
      </div>
      <div
        class="btn btn-danger d-flex justify-content-center p-2"
        @click="deleteUser(item.userid)"
      >
        삭제
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const deleteUser = (userid) => {
  store.commit("deleteUser", userid);
};
const selectUser = (user) => {
  store.commit("selectUser", user);
  store.commit("openDetailModal");
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 40px;
}
</style>
