<template>
    
     <div class="wrapper">
      
    <div id="bg" class="bg" :style="{backgroundImage:'url('+img.replace(/{size}/,'200')+') '}">
          
        <div class="bg-cover"></div>
    </div>
    <div  id="back">
      <mu-button icon slot="left" @click="$router.go(-1)">
                    <mu-icon size="45" value="keyboard_arrow_left"></mu-icon>
      </mu-button>
    </div>
    
    <div class="title">
         
        <div class="music-info">
            <div class="song" id="songName">{{pbhash.songName}}</div>
            <div class="artist" id="artist">{{pbhash.singerName}}</div>
        </div>
    </div>
    <div class="play-board">
        <!-- <img id="needle" class="play-needle pause-needle" src="../image/play_needle.png" draggable="false"> -->

        <div class="disk-bg"></div>
        <div class="disk-cover disk-cover-animation" style="left: -140px;">
            <img class="album" src="http://p1.music.126.net/aRaxwhAQSAMPP-zf8bTibQ==/109951163120065810.jpg" draggable="false">
            <img class="disk-border" src="resource/image/play_disc.png" draggable="false">
        </div>
        <div class="disk-cover disk-cover-animation  anima" style="left: 50%;" ref='anima' >
            <img class="album" :src="img?img.replace(/{size}/,'200'):''" draggable="false">
            <img class="disk-border" src="../image/play_disc.png" draggable="false">
        </div>
        <div class="disk-cover disk-cover-animation" style="left: 554px;">
            <img class="album" src="http://p1.music.126.net/JaYWNg5HQiSYyHF3bfrATQ==/5751545324970007.jpg" draggable="false">
            <img class="disk-border" src="" draggable="false">
        </div>
        <audio id="player" src="null"></audio>
        <div class="footer">
            <div class="process" id="process">
                <span id="currentTime">{{currentT}}</span>

                <div class="process-bar"  @touchend="end">
                    <mu-slider 
                    class="demo-slider" 
                    v-model="value1"
                    @change="move"
                ></mu-slider>
                </div>
                <span id="totalTime">{{listenTimeL}}</span>
            </div>
            <div class="control" id="controls">
                <mu-icon 
                class="m1"
                size="32" 
                value="fast_rewind"
              
            ></mu-icon>
            <mu-icon 
                v-if="num==false"
                size="47" 
                value="play_arrow"
                @click="fn"
                color="#fff"
            ></mu-icon>
                <mu-icon 
                v-else
                size="47" 
                value="pause"
                color="#fff"
                @click="fn"
            ></mu-icon>

             <mu-icon 
                class="m2"
                size="32" 
                value="fast_forward"
              
            ></mu-icon>
            </div>
        </div>
    </div>
    <div class="play-list" id="playList" style="bottom: -388px;">
        <div class="list-title">播放列表（<span id="playListCount">105</span>）</div>
        <ul class="list-content" id="listContent"><li>Don't U<span>   -Era</span></li><li>Compass<span>   -Two Steps From Hell</span></li><li>白昼之夜<span>   -林隆璇</span></li><li>Victorious<span>   -Immediate Music</span></li><li class="active"><div class="song-play"></div>いつも何度でも<span>   -宗次郎</span></li><li>Lost control<span>   -Painless Destiny</span></li><li>A moment of peace<span>   -Painless Destiny</span></li><li>Dream Of A Dream<span>   -Epistra</span></li><li>Léto (Original Mix)<span>   -Timmo Hendriks/Lindequist/Lennart Schroot</span></li><li>Melody<span>   -Capo Productions</span></li><li>Till The End<span>   -Capo Productions</span></li><li>Wondrous<span>   -Thomas Greenberg</span></li><li>Men Of Honor<span>   -Two Steps From Hell</span></li><li>Blue Rose<span>   -BrunuhVille</span></li><li>Memories That You Call<span>   -Odesza</span></li><li>Solstice<span>   -K-391</span></li><li>Aurora<span>   -Capo Productions</span></li><li>Last Reunion<span>   -EpicMusicVn</span></li><li>Nero<span>   -Electus</span></li><li>Blackheart<span>   -Two Steps From Hell</span></li><li>Amazing Grace<span>   -David Nevue</span></li><li>Without You<span>   -Seori</span></li><li>You're My Sunshine<span>   -Seori</span></li><li>Purity<span>   -Painless Destiny</span></li><li>Where Is the Love<span>   -Josh Vietti</span></li><li> After The Sun (Original Mix)<span>   -Pegato</span></li><li>Phrases<span>   -Lindequist/Exlau</span></li><li>Zeemeeuw<span>   -Lindequist</span></li><li>Danza in Re minore<span>   -Roberto Cacciapaglia</span></li><li>Questions<span>   -Sinco</span></li><li>Endless<span>   -Natio/CLAW$</span></li><li>There, where spring<span>   -Nega music project</span></li><li>Visions<span>   -Vief/Maidden</span></li><li>Jesus Said Love Everyone<span>   -Paul Cardall</span></li><li>Oasis (Original Mix)<span>   -Kevin Yue Yu</span></li><li>Money Power Glory<span>   -Piano Tribute Players</span></li><li>Bleu (Original Mix) - remix<span>   -Worakls</span></li><li>Time To Love<span>   -October</span></li><li>Tonight I Celebrate My Love<span>   -Christopher Peacock</span></li><li>To The Lost and Forgotten<span>   -Denean</span></li><li>A journey of the heart<span>   -Karunesh</span></li><li>In Time<span>   -Soulostar</span></li><li>Ocean<span>   -D!avolo</span></li><li>The Spirited Garden<span>   -October</span></li><li>A smile that I would never see again<span>   -Kitti Kuremanee</span></li><li>I Feel My Savior's Love<span>   -Paul Cardall</span></li><li>Through the Arbor<span>   -Kevin Kern</span></li><li>Pearl White Story<span>   -S.E.N.S.</span></li><li>Destiny (Piano Ver.)<span>   -Rainy Day</span></li><li>Baptism<span>   -Paul Cardall</span></li><li>Summer<span>   -久石譲</span></li><li>Love's First Smile<span>   -Kevin Kern</span></li><li>夜的钢琴曲五<span>   -石进</span></li><li>风居住的街道（Piano ver）<span>   -饭碗的彼岸</span></li><li>Somewhere<span>   -July</span></li><li>Vow to Virtue<span>   -Denean</span></li><li>Crossroads<span>   -7AND5</span></li><li>Town of Windmill<span>   -a_hisa</span></li><li>Moonglow<span>   -Bandari</span></li><li>A Walk In The Rain<span>   -Yanni</span></li><li>Sky High<span>   -Thomas Prime</span></li><li>The Ludlows<span>   -James Horner</span></li><li>River (Original Mix)<span>   -Axero</span></li><li>Gentle Heart<span>   -Ryan Farish</span></li><li>Cabana<span>   -CelDro</span></li><li>Don Coi (Instrumental)<span>   -Truong Quynh Anh</span></li><li>Star Sky - Instrumental<span>   -Two Steps From Hell</span></li><li>Rags To Rings<span>   -Mark Petrie/Danny McCarthy</span></li><li>Rise - Epic Music<span>   -John Dreamer</span></li><li>Victory<span>   -Two Steps From Hell</span></li><li>Between Worlds<span>   -Roger Subirana</span></li><li>NEXT TO YOU<span>   -Ken Arai</span></li><li>Legends Of Time<span>   -Capo Productions</span></li><li>Beyond The Memory<span>   -July</span></li><li>Nuvole Bianche<span>   -Ludovico Einaudi</span></li><li>Moon Light<span>   -Capo Productions</span></li><li>Enchantment<span>   -Capo Productions</span></li><li>River Flows In You<span>   -Various Artists</span></li><li>A Little Story<span>   -Valentin</span></li><li>Chiru (Saisei no Uta)<span>   -Robert de Boron</span></li><li>Empire of Angels<span>   -Thomas Bergersen</span></li><li>Righteous Path<span>   -Blazo</span></li><li>Weekend<span>   -Dirk Reichardt</span></li><li>A New Day<span>   -Mark Petrie</span></li><li>El Dorado Dubstep (Remix) - remix<span>   -Two Steps From Hell</span></li><li>The Way<span>   -Florian Bur</span></li><li>Only Wish<span>   -Nicholas Cheung</span></li><li>秋诗<span>   -何真真</span></li><li>In Love<span>   -July</span></li><li>Luv Letter<span>   -DJ Okawari</span></li><li>Moon Flow<span>   -Nomak</span></li><li>Flower Dance<span>   -DJ Okawari</span></li><li>So Beautiful<span>   -甘雨</span></li><li>Another Day<span>   -DJ Siesta</span></li><li>Follow Your Heart<span>   -Karunesh</span></li><li>Happy Place<span>   -Thomas Greenberg</span></li><li>Destiny<span>   -Rainy Day</span></li><li>Tassel<span>   -Cymophane</span></li><li>Far Away<span>   -Yinyues</span></li><li>The Right Path<span>   -Thomas Greenberg</span></li><li>Journey<span>   -Capo Productions</span></li><li>Inspire<span>   -Capo Productions</span></li><li>The&nbsp;truth&nbsp;that&nbsp;you&nbsp;leave<span>   -Pianoboy高至豪</span></li><li>Remember (Original Mix)<span>   -Sensitive/Bogdan Bondarenko</span></li><li>Breath and Life<span>   -Audio Machine</span></li></ul>
    </div>
