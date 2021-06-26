<template>
  <span class="my-tooltip-wrapper">
    <span class="my-tooltip-target" ref="handler">
      <slot />
    </span>
    <div class="my-tooltip-inner" ref="container">
      <slot name="body">
        <small style="padding: 0 5px; font-weight: 600">{{ title }}</small>
      </slot>
    </div>
  </span>
</template>
<script>
// src\core\components\theme\tooltip\src\index.vue
import { MyTippy } from '@/core/components/plugins'

export default {
  name: 'MyTooltip',
  extends: MyTippy,
}
</script>
