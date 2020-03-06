<template>
  <div class="frame">
    <mheader />
    <nuxt />
  </div>
</template>

<style>
*,
*:before,
*:after {
  font-family: 'Hiragino Kaku Gothic Pro','ヒラギノ角ゴ Pro W3','メイリオ',Meiryo,'ＭＳ Ｐゴシック',sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding:0;
}

ul{
  margin:0;
  padding:0;
}

li{
  list-style: none;
}

a{
  text-decoration: none;
  cursor: pointer;
}

p{
  padding:0;
  margin:0;
}

.frame{
  position:relative;
  height:100vh;
  width:100vw;
  overflow: hidden;
}

main{
  height:90%;
  width: 100%;
  padding:20px 5% 0 5%;
  overflow-x: hidden;
  overflow-y: scroll;
}

.flex-row-block{
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
}

</style>

<script>
import mheader from "~/layouts/header"
export default {
  components:{
    mheader
  }
}
</script>