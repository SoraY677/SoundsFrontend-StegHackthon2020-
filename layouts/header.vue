<template>
  <header>
    <mmenu class="menu-layer"/>
    <logo />
    <searchbar class="search-bar-layout"/>
    <auth class="auth-layout"/>
  </header>
</template>

<script>
import searchbar from "~/components/searchbar"
import mmenu from "~/layouts/menu"
import auth from "~/layouts/auth"
import logo from "~/components/logo"

export default {
  components:{
    searchbar,
    mmenu,
    auth,
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
  margin:0 20px;
}

.auth-layout{
  float:right;
}

</style>