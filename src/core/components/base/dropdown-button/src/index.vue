<template>
  <div class="my-dropdown-button-wrapper">
    <button
      class="my-dropdown-button"
      :class="[
        type && `my-dropdown-button--${type}`,
        size && `my-dropdown-button--${size}`,
      ]"
      v-wave
    >
      <slot name="title">
        {{ title }}
      </slot>
    </button>
    <MyDropdown v-bind="$props">
      <button
        class="my-dropdown-button my-dropdown-button--square my-dropdown-button-target"
        :class="[
          type && `my-dropdown-button--${type}`,
          size && `my-dropdown-button--${size}`,
        ]"
        v-wave
      >
        <MyIcon icon="chevron-down" />
      </button>
      <MyDropdownMenu slot="dropdown">
        <div class="my-dropdown-inner">
          <slot></slot>
        </div>
      </MyDropdownMenu>
    </MyDropdown>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { Dropdown } from 'element-ui'

export default defineComponent({
  name: 'MyDropdownButton',
  extends: Dropdown,
  props: {
    title: String,
    trigger: {
      type: String,
      default: 'click',
    },
    // Button props
    type: {
      validator(value) {
        return ['primary', 'light'].includes(value)
      },
    },
    size: {
      validator(value) {
        return ['large', 'medium', 'small', 'mini'].includes(value)
      },
    },
  },
})
</script>
