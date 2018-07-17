import Vue from "vue";
import Vuex from "vuex";
import {
  list,
  json,
  songe,
  songpage
} from './json'
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    indexData: {
      banner: [],
      list: [],
      list2:[]
    },
    pbonoff: false,
    pbhash: {},
     pbsetoff: false, //是否播放
    val: 0, //拖拽的value
    currentTime: 0,
    el: null
  },
  mutations: {
    createEl(state, el) {
      state.el = el;
    },
    addList(state, data) {
      state.indexData.list.push(...data);
    }, 
     addList2(state, data) {
       state.indexData.list2.push(...data);
     },
    nonelist(state, data) {
        state.indexData.list2=[];
    },
    addCurrentT(state, num) {
      state.currentTime = num;
    },
    addBanner(state, data) {

      state.indexData.banner.push(...data);
    },
    pbon(state, data) {

      state.pbonoff = true,
        state.pbhash = data;
    },
    pbonoff(state , of ) {
      state.pbsetoff = !!of ;
      state.pbonoff = false
    },
    pbxq(state, data) {

      state.pbonoff = false,
        state.pbhash = data;
    },
    cgPbsetoff(state, b) {
      state.pbsetoff = b;
    },
  },
  getters: {
    changeoff: state => {
      return !!state.pbhash;
    }
  },
  actions: {
    addJson({
      commit
    }) {
      if (this.state.indexData.banner.length) return
      commit("addList", json.data);
      commit("addBanner", ['http://p1.music.126.net/kqIwhDVAQfGCjICNhZ7w5Q==/109951163103717284.jpg', 'http://p1.music.126.net/vYT-BrwBydH5MituepkzBg==/109951163104024298.jpg', 'http://p1.music.126.net/ktVoLDRcq9ZaTvRF0MWBwQ==/109951163104647074.jpg'], );
    },
    play({
      commit
    }, hash) {
      axios.get('/api/app/i/getSongInfo.php?cmd=playInfo&hash=' + hash)
        .then((data) => {
          commit('pbon', data.data);
        });
    },
    xq({
      commit
    }, id) {

      axios.get('/api/rank/info/&json=true?rankid=' + id)
        .then((data) => {
          commit('pbxq', data.data);
        });
    }
  }
});