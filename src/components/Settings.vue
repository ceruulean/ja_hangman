<template>
  <div class="settings mui-panel">
    <div class="mui-row">
      <div class="mui-col-md-12">
        <h1>Settings</h1>
        <div class="mui-divider"></div>
      </div>
    </div>
    <div class="mui-row">
      <div class="mui-col-md-6">
        <h2>Alphabet Keyboard Audio</h2>
        <p>Pronounce syllables on...</p>
          <ul>
          <li>
            <FSwitch nameId="sw1" :checked="AK_CLICK" :onChange="onChange('CLICK')">Click</FSwitch>
          </li>
          <li>
            <FSwitch nameId="sw2" :checked="AK_FOCUS" :onChange="onChange('FOCUS')">Focus</FSwitch>
          </li>
        </ul>
      </div>
      <div class="mui-col-md-6">
        <h2>Kana Display</h2>
          <Radio :checked="K_KANA == 'Hiragana'" value="Hiragana"
            :onChange="onSelect">Hiragana</Radio>
          <br/>
          <Radio :checked="K_KANA == 'Katakana'" value="Katakana"
            :onChange="onSelect">Katakana</Radio> 
      </div>
    </div>
  </div>
</template>

<script>
import {MDCFormField} from '@material/form-field';
import {MDCRadio} from '@material/radio';

import FSwitch from './form/FSwitch.vue';
import Radio from './form/Radio.vue';

import { mapState } from 'vuex'

export default {
  name: 'Settings',
  components:{Radio, FSwitch},
  props: {
    msg: String
  },

  mounted(){

    // const formField = new MDCFormField(document.querySelectorAll('.mdc-form-field'));
    // formField.forEach(i=>{
    //   new MDCFormField(i).input = radio[i];
    // })
  },
  computed: mapState({
    // arrow functions can make the code very succinct!
    settings: state => state.settings,
    
    AK_CLICK: state => state.settings.AUDIO_KEYBOARD_CLICK,
    AK_FOCUS: state => state.settings.AUDIO_KEYBOARD_FOCUS,
    K_KANA: state => state.settings.KANA_KEYBOARD
    // // passing the string value 'count' is same as `state => state.count`
    // countAlias: 'count',

    // // to access local state with `this`, a normal function must be used
    // countPlusLocalState (state) {
    //   return state.count + this.localCount
    // }
  }),
  methods:{
    onChange(propName){
      let t = this;
      return function(e){
        let a = {}
        a[`AUDIO_KEYBOARD_${propName}`] = e.target.checked;
        t.$store.commit('settings', a);
      }
    },
    onSelect(e){
      let a = {}
      a[`KANA_KEYBOARD`] = e.target.value;
      this.$store.commit('settings', a);
    }
  },
  data(){
    return {
      KKANA: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mui-row{
  text-align: justify;
}

ul{
  padding-left: 0;
  list-style: none;
  text-align: justify;
}

li{
  margin:1em 2px;
}
</style>
