<template>
  <span class="my-tippy-wrapper">
    <span class="my-tippy-target" ref="handler">
      <slot />
    </span>
    <div class="my-tippy-inner" ref="container">
      <slot name="body">
        {{ title }}
      </slot>
    </div>
  </span>
</template>
<script>
// src\core\components\plugins\MyTippy\src\index.vue
import { defineComponent } from '@vue/composition-api'
import tippy, { animateFill } from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/dist/backdrop.css'
import 'tippy.js/themes/light.css'
import 'tippy.js/animations/scale.css'
import 'tippy.js/animations/shift-away.css'

export default defineComponent({
  name: 'MyTippy',
  emits: ['hide', 'mount', 'destroy'],
  props: {
    // See all props in tippy.js docs: https://atomiks.github.io/tippyjs/v6/all-props
    options: {
      type: Object,
      default() {
        return {}
      },
    },
    placement: {
      type: String,
      default: 'top',
    },
    theme: {
      type: String,
      default: 'light',
    },
    trigger: {
      type: String,
      default: 'mouseenter',
    },
    offsetX: {
      type: Number,
      default: 0,
    },
    offsetY: {
      type: Number,
      default: 10,
    },
    title: String,
  },
  data() {
    return {
      instance: null,
    }
  },
  computed: {
    handler() {
      return this.$refs.handler
    },
    container() {
      return this.$refs.container
    },
  },
  watch: {
    options: {
      deep: true,
      handler() {
        this.resetTippy()
      },
    },
    placement() {
      this.resetTippy()
    },
    trigger() {
      this.resetTippy()
    },
  },
  methods: {
    onHide(instance) {
      this.$emit('hide', instance)
    },
    onMount(instance) {
      this.$emit('mount', instance)
    },
    onDestroy(instance) {
      this.$emit('destroy', instance)
    },
    initiateTippy() {
      this.instance = tippy(this.$refs.handler.childNodes[0], {
        ...this.options,
        plugins: [animateFill],
        maxWidth: 'none',
        allowHTML: true,
        content: this.container,
        placement: this.placement,
        theme: this.theme,
        trigger: this.trigger,
        offset: [this.offsetX, this.offsetY],
        animation: 'scale',
        // See docs: https://atomiks.github.io/tippyjs/v6/all-props/#interactive
        interactive: true,
        // hideOnClick: false,
        interactiveBorder: 15,
        onHide: this.onHide,
        onMount: this.onMount,
        onDestroy: this.onDestroy,
        appendTo: document.body,
      })
    },
    resetTippy() {
      if (this.instance) {
        this.instance.destroy()
        this.initiateTippy()
      }
    },
  },
  mounted() {
    this.initiateTippy()
  },
})
</script>

<style lang="scss">
.tippy-box {
}
.tippy-backdrop {
}
.tippy-arrow {
}
.tippy-content {
  padding: 0;
}
</style>
