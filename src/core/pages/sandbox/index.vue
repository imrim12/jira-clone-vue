<template>
  <div class="sandboxPageComponent">
    <my-button type="primary" size="mini">
      Heehehehe
    </my-button>
    <my-button type="primary" size="small">
      Heehehehe
    </my-button>
    <my-button type="primary" size="medium">
      Heehehehe
    </my-button>
    <my-button type="light" size="large">
      Heehehehe
    </my-button>
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
}
</script>
