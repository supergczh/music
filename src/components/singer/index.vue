<template>
    <div id="singer">
        <div id="index"></div>
         <!-- <mu-paper :z-depth="1" class="demo-list-wrap"> -->
        <div class="singer">
            <mu-list 
                textline="three-line"
                v-for="val in filterData" 
            >
                <mu-list-item 
                    button 
                    class="s"
                    v-for="key in val"
                >
                    <mu-list-item-content >
                        <mu-list-item-title>
                           {{key.classname}}
                        </mu-list-item-title>
                        <mu-list-item-action>
                            <mu-icon value="chevron_right" size="30"
                            color='#e5e5e5'
                            ></mu-icon>
                        </mu-list-item-action>
                    </mu-list-item-content>
                   
                </mu-list-item>
            </mu-list>
        </div>
        <!-- </mu-paper> -->
    </div>
</template>

<script>
import {songe as data} from '../../json.js';
export default {
    name:"Singer",
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
        let d = await data.list;
        this.list.push(...d);
    },
    computed:{
        filterData(){
            let obj = {};
            this.list.forEach(e=>{
                let name = e.classname.substr(0,2);
                if(!obj[name]){
                    obj[name] = [];
                }
                obj[name].push(e);
            });
            return obj;
        }
    }
}


</script>

<style lang="less">
#index{
    width: 100%;
    height:6.5rem;
    /* overflow-y: hidden; */
}
#singer .mu-list{
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 1rem .7143rem 1.0714rem;
    width:95%;
    padding:0;
    
        display: flex;
         flex-direction:column !important;
       
}
.s{
        border-bottom:1px solid #ccc;
        display: block;
        width:100%;
         display: flex;
         align-items: center;
    }
#singer .mu-list li:nth-last-child(1){
    border:none;
}
.mu-list>li{
    display: block;
    margin: 0 auto;
}
#singer{
    height:51rem;
    overflow: auto;
}
.singer {
  width: 100%;
}
#singer .mu-item-title{
    width:60%;
    float: left;
    margin-top:.2rem;
}
#singer .mu-item-action{
    width:40%;
    float: right;
}
#singer .mu-list-three-line .mu-item{
    height:3rem;
}
</style>