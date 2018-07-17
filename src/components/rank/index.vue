<template>
    <div id="rank">
        <div id="index"></div>
        <mu-paper :z-depth="1" class="">
        <mu-list>
            <router-link 
                v-for="val in list"
                :to="{'path':'/rank/info/'+val.rankid}"
            >
                <mu-list-item 
                    avatar 
                    button 
                    :ripple="true"
                    
                >
                    <mu-list-item-action>
                        <mu-avatar size="100">
                            <img :src="val.imgurl.replace(/{size}/,'')">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-title>{{val.rankname}}</mu-list-item-title>
                    
                </mu-list-item>
            </router-link>
        </mu-list>
        </mu-paper>
    </div>
</template>
<script>
import {list as data} from '../../json.js';
    export default {
        name:'Rank',
        data(){
            return {
                list:[]
            }
        },
        created(){
            this.$store.commit('pbonoff');
        },
        async mounted(){
            //await async
            let d = await data.rank.list;       
                
            this.list.push(...d);
        }
    }
</script>

<style lang="less">
.mu-tabs{
        display: block;
}
#index{
    width: 100%;
    height:4rem;
    /* overflow-y: hidden; */
}
#rank .demo-loadmore-wrap {
  width: 100%;
  height: 48rem;
  margin-right: 0;
  display: flex;
  flex-direction: column;
  
}
#rank .demo-loadmore-wrap .mu-appbar {
    width: 100%;
  }
#rank .mu-avatar,#rank .mu-avatar img{
    border-radius:0;
}
#rank li{
    height: 7.5rem;
    border-bottom: 1px solid #ccc;
}
#rank .mu-item-action{
    width:60%;
    min-width:0;
}
#rank .mu-item-wrapper,#rank .mu-item.has-avatar{
    height: 100%;
}
#rank .mu-item-title{
    font-size:1.3rem;
}
</style>