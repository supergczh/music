<template>
    <div id="info">
      <mu-container data-mu-loading-color="secondary" data-mu-loading-overlay-color="rgba(0, 0, 0, .7)" v-loading="loading2" class="demo-loading-wrap">
  
      </mu-container>
        <mu-paper :z-depth="1" class="">
              
            <mu-list textline="three-line">
                <mu-card-media :title="img.rankname" sub-title="Image Sub Title">
                    <router-link to="/rank">
                        <mu-icon 
                            value="keyboard_arrow_left" 
                            class="gun"
                            size="50" color="#fff">
                        </mu-icon>
                    </router-link>
                    <img :src="img.imgurl?img.imgurl.replace(/{size}/,''):''">
                </mu-card-media>
               
              
            </mu-list>
         <div id="songs-list"  ref='song'>
        <div >
          
        <div  style="opacity: 1; transform: translate(0px, 0px);"
            v-for="(val,key) in list"
           @click="selectTimer(key,val) "
           :class="timeIndex === key ? 'songs-item current-played' : 'songs-item' "
        >
        <div class="order">{{key+1}}</div>
            <div class="item-left">
              
                    <div class="item-title">{{val.filename.split('-')[1]}}</div>
                <div class="item-artist">{{val.filename.split('-')[0]}}</div>  
             </div>
             <div class="item-right">
                 <mu-icon value="vertical_align_bottom" size="30"></mu-icon>
             </div></div>
     </div>   
    </div>
        </mu-paper>
    </div>
</template>
<script>
import axios from "axios";
import { info } from "../../json.js";

export default {
  name: "Info",
  data() {
    return {
      list: [],
      img: "",
      timeIndex: "",
        loading1: false,
      loading2: false
    };
  },
  created() {
    let id = this.$route.params.id || "666";
    this.$store.dispatch("xq", id);
    const loading = this.$loading();
      setTimeout(() => {
        loading.close();
      }, 1000)

      
    setTimeout(() => {

      console.log(this.$store.state.pbhash.songs.list);
      this.list = this.$store.state.pbhash.songs.list;
      this.img = this.$store.state.pbhash.info;
    }, 700);
  },
  methods:{
     loading () {
      this.loading2 = true;
      setTimeout(() => {
        this.loading2 = false;
      }, 1000)
    },
     selectTimer(index, val) {
      this.$store.dispatch("play", val.hash);
      this.$store.commit("pbon");
      this.timeIndex = index;
      setTimeout(() => {
        this.$refs.song.style.marginBottom='66px'
      },100);
         
    }
  }
};
</script>

<style>
.mu-paper-round {
  box-shadow: none !important;
}
.order {
  display: inline;
  float: left;
  width: 1rem;
  text-align: center;
  font-size: 12px;
}
.songs-item .order {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  text-align: center;
  line-height: 14px;
  margin-right: 8px;
  color: #666666;
}
.songs-item:nth-child(1) .order {
  background: #e80000;
  color: #fff;
}
.songs-item:nth-child(2) .order {
  background: #ff7200;
  color: #fff;
}
.songs-item:nth-child(3) .order {
  background: #f8b300;
  color: #fff;
}
#index {
  width: 100%;
  height: 3.6rem;
  /* overflow-y: hidden; */
}
.d {
  padding-top: 4.5rem;
}
#info .mu-card-media {
}
#info .demo-loadmore-wrap {
  width: 100%;
  height: 48.3rem;
  margin-right: 0;
  display: flex;
  flex-direction: column;
}
.gun {
  position: absolute;
}
#info .demo-loadmore-wrap .mu-appbar {
  width: 100%;
}
#info .mu-list {
  padding: 10px;
}
#info .mu-item-title {
  float: left;
  width: 90%;
  font-size: 1.2rem;
}
#info .mu-item-action {
  float: right;
  max-width: none;
  min-width: 0 !important;
}
#info .mu-card-media img {
  width: 22.2rem;
  height: 16rem;
  border: none;
}
#info .mu-list li {
  border-bottom: 1px solid #ccc;
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
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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