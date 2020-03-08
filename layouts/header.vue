<template>
  <header>
    <logo />
    <searchbar class="search-bar-layout"/>
    <usericon />
  </header>
</template>

<script>
import searchbar from "~/components/searchbar"
import logo from "~/components/logo"
import usericon from "~/components/usericon"

export default {
  components:{
    searchbar,
    logo,
    usericon
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

</style>