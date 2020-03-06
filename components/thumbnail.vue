<template>
  <a :id="id" class="thumbnail-container" @click.prevent="transWatchPage(id)">
    <!-- サムネイルイメージがきちんと指定されていれば -->
    <div class="no-img" v-if="thumbnailImg === void 0">
      <p>サムネイルが存在しません</p>
    </div>
    <div class="discription-block">
      <p>{{description}}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: ["id", "thumbnailImg", "sound", "description"],
  methods: {
    transWatchPage() {
      location.href = "./watch?id="+this.id;
    }
  }
};
</script>

<style>
.thumbnail-container {
  display: block;
  min-width:360px;
  height:40vh;
  margin:20px;
  box-shadow: 2px 2px 5px 5px #eee;
}

.thumbnail-container > img {
}

.thumbnail-container > .no-img {
  display: flex;
  width: 100%;
  height: 60%;
  min-height:80px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  font-size: 12px;
}


.thumbnail-container > .discription-block {
  width: 100%;
  height: 40%;
}
</style>
