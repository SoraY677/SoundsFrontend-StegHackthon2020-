<template>
  <main class="flex-row-block">
    <thumbnail :id="'hogehoge1'" :description="'[test1]'"/>
    <thumbnail :id="'hogehoge2'" :description="'[test2]'"/>
    <thumbnail :id="'hogehoge3'" :description="'[test3]'"/>
    <thumbnail :id="'hogehoge4'" :description="'[test4]'"/>
  </main>
</template>

<script>
import thumbnail from "~/components/thumbnail"

export default {
  middleware:'apimediation',
  components: {
    thumbnail
  }
}
</script>

<style>

</style>
