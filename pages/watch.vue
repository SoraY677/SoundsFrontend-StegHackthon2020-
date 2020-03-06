<template>
  <main>
    <mainaudio />
    <div class="flex-row-block">
      <thumbnail :id="'hogehoge1'" :description="'[test1]'"/>
      <thumbnail :id="'hogehoge1'" :description="'[test1]'"/>
      <thumbnail :id="'hogehoge1'" :description="'[test1]'"/>
      <thumbnail :id="'hogehoge1'" :description="'[test1]'"/>
      <thumbnail :id="'hogehoge1'" :description="'[test1]'"/>
      <thumbnail :id="'hogehoge1'" :description="'[test1]'"/>
      <thumbnail :id="'hogehoge1'" :description="'[test1]'"/>
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