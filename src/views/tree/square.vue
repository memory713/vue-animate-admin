<template>
  <div class="app-container">
    <div>
      <ol>
        绘制矩形
        <li>rect(x,y,w,h)无独立路经</li>
        <li>strokeRect(x,y,w,h)有独立路经，不影响别的绘制</li>
        <li>fillRect(x,y,w,h)有独立路经，不影响别的绘制</li>
        <li>clearRect(x,y,w,h)擦除矩形区域</li>
      </ol>
    </div>
    <div>
      <h1>七巧板</h1>
      <canvas id="canvas7" width="800" height="800" style="margin:0 auto"></canvas>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// 七巧板参数
var tangram = [
  {
    p: [{ x: 0, y: 0 }, { x: 800, y: 0 }, { x: 400, y: 400 }],
    color: "#caff67"
  },
  {
    p: [{ x: 0, y: 0 }, { x: 400, y: 400 }, { x: 0, y: 800 }],
    color: "#67becf"
  },
  {
    p: [
      { x: 800, y: 0 },
      { x: 800, y: 400 },
      { x: 600, y: 600 },
      { x: 600, y: 200 }
    ],
    color: "#ef3d61"
  },
  {
    p: [{ x: 600, y: 200 }, { x: 600, y: 600 }, { x: 400, y: 400 }],
    color: "#f9f51a"
  },
  {
    p: [
      { x: 400, y: 400 },
      { x: 600, y: 600 },
      { x: 400, y: 800 },
      { x: 200, y: 600 }
    ],
    color: "#a594c0"
  },
  {
    p: [{ x: 200, y: 600 }, { x: 400, y: 800 }, { x: 0, y: 800 }],
    color: "#fa8ecc"
  },
  {
    p: [{ x: 800, y: 400 }, { x: 800, y: 800 }, { x: 400, y: 800 }],
    color: "#f6ca29"
  }
];
export default {
  data() {
    return {
      filterText: "",
      data2: {}
    };
  },
  mounted() {
    this.beginCanvas7();
  },
  methods: {
    beginCanvas7() {
      var ctx7 = document.getElementById("canvas7").getContext("2d");
      for (var i = 0; i < tangram.length; i++) {
        this.draw2(tangram[i], ctx7);
      }
    },
    draw2(piece, cxt) {
      cxt.beginPath();
      cxt.moveTo(piece.p[0].x, piece.p[0].y);
      for (var i = 0; i < piece.p.length; i++) {
        cxt.lineTo(piece.p[i].x, piece.p[i].y);
      }
      cxt.closePath();
      cxt.fillStyle = piece.color;
      cxt.fill();
      cxt.strokeStyle = "black";
      cxt.lineWidth = 3;
      cxt.stroke(); //执行
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

