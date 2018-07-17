<template>
<router-link to="/search">
    <div class="search">
         
        <a class="search-route" href="/music/search">
    <div class="search-inner"
    ><mu-icon value="search" size='21'
    ></mu-icon></svg><div>输入歌曲名</div></div>
    </a>
     
    </div>
    </router-link >
</template>

<script>
    export default {
        name:'Searchs'
    }
</script>
  
<style scoped>
.search{
    background: #fff;
     position: fixed;
         display: flex;
         width: 100%;
    align-items: center;
    justify-content: center;
   height: 40px;
   z-index: 909090;
}
 .search-route {
    display: block;
    position: fixed;
    width: 10rem;
    height: 30px;
    margin: 0 !important;
    
    border-radius: 30px;
    border: 1px solid #ededed;
    color: #cccccc;
    /* margin-bottom: 20px; */
}
.search-route .search-inner {
    display: flex;
    height: 30px;
    line-height: 30px;
    justify-content: center;
    align-items: center;
}
svg:not(:root) {
    overflow: hidden;
}
.am-icon-sm {
    width: 21px;
    height: 21px;
}
.am-icon {
    fill: currentColor;
    background-size: cover;
    width: 22px;
    height: 22px;
}
svg:not(:root) {
    overflow: hidden;
}
 .search-route .search-inner div {
    margin-left: 10px;
}
</style>