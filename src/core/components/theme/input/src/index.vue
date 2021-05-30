<template>
  <div class="my-input" :class="[isFocusing ? 'my-input-focus' : '']">
    <MyIcon
      v-if="preIcon"
      :icon="preIcon"
      class="my-input-icon my-input-icon-pre"
    />
    <input
      type="text"
      class="my-input-inner"
      :class="{
        'my-input-inner--hasPreIcon': !!preIcon,
        'my-input-inner--hasPostIcon': !!postIcon,
      }"
      @focus="isFocusing = true"
      @blur="isFocusing = false"
    />
    <MyIcon
      v-if="postIcon"
      :icon="postIcon"
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
    preIcon: String,
    postIcon: String,
  },
  data() {
    return {
      isFocusing: false,
    }
  },
})
</script>
