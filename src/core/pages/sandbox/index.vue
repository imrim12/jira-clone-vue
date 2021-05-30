<template>
  <div class="sandboxPageComponent">
    <my-avatar-group></my-avatar-group>
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
