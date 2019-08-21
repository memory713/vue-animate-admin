<template>
  <div class="app-container">
    <h1>canvas 图形变换</h1>
    <div style="display: flex;">
      <ol style="width: 30%;">
        图形变换
        <li>translate(x,y)位移</li>
        <li>rotate(deg)旋转</li>
        <li>scale(sx,sy)缩放</li>
        <li>transform(a,b,c,,d,e,f)</li>
      </ol>
      <ol style="width: 30%;">
        应用函数
        <li>cxt.save() 保存图形当前节点</li>
        <li>cxt.restore() 返回图形之前保存的节点状态 与save成对出现 防止图形变换状态叠加</li>
      </ol>
      <img src="@/assets/time3.png" style="width: 40%;height: 160px;" />
    </div>
    <h1>五角星</h1>
    <div style="display: flex;">
      <img src="@/assets/time2.png" style="width: 50%;" />
      <img src="@/assets/time4.png" style="width: 50%;" />
    </div>
    <div style="display: flex;margin-top:30px;">
      <canvas id="canvas9" style="border:1px solid #000;margin:0 auto;"></canvas>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.beginCanvas9();
  },
  methods: {
    beginCanvas9() {
      var canvas9 = document.getElementById("canvas9");
      canvas9.width = 600;
      canvas9.height = 600;
      var ctx9 = canvas9.getContext("2d");

      // 采用渐变色背景
      var skyStyle = ctx9.createLinearGradient(0, 0, 0, canvas9.height);
      skyStyle.addColorStop(0, "black");
      skyStyle.addColorStop(1.0, "#035");
      ctx9.fillStyle = skyStyle;

      ctx9.fillRect(0, 0, canvas9.width, canvas9.height);
      for (var i = 0; i < 200; i++) {
        var r = Math.random() * 5 + 5;
        var x = Math.random() * canvas9.width;
        var y = Math.random() * canvas9.height * 0.65;
        var a = Math.random() * 360;
        this.drowStar(ctx9, x, y, r, a);
      }
      // 添加一个月亮
      this.fillMoon(ctx9, 2, 900, 100, 80, 30);
      // 添加一片绿地
      this.drawLand(ctx9);
    },
    /*r小半径 R大半径 x y 偏移量 rot旋转角度*/
    drowStar(cxt, x, y, R, rot) {
      cxt.save();

      cxt.translate(x, y);
      cxt.rotate((rot / 180) * Math.PI);
      cxt.scale(R, R);

      this.starPath(cxt);
      /*绘制出在 (x,y) 大小为R，旋转为rot的五角星*/
      cxt.fillStyle = "#fb3";
      // cxt.strokeStyle='#fb5';
      // cxt.lineWidth = 3;
      // cxt.lineJoin = 'round';

      cxt.fill(); //填充
      //cxt.stroke();//描边
      cxt.restore();
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
    },
    /*绘制弯月*/
    fillMoon(cxt, d, x, y, R, rot, /*optional*/ fillColor) {
      cxt.save();
      cxt.translate(x, y);
      cxt.rotate((rot * Math.PI) / 180);
      cxt.scale(R, R);
      this.PathMoon(cxt, d);
      cxt.fillStyle = fillColor || "#fd5";
      cxt.fill();
      cxt.restore();
    },
    PathMoon(cxt, d) {
      cxt.beginPath();
      cxt.arc(0, 0, 1, 0.5 * Math.PI, 1.5 * Math.PI, true);
      cxt.moveTo(0, -1);
      cxt.arcTo(d, 0, 0, 1, this.dis(0, -1, d, 0) / d);
      cxt.closePath();
    },
    /*坐标距离公式*/
    dis(x1, y1, x2, y2) {
      return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    },
    /*绘制绿地*/
    drawLand(cxt) {
      cxt.save();
      cxt.beginPath();
      cxt.moveTo(0, 450);
      cxt.bezierCurveTo(200, 450, 400, 600, 600, 450);
      cxt.lineTo(600, 600);
      cxt.lineTo(0, 600);
      cxt.closePath();

      var landStyle = cxt.createLinearGradient(0, 600, 0, 0);
      landStyle.addColorStop(0.0, "#030");
      landStyle.addColorStop(1.0, "#580");
      cxt.fillStyle = landStyle;
      cxt.fill();
      cxt.restore();
    }
  }
};
</script>
<style lang="scss" scoped>
.sky {
  width: 100%;
  height: 500px;
  background-color: #89dfff;
  position: relative;
  overflow: hidden;
}

.caodi {
  width: 100%;
  bottom: 0;
  height: 150px;
  background-color: #f2d4ae;
  position: absolute;
}

.cloud {
  position: absolute;
  top: 50px;
  left: 500px;
  height: 40px;
  width: 150px;
  background-color: #fff;
  border-radius: 20px;
}

.cloud-1 {
  position: absolute;
  left: 20px;
  top: -10px;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background-color: #fff;
}

.cloud-2 {
  position: absolute;
  left: 60px;
  top: -30px;
  border-radius: 50%;
  height: 60px;
  width: 70px;
  background-color: #fff;
}

.cloudA {
  top: 150px;
  left: 150px;
  transform: scale(0.8);
  animation: cloud 10s infinite ease;
  /*ease缓动 先加速后减速*/
}

@keyframes cloud {
  0% {
    transform: translateX(-20vw) scale(0.8);
  }
  100% {
    transform: translateX(90vw) scale(0.8);
  }
}
</style>
