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
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'
import 'tippy.js/animations/scale.css'

export default defineComponent({
  name: 'MyTippy',
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
    title: String,
  },
  computed: {
    handler() {
      return this.$refs.handler
    },
    container() {
      return this.$refs.container
    },
  },
  methods: {
    initiateTippy() {
      tippy(this.handler, {
        ...this.options,
        allowHTML: true,
        content: this.container,
        placement: this.placement,
        theme: this.theme,
        trigger: this.trigger,
        offset: [0, 20],
        animation: 'scale',
      })
    },
  },
  mounted() {
    this.initiateTippy()
  },
})
</script>
