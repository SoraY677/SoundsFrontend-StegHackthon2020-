<template>
  <div class="frame">
    <mheader />
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding:0;
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
  padding:0 5%;
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