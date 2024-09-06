<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h3>User List</h3>
        <UserListView />
      </div>
      <div class="col-md-6">
        <h3>User sign</h3>
        <UserSignView />
      </div>
    </div>
  </div>
</template>

<script setup>
import UserListView from "../components/UserListView.vue";
import UserSignView from "../components/UserSignView.vue";
</script>

<style lang="scss" scoped></style>
