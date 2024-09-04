<template>
   <NavBarView />
   <SearchBarView v-bind:data="data" @searchMovie="searchMovie" />
   <div class="container">
      <button @click="showAllView">전체보기</button>
   </div>
   <MainContainer v-bind:data="data_temp" @increaseLike="increaseLike" @modalOpen="modalOpen" />
   <ModalView v-bind:data="data_temp" :isModal="isModal" :selectedNum="selectedNum" @closeModal="closeM" />
</template>

<script>
import mdata from '@/assets/mdata';
import NavBarView from './components/NavBarView.vue';
import ModalView from './components/ModalView.vue';
import MainContainer from './components/MainContainer.vue';
import SearchBarView from './components/SearchBarView.vue';

export default {
   name: 'appView',
   data() {
      return {
         data: mdata,
         isModal: false,
         selectedNum: 0,
         data_temp: [...mdata],
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
      searchMovie(title) {
         console.log('Transmission Complete: ' + title);
         this.data_temp = this.data.filter(movie => {
            return movie.title.includes(title);
         });
      },
      showAllView() {
         this.data_temp = [...this.data];
      },
   },
   components: {
      NavBarView: NavBarView,
      ModalView: ModalView,
      MainContainer: MainContainer,
      SearchBarView: SearchBarView,
   },
};
</script>

<style lang="scss">
.container {
   width: 1000px;
   margin: 0 auto;
   @media screen and (max-width: 790px) {
      max-width: 100%;
      padding: 0 16px;
   }
   img {
      display: block;
   }
}
.mb-10 {
   margin-bottom: 10px;
}
</style>