</div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Songing",
  data() {
    return {
      list: [],
      list2: [],
      img: this.$store.state.pbhash.imgUrl,
      timeIndex: "",
      loading1: false,
      loading2: false,
      pbhash: this.$store.state.pbhash,
      value1: 0,
      timeL: 0,
      ismove: false,
      num: !this.$store.state.pbsetoff,
      len: 0
    };
  },
  created() {
    let id = this.$route.params.id || "666";
    this.$store.dispatch("xq", id);
    this.$store.commit("pbonoff", true);
    this.timeL = this.$store.state.pbhash.timeLength;
  },
  methods: {
    fn() {
      this.num = !this.num;
      if (this.num) {
        this.$store.state.el.play();

        this.$refs.anima.className = "disk-cover disk-cover-animation  anima";
      } else {
        this.$store.state.el.pause();
        this.$refs.anima.className = "disk-cover disk-cover-animation  ";
      }
    },
    // fn2() {
    //   this.len++;
    //   if (this.len >= this.$store.state.indexData.list.length) {
    //     this.len = 0;
    //   }
     
    //   setTimeout(e => {
    //     //  this.pbhash = this.$store.state.indexData.list[this.len].hash;
    //   this.$store.dispatch("play", this.$store.state.indexData.list[this.len].hash);
    //    this.img=this.$store.state.pbhash.imgUrl
    //    console.log(this.$store.state.pbhash);
    //    this.pbhash=this.$store.state.pbhash
    //    },80);
    //   let that = this;
    //   setTimeout(e => {
    //     that.$store.commit("pbonoff", true);
    //   }, 380);
    // },
    end() {
      let { value1, timeL } = this;

      this.$store.state.el.currentTime = value1 / 100 * timeL;

      this.ismove = false;
      // console.log()
    },
    move() {
      this.ismove = true;
    },
    toD(n) {
      return n < 10 ? "0" + n : "" + n;
    },
    //换算总时长的时间
    huansuan(timeL) {
      let { toD } = this;
      let s = Math.floor(timeL / 60);
      let m = Math.floor(timeL % 60);
      return toD(s) + ":" + toD(m);
    }
  },
  computed: {
    //当前滚动的时间
    currentT() {
      let { timeL, value1, ismove } = this;
      let t = this.$store.state.currentTime; //当前的时间
      if (!ismove) {
        this.value1 = t / timeL * 100;
      }
      return this.huansuan(this.$store.state.currentTime);
    },
    //当前歌曲总时间
    listenTimeL() {
      let { huansuan, timeL } = this;
      return huansuan(timeL);
    },
    hashData() {
      let hash = this.$store.state.pbhash;
      return {
        songName: hash.songName,
        imgUrl: hash.imgUrl ? hash.imgUrl.replace(/{size}/, "200") : ""
      };
    }
  }
};
</script>

