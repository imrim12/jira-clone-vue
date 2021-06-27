<template>
  <div class="my-draggable-list">
    <div class="my-draggable-list-header">
      <div
        v-for="(column, index) in data"
        :key="`draggable-header-column-${index}`"
        class="my-draggable-list-header-inner"
      >
        <slot name="header" :column="column">
          {{ column.title }}
        </slot>
      </div>
    </div>
    <div class="my-draggable-list-body">
      <div
        v-for="(column, index) in data"
        :key="`draggable-column-${column.id}`"
      >
        <MyDraggable
          v-bind="dragOptions"
          v-model="data[index].children"
          @change="$emit('change', data)"
          class="my-draggable-list-column"
          group="tasks"
        >
          <MyDraggableListItem
            v-for="item in column.children"
            :key="`draggable-item-${item.id}`"
            :title="item.title"
          >
            <slot :item="item"></slot>
          </MyDraggableListItem>
        </MyDraggable>
      </div>
    </div>
  </div>
</template>
<script>
// src\core\components\theme\draggable-list\src\index.vue
import { defineComponent } from '@vue/composition-api'
import { MyDraggable } from '@/core/components/plugins'
import MyDraggableListItem from './draggable-list-item.vue'
import { dev } from '@/core/utils/functions'

export default defineComponent({
  name: 'MyDraggableList',
  components: { MyDraggable, MyDraggableListItem },
  model: {
    prop: 'data',
    event: 'change',
  },
  props: {
    data: {
      type: Array,
      required: true,
      validator(val) {
        if (!val.every((item) => item.id && item.title && item.children)) {
          dev.warn(
            '[props] object "data" must at least have id, title and children (with id and title)'
          )
        }
        return true
      },
    },
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
      }
    },
  },
})
</script>

<style lang="scss">
.flip-list-move {
  transition: transform 0.5s;
}
</style>
