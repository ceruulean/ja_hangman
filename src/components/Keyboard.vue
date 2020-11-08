<template>
  <div class="keyboard">
    <div v-for="(endings, start) in SEION" :key="start+'s'"
      class="col">
      <button v-for="(end) in endings" :key="start+end" class="mui-btn mui-btn--primary"
        @click="onKanaClick"
        @focus="onKanaFocus">
      {{end}}
      </button>
    </div>

    <div v-for="(endings, start) in DAKUON" :key="start+'d'"
      class="col">
      <button v-for="(end) in endings" :key="start+end" class="mui-btn mui-btn--primary"
        @click="onKanaClick"
        @focus="onKanaFocus">
      {{end}}
      </button>
    </div>

    <div v-for="(endings, start) in HANDAKUON" :key="start+'h'"
      class="col">
      <button v-for="(end) in endings" :key="start+end" class="mui-btn mui-btn--primary"
        @click="onKanaClick"
        @focus="onKanaFocus">
      {{end}}
      </button>
    </div>

  </div>
</template>

<script>
import {SEION, DAKUON, HANDAKUON, KatakanaToRomaji, HiraganaToRomaji, getMaleSound, getFemaleSound} from '../kana.js';
import {Howl, Howler} from 'howler';
import { mapState } from 'vuex'

export default {
  name: 'Keyboard',
  props: {
    msg: String
  },

  mounted(){

  },

  methods:{
    onKanaClick(e){
      e.stopImmediatePropagation();
      if (!this.$store.state.settings.AUDIO_KEYBOARD_CLICK) return;
      this.loadSound(e.target.innerText).play();
    },
    onKanaFocus(e){
      if (!this.$store.state.settings.AUDIO_KEYBOARD_FOCUS) return;
      this.loadSound(e.target.innerText).play();
    },

    loadSound(char){
        var sound;
      if (!this.sound[char]) {
        let wat = getMaleSound(char);
        sound = new Howl({
          src: getMaleSound(char)
        });
        this.sound[char] = sound;
      } else {
        sound = this.sound[char];
      }
      return sound;
    },
  },

  computed:
    mapState({
    mode: state => state.settings.KANA_KEYBOARD,

    SEION(state){
      return SEION(state.settings.KANA_KEYBOARD);
    },
    DAKUON(state){
      return DAKUON(state.settings.KANA_KEYBOARD);
    },
    HANDAKUON(state){
      return HANDAKUON(state.settings.KANA_KEYBOARD);
    },
  }),

  data() {
    return {
      sound: {}
    }
  }
}
</script>


<style scoped>
.keyboard{
  display:flex;
  flex-flow:row-reverse wrap;
  margin: 0 auto;
}
.col{
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
}

button{
  font-size: 2rem;
  font-weight: initial;
  padding: 3px;
  line-height:1em;
  height:1em;
  width:1em;
  box-sizing: content-box;
  margin: 1px !important;
}
</style>