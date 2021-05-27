<template>
  <div class="sandboxPageComponent">
    <my-dropdown>
      Hello
      <template slot="body">
        <my-dropdown-item>
          So anyway
        </my-dropdown-item>
        <my-dropdown-item>
          Hỏny
        </my-dropdown-item>
      </template>
    </my-dropdown>
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
    }
  },
  mounted() {
    setInterval(() => {
      this.count++
    }, 1000)
  },
}
</script>
