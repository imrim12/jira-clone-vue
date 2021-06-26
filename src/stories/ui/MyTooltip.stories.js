import { MyTooltip } from '@/core/components/base/tooltip'
import { MyButton } from '@/core/components/base/button'

const storyConfig = {
  title: 'UI Components/MyTippy/MyTooltip',
  component: MyTooltip,
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
  components: { MyTooltip, MyButton },
  template: `
    <my-tooltip v-bind="$props">
      <my-button>
        My tooltip
      </my-button>
      <template slot="body">
        This is a tooltip
      </template>
    </my-tooltip>
  `,
})
