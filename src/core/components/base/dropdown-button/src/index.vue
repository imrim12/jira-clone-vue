<template>
  <div class="my-dropdown-button-wrapper">
    <button
      @click="$emit('click', $event)"
      v-wave
      class="my-dropdown-button"
      :class="[
        type ? `my-dropdown-button--${type}` : '',
        size ? `my-dropdown-button--${size}` : '',
      ]"
    >
      <slot />
    </button>
    <button
      v-wave
      ref="handler"
      class="my-dropdown-button my-dropdown-button--square my-dropdown-button-target"
      :class="[
        type ? `my-dropdown-button--${type}` : '',
        size ? `my-dropdown-button--${size}` : '',
      ]"
    >
      <MyIcon icon="chevron-down" />
    </button>
    <div class="my-dropdown-button-inner" ref="container">
      <slot name="body"></slot>
    </div>
  </div>
</template>
<script>
// src\core\components\theme\dropdown-button\src\index.vue
import { MyTippy } from '@/core/components/plugins'
import { MyIcon } from '../../icon'

export default {
  extends: MyTippy,
  components: {
    MyIcon,
  },
  name: 'MyDropdownButton',
  props: {
    placement: {
      type: String,
      default: 'bottom',
    },
    trigger: {
      type: String,
      default: 'mouseover',
    },
    // Button props
    type: {
      validator(value) {
        return ['primary', 'light'].includes(value)
      },
    },
    size: {
      validator(value) {
        return ['large', 'medium', 'small', 'mini'].includes(value)
      },
    },
  },
}
</script>
