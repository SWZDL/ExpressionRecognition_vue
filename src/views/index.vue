<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">文档</el-menu-item>
        <el-menu-item index="2">客户支持</el-menu-item>
        <el-menu-item index="3">合作与生态</el-menu-item>
      </el-menu>
      <div class="line"></div>
    </el-header>
    <el-main>
      <el-button type="text" @click="dialog = true">打开嵌套的Drawer</el-button>

      <el-row>
        <el-col  :span="14" :offset="2">
          <div class="grid-content bg-purple grid-content_left" style="height: 600px; " >

            <el-col :span="24" >
              <div class="grid-content bg-purple" style="height: 500px">
                <el-row>
                  <el-col :span="24">
                    <div class="grid-content bg-purple">
                      <el-image :src="src" :fit="contain" style="height: 500px"></el-image>
                      <el-drawer
                          title="接口调用结果"
                          :show-close="false"
                          :visible.sync="dialog"
                          direction="rtl"
                          :wrapperClosable="false"
                          :modal="false"
                          :modal-append-to-body="false"
                          :append-to-body="false"
                          style="position:absolute"
                          custom-class="demo-drawer"
                          ref="drawer"
                      >
                        <div class="demo-drawer__content">
                          <el-button type="text" icon="el-icon-arrow-right" @click="cancelForm" ></el-button>
                        </div>
                      </el-drawer>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="24">
              <div class="grid-content bg-purple" style="height: 100px;">
                <el-col :span="24">
                  <el-col :span="20">
                    <div class="grid-content bg-purple" >
                      <el-input placeholder="请输入图片URL" v-model="input3" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                      </el-input>
                    </div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content bg-purple">
                      <el-upload
                          class="upload-demo"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :on-preview="handlePreview"
                          :on-remove="handleRemove"
                          :before-remove="beforeRemove"
                          multiple
                          :limit="3"
                          :on-exceed="handleExceed"
                          :file-list="fileList">
                        <el-button size="small" type="primary">点击上传</el-button>
                      </el-upload>
                    </div>
                  </el-col>
                </el-col>
                <el-col :span="24" :offset="8">
                  <div class="grid-content bg-purple" >
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                  </div>
                </el-col>
              </div>
            </el-col>

          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple grid-content-right" style="height: 600px;">
            <el-col :span="10" :offset="1">
              <div class="grid-content bg-purple">
                <el-button>
                  <div class="block">
                    <el-image :src="src_1" style="width: 100px; height: 100px" @click="src=src_1"></el-image>
                  </div>
                </el-button>
              </div>
            </el-col>
            <el-col :span="10" :offset="2">
              <div class="grid-content bg-purple">
                <el-button>
                  <div class="block">
                    <el-image :src="src_2" style="width: 100px; height: 100px" @click="src=src_2"></el-image>
                  </div>
                </el-button>
              </div>
            </el-col>
            <el-col :span="10" :offset="1">
              <div class="grid-content bg-purple">
                <el-button>
                  <div class="block">
                    <el-image :src="src_3" style="width: 100px; height: 100px"></el-image>
                  </div>
                </el-button>
              </div>
            </el-col>
            <el-col :span="10" :offset="2">
              <div class="grid-content bg-purple">
                <el-button>
                  <div class="block">
                    <el-image :src="src_4" style="width: 100px; height: 100px"></el-image>
                  </div>
                </el-button>
              </div>
            </el-col>
            <el-col :span="10" :offset="1">
              <div class="grid-content bg-purple">
                <el-button>
                  <div class="block">
                    <el-image :src="src_5" style="width: 100px; height: 100px"></el-image>
                  </div>
                </el-button>
              </div>
            </el-col>
            <el-col :span="10" :offset="2">
              <div class="grid-content bg-purple">
                <el-button>
                  <div class="block">
                    <el-image :src="src_6" style="width: 100px; height: 100px"></el-image>
                  </div>
                </el-button>
              </div>
            </el-col>
            <el-col :span="10" :offset="1">
              <div class="grid-content bg-purple">
                <el-button>
                  <div class="block">
                    <el-image :src="src_7" style="width: 100px; height: 100px"></el-image>
                  </div>
                </el-button>
              </div>
            </el-col>
            <el-col :span="10" :offset="2">
              <div class="grid-content bg-purple">
                <el-button>
                  <div class="block">
                    <el-image :src="src_8" style="width: 100px; height: 100px"></el-image>
                  </div>
                </el-button>
              </div>
            </el-col>
          </div>
        </el-col>

      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      loading: false,
      timer: null,
      src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Ffi%2F1m%2FQJ8631204164.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621180695&t=c80953b37d7aa4b045673da0aea7a5f6",
      src_1:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Ffi%2F1m%2FQJ8631204164.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621180695&t=c80953b37d7aa4b045673da0aea7a5f6",
      src_2:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp1.meituan.net%2Fwedding%2Fd3ed7a125092567c169156bf2f50d56057383.jpg&refer=http%3A%2F%2Fp1.meituan.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621180742&t=6048478aecee24f0af52ca6919e7773e",
      src_3:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhzdaily.hangzhou.com.cn%2Fdskb%2Fmedia%2F1%2F3%2F2009-08%2F10%2F15%2Fres02_attpic_brief.jpg&refer=http%3A%2F%2Fhzdaily.hangzhou.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621180842&t=7b682f0b035eb5b0f05ddba8c01a15ec",
      src_4:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.gtimg.com%2Ffashion%2Fpics%2Fhv1%2F3%2F19%2F2240%2F145660848.png&refer=http%3A%2F%2Fimg1.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621180928&t=89ab323d27887106a2dc0054fb879228",
      src_5:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190624%2F10%2F1561341616-zIldrNkRUc.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621180964&t=412de8ad431a793211641d034cf00fab",
      src_6:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190419%2F490ce2d8656545198e56faaf888b419d.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621180985&t=723e4d9ae1b67930d259286146296040",
      src_7:"https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/image/c0=shijue1,0,0,294,40/sign=0a2c730f9d2bd40756cadbbe13e0f424/34fae6cd7b899e510cbbd73348a7d933c8950ddb.jpg",
      src_8:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2779491931,296125921&fm=26&gp=0.jpg"
    }
  },
  methods: {
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
  }
}
</script>
<style>
.grid-content_left{
  background-color: #DCDFE6;
}
.grid-content-right{
  background-color: #E4E7ED;
}
</style>