<template>
  <header>
    <logo />
    <searchbar class="search-bar-layout"/>
    <a class="icon-wrapper" @click="transAuth()"></a>
  </header>
</template>

<script>
import searchbar from "~/components/searchbar"
import logo from "~/components/logo"

export default {
  components:{
    searchbar,
    logo
  },
  methods:{
    /**
     * ユーザの認証に応じて画面遷移先を変える
     * 認証「済」=> ユーザー用の画面へ
     * 認証「前」=> ユーザー認証画面へ
     */
    transAuth(){
      if(this.$store.state.auth ===""){//認証前
        location.href = "./auth"
      }
      else{
        location.href = "./user?id=hgoehoge";
      }
    }
  }
}
</script>

<style>
header{
  position:relative;
  display: flex;
  height:10% ;
  justify-content: center;
  align-items: center;
}

.menu-layer{
  position:absolute;
}

.search-bar-layout{
  margin:0 180px;
}

.auth-layout{
  float:right;
}

.icon-wrapper{
  display: block;
  width:50px;
  height:50px;
  border-radius: 50%;
  background-color:#eee;
}

</style>