<template functional>
  <button
    v-on="listeners"
    class="my-button my-button-icon"
    :class="[
      props.type && `my-button--${props.type}`,
      props.size && `my-button--${props.size}`,
      props.square && 'my-button--square',
      props.round && 'my-button--square rounded-full',
    ]"
    v-wave
  >
    <MyIcon
      v-if="!props.postfix"
      :icon="props.icon"
      :style="{
        marginRight: `${slots().default ? props.gap * 0.25 : 0}rem`,
      }"
    />
    <slot />
    <MyIcon
      v-if="props.postfix"
      :icon="props.icon"
      :style="{
        marginLeft: `${slots.default ? props.gap * 0.25 : 0}rem`,
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
        return [
          'primary',
          'light',
          'danger',
          'success',
          'info',
          'warning',
          'gray',
          'dark',
        ].includes(value)
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
    square: {
      type: Boolean,
      default: false,
    },
    round: {
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
