<template>
  <div class="dashboard-page">
    <h1>This is an dashboard page</h1>
    <button v-wave>
      Hehehe
    </button>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'DashboardPage',
  metaInfo() {
    return {
      titleTemplate: this.$t(this.$route.meta.title) + ' | %s',
    }
  },
})
</script>
