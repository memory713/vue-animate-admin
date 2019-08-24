<template>
  <div class="app-container">
    <div style="display: flex;">
      <ol style="width: 50%;">
        绘制圆弧
        <li>
          arc( centerx,centery,radius,startingAngle,
          <br />endingAngle,anticlockwise=false)
        </li>
        <!-- 最后参数可选  顺时针或者逆时针 -->
        <li>strokeRect(x,y,w,h)有独立路经，不影响别的绘制</li>
        <li>fillRect(x,y,w,h)有独立路经，不影响别的绘制</li>
        <li>clearRect(x,y,w,h)擦除矩形区域</li>
        <li>arcTo( x1,y1,x2,y2,radius)</li>
        <li>step1:moveTo(x0,y0)</li>
      </ol>
      <ol style="width: 50%;">
        贝塞尔曲线
        <li>贝塞尔二次曲线：</li>
        <li>step1:moveTo(x0,y0)</li>
        <li>step2:quadraticCurveTo(x1,y1,x2,y2)</li>
        <li>
          <a
            href="http://tinyurl.com/html5quadratic"
            target="blank"
          >http://tinyurl.com/html5quadratic</a>
        </li>
        <li>贝塞尔三次曲线：</li>
        <li>step1:moveTo(x0,y0)</li>
        <li>step2:bezierCurveTo(x1,y1,x2,y2,x3,y3)</li>
        <li>
          <a href="http://tinyurl.com/html5bezier" target="blank">http://tinyurl.com/html5bezier</a>
        </li>
      </ol>
    </div>
    <canvas id="canvas8" width="600" height="350" style="border:1px solid #000;"></canvas>
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
    this.beginCanvas8();
  },
  methods: {
    beginCanvas8() {
      var ctx8 = document.getElementById("canvas8").getContext("2d");
      ctx8.lineWidth = 5;
      ctx8.strokeStyle = "#005588";
      for (var i = 0; i < 10; i++) {
        ctx8.beginPath();
        ctx8.arc(25 + i * 60, 60, 20, 0, (2 * Math.PI * (i + 1)) / 10);
        ctx8.closePath();
        ctx8.stroke();
      }
      for (var i = 0; i < 10; i++) {
        ctx8.beginPath();
        ctx8.arc(25 + i * 60, 120, 20, 0, (2 * Math.PI * (i + 1)) / 10);
        ctx8.stroke();
      }
      for (var i = 0; i < 10; i++) {
        ctx8.beginPath();
        ctx8.arc(25 + i * 60, 180, 20, 0, (2 * Math.PI * (i + 1)) / 10, true);
        ctx8.closePath();
        ctx8.stroke();
      }
      for (var i = 0; i < 10; i++) {
        ctx8.beginPath();
        ctx8.arc(25 + i * 60, 240, 20, 0, (2 * Math.PI * (i + 1)) / 10, true);
        ctx8.stroke();
      }
      ctx8.fillStyle = "#005588";
      for (var i = 0; i < 10; i++) {
        ctx8.beginPath();
        ctx8.arc(25 + i * 60, 300, 20, 0, (2 * Math.PI * (i + 1)) / 10, true);
        ctx8.closePath();
        ctx8.fill();
      }
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

