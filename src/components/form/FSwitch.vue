<template>
  <div class="mdc-form-field">
    <div ref="sw" :class="{
      'mdc-switch': true,
      'mui--align-middle': true,
      'mdc-switch--checked' : checked}">
      <div class="mdc-switch__track"></div>
      <div class="mdc-switch__thumb-underlay">
        <div class="mdc-switch__thumb"></div>
        <input @change="onChange" type="checkbox" :id="nameId" class="mdc-switch__native-control" role="switch"
          :aria-checked="checked" :checked="checked">
      </div>
    </div>
    <label :for="nameId">
      <slot></slot>
    </label>
  </div> 
</template>

<script>
import {MDCSwitch} from '@material/switch';

export default {
  name: 'FSwitch',
  props: {
    nameId:{
      default: null,
      type: String
    },
    checked: {
      default: false,
      type: Boolean
    },
    value:{
      default: null,
      type: String
    },
    onChange:{
      default: null,
      type: Function
    },
  },

  mounted(){
    new MDCSwitch(this.$refs.sw.$el);
  }

}
</script>

<style scoped>
label {
  margin: 0 2rem !important;
}
</style>