<template>
  <div>
  <textarea placeholder="検索キーワードを入力"></textarea>
  <button @click="transListPage()">検索</button>
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

</style>