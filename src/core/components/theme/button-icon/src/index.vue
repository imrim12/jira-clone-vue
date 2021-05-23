<template functional>
  <button
    class="my-button my-button-icon"
    :class="[
      props.type ? `my-button--${props.type}` : '',
      props.size ? `my-button--${props.size}` : '',
    ]"
    v-wave
  >
    <MyIcon
      v-if="!props.postfix"
      :icon="props.icon"
      :style="{
        marginRight: `${props.gap * 0.25}rem`,
      }"
    />
    <slot />
    <MyIcon
      v-if="props.postfix"
      :icon="props.icon"
      :style="{
        marginLeft: `${props.gap * 0.25}rem`,
      }"
    />
  </button>
</template>
<script>
// src\core\components\theme\button-icon\src\index.vue
import { defineComponent } from '@vue/composition-api'
import { MyIcon } from '../../icon'

export default defineComponent({
  name: 'MyButtonIcon',
  components: { MyIcon },
  props: {
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
    gap: {
      type: [String, Number],
      default: 2,
    },
    postfix: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: true,
    },
  },
})
</script>
