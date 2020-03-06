<template>
  <main>
    <mainaudio />
    <div class="flex-row-block">
      <thumbnail />
      <thumbnail />
      <thumbnail />
      <thumbnail />
      <thumbnail />
      <thumbnail />
    </div>
  </main>
  </template>

<script>
import mainaudio from "~/components/mainaudio"
import thumbnail from "~/components/thumbnail"
export default {
  components:{
    mainaudio,
    thumbnail
  }
}
</script>

<style>

</style>