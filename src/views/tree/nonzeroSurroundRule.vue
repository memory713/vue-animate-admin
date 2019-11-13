<template>
  <div class="app-container">
    <h1>canvas补充</h1>
    <div style="display: flex;">
      <ol style="width: 30%;">
        阴影：
        <li>context.shadowColor = 'color'</li>
        <li>context.shadowOffsetX = ''</li>
        <li>context.shadowOffsetY = ''</li>
        <li>context.shadowBlur = 1 模糊程度</li>
      </ol>
      <ol style="width: 40%;">
        other：
        <li>context.globalAlpha = 1 (default)全局透明度</li>
        <li>
          context.globalCompositeOperation
          <br />=
          "source-over/destination-over......(canvas API)" (default)绘制的图形在重叠的时候的效果
        </li>
        <li>context.isPointInPath(x,y) 坐标点是否在当前的路径内</li>
      </ol>
      <ol style="width: 30%;">
        剪辑区域：
        <li>context.clip()</li>
        <li>
          非零环绕规则：
          <br />看某区域是否被填充
          <br />从该区域拉一条直线
          <br />看直线与线相交的轨迹
          <br />若为顺时针 +1 反则-1
          <br />相加得到总和
          <br />0不填充 非零填充
        </li>
      </ol>
    </div>

    <h1>canvas兼容图形库/</h1>
    <div style="display: flex;">
      <ol style="width: 50%;">
        IE6/7/8
        <li>explorecanvas</li>
        <li>
          <a
            href="https://code.google.com/p/explorecanvas/"
            target="blank"
          >https://code.google.com/p/explorecanvas/</a>
        </li>
      </ol>
      <ol style="width: 50%;">
        图形库
        <li>canvasplus</li>
        <li>
          <a
            href="https://code.google.com/p/explorercanvas/"
            target="blank"
          >https://code.google.com/p/explorercanvas/</a>
        </li>
        <li>Artisan JS</li>
        <li>
          <a href="http://artisanjs.com/" target="blank">http://artisanjs.com/</a>
        </li>
        <li>Rgraph</li>
        <li>
          <a
            href="https://roopons.com.au/wp-content/plugins/viral-optins/js/rgraph/"
            target="blank"
          >https://roopons.com.au/wp-content/plugins/viral-optins/js/rgraph/</a>
        </li>
      </ol>
    </div>

    <div>
      <h1>探照灯</h1>
      <canvas id="canvas13" style="border:1px solid #808080;margin:0 auto;"></canvas>
    </div>
    <div>
      <h1>非零环绕规则</h1>
      <canvas width="400" height="300" id="canvas3"></canvas>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
var searchLight = {
  x: 100,
  y: 100,
  radius: 80,
  vx: Math.random() * 5 + 10,
  vy: Math.random() * 5 + 10
};
var rot = 0;
export default {
  data() {
    return {};
  },
  mounted() {
    this.beginCanvas3();

    this.beginCanvas13();
  },
  methods: {
    beginCanvas3() {
      // 第三个图形
      var canvas3 = document.getElementById("canvas3");
      canvas3.width = 600;
      canvas3.height = 600;
      var ctx3 = canvas3.getContext("2d");

      ctx3.beginPath();
      ctx3.rect(0, 0, 600, 600);
      this.pathRect(ctx3, 50, 50, 500, 150);
      this.pathTriangle(ctx3, 200, 250, 50, 500, 350, 500);
      ctx3.arc(450, 400, 100, 0, Math.PI * 2, true); /*true 顺时针/逆时针*/
      ctx3.closePath();

      ctx3.fillStyle = "#058";
      ctx3.shadowColor = "gray";
      ctx3.shadowOffsetX = 10;
      ctx3.shadowOffsetY = 10;
      ctx3.shadowBlur = 10;
      ctx3.fill();
    },

    beginCanvas13() {
      var canvas13 = document.getElementById("canvas13");
      canvas13.width = 500;
      canvas13.height = 500;
      var ctx13 = canvas13.getContext("2d");
      var that = this;
      setInterval(function() {
        that.drawLight(ctx13);
        that.update(canvas13.width, canvas13.height);
      }, 40);
    },
    /*矩形 三角形*/
    pathRect(ctx, x, y, w, h) {
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + h);
      ctx.lineTo(x + w, y + h);
      ctx.lineTo(x + w, y);
      ctx.lineTo(x, y);
    },
    pathTriangle(ctx, x1, y1, x2, y2, x3, y3) {
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.lineTo(x1, y1);
    },
    drawLight(cxt) {
      var canvas = cxt.canvas;
      cxt.clearRect(0, 0, canvas.width, canvas.height);
      cxt.save();

      cxt.beginPath();
      cxt.fillStyle = "black";
      cxt.fillRect(0, 0, canvas.width, canvas.height);

      cxt.save();
      cxt.translate(searchLight.x, searchLight.y);
      cxt.rotate((rot / 180) * Math.PI);
      cxt.scale(searchLight.radius, searchLight.radius);
      this.starPath(cxt);
      /*cxt.arc(searchLight.x,searchLight.y,searchLight.radius,0,Math.PI*2);*/
      cxt.fillStyle = "#fff";
      cxt.fill();
      cxt.restore();
      cxt.clip();

      cxt.font = "bold 150px Arial";
      cxt.textAlign = "center";
      cxt.textBaseline = "middle";
      cxt.fillStyle = "#058";
      cxt.fillText("CANVAS!", canvas.width / 2, canvas.height / 4);
      cxt.fillText("CANVAS!", canvas.width / 2, canvas.height / 2);
      cxt.fillText("CANVAS!", canvas.width / 2, (canvas.height * 3) / 4);

      cxt.restore();
    },
    update(w, h) {
      rot += 1;
      searchLight.x += searchLight.vx;
      searchLight.y += searchLight.vy;

      if (searchLight.x - searchLight.radius <= 0) {
        searchLight.vx = -searchLight.vx;
        searchLight.x = searchLight.radius;
      }

      if (searchLight.x + searchLight.radius >= w) {
        searchLight.vx = -searchLight.vx;
        searchLight.x = w - searchLight.radius;
      }

      if (searchLight.y - searchLight.radius <= 0) {
        searchLight.vy = -searchLight.vy;
        searchLight.y = searchLight.radius;
      }

      if (searchLight.y + searchLight.radius >= h) {
        searchLight.vy = -searchLight.vy;
        searchLight.y = h - searchLight.radius;
      }
    },
    // 五角星
    starPath(cxt) {
      cxt.beginPath();
      /*循环五次*/
      for (var i = 0; i < 5; i++) {
        cxt.lineTo(
          Math.cos(((18 + i * 72) / 180) * Math.PI),
          -Math.sin(((18 + i * 72) / 180) * Math.PI)
        );
        cxt.lineTo(
          Math.cos(((54 + i * 72) / 180) * Math.PI) * 0.5,
          -Math.sin(((54 + i * 72) / 180) * Math.PI) * 0.5
        );
      }
      cxt.closePath();
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

