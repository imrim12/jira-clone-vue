<template>
  <ul class="my-avatar-group" :class="[size ? `my-avatar-group--${size}` : '']">
    <li
      class="my-avatar-group-item"
      v-for="(avatar, index) in avatarList"
      :title="avatar.title"
      :key="'avatar-' + index"
      :style="{ marginLeft: index > 0 ? '-10px' : false }"
      @click="$emit('click', { ...avatar, index })"
    >
      <!-- Props of MyTooltip will be binded first, then the options prop -->
      <MyTooltip
        v-bind="$props.tooltip"
        :options="tooltip"
        :title="avatar.title"
        placement="bottom"
      >
        <MyAvatar :size="size" :src="avatar.src" />
        <template slot="body">
          <span class="my-avatar-group-item-title">
            {{ avatar.title }}
          </span>
        </template>
      </MyTooltip>
    </li>
  </ul>
</template>
<script>
// src\core\components\theme\avatar-group\src\index.vue
import { defineComponent } from '@vue/composition-api'
import { MyAvatar } from '../../avatar'
import { MyTooltip } from '../../tooltip'

export default defineComponent({
  name: 'MyAvatarGroup',
  components: { MyAvatar, MyTooltip },
  props: {
    displayLimit: {
      type: Number,
      default: 5,
    },
    size: {
      validator(value) {
        return ['large', 'medium', 'small', 'mini'].includes(value)
      },
    },
    data: {
      type: Array, // Array<{src: string | number, title: string}>
      default() {
        return []
      },
    },
    default: {
      type: Array,
      default() {
        return [
          // {
          //   src: 'user',
          //   title: 'Unassigned',
          // },
          // {
          //   src: 'plus',
          //   title: 'Add more user',
          // },
        ]
      },
    },
    tooltip: {
      type: Object,
      default() {
        return {
          arrow: false,
        }
      },
    },
  },
  computed: {
    leftOverData() {
      return this.displayLimit >= this.data.length
        ? 0
        : this.data.length - this.displayLimit
    },
    avatarList() {
      let finalData = JSON.parse(JSON.stringify(this.data))
      if (this.displayLimit < this.data.length) {
        const newData = JSON.parse(JSON.stringify(this.data))
        newData.splice(
          this.displayLimit - 1,
          newData.length - this.displayLimit
        )
        finalData = [
          ...newData,
          { src: this.leftOverData, title: `${this.leftOverData} more` },
        ]
      }
      return [...finalData, ...this.default]
    },
  },
})
</script>
