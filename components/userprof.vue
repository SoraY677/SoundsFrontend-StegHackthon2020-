<template>
  <div class="user-prof">
    <div class="right-layout">
      <a class="blue-bt" @click="logout()">ログアウト</a>
    </div>
    <div class="icon-layout">
      <div class="icon-wrapper flex-row-block">
        <img src="~/assets/icon.png" />
      </div>
    </div>
    <div class="detail">
      <p class="name">test太郎</p>
      <a class="blue-bt" href="/create">新規音声登録</a>
      <a class="blue-bt">音声合成</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["url"],
  methods: {
    logout() {
      this.$store.commit("resetAuth");
      location.href = "/";
    }
  }
};
</script>

<style>
.user-prof {
  text-align: center;
}

.user-prof > .icon-layout{
  width:100%;
  text-align: center;
  overflow: hidden;
}
.user-prof > .icon-layout > .icon-wrapper {
  height:300px;
  width: 300px;
  border-radius: 50%;
  margin: auto;
  overflow: hidden;
  background-color: #eee;
}

.user-prof > .icon-layout > .icon-wrapper > img {
  width: 100%;
}

.user-prof > .detail > p.name {
  padding: 14px 0 12px 0;
  font-size: 1.8em;
}
</style>
