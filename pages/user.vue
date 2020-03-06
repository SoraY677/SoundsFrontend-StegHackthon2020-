<template>
  <main>
    <userprof />
    <ul class="video flex-row-block">
      <li><thumbnail /></li>
      <li><thumbnail /></li>
      <li><thumbnail /></li>
      <li><thumbnail /></li>
      <li><thumbnail /></li>
      <li><thumbnail /></li>
    </ul>
  </main>
</template>

<script>
import userprof from "~/components/userprof"
import thumbnail from "~/components/thumbnail"

export default {
  components:{
    userprof,
    thumbnail
  }
}
</script>

<style>

ul.video{
  margin-top:20px;
}

</style>