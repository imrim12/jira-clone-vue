<template>
  <button class="my-button">
    <slot />
  </button>
</template>
<script>
// src\core\components\theme\button\src\index.vue
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'MyButton',
  props: {},
  setup() {
    //
  },
})
</script>

<style lang="scss">
.my-button {
  //
}
</style>
