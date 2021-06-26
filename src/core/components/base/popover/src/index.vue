<template>
  <span class="my-popover-wrapper">
    <span class="my-popover-target" ref="handler">
      <slot />
    </span>
    <div class="my-popover-inner" ref="container">
      <slot name="body">
        {{ title }}
      </slot>
    </div>
  </span>
</template>
<script>
// src\core\components\theme\popover\src\index.vue
import { MyTippy } from '@/core/components/plugins'

export default {
  name: 'MyPopover',
  extends: MyTippy,
}
</script>
