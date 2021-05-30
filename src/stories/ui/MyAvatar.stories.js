import { MyAvatar } from '@/core/components/theme/avatar'

const storyConfig = {
  title: 'UI Components/MyAvatar',
  component: MyAvatar,
  //👇 Creates specific argTypes
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    alt: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small', 'mini'],
      },
    },
    round: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export default storyConfig

export const allSizes = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyAvatar },
  data() {
    return {
      sizeOptions: argTypes.size.control.options,
    }
  },
  template: `
  <div class="text-center">
    <my-avatar
      style="margin-right: 1rem;"
      v-for="size in sizeOptions"
      v-bind="$props"
      v-bind:size="size"
    >
    </my-avatar>
  </div>
  `,
})
allSizes.args = {
  src: 'https://nguyenhuunguyeny.com/img/me/1.jpg',
}

export const tryAllOptions = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyAvatar },
  template: `
  <div class="text-center">
    <my-avatar v-bind="$props"></my-avatar>
  </div>
  `,
})
tryAllOptions.args = {
  src: 'https://nguyenhuunguyeny.com/img/me/1.jpg',
  size: 'medium',
}
