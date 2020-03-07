<template>
  <main class="flex-row-block">
    <section class="auth-box">
      <h1>ユーザ認証</h1>
      <input ref="username" class="wide-box little-round">
      <input ref="userpass" class="wide-box little-round">
      <div class="right-layout little-round">
      <button class="blue-bt" @click="auth()">認証</button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  methods:{
    auth(){
      const param = {

      }
      /*DELETE : データベース接続不可のため、簡易版 */
      this.$store.commit('setAuth','test');
      location.href = "/user";
      /*
      //ユーザの入力した認証情報をAPIに投げる
      const authFlag = this.$fetchAPI(param,"hoge");
      authFlag.then(() => {
        //認証出来たら
        if(authFlag){
          //ローカルストレージに保存
          this.$store.commit('setAuth',authFlag);
          location.href("/user")
        }
        //認証できていなければ
        else{

        }
      })*/

    }
  }
}
</script>

<style>
.auth-box{
  min-width:500px;
  padding:30px;
  margin:auto;
  border-radius:20px;
  background-color:#fff;
  box-shadow: 4px 4px 4px 4px #eee;
}

.auth-box > h1 {
  width:100%;
  text-align: center;
}

.wide-box{
  display: block;
  width:85%;
  height:2em;
  margin:3em auto;
}

.right-layout{
  width:80%;
  text-align: right;
}
</style>