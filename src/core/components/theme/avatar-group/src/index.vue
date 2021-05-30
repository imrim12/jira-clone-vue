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
      type: Array,
      default() {
        return [
          {
            src: 'https://nguyenhuunguyeny.com/img/me/1.jpg',
            title: 'Nguyễn Hữu Nguyên Ý',
          },
          {
            src: 'https://nguyenhuunguyeny.com/img/me/2.JPG',
            title: 'Ý Nguyên Hữu Nguyễn',
          },
          {
            src: 'https://nguyenhuunguyeny.com/img/me/8.jpg',
            title: 'Nguyên Ý Hữu',
          },
          {
            src: 'https://nguyenhuunguyeny.com/img/me/1.jpg',
            title: 'Nguyễn Hữu Nguyên Ý',
          },
          {
            src: 'https://nguyenhuunguyeny.com/img/me/8.jpg',
            title: 'Nguyên Ý Hữu',
          },
          {
            src: 'https://nguyenhuunguyeny.com/img/me/1.jpg',
            title: 'Nguyễn Hữu Nguyên Ý',
          },
          {
            src: 'https://nguyenhuunguyeny.com/img/me/2.JPG',
            title: 'Ý Nguyên Hữu Nguyễn',
          },
          {
            src: 'https://nguyenhuunguyeny.com/img/me/8.jpg',
            title: 'Nguyên Ý Hữu',
          },
        ]
      },
    },
    default: {
      type: Array,
      default() {
        return [
          {
            src: 'user',
            title: 'Unassigned',
          },
          {
            src: 'plus',
            title: 'Add more user',
          },
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

<style lang="scss">
.my-avatar-group {
  --border-width: 3px;
  --avatar-size: 32px;
  display: flex;
  &-item {
    cursor: pointer;
    overflow: hidden;
    border-radius: 9999px;
    transition-duration: 300ms;
    background-color: var(--color-white);
    border: var(--border-width) solid var(--color-white);
    width: calc(var(--avatar-size) + var(--border-width) * 2);
    height: calc(var(--avatar-size) + var(--border-width) * 2);
    &:hover {
      background-color: var(--color-gray-100);
      border: var(--border-width) solid var(--color-gray-100);
      transform: translateY(-5px);
    }
    &-title {
      background-color: var(--color-primary-800);
      color: white;
      padding: 0 5px;
      font-weight: 500;
      font-size: 0.8rem;
      border-radius: 4px;
    }
  }
  &--large {
    --avatar-size: 42px;
    --border-width: 4px;
  }
  &--medium {
    --avatar-size: 32px;
    --border-width: 3px;
  }
  &--small {
    --avatar-size: 24px;
    --border-width: 2px;
  }
  &--mini {
    --avatar-size: 1rem;
    --border-width: 2px;
  }
}
</style>
