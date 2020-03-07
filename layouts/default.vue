<template>
  <div class="frame">
    <mheader />
    <nuxt />
  </div>
</template>

<style>
*,
*:before,
*:after {
  font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "メイリオ",
    Meiryo, "ＭＳ Ｐゴシック", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;
}

p {
  padding: 0;
  margin: 0;
}

.frame {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

main {
  height: 90%;
  width: 100%;
  padding: 20px 5% 0 5%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #fafafa;
}

.flex-row-block {
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
}

.blue-bt {
  display: inline;
  padding: 8px 14px;
  color: white;
  background-color: #3aabd2;
  border: 1px solid#3AABD2;
  border-radius: 5px;
  transition-duration: 0.3s;
}
.blue-bt:hover {
  color: #3aabd2;
  background-color: #fff;
  border-color: #3aabd2;
}

.little-round {
  border-radius: 20px;
}

.right-layout {
  float: right;
}
</style>

<script>
import mheader from "~/layouts/header";
export default {
  components: {
    mheader
  }
};
</script>
