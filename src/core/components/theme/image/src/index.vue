<template>
  <div
    class="my-image"
    :class="[
      size ? `my-image--${size}` : '',
      square ? 'my-image--square' : '',
      round ? 'my-image--square rounded-full' : '',
    ]"
    :style="{
      width: height ? `${width}px` : false,
      height: height ? `${height}px` : false,
    }"
    ref="myAvatarRef"
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
    size: {
      validator(value) {
        return ['large', 'medium', 'small', 'mini'].includes(value)
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
    square: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
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

<style lang="scss">
.my-image {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  // border-radius: 9999px;
  img {
    width: 100%;
    height: 100%;
  }
  &-error {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: var(--color-gray-100);
    color: var(--color-danger);
  }
  &--large {
  }
  &--medium {
  }
  &--small {
  }
  &--mini {
  }
  &--square {
  }
}
</style>
