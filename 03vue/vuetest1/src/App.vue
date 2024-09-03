<template>
   <NavBarView />
   <MainContainer v-bind:data="data" @increaseLike="increaseLike" @modalOpen="modalOpen" />
   <ModalView v-bind:data="data" :isModal="isModal" :selectedNum="selectedNum" @closeModal="closeM" />
</template>

<script>
import mdata from '@/assets/mdata';
import NavBarView from './components/NavBarView.vue';
import ModalView from './components/ModalView.vue';
import MainContainer from './components/MainContainer.vue';

export default {
   name: 'appView',
   data() {
      return {
         data: mdata,
         isModal: false,
         selectedNum: 0,
      };
   },
   methods: {
      increaseLike(i) {
         this.data[i].like++;
      },
      modalOpen(num) {
         this.isModal = true;
         this.selectedNum = num;
      },
      closeM() {
         this.isModal = false;
      },
   },
   components: {
      NavBarView: NavBarView,
      ModalView: ModalView,
      MainContainer: MainContainer,
   },
};
</script>

<style lang="scss"></style>
