<template>
  <a class="small-icon-wrapper flex-row-block" @click="transAuth()">
    <p v-if="$store.state.auth === ''">no user</p>
    <img v-if="$store.state.auth != ''" src="~/assets/icon.png">
  </a>
</template>

<script>
export default {
  methods:{
     /**
     * ユーザの認証に応じて画面遷移先を変える
     * 認証「済」=> ユーザー用の画面へ
     * 認証「前」=> ユーザー認証画面へ
     */
    transAuth(){
      if(this.$store.state.auth ===""){//認証前
        location.href = "/auth"
      }
      else{
        location.href = "/user?id=hgoehoge";
      }
    }
  }
}
</script>

<style>
.small-icon-wrapper{
  display: block;
  width:50px;
  height:50px;
  border-radius: 50%;
  background-color:#eee;
  overflow: hidden;
}

.small-icon-wrapper > p{
  text-align: center;
}

.small-icon-wrapper > img{
  width:100%;
}
</style>