<template>
  <div v-cloak>
    <component
      :is="layout"
      :class="{
        dark: isDarkMode,
      }"
    >
      <router-view />
    </component>
    <transition name="fade" mode="out-in">
      <MyLoading v-if="isLoading" />
    </transition>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import {
  LayoutAuth,
  LayoutBlank,
  LayoutDefault,
  LayoutError,
  LayoutMobile,
  LayoutUnauth,
} from '@layouts'
// Loading component
import { MyLoading } from '@/core/components/layout'
import { camelCase, startCase } from 'lodash'
// App component
export default defineComponent({
  name: 'App',
  components: {
    LayoutAuth,
    LayoutBlank,
    LayoutDefault,
    LayoutError,
    LayoutMobile,
    LayoutUnauth,
    MyLoading,
  },
  provide() {
    return {
      loading: {
        on: () => {
          this.isLoading = true
        },
        off: () => {
          this.isLoading = false
        },
      },
    }
  },
  data() {
    return {
      isDarkMode: false,
      isLoading: false,
    }
  },
  computed: {
    layout() {
      return this.$route.meta.layout
        ? startCase(camelCase('Layout_' + this.$route.meta.layout)).replace(
            / /g,
            ''
          )
        : 'LayoutDefault'
    },
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = this.isDarkMode ? false : true
    },
  },
  created() {
    this.$bus.$on('toggleDarkMode', () => {
      this.toggleDarkMode()
    })
  },
})
</script>
