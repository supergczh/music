<template>
    <div id="pl">
         <!-- <div id="index"></div> -->
         <div class="songs-list-detail-wrapper">
             <div class="header">
                 <div class="blur-bg-wrapper">
                     
                     <div class="blur-bg" :style="{backgroundImage:'url('+img+') '}"></div>
                     </div><div class="center">
                         <div id="header"><span>歌单详情</span> 
                     <router-link to="/plist">
                     <a class="h-back" href="/music/repertoire">
                      <mu-icon 
                            value="keyboard_arrow_left" 
                            class="gun"
                            size="30" color="#fff">
                        </mu-icon>
                     </a>
                      </router-link >
                     </div>
                     
                     <div class="pic">
                         <img :src="img" alt="">
                         </div><div class="info">
                             <div class="info-top">
                                 <div class="name">伤感网络</div>
                                 <!-- <div class="collect">收藏歌单</div> -->
                        </div><div class="tags">标签：<span>伤感</span></div>
                        </div>
                        </div><div class="data"><span>收藏(20)</span><span>评论(60)</span><span>分享(60)</span></div></div>
                        
                     <div class="introduction">简介：{{intro}}</div><div style="width: 100%; height: 15px; background: rgb(245, 245, 245); margin: 12px 0px;"></div><div style="font-size: 18px; color: rgb(100, 100, 100); margin-bottom: 8px; padding: 0px 2.5%; display: flex; justify-content: space-between;">
                         
                    <div>歌曲列表</div></div>
                <div id="songs-list"  ref='song'>
     
        <div >
          
        <div  style="opacity: 1; transform: translate(0px, 0px);"
            v-for="(val,key) in list"
           @click="selectTimer(key,val) "
           :class="timeIndex === key ? 'songs-item current-played' : 'songs-item' "
        >
        
            <div class="item-left">
                    <div class="item-title">{{val.filename.split('-')[1]}}</div>
                <div class="item-artist">{{val.filename.split('-')[0]}}</div>  
             </div>
             <div class="item-right">
                 <mu-icon value="vertical_align_bottom" size="30"></mu-icon>
             </div></div>
     </div>   
    </div>
                        </div></div></div>
                       </div></div></div>
      
    </div>
    </div>
</template>
<script>
import { songpage } from "../../json.js";
export default {
  name: "Pl",
  data() {
    return {
      list: [],
      img: "",
      title: "",
      intro:'',
        timeIndex: ""
    };
  },
  async mounted() {
     
    let id = this.$route.params.id || 0;
    
    let d = songpage.plist.list.info[id * 1];
   
     this.list = d.songs;
    this.img = d.imgurl.replace(/{size}/, "");
    this.title = d.specialname;
    this.intro=d.intro
  },
 
   methods: {
    selectTimer(index, val) {
      this.$store.dispatch("play", val.hash);
       this.$store.commit("pbon");
      this.timeIndex = index;
      setTimeout(() => {
        this.$refs.song.style.marginBottom='66px'
      }, 100);
         
    }
  },
  
};
</script>

<style>

.blur-bg{
    height: 100%;
    background: no-repeat ;
    background-size: cover;
    filter: blur(5px);
    opacity: 0.8;
}

#index {
  width: 100%;
  height: 5.6rem;
  /* overflow-y: hidden; */
}
.d {
  padding-top: 4.5rem;
}
#pl {
  height: 100%;
}
#pl .demo-loadmore-wrap {
  width: 100%;
  height: 40.3rem;
  display: flex;
  flex-direction: column;
}
.gun {
  position: absolute;
}
#pl .demo-loadmore-wrap .mu-appbar {
  width: 100%;
}
#pl .mu-list {
  padding: 10px;
}
#pl .mu-item-title {
  float: left;
  width: 90%;
  /* font-size: 1.2rem; */
}
#pl .mu-item-action {
  float: right;
  max-width: none;
  min-width: 0 !important;
}
#pl .mu-card-media {
  overflow: hidden;
  height: 14rem;
}
#pl .mu-card-media img {
  width: 22.2rem;
  margin-top: -2rem;
}
#pl .mu-list li {
  border-bottom: 1px solid #ccc;
}
#pl .mu-card-media-title .mu-card-title {
  font-size: 20px;
}

 .songs-list-detail-wrapper .header {
    width: 100%;
    height: 130px;
    color: #fff;
    position: relative
    }
   .songs-list-detail-wrapper .header .blur-bg-wrapper {
    width: 100%;
    height: 100%;
    background: #000000;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 900;
}
.songs-list-detail-wrapper .header .center {
    width: 95%;
    margin: 0 auto;
}
#header {
    height: 40px;
    width: 95%;
    line-height: 40px;
    font-size: 14px;
    color: #fff;
    padding: 0 2.5%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1900;
    background: rgba(0, 0, 0, 0);
    transition: all 0.2s ease-in;
    text-align: center;
}
#header .h-back {
    height: 40px;
    line-height: 40px;
    float: left;
    display: flex;
    align-items: center;
    color: #fff;
}
a {
    background: transparent;
    text-decoration: none;
    outline: none;
}
.am-icon-md {
    width: 22px;
    height: 22px;
}
.am-icon {
    fill: currentColor;
    background-size: cover;
    width: 22px;
    height: 22px;
}
 .songs-list-detail-wrapper .header .center .pic {
    width: 100px;
    height: 100px;
    border: 2px solid #e9e9e9;
    position: absolute;
    top: 50px;
    left: 4%;
    z-index: 1000;
}
 .songs-list-detail-wrapper .header .center .pic img {
    width: 100px;
    height: 100px;
}
 .songs-list-detail-wrapper .header .center .info {
    position: relative;
    margin-left: 120px;
    padding-top: 50px;
    z-index: 1000;
}
 .songs-list-detail-wrapper .header .center .info .info-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
 .songs-list-detail-wrapper .header .center .info .info-top .name {
    font-size: 18px;
}
 .songs-list-detail-wrapper .header .center .info .info-top .collect {
    height: 25px;
    line-height: 27px;
    font-size: 14px;
    border: 1px solid #fff;
    border-radius: 30px;
    color: #fff;
    padding: 0 5px;
}
 .songs-list-detail-wrapper .header .center .info .tags span {
    display: inline-block;
    font-size: 11px;
    height: 16px;
    line-height: 16px;
    border: 1px solid #d6d6d6;
    padding: 0 5px;
    border-radius: 30px;
    margin-right: 5px;
}
 .songs-list-detail-wrapper .header .data {
    color: #666;
    position: absolute;
    bottom: -25px;
    left: 130px;
    font-size: 13px;
}
 .songs-list-detail-wrapper .header .data span {
    margin-right: 20px;
}
.songs-list-detail-wrapper .introduction {
    width: 95%;
    margin: 0 auto;
   
    text-overflow: ellipsis;
     -webkit-line-clamp: 3;
    word-break: break-all;
    margin-top: 45px;
    color: #666;
    font-size: 14px;
    line-height: 16px;
    transition: all 0.3s ease-in;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: 3; /** 显示的行数 **/
    overflow: hidden;  /** 隐藏超出的内容 **/
}
#header .h-back {
    height: 40px;
    line-height: 40px;
    float: left;
    display: flex;
    align-items: center;
    color: #fff !important;
}
</style>