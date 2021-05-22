<template>
  <div class="dashboard-page">
    <h1>This is the project custom pages list page</h1>
    <router-view></router-view>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'ProjectPagesPage',
  metaInfo() {
    return {
      title: this.$route.params.slug,
      titleTemplate: this.$t(this.$route.meta.title) + ' | %s',
    }
  },
})
</script>
