<template>
  <a :id="id" class="thumbnail-container" @click.prevent="transWatchPage(id)">
    <div class="img-frame">
      <!-- サムネイルイメージの指定がない場合は文字を表示 -->
      <p v-if="thumbnailImg === void 0">サムネイルが存在しません</p>
      <!-- サムネイルイメージがきちんと指定されていれば画像を表示 -->
      <img v-if="thumbnailImg != void 0" :src="require('~/assets/'+thumbnailImg)">
      
    </div>
    <div class="discription-block">
      <p>{{ description }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: ["id", "thumbnailImg", "sound", "description"],
  methods: {
    transWatchPage() {
      location.href = "/watch?id="+this.id;
    }
  }
};
</script>

<style>
.thumbnail-container {
  display: block;
  width:30%;
  min-width:120px;
  margin:1.5%;
  height: 40vh;
  box-shadow: 2px 2px 5px 5px #eee;
}
.thumbnail-container > .img-frame {
  display: flex;
  width: 100%;
  height: 60%;
  min-height: 80px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  font-size: 12px;
}

.thumbnail-container > .img-frame > img{
  width:100%;
}

.thumbnail-container > .discription-block {
  width: 100%;
  height: 40%;
  padding:0.4em;
}

@media screen and (max-width: 1000px){
  .thumbnail-container{
    width:45%;
    margin:2%;
  }
}

@media screen and (max-width: 480px){
  .thumbnail-container{
    width:90%;
    margin:5%;
  }
}

</style>
