<template>
  <div class="sandboxPageComponent">
    <my-dropdown-button v-bind="$props">
      My dropdown button
      <template slot="body">
        <my-dropdown-item>
          My dropdown item 1
        </my-dropdown-item>
        <my-dropdown-item>
          My dropdown item 1
        </my-dropdown-item>
      </template>
    </my-dropdown-button>
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
