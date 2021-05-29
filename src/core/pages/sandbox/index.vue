<template>
  <div class="sandboxPageComponent">
    <my-button @click="isVisible = true">Show modal</my-button>
    <my-modal v-model="isVisible">
      Hehe
    </my-modal>
  </div>
</template>
<script>
export default {
  name: 'SandboxPage',
  beforeRouteEnter(to, from, next) {
    if (process.env.NODE_ENV === 'development') {
      next()
    } else {
      next({ name: 'dashboard' })
    }
  },
  data() {
    return {
      count: 0,
      isVisible: true,
    }
  },
  mounted() {
    setInterval(() => {
      this.count++
    }, 1000)
  },
}
</script>
