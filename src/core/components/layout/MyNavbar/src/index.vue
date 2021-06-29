<template>
  <div class="h-14 flex items-center justify-between px-3 shadow bg-white">
    <div class="flex items-center">
      <MyNavbarAppList />
      <MyNavbarLogo />
      <MyNavbarMenu />
    </div>
    <div class="flex items-center">
      <MyNavbarSearchBox />
      <MyNavbarUtilities />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'MyNavbar',
  components: {
    MyNavbarAppList: () => import('./MyNavbarAppList.vue'),
    MyNavbarLogo: () => import('./MyNavbarLogo.vue'),
    MyNavbarMenu: () => import('./MyNavbarMenu.vue'),
    MyNavbarSearchBox: () => import('./MyNavbarSearchBox.vue'),
    MyNavbarUtilities: () => import('./MyNavbarUtilities.vue'),
  },
  props: {},
  setup() {
    //
  },
})
</script>
