import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    settings:{
      AUDIO_KEYBOARD_CLICK:false,
      AUDIO_KEYBOARD_FOCUS:false,
      KANA_KEYBOARD: "Hiragana"
    },
    game:{
      phrase:{

      }
    }
  },
  mutations: {
    settings(state, newValue){
      Object.assign(this.state.settings, newValue);
    }
  },
  actions: {
  },
  modules: {
  }
})
