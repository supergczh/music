<template>
    <div id="plist">
        <div id="index"></div>
        <mu-paper :z-depth="1" class="">
        <mu-list>
            <router-link 
                :to="{'path':`/plist/list/${key}`}"
                v-for="val,key in list"
            >
            <mu-list-item
                avatar 
                button 
                :ripple="true"
                
            >
                <mu-list-item-action>
                    <mu-avatar size="80">
                        <img :src="val.imgurl.replace(/{size}/,'')">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-title>{{val.specialname}}</mu-list-item-title>
                
                <div class="headset">
                    <mu-icon 
                        value="headset"
                        size="20"
                    ></mu-icon>
                    <span>{{val.playcount}}</span>
                </div>
            </mu-list-item>
            </router-link>
        </mu-list>
        </mu-paper>
    </div>
</template>
<script>
import {songpage as data} from '../../json.js';
    export default {
        name:'Plist', 
        data(){
            return {
                list:[]
            }
        },
         created(){
             console.log(2);
             
            this.$store.commit('pbonoff');
        },
       async mounted(){
            //await async
            let d = await data.plist.list.info;
            this.list.push(...d);
        }
    }
</script>

<style lang="less">
#plist .headset{
    position: absolute;
    top: 3.9rem;
    left: 7.5rem;
    width: 30%;
   
   
}
#plist .headset span{
        float: left;
        margin-left:1rem;
        color:#9b9b9b;
        font-size:1rem;
    }
#plist .headset     i{
        float: left;
        color:#9b9b9b;
    }
#plist .demo-loadmore-wrap {
  width: 100%;
  height: 42rem;
  display: flex;
  flex-direction: column;
 
}
 .mu-appbar {
    width: 100%;
  }
#plist .mu-avatar,#plist .mu-avatar img{
    border-radius:0;
}
#plist li{
    height: 6.5rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
}
#plist .mu-item-action{
    width:50%;
    min-width:0;
}
#plist .mu-item-wrapper,#plist .mu-item.has-avatar{
    height: 100%;
    width: 100%;
}
#plist .mu-item-title{
    
        font-size: 1.2rem;
         margin-bottom: 1.4rem;
     margin-left: -1.4rem
}
</style>