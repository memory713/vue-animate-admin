<template>
  <div class="app-container">
    <div class="music">
      <h1>字符动画</h1>
      <ul class="music-ul">
        <li>
          <span>hello</span>
          <div class="line"></div>
        </li>
        <li>
          <span>world</span>

          <div class="line"></div>
        </li>
        <li>
          <span>emmmmmm</span>

          <div class="line"></div>
        </li>
        <li>
          <span>beautiful</span>

          <div class="line"></div>
        </li>
      </ul>
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
  methods: {}
};
</script>
<style lang="scss" scoped>
.music {
  width: 90%;
  margin-top: 50px;
}
.music-ul {
  padding-bottom: 50px;
}
.music-ul li {
  list-style-type: none;
  color: #fff;
  font-size: 30px;
  text-shadow: 1px 1px 5px #f00; /*左右 上下 模糊  颜色*/
  transition: all 0.5s;
}
.music-ul li:hover {
  letter-spacing: 50px; /*字符间的空隙*/
  text-shadow: 0 0 25px #0f0, 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff9900,
    0 0 20px #ff9900, 0 0 25px #ff9900, 0 0 30px #ff9900;
}
.line {
  width: 0px;
  height: 2px;
  border-bottom: 1px solid #ff9900;
  transition: all 0.5s;
}
.music-ul li:hover .line {
  width: 500px;
}
</style>
