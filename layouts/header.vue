<template>
  <header>
    <logo />
    <searchbar class="search-bar-layout"/>
    <a href="/user" class="icon-wrapper"></a>
  </header>
</template>

<script>
import searchbar from "~/components/searchbar"
import logo from "~/components/logo"

export default {
  components:{
    searchbar,
    logo
  }
}
</script>

<style>
header{
  position:relative;
  display: flex;
  height:10% ;
  justify-content: center;
  align-items: center;
}

.menu-layer{
  position:absolute;
}

.search-bar-layout{
  margin:0 180px;
}

.auth-layout{
  float:right;
}

.icon-wrapper{
  display: block;
  width:50px;
  height:50px;
  border-radius: 50%;
  background-color:#eee;
}

</style>