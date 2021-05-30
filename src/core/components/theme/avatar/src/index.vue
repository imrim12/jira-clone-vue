<template>
  <div
    class="my-avatar"
    :class="[size ? `my-avatar--${size}` : '', round ? 'rounded-full' : '']"
    :style="
      isNumber || isShortName
        ? {
            backgroundColor: 'var(--color-primary-800)',
            color: 'white',
            fontWeight: 'bold',
          }
        : {}
    "
  >
    <img
      v-if="!hasError && isUrl"
      :src="src"
      :title="alt"
      :alt="alt"
      @error="handleError"
    />
    <!-- eslint-disable-next-line vue/no-parsing-error -->
    <div v-else-if="isNumber"> {{ src <= 99 ? src : 99 }}+ </div>
    <div v-else-if="isShortName">
      {{ src }}
    </div>
    <template v-else>
      <slot name="error">
        <div class="my-avatar-error">
          <MyIcon :icon="src" />
        </div>
      </slot>
    </template>
  </div>
</template>
<script>
// src\core\components\theme\avatar\src\index.vue
import { defineComponent } from '@vue/composition-api'
import { MyIcon } from '../../icon'

export default defineComponent({
  name: 'MyAvatar',
  components: { MyIcon },
  props: {
    src: {
      type: [String, Number],
      required: true,
    },
    alt: {
      type: String,
    },
    size: {
      validator(value) {
        return ['large', 'medium', 'small', 'mini'].includes(value)
      },
    },
    round: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      hasError: false,
    }
  },
  watch: {
    src() {
      this.hasError = false
    },
  },
  computed: {
    isUrl() {
      return typeof this.src === 'string' && this.src?.includes('http')
    },
    isNumber() {
      return !isNaN(this.src)
    },
    isShortName() {
      return typeof this.src === 'string' && this.src?.length === 2
    },
  },
  methods: {
    handleError() {
      this.hasError = true
    },
  },
})
</script>
