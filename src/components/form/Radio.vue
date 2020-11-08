<template>
  <div class="mdc-form-field">
    <div ref="rad" class="mdc-radio">
      <input class="mdc-radio__native-control" type="radio" id="radio-1" name="radios" :checked="checked"
      :value="value" @change="onChange"
      >
      <div class="mdc-radio__background">
        <div class="mdc-radio__outer-circle"></div>
        <div class="mdc-radio__inner-circle"></div>
      </div>
      <div class="mdc-radio__ripple"></div>
    </div>
    <label for="radio-1">
      <slot></slot>
    </label>
  </div> 
</template>

<script>
import {MDCRadio} from '@material/radio';

export default {
  name: 'Radio',
  props: {
    checked: {
      default: false,
      type: Boolean
    },
    value:{
      default: "Hiragana",
      type: String
    },
    onChange:{
      default: null,
      type: Function
    },
  },

  mounted(){
    new MDCRadio(this.$refs.rad.$el);
  }

}
</script>


<style scoped>

</style>