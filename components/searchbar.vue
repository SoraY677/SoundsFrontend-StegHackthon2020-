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
      console.log("hogehogeo")
    }
  }
}
</script>

<style>

  .search-container{
    display: inline-flex;
    flex-flow: wrap;
    justify-content: space-around;
    margin:0%
  }
  textarea.search-input{
    width:26em;
    height:2em;
    margin-right:10px;
  }

  button.search-bt{
    padding:0.3em;
    color:white;
    background-color:#0066FF;
  }
</style>