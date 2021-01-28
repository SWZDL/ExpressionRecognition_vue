<template>
  <div class="container">
    <el-upload
      v-if="!showResult"
      drag
      action="http://localhost:8080/faceDetection"
      :auto-upload="true"
      :http-request="uploadRequest"
      :show-file-list="false"
    >
      <i class="el-icon-upload"></i>
      <div>将文件拖到此处，或<em>点击上传</em></div>
      <div slot="tip">
        上传图片,大小不能超过 10MB!
      </div>
    </el-upload>

    <div v-if="showResult" class="result">
      <div class="result-img">
        <img :src="imageBase64UrlWithSchema" alt="请刷新重试" width="500px" />
      </div>
      <div class="result-text">
        <div class="result-text-left">
          <div class="result-item">美丑打分：{{ faceResult.beauty }}</div>
          <div class="result-item">年龄：{{ faceResult.age }}</div>
          <!--  人脸置信度 -->
          <div class="result-item">
            人脸置信度：{{ faceResult.face_probability }}
          </div>
          <div class="result-item">
            <!--  none:不笑；smile:微笑；laugh:大笑  -->
            表情：{{ faceResult.expression.type }}<br />
            表情置信度：{{ faceResult.expression.probability }}
          </div>
          <div class="result-item">
            <!--  angry:愤怒 disgust:厌恶 fear:恐惧 happy:高兴
            sad:伤心 surprise:惊讶 neutral:无情绪  -->
            情绪：{{ faceResult.emotion.type }}<br />
            情绪置信度：{{ faceResult.emotion.probability }}
          </div>
          <div class="result-item">
            <!--  none:无眼镜，common:普通眼镜，sun:墨镜  -->
            是否带眼镜：{{ faceResult.glasses.type }}<br />
            眼镜置信度：{{ faceResult.glasses.probability }}
          </div>
          <div class="result-item">
            <!--  square: 正方形 triangle:三角形 oval: 椭圆 heart: 心形 round: 圆形  -->
            脸型：{{ faceResult.face_shape.type }}<br />
            置信度：{{ faceResult.face_shape.probability }}
          </div>
          <div class="result-item">
            真实人脸/卡通人脸：{{ faceResult.face_type.type }}<br />
            人脸类型判断正确的置信度：{{ faceResult.face_type.probability }}
          </div>
          <div class="result-item">
            性别：{{ faceResult.gender.type }}<br />
            性别置信度：{{ faceResult.gender.probability }}
          </div>
          <div class="result-item">
            双眼状态（睁开/闭合）-右眼状态：
            {{ faceResult.eye_status.right_eye }}<br />
            双眼状态（睁开/闭合）-左眼状态：{{ faceResult.eye_status.left_eye }}
          </div>
        </div>
        <div class="result-text-right">
          <div class="result-item">
            人脸旋转角度参数-平面内旋转角[-180(逆时针), 180(顺时针)]：
            {{ faceResult.angle.roll }}<br />
            人脸旋转角度参数-三维旋转之俯仰角度[-90(上), 90(下)]：
            {{ faceResult.angle.pitch }}<br />
            人脸旋转角度参数-三维旋转之左右旋转角[-90(左), 90(右)]：
            {{ faceResult.angle.yaw }}<br />
          </div>
          <div class="result-item">
            人脸区域离上边界的距离：{{ faceResult.location.top }}<br />
            人脸区域离左边界的距离：{{ faceResult.location.left }}<br />
            人脸框相对于竖直方向的顺时针旋转角，[-180,180]：
            {{ faceResult.location.rotation }}<br />
            人脸区域的宽度：{{ faceResult.location.width }}<br />
            人脸区域的高度：{{ faceResult.location.height }}<br />
          </div>
          <!--  人脸质量信息 -->
          <div class="result-item">
            取值范围在[0~255], 表示脸部区域的光照程度 越大表示光照越好：
            {{ faceResult.quality.illumination }}<br />
            右眼遮挡比例，[0-1] ， 1表示完全遮挡：
            {{ faceResult.quality.occlusion.right_eye }}<br />
            鼻子遮挡比例，[0-1] ， 1表示完全遮挡：
            {{ faceResult.quality.occlusion.nose }}<br />
            嘴巴遮挡比例，[0-1] ， 1表示完全遮挡：
            {{ faceResult.quality.occlusion.mouth }}<br />
            左眼遮挡比例，[0-1] ，1表示完全遮挡：
            {{ faceResult.quality.occlusion.left_eye }}<br />
            左脸颊遮挡比例，[0-1] ， 1表示完全遮挡：
            {{ faceResult.quality.occlusion.left_cheek }}<br />
            下巴遮挡比例，[0-1] ， 1表示完全遮挡：
            {{ faceResult.quality.occlusion.chin_contour }}<br />
            右脸颊遮挡比例，[0-1] ， 1表示完全遮挡：
            {{ faceResult.quality.occlusion.right_cheek }}<br />
            人脸模糊程度，范围[0~1]，0表示清晰，1表示模糊：
            {{ faceResult.quality.blur }}<br />
            人脸完整度，0或1, 0为人脸溢出图像边界，1为人脸都在图像边界内：
            {{ faceResult.quality.completeness }}<br />
          </div>
        </div>
      </div>
    </div>
    <el-button class="backBtn" plain @click="backBtn" v-if="showResult"
      >继续检测其他图片</el-button
    >
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { get, post } from "@/plugins/http";

