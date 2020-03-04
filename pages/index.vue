<template>
  <main class="flex-row-block">
    <thumbnail />
    <thumbnail />
    <thumbnail />
    <thumbnail />
  </main>
</template>

<script>
import thumbnail from "~/components/thumbnail"

export default {
  components: {
    thumbnail
  }
}
</script>

<style>

.flex-row-block{
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
}

</style>
