<template>
  <div class="auth">
    <div class="user-icon-wrapper" @click="pullAuthBox()"></div>
    <div ref="authBox" class="auth-box close">
      <textarea></textarea>
      <textarea></textarea>
      <button>認証</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    pullAuthBox() {
      let authbox = this.$refs.authBox;
      if (authbox.classList.contains("close")) {
        authbox.classList.remove("close");
      } else {
        authbox.classList.add("close");
      }
    }
  }
};
</script>

<style>
.auth {
  position: relative;
}

.user-icon-wrapper {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #eee;
}
.auth-box {
  position: absolute;
  display: flex;
  z-index: 100;
  top: 120%;
  padding: 20px;
  justify-content: space-around;
  flex-flow: wrap;
  background-color: white;
}

.close {
  display: none;
}
</style>
