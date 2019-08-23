<template>
  <div class="app-container">
    <div>
      <h1>渐变</h1>
      <div style>
        <ol>
          线性渐变
          <li>step1:var grd = context.createLinearGradient( xstart,ystart,xend,yend )</li>
          <li>step2:grd.addColorStop(stop,color)</li>
        </ol>
        <ol>
          径向渐变
          <li>step1:var grd = context.createRadialGradient( x0,y0,r0,x1,y1,r1 )</li>
          <li>step2:grd.addColorStop(stop,color)</li>
        </ol>
        <ol>
          图片填充背景
          <li>context.createPattern( img/canvas/video,repeat-style )</li>
          <li>repeat-style:no-repeat/repeat-x/repeat-y/repeat</li>
        </ol>
        <ol>
          fillStyle赋值场景(strokeStyle)
          <li>color （颜色作为背景色）</li>
          <li>gradient (渐变)</li>
          <li>img</li>
          <li>canvas （其他动画作为背景色）</li>
          <li>video</li>
        </ol>
      </div>
    </div>
    <div style="display:flex;">
      <canvas height="200" width="400" id="canvas4"></canvas>
      <div style="line-height:200px;">这是一个canvas渐变</div>
    </div>

    <div class="css-top">这是一个css渐变</div>

    <div style="display: flex;">
      <canvas id="canvas6" width="400" height="400"></canvas>
      <canvas id="canvas10" width="400" height="400"></canvas>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      filterText: "",
      data2: {}
    };
  },
  mounted() {
    this.beginCanvas4();
    this.beginCanvas6();
    this.beginCanvas10();
  },
  methods: {
    beginCanvas4() {
      var canvas4 = document.getElementById("canvas4");
      var ctx4 = canvas4.getContext("2d");
      ctx4.lineWidth = 30;

      for (var i = 0; i < 255; i++) {
        ctx4.beginPath();
        ctx4.moveTo(100 + i - 1, 100);
        ctx4.lineTo(100 + i, 100);
        ctx4.strokeStyle = "rgb(" + i + "," + i + "," + i + ")";
        ctx4.stroke();
      }
    },
    beginCanvas6() {
      var ctx6 = document.getElementById("canvas6").getContext("2d");
      var linearGradient = ctx6.createLinearGradient(0, 0, 300, 300);
      linearGradient.addColorStop(0, "white");
      linearGradient.addColorStop(0.25, "yellow");
      linearGradient.addColorStop(0.5, "green");
      linearGradient.addColorStop(0.75, "blue");
      linearGradient.addColorStop(1, "black");

      ctx6.fillStyle = linearGradient;

      ctx6.fillRect(0, 0, 300, 300);
    },
    beginCanvas10() {
      var ctx10 = document.getElementById("canvas10").getContext("2d");
      var linearGradient2 = ctx10.createRadialGradient(
        150,
        150,
        50,
        150,
        150,
        250
      );
      linearGradient2.addColorStop(0, "white");
      linearGradient2.addColorStop(0.25, "yellow");
      linearGradient2.addColorStop(0.5, "green");
      linearGradient2.addColorStop(0.75, "blue");
      linearGradient2.addColorStop(1, "black");

      ctx10.fillStyle = linearGradient2;

      ctx10.fillRect(0, 0, 300, 300);
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

