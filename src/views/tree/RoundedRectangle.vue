<template>
  <div class="app-container">
    <h1>圆角矩形</h1>
    <canvas id="canvas11" width="600" height="350" style="border:1px solid #000;margin-left: 20px;"></canvas>
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
    this.beginCanvas11();
  },
  methods: {
    beginCanvas11() {
      var canvas11 = document.getElementById("canvas11");
      canvas11.width = 540;
      canvas11.height = 540;
      var ctx11 = canvas11.getContext("2d");
      //drawRoundRect(ctx11,50,25,500,300,50)
      this.fillRoundRect(ctx11, 20, 20, 500, 500, 10, "#bbada0");
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          this.fillRoundRect(
            ctx11,
            40 + i * 120,
            40 + j * 120,
            100,
            100,
            6,
            "#ccc0b3"
          );
        }
      }
    },
    fillRoundRect(cxt, x, y, width, height, radius, /*option*/ fillColor) {
      if (2 * radius > width || 2 * radius > height) {
        return;
      }
      cxt.save();
      cxt.translate(x, y);
      this.pathRoundRect(cxt, width, height, radius);
      cxt.fillStyle = fillColor || "black";
      cxt.fill();
      cxt.restore();
    },
    pathRoundRect(cxt, width, height, radius) {
      cxt.beginPath();

      cxt.arc(width - radius, height - radius, radius, 0, Math.PI / 2);
      cxt.lineTo(radius, height);
      cxt.arc(radius, height - radius, radius, Math.PI / 2, Math.PI);
      cxt.lineTo(0, radius);
      cxt.arc(radius, radius, radius, Math.PI, (Math.PI * 3) / 2);
      cxt.lineTo(width - radius, 0);
      cxt.arc(width - radius, radius, radius, (Math.PI * 3) / 2, Math.PI * 2);

      cxt.closePath();
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

