<template>
   <div class="container">
      <!-- <input type="search" @input="inputText = $event.target.value" placeholder="검색어를 입력하세요" /> -->
      <!-- <input type="search" v-model="inputText" placeholder="검색어를 입력하세요" /> -->
      <!-- <input
         type="search"
         @change="
            $emit('searchMovie', $event.target.value); 
            inputText = $event.target.value;
            $event.target.value = ' ';
         "
      /> -->
      <input type="search" @change="handleSearch" placeholder="검색어를 입력하세요" />
      <button>검색</button>
   </div>
</template>

<script>
export default {
   name: 'serachComp',
   props: {
      data: Object,
   },
   data() {
      return {
         inputText: 'text',
      };
   },
   methods: {
      handleSearch(e) {
         this.$emit('searchMovie', e.target.value);
         this.inputText = e.target.value;
         e.target.value = '';
      },
   },
   watch: {
      inputText(name) {
         console.log(name);
         const findName = this.data.filter(movie => {
            return movie.title.includes(name);
         });
         if (findName.length == 0) {
            alert('존재하지 않는 영화입니다.');
         }
      },
   },
};
</script>

<style lang="scss" scoped></style>
