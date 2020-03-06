<template>
  <nav>
  <!-- ハンバーガーメニュー -->
  <button ref="menuTrigger" class="menu-trigger" @click="pullMenuTrigger()">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <!-- メニューリスト -->
  <ul ref="menuList" class="menu-list">
    <li><a href="create">新規投稿</a></li>
  </ul>
  </nav>
</template>

<script>
export default {
  methods:{
    /**
     * メニューリストの開閉
     */
    pullMenuTrigger(){
      //メニューが開いてる(active)     　=> 閉める
      //メニューが閉まっている(非active) => 開く
      const mttmp = this.$refs.menuTrigger//メニュートリガー
      const mltmp = this.$refs.menuList//メニューリスト
      if(mttmp.classList.contains("active")){
        mttmp.classList.remove("active"); 
        mltmp.classList.remove("active");
      }
      else{
        mttmp.classList.add("active");
        mltmp.classList.add("active");
      }
    }
  }
};
</script>

<style>
nav{
  position:relative;
  top:10px;
  left:10px;
}

.menu-trigger,
.menu-trigger span {
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;
}
.menu-trigger {
  position: relative;
  width: 50px;
  height: 44px;
  border:none;
  background:none;
}

.menu-trigger span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #2e2e2e;
  border-radius: 4px;
}
.menu-trigger span:nth-of-type(1) {
  top: 0;
}
.menu-trigger span:nth-of-type(2) {
  top: 20px;
}
.menu-trigger span:nth-of-type(3) {
  bottom: 0;
}

.menu-trigger.active span:nth-of-type(1) {
  -webkit-transform: translateY(20px) rotate(-45deg);
  transform: translateY(20px) rotate(-45deg);
}
.menu-trigger.active span:nth-of-type(2) {
  opacity: 0;
}
.menu-trigger.active span:nth-of-type(3) {
  -webkit-transform: translateY(-20px) rotate(45deg);
  transform: translateY(-20px) rotate(45deg);
}

.menu-list{
  position:absolute;
  height:100vh;
  width:20vh;
  top:0;
  left:-20vh;
  background-color:#fff;
}

.active{
  transform: translateX(20vh);
  transition-duration: .5s;
}



</style>
