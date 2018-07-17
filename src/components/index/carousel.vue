<template>
  
        <mu-carousel :cycle=false>
        <mu-carousel-item  v-for="(val,key) in list">
            <img :src="val">
        </mu-carousel-item>
    </mu-carousel>
    
</template>

<script>
    export default {
        name:'Carousel',
        data(){
          return {
              list:this.$store.state.indexData.banner
            
          } 

        }
    }
</script>

<style >
#app .mu-carousel{
    box-sizing: border-box;
    margin: 5% 3% 0;
    width: 94%;
}
.mu-carousel,.mu-carousel img{
    height:10rem !important;
}
</style>