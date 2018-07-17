<template>
<div >
    <div id="index"></div>
    <Carousel></Carousel>
    <div id="thunk"></div>
    <div style="font-size: 18px; color: rgb(100, 100, 100); margin-bottom: 8px; padding: 0px 2.5%; display: flex; justify-content: space-between;">
        <div>每日推荐</div>
     </div>
     <div class="recommend">
         <div class="recommend-wrapper">
            <a class="recommend-item" href="/music/songlistdetail/325664">
            <div>
                <img src="http://p3.music.126.net/fOnFKds9TyX4xiwXJpOctg==/109951163104649491.jpg?param=200y200" alt="">
            </div>
            <div class="item-name">伤感网络</div>
            </a>
            <a class="recommend-item" href="/music/songlistdetail/325667"><div><img src="http://p4.music.126.net/j-67AIUG3Vbgc232ZfBBNA==/109951163070603219.jpg?param=200y200" alt=""></div><div class="item-name">动漫神曲</div></a>
            <a class="recommend-item" href="/music/songlistdetail/325665"><div><img src="http://p4.music.126.net/Z9aZabA9Or0wLDjs9HQYfA==/109951163104890500.jpg?param=200y200" alt=""></div><div class="item-name">休闲时光</div></a>
            <a class="recommend-item" href="/music/songlistdetail/325644"><div><img src="http://p1.music.126.net/iT4DggSv3e7AaB7Tv96OTA==/109951163104397699.jpg?param=140y140" alt=""></div><div class="item-name">重金属风格</div></a>
     </div>
     </div>
     <div id="thunk"></div>
     <div style="font-size: 18px; color: rgb(100, 100, 100); margin-bottom: 8px; padding: 0px 2.5%; display: flex; justify-content: space-between;">
         <div>曲库好歌</div>
    </div>
    <List></List>
</div>
    
</template>

<script>
import Carousel from "./carousel";
import List from "./list";
export default {
  name: "Index",
   created(){
     

       this.$store.commit('pbonoff');
    
        },
  mounted() {
    this.$store.dispatch("addJson");
     this.$store.commit("addList2",this.$store.state.indexData.list);
    
  },
  components: {
    Carousel,
    List
  }
};
</script>

<style >
body {
  background: #fff !important;
}
.mu-tabs{
        display: block;
}
#index{
    width: 100%;
    height:6rem;
    /* overflow-y: hidden; */
}
#thunk {
  width: 100%;
  height: 15px;
  background: rgb(245, 245, 245);
  margin: 12px 0px;
}
.recommend {
  width: 92%;
  margin: 0 auto;
  overflow-x: hidden;
}
.recommend-wrapper {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}
.recommend-wrapper img {
  width: 5.6rem;
  height: 5.6rem;
  overflow-x: auto;
  white-space: nowrap;
}
.recommend-wrapper .recommend-item {
  display: inline-block;
  margin-right: 10px;
}
.recommend .recommend-wrapper .recommend-item .item-name {
  font-size: 12px;
  color: #666666;
  margin-top: 5px;
}

#songs-list {
  margin-top: 20px;
  /* margin-bottom: 75px; */
}
#songs-list .songs-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 2.5% 2px 2.5%;
  background: #fff;
}
#songs-list .songs-item:active {
  background: #f7f7f7;
  transition: all 0.1s ease-in;
}
#songs-list .songs-item .item-left {
  width: 70%;
  font-size: 12px;
  color: #969696;
}
#songs-list .songs-item .item-left .item-title {
  font-size: 14px;
  color: #666666;
  margin-top: 5px;
  margin-bottom: 10px;
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
}
#songs-list .songs-item .item-left .item-artist {
  margin-bottom: 5px;
}
#songs-list .songs-item .item-right {
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  height: 41px;
  line-height: 41px;
   color: #cccccc;
}
#songs-list .songs-item .item-right .item-add {
  width: 50%;
  font-size: 30px;
  font-weight: 400;
  color: #cccccc;
}
#songs-list .songs-item .item-right .collect-song {
  width: 50%;
  color: #cccccc;
  font-size: 13px;
}
#songs-list .current-played {
  position: relative;
}
#songs-list .current-played:before {
  position: absolute;
  content: "";
  display: block;
  width: 3px;
  height: 50px;
  background: #ffbf37;
  left: 0;
}
#songs-list .current-played .item-left .item-title {
  color: #ffbf37;
}
#songs-list .current-played .item-left .item-artist {
  color: #ffbf37;
}
</style>