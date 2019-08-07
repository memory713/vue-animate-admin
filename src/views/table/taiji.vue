<template>
  <div class="app-container">taiji</div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      list: null,
      listLoading: true
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      console.log(3);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
