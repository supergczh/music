<template>

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
</template>

<script>
export default {
  name: "List",
    created(){
        this.$store.commit('pbonoff');
        
    },
    mounted() {
        this.$store.dispatch('addJson');
    },
  data() {
    return {
      list: this.$store.state.indexData.list,
      timeIndex: ""
    };
  },
  methods: {
    selectTimer(index, val) {
      this.$store.dispatch("play", val.hash);
       this.$store.commit("pbon");
      this.timeIndex = index;
      setTimeout(() => {
        this.$refs.song.style.marginBottom='66px'
      }, );
         
    }
  }
};
</script>

<style >
#index{
    width: 100%;
    height:6rem;
    /* overflow-y: hidden; */
}
.demo-loadmore-wrap {
  width: 100%;
  max-width: 360px;
  height: 420px;
  display: flex;
  flex-direction: column;
}
.demo-loadmore-wrap .mu-appbar {
  width: 100%;
}
</style>