<template>
  <div class="sandboxPageComponent">
    <my-button-icon type="primary" size="large" icon="plus">OK</my-button-icon>
    <MyIcon icon="bell" />
  </div>
</template>
<script>
import { MyIcon } from '@theme'
export default {
  name: 'SandboxPage',
  beforeRouteEnter(to, from, next) {
    if (process.env.NODE_ENV === 'development') {
      next()
    } else {
      next({ name: 'dashboard' })
    }
  },
  components: {
    MyIcon,
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
