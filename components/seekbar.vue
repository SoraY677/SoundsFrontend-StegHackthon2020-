<template>
  <div class="seekbar">
    <audio ref="audioController"></audio>
    <div ref="seekbarContainer" class="seekbar-container">
      <div ref="seekbarElapse" class="seekbar-elapse"></div>
    </div>
    <button class="audio-icon-bt" @click="changeSoundState()">
      <span ref="audioIcon" class="triangle"></span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: 0,
      audio: null,
      interval: null
    };
  },
  mounted() {
    this.audio = this.$refs.audioController;
    this.audio.src = require("~/assets/fire.mp3");
    this.audio.load();

    this.audio.addEventListener("ended", event => {
      clearInterval(this.interval);
      this.$refs.audioIcon.classList.remove("double-line")
      this.$refs.audioIcon.classList.add("triangle")
    });

    this.$refs.seekbarContainer.addEventListener("click",this.moveSeekbar)
    
  },
  methods: {
    /**
     * シークバーの進捗割合を％にし反映
     */
    calcSeekbarPercent: function() {
      const percent = (this.audio.currentTime / this.audio.duration) * 100;
      this.$refs.seekbarElapse.style.width = percent + "%";
    },
    /**
     * シークバーをユーザが動かした際に動かしたことを反映する。
     */
    moveSeekbar: function(e){
      const percent = e.offsetX / this.$refs.seekbarContainer.clientWidth;
      this.audio.currentTime = this.audio.duration * percent;
      this.calcSeekbarPercent();
    }
    ,
    /**
     * ボタンが押された際に再生/一時停止を切り替える
     *
     */
    changeSoundState() {
      const audioIcon = this.$refs.audioIcon;
      if (this.state === 0) {
        //押されていなかった場合
        this.audio.play();
        audioIcon.classList.remove("triangle");
        audioIcon.classList.add("double-line");
        this.interval = setInterval(this.calcSeekbarPercent, 100);
        this.state = 1;
      } else if (this.state === 1) {
        //押されていた場合
        this.audio.pause();
        audioIcon.classList.add("triangle");
        audioIcon.classList.remove("double-line");
        clearInterval(this.interval);
        this.state = 0;
      }
    }
  }
};
</script>

<style>
.seekbar {
  height: 30px;
}

audio {
  opacity: 0;
  position: absolute;
}

.audio-icon-bt {
  position: relative;
  width: 30px;
  height: 30px;
  background:none;
  border: none;
}

.double-line {
  position: absolute;
  left: 0;
  top: 0;
  height: 21px;
  width: 20px;
  margin:3px 5px;
  border-style: solid;
  border-width: 0 7px 0 7px;
  border-color: transparent #2e2e2e transparent #2e2e2e;
}

.triangle {
  position: absolute;
  content: "";
  top: 0;
  left: 25%;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 15px 0 15px 18px;
  border-color: transparent transparent transparent #2e2e2e;
}

.seekbar-container {
  display: inline-block;
  width: 100%;
  height: 50%;
  background-color: #eee;
  border: 1px solid #aaa;
}

.seekbar-elapse {
  width: 1px;
  height: 100%;
  background-color: #3aabd2;
}
</style>
