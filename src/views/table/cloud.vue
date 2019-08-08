<template>
  <div class="app-container">
    <h1>白云飘飘</h1>
    <div class="sky">
      <div class="caodi"></div>
      <div class="cloud">
        <div class="cloud-1"></div>
        <div class="cloud-2"></div>
      </div>
      <div class="cloud cloudA">
        <div class="cloud-1"></div>
        <div class="cloud-2"></div>
      </div>
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
