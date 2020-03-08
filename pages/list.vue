<template>
  <main class="flex-row-block">
    <thumbnail :id="'hogehoge5'" :description="'test'"/>
    <thumbnail :id="'hogehoge1'" :description="'焚火の音'" :thumbnailImg ="'1.jpg'"/>
    <thumbnail :id="'hogehoge2'" :description="'スライム'" :thumbnailImg ="'2.jpg'"/>
    <thumbnail :id="'hogehoge5'" :description="'test2'"/>
    <thumbnail :id="'hogehoge3'" :description="'マグロ解体ショー'" :thumbnailImg ="'3.jpg'"/>
    <thumbnail :id="'hogehoge4'" :description="'海の音'" :thumbnailImg ="'4.jpg'"/>
  </main>
</template>

<script>
import thumbnail from "~/components/thumbnail";
export default {
  components: {
    thumbnail
  }
};
</script>

<style></style>
