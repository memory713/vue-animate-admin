<template>
  <div class="app-container">
    <h1>太极</h1>
    <div class="taiji">
      <div class="left"></div>
      <div class="right"></div>
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
.taiji {
  box-sizing: content-box;
  margin-top: 30px;
  height: 400px;
  width: 400px;
  background: linear-gradient(black 50%, white 50%);
  border: 1px solid #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  /*垂直居中*/
  animation: zhuan 50s infinite alternate linear;

  .left,
  .right {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
  .right {
    border: 75px solid #000;
    // animation: bian 1s infinite alternate linear; /*infinite循环进行 alternate反复 linear匀速*/
    animation-delay: -1s; /*延迟*/
    transform-origin: 100% 50%;
    background-color: #fff;
  }
  .left {
    border: 75px solid #fff;
    /*animation: bian 1s infinite alternate linear;*/
    transform-origin: 0% 50%;
    background-color: #000;
  }
}

@keyframes zhuan {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(3600deg);
  }
}
@keyframes bian {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1.5);
  }
}
</style>
