<template>
  <div class="mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="ID"
      v-model="userdata.userid"
    />
  </div>
  <div class="mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Password"
      v-model="userdata.password"
    />
  </div>
  <div class="mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Username"
      v-model="userdata.username"
    />
  </div>
  <div class="mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Address"
      v-model="userdata.addr"
    />
  </div>
  <div class="input-group mb-3">
    <input
      type="file"
      class="form-control"
      id="fileform"
      @change="handleImg"
      accept="image/*"
    />
  </div>
  <div class="d-flex justify-content-center gap-3">
    <div class="btn btn-dark" @click="addUser">등록</div>
    <div class="btn btn-dark" @click="updateUser">수정</div>
    <div class="btn btn-dark" @click="$store.commit('openModal')">
      주소 선택
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const userdata = ref({
  userid: null,
  password: null,
  username: null,
  addr: null,
  img: null,
});

const addUser = () => {
  // 필드의 값이 모두 유효한지 확인
  if (
    Object.values(userdata.value).every(
      (value) => value !== null && value.trim() !== ""
    )
  ) {
    let uData = {
      userid: userdata.value.userid,
      password: userdata.value.password,
      username: userdata.value.username,
      addr: userdata.value.addr,
      img: userdata.value.img,
    };
    store.commit("addUser", uData);
    clearFoam();
  } else {
    alert("모든 정보를 입력해주세요.");
  }
};

const updateUser = () => {
  // 필드의 값이 모두 유효한지 확인
  if (
    Object.values(userdata.value).every(
      (value) => value !== null && value.trim() !== ""
    )
  ) {
    let uData = {
      userid: userdata.value.userid,
      password: userdata.value.password,
      username: userdata.value.username,
      addr: userdata.value.addr,
      img: userdata.value.img,
    };
    store.commit("updateUser", uData);
    clearFoam();
  } else {
    alert("모든 정보를 입력해주세요.");
  }
};

const clearFoam = () => {
  userdata.value.userid = null;
  userdata.value.password = null;
  userdata.value.username = null;
  userdata.value.addr = null;
  userdata.value.img = null;
};

const handleImg = (e) => {
  const file = e.target.files[0];
  console.log(file);

  if (file) {
    userdata.value.img = URL.createObjectURL(file);
  }
};
</script>

<style lang="scss" scoped></style>
