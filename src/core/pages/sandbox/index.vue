<template>
  <div class="sandboxPageComponent">
    <my-dropdown-button title="Hehehhe">
      <my-dropdown-item command="a">Action 1</my-dropdown-item>
      <my-dropdown-item command="b">Action 2</my-dropdown-item>
      <my-dropdown-item command="c">Action 3</my-dropdown-item>
      <my-dropdown-item command="d" disabled>Action 4</my-dropdown-item>
      <my-dropdown-item command="e" divided>Action 5</my-dropdown-item>
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
