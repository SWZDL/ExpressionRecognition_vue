<template>
  <div class="container">
    <el-upload drag action="" multiple>
      <i class="el-icon-upload"></i>
      <div>将文件拖到此处，或<em>点击上传</em></div>
      <div slot="tip">
        上传图片或视频
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "Upload"
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  margin: auto;
  left: 0;
  right: 0;
  border: 1px solid gainsboro;
  width: 80vw;
  height: 80vh;
}
</style>
