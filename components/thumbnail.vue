<template>
  <a class="thumbnail-container">
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
  props:[
    'thumbnailImg',
    'sound',
    'description',
  ]
}
</script>

<style>
.thumbnail-container{
  display: block;
  width:30%;
  min-width:240px;
  height:40%;
  min-height:120px;
}

.thumbnail-container > img{

}

.thumbnail-container > .no-img{
  width:100%;
  height:60%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color:#eee;
}

.thumbnail-container > .no-img > p{
  width:100%;
  font-size:30px;
  text-align: center;
}


.thumbnail-container > .discription-block{
  width:100%;
  height:40%;
}
</style>