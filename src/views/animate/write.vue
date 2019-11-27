<template>
  <div class="app-container">
    <canvas
      id="canvas"
      @mousedown="candown"
      @mouseup="canup"
      @mousemove="canmove"
      @mouseout="canout"
    >
      您的浏览器不支持canvas
    </canvas>
    <div id="controller">
      <div
        id="black_btn"
        class="color_btn color_btn_selected"
        @click="changeColor"
      ></div>
      <div id="blue_btn" class="color_btn" @click="changeColor"></div>
      <div id="green_btn" class="color_btn" @click="changeColor"></div>
      <div id="red_btn" class="color_btn" @click="changeColor"></div>
      <div id="orange_btn" class="color_btn" @click="changeColor"></div>
      <div id="yellow_btn" class="color_btn" @click="changeColor"></div>

      <div id="clear_btn" class="op_btn" @click="clear">清 除</div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import $ from "jquery";
var canvasWidth = Math.min(800, $(window).width() - 20);
var canvasHeight = canvasWidth;

var strokeColor = "black";
var isMouseDown = false;
var lastLoc = { x: 0, y: 0 };
var lastTimestamp = 0;
var lastLineWidth = -1;
var canvas, context;
export default {
  data() {
    return {};
  },
  mounted() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    $("#controller").css("width", canvasWidth + "px");
    drawGrid();
    canvas.addEventListener("touchstart", this.myTouchstart, false);
    canvas.addEventListener("touchmove", this.myTouchmove, false);
    canvas.addEventListener("touchend", this.myTouchend, false);
  },
  methods: {
    candown(e) {
      e.preventDefault();
      beginStroke({ x: e.clientX, y: e.clientY });
    },
    canup(e) {
      e.preventDefault();
      endStroke();
    },
    canout(e) {
      e.preventDefault();
      endStroke();
    },
    canmove(e) {
      e.preventDefault();
      if (isMouseDown) {
        moveStroke({ x: e.clientX, y: e.clientY });
      }
    },
    myTouchstart(e) {
      e.preventDefault();
      touch = e.touches[0];
      beginStroke({ x: touch.pageX, y: touch.pageY });
    },
    myTouchmove(e) {
      e.preventDefault();
      if (isMouseDown) {
        touch = e.touches[0];
        moveStroke({ x: touch.pageX, y: touch.pageY });
      }
    },
    myTouchend(e) {
      e.preventDefault();
      endStroke();
    },
    // 清除
    clear() {
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      drawGrid();
    },
    // 换颜色
    changeColor(e) {
      $(".color_btn").removeClass("color_btn_selected");
      e.target.classList.add("color_btn_selected");
      strokeColor = $(".color_btn_selected").css("background-color");
    }
  }
};

// 绘制田字格
function drawGrid() {
  context.save();

  context.strokeStyle = "rgb(230,11,9)";
  /*外边框*/
  context.beginPath();
  context.moveTo(3, 3);
  context.lineTo(canvasWidth - 3, 3);
  context.lineTo(canvasWidth - 3, canvasHeight - 3);
  context.lineTo(3, canvasHeight - 3);
  context.closePath();
  context.lineWidth = 6;
  context.stroke();
  // 米字格
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(canvasWidth, canvasHeight);

  context.moveTo(canvasWidth, 0);
  context.lineTo(0, canvasHeight);

  context.moveTo(canvasWidth / 2, 0);
  context.lineTo(canvasWidth / 2, canvasHeight);

  context.moveTo(0, canvasHeight / 2);
  context.lineTo(canvasWidth, canvasHeight / 2);

  context.lineWidth = 1;
  context.stroke();

  context.restore();
}
function beginStroke(point) {
  isMouseDown = true;
  //console.log("mouse down!")
  lastLoc = windowToCanvas(point.x, point.y);
  lastTimestamp = new Date().getTime();
}
function endStroke() {
  isMouseDown = false;
}
function moveStroke(point) {
  var curLoc = windowToCanvas(point.x, point.y);
  var curTimestamp = new Date().getTime();
  var s = calcDistance(curLoc, lastLoc);
  var t = curTimestamp - lastTimestamp;

  var lineWidth = calcLineWidth(t, s);

  //draw
  context.beginPath();
  context.moveTo(lastLoc.x, lastLoc.y);
  context.lineTo(curLoc.x, curLoc.y);

  context.strokeStyle = strokeColor;
  context.lineWidth = lineWidth;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.stroke();

  lastLoc = curLoc;
  lastTimestamp = curTimestamp;
  lastLineWidth = lineWidth;
}

