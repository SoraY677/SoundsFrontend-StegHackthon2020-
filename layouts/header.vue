<template>
  <header>
    <mmenu class="menu-layer"/>
    <searchbar class="center-box"/>
  </header>
</template>

<script>
import searchbar from "~/components/searchbar"
import mmenu from "~/layouts/menu"

export default {
  components:{
    searchbar,
    mmenu
    
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

</style>