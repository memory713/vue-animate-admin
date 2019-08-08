<template>
  <div class="app-container">
    <h1>图片翻转</h1>
    <div class="card">
      <img src="@/assets/1.jpg" class="card-font" />
      <img src="@/assets/2.jpg" class="card-back" />
    </div>
    <div class="card card2">
      <img src="@/assets/3.jpg" class="card-font" />
      <img src="@/assets/4.jpg" class="card-back" />
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
.card {
  position: relative;
  margin: 10px;
  display: inline-block;
}

.card2 {
  margin-left: 250px;
}

.card-font,
.card-back {
  position: absolute;
  top: 0;
  left: 0;
  height: 400px;
  width: 250px;
  backface-visibility: hidden;
  /*背面翻转*/
  transition: all 1s;
}

.card-font {
  transform: rotateY(0deg);
}

.card-back {
  transform: rotateY(180deg);
}

.card:hover .card-font {
  transform: rotateY(180deg);
}

.card:hover .card-back {
  transform: rotateY(0deg);
}
</style>
