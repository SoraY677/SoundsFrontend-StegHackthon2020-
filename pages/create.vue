<template>
  <main>
    <section class="file-reader-box">
    <h2>音声データ</h2>
    <draganddrop :category="'sounds'" @sounds="setData($event, sound)" />
    </section>
    <section class="file-reader-box">
    <h2>サムネイル画像</h2>
    <draganddrop
      :category="'thumbnail'"
      @thumbnail="setData($event, thumnail)"
    />
    </section>
    <section class="file-reader-box">
    <h2>動画タイトル</h2>
    <textarea class="long-input" placeholder="タイトル"></textarea>
    </section>
    <button @click="requestRecord()">登録</button>
  </main>
</template>

<script>
import draganddrop from "~/components/drag8drop";
export default {
  data: function() {
    return {
      request:{
      sound: Object,
      thumnail: Object,
      title: String
      }
    }
  },
  components: {
    draganddrop
  },
  methods: {
    //データに子コンポーネントから得た情報を代入する
    setData(event, data) {
      data = event;
      console.log(data);
    },
    /**
     * 音声データを記録する要求をAPIに投げる
     */
    requestRecord() {
      this.$fetchAPI(this.request,this.$store,"hoge");
    }
  }
};
</script>

<style>
.long-input{
  display: block;
  height:2em;
  width:80%;
  margin:0 auto;
  font-size:1.5em;
}

section.file-reader-box{
  width:100%;
  padding:20px;
}
</style>