<style >

.wrapper .mu-button {
  position: absolute;
  background: rgba(253, 253, 253, 0.05);
  top: 1rem;
  left: 0.8rem;
  color: #fff;
  z-index: 808098098;
}
@keyframes rotate-disk {
  100% {
    transform: rotateZ(360deg);
  }
}

@-webkit-keyframes rotate-disk {
  100% {
    -webkit-transform: rotateZ(360deg);
  }
}

#app html,
body {
  margin: 0px;
  height: 100%;
  width: 100%;
}
#app footer {
  overflow: hidden;
}
#app .wrapper {
  /* position: relative; */
  width: 100%;
  /* height: 100%; */
  /* height: 46rem; */
  overflow-y: hidden;
}
#songName {
  color: #fff;
}
#app .bg {
  background: #a0a0a0 center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  -webkit-filter: blur(3px);
  -webkit-filter: blur(20px) drop-shadow();
  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=20, MakeShadow=false);

  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
}

#app .bg-cover {
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
}

#app .title {
  color: #fff;
  position: absolute;
  top: 2rem;
  left: 0px;
  height: 10%;
  width: 100%;
  z-index: 11;
  /* background-color: rgba(253, 253, 253, 0.05); */
}

#app .title .music-info {
  padding: 0 20px;
  margin: 0px auto;
  box-sizing: border-box;
  width: 70%;
  text-align: center;
  overflow: hidden;
}

