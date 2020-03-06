<template>
  <label ref="draganddropArea" class="drag-and-drop-area">
    <input class="file-input" type="file" />
    <p>ドラッグアンドドロップ</p>
    <p>もしくは</p>
    <p>クリックしてファイルを選択</p>
  </label>
</template>

<script>
export default {
  props: ["category"],
  mounted() {
    this.$refs.draganddropArea.addEventListener("change", (e) =>{
      console.log(e)
      this.$emit(this.category, e);
      
    });
  }
};
</script>

<style>
.drag-and-drop-area {
  position: relative;
  display: flex;
  width: 80%;
  height: 20vh;
  margin: 0 auto;
  border-radius: 20px;
  border: 2px dashed #2e2e2e;
  background-color: #eee;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
}

.drag-and-drop-area > p {
  width: 100%;
  text-align: center;
}
.file-input {
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
}
</style>
