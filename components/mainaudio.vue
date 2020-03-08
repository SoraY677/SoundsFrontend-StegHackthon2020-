<template>
  <section class="main-audio">
    <div class="screen-block">
      <!-- サムネイルイメージの指定がない場合は文字を表示 -->
      <p v-if="thumbnailImg === void 0">サムネイルが存在しません</p>
      <!-- サムネイルイメージがきちんと指定されていれば画像を表示 -->
      <img
        v-if="thumbnailImg != void 0"
        :src="require('~/assets/' + thumbnailImg)"
      />
    </div>
    <seekbar />
    <div class="description-block">
      <h1>{{ description }}</h1>
    </div>
  </section>
</template>

<script>
import seekbar from "~/components/seekbar"
export default {
  props: ["id", "thumbnailImg", "sound", "description"],
  components:{
    seekbar
  }
};
</script>

<style>
.main-audio {
  width: 80%;
  height: 80vh;
  margin: 0 auto;
}
.main-audio > .screen-block {
  display: flex;
  width: 100%;
  height: 70%;
  align-items: center;
  overflow: hidden;
  background-color: #eee;
}

.main-audio > .screen-block > img {
  width: 100%;
}

.main-audio > audio {
  width: 100%;
  border-radius: 0;
}
.main-audio > .description-block {
  width: 80%;
  height: 22%;
  margin: 0 auto;
}

.main-audio > .description-block > h1 {
  font-size: 1.8em;
  font-weight: normal;
}

@media screen and (max-width: 480px) {
  .main-audio {
    width: 92%;
    height: 58vh;
  }
  .main-audio > .screen-block > img {
    width: auto;
    height: 100%;
  }
}
</style>
