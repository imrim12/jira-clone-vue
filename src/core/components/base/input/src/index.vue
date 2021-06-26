<template>
  <div
    class="my-input"
    :class="[isFocusing ? 'my-input-focus' : '']"
    :style="{
      width: isFocusing
        ? `${widthFocus || width}px !important`
        : `${width}px !important`,
    }"
  >
    <MyIcon
      v-if="prefix"
      :icon="prefix"
      class="my-input-icon my-input-icon-pre"
    />
    <input
      class="my-input-inner"
      :class="{
        'my-input-inner--prefix': !!prefix,
        'my-input-inner--postfix': !!postfix,
      }"
      :type="type"
      :pattern="validate.pattern"
      @focus="isFocusing = true"
      @blur="isFocusing = false"
      @input="$emit('input', $event.target.value)"
      @invalid="$event.target.setCustomValidity(validate.message)"
    />
    <MyIcon
      v-if="postfix"
      :icon="postfix"
      class="my-input-icon my-input-icon-post"
    />
  </div>
</template>
<script>
// src\core\components\theme\input\src\index.vue
import { defineComponent } from '@vue/composition-api'
import { MyIcon } from '../../icon'

export default defineComponent({
  name: 'MyInput',
  components: { MyIcon },
  props: {
    prefix: String,
    postfix: String,
    width: {
      type: Number,
      default: 180,
    },
    widthFocus: {
      type: Number,
    },
    type: {
      type: String,
      default: 'text',
    },
    validate: {
      type: Object,
      validator(value) {
        if (
          !Object.keys(value).every(
            (key) => key === 'pattern' || key === 'message'
          )
        ) {
          console.warn(
            "Invalid prop: validate can only contain 'pattern' or 'message' as key"
          )
          return false
        } else {
          return true
        }
      },
    },
  },
  data() {
    return {
      isFocusing: false,
    }
  },
})
</script>
