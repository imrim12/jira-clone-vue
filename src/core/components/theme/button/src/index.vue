<template functional>
  <button
    class="my-button"
    :class="[
      props.type ? `my-button--${props.type}` : '',
      props.size ? `my-button--${props.size}` : '',
    ]"
  >
    <slot />
  </button>
</template>
<script>
// src\core\components\theme\button\src\index.vue
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'MyButton',
  props: {
    type: {
      validator(value) {
        return ['primary', 'light'].includes(value)
      },
    },
    size: {
      validator(value) {
        return ['large', 'normal', 'small', 'mini'].includes(value)
      },
    },
  },
})
</script>
