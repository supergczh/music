<template>
  <div id="app">
    <!-- <Nav></Nav> -->
     <Searchs v-show="toggleTab"></Searchs>
    <Tab v-show="toggleTab"></Tab>
    <Play v-show="toggleTab"></Play>
   
    <router-view/>
  </div>
</template>
<script>
import Nav from "./components/app/nav";
import Tab from "./components/app/tab";
import Play from "./components/app/play";
import Searchs from "./components/app/search";
export default {
  name: "App",
  components: {
    Nav,
    Tab,
    Play,
    Searchs
  },
  computed:{
    toggleTab(){
      let arr = ['/rank/info/','plist/list/','/search','/songing']; 
      let path = this.$route.path; 
      let re = new RegExp(arr.join('|'));
      return !re.test(path);
    }
  }
};
</script>
<style>

</style>
