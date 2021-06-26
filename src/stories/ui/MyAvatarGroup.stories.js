import { MyAvatarGroup } from '@/core/components/base/avatar-group'

const storyConfig = {
  title: 'UI Components/MyAvatarGroup',
  component: MyAvatarGroup,
  //👇 Creates specific argTypes
  argTypes: {
    displayLimit: {
      control: {
        type: 'number',
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small', 'mini'],
      },
    },
    data: {
      control: {
        type: 'array',
      },
    },
    default: {
      control: {
        type: 'array',
      },
    },
    tooltip: {
      control: {
        type: 'object',
      },
    },
  },
}

export default storyConfig

export const allOptions = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyAvatarGroup },
  template: `
  <div class="text-center">
    <my-avatar-group v-bind="$props"></my-avatar-group>
  </div>
  `,
})
allOptions.args = {
  size: 'medium',
  data: [
    {
      src: 'https://nguyenhuunguyeny.com/img/me/1.jpg',
      title: 'Nguyen Huu Nguyen Y',
    },
  ],
  default: [
    {
      src: 'user',
      title: 'Unassigned',
    },
    {
      src: 'plus',
      title: 'Add more user',
    },
  ],
  tooltip: {
    arrow: false,
    theme: 'primary',
  },
}
