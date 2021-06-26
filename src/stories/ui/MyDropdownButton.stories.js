import { MyDropdownButton } from '@/core/components/base/dropdown-button'
import { MyDropdownItem } from '@/core/components/base/dropdown-item'
import { types as typeList } from '../assets/typeList'

const storyConfig = {
  title: 'UI Components/MyTippy/MyDropdownButton',
  component: MyDropdownButton,
  //👇 Creates specific argTypes
  argTypes: {
    title: {
      control: 'text',
    },
    placement: {
      control: false,
    },
    trigger: {
      control: {
        type: 'select',
        options: ['click', 'mouseover'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: typeList,
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small', 'mini'],
      },
    },
  },
}

export default storyConfig

export const tryAllOptions = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyDropdownButton, MyDropdownItem },
  template: `
    <my-dropdown-button v-bind="$props">
      My dropdown button
      <template slot="body">
        <my-dropdown-item>
          My dropdown item 1
        </my-dropdown-item>
        <my-dropdown-item>
          My dropdown item 1
        </my-dropdown-item>
      </template>
    </my-dropdown-button>
  `,
})
