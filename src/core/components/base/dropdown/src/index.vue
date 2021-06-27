<template>
  <span class="my-dropdown-wrapper">
    <span class="my-dropdown-target" ref="handler">
      <slot />
    </span>
    <div class="my-dropdown-inner" ref="container">
      <slot name="body"></slot>
    </div>
  </span>
</template>
<script>
// src\core\components\theme\dropdown\src\index.vue
import { MyTippy } from '@/core/components/plugins'

export default {
  extends: MyTippy,
  name: 'MyDropdown',
  props: {
    placement: {
      type: String,
      default: 'bottom',
    },
    trigger: {
      type: String,
      default: 'mouseover',
    },
  },
}
</script>
