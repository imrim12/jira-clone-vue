<template>
  <div class="sandboxPageComponent">
    <my-avatar
      width="300"
      height="400"
      src="https://images.pexels.com/photos/6293900/pexels-photo-6293900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ></my-avatar>
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
