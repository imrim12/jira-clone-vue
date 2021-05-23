<template>
  <component :is="iconComponent"></component>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import IconDefault from './IconDefault.vue'

export default defineComponent({
  name: 'MyIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconName() {
      return `Icon${this.icon[0].toUpperCase() +
        this.icon.slice(1).toLowerCase()}`
    },
    iconComponent() {
      return () => ({
        // The component to load (should be a Promise)
        component: import(`./${this.iconName}.vue`),
        // A component to use if the load fails
        error: IconDefault,
        // The error component will be displayed if a timeout is
        // provided and exceeded. Default: Infinity.
        timeout: 3000,
      })
    },
  },
})
</script>
