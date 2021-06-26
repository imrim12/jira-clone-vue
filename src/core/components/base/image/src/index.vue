<template>
  <div
    class="my-image"
    :style="{
      width: height ? `${width}px` : false,
      height: height ? `${height}px` : false,
    }"
  >
    <img
      v-if="!hasError"
      :src="src"
      :alt="alt"
      :style="{
        objectFit: fit,
      }"
      @error="handleError"
    />
    <template v-else>
      <slot name="error">
        <div class="my-image-error">
          <MyIcon icon="default" />
        </div>
      </slot>
    </template>
  </div>
</template>
<script>
// src\core\components\theme\image\src\index.vue
import { defineComponent } from '@vue/composition-api'
import { MyIcon } from '../../icon'

export default defineComponent({
  name: 'MyImage',
  components: { MyIcon },
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
    },
    width: {
      type: [Number, String],
      validator(value) {
        return !isNaN(value)
      },
    },
    height: {
      type: [Number, String],
      validator(value) {
        return !isNaN(value)
      },
    },
    fit: {
      validator(value) {
        return ['cover', 'contain', 'fill', 'scale-down', 'none'].includes(
          value
        )
      },
      default: 'cover',
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
  methods: {
    handleError() {
      this.hasError = true
    },
  },
})
</script>
