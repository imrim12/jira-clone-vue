<template>
  <div class="default__layout">
    <MyNavbar />
    <div>
      <router-link class="text-primary hover:underline" to="/">
        Home
      </router-link>
      <router-link class="text-primary hover:underline" to="/about">
        About
      </router-link>
    </div>
    <slot />
  </div>
</template>

<script>
import { MyNavbar } from '@/core/components/layout'
export default {
  name: 'DefaultLayout',
  components: {
    MyNavbar,
  },
}
</script>
