<template>
  <el-container>
    <el-header>
      <el-menu :default-active="'1'" mode="horizontal" :router="true">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/file">文档</el-menu-item>
        <el-menu-item index="/support">客户支持</el-menu-item>
        <el-menu-item index="/cooperation">合作与生态</el-menu-item>
        <el-menu-item style="float: right" index="/recognition">
          <el-button>开始使用</el-button>
        </el-menu-item>
      </el-menu>
    </el-header>

    <el-main>
      <div
        style="margin-left:50%;transform:translate(-50%,0);width: 75%;display: flex;flex-direction: row"
      >
        <el-carousel class="carousel-left" height="18vw">
          <el-carousel-item v-for="item in carousel_src" :key="item.src">
            <div
              style="height:10%;color: black;text-align: center;font-weight: bold"
            >
              点击查看识别结果
            </div>
            <img
              v-bind:src="item.src"
              :alt="item.src"
              width="100%"
              height="90%"
            />
          </el-carousel-item>
        </el-carousel>

        <div class="div-right">
          <div class="div-right-line-one">
            <div class="sub-div hvr-sweep-to-top">
              <div class="title">【WHAT】快速了解本平台</div>
              <div style="margin-left: 10%;margin-top: 10%">
                <a href="#">立即了解></a>
              </div>
            </div>
            <div class="sub-div hvr-sweep-to-top">
              <div class="title">【WHY】为什么需要我们</div>
              <div style="margin-left: 10%;margin-top: 10%">
                <a href="#">立即了解></a>
              </div>
            </div>
            <div class="sub-div hvr-sweep-to-top">
              <div class="title">【WHO】谁可以使用本平台</div>
              <div style="margin-left: 10%;margin-top: 10%">
                <a href="#">立即了解></a>
              </div>
            </div>
          </div>
          <div class="div-right-line-two">
            <div class="sub-div hvr-sweep-to-top">
              <div class="title hvr-sweep-to-top">【WHEN】产品开发日志</div>
              <div style="margin-left: 10%;margin-top: 10%">
                <a href="#">立即了解></a>
              </div>
            </div>
            <div class="sub-div hvr-sweep-to-top">
              <div class="title">
                【WHICH】何种企业需要我们
              </div>
              <div style="margin-left: 10%;margin-top: 10%">
                <a href="#">立即了解></a>
              </div>
            </div>
            <div class="sub-div hvr-sweep-to-top">
              <div class="title">【HOW】如何使用</div>
              <div style="margin-left: 10%;margin-top: 10%">
                <a href="#">立即了解></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-main>

    <div style="width: 100%;background-color:#fff;height: 100px"></div>

    <div style="display: flex">
      <div
        style="text-align:center;margin-left: 50%;transform: translate(-50%,0)"
      >
        <el-upload
          class="home-upload"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">点击尝试识别图片</div>
          <div class="el-upload__tip" slot="tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </div>
    </div>

    <el-footer>
      <div
        style="height: 500px;margin-top:100px;background-color:black;width: 100vw;margin-left: -2%;color: white;"
      >
        <div style="padding-top: 10%">
          <h1 style="text-align: center;">这里是页脚</h1>
        </div>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      carousel_src: [
        //  https://imgtu.com/i/g9g9HK
        { src: "https://z3.ax1x.com/2021/04/27/g9g9HK.jpg" },
        //  https://imgtu.com/i/g9gF4e
        { src: "https://z3.ax1x.com/2021/04/27/g9gF4e.jpg" },
        //  https://imgtu.com/i/g9giND
        { src: "https://z3.ax1x.com/2021/04/27/g9giND.jpg" }
      ]
    };
  },
  methods: {}
};
</script>
<style>
body {
  overflow-x: hidden;
}
.carousel-left {
  border: 1px solid #dadcdf;
  width: 20%;
  opacity: 0.75;
}
.div-right {
  width: 80%;
  display: flex;
  flex-direction: column;
}
.div-right-line-one {
  display: flex;
  flex-direction: row;
}

.div-right-line-two {
  display: flex;
  flex-direction: row;
}
.sub-div {
  width: 32%;
  height: 10vw;
  margin: 1px;
  border: 1px solid #dadcdf;
}
.title {
  color: black;
  line-height: 50%;
  font-size: 1vw;
  text-align: center;
  margin-top: 20%;
}
a {
  text-decoration: none;
  color: #8d99ae;
}
a:hover {
  color: #023047;
}
</style>
