import { MyPopover } from '@/core/components/theme/popover'
import { MyButton } from '@/core/components/theme/button'

const storyConfig = {
  title: 'UI Components/MyTippy/MyPopover',
  component: MyPopover,
  //👇 Creates specific argTypes
  argTypes: {
    title: {
      control: 'text',
    },
    placement: {
      control: {
        type: 'select',
        options: [
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'right',
          'right-start',
          'right-end',
          'left',
          'left-start',
          'left-end',
          'auto',
          'auto-start',
          'auto-end',
        ],
      },
    },
    trigger: {
      control: {
        type: 'select',
        options: ['click', 'mouseover'],
      },
    },
  },
}

export default storyConfig

export const tryAllOptions = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyPopover, MyButton },
  template: `
    <my-popover v-bind="$props">
      <my-button>
        My popover
      </my-button>
      <template slot="body">
        This is a popover
      </template>
    </my-popover>
  `,
})
