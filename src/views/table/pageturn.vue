<template>
  <div class="app-container">
    <h1>翻页效果</h1>
    <div id="my3dspace">
      <div id="pagegroup">
        <div class="page" id="page1">1</div>
        <div class="page" id="page2">2</div>
        <div class="page" id="page3">3</div>
        <div class="page" id="page4">4</div>
        <div class="page" id="page5">5</div>
        <div class="page" id="page6">6</div>
      </div>
    </div>
    <div class="op">
      <span @click="next" class="button">next</span>
      <span @click="prev" class="button">prev</span>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return { indexPage: 1 };
  },
  created() {},
  methods: {
    next() {
      if (this.indexPage == 6) return;

      var curPage = document.getElementById("page" + this.indexPage);
      curPage.style.webkitTransform = "rotateX(-90deg)";

      this.indexPage++;
      var nextPage = document.getElementById("page" + this.indexPage);
      nextPage.style.webkitTransform = "rotateX(0deg)";
    },
    prev() {
      if (this.indexPage == 1) return;

      var curPage = document.getElementById("page" + this.indexPage);
      curPage.style.webkitTransform = "rotateX(90deg)";

      this.indexPage--;
      var nextPage = document.getElementById("page" + this.indexPage);
      nextPage.style.webkitTransform = "rotateX(0deg)";
    }
  }
};
</script>
<style lang="scss" scoped>
.op {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.button {
  display: inline-block;
  height: 40px;
  width: 100px;
  line-height: 40px;
  background-color: #69c;
  text-align: center;
  border-radius: 5px;
  color: #fff;
  margin-right: 40px;
  cursor: pointer;
}

#my3dspace {
  -webkit-perspective: 800;
  -webkit-perspective-origin: 50% 50%;
  overflow: hidden;
}

#pagegroup {
  position: relative;
  width: 400px;
  height: 400px;
  margin: 0px auto;
  -webkit-transform-style: preserve-3d;
}

.page {
  position: absolute;
  width: 360px;
  height: 360px;
  padding: 20px;
  background-color: black;
  color: #fff;
  font-weight: bold;
  font-size: 360px;
  line-height: 360px;
  text-align: center;
}

#page1 {
  transition: transform 1s ease;
  transform-origin: bottom;
}

#page2,
#page3,
#page4,
#page5,
#page6 {
  transition: transform 1s ease;
  transform-origin: bottom;
  transform: rotateX(90deg);
}
</style>
