<template>
  <div class="container">
    <h1>test</h1>
  </div>
  <button @click="addNum">클릭</button>
  {{ count }}
  <div class="box" v-if="showBox">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, distinctio.
    <button @click="closeBox">닫기</button>
  </div>
  <ViewComp :text="text" @update="textChange" />
</template>

<script setup>
// vue 3로 작성된 문법
import { ref } from "vue";
import ViewComp from "./components/ViewComp.vue";

const count = ref(0);
const text = ref("title");
const showBox = ref(false);

const addNum = () => {
  console.log("test");
  count.value++;
  showBox.value = true;
};
const closeBox = () => {
  showBox.value = false;
};
const textChange = () => {
  text.value = "안녕";
};
</script>

<style lang="scss" scoped></style>