//   canvas.onmousedown = function(e) {
//     e.preventDefault();
//     beginStroke({ x: e.clientX, y: e.clientY });
//   };
//   canvas.onmouseup = function(e) {
//     e.preventDefault();
//     endStroke();
//   };
//   canvas.onmouseout = function(e) {
//     e.preventDefault();
//     endStroke();
//   };
//   canvas.onmousemove = function(e) {
//     e.preventDefault();
//     if (isMouseDown) {
//       moveStroke({ x: e.clientX, y: e.clientY });
//     }
//   };

//   canvas.addEventListener("touchstart", function(e) {
//     e.preventDefault();
//     touch = e.touches[0];
//     beginStroke({ x: touch.pageX, y: touch.pageY });
//   });
//   canvas.addEventListener("touchmove", function(e) {
//     e.preventDefault();
//     if (isMouseDown) {
//       touch = e.touches[0];
//       moveStroke({ x: touch.pageX, y: touch.pageY });
//     }
//   });
//   canvas.addEventListener("touchend", function(e) {
//     e.preventDefault();
//     endStroke();
//   });

var maxLineWidth = 30;
var minLineWidth = 1;
var maxStrokeV = 10;
var minStrokeV = 0.1;
function calcLineWidth(t, s) {
  var v = s / t;

  var resultLineWidth;
  if (v <= minStrokeV) resultLineWidth = maxLineWidth;
  else if (v >= maxStrokeV) resultLineWidth = minLineWidth;
  else {
    resultLineWidth =
      maxLineWidth -
      ((v - minStrokeV) / (maxStrokeV - minStrokeV)) *
        (maxLineWidth - minLineWidth);
  }

  if (lastLineWidth == -1) return resultLineWidth;

  return (resultLineWidth * 1) / 3 + (lastLineWidth * 2) / 3;
}

function calcDistance(loc1, loc2) {
  return Math.sqrt(
    (loc1.x - loc2.x) * (loc1.x - loc2.x) +
      (loc1.y - loc2.y) * (loc1.y - loc2.y)
  );
}

function windowToCanvas(x, y) {
  var bbox = canvas.getBoundingClientRect();
  return { x: Math.round(x - bbox.left), y: Math.round(y - bbox.top) };
}
</script>
<style scoped>
#canvas {
  display: block;
  margin: 0 auto;
}
#controller {
  margin: 0 auto;
}
.op_btn {
  float: right;
  margin: 10px 0 0 10px;
  border: 2px solid #aaa;
  width: 80px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  border-radius: 5px 5px;
  cursor: pointer;
  background-color: white;
  font-weight: bold;
  font-family: Microsoft Yahei, Arial;
}
.op_btn:hover {
  background-color: #def;
}
.clearfix {
  clear: both;
}

.color_btn {
  float: left;
  margin: 10px 10px 0 0;
  border: 5px solid white;
  width: 40px;
  height: 40px;
  border-radius: 5px 5px;
  cursor: pointer;
}
.color_btn:hover {
  border: 5px solid violet;
}
.color_btn_selected {
  border: 5px solid blueviolet;
}
#black_btn {
  background-color: black;
}
#blue_btn {
  background-color: blue;
}
#green_btn {
  background-color: green;
}
#red_btn {
  background-color: red;
}
#orange_btn {
  background-color: orange;
}
#yellow_btn {
  background-color: yellow;
}
</style>
