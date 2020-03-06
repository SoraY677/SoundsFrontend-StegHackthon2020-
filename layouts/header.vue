<template>
  <header>
    <mmenu class="menu-layer"/>
    <searchbar class="center-box"/>
    <auth class="auth-layout"/>
  </header>
</template>

<script>
import searchbar from "~/components/searchbar"
import mmenu from "~/layouts/menu"
import auth from "~/layouts/auth"

export default {
  components:{
    searchbar,
    mmenu,
    auth
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

.auth-layout{
  float:right;
}

</style>