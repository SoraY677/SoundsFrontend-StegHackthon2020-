<template>
  <main>
    <draganddrop :category="'sounds'" @sounds="setData($event, sound)" />
    <draganddrop
      :category="'thumbnail'"
      @thumbnail="setData($event, thumnail)"
    />
    <textarea placeholder="タイトル"></textarea>
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

<style></style>
