<template>
  <a class=logo-layout href="/">
    <img src="~/static/img/logo.png">
  </a>
</template>

<script>
export default {

}
</script>

<style>
  .logo-layout{
    height:100%;
    width:auto;
  }
 .logo-layout > img{

   height:inherit;
 }

 @media screen and (max-width: 640px){
   .logo-layout{
     height:75%;
   }
 }
</style>