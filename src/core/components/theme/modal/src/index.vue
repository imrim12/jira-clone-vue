<template>
  <transition name="fade" mode="out-in">
    <div
      v-if="isVisible"
      class="my-modal"
      :class="[
        fullscreen ? `my-modal--fullscreen` : '',
        !size ? '' : fullscreen ? '' : `my-modal--${size}`,
      ]"
    >
      <transition name="slide-up-fade" mode="out-in" appear>
        <div class="my-modal-container" v-if="isVisible">
          <div class="my-modal-header" :style="styleHeader">
            <slot name="header">
              <div
                style="display: flex; justify-content: space-between; align-items: center; width: 100%"
              >
                <div>
                  <slot name="header-start">
                    {{ title }}
                  </slot>
                </div>
                <div>
                  <slot name="header-end">
                    <MyButtonIcon
                      square
                      type="white"
                      icon="time"
                      @click="$emit('change', false)"
                    />
                  </slot>
                </div>
              </div>
            </slot>
          </div>
          <div class="my-modal-body" :style="styleBody">
            <slot></slot>
          </div>
          <template v-if="hasFooterSlot">
            <div class="my-modal-footer" :style="styleFooter">
              <slot name="footer">
                {{ footer }}
              </slot>
            </div>
          </template>
        </div>
      </transition>
      <div class="my-modal-backdrop"></div>
    </div>
  </transition>
</template>
<script>
// src\core\components\theme\modal\src\index.vue
import { defineComponent } from '@vue/composition-api'
import { MyButtonIcon } from '../../button-icon'

export default defineComponent({
  name: 'MyModal',
  components: { MyButtonIcon },
  model: {
    prop: 'isVisible',
    event: 'change',
  },
  props: {
    id: {
      type: String,
      default: 'my-modal',
    },
    title: {
      type: String,
      default: 'Modal title',
    },
    footer: {
      type: String,
    },
    fullscreen: {
      type: Boolean,
      default: false,
    },
    size: {
      validator(value) {
        return ['large', 'medium', 'small', 'mini'].includes(value)
      },
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
    styleHeader: Object,
    styleBody: Object,
    styleFooter: Object,
  },
  computed: {
    hasFooterSlot() {
      return !!this.$slots.footer
    },
  },
  created() {
    this.$root.$on('my-modal-show', (id) => {
      if (id === this.id) {
        this.$emit('change', true)
        this.$nextTick(() => {
          this.$emit('my-modal-on')
        })
      }
    })
    this.$root.$on('my-modal-hide', (id) => {
      if (id === this.id) {
        this.$emit('change', false)
        this.$nextTick(() => {
          this.$emit('my-modal-off')
        })
      }
    })
  },
  beforeDestroy() {
    this.$root.$on('my-modal-show')
    this.$root.$on('my-modal-hide')
  },
})
</script>
