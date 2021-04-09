<template>
  <div class="home">
    <div class="bav-bar-div">
      <el-menu
        :default-active="currentPage"
        class="nav-bar"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item class="nav-bar-item" index="1">实时检测</el-menu-item>
        <el-menu-item class="nav-bar-item" index="2">上传图片 </el-menu-item>
      </el-menu>
    </div>

    <div class="page-content">
      <RealTimeMonitoring v-show="currentPage === '1'"></RealTimeMonitoring>
      <Upload v-show="currentPage === '2'"></Upload>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RealTimeMonitoring from "@/components/RealTimeMonitoring";
import Upload from "@/components/Upload";
export default {
  name: "Home",
  components: {
    RealTimeMonitoring,
    Upload
  },
  data() {
    return {
      currentPage: "1"
    };
  },
  methods: {
    handleSelect(key) {
      this.currentPage = key;
    }
  }
};
</script>

<style scoped>
.bav-bar-div {
  margin-left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.nav-bar-item {
  width: 12vw;
  text-align: center;
}
</style>
