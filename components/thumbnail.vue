<template>
  <a :id="id" class="thumbnail-container" @click.prevent="transWatchPage()">
    <div class="no-img">
      <p>サムネイルが存在しません</p>
    </div>
    <div class="discription-block">
      <p>test文だよーーー</p>
    </div>
  </a>
</template>

<script>
export default {
  props: ["id", "thumbnailImg", "sound", "description"],
  methods: {
    transWatchPage() {
      this.$store.dispatch(
        "getData",
        "https://fast-headland-23842.herokuapp.com/current?num=2"
      );
      location.href = "./watch"
      console.log(this.$store.state.data)
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
  width: 100%;
  height: 60%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: #eee;
}

.thumbnail-container > .no-img > p {
  width: 100%;
  font-size: 30px;
  text-align: center;
}

.thumbnail-container > .discription-block {
  width: 100%;
  height: 40%;
}
</style>
