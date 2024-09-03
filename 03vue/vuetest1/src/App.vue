<template>
   <NavBarView></NavBarView>
   <div class="container">
      <h2 class="mb-10">HOT & NEW</h2>
      <div class="cardWrap">
         <div class="card" v-for="(item, i) in data" :key="i">
            <div class="imgWrap">
               <img :src="`./images/${item.img}`" :alt="`${item.img}`" />
               <div class="hot" v-if="item.hoticon">HOT</div>
            </div>
            <div class="cardBody">
               <h4>{{ item.title }}</h4>
               <p>❤️ {{ item.num }}</p>
               <p>대여: {{ item.won }}</p>
               <p>👍 {{ item.like }} <button v-on:click="increaseLike(i)">버튼</button></p>
            </div>
            <div class="btn btn-primary" v-on:click="modalOpen(i)">상세보기</div>
         </div>
      </div>
   </div>
   <div class="modal" v-if="isModal">
      <div class="inner">
         <h2 class="mb-10">{{ data[selectedNum].title }}</h2>
         <hr class="mb-10" />
         <p class="mb-10">{{ data[selectedNum].detail }}</p>
         <button class="btn btn-primary" v-on:click="isModal = false">닫기</button>
      </div>
   </div>
</template>

<script>
import mdata from '@/assets/mdata';
import NavBarView from './components/NavBarView.vue';

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
   },
   components: {
      NavBarView: NavBarView,
   },
};
</script>

<style lang="scss">
$radius: 5px;

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
.cardWrap {
   display: flex;
   flex-wrap: wrap;
   gap: 10px;
   .card {
      width: calc((100% - 30px) / 4);
      @media screen and (max-width: 790px) {
         width: calc((100% - 10px) / 2);
      }
      @media screen and (max-width: 560px) {
         width: 100%;
      }
      .imgWrap {
         border-radius: $radius;
         position: relative;
         width: 100%;
         overflow: hidden;
         cursor: pointer;
         img {
            width: 100%;
            transition: 0.3s;
         }
         &:hover img {
            transform: scale(1.1);
         }
         .hot {
            position: absolute;
            top: 10px;
            left: 10px;
            background-color: black;
            padding: 2px 10px;
            border-radius: 3px;
            font-weight: bold;
            color: red;
         }
      }
   }
}
.mb-10 {
   margin-bottom: 10px;
}
.btn {
   background: pink;
   border-radius: $radius;
   padding: 5px 16px;
   text-align: center;
   cursor: pointer;
   color: white;
   border: 0 none;
   display: block;
   width: 100%;
   &.btn-primary {
      background-color: black;
   }
   &.btn-info {
      background-color: yellow;
   }
}
.modal {
   position: fixed;
   background-color: rgba(0, 0, 0, 0.3); // (r, g, b, opacity)
   // opacity: 0.3;
   // width: 100%;
   // height: 100%;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   .inner {
      background: #fff;
      width: 400px;
      padding: 10px 16px;
      border-radius: $radius;
      @media screen and (max-width: 570px) {
         width: 90%;
      }
   }
}
</style>