#app .music-info .song,
.artist {
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 18px;
  font-weight: lighter;
  margin: 8px;
}

#app .music-info .artist {
  font-size: 14px;
  color: #fff;
  margin-top: 4px;
}

#app .play-board {
  position: absolute;
  overflow: hidden;
  top: 10%;
  width: 100%;
  height: 90%;
  color: white;
}

#app .disk-bg {
  width: 282px;
  height: 282px;
  position: absolute;
  left: 50%;
  top: 64px;
  margin: 0px -141px;
  background-color: rgba(251, 251, 251, 0.08);
  border-radius: 141px;
}

#app .disk-cover {
  width: 280px;
  height: 280px;
  position: absolute;
  left: 50%;
  top: 65px;
  margin: 0% -140px;
}

#app .disk-cover-animation {
  animation: rotate-disk 20s infinite normal linear;
  animation-play-state: paused;
  -webkit-animation: rotate-disk 20s infinite normal linear;
  -webkit-animation-play-state: paused;
}

#app .disk-transition {
  transition: left 0.8s ease-in-out;
  -webkit-transition: left 0.8s ease-in-out;
}

#app .disk-cover img {
  display: block;
  width: 100%;
  height: 100%;
}

#app .disk-cover .album {
  width: 68%;
  height: 68%;
  margin: 16%;
}

#app .disk-cover .disk-border {
  position: absolute;
  top: 0px;
}

#app .play-needle {
  position: absolute;
  top: -23px;
  left: 50%;
  margin: 0px -12px;
  z-index: 10;
  width: 100px;
  transform-origin: 20px 20px;
  transition: transform 0.4s;
  -webkit-transform-origin: 20px 20px;
  -webkit-transition: -webkit-transform 0.4s;
}

#app .pause-needle {
  transform: rotateZ(-25deg);
  -webkit-transform: rotateZ(-25deg);
}

#app .resume-needle {
  transform: rotateZ(0deg);
  -webkit-transform: rotateZ(0deg);
}

#app #player {
  display: none;
}

#app .c-btn {
  background-position: center;
  display: inline-block;
  -webkit-filter: brightness(0.9);
}

#app .c-btn:hover {
  -webkit-filter: brightness(1);
}

#app .process {
  width: 350px;
  height: 50px;
  position: absolute;
  bottom: 4rem;
  margin: 0px -175px;
  left: 50%;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}

#app .process .process-bar {
  position: absolute;
  left: 36px;
  width: 250px;
  margin-left: 15px;
  margin-top: -2px;
  /* background-color: #615d5c; */
}

#app .process-bar .rdy {
  background-color: #b1adac;
  height: 2px;
}
.anima {
  animation-play-state: running !important;
}
#app .process-bar .cur {
  background-color: #fb0d0d;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
}

#app .cur .process-btn {
  cursor: pointer;
  /* background-image: url(resource/images/process_btn.png); */
  background-size: cover;
  position: absolute;
  top: -9px;
  right: -13px;
  width: 22px;
  height: 22px;
  margin-left: -11px;
}

#app .process > span:first-child {
  position: absolute;
  left: 0px;
}

#app .process > span:last-child {
  position: absolute;
  right: 0px;
}

