<template>
    <div id="searchlist">
        <mu-appbar style="width: 100%;" color="#fff">
            <mu-button icon slot="left"  @click="$router.go(-1)">
                <mu-icon 
                    value="keyboard_arrow_left"
                    color="#fff"
                    size="31"
                   
                ></mu-icon>
            </mu-button>
                搜索
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
          <div class="s">
            <div class="s2">
 <input type="text" class="search" v-model="val">
           
            </div>
           <mu-button 
                class="sbtn" 
                color="primary"
                :to="{path:`/search/list/${val}`}"
                >搜索
            </mu-button>
        </div>
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
        <!-- <mu-paper :z-depth="1" class="demo-loadmore-wrap">
            <mu-list textline="three-line">
                <mu-list-item 
                    button 
                    v-for="val in list" 
                    @click="$store.dispatch('play',val.hash)"
                >
                    <mu-list-item-content>
                        <mu-list-item-title>{{val.filename}}</mu-list-item-title>
                        <mu-list-item-action>
                            <mu-icon value="play_for_work" size="30"></mu-icon>
                        </mu-list-item-action>
                    </mu-list-item-content>
                </mu-list-item>
                <div class="d"></div>
            </mu-list>
        </mu-paper> -->
    </div>
</template>

<script>
import jsonp from 'fetch-jsonp';
export default {
    name:'SearchList',
   methods: {
    selectTimer(index, val) {
      this.$store.dispatch("play", val.hash);
       this.$store.commit("pbon");
      this.timeIndex = index;
      setTimeout(() => {
        this.$refs.song.style.marginBottom='66px'
      }, );
         
    }
  },
     created(){
        this.$store.commit('pbonoff');
    },
    async mounted() {
        let name = this.$route.params.name;
        let d = await jsonp('http://mobilecdn.kugou.com/api/v3/search/song?format=jsonp&keyword='+ name +'&page=1&pagesize=30&showtype=1',{
            jsonpCallback:'callback'
        })
        let json = await d.json();

        this.list = json.data.info;
        console.log(this.list);

        
    },
    data(){
        return{
            list:[],
            val:this.$route.params.name,
            timeIndex:''
        }
    },

}
</script>

<style>
#searchlist {
  overflow-x: hidden;
}

#searchlist .mu-appbar {
  width: 100%;
  height: 40px;
  background: #f6a416 !important;
  color: #ffffff;
  top: 0;
  left: 0;
  z-index: 2000;
}
#searchlist .mu-appbar-title {
  color: #fff !important;
  font-size: 16px;
  text-align: center;
}
.d{
    padding-top:4.5rem; 
}
#searchlist .demo-loadmore-wrap {
  width: 100%;
  height:40.3rem;
  display: flex;
  flex-direction: column;
  
}
#searchlist .demo-loadmore-wrap .mu-appbar {
    width: 100%;
}
#searchlist .mu-list{
    padding: 10px;
}
#searchlist .mu-item-title{
    float: left;
    
    width:90%;
    font-size:1.2rem;
}
#searchlist .mu-item-action{
    float: right;
    max-width:none;
    min-width:0 !important;
}


#searchlist .mu-list li{
    border-bottom: 1px solid #ccc;
}

#searchlist .mu-appbar-title{
    color:#fff;
    text-align: center;
}
.s {
  width: 88%;
  height: 3rem;
  margin: 1rem auto 0;
}
.s2{
    float: left;
    margin: 0 2.5%;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #e5e5e5;
    border-radius: 30px;
    width: 70%;
    height: 2rem;
    color: #666666;
    overflow: hidden;
}
#searchlist .search {
  width: 70%;
  padding: 0.4rem 0.0714rem 0.4rem 1.7rem;
  margin-right: 3%;
  border: 1px solid #fff;
  border-radius: 5px;
  float: left;
  margin: 0;
  color: #666;
  outline: none;
}
#searchlist .sbtn {
  width: 4.25% !important;
  height: 1.8rem;
  line-height: 2.0714rem;
  border: none;
  border-radius: 5px;
  text-align: center;
  float: left;
  margin-left: 0.4rem;
  
}
</style>