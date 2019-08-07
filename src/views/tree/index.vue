<template>
  <div class="app-container">
    <div class="tooltips tooltips1" data-tip="第一个标签">鼠标悬浮查看</div>
    <div class="tooltips tooltips2" data-tip="第二个标签">鼠标悬浮查看</div>
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

  methods: {
    filterNode(value, data) {}
  }
};
</script>
<style lang="scss" scoped>
.tooltips {
  padding: 10px;
  display: inline-block;
  border: 1px solid #808080;
  position: relative;
}
.tooltips1:before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 8px solid rgba(0, 0, 0, 0.3);
  transform: translate(-50%, 5px);
}
.tooltips1:after {
  content: attr(data-tip);
  position: absolute;
  top: 100%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  white-space: nowrap; /*不要回行*/
  padding: 3px 20px;
  transform: translate(-50%, 13px);
}
.tooltips2:before {
  content: "";
  position: absolute;
  top: 0%;
  left: 100%;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 8px solid rgba(0, 0, 0, 0.3);
  transform: translate(8px, 15px);
}
.tooltips2:after {
  content: attr(data-tip);
  position: absolute;
  top: 0%;
  left: 100%;
  white-space: nowrap; /*不要回行*/
  background-color: rgba(0, 0, 0, 0.3);
  padding: 3px 20px;
  transform: translate(16px, 7px);
}
.tooltips1:before,
.tooltips1:after,
.tooltips2:before,
.tooltips2:after {
  transition: all 0.5s;
  opacity: 0;
}
.tooltips1:hover:before,
.tooltips1:hover:after,
.tooltips2:hover:before,
.tooltips2:hover:after {
  opacity: 1;
}
</style>

