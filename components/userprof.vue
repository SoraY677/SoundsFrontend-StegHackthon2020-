<template>
  <div class="user-prof">
    <div class="icon-wrapper">
    <img :src="url" />
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
  props: ["url"]
};
</script>

<style>
.user-prof {
  text-align: center;
}
.user-prof > .icon-wrapper {
  height:300px;
  width:300px;
  margin: 0 auto;
  background-color:#eee;
}

.user-prof > .detail > p.name{
  padding-top:14px;
  font-size:1.8em;
}

.blue-bt{
  display: inline;
  padding:3px;
  color:white;
  background-color:#3AABD2;
  border: 1px solid#3AABD2;
  border-radius: 5px;
  transition-duration: 0.3s;
}
.blue-bt:hover{
  color:#3AABD2;
  background-color: #fff;
  border-color:#3AABD2;
}
</style>
