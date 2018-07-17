<template>
    <div id="search">
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
        <!-- <mu-paper :z-depth="1" class="demo-loadmore-wrap">
            <mu-list>
                <mu-list-item 
                    avatar 
                    button 
                    v-for="val in list"
                >
                <mu-list-item-title>{{val.keyword}}</mu-list-item-title>
                </mu-list-item>
                
            </mu-list>
        </mu-paper> -->
    </div>
</template>

<script>
import jsonp from "fetch-jsonp";
export default {
  name: "Search",
  data() {
    return {
      list: [],
      val: ""
    };
  },
  created() {
    this.$store.commit("pbonoff");
    jsonp(
      "http://mobilecdn.kugou.com/api/v3/search/hot?format=jsonp&plat=0&count=30",
      {
        jsonpCallback: "callback"
      }
    )
      .then(e => e.json())
      .then(data => {
        this.list = data.data.info;
        console.log(data);
      });
  }
};
</script>

<style lang="less">
#search {
  overflow-x: hidden;
}

#search .mu-appbar {
  width: 100%;
  height: 40px;
  background: #f6a416 !important;
  color: #ffffff;
  top: 0;
  left: 0;
  z-index: 2000;
}
#search .mu-appbar-title {
  color: #fff;
  font-size: 16px;
  text-align: center;
}
.mu-elevation-4 {
  box-shadow: 0 2px 4px -1px rgba(240, 239, 239, 0.952),
    0 4px 5px 0 rgba(240, 238, 238, 0.87),
    0 1px 10px 0 rgba(248, 246, 246, 0.973) !important;
}
.s {
  width: 88%;
  height: 5rem;
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
#search .search {
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
#search .sbtn {
  width: 4.25% !important;
  height: 1.8rem;
  line-height: 2.0714rem;
  border: none;
  border-radius: 5px;
  text-align: center;
  float: left;
  margin-left: 0.4rem;
  
}
#search li {
  border-bottom: 1px solid #999;
}
#search .demo-loadmore-wrap {
  width: 100%;
  max-width: 360px;
  height: 420px;
  display: flex;
  flex-direction: column;
  .mu-appbar {
    width: 100%;
  }
}
.mu-raised-button{
    
min-width: 4rem !important;
}
</style>