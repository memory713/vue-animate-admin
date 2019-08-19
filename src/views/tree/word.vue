<template>
  <div class="app-container">
    <div>
      <img src alt id="img" style="width:100px;height:100px;border:1px solid red;" />
      <h1>canvas 文字渲染</h1>
      <div style="display: flex;">
        <ol style="width: 30%;">
          文字渲染基础
          <li>context.font = 'bold 40px Arial' 默认值：20px sans-serif</li>
          <li>context.fillText(string,x,y,[maxlen])</li>
          <li>context.strokeText(string,x,y,[maxlen])</li>
          <li>maxlen:绘制一行文字所可以占用的最长宽度，压缩程度</li>
          <li>context.textAlign = left/center/right 文本水平对齐方式</li>
          <li>context.textBaseline = top/middle/bottom 文本垂直对齐方式</li>
          <li>context.measureText(string).width 文本的度量</li>
        </ol>
        <ol style="width: 40%;">
          font
          <li>font:font-style,font-variant,font-weight,font-size,font-family</li>
          <li>font-style:normal(default)/italic(斜体字)/oblique(倾斜字体)</li>
          <li>font-variant:normal(default)/small-caps(小型大写字母)</li>
          <li>font-weight:normal(default) 400/lighter/bold 700/bolder/100~900</li>
          <li>font-size:20px(default)/2em/150%</li>
          <li>font-family:支持@font-face</li>
        </ol>
      </div>
      <div style="display: flex;">
        <canvas id="canvas12" style="border:1px solid #808080;margin:0 auto;"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {};
  },
  mounted() {
    // document.getElementById("img").src = "@/assets/3.jpg";
    this.beginCanvas12();
  },
  methods: {
    beginCanvas12() {
      var canvas12 = document.getElementById("canvas12");
      canvas12.width = 800;
      canvas12.height = 800;
      var ctx12 = canvas12.getContext("2d");

      ctx12.font = "bold 40px Arial";
      /*one*/
      ctx12.fillStyle = "#058";
      ctx12.fillText("这片村头最酷的崽！", 40, 100);

      /*two*/
      ctx12.lineWidth = 1;
      ctx12.strokeStyle = "#058";
      ctx12.strokeText("这片村头最酷的崽！", 40, 200);

      /*three*/
      ctx12.fillText("这片村头最酷的崽！", 40, 300, 100);
      ctx12.strokeText("这片村头最酷的崽！", 40, 400, 100);

      /*four*/
      var linearGradient = ctx12.createLinearGradient(0, 0, 800, 0);
      linearGradient.addColorStop(0, "white");
      linearGradient.addColorStop(0.25, "yellow");
      linearGradient.addColorStop(0.5, "green");
      linearGradient.addColorStop(0.75, "blue");
      linearGradient.addColorStop(1, "black");

      ctx12.fillStyle = linearGradient;
      ctx12.fillText("这片村头最酷的崽！", 40, 500);

      /*five*/
      var backgroundImage = new Image();
      backgroundImage.src = "~@/assets/3.jpg";
      backgroundImage.onload = function() {
        var pattern = ctx12.createPattern(backgroundImage, "repeat");
        ctx12.fillStyle = pattern;
        ctx12.font = "bold 100px Arial";
        ctx12.fillText("Canvas！", 40, 600);
        //ctx12.strokeText('Canvas！',40,600);
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.css-top {
  width: 100%;
  height: 100px;
  background-image: linear-gradient(to right, pink, blue);
  margin-bottom: 20px;
  color: #fff;
  text-align: center;
  line-height: 100px;
}
</style>

