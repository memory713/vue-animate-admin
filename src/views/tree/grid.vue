<template>
  <div class="app-container">
    <h1>网格</h1>
    <div style="display: flex;">
      <canvas height="600" width="600" id="canvas5" style="border:1px solid #808080;margin:0 auto;"></canvas>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      data: [
        { x: 100, y: 120 },
        { x: 200, y: 160 },
        { x: 300, y: 240 },
        { x: 400, y: 320 },
        { x: 500, y: 80 }
      ]
    };
  },
  mounted() {
    // 初始化
    var ctx5 = document.getElementById("canvas5").getContext("2d");
    this.LineChart(ctx5);

    this.drawGrid(ctx5);
    this.drawAxis(ctx5);
    this.drawDotted(ctx5, this.data);
  },
  methods: {
    // 构建函数
    LineChart(ctx5) {
      // 画布的大小
      this.canvas5Height = ctx5.canvas.height;
      this.canvas5Width = ctx5.canvas.width;
      // 网格的大小
      this.gridSize = 10;
      //坐标系的间距
      this.space = 20;
      // 坐标原点
      this.x0 = this.space;
      this.y0 = this.canvas5Height - this.space;
      // 箭头的大小
      this.arrowSize = 10;
      // 绘制点
      this.dottedSize = 10;
      // 点的坐标 和数据有关系
    },
    // 绘制网格
    drawGrid(ctx5) {
      var xLineTotal = Math.floor(this.canvas5Height / this.gridSize);
      var yLineTotal = Math.floor(this.canvas5Width / this.gridSize);
      for (var i = 0; i < xLineTotal; i++) {
        ctx5.beginPath();
        ctx5.moveTo(0, i * this.gridSize - 0.5);
        ctx5.lineTo(this.canvas5Width, i * this.gridSize - 0.5);
        ctx5.strokeStyle = "#eee";
        ctx5.stroke();
      }
      for (var i = 0; i < yLineTotal; i++) {
        ctx5.beginPath();
        ctx5.moveTo(i * this.gridSize - 0.5, 0);
        ctx5.lineTo(i * this.gridSize - 0.5, this.canvas5Height);
        ctx5.strokeStyle = "#eee";
        ctx5.stroke();
      }
    },
    // 绘制坐标系
    drawAxis(ctx5) {
      // 绘制x轴

      ctx5.beginPath();
      ctx5.moveTo(this.x0 - 0.5, this.y0 - 0.5);
      ctx5.lineTo(this.canvas5Width - this.space - 0.5, this.y0 - 0.5);
      ctx5.strokeStyle = "#000";
      ctx5.stroke();
      // 箭头
      ctx5.beginPath();
      ctx5.moveTo(
        this.canvas5Width - this.space - this.arrowSize,
        this.y0 + this.arrowSize / 2
      );
      ctx5.lineTo(
        this.canvas5Width - this.space - this.arrowSize,
        this.y0 - this.arrowSize / 2
      );
      ctx5.lineTo(this.canvas5Width - this.space - 0.5, this.y0);
      ctx5.fill();
      ctx5.strokeStyle = "#000";
      ctx5.stroke();

      // 绘制y轴
      ctx5.beginPath();
      ctx5.moveTo(this.x0 - 0.5, this.y0 - 0.5);
      ctx5.lineTo(this.space - 0.5, this.space - 0.5);
      ctx5.strokeStyle = "#000";
      ctx5.stroke();
      // 箭头
      ctx5.beginPath();
      ctx5.moveTo(this.space + this.arrowSize / 2, this.space + this.arrowSize);
      ctx5.lineTo(this.space - this.arrowSize / 2, this.space + this.arrowSize);
      ctx5.lineTo(this.space, this.space);
      ctx5.fill();
      ctx5.strokeStyle = "#000";
      ctx5.stroke();
    },
    // 绘制点
    drawDotted(ctx5, data) {
      var that = this;
      //记录当前坐标
      var prevCanvasX = 0;
      var prevCanvasY = 0;
      data.forEach(function(item, i) {
        // x的坐标=原点的坐标+数据的坐标
        var canvasX = that.x0 + item.x;
        var canvasY = that.y0 - item.y;
        // 绘制
        ctx5.beginPath();
        ctx5.moveTo(
          canvasX - that.dottedSize / 2,
          canvasY - that.dottedSize / 2
        );
        ctx5.lineTo(
          canvasX + that.dottedSize / 2,
          canvasY - that.dottedSize / 2
        );
        ctx5.lineTo(
          canvasX + that.dottedSize / 2,
          canvasY + that.dottedSize / 2
        );
        ctx5.lineTo(
          canvasX - that.dottedSize / 2,
          canvasY + that.dottedSize / 2
        );
        ctx5.closePath();
        ctx5.fill();
        // 点的连线
        if (i == 0) {
          ctx5.beginPath();
          ctx5.moveTo(that.x0, that.y0);
          ctx5.lineTo(canvasX, canvasY);
          ctx5.stroke();
        } else {
          // 上一个点
          ctx5.beginPath();
          ctx5.moveTo(prevCanvasX, prevCanvasY);
          ctx5.lineTo(canvasX, canvasY);
          ctx5.stroke();
        }
        // 记录下当前坐标
        prevCanvasX = canvasX;
        prevCanvasY = canvasY;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

