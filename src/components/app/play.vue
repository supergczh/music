<template>
    <div id="pb" :style="{bottom:onOff,transition:''}">
      
         <div class="ft-left">
           <router-link to="/songing">
			<img 
               :src="pbhash.imgUrl?pbhash.imgUrl.replace(/{size}/,'200'):''" 
                onerror="this.onerror=null;this.src='http://m.kugou.com/v3/static/images/index/logo_kugou.png';" 
                alt="" 
                class="js-ftImg" 
                id="ftImg" 
              >
               </router-link>
		</div>
        
       <div class="ft-center">
            <p class="ft-desc js-ftSongName" id="ftSongName">{{pbhash.songName}}</p>
            <p class="ft-sub-desc js-ftUserName" id="ftUserName">{{pbhash.singerName}}</p>
        </div>
        <div class="au">
            <mu-icon 
                v-if="num==false"
                size="36" 
                value="play_arrow"
                @click="fn"
            ></mu-icon>
             <mu-icon 
                v-else
                size="36" 
                value="pause"
                @click="fn"
            ></mu-icon>
            {{listOff}}
             <audio  ref="au" 
                autoplay 
                :src="pbhash.url"
                @timeupdate="tup"
                />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { Vue } from 'vue'
    export default {
        name:'Play',
        data(){
        return {
            num:true,
        }
        },
        mounted(){
        this.$store.commit('createEl',this.$refs.au)
    },
    methods:{
        tup(ev){
            this.$store.commit('addCurrentT',ev.target.currentTime);
        },
        fn(){
             
            if(!this.num){
                this.$refs.au.play();
            }else{
                this.$refs.au.pause();
            }
            this.$store.commit('cgPbsetoff',this.num);
            this.num = !this.num;
        }
    },
    computed:{
        ...mapState(['pbhash']),
        onOff(){
            let {pbonoff,pbsetoff} = this.$store.state;
            if(!pbonoff && !pbsetoff){
                setTimeout(()=>{
                    this.$refs.au.pause();    
                });
            }
            return pbonoff?0:'-4.2143rem';
        },
        listOff(){
           this.num = this.$store.getters.changeoff;
        }
    }
    }
    
</script>

<style >
.au{
    float: right;
    width:26%;
    height: 100%;;
}
#pb{
    display: block !important;
    width: 100%;
    height: 4.2143rem;
    position: fixed;
    left: 0;
    bottom: -4.2143rem;
    background: rgba(0,0,0,.9);
    color: #fff;
    font-size: 0;
    z-index: 999;
    transition: .5s;
   
}
 #pb .mu-icon{
        margin-top: .8rem;
        border-radius: 50%;
        border: 2px solid #fff;
        width: 40px !important;
        height: 40px !important;
    }
  
.ft-left{
    width: 3.75rem;
    height: 3.75rem;
    margin: .2143rem .535rem .2143rem .2143rem;
    float: left;
    
}
.ft-left img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
.ft-center {
    width: 36%;
    float: left;
}
.ft-desc {
    width: 100%;
    line-height: 1.7;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .8571rem;
    color: #fff;
}
.ft-sub-desc {
    line-height: .1rem;
    font-size: .7143rem;
    color: #888;
}
</style>