<template>
  <div class="container">
    <video
      id="videoCamera"
      ref="videoCamera"
      autoplay
      :height="videoHeight"
      :width="videoWidth"
    ></video>
  </div>
</template>

<script>
export default {
  name: "RealTimeMonitoring",
  data: function() {
    return {
      videoWidth: 300,
      videoHeight: 300,
      videoCamera: null
    };
  },
  async mounted() {
    this.videoCamera = this.$refs.videoCamera;
    const constraints = {
      audio: false, // 不需要声音
      video: {
        width: this.videoWidth,
        height: this.videoHeight,
        transform: "scaleX(-1)"
      }
    };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => {
        this.videoCamera.srcObject = stream;
        this.videoCamera.onloadedmetadata = () => {
          this.videoCamera.play();
        };
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    // 关闭摄像头
    stopNavigator() {
      this.videoCamera.srcObject.getTracks()[0].stop();
    }
  }
};
</script>

<style scoped>
.container {
  border-radius: 20px;
  margin: auto;
  left: 0;
  right: 0;
  border: 1px solid gainsboro;
  width: 80vw;
  height: 80vh;
}

#videoCamera {
  display: flex;
  margin-top: 40vh;
  transform: translate(0, -50%);
  border-radius: 100%;
  border: 1px solid gainsboro;
  margin-left: 10%;
}
</style>
