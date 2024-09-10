<template>
  <div class="container mt-3">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-7 p-3">
        <h3 class="mb-3 fw-bold text-center">사용자 목록</h3>
        <div class="user-list-wrap">
          <UserListView />
        </div>
      </div>
      <div class="col-md-5 p-3">
        <h3 class="mb-3 fw-bold text-center">회원가입</h3>
        <UserSignView />
      </div>
    </div>
    <div class="detailWrap" v-if="$store.state.isDetailModal">
      <UserDetailView />
    </div>
    <div class="mapWrap" v-if="$store.state.isMapModal">
      <MapView />
    </div>
  </div>
</template>

<script setup>
import UserListView from "../components/UserListView.vue";
import UserSignView from "../components/UserSignView.vue";
import MapView from "../components/MapView.vue";
import UserDetailView from "../components/UserDetailView.vue";

const props = defineProps({});
</script>

<style lang="scss" scoped>
.container {
  .row {
    height: calc(100vh - 80px);
  }
  .user-list-wrap {
    max-height: 400px; /* 최대 높이 설정 */
    min-height: 400px;
    overflow-y: auto; /* 세로 스크롤 활성화 */
    border: 1px solid #ddd; /* 스크롤 영역에 경계 추가 */
    border-radius: 5px;
    padding: 10px;
  }
}
</style>
