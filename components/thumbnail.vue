<template>
  <a :id="id" class="thumbnail-container" @click.prevent="transWatchPage(id)">
    <!-- サムネイルイメージがきちんと指定されていれば -->
    <div class="no-img" v-if="id =! void 0">
      <p>サムネイルが存在しません</p>
    </div>
    <div class="discription-block">
      <p>[未実装]{{description}}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: ["id", "thumbnailImg", "sound", "description"],
  methods: {
    transWatchPage(id) {
      
      /*this.$store.dispatch(
        "getData",
        "https://fast-headland-23842.herokuapp.com/current?num=2"
      );*/
      location.href = "./watch?id="+id;
    }
  }
};
</script>

<style>
.thumbnail-container {
  display: block;
  width: 30%;
  min-width: 240px;
  height: 40%;
  min-height: 120px;
}

.thumbnail-container > img {
}

.thumbnail-container > .no-img {
  display: flex;
  width: 100%;
  height: 60%;
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
