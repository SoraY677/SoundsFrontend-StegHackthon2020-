<template>
  <header>
    <searchbar class="center-box"/>
  </header>
</template>

<script>
import searchbar from "~/components/searchbar"

export default {
  components:{
    searchbar,
    
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

</style>