<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="'1'"
        mode="horizontal"
        :router="true"
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/file">文档</el-menu-item>
        <el-menu-item index="/support">客户支持</el-menu-item>
        <el-menu-item index="/cooperation">合作与生态</el-menu-item>
        <el-menu-item style="float: right" index="/recognition">
          <el-button>开始使用</el-button>
        </el-menu-item>
      </el-menu>
    </el-header>
    <div style="text-align: center">
      <h1>合作与生态</h1>
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
  name: "cooperation"
};
</script>

<style scoped></style>
