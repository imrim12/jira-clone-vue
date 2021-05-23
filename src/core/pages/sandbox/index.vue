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
    <my-tooltip>
      <my-button type="primary" size="medium">
        Activate Tooltip
      </my-button>
      <template v-slot:body>
        <div> Tooltip and stuff {{ count }} </div>
      </template>
    </my-tooltip>
    <my-tooltip title="Hehheh tooltip title">
      <my-button type="primary" size="medium">
        Activate Tooltip
      </my-button>
    </my-tooltip>
    <my-popover>
      <my-button tooltip type="primary" size="medium">
        Activate Popover
      </my-button>
      <template v-slot:body>
        <div> Popover and stuff {{ count }} </div>
      </template>
    </my-popover>
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
