<template>
    <mu-tabs :value="active"  
    indicator-color="#ec87bf" 
    full-width
    
    >
    <mu-tab to="/">
          <mu-icon value="headset" size='24'></mu-icon>
        <div>新歌</div>
    </mu-tab >
    <mu-tab to="/rank">
        <mu-icon value="equalizer" size='26'></mu-icon>
        <div>排行</div>
    </mu-tab>
     <mu-tab to="/plist">
        <mu-icon value="widgets"  size='24'></mu-icon>
        <div>歌单</div>
    </mu-tab>
    <mu-tab to="/singer">
        <mu-icon value="person_outline"  size='24'></mu-icon>
        <div>歌手</div>
    </mu-tab>
  </mu-tabs>
</template>

<script>
export default {
  name: "Tab",
  computed: {
    active() {
      switch (this.$route.path) {
        case "/":
          return 0;
        case "/rank":
          return 1;
        case "/plist":
          return 2;
        case "/singer":
          return 3;
      }
    }
  }
};
</script>

<style lang="less">
#app .mu-tab-wrapper{
    padding: 8px;
}
#app .mu-tabs {
  // background: linear-gradient(22deg, #f68b0e 0%, #ffd000 80%);
  
  background: linear-gradient(
    to right,
    #c6426e,
    #642b73
  ); 

  position: fixed;
  left: 0;
  top: 45px;
}
img {
  width: 20px;
  height: 20px;
}
.material-icons {
  font-size: 30px;
 
}
#app .mu-tab .mu-icon{
   margin: 0;
}
</style>