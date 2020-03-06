<template>
  <div class="search-container">
  <textarea class="search-input" placeholder="検索キーワードを入力"></textarea>
  <button class="search-bt" @click="transListPage()">検索</button>
  </div>
</template>

<script>
export default {
  methods:{
    transListPage(){
      location.href ="/list"
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
  }

  button.search-bt{
    display: flex;
    height:100%;
    padding:2px;
    color:white;

    background-color:#0066FF;
  }
</style>