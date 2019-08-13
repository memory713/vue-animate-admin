<template>
  <div class="app-container">
    <div>
      <h1>画笔</h1>
      <ol style>
        画笔属性
        <li>lineWidth:线宽，默认1px 若想细且清晰 +-0.5</li>
        <li>lineCap:线末端类型 butt默认、round、square</li>
        <li>lineJoin:相交线的拐点 miter默认、round、bevel</li>
        <li>miterLimit:默认为10，只有在lineJoin为miter时有效果，表示尖角的长度（简单理解），在需要特别显示出尖角的时候适用</li>
        <li>strokeStyle:线的颜色</li>
        <li>fillStyle:填充颜色</li>
        <li>setLineDash:设置虚线 setLineDash([5,10,15])虚实交替</li>
        <li>getDashOffset:设置虚线偏移量（负值向右）getDashOffset=-20</li>
      </ol>
    </div>
    <div>
      <canvas id="canvas0"></canvas>
      <div class="con">
        <canvas id="canvas2" width="800" height="500"></canvas>
        <!-- 默认300*150 -->
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
var W = 1000,
  H = 500,
  ctx2,
  angle = -5,
  len = 10,
  count = 850;
var canvas2, ctx2;

export default {
  data() {
    return {
      filterText: "",
      data2: {}
    };
  },
  mounted() {
    this.beginCanvas0();
    this.beginCanvas2();
  },
  methods: {
    beginCanvas0() {
      var myCanvas = document.getElementById("canvas0");
      var ctx = myCanvas.getContext("2d");
      /*hsla(Hue,Saturation,Lightness,alpha)
色调、饱和度、亮度、透明度*/
      // 画布填充颜色
      ctx.fillStyle = "#ADCBF0";
      // 绘制一个填充的长方形  x y 宽 高
      ctx.fillRect(0, 0, 1000, 2000);
      // 绘制一个矩形的边框  x y 宽 高
      /*ctx.strokeRect(0,0,1000,2000);*/

      ctx.beginPath(); //划线开始
      ctx.moveTo(20, 30); //画线开始的坐标
      ctx.lineTo(90, 30); //线条画到哪里的坐标
      ctx.moveTo(55, 15);
      ctx.lineTo(55, 70);
      ctx.moveTo(55, 30);
      ctx.lineTo(20, 70);
      ctx.moveTo(55, 30);
      ctx.lineTo(90, 70);
      ctx.moveTo(35, 70);
      ctx.lineTo(75, 70);
      ctx.moveTo(75, 70);
      ctx.lineTo(55, 85);
      ctx.moveTo(55, 85);
      ctx.lineTo(55, 120);
      ctx.moveTo(55, 120);
      ctx.lineTo(45, 110);
      ctx.moveTo(20, 90);
      ctx.lineTo(90, 90);
      ctx.strokeStyle = "#7A668B";
      ctx.stroke(); //执行 描边

      // 雯
      ctx.beginPath(); //划线开始
      ctx.moveTo(200, 15);
      ctx.lineTo(250, 15);
      ctx.moveTo(190, 20);
      ctx.lineTo(190, 50);
      ctx.moveTo(190, 20);
      ctx.lineTo(260, 20);
      ctx.moveTo(260, 20);
      ctx.lineTo(260, 50);
      ctx.moveTo(225, 15);
      ctx.lineTo(225, 50);
      ctx.moveTo(195, 30);
      ctx.lineTo(215, 30);
      ctx.moveTo(195, 40);
      ctx.lineTo(215, 40);
      ctx.moveTo(235, 30);
      ctx.lineTo(255, 30);
      ctx.moveTo(235, 40);
      ctx.lineTo(255, 40);
      ctx.moveTo(215, 60);
      ctx.lineTo(235, 60);
      ctx.moveTo(190, 70);
      ctx.lineTo(260, 70);
      ctx.moveTo(245, 70);
      ctx.lineTo(190, 120);
      ctx.moveTo(205, 70);
      ctx.lineTo(260, 120);
      ctx.strokeStyle = "#E27746";
      ctx.lineWidth = 1; //线条粗细
      ctx.stroke(); //执行 描边
      // ctx.fill();填充
      // ctx.closePath();自动闭合

      // ctx.clearRect()清空画面
    },
    beginCanvas2() {
      canvas2 = document.getElementById("canvas2");
      ctx2 = canvas2.getContext("2d");
      ctx2.strokeStyle = "rgba(255,255,250,0.3)";
      var run = setInterval(this.draw, 100);
    },
    draw() {
      ctx2.clearRect(0, 0, W, H); //先清除  再重复画线
      for (var i = 0; i <= count; i++) {
        this.xiayu(Math.random() * W, Math.random() * H, angle, len); //Math.random() 0~1随机数
      }
    },
    xiayu(x, y) {
      ctx2.beginPath();
      ctx2.moveTo(x, y);
      ctx2.lineTo(x + angle, y + len);
      ctx2.lineWidth = 0.5;
      ctx2.stroke();
    }
  }
};
</script>
<style lang="scss" scoped>
.con {
  display: inline-block;
  height: 500px;
  width: 800px;
  background-image: url(~@/assets/aaa.jpg);
  background-repeat: no-repeat;
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
  position: relative;
}
#canvas2 {
  position: absolute;
  top: 0;
  left: 0;
}
</style>