export default {
  name: "Upload",
  data: function() {
    return {
      // https://myblog-figure-bed-1258528016.file.myqcloud.com/PicGo/20210128164930.jpg
      imageBase64Url: "",
      imageBase64UrlWithSchema: "",
      faceResult: {},
      showResult: false
    };
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    faceResult(data) {
      // console.log(data);
      this.showResult = true;
    }
  },
  methods: {
    async uploadRequest(params) {
      const that = this,
        file = params.file,
        fileType = file.type,
        isImage = fileType.indexOf("image") !== -1,
        isVideo = fileType.indexOf("video") !== -1;

      const isLt10M = file.size / 1024 / 1024 < 10;
      if (!isLt10M) {
        this.$message.info("上传头像图片大小不能超过 10MB!");
        return;
      }
      if (!isImage && !isVideo) {
        this.$message.info("请选择图片或视频!");
        return;
      }

      if (isImage) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = await function() {
          that.imageBase64UrlWithSchema = reader.result;
          //去掉base64位头部
          const result = reader.result.replace(/^data:image\/\w+;base64,/, "");
          that.imageBase64Url = result;
          console.log(that.imageBase64Url);
          //上传图片
          that.uploadImage(result);
        };
      }
    },

    async uploadImage(imageBase64) {
      const resp = await post("/faceDetection", {
        imageBase64: imageBase64,
        faceFieId:
          "age,beauty,expression,face_shape,gender,glasses,landmark,landmark72,landmark150,quality,eye_status,emotion,face_type"
      });
      this.faceResult = resp.result.face_list[0];
    },

    backBtn() {
      console.log("返回");
      this.showResult = false;
      this.imageBase64UrlWithSchema = "";
      this.imageBase64Url = "";
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
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
  overflow: auto;
}

.result {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.result-img {
  width: 20%;
  margin-right: 10%;
  border-radius: 5%;
  overflow: hidden;
}

.result-text {
  display: flex;
  flex-direction: row;
  text-align: left;
  width: 40%;
}

.result-text-left {
  display: flex;
  flex-direction: column;
  width: 35%;
}

.result-text-right {
  display: flex;
  flex-direction: column;
  width: 70%;
}

.result-item {
  margin-top: 20px;
}
.backBtn {
  margin-bottom: 20px;
}
</style>
