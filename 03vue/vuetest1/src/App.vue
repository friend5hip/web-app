<template>
   <div class="container">
      <h2 class="mb10">HOT & NEW</h2>
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
         </div>
      </div>
   </div>
</template>

<script>
import mdata from '@/assets/mdata';

export default {
   name: 'appView',
   data() {
      return {
         data: mdata,
      };
   },
   methods: {
      increaseLike(i) {
         this.data[i].like++;
      },
   },
};
</script>

<style lang="scss" scoped>
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
.mb10 {
   margin-bottom: 10px;
}
</style>
