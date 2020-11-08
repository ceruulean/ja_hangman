<template>
  <div id="app">

    <Settings/>
    <div class="mui-container">
      <Keyboard/>
    </div>


  </div>
</template>

<script>
import '../node_modules/muicss/dist/js/mui.min.js';
import Keyboard from './components/Keyboard.vue'
import Settings from './components/Settings.vue'

export default {
  name: 'App',
  components: {
    Keyboard,
    Settings,
  },

  mounted(){
   // console.log(this.$store.state.settings)
  },

  methods: {

  }
}
</script>

<style>
@import '../node_modules/muicss/dist/css/mui.min.css';
@import "../node_modules/@material/form-field/dist/mdc.form-field.min.css";
@import "../node_modules/@material/radio/dist/mdc.radio.min.css";
@import "../node_modules/@material/switch/dist/mdc.switch.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
