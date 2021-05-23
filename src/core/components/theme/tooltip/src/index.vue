<template>
  <span class="my-tooltip-wrapper">
    <span class="my-tooltip-target" ref="handler">
      <slot />
    </span>
    <div class="my-tooltip-inner" ref="container">
      <slot name="body">
        {{ title }}
      </slot>
    </div>
  </span>
</template>
<script>
// src\core\components\theme\tooltip\src\index.vue
import { MyTippy } from '@/core/components/plugins'

export default {
  ...MyTippy,
  name: 'MyTooltip',
}
</script>
