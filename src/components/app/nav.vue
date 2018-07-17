<template>
    <mu-appbar style="width: 100%;" color="primary">
  <mu-button icon slot="left">
    <mu-icon value="menu"></mu-icon>
  </mu-button>
  Title

  <mu-button flat slot="right">LOGIN</mu-button>
</mu-appbar>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="less">
.demo-text {
  padding: 16px;
  background: #fff;
  p {
    margin: 8px 0;
  }
}
