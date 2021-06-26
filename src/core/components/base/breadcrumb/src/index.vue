<template functional>
  <div class="my-breadcrumb">
    <template v-for="(item, index) in props.data">
      <span :key="'breakcrumb-' + index">
        <router-link class="my-breadcrumb-link" :to="item.route">
          {{ item.label }}
        </router-link>
        <span v-if="index < props.data.length - 1" class="my-breadcrumb-slash">
          /
        </span>
      </span>
    </template>
  </div>
</template>
<script>
// src\core\components\theme\breadcrumb\src\index.vue
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'MyBreadcrumb',
  props: {
    data: {
      type: Array,
      default() {
        return [
          {
            label: 'Home',
            route: { path: '/' },
          },
        ]
      },
    },
  },
})
</script>
