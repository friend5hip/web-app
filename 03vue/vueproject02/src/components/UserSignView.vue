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
    <input type="file" class="form-control" id="fileform" />
    <label class="input-group-text" for="fileform">Upload</label>
  </div>
  <div class="btn btn-primary" @click="addUser">Sign Up</div>
  {{ userdata }}
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
  let uData = {
    userid: userdata.value.userid,
    password: userdata.value.password,
    username: userdata.value.username,
    addr: userdata.value.addr,
  };
  store.commit("addUser", uData);
  clearFoam();
  alert("Signed Up");
};

const clearFoam = () => {
  userdata.value.userid = null;
  userdata.value.password = null;
  userdata.value.username = null;
  userdata.value.addr = null;
};
</script>

<style lang="scss" scoped></style>
