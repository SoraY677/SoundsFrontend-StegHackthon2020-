<template>
  <div class="search-container">
  <input ref="searchInput" class="search-input" placeholder="検索キーワードを入力">
  <button class="search-bt" @click="transListPage()">検索</button>
  </div>
</template>

<script>
export default {
  methods:{
    transListPage(){
      location.href ="/list?ward=" + this.$refs.searchInput.value
    }
  }
}
</script>

<style>

  .search-container{
    height:2em;
    display: inline-flex;
    flex-flow: wrap;
    justify-content: space-around;
    margin:0%
  }
  textarea.search-input{
    width:26em;
    height:100%;
    margin-right:10px;
    font-size:1.2em;
  }

  button.search-bt{
    display: flex;
    height:100%;
    padding:2px 10px;
    color:white;
    background-color:#3AABD2;
    border:none;
  }
</style>