import { MyDropdown } from '@/core/components/base/dropdown'
import { MyDropdownItem } from '@/core/components/base/dropdown-item'

const storyConfig = {
  title: 'UI Components/MyTippy/MyDropdown',
  component: MyDropdown,
  //👇 Creates specific argTypes
  argTypes: {
    title: {
      control: 'text',
    },
    trigger: {
      control: {
        type: 'select',
        options: ['click', 'mouseover'],
      },
    },
    placement: {
      control: false,
    },
  },
}

export default storyConfig

export const tryAllOptions = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyDropdown, MyDropdownItem },
  template: `
    <my-dropdown v-bind="$props">
      <span class="text-gray">
        My text with dropdown
      </span>
      <template slot="body">
        <my-dropdown-item>
          My dropdown item 1
        </my-dropdown-item>
        <my-dropdown-item>
          My dropdown item 1
        </my-dropdown-item>
      </template>
    </my-dropdown>
  `,
})
