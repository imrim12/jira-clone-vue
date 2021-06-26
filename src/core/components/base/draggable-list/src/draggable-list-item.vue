<template>
  <div class="my-draggable-list-item">
    <slot>
      {{ title }}
    </slot>
  </div>
</template>
<script>
// src\core\components\theme\draggable-list\src\draggable-list-item.vue
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'MyDraggableListItem',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    //
  },
})
</script>
