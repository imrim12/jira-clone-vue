<template>
  <i :class="`inline-block icon-${icon}`"></i>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'MyIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
})
</script>
