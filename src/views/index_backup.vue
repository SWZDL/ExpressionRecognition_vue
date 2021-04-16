<!--官网首页-->
<template>
  <div class="container">
    <div class="bav-bar-div">
      <el-menu
        :default-active="0"
        class="nav-bar"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item class="nav-bar-item" index="1">产品</el-menu-item>
        <el-menu-item class="nav-bar-item" index="2">解决方案 </el-menu-item>
        <el-menu-item class="nav-bar-item" index="3">定价 </el-menu-item>
        <el-menu-item class="nav-bar-item" index="4">文档 </el-menu-item>
        <el-menu-item class="nav-bar-item" index="5">客户支持 </el-menu-item>
        <el-menu-item class="nav-bar-item" index="6">合作与生态 </el-menu-item>
        <el-submenu index="7-1">
          <template slot="title">账户</template>
          <el-menu-item index="7-1-1">登陆</el-menu-item>
          <el-menu-item index="7-1-2">注册</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div>
      <el-carousel
        :interval="4000"
        type="card"
        height="400px"
        class="home-carouse"
      >
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="home-upload-div">
      <el-upload
        class="home-upload"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.home-carouse {
  margin-top: 50px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
/*不同页面不同颜色*/
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
/*不同页面不同颜色*/
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.home-upload-div {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.home-upload {
  margin-top: 100px;
  margin-left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
}
</style>
