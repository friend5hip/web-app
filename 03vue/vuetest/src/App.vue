<template>
   <div class="container secWrap">
      <h3>HOT & NEW</h3>
      <div class="cardWrap">
         <div class="card" v-for="(item, i) in data" v-bind:key="i">
            <div class="imgWrap">
               <!-- `(backtick)로 묶어야 함 -->
               <img v-bind:src="`./images/${item.img}`" alt="" />
            </div>
            <div class="card">
               <h1>{{ item.title }}</h1>
               <p>❤️ {{ item.num }}</p>
               <p>대여 : {{ item.won }}</p>
            </div>
         </div>
      </div>
   </div>
   <!-- todos의 키 값을 반환하므로 index에 binding해주어야 함 -->
   <!-- <div v-for="(item, index) in todos" v-bind:key="index">
         {{ item }}
      </div>
      <ul>
         <li v-for="(item, i) in todos" :key="i">{{ item }}</li>
      </ul> -->
</template>

<script>
export default {
   name: 'App',
   data() {
      return {
         data: [
            { title: '핸섬가이즈', num: '8.6', won: '11,000', img: 'movie01.jpg' },
            { title: '탈주', num: '8.1', won: '11,000', img: 'movie02.jpg' },
            { title: '하이재킹', num: '8.7', won: '10,900', img: 'movie03.jpg' },
         ],
      };
   },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';
.secWrap {
   padding: 5px 16px;
}
.cardWrap {
   display: flex;
   gap: 10px;
   .card {
      width: 210px;
      .imgWrap {
         width: 100%;
         overflow: hidden;
         border-radius: 5px;
         img {
            display: block;
            transition: 0.3s;
            width: 100%;
         }
         &:hover img {
            transform: scale(1.1);
         }
      }
      .cardText {
         padding: 5px;
      }
   }
}
</style>