#app .control {
  position: absolute;
  text-align: center;
  width: 350px;
  bottom: 3rem;
  left: 50%;
  margin: 0px -175px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
}

#app .control .c-btn {
  cursor: pointer;
  background-position: center;
  background-size: contain;
  width: 50px;
  height: 50px;
}
#app .control .mu-icon {
  position: absolute;
  left: 41%;
  display: inline-block;
  width: 4rem !important;
  height: 4rem !important;

  line-height: 3.8rem;
  border-radius: 50%;
  border: 2px solid #fff;
}
#app .control .m1 {
  left: 16%;
  width: 3rem !important;
  height: 3rem !important;
  line-height: 2.7rem;
}
#app .control .m2 {
  left: 70%;
  width: 3rem !important;
  height: 3rem !important;
  line-height: 2.7rem;
}
#app .control .c-btn.pre {
  /* background-image: url(resource/images/play_btn_prev.png); */
}

#app .control .c-btn.play,
.c-btn.pause {
  width: 70px;
  height: 70px;
}

#app .control .c-btn.play {
  /* background-image: url(resource/images/play_rdi_btn_play.png); */
}

#app .control .c-btn.pause {
  /* background-image: url(resource/images/play_rdi_btn_pause.png); */
}

#app .control .c-btn.next {
  /* background-image: url(resource/images/play_btn_next.png); */
}

#app .control .c-btn.list-btn,
.control .c-btn.loop-btn {
  width: 32px;
  height: 32px;
}

#app .control .c-btn.list-btn {
  /* background-image: url(resource/images/play_icn_src.png); */
}

#app .control .c-btn.loop-btn {
  position: relative;
  /* background-image: url(resource/images/play_icn_loop.png); */
}

#app .control .c-btn.loop-btn.active:after {
  content: "1";
  position: absolute;
  top: 14px;
  font-size: 12px;
  left: 14px;
}

#app .play-list {
  background: #fff;
  position: fixed;
  width: 100%;
  height: 60%;
  max-height: 390px;
  margin: 0 auto;
  bottom: -60%;
  overflow: hidden;
}

#app .play-list .list-title {
  position: relative;
  background: inherit;
  text-align: center;
  border-bottom: #ccc solid 1px;
  height: 20px;
  margin: 0px auto;
  font-size: 20px;
  padding: 15px;
}

#app .play-list ul.list-content {
  margin: -20px 0 0 0;
  height: 100%;
  width: 102%;
  padding: 20px 4% 0 0;
  overflow-x: hidden;
  overflow-y: scroll;
}

#app .play-list ul.list-content > li {
  height: 16px;
  border-bottom: #e2dfdf solid 1px;
  font-size: 16px;
  padding: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#app .play-list ul.list-content > li > span {
  font-size: 14px;
  color: #a0a0a0;
  overflow: hidden;
}

#app .play-list li.active,
li.active > span {
  color: #cf3d3a !important;
}

#app .song-play {
  display: inline-block;
  width: 17px;
  height: 15px;
  margin-right: 5px;
  background-size: cover;
  /* background-image: url("resource/images/song_play_icon.png"); */
}

@media screen and (max-height: 650px) {
  .process {
    width: 320px;
    height: 20px;
    position: absolute;
    margin: 0px -160px;
  }

  .process .process-bar {
    left: 40px;
    width: 240px;
  }

  .disk-bg {
    width: 252px;
    height: 252px;
    position: absolute;
    left: 50%;
    top: 50px;
    margin: 0px -126px;
    background-color: rgba(251, 251, 251, 0.08);
    border-radius: 126px;
  }

  .disk-cover {
    width: 250px;
    height: 250px;
    left: 50%;
    top: 52px;
    margin: 0px -125px;
  }

  .play-needle {
    top: -20px;
    margin: 0px -12px;
    width: 85px;
    transform-origin: 16px 16px;
  }

  .control .c-btn {
    width: 45px;
    height: 45px;
  }

  .control .c-btn.play,
  .c-btn.pause {
    width: 62px;
    height: 62px;
  }

  .control .c-btn.list-btn,
  .control .c-btn.loop-btn {
    width: 36px;
    height: 36px;
  }

  .cur .process-btn {
    width: 20px;
    height: 20px;
  }
}
</style>