<template>
  <div class="my-dropdown-button-wrapper">
    <button
      class="my-dropdown-button"
      :class="[
        type ? `my-dropdown-button--${type}` : '',
        size ? `my-dropdown-button--${size}` : '',
      ]"
      v-wave
    >
      <slot />
    </button>
    <button
      ref="handler"
      class="my-dropdown-button my-dropdown-button--square my-dropdown-button-target"
      :class="[
        type ? `my-dropdown-button--${type}` : '',
        size ? `my-dropdown-button--${size}` : '',
      ]"
      v-wave
    >
      <MyIcon icon="chevron-down" />
    </button>
    <div class="my-dropdown-inner" ref="container">
      <slot name="body"></slot>
    </div>
  </div>
</template>
<script>
// src\core\components\theme\dropdown-button\src\index.vue
import { MyTippy } from '@/core/components/plugins'
import { MyIcon } from '../../icon'

export default {
  ...MyTippy,
  components: {
    MyIcon,
  },
  name: 'MyDropdownButton',
  props: {
    ...MyTippy.props,
    placement: {
      type: String,
      default: 'bottom',
    },
    trigger: {
      type: String,
      default: 'click',
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
