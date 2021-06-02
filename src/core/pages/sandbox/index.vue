<template>
  <div class="sandboxPageComponent">
    <form @submit.prevent="count++">
      <my-input
        prefix="search"
        v-model="hehe"
        :validate="{
          pattern: '.{6,}',
          message: 'Please enter at least 5 letters',
        }"
      ></my-input>
    </form>
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
      hehe: '',
    }
  },
  mounted() {
    setInterval(() => {
      this.count++
    }, 1000)
  },
}
</script>
