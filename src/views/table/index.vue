<template>
  <div class="app-container">
    <h1>三角形</h1>
    <div class="sanjiaoxing1 sanjiaoxing"></div>
    <div class="sanjiaoxing2 sanjiaoxing"></div>
    <div class="sanjiaoxing3 sanjiaoxing"></div>
    <div class="sanjiaoxing4 sanjiaoxing"></div>
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
.sanjiaoxing {
  height: 0px;
  width: 0px;
  display: inline-block;
}
.sanjiaoxing1 {
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 80px solid red;
  position: relative;
}
.sanjiaoxing1:before {
  content: "";
  top: -50px;
  left: 10px;
  position: absolute;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 80px solid red;
}

.sanjiaoxing2 {
  margin-left: 100px;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-right: 80px solid blue;
}
.sanjiaoxing3 {
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 80px solid green;
}
.sanjiaoxing4 {
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 80px solid orange;
  position: relative;
}
.sanjiaoxing4:after {
  content: "";
  position: absolute;
  top: -80px;
  left: 80px;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 80px solid orange;
}
</style>
