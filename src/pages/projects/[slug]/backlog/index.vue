<template>
  <div class="dashboard-page">
    <h1>This is the project backlog page</h1>
    <router-view></router-view>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'ProjectBacklogPage',
})
</script>
